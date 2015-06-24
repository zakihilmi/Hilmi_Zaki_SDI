//Zaki Hilmi 24June2015_Functions_Assignment
//This is a process of calculating volume and surface area of a closed cylinder
var π =3.14 ;// This is a percentage required for the calculation
var r=prompt("Please enter radius value! ");//we declared and prompted the radius
var h =prompt("Please enter height value! ");//we declared and prompted the height

var vol=calcVolum(π,r,h);//setups a variable for our function

  function calcVolum(π,r,h){// our first function is to calculate the valume
      var volume = π * (r*r) * h;
      return volume;

}
console.log(vol);

var lateralSurface = function(r,h){// the second function will be anonymous and used to for lateral surface area calculation

    var area=2*π * r * h;
    return area;
}
var a = lateralSurface(r,h);
console.log(a);// a temporary storage for lateral surface area calculation

var topandBottom =function topCalc(π,r){//this function is to calculate top and bottom of cylinder
    var t= π * (r*r); //a formula to calculate the top and bottom of cylinder
    return t


}
console.log(topandBottom(π,r));


//while (π,r,h){

}