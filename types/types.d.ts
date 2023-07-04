export type RootStackParamList = {
  Welcome: undefined;
  Dashboard: undefined;
};

export type Location = {
  name: string;
  image: string;
  price: number;
  departureDate: string;
  returnDate: string;
};

export type Resort = {
  name: string;
  location: { city: string; state: string };
  image: string;
  rating: number;
  price: number;
};
