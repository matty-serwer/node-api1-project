const express = require('express');
const shortid = require('shortid');

const server = express();

server.use(express.json());

let users = [
    {id: shortid.generate(), name: 'Jane Doe', bio:"Me Jane, You Joe."}
]

const User = {
    getAll() {
        return users
    },
    getById(id) {
        return users.find(user => user.id === id)
    },
    createNew(user) {

    },
    delete(id) {

    },
    update(id, changes) {

    },
}



server.use('*', (req, res) => {
    res.status(404).json({ message: '404. Not Found'})
})

server.listen(5000, () => {
    console.log('listening on port 5000');
})