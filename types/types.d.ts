import { Resort } from 'src/types/types';
import { locations } from './../data';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Dashboard: undefined;
  Locations: undefined;
  Resorts: undefined;
  Profile: undefined;
  Settings: undefined;
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
