let sum = (num1,num2) => num1 + num2;


let calc = (num1,num2,callback)=> callback(num1,num2);

console.log(7,5,sum);

let date = (callback)=>{
    console.log(new Date);
    setTimeout(function(){
        let date = new Date;
        callback(date);
    }, 3000)
}

let printDate = (dateNow)=>{
    console.log(dateNow)
}

date(printDate);