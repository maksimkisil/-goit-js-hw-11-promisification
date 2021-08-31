console.log('---------------------second task---------------------');

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  // const toggleUserState = async(allUsers, userName) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );

  // return Promise.resolve(updatedUsers);

  // return updatedUsers;

  return new Promise(resolve => {
    resolve(updatedUsers);
  });
};

const logger = updatedUsers => console.table(updatedUsers);

// Вызовы функции для проверки
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
