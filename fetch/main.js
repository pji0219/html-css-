fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((data) => {
    let users = data;

    users.map((user) => {
      const userList = document.querySelector('.user_list'); // 글로벌로 선언해도 될듯
      const li = document.createElement('li');
      const name = document.createElement('span');
      const email = document.createElement('span');
      const br = document.createElement('br');

      li.classList.add('list');

      name.innerText = `name: ${user.name}`;
      email.innerText = `email: ${user.email}`;

      li.append(name);
      li.append(br);
      li.append(email);
      userList.append(li);
    });
  })
  .catch((err) => console.log(err, 'fetch 에러!'));
