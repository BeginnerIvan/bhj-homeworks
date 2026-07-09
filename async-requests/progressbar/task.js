const form = document.getElementById('form');
const progress = document.getElementById('progress');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', form.getAttribute('action'));
  xhr.upload.onprogress = function(event) {
    if (event.lengthComputable) {
      progress.value = event.loaded / event.total;
    }
  };
  xhr.onload = function() {
    if (xhr.status === 200 || xhr.status === 201) {
      
        alert('Файл успешно загружен!');
    } else {
      
        alert(`Ошибка при загрузке: ${xhr.status}`);
    }
    progress.value = 0.0;
  };
  xhr.onerror = function() {
    alert('Произошла ошибка сети.');
    progress.value = 0.0;
  };
  xhr.send(formData);
});