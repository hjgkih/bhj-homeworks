const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.onsubmit = function(e) {
  e.preventDefault();
  let input = form.querySelector('#file');
  let file = input.files[0];
  if (file) {
    upload(file);
  }
}

function upload(file) {
  let xhr = new XMLHttpRequest();
  
  xhr.upload.onprogress = function() {
    progress.value += 0.05; 
  }

  let formData = new FormData();
  formData.append('file', file);

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.send(formData);
}