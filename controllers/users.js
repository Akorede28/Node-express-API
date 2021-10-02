import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.status(200).json({
    users,
  });
};

export const createUser = (req, res) => {
  const user = req.body;

  const userId = uuidv4();

  const userWithId = { ...user, id: userId };

  users.push(userWithId);
  res.send(`User with the name ${user.firstName} added to the database!`);
};

export const getUser = (req, res) => {
  // to access the data of the user's id, we use req.params
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  //   res.send(req.params);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);
  res.send(`User with the id ${id} deleted from the database.`);
  //   res.status(200).json(`User with id ${id} deleted from the database`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;

  const { firstName, lastName, age } = req.body;

  // we're matching user.id to the id coming from the req.params
  const user = users.find((user) => user.id === id);

  //  with this we can change many or one properties of the user
  if (firstName) {
    user.firstName = firstName;
  }

  if (lastName) {
    user.lastName = lastName;
  }

  if (age) {
    user.age = age;
  }

  res.send(`User with the id ${id} has been updated`);
};
