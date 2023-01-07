
//Ejencicio 1
//Given
console.log(hello);                                   
var hello = 'world';
//After
var hello;
console.log(hello);//Undefined  
hello = 'world';

//Ejencicio 2
//Given
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//After
console.log(magned)

//Ejercicio 3
//Given
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//After
console.log('super cool');

//Ejercio 4
//Given
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//After
console.log('chicken');
console.log('half-chicken')

//Ejercicio 5
//Given
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//After
mean();//mean no es una funcion, si no una variable

//Ejercicio 6
//Given
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//After
undefined;
console.log('rock');
console.log('r&b');
console.log('disco');

//Ejercicio7
//Given
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//After
console.log('san jose');
console.log('seattle');
console.log('burbank');
console.log('san jose');

//Ejercicio 8 - Bonus ES6: const
//Given
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//After
console.log({name:'Chicago', students: 65, hiring: true});
//const dojo ={} tratamos de nombrar una variable con una constante








