export class User {
  private _email: string = '';
  private _password: string = '';
  private _phone: string = '';

  constructor(
    public readonly id: string,
    public name: string,
    email: string,
    password: string,
    phone: string
  ) {
    this.setEmail(email);
    this.setPassword(password);
    this.setPhone(phone);
  }

  private setEmail(email: string) {
    if (!email.includes("@")) {
      throw new Error("Invalid email");
    }
    this._email = email;
  }

  private setPassword(password: string) {
    if (password.length < 6) {
      throw new Error("Password too short");
    }
    this._password = password;
  }

  private setPhone(phone: string) {
    if (phone.length !== 10) {
      throw new Error("Invalid phone number");
    }
    this._phone = phone;
  }

  get email() {
    return this._email;
  }

  get phone() {
    return this._phone;
  }
}