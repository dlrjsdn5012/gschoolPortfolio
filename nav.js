const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});

document.querySelector(".copyMail").addEventListener("click", function() {
  swal("Success!", "클립보드에 메일 주소가 복사되었습니다!", "success");

  var tempElem = document.createElement("textarea");
  tempElem.value = "dlrjsdn5012@naver.com";
  document.body.appendChild(tempElem);

  tempElem.select();
  document.execCommand("copy");
  document.body.removeChild(tempElem);
});