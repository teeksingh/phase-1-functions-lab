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
    let distance
     if (start >= destination){
        distance = (start - destination) * feetPerBlock
         }
    else {
        distance = (destination - start) *feetPerBlock
        }
        return distance
}

function calculatesFarePrice(start, destination){
    let distance   
    if (distance <401){
        fare = 0
    }
    else{
        (distance >=401 && distance <=2000){
            fare = distance * .02
        }
    }
    else{
        (distance >= 2000 && distance <=2499){
            fare = 25
        }
    else{
        distance > 2500{
            return console.log('cannot travel that far')
        }
    }
    }
    return fare
}