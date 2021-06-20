const name1 = "hello";
//name1 = "hi"  //it's not possible
console.log(name1);

const numbers = [10,20,30];
numbers.push(40);
//numbers = [100,200,300];   //it's not possible
console.log(numbers);

for (let i = 0; i < 10; i++) {
    console.log(i);
    
}
//console.log(i)  //let dile leak hoy na,,so ekhane i print hobe na, error dekhabe, jodi var i = 0 ditam tahole ekhane i er man print kortho.