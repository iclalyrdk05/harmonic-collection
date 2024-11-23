document.querySelectorAll('.sidenav a').forEach(link => {
    link.addEventListener('click', function() {
      document.querySelector('.sidenav a.active')?.classList.remove('active');
      this.classList.add('active');
    });
  });
  