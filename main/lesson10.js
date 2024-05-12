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

