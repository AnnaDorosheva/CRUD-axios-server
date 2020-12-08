// GET READ
const fetchUsers = () => {
  return fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then(console.log(data))
    .catch(console.log(error));
};

const fetchUsersById = (id) => {
  return fetch(`http://localhost:3000/${id}`)
    .then((res) => res.json())
    .then(console.log(data))
    .catch(console.log(error));
};

// POST - CREATE
const addUser = (name, email) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  };
  return fetch("http://localhost:3000/users", options).then();
};

// DELETE
const deleteUser = (userId) => {
  const url = `http://localhost:3000/users/${userId}`;
  const options = {
    method: "DELETE",
  };
  return fetch(url, options)
    .then((res) => res.json())
    .then(console.log(data))
    .catch(console.warn);
};

// UPDATE
// PATCH

const updateUser = (userId, update) => {
  const url = `http://localhost:3000/users/${userId}`;
  const options = {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(update)
  }

  return fetch(url, options)
    .then((res) => res.jsone())
    .then(console.log(data))
    .catch(console.warn);
};
