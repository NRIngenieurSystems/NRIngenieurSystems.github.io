
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    if (contactForm) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            
            // Clear status
            formStatus.innerHTML = '';
            formStatus.className = 'form-status';
            
            // Set loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Wird gesendet...';

            const formData = new FormData(contactForm);
            
            try {
                const response = await fetch('https://formspree.io/p/2993309840144596611/f/contactForm', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                const data = await response.json();

                if (response.ok) {
                    // Success
                    formStatus.innerHTML = '<div class="status-message success"><i data-lucide="check-circle"></i> Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet.</div>';
                    contactForm.reset();
                    // Re-initialize icons in the status message
                    if (window.lucide) window.lucide.createIcons();
                } else {
                    // Error from Formspree
                    const errors = data.errors ? data.errors.map(error => error.message).join(', ') : 'Ein Fehler ist aufgetreten.';
                    formStatus.innerHTML = `<div class="status-message error"><i data-lucide="alert-circle"></i> Fehler: ${errors}</div>`;
                }
            } catch (error) {
                // Network error
                formStatus.innerHTML = '<div class="status-message error"><i data-lucide="alert-circle"></i> Netzwerkfehler. Bitte versuchen Sie es später erneut.</div>';
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Nachricht senden';
                if (window.lucide) window.lucide.createIcons();
            }
        });
    }
});
