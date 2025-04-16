// varriables
const sendBtn = document.querySelector('#sendBtn')
const resetBtn = document.querySelector('#resetBtn')
const email = document.querySelector('#email')
const subject = document.querySelector('#Subject')
const message = document.querySelector('#Message')
const form = document.querySelector('#form')

// eventlisteners
eventListener()
function eventListener() {
    // app initializer
    email.addEventListener('blur', ValidateFeild)
    subject.addEventListener('blur', ValidateFeild)
    message.addEventListener('blur', ValidateFeild)

    // submit for and show 
    form.addEventListener('submit', SubmitForm)

    sendBtn.addEventListener('click', SubmitEmail)
}
// functions
function ValidateFeild() {
    ValidateLenght(this)
    if (this.type === 'email') {
        ValidateEmail(this)
    }
}
function ValidateLenght(feild) {
    if (feild.value.length > 0) {
        feild.style.borderBottomColor = 'green'
        feild.classList.remove('error')
    } else {
        feild.style.borderBottomColor = 'red'
        feild.classList.add('error')
    }
}
function ValidateEmail(feild) {
    const emailText = feild.value
    if (emailText.includes('@')) {
        feild.style.borderBottomColor = 'green'
        feild.classList.remove('error')
    } else {
        feild.style.borderBottomColor = 'red'
        feild.classList.add('error')
    }
}

function reset2() {
    form.reset()
    email.style.borderBottomColor = '#ddd'
    subject.style.borderBottomColor = '#ddd'
    message.style.borderBottomColor = '#ddd'
}

function SubmitForm(e) {
    e.preventDefult()
}

function SubmitEmail(){
    const nodemailer = require('nodemailer');

    // Email sender configuration
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bytebitewebsite@gmail.com', // Sender email
            pass: 'amirali1391' // Sender email password
        }
    });

    // Email details
    const mailOptions = {
        from: 'bytebitewebsite@gmail.com', // Sender address
        to: email.value, // Recipient address
        subject: subject.value,
        text: message.value
    };

    // Sending the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}