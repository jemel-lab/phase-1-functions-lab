let distanceFromHqInBlocks = function(start) {
 const destination = 42;
 return Math.abs(start - destination);

}
let distanceFromHqInFeet= function (start) {
const destination = 42;
return Math. abs (start - destination) * 264;
}
let distanceTravelledInFeet = function(start , destination){
    return Math.abs(start - destination) * 264;
}
//function calculatesFarePrice(start , destination) {
  //const dist = distance - 400;

  //distanceTravelledInFeet = start - destination * 264;

  let calculatesFarePrice = function(start,destination) {
let distance = distanceTravelledInFeet(start,destination)
if (distance <= 400) {
  return 0;
} else if (distance > 400 && distance <= 2000) {
  return .02 * (distance - 400);
} else if (distance > 2000 && distance < 2500) {
  return 25;
} else {
  return 'cannot travel that far';
}
}
 // if (distance <= 400) return (0)
 //else if (distance > 400 && distance <= 2000) return (distance -400)*0.02
//else if (distance > 2000 && distance < 2500) return (25)  
//else return "cannot travel that far"
//}
