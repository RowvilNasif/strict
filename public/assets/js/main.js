// IIFE
(function() {

    const contactFormButton = document.querySelector('#contact_form_button');
    const contactFullnameInput = document.querySelector('#contact_fullname');
    const contactNumberInput = document.querySelector('#contact_number');
    const contactEmailInput = document.querySelector('#contact_email');
    const contactMessageInput = document.querySelector('#contact_message');

    function validation(nameVal, numberVal, emailVal, messageVal) {
        if (nameVal == '') {
            contactFullnameInput.style.borderColor = 'red';
            contactFullnameInput.style.boxShadow = '0 0 0 .1rem red';
        } else {
            contactFullnameInput.style.border = '1px solid #ced4da';
            contactFullnameInput.style.boxShadow = 'none';
        }


        if (numberVal == '') {
            contactNumberInput.style.borderColor = 'red';
            contactNumberInput.style.boxShadow = '0 0 0 .1rem red';
        } else {
            contactNumberInput.style.border = '1px solid #ced4da';
            contactNumberInput.style.boxShadow = 'none';
        }


        if (emailVal == '') {
            contactEmailInput.style.borderColor = 'red';
            contactEmailInput.style.boxShadow = '0 0 0 .1rem red';
        } else {
            contactEmailInput.style.border = '1px solid #ced4da';
            contactEmailInput.style.boxShadow = 'none';
        }


        if (messageVal == '') {
            contactMessageInput.style.borderColor = 'red';
            contactMessageInput.style.boxShadow = '0 0 0 .1rem red';
        } else {
            contactMessageInput.style.border = '1px solid #ced4da';
            contactMessageInput.style.boxShadow = 'none';
        }
    }

    function getAllValues(name, number, email, message) {
        const contactName = name.value;
        const contactNumber = number.value;
        const contactEmail = email.value;
        const contactMessage = message.value;
        return contactName + ',' + contactNumber + ',' + contactEmail + ',' + contactMessage;
    }

    contactFormButton.addEventListener('click', function(event) {
        event.preventDefault();
        let output = getAllValues(contactFullnameInput, contactNumberInput, contactEmailInput, contactMessageInput);
        let x = output.split(',');
        validation(x[0], x[1], x[2], x[3]);

    });


})()