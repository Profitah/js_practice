let heading = document.querySelector('#heading'); //id가 heading인 요소를 선택하는 함수 heading


// heading의 색상을 blue로 바꾸는 기능을 가진 함수 Changecolor 선언
    let Changecolor =  function(){  
        heading.style.color = "blue";
    }

heading.onclick = Changecolor;

    
/* 원코드
var heading = document.querySelector('#heading');
heading.onclick = function () {
    heading.style.color = "blue";
}*/

