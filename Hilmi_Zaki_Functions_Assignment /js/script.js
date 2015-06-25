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
console.log(a);       // a temporary storage for lateral surface area calculation

var topCalc=function(π,r){    //this function is to calculate top and bottom of cylinder
    var t= π * (r*r);       //a formula to calculate the top and bottom of cylinder
    return t;

}
var p = topCalc(π,r);
console.log(p);


var T=totalSurfaceArea(π,r,h);
function totalSurfaceArea(π,r,h){// in this loop we calculate total surface area of a closed cylinder

    var totalAre = 2*π*r*h + 2*[π*(r*r)];
  return totalAre;

}
console.log(T);
alert("The volume is"+" "+vol+"mm3"+" ,"+"the lateral surface area is"+" "+a+"mm2"+" ,"+"the top and bottom surface area is"+" "+p+
    "mm2"+"  ,"+"and the total surface area of a closed cylinder is"+" "+T+"mm2"); // That was the final step to insure output consists the volume,lateral surface area,and total surface area

//	test values	in	a	multi-lined
//r=4
//h=6
//total surface area=251.2 mm2

//r=7
//h=12
//total surface area=835.24 mm2

//r=5
//h=12
//total surface area=533.8 mm2
