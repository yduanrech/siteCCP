// Scripts personalizados para o site Centro de Cópias

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling para links âncora
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animação de entrada para cards de serviços
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar animação aos cards de serviços
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Navbar background no scroll
    const navbar = document.querySelector('.navbar');
    const navbarBrand = document.querySelector('.navbar-brand');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#2f2a61';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
        } else {
            navbar.style.backgroundColor = '#2f2a61';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });

    // Highlight do menu ativo
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Formulário de contato (se existir)
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envio do formulário
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
            
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                
                // Mostrar mensagem de sucesso
                const alertDiv = document.createElement('div');
                alertDiv.className = 'alert alert-success alert-dismissible fade show mt-3';
                alertDiv.innerHTML = `
                    <strong>Sucesso!</strong> Sua mensagem foi enviada com sucesso. 
                    Entraremos em contato em breve.
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                `;
                
                this.appendChild(alertDiv);
                this.reset();
                
                // Remover alerta após 5 segundos
                setTimeout(() => {
                    if (alertDiv.parentNode) {
                        alertDiv.remove();
                    }
                }, 5000);
            }, 2000);
        });
    }

    // Efeito parallax suave no hero
    const heroSections = document.querySelectorAll('.hero-section, .hero-banner');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        heroSections.forEach(hero => {
            if (hero.style.backgroundImage || hero.style.background) {
                hero.style.transform = `translateY(${rate}px)`;
            }
        });
    });

    // Tooltip para botões (se Bootstrap tooltip estiver disponível)
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    // Animação para contadores (se existirem)
    const counters = document.querySelectorAll('.counter');
    
    if (counters.length > 0) {
        const countObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    const increment = target / 100;
                    let current = 0;
                    
                    const updateCounter = () => {
                        if (current < target) {
                            current += increment;
                            counter.textContent = Math.ceil(current);
                            setTimeout(updateCounter, 20);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    
                    updateCounter();
                    countObserver.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => {
            countObserver.observe(counter);
        });
    }

    // Lazy loading para imagens
    const images = document.querySelectorAll('img[data-src]');
    
    if (images.length > 0) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Loading state para botões de ação
    const actionButtons = document.querySelectorAll('.btn-primary, .btn-outline-primary');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Adicionar efeito de loading se for um link externo ou formulário
            if (this.tagName === 'BUTTON' || this.getAttribute('href') === '#') {
                const originalHTML = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Carregando...';
                this.disabled = true;
                
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.disabled = false;
                }, 1500);
            }
        });
    });

    console.log('🎉 Centro de Cópias - Site carregado com sucesso!');
});

// Função para scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Botão de voltar ao topo (criar se não existir)
window.addEventListener('scroll', function() {
    let scrollTopBtn = document.querySelector('#scrollTopBtn');
    
    if (!scrollTopBtn) {
        scrollTopBtn = document.createElement('button');
        scrollTopBtn.id = 'scrollTopBtn';
        scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollTopBtn.className = 'btn btn-primary position-fixed';
        scrollTopBtn.style.cssText = `
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: none;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        `;
        scrollTopBtn.onclick = scrollToTop;
        document.body.appendChild(scrollTopBtn);
    }
    
    if (window.scrollY > 500) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});
