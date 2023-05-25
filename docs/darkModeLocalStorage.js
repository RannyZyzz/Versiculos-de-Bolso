function toggleDarkMode() {
    var bodyElement = document.body;
    bodyElement.classList.toggle('dark-mode');
    
    if (bodyElement.classList.contains('dark-mode')) {
      localStorage.setItem('darkModeEnabled', 'true');
    } else {
      localStorage.removeItem('darkModeEnabled');
    }
  }

  // Verificar se o modo dark estava ativado anteriormente
  var darkModeEnabled = localStorage.getItem('darkModeEnabled');
  if (darkModeEnabled === 'true') {
    var bodyElement = document.body;
    bodyElement.classList.add('dark-mode');
  }