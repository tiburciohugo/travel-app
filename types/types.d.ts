export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Dashboard: undefined;
  Locations: undefined;
  Resorts: undefined;
  Profile: undefined;
  Settings: undefined;
  MyTabs:
    | { screen: "Home" }
    | { screen: "Dashboard" }
    | { screen: "Locations" }
    | { screen: "Resorts" };
  LocationDetails: { locationId: string };
  ResortDetails: { resortId: string };
};

export type BottomTabParamList = {
  Home: undefined;
  Dashboard: undefined;
  Locations: undefined;
  Resorts: undefined;
};

export type Location = {
  id: string;
  name: string;
  image: string;
  price: number;
  departureDate: string;
  returnDate: string;
  description: string;
};

export type Resort = {
  id: string;
  name: string;
  location: { city: string; state: string };
  image: string;
  rating: number;
  price: number;
};
