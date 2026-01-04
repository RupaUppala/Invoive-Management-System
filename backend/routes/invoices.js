const express = require("express");
const db = require("../db/database");

const router = express.Router();

// Create invoice
router.post("/", (req, res) => {
  const { invoiceNumber, clientName, date, amount, status } = req.body;

  db.run(
    `INSERT INTO invoices VALUES (NULL, ?, ?, ?, ?, ?)`,
    [invoiceNumber, clientName, date, amount, status],
    function (err) {
      if (err) return res.status(400).json(err);
      res.json({ id: this.lastID });
    }
  );
});

// Get all invoices
router.get("/", (req, res) => {
  db.all(`SELECT * FROM invoices`, [], (err, rows) => {
    res.json(rows);
  });
});

// Update invoice
router.put("/:id", (req, res) => {
  const { invoiceNumber, clientName, date, amount, status } = req.body;

  db.run(
    `UPDATE invoices SET invoiceNumber=?, clientName=?, date=?, amount=?, status=? WHERE id=?`,
    [invoiceNumber, clientName, date, amount, status, req.params.id],
    () => res.json({ message: "Updated" })
  );
});

// Delete invoice
router.delete("/:id", (req, res) => {
  db.run(`DELETE FROM invoices WHERE id=?`, [req.params.id], () =>
    res.json({ message: "Deleted" })
  );
});

module.exports = router;
