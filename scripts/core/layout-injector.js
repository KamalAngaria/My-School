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
        let headerInjected = false;
        
        if (headerPlaceholder) {
            if (headerPlaceholder.children.length === 0) {
                const headerRes = await fetch('/layouts/public/header.html');
                if (headerRes.ok) {
                    const headerHtml = await headerRes.text();
                    headerPlaceholder.innerHTML = headerHtml;
                    headerInjected = true;
                } else {
                    console.error('Failed to load header:', headerRes.status);
                }
            } else {
                headerInjected = true; // Already injected by build step
            }
            
            if (headerInjected) {
                initializeHeaderScripts();
            }
        }

        // 2. Inject Footer
        const footerPlaceholder = document.getElementById('global-footer');
        if (footerPlaceholder && footerPlaceholder.children.length === 0) {
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
    const mobileCloseBtn = document.getElementById('mobile-sidebar-close');

    function openMobileDrawer() {
        if (!mobileSidebar || !mobileBackdrop) return;
        mobileSidebar.classList.add('is-open');
        mobileSidebar.setAttribute('aria-hidden', 'false');
        
        // Lock body & document scrolling
        document.body.classList.add('mobile-nav-locked');
        document.documentElement.classList.add('mobile-nav-locked');
        
        mobileBackdrop.style.display = 'block';
        setTimeout(() => {
            mobileBackdrop.classList.add('is-open');
            mobileBackdrop.setAttribute('aria-hidden', 'false');
        }, 10);
    }

    function closeMobileDrawer() {
        if (!mobileSidebar || !mobileBackdrop) return;
        mobileSidebar.classList.remove('is-open');
        mobileSidebar.setAttribute('aria-hidden', 'true');
        
        // Restore body & document scrolling
        document.body.classList.remove('mobile-nav-locked');
        document.documentElement.classList.remove('mobile-nav-locked');
        
        mobileBackdrop.classList.remove('is-open');
        mobileBackdrop.setAttribute('aria-hidden', 'true');
        
        setTimeout(() => {
            mobileBackdrop.style.display = 'none';
        }, 300);
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (mobileSidebar && mobileSidebar.classList.contains('is-open')) {
                closeMobileDrawer();
            } else {
                openMobileDrawer();
            }
        });
    }

    if (mobileCloseBtn) {
        mobileCloseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeMobileDrawer();
        });
    }

    if (mobileBackdrop) {
        mobileBackdrop.addEventListener('click', closeMobileDrawer);
        mobileBackdrop.addEventListener('touchmove', (e) => {
            e.preventDefault();
        }, { passive: false });
    }

    // Keyboard accessibility: Escape key closes the drawer
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileSidebar && mobileSidebar.classList.contains('is-open')) {
            closeMobileDrawer();
        }
    });

    // Close drawer when any mobile navigation link or CTA is clicked
    if (mobileSidebar) {
        const mobileNavLinks = mobileSidebar.querySelectorAll('a.mobile-sidebar__link, a.mobile-sidebar__cta');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeMobileDrawer();
            });
        });
    }

    // Mobile Sidebar Dropdown Logic
    const dropdownBtn = document.querySelector('.mobile-sidebar__dropdown-btn');
    const submenuWrapper = document.getElementById('mobile-info-menu');
    
    if (dropdownBtn) {
        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = dropdownBtn.getAttribute('aria-expanded') === 'true';
            dropdownBtn.setAttribute('aria-expanded', !isExpanded);
            if (submenuWrapper) {
                submenuWrapper.setAttribute('aria-hidden', isExpanded ? 'true' : 'false');
            }
        });
    }

    // Active Link Highlighting (Robust Implementation)
    let currentPath = window.location.pathname;
    
    // Normalize current path: ignore trailing slash and .html
    if (currentPath.endsWith('/') && currentPath.length > 1) {
        currentPath = currentPath.slice(0, -1);
    }
    if (currentPath.endsWith('.html')) {
        currentPath = currentPath.slice(0, -5);
    }
    if (currentPath === '') {
        currentPath = '/';
    }

    // If on Information page, auto-expand mobile Information accordion
    if (currentPath.includes('information') && dropdownBtn) {
        dropdownBtn.setAttribute('aria-expanded', 'true');
        if (submenuWrapper) {
            submenuWrapper.setAttribute('aria-hidden', 'false');
        }
    }

    const currentHash = window.location.hash;
    const navLinks = document.querySelectorAll('.public-header__nav-item, .mobile-sidebar__link, .mobile-sidebar__link--nested');
    
    navLinks.forEach(link => {
        // Clear hardcoded active classes
        link.classList.remove('public-header__nav-item--active', 'mobile-sidebar__link--active');
        
        const rawHref = link.getAttribute('href');
        if (!rawHref) return;

        // Extract path and hash from link href
        const [pathPart, hashPart] = rawHref.split('#');
        let linkPath = pathPart.split('?')[0];

        // Normalize link path
        if (linkPath.endsWith('/') && linkPath.length > 1) {
            linkPath = linkPath.slice(0, -1);
        }
        if (linkPath.endsWith('.html')) {
            linkPath = linkPath.slice(0, -5);
        }
        if (linkPath === '') {
            linkPath = '/';
        }

        // Compare normalized paths
        if (linkPath === currentPath) {
            let isMatch = false;
            
            if (hashPart) {
                // If the link is a sub-section (like mobile Information children), match the specific hash
                if (currentHash === '#' + hashPart) {
                    isMatch = true;
                }
            } else {
                // If the link has no hash (like Home, School, or Desktop Information parent), it's a match
                isMatch = true;
            }

            if (isMatch) {
                if (link.classList.contains('public-header__nav-item')) {
                    link.classList.add('public-header__nav-item--active');
                } else {
                    link.classList.add('mobile-sidebar__link--active');
                }
            }
        }
    });
}
