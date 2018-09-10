// JavaScript Document

/*var candidate = 48;
if (candidate >= 20 && candidate <= 30){
	console.log("this is true");
}
else{
	console.log("this is false");
}*/

/*document.write(Date());
document.write("<h2>fdgfdgfd</h2> <p>fsgfsgbfsgfs</p>");*/

/*============Confirm Box ============*/

/*var result = confirm("Are sure visit this website");
if(result == true){
	window.location = "http://www.mayabiousinfotech.com/";
}
else{
	window.location = "https://www.google.com/";
}*/


/*============Object============*/
/*var person = {
		firstname : "Prasanta",
		lastname : "Mallick",
		fulldata : function(){
				return "My name is" + this.firstname  + this.lastname;
			}
	}
alert(person.fulldata());*/

/*============Array============*/

/*var students = ["ashok", "Jaga", "Swapan", [ "student1", "student2", "student3", [1,2,3,4] ]];

document.write( students[3][3][2]);*/

/*============While Loop============*/
/*var prasanta = 1;

while(prasanta <= 11){
	document.write( "step" +prasanta+ "<br/>");
	prasanta++
}*/
/*============Do While Loop============*/

/*var mallick = 25;
do{
	document.write("Step" +mallick+ "<br/>");
	mallick++
}
while(mallick < 11)*/

/*============For Loop============*/
/*var student = [ "students1", "students2", "students3", "students4"];
 
for(var i=0; i< student.length; i++ ){
	document.write(student[i] + "<br/>");
}*/
 

$(document).ready(function() {
    $(".btnClick").click(function(){
		$(".card-body").slideToggle(700, function(){
			alert("Btn Is Clicked")
		});
	});
		
});


for(ddd=0; ddd<11; ddd++){
	document.write("Walk" +ddd+ "<br/>");
}







