const Record = require("../models/record.model");

const createRecord = async (req, res) => {
  try {
    const record = await Record.create({
      ...req.body,
      createdBy: req.user.id
    });
    res.status(201).json(record);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const getRecords = async (req, res) => {
  try {
    const { type, category, startDate, endDate, search, page = 1, limit = 10 } = req.query;

    let filter = { isDeleted: false };

    if (type) filter.type = type;
    if (category) filter.category = category;

    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    if (search) {
      filter.$or = [
        { note: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } }
      ];
    }

    const skip = (page - 1) * limit;
    const records = await Record.find(filter)
      .sort({ date: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Record.countDocuments(filter);

    res.json({
      records,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateRecord = async (req, res) => {
  try {
    const record = await Record.findOneAndUpdate(
      { _id: req.params.id, isDeleted: false },
      req.body,
      { new: true }
    );

    if (!record) return res.status(404).json({ msg: "Record not found" });

    res.json(record);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const deleteRecord = async (req, res) => {
  try {
    const record = await Record.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true, deletedAt: new Date() },
      { new: true }
    );

    if (!record) return res.status(404).json({ msg: "Record not found" });

    res.json({ msg: "Record deleted successfully (soft delete)" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { deleteRecord, updateRecord, getRecords, createRecord };