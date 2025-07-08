
document.addEventListener('DOMContentLoaded', function() {
    // ==================== ELEMENT REFERENCES ====================
    
    // Mobile Menu Elements
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    // Mobile Recipe Dropdown Elements
    const mobileRecipeBtn = document.getElementById('mobileRecipeBtn');
    const mobileRecipeDropdown = document.getElementById('mobileRecipeDropdown');
    const mobileRecipeIcon = document.getElementById('mobileRecipeIcon');
    
    // Mobile Tips Dropdown Elements
    const mobileTipsBtn = document.getElementById('mobileTipsBtn');
    const mobileTipsDropdown = document.getElementById('mobileTipsDropdown');
    const mobileTipsIcon = document.getElementById('mobileTipsIcon');
    
    // Desktop Recipe Dropdown Elements
    const recipeDropdownBtn = document.getElementById('recipeDropdownBtn');
    const recipeDropdownMenu = document.getElementById('recipeDropdownMenu');
    const recipeDropdownIcon = document.getElementById('recipeDropdownIcon');
    
    // Desktop Tips Dropdown Elements
    const tipsDropdownBtn = document.getElementById('tipsDropdownBtn');
    const tipsDropdownMenu = document.getElementById('tipsDropdownMenu');
    const tipsDropdownIcon = document.getElementById('tipsDropdownIcon');
    
    // Search Modal Elements
    const openSearchModal = document.getElementById('openSearchModal');
    const closeSearchModal = document.getElementById('closeSearchModal');
    const searchModal = document.getElementById('searchModal');

    // ==================== STATE VARIABLES ====================
    let isMobileRecipeOpen = false;
    let isMobileTipsOpen = false;
    let isMobileMenuOpen = false;
    let isDesktopRecipeOpen = false;
    let isDesktopTipsOpen = false;

    // ==================== UTILITY FUNCTIONS ====================
    
    // Close all mobile dropdowns
    function closeAllMobileDropdowns() {
        if (isMobileRecipeOpen) {
            closeMobileDropdown(mobileRecipeDropdown, mobileRecipeIcon);
            isMobileRecipeOpen = false;
        }
        
        if (isMobileTipsOpen) {
            closeMobileDropdown(mobileTipsDropdown, mobileTipsIcon);
            isMobileTipsOpen = false;
        }
    }

    // Close all desktop dropdowns
    function closeAllDesktopDropdowns() {
        if (isDesktopRecipeOpen && recipeDropdownMenu) {
            recipeDropdownMenu.classList.remove('show');
            if (recipeDropdownIcon) {
                recipeDropdownIcon.style.transform = 'rotate(0deg)';
            }
            isDesktopRecipeOpen = false;
        }
        
        if (isDesktopTipsOpen && tipsDropdownMenu) {
            tipsDropdownMenu.classList.remove('show');
            if (tipsDropdownIcon) {
                tipsDropdownIcon.style.transform = 'rotate(0deg)';
            }
            isDesktopTipsOpen = false;
        }
    }

    // Generic function to open mobile dropdown with smooth animation
    function openMobileDropdown(dropdown, icon) {
        if (dropdown && icon) {
            dropdown.classList.remove('hidden');
            dropdown.classList.add('show');
            dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
            icon.style.transform = 'rotate(180deg)';
        }
    }

    // Generic function to close mobile dropdown with smooth animation
    function closeMobileDropdown(dropdown, icon) {
        if (dropdown && icon) {
            dropdown.classList.remove('show');
            dropdown.style.maxHeight = '0px';
            icon.style.transform = 'rotate(0deg)';
            
            setTimeout(() => {
                dropdown.classList.add('hidden');
            }, 300); // Match CSS transition duration
        }
    }

    // ==================== MOBILE MENU FUNCTIONS ====================
    
    function toggleMobileMenu() {
        if (mobileMenu) {
            isMobileMenuOpen = !isMobileMenuOpen;
            
            if (isMobileMenuOpen) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('show');
            } else {
                mobileMenu.classList.remove('show');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300);
            }
        }
    }

    function closeMobileMenu() {
        if (mobileMenu && isMobileMenuOpen) {
            isMobileMenuOpen = false;
            mobileMenu.classList.remove('show');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
        }
    }

    // ==================== MOBILE DROPDOWN TOGGLE FUNCTIONS ====================
    
    function toggleMobileRecipeDropdown() {
        isMobileRecipeOpen = !isMobileRecipeOpen;
        
        // Close tips dropdown if open
        if (isMobileTipsOpen) {
            closeMobileDropdown(mobileTipsDropdown, mobileTipsIcon);
            isMobileTipsOpen = false;
        }
        
        if (isMobileRecipeOpen) {
            openMobileDropdown(mobileRecipeDropdown, mobileRecipeIcon);
        } else {
            closeMobileDropdown(mobileRecipeDropdown, mobileRecipeIcon);
        }
    }

    function toggleMobileTipsDropdown() {
        isMobileTipsOpen = !isMobileTipsOpen;
        
        // Close recipe dropdown if open
        if (isMobileRecipeOpen) {
            closeMobileDropdown(mobileRecipeDropdown, mobileRecipeIcon);
            isMobileRecipeOpen = false;
        }
        
        if (isMobileTipsOpen) {
            openMobileDropdown(mobileTipsDropdown, mobileTipsIcon);
        } else {
            closeMobileDropdown(mobileTipsDropdown, mobileTipsIcon);
        }
    }

    // ==================== DESKTOP DROPDOWN TOGGLE FUNCTIONS ====================
    
    function toggleDesktopRecipeDropdown() {
        isDesktopRecipeOpen = !isDesktopRecipeOpen;
        
        // Close tips dropdown if open
        if (isDesktopTipsOpen && tipsDropdownMenu) {
            tipsDropdownMenu.classList.remove('show');
            if (tipsDropdownIcon) {
                tipsDropdownIcon.style.transform = 'rotate(0deg)';
            }
            isDesktopTipsOpen = false;
        }
        
        if (recipeDropdownMenu) {
            if (isDesktopRecipeOpen) {
                recipeDropdownMenu.classList.add('show');
                if (recipeDropdownIcon) {
                    recipeDropdownIcon.style.transform = 'rotate(180deg)';
                }
            } else {
                recipeDropdownMenu.classList.remove('show');
                if (recipeDropdownIcon) {
                    recipeDropdownIcon.style.transform = 'rotate(0deg)';
                }
            }
        }
    }

    function toggleDesktopTipsDropdown() {
        isDesktopTipsOpen = !isDesktopTipsOpen;
        
        // Close recipe dropdown if open
        if (isDesktopRecipeOpen && recipeDropdownMenu) {
            recipeDropdownMenu.classList.remove('show');
            if (recipeDropdownIcon) {
                recipeDropdownIcon.style.transform = 'rotate(0deg)';
            }
            isDesktopRecipeOpen = false;
        }
        
        if (tipsDropdownMenu) {
            if (isDesktopTipsOpen) {
                tipsDropdownMenu.classList.add('show');
                if (tipsDropdownIcon) {
                    tipsDropdownIcon.style.transform = 'rotate(180deg)';
                }
            } else {
                tipsDropdownMenu.classList.remove('show');
                if (tipsDropdownIcon) {
                    tipsDropdownIcon.style.transform = 'rotate(0deg)';
                }
            }
        }
    }

    // ==================== SEARCH MODAL FUNCTIONS ====================
    
    function showSearchModal() {
        if (searchModal) {
            searchModal.classList.remove('hidden');
            searchModal.classList.add('flex', 'show');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    }

    function hideSearchModal() {
        if (searchModal) {
            searchModal.classList.remove('show');
            setTimeout(() => {
                searchModal.classList.add('hidden');
                searchModal.classList.remove('flex');
            }, 300);
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    }

    // ==================== MOBILE EVENT LISTENERS ====================

    // Mobile Menu Toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMobileMenu();
        });
    }

    // Mobile Recipe Dropdown Toggle
    if (mobileRecipeBtn) {
        mobileRecipeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMobileRecipeDropdown();
        });
    }

    // Mobile Tips Dropdown Toggle
    if (mobileTipsBtn) {
        mobileTipsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMobileTipsDropdown();
        });
    }

    // ==================== DESKTOP EVENT LISTENERS ====================

    // Desktop Recipe Dropdown - HANYA TOGGLE DENGAN CLICK
    if (recipeDropdownBtn && recipeDropdownMenu) {
        // Toggle dropdown on button click
        recipeDropdownBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleDesktopRecipeDropdown();
        });
    }

    // Desktop Tips Dropdown - HANYA TOGGLE DENGAN CLICK
    if (tipsDropdownBtn && tipsDropdownMenu) {
        // Toggle dropdown on button click
        tipsDropdownBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleDesktopTipsDropdown();
        });
    }

    // ==================== SEARCH MODAL EVENT LISTENERS ====================

    // Search Modal Controls
    if (openSearchModal) {
        openSearchModal.addEventListener('click', function(e) {
            e.preventDefault();
            showSearchModal();
        });
    }

    if (closeSearchModal) {
        closeSearchModal.addEventListener('click', function(e) {
            e.preventDefault();
            hideSearchModal();
        });
    }

    // ==================== DROPDOWN ITEM LISTENERS ====================
    
    // Mobile Recipe dropdown items - TIDAK MENUTUP DROPDOWN
    const mobileRecipeItems = document.querySelectorAll('#mobileRecipeDropdown .dropdown-item, #mobileRecipeDropdown a');
    mobileRecipeItems.forEach(item => {
        item.addEventListener('click', function(e) {
            console.log('Selected Mobile Recipe Category:', this.textContent.trim());
            // DROPDOWN TETAP TERBUKA - tidak memanggil toggleMobileRecipeDropdown()
            // MOBILE MENU TETAP TERBUKA - tidak memanggil closeMobileMenu()
        });
    });

    // Mobile Tips dropdown items - TIDAK MENUTUP DROPDOWN
    const mobileTipsItems = document.querySelectorAll('#mobileTipsDropdown .tips-item, #mobileTipsDropdown a');
    mobileTipsItems.forEach(item => {
        item.addEventListener('click', function(e) {
            console.log('Selected Mobile Tips Category:', this.textContent.trim());
            // DROPDOWN TETAP TERBUKA - tidak memanggil toggleMobileTipsDropdown()
            // MOBILE MENU TETAP TERBUKA - tidak memanggil closeMobileMenu()
        });
    });

    // Desktop Recipe dropdown items - TIDAK MENUTUP DROPDOWN
    const desktopRecipeItems = document.querySelectorAll('#recipeDropdownMenu .dropdown-item, #recipeDropdownMenu a');
    desktopRecipeItems.forEach(item => {
        item.addEventListener('click', function(e) {
            console.log('Selected Desktop Recipe Category:', this.textContent.trim());
            // DROPDOWN TETAP TERBUKA - tidak memanggil toggleDesktopRecipeDropdown()
        });
    });

    // Desktop Tips dropdown items - TIDAK MENUTUP DROPDOWN
    const desktopTipsItems = document.querySelectorAll('#tipsDropdownMenu .tips-item, #tipsDropdownMenu a');
    desktopTipsItems.forEach(item => {
        item.addEventListener('click', function(e) {
            console.log('Selected Desktop Tips Category:', this.textContent.trim());
            // DROPDOWN TETAP TERBUKA - tidak memanggil toggleDesktopTipsDropdown()
        });
    });

    // ==================== GLOBAL EVENT LISTENERS ====================

    // Close elements when clicking outside
    document.addEventListener('click', function(e) {
        // Check if click is outside mobile menu
        if (mobileMenuBtn && mobileMenu && 
            !mobileMenuBtn.contains(e.target) && 
            !mobileMenu.contains(e.target)) {
            closeMobileMenu();
            closeAllMobileDropdowns();
        }
        
        // Check if click is outside desktop dropdown areas
        const isDesktopRecipeClick = recipeDropdownBtn && (recipeDropdownBtn.contains(e.target) || 
                                    (recipeDropdownMenu && recipeDropdownMenu.contains(e.target)));
        const isDesktopTipsClick = tipsDropdownBtn && (tipsDropdownBtn.contains(e.target) || 
                                   (tipsDropdownMenu && tipsDropdownMenu.contains(e.target)));
        
        if (!isDesktopRecipeClick && isDesktopRecipeOpen) {
            toggleDesktopRecipeDropdown();
        }
        
        if (!isDesktopTipsClick && isDesktopTipsOpen) {
            toggleDesktopTipsDropdown();
        }
        
        // Close search modal when clicking on backdrop
        if (searchModal && e.target === searchModal) {
            hideSearchModal();
        }
    });

    // Handle Escape key presses
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close search modal
            if (searchModal && !searchModal.classList.contains('hidden')) {
                hideSearchModal();
            }
            
            // Close mobile menu and dropdowns
            closeMobileMenu();
            closeAllMobileDropdowns();
            
            // Close desktop dropdowns
            closeAllDesktopDropdowns();
        }
    });

    // ==================== TOUCH/SWIPE SUPPORT ====================
    
    // Optional: Add touch event support for better mobile experience
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartY = e.changedTouches[0].screenY;
    }, false);

    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, false);

    function handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = touchStartY - touchEndY;
        
        // Swipe up to close mobile menu
        if (swipeDistance > swipeThreshold && isMobileMenuOpen) {
            closeMobileMenu();
            closeAllMobileDropdowns();
        }
    }

    // ==================== RESIZE HANDLER ====================
    
    // Close mobile elements on window resize (e.g., orientation change)
    window.addEventListener('resize', function() {
        // Close mobile menu and dropdowns on resize
        closeMobileMenu();
        closeAllMobileDropdowns();
        
        // Close desktop dropdowns on resize
        closeAllDesktopDropdowns();
        
        // Close search modal on resize
        if (searchModal && !searchModal.classList.contains('hidden')) {
            hideSearchModal();
        }
    });

    // ==================== ACCESSIBILITY IMPROVEMENTS ====================
    
    // Add ARIA attributes for better accessibility
    function updateAriaAttributes() {
        // Mobile Recipe Dropdown
        if (mobileRecipeBtn && mobileRecipeDropdown) {
            mobileRecipeBtn.setAttribute('aria-expanded', isMobileRecipeOpen);
            mobileRecipeDropdown.setAttribute('aria-hidden', !isMobileRecipeOpen);
        }
        
        // Mobile Tips Dropdown
        if (mobileTipsBtn && mobileTipsDropdown) {
            mobileTipsBtn.setAttribute('aria-expanded', isMobileTipsOpen);
            mobileTipsDropdown.setAttribute('aria-hidden', !isMobileTipsOpen);
        }
        
        // Mobile Menu
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.setAttribute('aria-expanded', isMobileMenuOpen);
            mobileMenu.setAttribute('aria-hidden', !isMobileMenuOpen);
        }
        
        // Desktop Recipe Dropdown
        if (recipeDropdownBtn && recipeDropdownMenu) {
            recipeDropdownBtn.setAttribute('aria-expanded', isDesktopRecipeOpen);
            recipeDropdownMenu.setAttribute('aria-hidden', !isDesktopRecipeOpen);
        }
        
        // Desktop Tips Dropdown
        if (tipsDropdownBtn && tipsDropdownMenu) {
            tipsDropdownBtn.setAttribute('aria-expanded', isDesktopTipsOpen);
            tipsDropdownMenu.setAttribute('aria-hidden', !isDesktopTipsOpen);
        }
    }

    // Initialize ARIA attributes
    updateAriaAttributes();

    // Update ARIA attributes on state changes
    const stateChangeEvents = [
        'toggleMobileMenu', 'toggleMobileRecipeDropdown', 'toggleMobileTipsDropdown',
        'toggleDesktopRecipeDropdown', 'toggleDesktopTipsDropdown'
    ];

    console.log('Enhanced Mobile & Desktop Navigation initialized successfully');
});
// ==================== TOMBOL SLIDE ====================
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slider = document.getElementById('recipeSlider');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
            indicator.classList.remove('bg-gray-300');
            indicator.classList.add('bg-orange-500');
        } else {
            indicator.classList.remove('active');
            indicator.classList.remove('bg-orange-500');
            indicator.classList.add('bg-gray-300');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

// Event listeners for slider
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Indicator clicks
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
    });
});

