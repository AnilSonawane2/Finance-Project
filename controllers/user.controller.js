const User = require("../models/user.model");

const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const updateUserRole = async (req, res) => {
  const { role } = req.body;

  const user = await User.findByIdAndUpdate(
    req.params.id,
    { role },
    { new: true }
  );

  res.json(user);
};

const toggleStatus = async (req, res) => {
  const user = await User.findById(req.params.id);
  user.isActive = !user.isActive;
  await user.save();

  res.json(user);
};

module.exports = { toggleStatus, updateUserRole, getUsers };