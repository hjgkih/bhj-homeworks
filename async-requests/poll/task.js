let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    let allQuestions = JSON.parse(xhr.responseText);

    document.querySelector('#poll__title').textContent = allQuestions.data.title;

    for(let key in allQuestions.data.answers) {
      document.querySelector('#poll__answers').insertAdjacentHTML('beforeend', 
        `<button class="poll__answer">
          ${allQuestions.data.answers[key]}
        </button>`)
    }

    Array.from(document.querySelectorAll('.poll__answer')).forEach((el, i) => {
      el.onclick = () => {
        alert('Спасибо, ваш голос засчитан!');
        
        const request = new XMLHttpRequest;
        request.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
        request.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
        request.send( `vote=${allQuestions.id}&answer=${i}` );
    
        request.onreadystatechange = function() {
          if(request.readyState === 4) {
            let statistic = JSON.parse(request.responseText);

            document.querySelector('#poll__answers').remove();
            
            let count = [];

            for(let i in statistic.stat) {
              count.push(statistic.stat[i].votes);
            }

            let summ = count.reduce((acc, curr) => acc + curr, 0);
            
            for(let newKey in statistic.stat) {
              document.querySelector('.poll').insertAdjacentHTML('afterend', 
                `<div class="poll__statistic">
                  ${statistic.stat[newKey].answer} : ${(statistic.stat[newKey].votes / summ * 100).toFixed(2)} %
                </div>`);
            }    
          }
        }
      }
    });
  }
}