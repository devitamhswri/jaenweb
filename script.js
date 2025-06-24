
// ==================== DROPDOWN RESEP MASAKAN ====================
const recipeDropdownBtn = document.getElementById('recipeDropdownBtn');
const recipeDropdownMenu = document.getElementById('recipeDropdownMenu');
const recipeDropdownIcon = document.getElementById('recipeDropdownIcon');
let isRecipeDropdownOpen = false;

// ==================== DROPDOWN TIPS ====================
const tipsDropdownBtn = document.getElementById('tipsDropdownBtn');
const tipsDropdownMenu = document.getElementById('tipsDropdownMenu');
const tipsDropdownIcon = document.getElementById('tipsDropdownIcon');
let isTipsDropdownOpen = false;

// ==================== FUNCTIONS ====================

// Toggle Recipe Dropdown
function toggleRecipeDropdown() {
    isRecipeDropdownOpen = !isRecipeDropdownOpen;
    
    // Close tips dropdown if open
    if (isTipsDropdownOpen) {
        isTipsDropdownOpen = false;
        tipsDropdownMenu.classList.remove('show');
        tipsDropdownIcon.style.transform = 'rotate(0deg)';
    }
    
    if (isRecipeDropdownOpen) {
        recipeDropdownMenu.classList.add('show');
        recipeDropdownIcon.style.transform = 'rotate(180deg)';
    } else {
        recipeDropdownMenu.classList.remove('show');
        recipeDropdownIcon.style.transform = 'rotate(0deg)';
    }
}

// Toggle Tips Dropdown
function toggleTipsDropdown() {
    isTipsDropdownOpen = !isTipsDropdownOpen;
    
    // Close recipe dropdown if open
    if (isRecipeDropdownOpen) {
        isRecipeDropdownOpen = false;
        recipeDropdownMenu.classList.remove('show');
        recipeDropdownIcon.style.transform = 'rotate(0deg)';
    }
    
    if (isTipsDropdownOpen) {
        tipsDropdownMenu.classList.add('show');
        tipsDropdownIcon.style.transform = 'rotate(180deg)';
    } else {
        tipsDropdownMenu.classList.remove('show');
        tipsDropdownIcon.style.transform = 'rotate(0deg)';
    }
}

// Close all dropdowns
function closeAllDropdowns() {
    if (isRecipeDropdownOpen) {
        isRecipeDropdownOpen = false;
        recipeDropdownMenu.classList.remove('show');
        recipeDropdownIcon.style.transform = 'rotate(0deg)';
    }
    
    if (isTipsDropdownOpen) {
        isTipsDropdownOpen = false;
        tipsDropdownMenu.classList.remove('show');
        tipsDropdownIcon.style.transform = 'rotate(0deg)';
    }
}

// ==================== EVENT LISTENERS ====================

// Recipe dropdown button click
recipeDropdownBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleRecipeDropdown();
});

// Tips dropdown button click
tipsDropdownBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleTipsDropdown();
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    const isClickInsideRecipe = recipeDropdownBtn.contains(e.target) || recipeDropdownMenu.contains(e.target);
    const isClickInsideTips = tipsDropdownBtn.contains(e.target) || tipsDropdownMenu.contains(e.target);
    
    if (!isClickInsideRecipe && !isClickInsideTips) {
        closeAllDropdowns();
    }
});

// Close dropdown when pressing Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeAllDropdowns();
    }
});

// ==================== FIXED DROPDOWN ITEMS ====================
// Recipe dropdown items - REMOVED e.preventDefault() to allow navigation
const recipeDropdownItems = document.querySelectorAll('#recipeDropdownMenu .dropdown-item');
recipeDropdownItems.forEach(item => {
    item.addEventListener('click', function(e) {
        // REMOVED e.preventDefault() - now links can navigate normally
        console.log('Selected Recipe Category:', this.textContent);
        
        // Only close dropdown, don't prevent navigation
        toggleRecipeDropdown();
        
        // Optional: Add small delay to ensure dropdown closes before navigation
        // setTimeout(() => {
        //     // Navigation will happen naturally due to href attribute
        // }, 100);
    });
});

