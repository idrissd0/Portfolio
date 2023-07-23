var params = {
  name:'',
  email:'',
  message:'',
};

function handelChange(e){
  if (e.target.name == 'user_name'){
    params.name = e.target.value;
  }
  if (e.target.name == 'user_email'){
    params.email = e.target.value;
  }
  if (e.target.name == 'user_message'){
    params.message = e.target.value;
  }
  console.log(params)
  

  if (params.name) {
    let elt = document.getElementById('name');
    elt.style.borderColor = "rgb(107 114 128)";
    elt.style.borderBottomColor = "green";
  }

  if(!params.email) {
    let elt = document.getElementById('email');
    elt.style.border = "1px solid red";    
  } else {
    let elt = document.getElementById('email');
    elt.style.borderColor = "rgb(107 114 128)";
    elt.style.borderBottomColor = "green";
  }

  if (!params.message){
    let elt = document.getElementById('message');
    elt.style.border = "1px solid red";
  }  else {
    let elt = document.getElementById('message');
    elt.style.borderColor = "rgb(107 114 128)";
    elt.style.borderBottomColor = "green";
  }

}

function sendMail() {

  console.log(params);
  const serviceID = "service_9k9hrln";
  const templateID = "template_3g6irt2";

  if (!params.name) {
    let elt = document.getElementById('name');
    elt.style.border = "1px solid red";
  } else {
    let elt = document.getElementById('name');
    elt.style.borderColor = "rgb(107 114 128)";
    elt.style.borderBottomColor = "green";
  }

  if(!params.email) {
    let elt = document.getElementById('email');
    elt.style.border = "1px solid red";    
  } else {
    let elt = document.getElementById('email');
    elt.style.borderColor = "rgb(107 114 128)";
    elt.style.borderBottomColor = "green";
  }

  if (!params.message){
    let elt = document.getElementById('message');
    elt.style.border = "1px solid red";
  }  else {
    let elt = document.getElementById('message');
    elt.style.borderColor = "rgb(107 114 128)";
    elt.style.borderBottomColor = "green";
  }

  if(params.name && params.email && params.message) {
    alert("Your message sent successfully!!")
  }
  

  
}

























  /*emailjs.send(serviceID, templateID, params)
  .then(res=>{
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    // alert("Your message sent successfully!!")
    let tnx = document.getElementById('thanksMessage');
    tnx.classList.add('text-gray-400 bg-transparent text-[16px]');
  })
  .catch(err=>console.log(err));*/