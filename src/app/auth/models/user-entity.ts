export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  constructor(user: {
    id: number,
    name: string,
    username: string,
    email: string,
    password: string
  }) {
    this.id = user.id;
    this.name = user.name;
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
  }
}
