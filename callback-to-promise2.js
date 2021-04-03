class UserStorage {
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async loginUser(id, password) {
    await this.delay(1000);
    if (
      (id === "ellie" && password === "dream") ||
      (id === "coder" && password === "academy")
    ) {
      return id;
    } else {
      return new Error("not found");
    }
  }

  async getRoles(user) {
    await this.delay(1000);

    if (user === "ellie") {
      return { name: "ellie", role: "admin" };
    } else {
      return new Error("no access");
    }
  }

  async getUserWithRole(user, password) {
    const userPromise = await this.loginUser(user, password);
    const role = await this.getRoles(user);
    return role;
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage //
  .getUserWithRole(id, password)
  .catch(console.log)
  .then(console.log);
