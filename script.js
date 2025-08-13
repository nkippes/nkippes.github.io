document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    const data = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        status.textContent = "Message sent successfully!";
        form.reset();
      } else {
        status.textContent = "Oops! There was a problem.";
      }
    }).catch(() => {
      status.textContent = "Oops! Network error.";
    });
  });
}
