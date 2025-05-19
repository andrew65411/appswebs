export class Post {
  constructor(
    public id: string,
    public title: string,
    public summary: string,
    public content: string,
    public views: number,
    public likes: number,
    public image: string
  ) {}
}
