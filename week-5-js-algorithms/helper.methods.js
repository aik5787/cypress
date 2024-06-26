class Helpers {
  getUsersByAge(response, ageMin, ageMax) {
    const users = [];
    response.users.filter((user) => {
      if (user.age >= ageMin && user.age <= ageMax) {
        users.push(user.name);
      }
    });
    return users;
  }

  getUsersByRole(response, role) {
    const users = [];

    response.users.filter((user) => {
      if (user.role === role) {
        users.push(user.name);
      }
    });

    return users;
  }

  getUsersByCountry(response, country) {
    const users = [];

    response.users.filter((user) => {
      if (user.country === country) {
        users.push(user.name);
      }
    });

    return users;
  }

  getUsersByBalance(response, balanceMin, balanceMax) {
    const users = [];
    response.users.filter((user) => {
      if (user.balance >= balanceMin && user.balance <= balanceMax) {
        users.push(user.name);
      }
    });
    return users;
  }
}

export default new Helpers();
