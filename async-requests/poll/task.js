const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const url = 'https://students.netoservices.ru/nestjs-backend/poll';
const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'json';
xhr.onload = function() {
  if (xhr.status === 200) {
    const pollData = xhr.response;
        pollTitle.textContent = pollData.data.title;
        pollAnswers.innerHTML = '';
    pollData.data.answers.forEach(answerText => {
      const buttonHtml = `<button class="poll__answer">${answerText}</button>`;
      pollAnswers.insertAdjacentHTML('beforeend', buttonHtml);
    });
        pollAnswers.addEventListener('click', function(event) {
      if (event.target.classList.contains('poll__answer')) {
        alert('Спасибо, ваш голос засчитан!');
      }
});
}
};
xhr.send();