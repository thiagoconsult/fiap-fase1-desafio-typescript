import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Publisher } from "./publisherEntity";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column({ nullable: true })
  isbn: string;

  @Column({ nullable: true })
  anoPublicacao: Date;

  @ManyToOne(() => Publisher, (publisher) => publisher.books, {
    onDelete: "SET NULL",
    cascade: false,
  })
  publisher: Publisher;

  constructor(
    title: string,
    author: string,
    isbn: string,
    anoPublicacao: Date,
    publisher: Publisher
  ) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.anoPublicacao = anoPublicacao;
    this.publisher = publisher;
  }
}
