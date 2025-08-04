document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("form-status");

    if (contactForm) {
        contactForm.addEventListener("submit", async function(event) {
            event.preventDefault();

            const form = event.target;
            const formData = new FormData(form);
            const formAction = form.action;

            try {
                const response = await fetch(formAction, {
                    method: form.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formStatus.textContent = "Thank you for your message! I will get back to you soon.";
                    formStatus.className = "form-status success";
                    form.reset();
                } else {
                    const data = await response.json();
                    if (Object.hasOwnProperty.call(data, 'errors')) {
                        formStatus.textContent = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        formStatus.textContent = "Oops! There was a problem submitting your form.";
                    }
                    formStatus.className = "form-status error";
                }
            } catch (error) {
                formStatus.textContent = "Oops! There was a problem submitting your form. Please try again later.";
                formStatus.className = "form-status error";
                console.error("Form submission error:", error);
            }
        });
    }
});

