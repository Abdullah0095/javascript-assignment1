// Assignment 1 :: Conversion of FEET to MILE
 
function feetToMile(feet){
    if(feet < 0){
        console.log("WARNING: Distance cannot be negative");
    }else{
        var mile = feet/5280;
        return mile;
    }
}
         var measurement = feetToMile(feet);
         console.log(measurement);


// Assignment 2 ::  Calculation of wood

function woodCalculator(chair, table, bed){
    
    var ChairNeedsWood = 1;
        TableNeedsWood = 3;
        BedNeedsWood   = 5;

        chair = chair * ChairNeedsWood;
        

        table = table * TableNeedsWood;
        

        bed = bed * BedNeedsWood;
        

        NoOfwood = chair + table + bed;
        return NoOfwood;
}
   var Calculation = woodCalculator(chair, table, bed);
   console.log("The total number of woods is : ", Calculation);


   //  Assignment 3 ::  Calculation of bricks
 
                                      