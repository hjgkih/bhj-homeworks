let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    document.querySelector('.loader_active').className = 'loader';
    
    let allCoursesValue = JSON.parse(xhr.responseText);

    for(let key in allCoursesValue.response.Valute) {
      document.querySelector('#items').insertAdjacentHTML('beforeend', 
        `<div class="item">  
          <div class="item__code">${allCoursesValue.response.Valute[key].CharCode}</div>
          <div class="item__value">${allCoursesValue.response.Valute[key].Value}</div>
          <div class="item__currency"> руб.</div>
        </div>`) 
    }  
  }
}