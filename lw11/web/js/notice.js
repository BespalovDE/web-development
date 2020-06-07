function run() {
  const form = document.querySelector('form');
  form.addEventListener('submit', processFormData);
}

async function processFormData(event) {
  if (event.cancelable) {
    event.preventDefault();
  }
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const country = document.getElementById('country');
  const gender = document.querySelector('input[name="gender"]:checked');
  const message = document.getElementById('message');
  const data = {
    'username': username.value,
    'email': email.value,
    'country': country.value,
    'gender': gender.value,
    'message': message.value
  };
  const response = await ajaxSend(data);
  let noticeMessage = 'Ваше сообщение успешно отправлено';
  const check_fields = {
    'username': username, 
    'email': email, 
    'country': country, 
    'message': message
  };
  let checkCorrect = true;
  for (var key in check_fields) {
    if (response[key] == 'error') {
      check_fields[key].classList.add('error');
      checkCorrect = false;
      noticeMessage = '';
    } else {
      check_fields[key].classList.remove('error');
    }
  }

  if (checkCorrect) {
    clearMessageInfo(data);
  }
  document.getElementById('notice').innerHTML = noticeMessage;
}

async function clearMessageInfo(data) {
  document.getElementById('username').value = '';
  document.getElementById('email').value =  '';
  document.getElementById('country').value =  document.getElementById('firstcountry').value;
  document.getElementById('message').value =  '';
}

async function ajaxSend(data) {
  let response = await fetch('http://bespalovdm.com', {//fetch('http://localhost:8080/index.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  if (response.ok) {
    return await response.json();
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
}

window.onload = run;