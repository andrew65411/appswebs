export class Knowledge {
  constructor(
    public id: string,
    public title: string,
    public urlToImage: string,
    public summary: string,
    public content: string = ''
  ) {}
}
