Calc

function Calc(){
    var CurrentYear = 2019; // 올해 연도를 저장할 변수
    var birthYear; // 올해 연도를 저장할 변수
    var Age; // 올해 연도를 저장할 변수

    Age = CurrentYear - birthYear + 1;
    document.querySelector('#result').innerHTML = "당신의 나이는" + Age +"세입니다."; //id값이 result인 태그를 선택하고 html 안에 삽입한다.

 
}