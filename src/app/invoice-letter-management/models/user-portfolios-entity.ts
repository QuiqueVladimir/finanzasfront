export class UserPortfolio {
  id: number;
  userId: number;
  portfolioId: number;
  status: string;
  creatingDate: string;
  deletedDate: string | null;
  constructor(userPortfolio: {
    id: number,
    userId: number,
    portfolioId: number,
    status: string,
    creatingDate: string,
    deletedDate: string | null
  }) {
    this.id = userPortfolio.id;
    this.userId = userPortfolio.userId;
    this.portfolioId = userPortfolio.portfolioId;
    this.status = userPortfolio.status;
    this.creatingDate = userPortfolio.creatingDate;
    this.deletedDate = userPortfolio.deletedDate;
  }
}
