//PS: Делаю создание формы через JS, чтобы не засорять html. Мб не самый лучший вариант, но хочу сделать что-то в стиле React

const form = document.createElement("form");
form.setAttribute("name", "form");
document.body.appendChild(form);

const name = document.createElement("input");
name.setAttribute("type", "text");
name.setAttribute("name", "name");
name.setAttribute("placeholder", "Name");
form.appendChild(name);

const message = document.createElement("textarea");
message.setAttribute("name", "message");
message.setAttribute("placeholder", "Message");
form.appendChild(message);

const phone = document.createElement("input");
phone.setAttribute("type", "text");
phone.setAttribute("name", "phone");
phone.setAttribute("placeholder", "Phone number");
form.appendChild(phone);

const email = document.createElement("input");
email.setAttribute("type", "text");
email.setAttribute("name", "email");
email.setAttribute("placeholder", "Email");
form.appendChild(email);

const submit = document.createElement("input");
submit.setAttribute("type", "submit");
submit.setAttribute("value", "Send");
form.appendChild(submit);

const error = document.createElement("div");
error.setAttribute("class", "error");
form.appendChild(error);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameValue = name.value;
  const messageValue = message.value;
  const phoneValue = phone.value;
  const emailValue = email.value;

  const namePattern = /^[a-zA-Z]+$/;
  const phonePattern = /^\+380\d{9}$/;
  const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!namePattern.test(nameValue)) {
    error.innerText = "Name must contain only letters";
    return;
  }
  if (messageValue.length < 5) {
    error.innerText = "Message must contain at least 5 characters";
    return;
  }
  if (!phonePattern.test(phoneValue)) {
    error.innerText = "Phone number must start with +380";
    return;
  }
  if (!emailPattern.test(emailValue)) {
    error.innerText = "Email must contain @ and .";
    return;
  }

  console.log(`Name: ${nameValue}`);
  console.log(`Message: ${messageValue}`);
  console.log(`Phone number: ${phoneValue}`);
  console.log(`Email: ${emailValue}`);
  error.innerText = "";
});
