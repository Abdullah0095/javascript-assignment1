
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
brickCalculator(127);

