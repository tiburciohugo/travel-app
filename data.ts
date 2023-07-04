export const colors = {
  blue: {
    1: "#759EB8",
    2: "#7392B7",
    3: "#B3C5D7",
    4: "#427AA1",
    5: "#427AA1",
    6: "#2E5A77",
    7: "#06192b",
    8: "#03045E",
  },
  orange: {
    1: "#E55402",
  },
  red: {
    1: "#880D1E",
    2: "#DD2D4A",
    3: "#F26A8D",
    4: "#C62E65",
  },
  green: {
    1: "#1B998B",
    2: "#313628",
    3: "#2D2D",
  },
  yellow: {
    1: "#ECA400",
    2: "#FFC857",
    3: "#FFED65",
  },
};

export const globalStyles = {
  dropShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
};

export const categories = [
  {
    id: 1,
    name: "Locais",
    icon: "restaurant",
  },
  {
    id: 2,
    name: "Cafes",
    icon: "local-cafe",
  },
  {
    id: 3,
    name: "Hotéis",
    icon: "hotel",
  },
  {
    id: 4,
    name: "Postos",
    icon: "local-gas-station",
  },
  {
    id: 5,
    name: "Lojas",
    icon: "shopping-bag",
  },
  {
    id: 6,
    name: "Parques",
    icon: "park",
  },
  {
    id: 7,
    name: "Cinemas",
    icon: "local-movies",
  },
  {
    id: 8,
    name: "Aeroportos",
    icon: "local-airport",
  },
];

export const locations = [
  {
    id: 1,
    name: "Rio de Janeiro",
    image:
      "https://tools-images.services.cvc.com.br/resize?width=400&height=400&url=https://almundo-com-res.cloudinary.com/image/upload/v1/CVC/destinos/nacional/RJ/RiodeJaneiro2.jpg&type=auto&quality=70",
    price: 1200.0,
    departureDate: "13 Aug 2023",
    returnDate: "27 Aug 2023",
  },
  {
    id: 2,
    name: "Salvador",
    image:
      "https://www.visitbrasil.com/wp-content/uploads/2021/06/GettyImages-1244352030-1.jpg",
    price: 900.0,
    departureDate: "1 Sep 2023",
    returnDate: "15 Sep 2023",
  },
  {
    id: 3,
    name: "Belo Horizonte",
    image:
      "https://www.visitbrasil.com/wp-content/uploads/2021/06/SE_BeloHZ0199-1024x682.jpg",
    price: 800.0,
    departureDate: "20 Sep 2023",
    returnDate: "4 Oct 2023",
  },
  {
    id: 4,
    name: "Curitiba",
    image:
      "https://www.visitbrasil.com/wp-content/uploads/2021/06/GettyImages-471055457.jpg",
    price: 700.0,
    departureDate: "10 Oct 2023",
    returnDate: "24 Oct 2023",
  },
  {
    id: 5,
    name: "Recife",
    image:
      "https://www.visitbrasil.com/wp-content/uploads/2021/06/GettyImages-1162468341.jpg",
    price: 1100.0,
    departureDate: "3 Nov 2023",
    returnDate: "17 Nov 2023",
  },
  {
    id: 6,
    name: "Porto Alegre",
    image:
      "https://www.visitbrasil.com/wp-content/uploads/2021/06/GettyImages-1211696001-1-1024x732.jpg",
    price: 950.0,
    departureDate: "23 Nov 2023",
    returnDate: "7 Dec 2023",
  },
  {
    id: 7,
    name: "Fortaleza",
    image:
      "https://www.visitbrasil.com/wp-content/uploads/2021/06/GettyImages-964872010-1024x731.jpg",
    price: 1050.0,
    departureDate: "15 Dec 2023",
    returnDate: "29 Dec 2023",
  },
  {
    id: 8,
    name: "Manaus",
    image:
      "https://www.visitbrasil.com/wp-content/uploads/2021/06/NO_Manaus0746-1-1024x682.jpg",
    price: 1200.0,
    departureDate: "8 Jan 2024",
    returnDate: "22 Jan 2024",
  },
  {
    id: 9,
    name: "Natal",
    image:
      "https://www.visitbrasil.com/wp-content/uploads/2021/06/NE_Natal0157.jpg",
    price: 1150.0,
    departureDate: "1 Feb 2024",
    returnDate: "15 Feb 2024",
  },
  {
    id: 10,
    name: "Brasília",
    image:
      "https://www.visitbrasil.com/wp-content/uploads/2021/06/CO_Brasilia2019-1-1024x684.jpg",
    price: 900.0,
    departureDate: "23 Feb 2024",
    returnDate: "9 Mar 2024",
  },
];

export const resorts = [
  {
    name: "Sunrise Hotel",
    location: { city: "Rio de Janeiro", state: "RJ" },
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 4.3,
    price: 450.0,
  },
  {
    name: "Seaside Hotel",
    location: { city: "Salvador", state: "BA" },
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 3.9,
    price: 320.0,
  },
  {
    name: "Green Mountain Hotel",
    location: { city: "Belo Horizonte", state: "MG" },
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 4.7,
    price: 510.0,
  },
  {
    name: "Songbird Corner Hotel",
    location: { city: "Curitiba", state: "PR" },
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 4.1,
    price: 280.0,
  },
  {
    name: "Beautiful Beach Hotel",
    location: { city: "Recife", state: "PE" },
    image:
      "https://images.unsplash.com/photo-1598598795009-f80c5072e665?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    rating: 4.4,
    price: 380.0,
  },
  {
    name: "Blue Sky Hotel",
    location: { city: "Porto Alegre", state: "RS" },
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    rating: 3.8,
    price: 340.0,
  },
  {
    name: "Wonderful View Hotel",
    location: { city: "Fortaleza", state: "CE" },
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=898&q=80",
    rating: 4.5,
    price: 430.0,
  },
  {
    name: "Tropical Garden Hotel",
    location: { city: "Manaus", state: "AM" },
    image:
      "https://plus.unsplash.com/premium_photo-1678286769630-4ea3d6878dfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 4.2,
    price: 370.0,
  },
  {
    name: "Sand Point Hotel",
    location: { city: "Natal", state: "RN" },
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
    rating: 4.0,
    price: 410.0,
  },
  {
    name: "Beautiful Stone Hotel",
    location: { city: "Brasília", state: "DF" },
    image:
      "https://images.unsplash.com/photo-1544124499-58912cbddaad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    rating: 4.6,
    price: 480.0,
  },
];
