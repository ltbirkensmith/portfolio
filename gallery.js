/* ============================================
   PROJECT PHOTO GALLERY SYSTEM
   Standalone JavaScript - link this in any project page
   Usage: Just add the HTML gallery structure and this script will handle everything
   ============================================ */

(function() {
    'use strict';
    
    // Initialize when page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initProjectGalleries);
    } else {
        initProjectGalleries();
    }
    
    let currentGalleryIndex = 0;
    let currentGalleryImages = [];
    
    function initProjectGalleries() {
        const galleries = document.querySelectorAll('.gallery-grid');
        
        galleries.forEach(gallery => {
            const items = gallery.querySelectorAll('.gallery-item');
            const images = [];
            
            items.forEach((item, index) => {
                const img = item.querySelector('img');
                const caption = item.querySelector('.gallery-caption p');
                
                images.push({
                    src: img.src,
                    alt: img.alt,
                    caption: caption ? caption.textContent : ''
                });
                
                item.addEventListener('click', () => openGalleryModal(images, index));
            });
        });
    }
    
    function openGalleryModal(images, startIndex) {
        currentGalleryImages = images;
        currentGalleryIndex = startIndex;
        
        // Create modal if it doesn't exist
        let modal = document.getElementById('galleryModal');
        if (!modal) {
            modal = createGalleryModal();
            document.body.appendChild(modal);
        }
        
        showGalleryImage(currentGalleryIndex);
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function createGalleryModal() {
        const modal = document.createElement('div');
        modal.id = 'galleryModal';
        modal.className = 'gallery-modal';
        modal.innerHTML = `
            <button class="gallery-modal-close" id="galleryModalClose">&times;</button>
            <button class="gallery-nav gallery-nav-prev" id="galleryPrev">‹</button>
            <button class="gallery-nav gallery-nav-next" id="galleryNext">›</button>
            <div class="gallery-modal-content">
                <div class="gallery-modal-wrapper">
                    <img class="gallery-modal-image" id="galleryModalImage" src="" alt="">
                    <p class="gallery-modal-caption" id="galleryModalCaption"></p>
                </div>
            </div>
        `;
        
        // Add event listeners
        modal.querySelector('#galleryModalClose').addEventListener('click', closeGalleryModal);
        modal.querySelector('#galleryPrev').addEventListener('click', previousGalleryImage);
        modal.querySelector('#galleryNext').addEventListener('click', nextGalleryImage);
        
        // Close on background click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeGalleryModal();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', handleGalleryKeyboard);
        
        return modal;
    }
    
    function showGalleryImage(index) {
        const image = currentGalleryImages[index];
        const modalImage = document.getElementById('galleryModalImage');
        const modalCaption = document.getElementById('galleryModalCaption');
        
        if (modalImage && modalCaption && image) {
            modalImage.src = image.src;
            modalImage.alt = image.alt;
            modalCaption.textContent = image.caption;
        }
    }
    
    function nextGalleryImage() {
        currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryImages.length;
        showGalleryImage(currentGalleryIndex);
    }
    
    function previousGalleryImage() {
        currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
        showGalleryImage(currentGalleryIndex);
    }
    
    function closeGalleryModal() {
        const modal = document.getElementById('galleryModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
    
    function handleGalleryKeyboard(e) {
        const modal = document.getElementById('galleryModal');
        if (!modal || modal.style.display !== 'block') return;
        
        if (e.key === 'Escape') {
            closeGalleryModal();
        } else if (e.key === 'ArrowRight') {
            nextGalleryImage();
        } else if (e.key === 'ArrowLeft') {
            previousGalleryImage();
        }
    }
    
})();
