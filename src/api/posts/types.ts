import { type Schema } from 'amplify/data/resource';

export type User = Schema['User']['type'];

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
