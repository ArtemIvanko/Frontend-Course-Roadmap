let user = {
  name : "Artem",
  age : 22,
  city : "Poltava",
  showInfo : function () {
    return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
  },
};

console.log(user.showInfo());

let contacts = {
  contactsList : [
    {
      name : "John",
      phone : "123456789",
      email : "test1@gmail.com",
    },
    {
      name : "Artem",
      phone : "987654321",
      email : "test2@gmail.com",
    },
    {
      name : "Test",
      phone : "456123789",
      email : "test3@gmail.com",
    }],
};

contacts.searchContact = function (name) {
  for (let i = 0; i < this.contactsList.length; i++) {
    if (this.contactsList[i].name === name) {
      return this.contactsList[i];
    }
  }

  return "Contact not found";
};

contacts.addContact = function (name, phone, email) {
  this.contactsList.push({name, phone, email});
};

console.log(contacts.searchContact("John"));

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newArr = arr.filter(function (item) {
  return item % 2 === 0;
});

console.log(newArr);
