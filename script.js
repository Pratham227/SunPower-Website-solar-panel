    const tabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.faq-panel');
    const faqQuestions = document.querySelectorAll('.faq-question');
  
    
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const targetPanel = this.getAttribute('data-tab');
  
        // Remove active class from all tabs and panels
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(panel => panel.classList.remove('active'));
  
        // Add active class to clicked tab and corresponding panel
        this.classList.add('active');
        document.getElementById(targetPanel).classList.add('active');
      });
    });
  
  
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        const isActive = this.classList.contains('active');
        
        
        faqQuestions.forEach(q => {
          q.classList.remove('active');
          q.nextElementSibling.style.maxHeight = '0';
        });
  
        
        if (!isActive) {
          this.classList.add('active');
          const answer = this.nextElementSibling;
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  });
  
