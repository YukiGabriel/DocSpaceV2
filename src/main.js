const menuButton = document.querySelectorAll('#menu-button');
const sidebar = document.getElementById('sidebar');

menuButton.forEach(button => {
  button.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
  });
});

