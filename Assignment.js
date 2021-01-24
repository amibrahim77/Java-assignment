
// Task-01
function kilometerToMeter(meterCalc) {
    var meter = meterCalc*1000;
    return meter;
}
var test = kilometerToMeter(5.5);
console.log(test);



// Task - 02

function budgetCalculator(WatNum, mobNum, lapNum){
    var watch = WatNum*50;
    var mobile = mobNum*100;
    var laptop = lapNum*500;
    var Total = watch+mobile+laptop;
    return Total;
    }
    
    var test = budgetCalculator(10,10,10);
    console.log(test);


// Task - 03

function hotelCost(stay) {
 
    if(stay<=10){
        var bill = stay*100;
        return bill;
    }
    else if
        (stay<=20){
            var bill = stay*80;
            return bill;        
    }
    else{
        (stay>20)
            var bill = stay*50;
            return bill;        
    }
    }
    var test = hotelCost(20);
    console.log(test);
    
// Task - 04

    var friend = ["Abdullah", "Ibrahim", "Mohammed", "Nazeeb", "SalehAlIbrahim", "Nuruddin", "AMIbrahim"];
    var max = friend [0];
    
    function megaFriend (friend){
    
        for ( var i=0; i< friend.length; i++){
            var element = friend[i];
            if (element.length>max.length){
                max=element;
                }
           }
           return max;
    }
    
    var result = megaFriend(friend);
    console.log(result);
    