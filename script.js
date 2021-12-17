const form = document.getElementById('form');
const email = document.getElementById('email');
const submitBtn = document.querySelector('.btn');
const noEmail = document.getElementById('error-no-email');
const wrongEmailFormat = document.getElementById('error-wrong-format');
const hidden = document.querySelector('.hidden');

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const resetError = (element) => {
  // clear error text
  element.classList.add('hidden');
};

submitBtn.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(email.value);

  if (email.value.length === 0) {
    noEmail.classList.remove('hidden');
  } else if (!validateEmail(email.value)) {
    wrongEmailFormat.classList.remove('hidden');
  }
});

email.addEventListener('input', () => {
  if (validateEmail(email.value)) {
    resetError(wrongEmailFormat);
  } else if (email.value.length !== 0) {
    resetError(noEmail);
  }
});
