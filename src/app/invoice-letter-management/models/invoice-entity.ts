export class Invoice {
  id: number;
  portfolioId: number;
  userId: number;
  invoiceNumber: string;
  client: string;
  amount: number;
  dueDate: string;
  issueDate: string;
  currency: string;
  rateType: string;
  discountRate: number;
  constructor(invoice: {
    id: number,
    portfolioId: number,
    userId: number,
    invoiceNumber: string,
    client: string,
    amount: number,
    dueDate: string,
    issueDate: string,
    currency: string,
    rateType: string,
    discountRate: number
  }) {
    this.id = invoice.id;
    this.portfolioId = invoice.portfolioId;
    this.userId = invoice.userId;
    this.invoiceNumber = invoice.invoiceNumber;
    this.client = invoice.client;
    this.amount = invoice.amount;
    this.dueDate = invoice.dueDate;
    this.issueDate = invoice.issueDate;
    this.currency = invoice.currency;
    this.rateType = invoice.rateType;
    this.discountRate = invoice.discountRate;
  }
}
