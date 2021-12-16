const form = document.getElementById('form');
const email = document.getElementById('email');
const submitBtn = document.querySelector('.btn');
const error = document.getElementById('error');

const resetError = () => {
  // clear error text
  let footer = document.querySelector('footer');
  let throwawayNode = footer.removeChild(error);
};

submitBtn.addEventListener(
  'click',
  function (event) {
    event.preventDefault();

    if (email.value.length === 0) {
      var textnode = document.createTextNode('Oops! Please add your email'); // Create a text node
      error.appendChild(textnode);
    }
  },
  { once: true }
);

email.addEventListener('input', resetError);
