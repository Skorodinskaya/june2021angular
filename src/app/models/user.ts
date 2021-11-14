interface Geo {
  lat: string,
  lng: string
}

interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address
}
