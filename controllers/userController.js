const User = require("../models/user");

// CREATE
const createUser = (req, res, next) => {
  const { name, email } = req.body;

  const user = new User(name, email);
  user
    .save()
    .then((result) => {
      res.status(201).json({ message: "User created" });
    })
    .catch((err) => console.log(err));
};

// READ ALL
const getUsers = (req, res, next) => {
  User.fetchAll()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => console.log(err));
};

// READ ONE
const getUserById = (req, res, next) => {
  const userId = req.params.userId;

  User.findById(userId)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => console.log(err));
};

// UPDATE
const updateUser = (req, res, next) => {
  const userId = req.params.userId;

  User.updateById(userId, req.body)
    .then(() => {
      res.json({ message: "User updated" });
    })
    .catch((err) => console.log(err));
};

// DELETE
const deleteUser = (req, res, next) => {
  const userId = req.params.userId;

  User.deleteById(userId)
    .then(() => {
      res.json({ message: "User deleted" });
    })
    .catch((err) => console.log(err));
};

// EXPORT ALL
module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