// Tips dropdown items - REMOVED e.preventDefault() to allow navigation
const tipsDropdownItems = document.querySelectorAll('#tipsDropdownMenu .tips-item');
tipsDropdownItems.forEach(item => {
    item.addEventListener('click', function(e) {
        // REMOVED e.preventDefault() - now links can navigate normally
        console.log('Selected Tips Category:', this.textContent);
        
        // Only close dropdown, don't prevent navigation
        toggleTipsDropdown();
    });
});

// Mobile menu elements (if they exist)
const recipeBtn = document.getElementById('recipeDropdownBtn');
const recipeMenu = document.getElementById('recipeDropdownMenu');
const recipeIcon = document.getElementById('recipeDropdownIcon');

const tipsBtn = document.getElementById('tipsDropdownBtn');
const tipsMenu = document.getElementById('tipsDropdownMenu');
const tipsIcon = document.getElementById('tipsDropdownIcon');

// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

const mobileRecipeBtn = document.getElementById('mobileRecipeBtn');
const mobileRecipeDropdown = document.getElementById('mobileRecipeDropdown');
const mobileRecipeIcon = document.getElementById('mobileRecipeIcon');

const mobileTipsBtn = document.getElementById('mobileTipsBtn');
const mobileTipsDropdown = document.getElementById('mobileTipsDropdown');
const mobileTipsIcon = document.getElementById('mobileTipsIcon');

        // Search modal functionality
        const mobileSearchBtn = document.getElementById('mobileSearchBtn');
        const searchModal = document.getElementById('searchModal');
        const closeSearchModal = document.getElementById('closeSearchModal');

        // Desktop Recipe Dropdown
        recipeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            recipeMenu.classList.toggle('show');
            recipeIcon.style.transform = recipeMenu.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
            
            // Close tips dropdown if open
            tipsMenu.classList.remove('show');
            tipsIcon.style.transform = 'rotate(0deg)';
        });

        // Desktop Tips Dropdown
        tipsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            tipsMenu.classList.toggle('show');
            tipsIcon.style.transform = tipsMenu.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
            
            // Close recipe dropdown if open
            recipeMenu.classList.remove('show');
            recipeIcon.style.transform = 'rotate(0deg)';
        });

        // Mobile Menu Toggle
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('show');
        });

        // Mobile Recipe Dropdown
        mobileRecipeBtn.addEventListener('click', () => {
            mobileRecipeDropdown.classList.toggle('show');
            mobileRecipeIcon.style.transform = mobileRecipeDropdown.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
        });

        // Mobile Tips Dropdown
        mobileTipsBtn.addEventListener('click', () => {
            mobileTipsDropdown.classList.toggle('show');
            mobileTipsIcon.style.transform = mobileTipsDropdown.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
        });

        // Mobile Search Modal
        mobileSearchBtn.addEventListener('click', () => {
            searchModal.classList.add('show');
        });

        closeSearchModal.addEventListener('click', () => {
            searchModal.classList.remove('show');
        });

        // Close search modal when clicking outside
        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                searchModal.classList.remove('show');
            }
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!recipeBtn.contains(e.target) && !recipeMenu.contains(e.target)) {
                recipeMenu.classList.remove('show');
                recipeIcon.style.transform = 'rotate(0deg)';
            }
            if (!tipsBtn.contains(e.target) && !tipsMenu.contains(e.target)) {
                tipsMenu.classList.remove('show');
                tipsIcon.style.transform = 'rotate(0deg)';
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('show');
            }
        });

        // Close search modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchModal.classList.contains('show')) {
                searchModal.classList.remove('show');
            }
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
setInterval(nextSlide, 5000);

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
