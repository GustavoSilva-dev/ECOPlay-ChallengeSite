// Script para funcionalidade das FAQs
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

// Script para funcionalidade do menu mobile
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuMobile = document.querySelector('.mobile-menu');

    menuToggle.addEventListener('click', () => {
        menuMobile.classList.toggle('closed');
    });
});


// Script para funcionalidade do botão "Voltar ao Topo"
const btnTop = document.querySelector("#voltar")

window.onscroll = function() {
  if (window.scrollY > 300) {
    btnTop.style.display = "block"
  } else {
    btnTop.style.display = "none"
  }
}

btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})