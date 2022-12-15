var std1 = {
    rollnum : "1",
    Course : "Web-development",
    name : "Ahmad Hassan",
    Age : "19"
} 
var std2 = {
    rollnum : "2",
    Course : "Web-development",
    name : "Ahsan Javed",
    Age : "22"
} 
var std3 = {
    rollnum : "3",
    Course : "Web-development",
    name : "Kashan Khan",
    Age : "21"
} 
var std4 = {
    rollnum : "4",
    Course : "Web-development",
    name : "Huzaifa Khan",
    Age : "18"
} 
var std5 = {
    rollnum : "5",
    Course : "Web-development",
    name : "WAhaj Ahmad",
    Age : "18"
} 
var std6 = {
    rollnum : "6",
    Course : "Web-development",
    name : "Zohaib Khan ",
    Age : "20"
} 
var std7 = {
    rollnum : "7",
    Course : "Web-development",
    name : "Marij Ahmad",
    Age : "18"
} 
var std8 = {
    rollnum : "8",
    Course : "Web-development",
    name : "Hamza Riaz",
    Age : "20"
} 
var std9 = {
    rollnum : "9",
    Course : "Web-development",
    name : "Kariz Ali",
    Age : "20"
} 
var std10 = {
    rollnum : "10",
    Course : "Web-development",
    name : "Meraj Ali",
    Age : "19"
} 
var arrray = [std1,std2,std3,std4,std5,std6,std7,std8,std9,std10]
var  sec = "";
var inp = document.getElementById("inp")
var div = document.getElementById("main")
function abd(){
    for (i=0; i<arrray.length; i++ ){
        if(inp.value == arrray[i].rollnum){
            console.log(arrray[i])
            div.innerHTML=arrray[i];
            inp.value="";
        }
    }
}