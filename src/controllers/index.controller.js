
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

pool = new Pool({
    host: process.env.PG_SERVER,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    port: process.env.PG_PORT,
});

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM teste');
    res.status(200).json(response.rows);
}

const getUserByNome = async (req, res) => {
    pool.query("SELECT * FROM teste WHERE id = $1", [req.params.id]).then((response) => {
        res.status(200).json(response.rows);
    }).catch((error) => {
        res.status(500).send(error.message);
    });

}

const createUser = (req, res) => {
    const { nome, nasc } = req.body;
    pool.query('INSERT INTO teste (nome, nasc) VALUES ($1, $2)', [nome, nasc]).then((response) => {
        res.send(response);
    }).catch((error) => {
        res.send(error);
    });
}

const updateUser = (req, res) => {
    const { id, nome, nasc } = req.body;
    pool.query('UPDATE teste set nome=$1, nasc=$2 WHERE id = $3', [nome, nasc, req.params.id]).then((response) => {
        res.send(response);
    }).catch((error) => {
        res.send(error);
    });
}

const deleteUser = (req, res) => {

    pool.query('DELETE FROM teste WHERE id = $1', [req.params.id]).then((response) => {
        res.send(response);
    }).catch((error) => {
        res.send(error);
    });
}

module.exports = {
    getUsers,
    createUser,
    getUserByNome,
    deleteUser,
    updateUser
}