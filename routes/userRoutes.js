const express = require('express');
const router = express.Router()

const { getAllUser, updateUser, deleteUser, createUser, getUser, loginUser } = require('../controllers/userController')
const { protect } = require('../middlewares/authMiddleware')

router.route('/').get(getAllUser).post(createUser)
router.route('/:id').put(protect, updateUser).delete(protect, deleteUser).get(protect, getUser)
router.route('/login').post(loginUser)

module.exports = router