export class Post {
  constructor() {
    this.id = undefined;
    this.postTitle = undefined;
    this.photoPath = undefined;
    this.isActive = undefined;
    this.CreatedOn = undefined;
  }
  id: number | undefined;
  postTitle: string | undefined;
  photoPath: string | undefined;
  isActive: number | undefined;
  CreatedOn: string | undefined;
}
