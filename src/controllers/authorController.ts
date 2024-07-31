import { Request, Response } from 'express';
import knex from '../database/index'

export const getAuthors = async (req: Request, res: Response) => {
    try {
        const authors = await knex('authors').select('*');
        res.json(authors);
    } catch (error) {
        res.status(500).json({ message: 'Error Fetching!' });
    }
};

export const getAuthorById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const authors = await knex('authors').where({ id }).first();
        if (!authors) {
            return res.status(404).json({ message: 'Author Not Found!' });
        }
        res.json(authors);
    } catch (error) {
        res.status(500).json({ message: 'Error Fetching!' });
    }
};

export const createAuthor = async (req: Request, res: Response) => {
    const { name, bio, birthdate } = req.body;
    try {
        const [id] = await knex('authors').insert({
            name,
            bio,
            birthdate
        });
        res.json({ id });
    } catch (error) {
        res.status(500).json({ message: 'Error Creating Author!' });
    }
};

export const updateAuthor = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates = req.body;
    await knex('authors').where({ id }).update(updates);
    res.status(204).end();
};

export const deleteAuthor = async (req: Request, res: Response) => {
    const { id } = req.params;
    await knex('authors').where({ id }).del();
    res.status(204).end();
};

export const getBooksByAuthorId = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const books = await knex('books').where({ author_id: id }).select('*');
        if (books.length === 0) {
            return res.status(404).json({ message: 'No Book Found!' });
        }
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error Fetching Books!' });
    }
};
