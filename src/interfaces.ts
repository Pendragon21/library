export interface IBook {
  name: string;
  author: string;
  year: number;

}

export interface IBookFormProps {
  addBookHandler: (newBook: IBook) => void;
  setShowForm: (showForm: boolean) => void;
}

export class Book implements IBook {
  constructor(name:string, author:string, year:number) {
    this.name = name;
    this.author = author;
    this.year = year;
  }

  name: string;
  author: string;
  year: number;
}
