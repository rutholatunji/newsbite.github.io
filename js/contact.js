let alreadySubmitted = false;

function appendModal(
  nameValue,
  emailValue,
  urlValue,
  categoryValue,
  messageValue
) {
  if (alreadySubmitted === true) {
    //remove elements

    const usedNameField = document.getElementById("nameField");
    usedNameField.remove();

    const usedEmailField = document.getElementById("emailField");
    usedEmailField.remove();

    const usedUrlField = document.getElementById("urlField");
    usedUrlField.remove();

    const usedCategoryField = document.getElementById("categoryField");
    usedCategoryField.remove();

    const usedMessageField = document.getElementById("messageField");
    usedMessageField.remove();
  }

  // Add name text to modal
  const nameField = document.createElement("p");
  nameField.setAttribute("id", "nameField");
  nameField.textContent = nameValue;
  document.getElementById("nameDiv").appendChild(nameField);

  // Add topic text to modal
  const emailField = document.createElement("p");
  emailField.setAttribute("id", "emailField");
  emailField.textContent = emailValue;
  document.getElementById("emailDiv").appendChild(emailField);

  const urlField = document.createElement("p");
  urlField.setAttribute("id", "urlField");
  urlField.textContent = urlValue;
  document.getElementById("urlDiv").appendChild(urlField);

  const categoryField = document.createElement("p");
  categoryField.setAttribute("id", "categoryField");
  categoryField.textContent = categoryValue;
  document.getElementById("categoryDiv").appendChild(categoryField);

  // Add message text to modal
  const messageField = document.createElement("p");
  messageField.setAttribute("id", "messageField");
  messageField.textContent = messageValue;
  document.getElementById("messageDiv").appendChild(messageField);

  alreadySubmitted = true;
}

// appendModal(
//   "Code First Girls",
//   "Email address",
//   "Link",
//   "Health",
//   "We want a new website, please help!"
// );

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameField = document.getElementsByName("f_name")[0].value;
  const emailField = document.getElementsByName("f_email")[0].value;
  const urlField = document.getElementsByName("f_url")[0].value;
  const categoryField = document.getElementsByName("f_category")[0].value;
  const messageField = document.getElementsByName("f_message")[0].value;

  appendModal(nameField, emailField, urlField, categoryField, messageField);

  $("#exampleModal").modal();
});

// Add event listener
