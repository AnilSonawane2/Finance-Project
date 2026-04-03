const dashboardService = require("../services/dashboard.service");

const getDashboard = async (req, res) => {
  const data = await dashboardService.getSummary();
  res.json(data);
};

module.exports = { getDashboard };