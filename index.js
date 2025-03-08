// Code your solution in this file!
function distanceFromHqInBlocks(pickupBlock , hqBlock = 42){
    if(pickupBlock >42){
        return pickupBlock - hqBlock;
    }else{
        return hqBlock - pickupBlock;
    }
}
function distanceFromHqInFeet(blocks){ 
    const blocksDistance = distanceFromHqInBlocks(blocks);
    return blocksDistance * 264;
}

function distanceTravelledInFeet(start, destination){
     if(start > destination){
        return (start - destination) * 264;
     }
     else{
        return (destination - start) * 264;
     }
}
function calculatesFarePrice(startCount, destinationCount, totalPrice){
    const feet = distanceTravelledInFeet(startCount, destinationCount);

    if(feet <= 400){
        return totalPrice = 0;
    }
    else if(feet> 400 && feet <=2000){
        return totalPrice = (2 / 100) * (feet - 400);
    }
    else if(feet >2000 && feet <= 2500){
        return totalPrice = 25;
    }
    else{
        totalPrice = 0;
        return `cannot travel that far`;
    }
}
