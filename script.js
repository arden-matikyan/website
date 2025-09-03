function toggleMenu() {
    document.getElementById('menu').classList.toggle('active');
 
    
}
function switchpage() {
    document.getElementById('menu').classList.toggle('active');
 
    
}
function toggleProject(element) {
    element.classList.toggle('active');
}

function openPhoto(imgElement) {
    const popup = document.getElementById('photo-popup');
    const popupImg = document.getElementById('popup-img');
    const popupCaption = document.getElementById('popup-caption');
    popupImg.src = imgElement.src;
    popupImg.alt = imgElement.alt;
    const caption = imgElement.parentElement.querySelector('.caption');
    popupCaption.textContent = caption ? caption.textContent : '';
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePhotoPopup() {
    document.getElementById('photo-popup').classList.remove('active');
    document.body.style.overflow = '';
}