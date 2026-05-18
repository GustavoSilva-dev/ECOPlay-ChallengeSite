document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const faqAnswer = faqItem.querySelector('.faq-answer');

            if (faqItem.classList.contains('active')) {
                faqAnswer.style.maxHeight = null;
                faqItem.classList.remove('active');
            } else {
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').style.maxHeight = null;
                });

                faqItem.classList.add('active');
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
            }
        });
    });
});