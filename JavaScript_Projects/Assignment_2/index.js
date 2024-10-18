function simple() {
    alert("Hello Function Assignment");
    
}
simple();

function myName(name) {
    alert(name);
    
}
myName("Akanksha");

const Btn = document.getElementsByClassName('btn')[0];
  Btn.addEventListener('click',simple);

  function stringConcatinate( str1, str2, str3 ){
    let result = str1 + str2 + str3 ;
    alert (result);
  }
  stringConcatinate("Akanksha", " Anam", " Muskan");