let alreadySubmitted = false;

function appendModal(nameValue, topicValue, messageValue) {
  if (alreadySubmitted === true) {
    //remove elements

    const usedNameField = document.getElementById("nameField");
    usedNameField.remove();

    const usedTopicField = document.getElementById("topicField");
    usedTopicField.remove();

    const usedMessageField = document.getElementById("messageField");
    usedMessageField.remove();
  }

  // Add name text to modal
  const nameField = document.createElement("p");
  nameField.setAttribute("id", "nameField");
  nameField.textContent = nameValue;
  document.getElementById("nameDiv").appendChild(nameField);

  // Add topic text to modal
  const topicField = document.createElement("p");
  topicField.setAttribute("id", "topicField");
  topicField.textContent = topicValue;
  document.getElementById("topicDiv").appendChild(topicField);

  // Add message text to modal
  const messageField = document.createElement("p");
  messageField.setAttribute("id", "messageField");
  messageField.textContent = messageValue;
  document.getElementById("messageDiv").appendChild(messageField);

  alreadySubmitted = true;
}

appendModal(
  "Code First Girls",
  "New Website",
  "We want a new website, please help!"
);

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameField = document.getElementsByName("f_name")[0].value;
  const topicField = document.getElementsByName("f_topic")[0].value;
  const messageField = document.getElementsByName("f_message")[0].value;

  appendModal(nameField, topicField, messageField);
});

// Add event listener

