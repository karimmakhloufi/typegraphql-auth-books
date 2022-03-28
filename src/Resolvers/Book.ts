import { Resolver, Query } from "type-graphql";
import { Book } from "../Entities/Book";

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

@Resolver(() => Book)
export class BookResolver {
  @Query(() => [Book])
  async books() {
    return books;
  }
}
