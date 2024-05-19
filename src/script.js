function toggleAnswer(id) {
    const answerElement = document.getElementById(id);
    const isOpen = answerElement.getAttribute('answer-is-open') === 'true';
  
    // Toggle the answer visibility
    answerElement.setAttribute('answer-is-open', !isOpen);
    if (isOpen) {
      answerElement.classList.add('hidden');
    } else {
      answerElement.classList.remove('hidden');
    }
  
    // Get the icons associated with this answer
    const parentElement = answerElement.parentElement.previousElementSibling;
    const plusIcon = parentElement.querySelector('.plus-icon');
    const minusIcon = parentElement.querySelector('.minus-icon');
  
    // Toggle the icons
    if (isOpen) {
      plusIcon.classList.remove('hidden');
      minusIcon.classList.add('hidden');
    } else {
      plusIcon.classList.add('hidden');
      minusIcon.classList.remove('hidden');
    }
  }
  