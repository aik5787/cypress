class Helpers {
  getUsersByStatus(response, status) {
    const users = [];

    response.users.filter((user) => {
      let roleObject = user.role;
      if (roleObject.status === status && roleObject.description) {
        users.push(user.name);
      }
    });

    return users;
  }

  getUsersByRole(response, role, roleId) {
    const users = [];

    response.users.filter((user) => {
      let roleObject = user.role;
      if (roleObject.name === role && roleObject.id === roleId) {
        users.push(user.name);
      }
    });

    return users;
  }

  getUsersByEmailDomain(response, domain) {
    const users = [];

    response.users.filter((user) => {
      if (user.email.includes(domain)) {
        users.push(user.name);
      }
    });

    return users;
  }

  getUserBalanceByCurrency(response, currency) {
    const balances = [];

    response.users.filter((user) => {
      if (user.currency === currency) {
        balances.push(user.balance);
      }
    });

    return balances;
  }
}

export default new Helpers();
