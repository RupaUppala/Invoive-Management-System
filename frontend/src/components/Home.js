import API from "../services/api";
import { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const [invoices, setInvoices] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    API.get("/invoices").then(res => setInvoices(res.data));
  }, []);

  const filtered = filter
    ? invoices.filter(i => i.status === filter)
    : invoices;

  return (
    <div className="home-container">
      <div className="home-header">
        <h2>Invoices</h2>

        <select
          className="filter-select"
          onChange={e => setFilter(e.target.value)}
        >
          <option value="">All</option>
          <option>Paid</option>
          <option>Unpaid</option>
          <option>Pending</option>
        </select>
      </div>

      <div className="invoice-list">
        {filtered.map(inv => (
          <div className="invoice-card" key={inv.id}>
            <div className="invoice-info">
              <span className="invoice-number">
                Invoice #{inv.invoiceNumber}
              </span>
              <span className="invoice-client">
                {inv.clientName}
              </span>
            </div>

            <span className={`status ${inv.status}`}>
              {inv.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
