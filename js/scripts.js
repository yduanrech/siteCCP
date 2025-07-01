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
}

// Inicializa a aplicação
const centroCopias = new CentroCopias();
