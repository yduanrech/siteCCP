/**
 * CENTRO DE CÓPIAS - JAVASCRIPT MODERNO 2025
 * Arquivo principal com todas as funcionalidades interativas
 */

class CentroCopias {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupAnimations();
        this.setupNavigation();
        this.setupScrollEffects();
        this.setupFormHandlers();
        this.logInit();
    }

    /**
     * Configuração de event listeners
     */
    setupEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            this.initPageAnimations();
        });

        window.addEventListener('scroll', () => {
            this.handleScroll();
        });

        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }

    /**
     * Configuração das animações
     */
    setupAnimations() {
        // Intersection Observer para animações
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, this.observerOptions);
    }

    /**
     * Anima elementos quando entram na viewport
     */
    animateElement(element) {
        if (element.classList.contains('modern-card')) {
            element.classList.add('show');
        }
        
        if (element.classList.contains('glass-card')) {
            element.classList.add('show');
        }
        
        if (element.classList.contains('service-card')) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    }

    /**
     * Inicializa animações específicas da página
     */
    initPageAnimations() {
        // Detecta qual página está sendo carregada
        const currentPage = this.getCurrentPage();
        
        switch(currentPage) {
            case 'plotagem':
                this.initPlotterAnimations();
                break;
            case 'pulseiras':
                this.initPulseiraAnimations();
                break;
            case 'impressoes':
                this.initImpressaoAnimations();
                break;
            default:
                this.initDefaultAnimations();
        }

        // Observa todos os elementos animáveis
        this.observeElements();
    }

    /**
     * Animações específicas da página de plotagem
     */
    initPlotterAnimations() {
        // Floating plotters
        setTimeout(() => {
            const epsonPlotter = document.getElementById('epsonPlotter');
            if (epsonPlotter) epsonPlotter.classList.add('animate');
        }, 500);
        
        setTimeout(() => {
            const hpPlotter = document.getElementById('hpPlotter');
            if (hpPlotter) hpPlotter.classList.add('animate');
        }, 1000);
        
        // Glass cards no hero
        setTimeout(() => {
            const plotterCard1 = document.getElementById('plotterCard1');
            if (plotterCard1) plotterCard1.classList.add('show');
        }, 1500);
        
        setTimeout(() => {
            const plotterCard2 = document.getElementById('plotterCard2');
            if (plotterCard2) plotterCard2.classList.add('show');
        }, 2000);
    }

    /**
     * Animações específicas da página de pulseiras
     */
    initPulseiraAnimations() {
        // Floating pulseira image
        setTimeout(() => {
            const pulseiraFloat = document.getElementById('pulseiraFloat');
            if (pulseiraFloat) pulseiraFloat.classList.add('animate');
        }, 500);
        
        // Info cards
        setTimeout(() => {
            const infoCards = document.querySelectorAll('.pulseira-info-card');
            infoCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('show');
                }, index * 200);
            });
        }, 1000);
    }

    /**
     * Animações específicas da página de impressões
     */
    initImpressaoAnimations() {
        // Floating printer
        setTimeout(() => {
            const printerFloat = document.getElementById('printerFloat');
            if (printerFloat) printerFloat.classList.add('animate');
        }, 500);
    }

    /**
     * Animações padrão para outras páginas
     */
    initDefaultAnimations() {
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    /**
     * Observa elementos para animação
     */
    observeElements() {
        const elementsToObserve = document.querySelectorAll(
            '.modern-card, .glass-card, .service-card, .contact-info'
        );
        
        elementsToObserve.forEach(element => {
            this.intersectionObserver.observe(element);
        });
    }

    /**
     * Configuração da navegação
     */
    setupNavigation() {
        // Smooth scroll para links âncora
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                this.smoothScrollTo(anchor.getAttribute('href'));
            });
        });

        // Highlight do menu ativo
        this.highlightActiveMenu();
    }

    /**
     * Scroll suave para elemento
     */
    smoothScrollTo(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
            const targetPosition = targetElement.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    /**
     * Destaca menu ativo
     */
    highlightActiveMenu() {
        const currentPage = this.getCurrentPage();
        const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');
        
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === `${currentPage}.html` || 
                (currentPage === 'index' && linkHref === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    /**
     * Configuração de efeitos no scroll
     */
    setupScrollEffects() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    /**
     * Manipula eventos de scroll
     */
    handleScroll() {
        const scrollY = window.pageYOffset;
        
        // Navbar background
        this.updateNavbar(scrollY);
        
        // Parallax effect
        this.updateParallax(scrollY);
        
        // Scroll to top button
        this.updateScrollToTopButton(scrollY);
    }

    /**
     * Atualiza navbar no scroll
     */
    updateNavbar(scrollY) {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(8, 151, 208, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.backgroundColor = '#0897d0';
                navbar.style.backdropFilter = 'none';
            }
        }
    }

    /**
     * Efeito parallax suave
     */
    updateParallax(scrollY) {
        // Floating elements
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
            const speed = 0.1 + (index * 0.05);
            element.style.transform = `translateY(${scrollY * speed}px)`;
        });
    }

    /**
     * Botão scroll to top
     */
    updateScrollToTopButton(scrollY) {
        let scrollTopBtn = document.querySelector('#scrollTopBtn');
        
        if (!scrollTopBtn) {
            scrollTopBtn = this.createScrollToTopButton();
        }
        
        if (scrollY > 500) {
            scrollTopBtn.style.display = 'flex';
            scrollTopBtn.style.opacity = '1';
        } else {
            scrollTopBtn.style.opacity = '0';
            setTimeout(() => {
                if (scrollY <= 500) scrollTopBtn.style.display = 'none';
            }, 300);
        }
    }

    /**
     * Cria botão scroll to top
     */
    createScrollToTopButton() {
        const button = document.createElement('button');
        button.id = 'scrollTopBtn';
        button.innerHTML = '<i class="fas fa-arrow-up"></i>';
        button.className = 'btn btn-primary position-fixed d-flex align-items-center justify-content-center';
        button.style.cssText = `
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            z-index: 1000;
            transition: all 0.3s ease;
            display: none;
            opacity: 0;
        `;
        
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        document.body.appendChild(button);
        return button;
    }

    /**
     * Configuração de formulários
     */
    setupFormHandlers() {
        const contactForm = document.querySelector('#contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                this.handleFormSubmit(e);
            });
        }

        // Loading state para botões de ação
        this.setupButtonLoading();
    }

    /**
     * Manipula envio de formulários
     */
    handleFormSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Simula envio
        this.showLoadingState(submitBtn, 'Enviando...');
        
        setTimeout(() => {
            this.hideLoadingState(submitBtn, originalText);
            this.showSuccessMessage(form);
            form.reset();
        }, 2000);
    }

    /**
     * Configuração de loading em botões
     */
    setupButtonLoading() {
        const actionButtons = document.querySelectorAll('.btn-primary, .btn-outline-primary');
        
        actionButtons.forEach(button => {
            if (button.tagName === 'BUTTON' || button.getAttribute('href') === '#') {
                button.addEventListener('click', (e) => {
                    if (button.type !== 'submit') {
                        e.preventDefault();
                        this.showButtonLoadingEffect(button);
                    }
                });
            }
        });
    }

    /**
     * Efeito de loading em botão
     */
    showButtonLoadingEffect(button) {
        const originalHTML = button.innerHTML;
        button.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Carregando...';
        button.disabled = true;
        
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.disabled = false;
        }, 1500);
    }

    /**
     * Mostra estado de loading
     */
    showLoadingState(element, text) {
        element.innerHTML = `<i class="fas fa-spinner fa-spin me-2"></i>${text}`;
        element.disabled = true;
    }

    /**
     * Esconde estado de loading
     */
    hideLoadingState(element, originalText) {
        element.innerHTML = originalText;
        element.disabled = false;
    }

    /**
     * Mostra mensagem de sucesso
     */
    showSuccessMessage(form) {
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-success alert-dismissible fade show mt-3';
        alertDiv.innerHTML = `
            <strong>Sucesso!</strong> Sua mensagem foi enviada com sucesso. 
            Entraremos em contato em breve.
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        form.appendChild(alertDiv);
        
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.remove();
            }
        }, 5000);
    }

    /**
     * Manipula redimensionamento da janela
     */
    handleResize() {
        // Recalcula posições se necessário
        this.debounce(() => {
            // Lógica de redimensionamento aqui
        }, 250)();
    }

    /**
     * Debounce function
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Obtém página atual
     */
    getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop().replace('.html', '');
        return page || 'index';
    }

    /**
     * Log de inicialização
     */
    logInit() {
        console.log('🎉 Centro de Cópias - Sistema iniciado com sucesso!');
        console.log(`📄 Página atual: ${this.getCurrentPage()}`);
        console.log('🚀 Todas as funcionalidades carregadas');
    }

    // Página específica de Pulseiras
    initPulseirasPage() {
        const floatingPulseira1 = document.getElementById('floating-pulseira-1');
        const floatingPulseira2 = document.getElementById('floating-pulseira-2');
        
        if (floatingPulseira1) {
            this.addFloatingAnimation(floatingPulseira1, { 
                duration: 6000, 
                amplitude: { x: 30, y: 20 },
                delay: 0 
            });
        }
        
        if (floatingPulseira2) {
            this.addFloatingAnimation(floatingPulseira2, { 
                duration: 4000, 
                amplitude: { x: 20, y: 25 },
                delay: 2000 
            });
        }
    }

    // Página específica de Impressões
    initImpressoesPage() {
        const floatingImpressora1 = document.getElementById('floating-impressora-1');
        
        if (floatingImpressora1) {
            this.addFloatingAnimation(floatingImpressora1, { 
                duration: 5000, 
                amplitude: { x: 25, y: 15 },
                delay: 1000 
            });
        }
    }

    // Página específica de Carimbos
    initCarimbosPage() {
        const floatingCarimbo1 = document.getElementById('floating-carimbo-1');
        
        if (floatingCarimbo1) {
            this.addFloatingAnimation(floatingCarimbo1, { 
                duration: 4500, 
                amplitude: { x: 20, y: 30 },
                delay: 500 
            });
        }
    }

    // Página específica de Crachás
    initCrachasPage() {
        // Adicionar animações específicas para crachás quando necessário
        console.log('Página de Crachás inicializada');
    }

    // Página específica de Outros Serviços
    initOutrosServicosPage() {
        // Adicionar animações específicas para outros serviços quando necessário
        console.log('Página de Outros Serviços inicializada');
    }

    // Detectar página atual e inicializar funcionalidades específicas
    initPageSpecificFeatures() {
        const currentPage = window.location.pathname.split('/').pop();
        
        switch(currentPage) {
            case 'pulseiras.html':
                this.initPulseirasPage();
                break;
            case 'impressoes.html':
                this.initImpressoesPage();
                break;
            case 'carimbos.html':
                this.initCarimbosPage();
                break;
            case 'crachas.html':
                this.initCrachasPage();
                break;
            case 'outros-servicos.html':
                this.initOutrosServicosPage();
                break;
            case 'plotagem.html':
                this.initPlottersPage();
                break;
            default:
                // Página inicial ou outras
                break;
        }
    }

    /**
     * Animação de contagem para métricas
     */
    animateCounters() {
        const counters = document.querySelectorAll('.metric-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent.replace(/\D/g, ''));
            const suffix = counter.textContent.replace(/\d/g, '');
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target + suffix;
                    clearInterval(timer);
                    counter.classList.add('counting');
                } else {
                    counter.textContent = Math.floor(current) + suffix;
                }
            }, 20);
        });
    }

    /**
     * Efeito parallax suave para hero section
     */
    setupParallax() {
        const heroSection = document.querySelector('.hero-section');
        if (!heroSection) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        });
    }

    /**
     * Loading screen animado
     */
    setupPageLoader() {
        const loader = document.createElement('div');
        loader.className = 'page-loader';
        loader.innerHTML = '<div class="loader-spinner"></div>';
        document.body.appendChild(loader);

        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('hidden');
                setTimeout(() => {
                    loader.remove();
                }, 500);
            }, 800);
        });
    }

    /**
     * Smooth scroll para navegação
     */
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    /**
     * Navbar scroll effect melhorado
     */
    enhanceNavbar() {
        const navbar = document.querySelector('.modern-navbar');
        if (!navbar) return;

        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateNavbar = () => {
            const scrollY = window.scrollY;
            
            if (scrollY > 100) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }

            // Hide/show navbar on scroll
            if (scrollY > lastScrollY && scrollY > 200) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }

            lastScrollY = scrollY;
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateNavbar);
                ticking = true;
            }
        });
    }

    /**
     * Animação de entrada dos cards
     */
    animateCards() {
        const cards = document.querySelectorAll('.service-card, .value-prop-card, .advantage-item, .equipment-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('fade-in');
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        cards.forEach(card => {
            observer.observe(card);
        });
    }

    /**
     * WhatsApp floating button
     */
    addWhatsAppFloat() {
        const whatsappFloat = document.createElement('a');
        whatsappFloat.href = 'https://wa.me/5547999999999';
        whatsappFloat.className = 'whatsapp-float';
        whatsappFloat.innerHTML = '<i class="fab fa-whatsapp"></i>';
        whatsappFloat.target = '_blank';
        whatsappFloat.setAttribute('aria-label', 'Falar no WhatsApp');
        
        document.body.appendChild(whatsappFloat);

        // Hide on scroll down, show on scroll up
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > 300) {
                whatsappFloat.style.transform = 'translateY(100px)';
            } else {
                whatsappFloat.style.transform = 'translateY(0)';
            }
            lastScrollTop = scrollTop;
        });
    }

    /**
     * Lazy loading para imagens
     */
    setupLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('loading-shimmer');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            img.classList.add('loading-shimmer');
            imageObserver.observe(img);
        });
    }

    /**
     * Feedback visual para interações
     */
    setupFeedback() {
        // Ripple effect para botões
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    /**
     * Performance monitoring
     */
    setupPerformanceMonitoring() {
        // Monitor loading time
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            console.log(`Site carregado em ${Math.round(loadTime)}ms`);
            
            // Track largest contentful paint
            new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log(`LCP: ${Math.round(lastEntry.startTime)}ms`);
            }).observe({ entryTypes: ['largest-contentful-paint'] });
        });
    }

    /**
     * Acessibilidade melhorada
     */
    enhanceAccessibility() {
        // Skip link
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Pular para o conteúdo principal';
        skipLink.className = 'skip-link sr-only-focusable';
        document.body.insertBefore(skipLink, document.body.firstChild);

        // Focus management
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }

    /**
     * Analytics tracking
     */
    trackUserInteractions() {
        // Track service card clicks
        document.querySelectorAll('.service-card .service-cta').forEach(link => {
            link.addEventListener('click', (e) => {
                const serviceName = e.target.closest('.service-card').querySelector('h3').textContent;
                console.log(`Clique no serviço: ${serviceName}`);
                // Aqui você adicionaria o código do Google Analytics
            });
        });

        // Track WhatsApp clicks
        document.querySelectorAll('[href*="wa.me"]').forEach(link => {
            link.addEventListener('click', () => {
                console.log('Clique no WhatsApp');
                // Aqui você adicionaria o código do Google Analytics
            });
        });
    }

    /**
     * Inicialização completa
     */
    initializeEnhancements() {
        this.setupPageLoader();
        this.setupSmoothScroll();
        this.enhanceNavbar();
        this.animateCards();
        this.addWhatsAppFloat();
        this.setupLazyLoading();
        this.setupFeedback();
        this.setupPerformanceMonitoring();
        this.enhanceAccessibility();
        this.trackUserInteractions();
        
        // Animar contadores quando visíveis
        const metricsSection = document.querySelector('.metrics-grid');
        if (metricsSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateCounters();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(metricsSection);
        }
    }
}

// Inicializa a aplicação
const centroCopias = new CentroCopias();

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    const centroCopias = new CentroCopias();
    centroCopias.initializeEnhancements();
    
    console.log('🎨 Centro de Cópias - Site carregado com sucesso!');
    console.log('✨ Versão 2025 - Design Profissional Implementado');
});

// Função para mostrar notificações
function showNotification(message, type = 'info', duration = 5000) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px;">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.2rem; cursor: pointer; margin-left: auto;">&times;</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Mostrar notificação
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remover automaticamente
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, duration);
}

// Função para criar skeleton loading
function createSkeleton(container, lines = 3) {
    const skeleton = document.createElement('div');
    skeleton.className = 'card-skeleton';
    
    for (let i = 0; i < lines; i++) {
        const line = document.createElement('div');
        line.className = `skeleton-line ${i === lines - 1 ? 'short' : i % 2 === 0 ? 'medium' : ''}`;
        skeleton.appendChild(line);
    }
    
    container.appendChild(skeleton);
    return skeleton;
}

// Função para simular carregamento assíncrono
function loadContent(element, duration = 2000) {
    const skeleton = createSkeleton(element);
    
    return new Promise(resolve => {
        setTimeout(() => {
            skeleton.remove();
            resolve();
        }, duration);
    });
}

// Utilitários para animações suaves
const AnimationUtils = {
    fadeIn: (element, duration = 300) => {
        element.style.opacity = '0';
        element.style.display = 'block';
        
        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = (timestamp - start) / duration;
            
            element.style.opacity = Math.min(progress, 1);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    },
    
    slideUp: (element, duration = 300) => {
        element.style.maxHeight = element.scrollHeight + 'px';
        element.style.overflow = 'hidden';
        element.style.transition = `max-height ${duration}ms ease-out`;
        
        requestAnimationFrame(() => {
            element.style.maxHeight = '0';
        });
        
        setTimeout(() => {
            element.style.display = 'none';
        }, duration);
    },
    
    slideDown: (element, duration = 300) => {
        element.style.display = 'block';
        element.style.maxHeight = '0';
        element.style.overflow = 'hidden';
        element.style.transition = `max-height ${duration}ms ease-out`;
        
        requestAnimationFrame(() => {
            element.style.maxHeight = element.scrollHeight + 'px';
        });
        
        setTimeout(() => {
            element.style.maxHeight = '';
            element.style.overflow = '';
            element.style.transition = '';
        }, duration);
    }
};

// Service Worker para PWA (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registrado com sucesso:', registration);
            })
            .catch((registrationError) => {
                console.log('SW falhou ao registrar:', registrationError);
            });
    });
}

// Função para tracking de eventos (Google Analytics)
function trackEvent(action, category = 'Interaction', label = '') {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
    console.log(`📊 Event tracked: ${category} - ${action} - ${label}`);
}

// Função para otimização de imagens
function optimizeImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Lazy loading nativo
        img.loading = 'lazy';
        
        // WebP support detection
        const supportsWebp = (function() {
            const canvas = document.createElement('canvas');
            return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
        })();
        
        if (supportsWebp && img.dataset.webp) {
            img.src = img.dataset.webp;
        }
    });
}

// Error handling global
window.addEventListener('error', (e) => {
    console.error('Erro capturado:', e.error);
    // Aqui você pode enviar erros para um serviço de monitoramento
});

// Performance monitoring
if ('PerformanceObserver' in window) {
    // Monitor Core Web Vitals
    new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
            console.log(`📈 ${entry.name}: ${Math.round(entry.value)}ms`);
        }
    }).observe({ entryTypes: ['measure', 'navigation'] });
}

// Exportar para uso global
window.CentroCopias = CentroCopias;
window.showNotification = showNotification;
window.AnimationUtils = AnimationUtils;
window.trackEvent = trackEvent;
