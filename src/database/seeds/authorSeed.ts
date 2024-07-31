import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex('authors').del();

    await knex('authors').insert([
        { id: 1, name: 'name1', bio: 'Bio1', birthdate: '1970-01-01' },
        { id: 2, name: 'name2', bio: 'Bio2', birthdate: '1980-02-02' },
        { id: 3, name: 'name2', bio: 'Bio3', birthdate: '1990-03-03' }
    ]);
}
