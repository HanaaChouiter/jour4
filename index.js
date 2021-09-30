var cat = {
	name: "Garfield",
	age: 3,
	isCute: true,
}

//console.log(cat)
// console.log(cat.age)
// console.log(cat["age"])

if(cat.isCute === true){
    //console.log("So cute")
}

var cat2 = {
	name: "Balou",
	age: 7,
	isCute: false,
}

var cats =[cat, cat2];

// console.log(cat.age)
// console.log(cat["age"])
// console.log(cat2.isCute)
// console.log(cat2["isCute"])


function checkIfEven(num){
    if(num%2 === 0){
        //console.log("even");
    }else{
        //console.log("odd");
    }
}

checkIfEven(2)

function compare(num1, num2){
    if(num1 > num2){
        //console.log("num1 is bigger");
    }else if(num2 > num1){
        //console.log("num2 is bigger");
    }
}

compare(5,7)

function addUp(num){
    for(i=0; i< 12; i++){
        num = num + i
    }//console.log(num)
}

addUp(12)

// var heures;
// var minutes;
// var secondes;

// function format(num){
//     heures= Math.floor(num / 3600);
//     
//     console.log(heures)
//     console.log(minutes)
// }

// format(3700)
