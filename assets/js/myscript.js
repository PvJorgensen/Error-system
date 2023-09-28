function showError() {
    UserFeedback('feedbackElement', 'This is an error message', 'fejl');
}

function showWarning() {
    UserFeedback('feedbackElement', 'This is a warning message', 'advarsel');
}

function showSuccess() {
    UserFeedback('feedbackElement', 'This is a success message', 'succes');
}


function ErrorDisplay(type, message) {
    if (type === 'alert') {
        alert(message);
    } else if (type === 'console_error') {
        console.error(message);
    } else if (type === 'console_warning') {
        console.warn(message);
    } else {
        console.error('Ukendt fejltype: ' + type);
    }
}


function UserFeedback(domElementId, message, type) {
    const element = document.getElementById(domElementId);

    if (!element) {
        console.error(
            'DOM-elementet med id ' + domElementId + ' blev ikke fundet.'
        );
        return;
    }

    element.innerHTML = message;

    if (type === 'fejl') {
        element
            .classList
            .add('fejl');
    } else if (type === 'advarsel') {
        element
            .classList
            .add('advarsel');
    } else if (type === 'succes') {
        element
            .classList
            .add('succes');
    } else {
        console.error('Ukendt feedbacktype: ' + type);
    }
}
