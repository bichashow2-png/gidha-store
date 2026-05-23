/**
 * Main JavaScript File for Gidha Store
 * ملف الجافاسكريبت الرئيسي لمتجر غذاء
 * 
 * Includes: Navigation handling, Mobile Menu Toggle, Button Interactions, 
 * Form Validations, and a Simple Carousel for grid components.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle | فتح وإغلاق قائمة الهاتف
    const initMobileMenu = () => {
        const headerContainer = document.querySelector('.header .container');
        const navMenu = document.querySelector('.nav-menu');
        
        // Create hamburger button if it doesn't exist | إنشاء زر القائمة إذا لم يكن موجوداً
        if (!document.querySelector('.mobile-menu-btn') && headerContainer && navMenu) {
            const menuBtn = document.createElement('button');
            menuBtn.className = 'mobile-menu-btn';
            menuBtn.innerHTML = '<span class="material-icons">menu</span>';
            menuBtn.setAttribute('aria-label', 'تبديل القائمة'); // Toggle Menu
            
            // Insert button as the first item in header container for mobile | إدراج الزر 
            // Depending on layout, usually near the logo or right side. Let's append to header-icons
            const headerIcons = document.querySelector('.header-icons');
            if(headerIcons) {
                headerContainer.insertBefore(menuBtn, headerIcons);
            } else {
                headerContainer.appendChild(menuBtn);
            }
            
            // Toggle functionality | تفعيل فتح وإغلاق القائمة
            menuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                navMenu.classList.toggle('active');
                
                // Change icon based on state | تغيير الأيقونة بناءً على حالة القائمة
                const isExpanded = navMenu.classList.contains('active');
                menuBtn.innerHTML = isExpanded 
                    ? '<span class="material-icons">close</span>' 
                    : '<span class="material-icons">menu</span>';
            });

            // Close menu when clicking outside | إغلاق القائمة عند النقر في الخارج
            document.addEventListener('click', (e) => {
                if (!headerContainer.contains(e.target) && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuBtn.innerHTML = '<span class="material-icons">menu</span>';
                }
            });
        }
    };

    // 2. Form Validation | التحقق من النماذج
    const initForms = () => {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            // Remove native validation alerts (like onsubmit attribute in HTML)
            form.removeAttribute('onsubmit'); 

            form.addEventListener('submit', (e) => {
                e.preventDefault(); // منع الإرسال الفعلي | Prevent actual submission
                
                let isValid = true;
                // Get all required inputs | إحضار جميع الحقول الإلزامية
                const inputs = form.querySelectorAll('input[required], textarea[required]');
                
                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        isValid = false;
                        input.style.borderColor = 'var(--red)'; // تعليم الحقل بالأحمر | Highlight in red
                    } else {
                        input.style.borderColor = 'var(--border-color)'; // إعادة اللون الأصلي | Reset color
                    }
                });
                
                if (isValid) {
                    // Fake success message | رسالة نجاح وهمية بدون backend
                    alert('تمت العملية بنجاح! شكراً لتواصلك معنا.'); // Operation successful!
                    form.reset(); // تفريغ النموذج | Reset form
                } else {
                    alert('يرجى تعبئة جميع الحقول المطلوبة.'); // Please fill all required fields.
                }
            });
        });
    };

    // 3. Simple Carousel/Slider (Vanilla JS) | سلايدر للتمرير الأفقي
    // Drag-to-scroll functionality for Products and Categories grids on mobile
    const initCarousels = () => {
        const carouselContainers = document.querySelectorAll('.products-grid, .categories-grid');
        
        carouselContainers.forEach(container => {
            let isDown = false;
            let startX;
            let scrollLeft;

            container.addEventListener('mousedown', (e) => {
                isDown = true;
                container.style.cursor = 'grabbing';
                startX = e.pageX - container.offsetLeft;
                scrollLeft = container.scrollLeft;
            });
            
            container.addEventListener('mouseleave', () => {
                isDown = false;
                container.style.cursor = 'grab';
            });
            
            container.addEventListener('mouseup', () => {
                isDown = false;
                container.style.cursor = 'grab';
            });
            
            container.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - container.offsetLeft;
                const walk = (x - startX) * 2; // Scroll speed | سرعة التمرير
                
                // For RTL, we invert the scroll logic visually
                const isRTL = document.documentElement.dir === 'rtl';
                container.scrollLeft = isRTL ? scrollLeft + walk : scrollLeft - walk;
            });
        });
    };

    // 4. Button Interactions | تفاعلات الأزرار الوهمية (Alerts)
    const initButtons = () => {
        // Select all dummy links and non-submit buttons
        const dummyButtons = document.querySelectorAll('a[href="#"], button:not([type="submit"]):not(.mobile-menu-btn)');
        
        dummyButtons.forEach(btn => {
            // Add interaction only if the HTML onclick attribute doesn't have its own specific alert
            if(!btn.getAttribute('onclick')) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    // Alert for prototype purpose | تنبيه للنماذج الأولية
                    alert('هذه الميزة في النموذج الأولي فقط (قيد التطوير).'); 
                });
            }
        });
    };
    
    // 5. Active Link Highlight | تمييز الرابط النشط في القائمة
    const initActiveLinks = () => {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            // Remove active class from all | مسح الحالة النشطة من الجميع
            link.classList.remove('active');
            
            // Add active class if URL matches | إضافة الحالة النشطة للرابط المتطابق
            if (linkHref && (linkHref.includes(currentPath) || (currentPath === '' && linkHref === 'index.html'))) {
                link.classList.add('active');
            }
        });
    };

    // Initialize all modules | تشغيل كافة الوظائف
    initMobileMenu();
    initForms();
    initCarousels();
    initButtons();
    initActiveLinks();
});

document.addEventListener('DOMContentLoaded', () => {
    // Make entire product cards clickable
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            // Prevent triggering if a button or specific link inside was clicked
            if (e.target.closest('.btn-cart-icon') || e.target.closest('a')) {
                return;
            }
            const titleLink = card.querySelector('.product-title a');
            if (titleLink) {
                window.location.href = titleLink.href;
            }
        });
    });
});
