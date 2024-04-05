import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Publisher } from "./publisherEntity";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: number;

  @Column({ nullable: true })
  isbn: string;

  @Column({ nullable: true })
  anoPublicacao: Date;

  @ManyToOne(() => Publisher, (publisher) => publisher.books, {
    onDelete: "SET NULL",
    cascade: false,
  })
  publisher: Publisher;
}
