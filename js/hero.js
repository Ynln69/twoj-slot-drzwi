document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.hero, .about, .services, .products');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
  
    sections.forEach((section) => observer.observe(section));
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product-item');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
          }
        });
      },
      { threshold: 0.1 }
    );
  
    products.forEach((product) => {
      product.style.animationPlayState = 'paused'; // Початкова пауза анімації
      observer.observe(product);
    });
  });
  