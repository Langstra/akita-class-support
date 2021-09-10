export class Post {
  id?: number | string;
  title?: string;

  constructor({id, title}: Partial<Post>) {
    this.id = id;
    this.title = title;
  }

  get all() {
    return `${this.id} - ${this.title}`;
  }
}
