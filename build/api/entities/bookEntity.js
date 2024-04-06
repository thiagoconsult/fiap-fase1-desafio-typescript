"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const typeorm_1 = require("typeorm");
const publisherEntity_1 = require("./publisherEntity");
let Book = class Book {
    constructor(title, author, isbn, anoPublicacao, publisher) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.anoPublicacao = anoPublicacao;
        this.publisher = publisher;
    }
};
exports.Book = Book;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Book.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Book.prototype, "isbn", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Book.prototype, "anoPublicacao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => publisherEntity_1.Publisher, (publisher) => publisher.books, {
        onDelete: "SET NULL",
        cascade: false,
    }),
    __metadata("design:type", publisherEntity_1.Publisher)
], Book.prototype, "publisher", void 0);
exports.Book = Book = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String, String, Date,
        publisherEntity_1.Publisher])
], Book);
