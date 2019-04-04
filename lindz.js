function myFunc(){

    var d = new Date();
    var minutes = d.getMinutes();
    var hours = d.getHours();
    var seconds = d.getSeconds();
    var ampm = d.getHours();
      
    var   days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
     
      if(ampm >= 12){
          alert('Today is : ' +days[d.getDay()]+'\n'+'Current time is : ' +hours+' '+'PM' +' :'+' '+minutes +' :' +' '+ seconds);
      }else{
          alert('Today is : ' +days[d.getDay()]+'\n'+'Current time is : ' +hours+' '+'AM'+' :'+' '+minutes +' :' +' '+seconds);
      }
   
    }

    function loadPage(){
     
        alert("" + document.URL);
     }
     
     function check(input){
        var input = window.prompt("Enter a word");
    if(input.length<4){
      alert("false");                   
                      } var lower = input.toLowerCase();
    if(lower.startsWith("java")){
        alert("true");
    }else{
        alert("false");
        }
     
    }
    function largest(){
    
    
var integer1 = window.prompt("Enter first number");
var integer2 = window.prompt("Enter second number");
var integer3 = window.prompt("Enter the third number");

var integerLargest = Math.max(integer1, integer2, integer3);
alert("The largest number is  " +integerLargest);
    }

    function capitalLetter(sentence){
        sentence = prompt("Type a sentence");
      sentence = sentence.toLowerCase().split(' ');
     for(var i = 0; i<sentence.length; i++){
      sentence[i] = sentence[i].charAt(0).toUpperCase()+sentence[i].substr(1);
        } 
     alert(sentence.join(" "));
   
   
    } 

    
           
    
    
    function time_convert()
     { 
var number = prompt("Enter any number");
    var hours =Math.floor (number / 60);  
    var minutes = number % 60;
   
    alert(hours + "hour(s)"+":" + minutes+"minute(s)");     
    }

  
    

 
