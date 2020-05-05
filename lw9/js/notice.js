function run() {
  const form = document.querySelector('form');
  form.addEventListener('submit', processFormData);
}

async function processFormData(event) {
  if (event.cancelable) {
    event.preventDefault();
  }
  const user_name = document.getElementById('user_name');
  const email = document.getElementById('email');
  const country = document.getElementById('country');
  const gender = document.querySelector('input[name="gender"]:checked');
  const message = document.getElementById('message');
  const data = {
    'user_name': user_name.value,
    'email': email.value,
    'country': country.value,
    'gender': gender.value,
    'message': message.value
  };
  const response = await ajaxSend(data);
  (response['user_name'] == 'error')
    ? user_name.classList.add('error')
    : user_name.classList.remove('error');
  (response['email'] == 'error')
    ? email.classList.add('error')
    : email.classList.remove('error');
  (response['country'] == 'error')
    ? country.classList.add('error')
    : country.classList.remove('error');
  (response['message'] == 'error')
    ? message.classList.add('error')
    : message.classList.remove('error');
  const notice = document.getElementById('notice')
  if (response['user_name'] == 'correct' && response['email'] == 'correct' 
    && response['country'] == 'correct' && response['message'] == 'correct') {
    notice.innerHTML = 'Ваше сообщение успешно отправлено';
  } else {
    notice.innerHTML = '';
  }
}

async function ajaxSend(data) {
  let response = await fetch('http://localhost:8080/index.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  if (response.ok) {
    let json = await response.json();
    return json;
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
}

window.onload = run;