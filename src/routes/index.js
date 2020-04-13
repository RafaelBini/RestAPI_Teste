const Router = require('express');
const router = Router();

const { getUsers, createUser, getUserByNome, deleteUser, updateUser } = require('../controllers/index.controller')

router.get('/users', getUsers);
router.get('/users/:id', getUserByNome);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser)
router.put('/users/:id', updateUser);
module.exports = router;