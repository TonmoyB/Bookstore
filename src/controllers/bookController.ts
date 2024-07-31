import { Request, Response } from 'express';
import knex from '../database/index'

export const getBooks = async (req: Request, res: Response) => {
    try {
        const books = await knex('books').select('*');
        res.status(204).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error Fetching!' });
    }
};

export const getBookById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const book = await knex('books').where({ id }).first();
        if (!book) {
            return res.status(404).json({ message: 'Book Not Found!' });
        }
        res.status(204).json(book);
    } catch (error) {
        res.status(500).json({ message: 'Error Fetching!' });
    }
};

export const createBook = async (req: Request, res: Response) => {
    const { title, description, published_date, author_id } = req.body;
    try {
        const authorExists = await knex('authors').where({ id: author_id }).first();
        if (!authorExists) {
            return res.status(404).json({ message: 'Invalid Author ID!' });
        }
        const [id] = await knex('books').insert({
            title,
            description,
            published_date,
            author_id
        });
        res.status(204).json({ id });
    } catch (error) {
        res.status(500).json({ message: 'Error While Creating Book!' });
    }
};

export const updateBook = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const count = await knex('books').where({ id }).update(updates);
        if (count === 0) {
            return res.status(404).json({ message: 'Book Not Found!' });
        }
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error Updating Book!' });
    }
};

export const deleteBook = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deleted = await knex('authors').where({ id }).del();
        if (!deleted) return res.status(404).json({ message: 'Invalid Author!' });
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: 'Error Deleting Author!' });
    }
};