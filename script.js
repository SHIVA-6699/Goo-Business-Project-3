document.getElementById("receiverEmail").addEventListener("input", function () {
  validateEmail();
});

document.getElementById("cc").addEventListener("input", function () {
  validateCC();
});

document.getElementById("bcc").addEventListener("input", function () {
  validateBCC();
});

document.getElementById("subject").addEventListener("input", function () {
  validateSubject();
});

document.getElementById("message").addEventListener("input", function () {
  validateMessage();
});
const toast = document.querySelector(".toast");
function showAndAnimateToast() {}
document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
      toast.style.display = "flex";
      setTimeout(() => {
        toast.style.display="none"
      }, 3000);
      document.getElementById("emailForm").reset();
    }
   
  });

function validateEmail() {
  var emailInput = document.getElementById("receiverEmail");
  var errorDiv = document.getElementById("receiverEmailError");
  var email = emailInput.value.trim();
  if (!email) {
    errorDiv.textContent = "Receiver email is required";
    return false;
  } else if (!isValidEmailAddress(email)) {
    errorDiv.textContent = "Invalid email format";
    return false;
  } else {
    errorDiv.textContent = "";
    return true;
  }
}

function validateCC() {
  var ccInput = document.getElementById("cc");
  var errorDiv = document.getElementById("ccError");
  var cc = ccInput.value.trim();
  return true; 
}

function validateBCC() {
  var bccInput = document.getElementById("bcc");
  var errorDiv = document.getElementById("bccError");
  var bcc = bccInput.value.trim();
  return true; 
}

function validateSubject() {
  var subjectInput = document.getElementById("subject");
  var errorDiv = document.getElementById("subjectError");
  var subject = subjectInput.value.trim();
  if (!subject) {
    errorDiv.textContent = "Subject is required";
    return false;
  } else {
    errorDiv.textContent = "";
    return true;
  }
}

var messageInput = document.getElementById("message");
function validateMessage() {
  var errorDiv = document.getElementById("messageError");
  var message = messageInput.value.trim();
  if (!message) {
    errorDiv.textContent = "Message is required";
    return false;
  } else {
    errorDiv.textContent = "";
    return true;
  }
}

function validateForm() {
  var isEmailValid = validateEmail();
  var isCCValid = validateCC();
  var isBCCValid = validateBCC();
  var isSubjectValid = validateSubject();
  var isMessageValid = validateMessage();
  return (
    isEmailValid && isCCValid && isBCCValid && isSubjectValid && isMessageValid
  );
}

function isValidEmailAddress(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const bolt = document.querySelector(".bolt");
bolt.addEventListener("click", function () {
  if (messageInput.style.fontWeight === "bold") {
    messageInput.style.fontWeight = "normal";
  } else {
    messageInput.style.fontWeight = "bold";
  }
});
// Font Increase
const size1 = document.querySelector(".sizeinc");
size1.addEventListener("click", function () {
  var currentFontSize = parseFloat(messageInput.style.fontSize) || 16;
  messageInput.style.fontSize = `${currentFontSize + 2}px`;
});
// Font Decrease
const size2 = document.querySelector(".sizedec");
size2.addEventListener("click", function () {
  var currentFontSize = parseFloat(messageInput.style.fontSize) || 16;
  messageInput.style.fontSize = `${currentFontSize - 2}px`;
});
// Font italic
const italic = document.querySelector(".italic");
italic.addEventListener("click", function () {
  if (messageInput.style.fontStyle === "italic") {
    messageInput.style.fontStyle = "normal";
  } else {
    messageInput.style.fontStyle = "italic";
  }
});
// Font Underline
const underline = document.querySelector(".underline");
underline.addEventListener("click", function () {
  if (messageInput.style.textDecoration === "underline") {
    messageInput.style.textDecoration = "none";
  } else {
    messageInput.style.textDecoration = "underline";
  }
});
// text Background
const color = document.querySelector(".color");
color.addEventListener("change", function () {
  messageInput.style.color = color.value;
});