// Auto-slide functionality
setInterval(nextSlide, 10000);

document.getElementById('lihatSelengkapnyaBtn').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Scroll ke section nutrisi dengan smooth animation
    document.getElementById('nutrisi-section').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    
    // Optional: Add highlight effect
    setTimeout(() => {
        const nutrisiSection = document.getElementById('nutrisi-section');
        nutrisiSection.style.transition = 'background-color 0.6s ease';
        nutrisiSection.style.backgroundColor = '#fef3c7';
        
        setTimeout(() => {
            nutrisiSection.style.backgroundColor = 'white';
        }, 2000);
    }, 800);
});

 function showMoreArticles() {
       document.getElementById('artikel13').classList.remove('hidden');
       document.getElementById('artikel14').classList.remove('hidden');
       document.getElementById('artikel15').classList.remove('hidden');
       document.getElementById('loadMoreBtn').style.display = 'none';
   }

   //artikel 13 14 15
  let isExpanded = false;

        function toggleArticles() {
            const article13 = document.getElementById('article-13');
            const article14 = document.getElementById('article-14');
            const article15 = document.getElementById('article-15');
            const toggleButton = document.getElementById('toggleButton');

            if (!isExpanded) {
                // Show articles 13, 14, 15
                article13.classList.remove('hidden');
                article14.classList.remove('hidden');
                article15.classList.remove('hidden');
                
                // Change button text
                toggleButton.textContent = 'Tampilkan Lebih Sedikit';
                isExpanded = true;
            } else {
                // Hide articles 13, 14, 15
                article13.classList.add('hidden');
                article14.classList.add('hidden');
                article15.classList.add('hidden');
                
                // Change button text back
                toggleButton.textContent = 'Lihat Artikel Lainnya';
                isExpanded = false;
            }
        }

// ==================== BUTTON HOVER EFFECTS ====================
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button[class*="bg-gradient-to-r"]');
    if (button) {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    }
});
