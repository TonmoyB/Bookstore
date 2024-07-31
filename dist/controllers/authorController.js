"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAuthor = exports.updateAuthor = exports.createAuthor = exports.getAuthorById = exports.getAuthors = void 0;
const getAuthors = (req, res) => {
    res.send({
        message: 'Authors',
        data: [
            { id: 1, name: 'A' },
            { id: 2, name: 'B' },
            { id: 3, name: 'C' },
        ],
    });
};
exports.getAuthors = getAuthors;
const getAuthorById = (req, res) => {
    // logic to fetch and return user by ID from the database
};
exports.getAuthorById = getAuthorById;
const createAuthor = (req, res) => {
    // logic to create a new user in the database
};
exports.createAuthor = createAuthor;
const updateAuthor = (req, res) => {
    // logic to update user by ID in the database
};
exports.updateAuthor = updateAuthor;
const deleteAuthor = (req, res) => {
    // logic to delete user by ID from the database
};
exports.deleteAuthor = deleteAuthor;
