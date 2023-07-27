var params = {
  name:'',
  email:'',
  message:'',
};

function Menu(e, a){
  let menu = document.getElementById('phoneMenu');
  e.name === 'menu' ? (
    e.name = "close",
    menu.classList.remove('ms:hidden'),
    menu.classList.remove('hidden'),
    menu.classList.add('flex')
  ) : (
    e.name = "menu" ,
    menu.classList.remove('flex'),
    menu.classList.add('ms:hidden'),
    menu.classList.add('hidden')
  );
  if(a === 1 ){
    let icon = document.getElementById('icon');
    icon.name='menu'
  }
}

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value ,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_9k9hrln";
  const templateID = "template_3g6irt2";

  if(params.name && params.message && params.email){
    if(isValidEmail(params.email)){    
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        let tnx = document.getElementById('tnxMsg');
        tnx.style.display = 'block';
      })
      .catch(err=>console.log(err));
    } else {
      inputCheck();
    }
  } else {
    inputCheck();
  }

}

function isValidEmail(email) {
  // Simple email validation using regular expression.
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function inputCheck() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');  

  if (!name.value) {
    let msgAlert = document.getElementById('email-message');
    msgAlert.textContent = 'Please fill all fields';

    name.style.borderBottom = '1px solid red';
    setTimeout(() => {
    msgAlert.textContent = '';
          name.style.borderBottom = '1px solid gray';
      }, 5000);
  }

  if (!email.value) {
    let msgAlert = document.getElementById('email-message');
    msgAlert.textContent = 'Please fill all fields';

    email.style.borderBottom = '1px solid red';
    setTimeout(() => {
        email.style.borderBottom = '1px solid gray';
        msgAlert.textContent = '';
    }, 5000);
  }  
  if (!email.value || !isValidEmail(email.value)) {
    let msgAlert = document.getElementById('email-message');
    msgAlert.textContent = 'Please write a valid email with "@"';

    email.style.borderBottom = '1px solid red';
    setTimeout(() => {
        email.style.borderBottom = '1px solid gray';
        msgAlert.textContent = '';
    }, 5000);
  }
  if (!message.value ) {
    let msgAlert = document.getElementById('email-message');
    msgAlert.textContent = 'Please fill all fields';

    message.style.borderBottom = '1px solid red';
    setTimeout(() => {
    msgAlert.textContent = '';
        message.style.borderBottom = '1px solid gray';
    }, 5000);
  }
}