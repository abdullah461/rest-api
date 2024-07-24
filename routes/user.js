import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

// Mock database
const users = [];

// sending post request/ create
// The router.post() function sets up a route that responds to HTTP POST requests.
router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`${user.first_name} has been added to the Database`);
});

// Getting the list of users from the mock database
router.get("/", (req, res) => {
  res.send(users);
});

// getting a unique user using the ID
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
});

// deleting data
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`${id} deleted successfully from database`);
});

// updating data using patch method

// There are times when you don't need to update an entire resource or object. 
// Instead, you'd want to make partial modifications or adjustments. 
// This is where the HTTP PATCH request comes into play.

router.patch("/:id", (req, res) => {
  const { id } = req.params;

  const { first_name, last_name, email } = req.body;

  const user = users.find((user) => user.id === id);

  if (first_name) user.first_name = first_name;
  if (last_name) user.last_name = last_name;
  if (email) user.email = email;

  res.send(`User with the ${id} has been updated`);
});

export default router;
