import {IProduct} from "../models/product";

export const products: IProduct[] = [
  {
    id: 1,
    title: 'Партнерский',
    price: 5900,
    period: 12,
    message_limit: 0
  },
  {
    id: 2,
    title: 'Базовый',
    price: 15000,
    period: 12,
    message_limit: 2000
  },
  {
    id: 3,
    title: 'Продвинутый',
    price: 35000,
    period: 12,
    message_limit: 5000
  },
  {
    id: 4,
    title: 'Оптимальный',
    price: 60000,
    period: 12,
    message_limit: 10000
  },
];
