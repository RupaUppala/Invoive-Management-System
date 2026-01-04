const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const invoiceRoutes = require("./routes/invoices");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/invoices", invoiceRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
