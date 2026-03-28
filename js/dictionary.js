const burger = document.getElementById('burgerMenu');
        const alphabetMenu = document.getElementById('alphabetMenu');

        burger.addEventListener('click', () => {
          alphabetMenu.classList.toggle('show');
        });

        document.querySelectorAll('.letter').forEach(letter => {
          letter.addEventListener('click', () => {
            const selectedLetter = letter.dataset.letter;
            const section = document.getElementById(selectedLetter);
      
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      alphabetMenu.classList.remove('show');
          });
        });

      