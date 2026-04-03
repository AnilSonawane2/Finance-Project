const Record = require("../models/record.model");

const getSummary = async () => {
  const commonMatch = { isDeleted: false };

  const income = await Record.aggregate([
    { $match: { ...commonMatch, type: "income" } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

  const expense = await Record.aggregate([
    { $match: { ...commonMatch, type: "expense" } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

  const categoryWise = await Record.aggregate([
    { $match: commonMatch },
    { $group: { _id: { type: "$type", category: "$category" }, total: { $sum: "$amount" } } },
    { $sort: { total: -1 } }
  ]);

  const recentActivity = await Record.find(commonMatch)
    .sort({ date: -1 })
    .limit(5)
    .populate("createdBy", "name");

  // Monthly trends for the last 6 months
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  const monthlyTrends = await Record.aggregate([
    { $match: { ...commonMatch, date: { $gte: sixMonthsAgo } } },
    {
      $group: {
        _id: {
          year: { $year: "$date" },
          month: { $month: "$date" },
          type: "$type"
        },
        total: { $sum: "$amount" }
      }
    },
    { $sort: { "_id.year": 1, "_id.month": 1 } }
  ]);

  return {
    summary: {
      totalIncome: income[0]?.total || 0,
      totalExpense: expense[0]?.total || 0,
      netBalance: (income[0]?.total || 0) - (expense[0]?.total || 0)
    },
    categoryWise,
    recentActivity,
    monthlyTrends
  };
};

module.exports = { getSummary };