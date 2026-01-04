const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./invoices.db", (err) => {
  if (err) console.log(err);
  else console.log("SQLite connected");
});

// Users table
db.run(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
)`);

// Invoices table
db.run(`
CREATE TABLE IF NOT EXISTS invoices (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  invoiceNumber TEXT NOT NULL,
  clientName TEXT NOT NULL,
  date TEXT NOT NULL,
  amount REAL NOT NULL,
  status TEXT NOT NULL
)`);

module.exports = db;
