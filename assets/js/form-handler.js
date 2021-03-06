window.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form');
    var button = document.getElementById('contact-form-button');
    var status = document.getElementById('contact-form-status');

    function success() {
        form.reset();
        button.style = 'display: none ';
        status.innerHTML = '¡Gracias! El formulario de contacto se envió correctamente.';
    }

    function error() {
        status.innerHTML = 'Oops! ¡UPS! Hubo un problema.';
    }

    // handle the form submission event
    if (form != null) {
        form.addEventListener('submit', function (ev) {
            ev.preventDefault();
            var data = new FormData(form);
            ajax(form.method, form.action, data, success, error);
        });
    }
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}

// javascript
window.onload = function() {
    var el = document.getElementById('g-recaptcha-response');
    if (el) {
        el.setAttribute('required', 'required');
    }
};
