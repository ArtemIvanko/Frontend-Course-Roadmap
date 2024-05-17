let user = {
  name : "Artem",
  age : 22,
  city : "Poltava",
  showInfo : function () {
    return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
  },
};

console.log(user.showInfo());