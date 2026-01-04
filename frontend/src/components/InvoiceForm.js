import API from "../services/api";
import { useState } from "react";

export default function InvoiceForm() {
  const [invoice, setInvoice] = useState({});

  const submit = async () => {
    if (!invoice.invoiceNumber || !invoice.clientName) {
      alert("Fill all fields");
      return;
    }
    await API.post("/invoices", invoice);
    alert("Invoice added");
  };

  return (
    <div>
      <input placeholder="Invoice Number" onChange={e => setInvoice({...invoice, invoiceNumber:e.target.value})} />
      <input placeholder="Client Name" onChange={e => setInvoice({...invoice, clientName:e.target.value})} />
      <input type="date" onChange={e => setInvoice({...invoice, date:e.target.value})} />
      <input placeholder="Amount" onChange={e => setInvoice({...invoice, amount:e.target.value})} />
      <select onChange={e => setInvoice({...invoice, status:e.target.value})}>
        <option>Paid</option>
        <option>Unpaid</option>
        <option>Pending</option>
      </select>
      <button onClick={submit}>Save</button>
    </div>
  );
}
