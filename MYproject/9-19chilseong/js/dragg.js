const dragBox = document.querySelector('.tab_btn_wrap');
let isDragging = false;
let startX, scrollLeft;

dragBox.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - dragBox.offsetLeft;
    scrollLeft = dragBox.scrollLeft;
    dragBox.style.cursor = 'grabbing';
});

dragBox.addEventListener('mouseleave', () => {
    isDragging = false;

});

dragBox.addEventListener('mouseup', () => {
    isDragging = false;
});

dragBox.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - dragBox.offsetLeft;
    const walk = (x - startX) * 1; // 속도 조절
    dragBox.scrollLeft = scrollLeft - walk;
    
    // 드래그 중에 원의 위치 업데이트
    const activeTab = document.querySelector('.tab_btn.active');
    if (activeTab) {
        doAni(activeTab);
    }
});
