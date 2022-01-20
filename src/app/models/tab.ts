export class Tab {
  private id: string;
  private title: string;

  constructor() {
    this.id = `${Math.random()}`;
    this.title = '';
  }

  public getId(): string {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }
}
