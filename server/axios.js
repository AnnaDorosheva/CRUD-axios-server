// вебинар 28 js Репета c 40-й минуты

// https://github.com/axios/axios
// $ npm install axios

// импортируем в файл:
// import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000';
// можно указать урл, он буден доступен во всем проэкте и автоматически ставится во все 
// return axios.patch('/users', update) - перед '/users' пришьет строку baseUR
// .then(console.log(data))
// .catch(console.warn);

// return fetch(`/users/${userId}`) - перед '/users' пришьет строку baseUR
// .then(console.log(data))
// .catch(console.warn);
// };


// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// для всех запросов


// axios.defaults.headers.post['Content-Type'] = 'application/json';
// для всех пост запросов

// GET READ
const fetchUsers = () => {
  return axios.get("http://localhost:3000/users")
    .then(response => {
      // пиходят сразу обработанные данные,     
      // .then((res) => res.json()) - не нужно, это уже сделано под капотом
      console.log(response);
      // в дата приходит ответ бекэнда
      console.log(response.data); 
    }).catch(error => console.log(error))

};

// получить пользователя по айди
const fetchUsersById = (id) => {
  return axios.get(`http://localhost:3000/${id}`)
    .then(console.log(data))
    .catch(console.log(error));
};

// POST - CREATE
const addUser = (name, email) => {
  // const options = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ name, email }),
  // };

  // опции в аксиос не нужны, и стрингифай не нужен, 
  // под капотом это делает аксиос и заголовки тоже ставит сам под капотом
  return axios.post("http://localhost:3000/users", { name, email })
  .then(console.log(data))
  .catch(console.log(error));;
};

// DELETE
const deleteUser = (userId) => {
  const url = `http://localhost:3000/users/${userId}`;
  // const options = {
  //   method: "DELETE",
  // };
  return fetch(url)
    // .then((res) => res.json())
    .then(console.log(data))
    .catch(console.warn);
};

// UPDATE
// PATCH

const updateUser = (userId, update) => {
  const url = `http://localhost:3000/users/${userId}`;
  // const options = {
  //   method: "PATCH",
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(update)
  // }

  return axios.patch(url, update)
    // .then((res) => res.jsone())
    .then(console.log(data))
    .catch(console.warn);
};
