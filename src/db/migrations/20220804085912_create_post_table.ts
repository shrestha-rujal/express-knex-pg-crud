import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("post", (table) => {
    table.increments("id");
    table.string("title").notNullable();
    table.string("content");
    table.integer("user_account_id").unsigned().notNullable();
    table
      .foreign("user_account_id")
      .references("id")
      .inTable("user_account")
      .onDelete("SET NULL");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("post");
}
