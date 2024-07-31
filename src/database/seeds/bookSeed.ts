import type { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
    await knex('books').del();

    await knex('books').insert([
        { id: 1, title: 'Book1', description: 'Desc1', published_date: '2000-01-01', author_id: 1 },
        { id: 2, title: 'Book2', description: 'Desc2', published_date: '2005-05-15', author_id: 2 },
        { id: 3, title: 'Book3', description: 'Desc3', published_date: '2010-12-12', author_id: 3 }
    ]);
}
