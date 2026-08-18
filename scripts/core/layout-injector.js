/**
 * layout-injector.js
 * 
 * Fetches and injects shared layout components (header and footer) into the public pages.
 * Handles mobile sidebar interactions and dropdown logic once the header is injected.
 */

document.addEventListener('DOMContentLoaded', async () => {
    try {
        // 1. Inject Header
        const headerPlaceholder = document.getElementById('global-header');
        if (headerPlaceholder) {
            const headerRes = await fetch('/layouts/public/header.html');
            if (headerRes.ok) {
                const headerHtml = await headerRes.text();
                headerPlaceholder.innerHTML = headerHtml;
                initializeHeaderScripts();
            } else {
                console.error('Failed to load header:', headerRes.status);
            }
        }

        // 2. Inject Footer
        const footerPlaceholder = document.getElementById('global-footer');
        if (footerPlaceholder) {
            const footerRes = await fetch('/layouts/public/footer.html');
            if (footerRes.ok) {
                const footerHtml = await footerRes.text();
                footerPlaceholder.innerHTML = footerHtml;
            } else {
                console.error('Failed to load footer:', footerRes.status);
            }
        }
    } catch (err) {
        console.error('Error injecting layouts:', err);
    }
});

function initializeHeaderScripts() {
    // Mobile Sidebar Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileSidebar = document.getElementById('mobile-sidebar');
    const mobileBackdrop = document.getElementById('mobile-backdrop');

    if (mobileMenuBtn && mobileSidebar && mobileBackdrop) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileSidebar.classList.add('is-open');
            mobileSidebar.setAttribute('aria-hidden', 'false');
            
            mobileBackdrop.style.display = 'block';
            // Slight delay to allow display:block to apply before opacity transition
            setTimeout(() => {
                mobileBackdrop.classList.add('is-open');
                mobileBackdrop.setAttribute('aria-hidden', 'false');
            }, 10);
        });

        mobileBackdrop.addEventListener('click', () => {
            mobileSidebar.classList.remove('is-open');
            mobileSidebar.setAttribute('aria-hidden', 'true');
            
            mobileBackdrop.classList.remove('is-open');
            mobileBackdrop.setAttribute('aria-hidden', 'true');
            
            setTimeout(() => {
                mobileBackdrop.style.display = 'none';
            }, 300);
        });
    }

    // Active Link Highlighting (basic implementation)
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.public-header__nav-item, .mobile-sidebar__link');
    
    navLinks.forEach(link => {
        // Clear active classes just in case
        link.classList.remove('public-header__nav-item--active', 'mobile-sidebar__link--active');
        
        if (link.getAttribute('href') === currentPath) {
            if (link.classList.contains('public-header__nav-item')) {
                link.classList.add('public-header__nav-item--active');
            } else {
                link.classList.add('mobile-sidebar__link--active');
            }
        }
    });
}
