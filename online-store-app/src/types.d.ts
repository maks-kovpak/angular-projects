type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;

  /** Path to image*/
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type UserData = {
  login: string;
  password: string;
};
