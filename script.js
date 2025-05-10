// Show a welcome message when the page loads
window.addEventListener('DOMContentLoaded', () => {
  alert('Welcome to Camper Cafe!');
});

// Add interactivity to each menu item
document.querySelectorAll('.item').forEach(item => {
  // Highlight on hover
  item.addEventListener('mouseenter', () => {
    item.style.backgroundColor = '#ffeeba';
  });

  item.addEventListener('mouseleave', () => {
    item.style.backgroundColor = '';
  });

  // Show a message when clicked
  item.addEventListener('click', () => {
    const name = item.querySelector('.flavor, .dessert')?.textContent;
    const price = item.querySelector('.price')?.textContent;
    if (name && price) {
      alert(`You selected ${name} for $${price}`);
    }
  });
});
