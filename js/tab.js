// ==== sect3-1 탭
const viewMoreBtn = document.querySelector('.sect3-1 .inner .view-more');
const hiddenList = document.querySelector('.sect3-1 .hidden-list');
const s3_1wrap = document.querySelector('.sect3-1 .inner .wrap');

viewMoreBtn.addEventListener('click', function() {

  if (hiddenList.style.opacity === '1') {
    hiddenList.style.zIndex = '-1';
    hiddenList.style.opacity = '0';
    viewMoreBtn.style.zIndex = '1';
    s3_1wrap.style.opacity = "1";
  } else {
    hiddenList.style.zIndex = '999';
    hiddenList.style.opacity = '1';
    viewMoreBtn.style.zIndex = '1000';
    s3_1wrap.style.opacity = "0";
  }
});
// ====
