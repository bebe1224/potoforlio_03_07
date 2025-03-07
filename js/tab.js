// ==== sect3-1 탭
const viewMoreBtn_w =document.querySelector('.sect3-1 .inner .w')
const viewMoreBtn = document.querySelector('.sect3-1 .inner .w .view-more');
const list_p = document.querySelector('.sect3-1 .inner .w .list-p');
const hiddenList = document.querySelector('.sect3-1 .hidden-list');
const s3_1wrap = document.querySelector('.sect3-1 .inner .wrap');

viewMoreBtn.addEventListener('click', function() {

  if (hiddenList.style.opacity === '1') {
    hiddenList.style.zIndex = '-1';
    hiddenList.style.opacity = '0';
    viewMoreBtn_w.style.zIndex = '1';
    s3_1wrap.style.opacity = "1";
    list_p.style.color = "black";

  } else {
    hiddenList.style.zIndex = '999';
    hiddenList.style.opacity = '1';
    viewMoreBtn_w.style.zIndex = '1000';
    s3_1wrap.style.opacity = "0";
    list_p.style.color = "white";
  }
});
// ====
