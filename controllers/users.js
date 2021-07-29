import v4 from 'uuid';
let users=[]

export const getUsers = (req, res) => {
  console.log('GET : /users');
  res.send(users);
}

export const createUser = (req, res) => {
  console.log('POST : /users');

  const userId = v4();
  const user = {...req.body, userId : userId};
  users.push(user)

  res.send(`User ${user.firstName} added`);
}

export const getUser = (req, res) => {
  const { id } = req.params;
  console.log(`GET : /users/id`);
  const foundUser = users.find((user) => user.userId === id);
  // console.log(foundUser, id);
  res.send(foundUser);
}

export const deleteUser = (req,res) => {
  console.log(`DEL : /users/id`);
  const { id } = req.params;

  users = users.filter(user => user.userId !== id)

  res.send(`user "${id}" deleted`);
}

export const updateUser = (req, res) => {
  const { id } = req.params;
  const {firstName, lastName, age } = req.body;
  console.log(`PAT : /users/id`);
  
  const foundUser = users.find((user) => user.userId === id);
  
  if(firstName){
    foundUser.firstName = firstName
  }
  if(lastName){
    foundUser.lastName = lastName
  }
  if(age){
    foundUser.age = age
  }
  
  res.send(foundUser);
}