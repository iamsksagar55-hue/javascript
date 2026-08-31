/*let age=21;
if(age>=22)
{
    console.log("am adult")
}*/

/*let carttotal=1200;
if(carttotal>=1000){
    console.log("you get 10% discount");
}else{
    console.log("spend additional amnt to get discount")
}
if(carttotal>=2000)
    output---spend additional amnt to get discount
if(carttotal>=2000)
    output---you get 10% discount*/

/*let email="";
if(email===""){
    console.log("email field requeired");
}else{
    console.log("emailgiven")
}
output--email field requeired
let email="a";
output--emailgiven*/


//************multiple conditions*********
/*let temp = 40;

if (temp >= 35) {
    console.log("it is hot");
} else if (temp >= 25) {
    console.log("it is warm");
} else if (temp >= 20) {
    console.log("it is cold");
} else {
    console.log("it is cold");
}*/

//output let temp = 30; it is warm
//output let temp = 10; it is cold
//output let temp = 40; it is hot


//************SWITCH LOGIC***********
let role="admin";
switch(role){
    case"admin":
    console.log("you have full access");
    break;
    case"editor":
    console.log("you have editor access");
    break;
    case"viewer":
    console.log("you have viewer option");
    break;
    default:
    console.log("you have edit recognized")
}