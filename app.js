import { renderHeader } from './components/header.js';
import { renderNavbar } from './components/navbar.js';

const App = {
    init() {
        this.renderShell();
        this.loadPage('home');
        this.initTheme();
        this.bindEvents();
    },

    renderShell() {
        document.getElementById('header-container').innerHTML = renderHeader();
        document.getElementById('navbar-container').innerHTML = renderNavbar();
    },

    async loadPage(page) {
        try {
            const response = await fetch(`pages/${page}.html`);
            if (!response.ok) throw new Error('Page not found');
            const html = await response.text();
            document.getElementById('main-container').innerHTML = html;
            this.updateNav(page);
        } catch (error) {
            console.error(error);
            document.getElementById('main-container').innerHTML = `<p>Error loading page.</p>`;
        }
    },

    updateNav(page) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if(item.dataset.page === page) item.classList.add('active');
        });
    },

    initTheme() {
        const isDark = localStorage.getItem('theme') === 'dark';
        if (isDark) document.body.classList.add('dark-mode');
    },

    bindEvents() {
        // Navigation clicks
        document.body.addEventListener('click', (e) => {
            const navBtn = e.target.closest('.nav-item');
            if (navBtn) {
                const page = navBtn.dataset.page;
                this.loadPage(page);
            }

            // Theme toggle
            const themeToggle = e.target.closest('#theme-toggle');
            if (themeToggle) {
                document.body.classList.toggle('dark-mode');
                localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
            }

            // Open Profile
            const profileBtn = e.target.closest('#profile-btn');
            if (profileBtn) this.loadPage('profile');

            // Open Notifications
            const notifBtn = e.target.closest('#notif-btn');
            if (notifBtn) this.loadPage('notifications');
        });
    }
};

window.onload = () => App.init();
