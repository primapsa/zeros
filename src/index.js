module.exports = function zeros(expression) {
 

let op = [],
    operand,
    step,
    natnum = [],
    res = [],
    start,
    countDouble = 0,
    countFive = 0,
    digit,
    min;

    op = expression.split('*');
    for(let i = 0; i < op.length; i++){  
      operand = op[i]; 
      natnum = operand.split('!');
      step = 1; start = 1;
      if(natnum.length > 2){
        step = 2;   
        if(parseInt(natnum[0]) % 2 === 0) start = 2;   
      } 
        for(j = start; j <= parseInt(natnum[0]); j+=step){
          res.push(j);
        }  
        natnum = [];
    }

      for(let i = 0; i < res.length; i++){
        digit = parseInt(res[i]);
        if(digit > 3 && (digit % 2=== 0 || digit %5 === 0)){
          while( digit % 2 === 0 ){
            digit = digit / 2;
            countDouble++;
          }
          while(digit % 5 === 0){
            digit = digit / 5;
            countFive++;
          }
          continue
        }
        if( digit == 2) countDouble++;
        if(digit == 5) countFive++;
      }

min = countFive;
if(min > countDouble) min = countDouble;
return min;
}
