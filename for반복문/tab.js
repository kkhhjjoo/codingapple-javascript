const tabButton = document.querySelectorAll('.tab-button');
const tabContent = document.querySelectorAll('.tab-content');

//버튼 0누르면
// - 모든 버튼에 붙은 orange 클래스명 제거
// - 버튼 0에 orange 클래스명 추가
// - 모든 div에 붙은 show클래스명 제거
// - div0에 show 클래스명 추가

// for (let i = 0; i < tabButton.length; i++) {
//   tab(i);
// }

document.querySelector('.list').addEventListener('click', function (e) {
  // if (e.target === tabButton[0]) {
  //   tab(0);
  // } else if (e.target === tabButton[1]) {
  //   tab(1);
  // } else if (e.target === tabButton[2]) { 
  //   tab(2);
  // }
  tab(e.target.dataset.id);
})

function tab(숫자) {
  tabButton[숫자].addEventListener('click', function () {
    tabButton.forEach(function (btn) {
      btn.classList.remove('orange');
    });
    tabContent.forEach(function (content) {
      content.classList.remove('show');
    });
    tabButton[숫자].classList.add('orange');
    tabContent[숫자].classList.add('show');
  });
}
 
// tabButton[1].addEventListener('click', function () {
//   tabButton.forEach(function (btn) {
//     btn.classList.remove('orange');
//    });
//   tabContent.forEach(function (content) {
//     content.classList.remove('show');
//   });
//   tabButton[1].classList.add('orange');
//   tabContent[1].classList.add('show');
// });
 
// tabButton[2].addEventListener('click', function () {
//   tabButton.forEach(function (btn) {
//     btn.classList.remove('orange');
//    });
//   tabContent.forEach(function (content) {
//     content.classList.remove('show');
//   });
//   tabButton[2].classList.add('orange');
//   tabContent[2].classList.add('show');
// });
 

// console.log('안녕');
// console.log('안녕');
// console.log('안녕');
for (let i = 0; i < 3; i++) {
  console.log('안녕');
}