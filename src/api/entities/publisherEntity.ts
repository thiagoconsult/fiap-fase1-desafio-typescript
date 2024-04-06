import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Book } from "./bookEntity";

@Entity()
export class Publisher {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @OneToMany(() => Book, (book) => book.publisher, {
    onDelete: "SET NULL",
    cascade: false,
    nullable: true,
  })
  books: Book[];

  constructor(name: string, books: Book[]) {
    this.name = name;
    this.books = books;
  }
}
