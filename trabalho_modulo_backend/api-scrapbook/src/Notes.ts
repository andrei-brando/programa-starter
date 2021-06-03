class Notes {
  public id: string;
  public description: string;
  public details: string;

  constructor (id: string, description: string, details: string) {
    this.id = id;
    this.description = description;
    this.details = details;
  }
}

export default Notes;