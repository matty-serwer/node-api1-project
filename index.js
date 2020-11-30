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

server.get('/api/users', (req, res) => {
    const users = User.getAll();
    res.status(200).json(users)
})

server.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const user = User.getById(id);

    if(user) {
        res.status(200).json(user)
    } else {
        res.status(500).json({ errorMessage: "The users information could not be retrieved." })
    }
})

server.use('*', (req, res) => {
    res.status(404).json({ message: '404. Not Found'})
})

server.listen(5000, () => {
    console.log('listening on port 5000');
})