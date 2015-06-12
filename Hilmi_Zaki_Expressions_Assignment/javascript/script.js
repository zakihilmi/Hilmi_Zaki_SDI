// We are calculating total area and volume of a box based on constraints given by the user

var height = prompt("This is a process of calculating total area and volume of a box.\n please enter the height value");//we're declaring the height variable and giving a prompt for the value

var width = prompt("please enter the width value");   // we declared the width

var length = prompt("please enter the length value");     //we declared the length

var areaofHeightandWidth= height * width;// we calculate the area of height and width by setting up this equation
console.log(areaofHeightandWidth); // we save our value in console.log

var areaofHeightandLength= height * length ; // we calculate the area of height and length by setting up this equation
console.log(areaofHeightandLength);

var areaofWidthandlength = width * length; // This equation calculates the area of width and length
console.log(areaofWidthandlength);

var totalSurfaceArea = 2*(areaofHeightandWidth) + 2*(areaofHeightandLength) + 2*(areaofWidthandlength); // We figure out our total surface area by this equation
console.log(totalSurfaceArea);

var theVolume= height * width * length; // This is how to calculate the volume of the box







