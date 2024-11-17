export class Portfolio{
  id: number;
  name: string;
  currency: string;
  numInvoices: number;
  createdDate: string;
  discountDate: string;
  constructor(portfolio: {
    id: number,
    name: string,
    currency: string,
    numInvoices: number,
    createdDate: string,
    discountDate: string
  }) {
    this.id = portfolio.id;
    this.name = portfolio.name;
    this.currency = portfolio.currency;
    this.numInvoices = portfolio.numInvoices;
    this.createdDate = portfolio.createdDate;
    this.discountDate = portfolio.discountDate;
  }
}
