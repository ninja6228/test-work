export interface IPost {
  body: string;
  id: number;
  img: string;
  like?: boolean;
  title: string;
  userId: number;
}

export interface RootState {
  posts: {
    data: IPost[]
  }
}