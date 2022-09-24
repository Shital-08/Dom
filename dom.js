//1. Write the code to access element which is having id as "text"
let a = document.getElementById('text')
console.log(a)

//2. Write the code to access element which is having tag as "h1"
let x = document.getElementsByTagName("h1")[0]
console.log(x);

//3. Write the code to access element which is having class as "box"
let B = document.getElementsByClassName("box")
console.log(B)

//4. "<h1>Hello </h1>
//Change the heading from ""Hello"" to ""Hello World"" using DOM functions"
let element= document.getElementById("p1");
element.style.backgroundColor="lightgreen"
setTimeout(()=>{
element.style.backgroundColor="yellow"
element.innerHTML ="Hello World!"
},4000)
console.log(element)

//5.Create three cards on HTML page and 
//arrange them using flex property in row or horizontal direction and 
//also create button at the bottom named "Change Flex direction". 
//When user clicks on this button, the cards arrangement should be changed to vertical direction.

function execute(){
    let flex =document.getElementsByClassName("card")[0]
    let btn =document.getElementsByTagName("button")[0]
    if(flex.style.flexDirection=="column"){
     flex.style.flexDirection="row"
    }
    else {
     flex.style.flexDirection="column"
    }
 }

//6.What the difference between window vs document?

/* Window: 1. It is the root level element in any web page.
           2. The window object represents the browser window.
           3. When JavaScript is executed inside the browser, the window object is the JavaScript Global object.
    

 Document: 1. It is the direct child of the window object. It is aka Document Object Model (DOM).
           2. The document object represents the HTML document loaded in that window.
           3. The document object is a property of the window object.
 
*/
    
//7. "<h1>Hello </h1>

//Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"

let h = document.getElementById("heading")
h.style.color = "red"
console.log(h)

//8. Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

     let p= document.getElementById("para")
     p.style.color="blue"
     function change(){
     let p= document.getElementById("para")
     p.style.color="green";
     p.innerText="welcome to Elevation academy"
    }
    
//9. Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second.

   function getTime() {
   let date = new Date();
   let HH = date.getHours();
   let MM = date.getMinutes();
   let SS = date.getSeconds();
   document.getElementById("HH").innerText = HH;
   document.getElementById("MM").innerText = MM;
   document.getElementById("SS").innerText = SS;

   setTimeout(getTime,1000);
}
getTime();

//10. Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected.

function select() {
    let s1=document.getElementById("s")
    let list = s1.options[s1.selectedIndex].text
    document.getElementById("textvalue").value = list
 }

//11. "Create a form having name ,email, phone no. , birth year 
//Add validations - phone no. should start with 91 , it should be 10 digits
//email should be domain prepbytes.com
//birth year should be > 95"

   function check(){
        let msg1 = document.getElementById("message1");
        let ex1 = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        let email = document.getElementById("email").value;
        let lastVal = email.slice(-14);
        let result1 = ex1.test(email);
        if(result1 && lastVal==="@prepbytes.com"){
        msg1.innerText = " Email is Valid"
        }
        else{
        msg1.innerText = " Email is InValid"
        }
        let msg2 = document.getElementById("message2");
        let ex2 = /^[9]+[1]+[0-9]{8}$/;
        let phone = document.getElementById("phone").value;
        let result2 = ex2.test(phone);
        if(result2){
        msg2.innerText = " Phone Number is Valid"
        }
        else{
        msg2.innerText = " Phone Number is Invalid"
        }
        let msg3 = document.getElementById("message3");
        let year = document.getElementById("birthYear").value;
        let year1 = parseInt(year.slice(0,4));
        if(year1 > 1995){
        msg3.innerText = " Birth Year is valid"
        }
        else{
        msg3.innerText = " Birth Year is Invalid"
        }
         }