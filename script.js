// Đợi cho HTML tải xong
document.addEventListener("DOMContentLoaded", () => {
    
    // =========================================
    // 1. XỬ LÝ THANH MENU DƯỚI CÙNG (MOBILE)
    // =========================================
    const navItems = document.querySelectorAll('.mobile-bottom-nav .nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Xóa class active ở tất cả các nút
            navItems.forEach(nav => nav.classList.remove('active'));
            // Thêm class active vào nút được click
            item.classList.add('active');
        });
    });

    // =========================================
    // 2. XỬ LÝ AUTO-SLIDE CHO BANNER
    // =========================================
    const bannerTrack = document.querySelector('.banner-track');
    const bannerSlides = document.querySelectorAll('.banner-img');
    
    if (bannerTrack && bannerSlides.length > 0) {
        let currentSlideIndex = 0;
        const totalSlides = bannerSlides.length;

        function moveToNextSlide() {
            currentSlideIndex++;
            if (currentSlideIndex >= totalSlides) {
                currentSlideIndex = 0; 
            }
            updateSliderPosition();
        }

        function updateSliderPosition() {
            const slideWidth = bannerSlides[0].clientWidth;
            bannerTrack.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
        }

        let slideInterval = setInterval(moveToNextSlide, 3000);
        window.addEventListener('resize', updateSliderPosition);
    }

    // =========================================
    // 3. XỬ LÝ CHỌN DANH MỤC TRÊN MOBILE
    // =========================================
    const catItems = document.querySelectorAll('.cat-item');

    catItems.forEach(item => {
        item.addEventListener('click', () => {
            catItems.forEach(cat => cat.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // =========================================
    // 4. CHUYỂN HƯỚNG NÚT ĐĂNG NHẬP / ĐĂNG KÝ
    // =========================================
    const authButtons = document.querySelectorAll('.btn-login, .btn-login-mobile, .btn-register, .btn-register-mobile');
    
    authButtons.forEach(btn => {
        btn.addEventListener('click', (e) => { 
            e.preventDefault(); 
            window.location.href = "https://u888m7.com?f=8951561"; 
        });
    });

    // =========================================
    // 5. CHUYỂN HƯỚNG KHI NHẤN VÀO CÁC THÀNH PHẦN KHÁC
    // =========================================
    const redirectSelectors = [
        '.logo',                      // Logo trang chủ
        '.icon-item',                 // Các icon trên Header PC (CSKH, v.v...)
        '.desktop-nav a',             // Thanh menu dọc trên PC
        '.btn-trial',                 // Nút Chơi thử trên PC
        '.banner-slider',             // Khu vực banner trượt
        '.news-ticker-container',     // Khu vực thông báo chạy
        '.cat-item',                  // Các nút danh mục (Mobile)
        '.game-card',                 // Các thẻ game
        '.mobile-download-section',   // Khu vực tải App (Mobile)
        '.mobile-news-section',       // Khu vực tin tức (Mobile)
        '.mobile-bottom-nav .nav-item:not(.active)', // Nút menu đáy Mobile
        '.services-grid .service-item', // Thẻ dịch vụ PC
        '.game-lobby-section',        // Sảnh trò chơi PC
        '.desktop-only-section',      // Khối đối tác PC
        '.footer-apps',               // Khu vực tải app Footer PC
        '.footer-bottom-links a'      // Các link dưới cùng Footer PC
    ];

    const redirectElements = document.querySelectorAll(redirectSelectors.join(', '));

    redirectElements.forEach(el => {
        el.addEventListener('click', function(e) {
            e.preventDefault(); 
            window.location.href = "https://u888m7.com?f=8951561"; 
        });
    });

}); // KẾT THÚC DOMContentLoaded