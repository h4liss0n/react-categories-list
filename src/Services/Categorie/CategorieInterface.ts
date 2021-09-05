export interface ISubscription {
  name: string;
  price: number;
}

export interface ICategorie {
  id: string;
  name: string;
  description: string;
  categories: string[];
  subscriptions: ISubscription[];
}
