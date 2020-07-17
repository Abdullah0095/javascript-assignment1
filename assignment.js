//  Assignment 1 :: Conversion of FEET to MILE
 
function feetToMile(feet){
    if(feet < 0){
        console.log("WARNING: Distance cannot be negative");
    }else{
        var mile = feet/5280;
        return mile;
    }
}
         var measurement = feetToMile(25800);
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


    // Assignment 3 ::  Calculation of bricks
 
    function brickCalculator(n){
  
  
        if(n <= 10){
         
         var totalbrick =15 * n * 1000;
         console.log(totalbrick);
         }
         
         if(n > 10 && n <= 20){
           var totalHeight = (10*15) + (n-10)*12;
           var totalbrick = totalHeight * 1000;
           console.log(totalbrick);
         }
         if(n > 20){
           var totalHeight = (10*15) + (10*12) + (n-20)*10;
           var totalbrick = totalHeight * 1000;
           console.log(totalbrick);
         }
      }
       brickCalculator(n);


    //   Assignment 4 ::  Find out tiny name


    function tinyFriend(names){
        let tinyName = names[0];
        for(let i = 0; i < names.length; i++){
            let currentName = names[i];
            if(currentName.length < tinyName.length){
                tinyName = currentName;
            }
        }
        return tinyName;
    }
    let smallestName = tinyFriend("put the strings here");
     console.log("Tiny name is", smallestName);

 