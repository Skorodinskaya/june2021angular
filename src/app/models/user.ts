export interface User{
  id: number,
  name: string,
  email: string,
  username: string,
  address: {
    street: string,
    zipcode: string
  }
}
