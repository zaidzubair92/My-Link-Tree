document.getElementById('signup-form').addEventListener('click', function(e){
  e.preventDefault();

  const login = e.target.login.value;
  console.log(login);
});

document.addEventListener("DOMContentLoaded", function(){
  console.log('inside auth.js')
});