const form = document.getElementById('myForm');
const modal = document.getElementById('modal');
// these are not the form buttons themselves, just button/label elements that I change
// around the actual radio buttons. See lines 12 and 13 for the radio button definition.
const queryBtn1 = document.getElementById('query-btn-1');
const queryBtn2 = document.getElementById('query-btn-2');

// form fields
const fname = document.getElementById('fname'); // first name field
const lname = document.getElementById('lname'); // last name field
const email = document.getElementById('email'); // email field
const radio1 = document.getElementById('query1') // first query button
const radio2 = document.getElementById('query2') // second query button
const messageTxt = document.getElementById('message-txt'); // message text area
const consentChk = document.getElementById('consent-check'); // consent check box

// form error messages
const fnameErr = document.getElementById('fname-err');
const lnameErr = document.getElementById('lname-err');
const emailErr = document.getElementById('email-err');
const queryErr = document.getElementById('query-err');
const messageErr = document.getElementById('message-err');
const consentErr = document.getElementById('consent-err');



function queryStyle(n) {
    queryBtn1.classList.remove('checked');
    queryBtn2.classList.remove('checked');

    if (n === 0) {
        queryBtn1.classList.add('checked');
    }
    else if (n === 1) {
        queryBtn2.classList.add('checked');
    }
}

// form validation
form.addEventListener('submit', function(e){
    window.scrollTo({ top: 0 });
    e.preventDefault();

    let formIsValid = true;

    if (fname.value.trim().length > 0) {
        // remove error stuff
        fname.classList.remove('input-err');
        fnameErr.style = 'display: none;';
    }
    else {
        // show error stuff
        fname.classList.add('input-err');
        fnameErr.style = 'display: block;';
        formIsValid = false; // set validation flag to false
    }

    if (lname.value.trim().length > 0) {
        lname.classList.remove('input-err');
        lnameErr.style = 'display: none;';
    }
    else {
        lname.classList.add('input-err');
        lnameErr.style = 'display: block;';
        formIsValid = false;
    }

    if (email.value.trim().length > 0) {
        if (email.value.trim().includes('@')) {
            email.classList.remove('input-err');
            emailErr.style = 'display: none;';
        }
        else {
            email.classList.add('input-err');
            emailErr.innerText = "Please enter a valid email address";
            emailErr.style = 'display: block;';
            formIsValid = false;
        }
    }
    else {
        email.classList.add('input-err');
        emailErr.innerText = "This field is required";
        emailErr.style = 'display: block;';
        formIsValid = false;
    }

    if (radio1.checked === true || radio2.checked === true) {
        queryErr.style = 'display: none;';
    }
    else {
        queryErr.style = 'display: block;';
        formIsValid = false;
    }

    if (messageTxt.value.trim().length > 0) {
        messageTxt.classList.remove('input-err');
        messageErr.style = 'display: none;';
    }
    else {
        messageTxt.classList.add('input-err');
        messageErr.style = 'display: block;';
        formIsValid = false;
    }

    if (consentChk.checked === true) {
        consentErr.style = 'display: none;';
    }
    else {
        consentErr.style = 'display: block;';
        formIsValid = false;
    }

    if (formIsValid === true) {
        modal.style = 'display: block;'
    }
    else {
        modal.style = 'display: none;'
    }
    
});