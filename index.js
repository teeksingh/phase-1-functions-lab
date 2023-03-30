// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    const scuberLocation = 42;
    return Math.abs(blockNumber - scuberLocation);
}

function distanceFromHqInFeet(distInFeet){
    const feetPerBlock = 264
    return distanceFromHqInBlocks(distInFeet) * feetPerBlock;

}

function distanceTravelledInFeet(start, destination){
    const feetPerBlock =  264
    let distance;
     if (start >= destination){
        distance = (start - destination) * feetPerBlock
         }
    else {
        distance = (destination - start) * feetPerBlock
        }
        return distance
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    
    if (distance <401){
        let fare = 0
        return fare}
    else if
        (distance >=400 && distance <=2000){
            let discountedDistance = distance - 400;
            let fare = (discountedDistance) * .02
            return fare}
    else if 
        (distance >= 2000 && distance <=2499){
            let fare = 25
            return fare}
    else if
        (distance > 2500){
            return 'cannot travel that far'}
        }