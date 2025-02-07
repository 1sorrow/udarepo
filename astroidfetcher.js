const fetch = require("node-fetch");

const API_KEY = "YOUR_NASA_API_KEY";

const today = new Date().toISOString().split("T")[0];
const sevenDaysLater = new Date();
sevenDaysLater.setDate(sevenDaysLater.getDate() + 7);
const endDate = sevenDaysLater.toISOString().split("T")[0];
