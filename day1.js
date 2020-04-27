/*Week 2 start 
// Maria && Waeed Assessments 

Day1 start  */


//Q1  / Q2 / Q3 : 

//_________________________________________

var myArray = [1,2,3];

/*
Refer to the following array for the next three questions: [‘dog’, ‘cat’, ‘fox’, ‘monkey’].
What is the index of ‘dog’? 0
What is the index of ‘fox’? 2
What is the index of ‘monkey’? 3
*/

/*
[1, 2 , 3 ,4, 5, 6, 7]

[‘The’ ,‘quick’, ‘brown’, ‘fox’, ‘jumped’, ‘over’ , ’the lazy’, ’dog’ ]

[true, false, true]
_______________________________________
*/

//4 

function emptyArray() {
	var emp = [];
  return emp
}

//5
function numbersArray() {
  array=[];
for(i=1;i<=5;i++){
  array.push(i)
}

  return array;
}


//6 

function booleansArray() {
  array=[];
  for(i=1;i<=3;i++){
    array.push(true)
  }
  return array
}


//7

function stringsArray() {
 var stringsArray = ["Maria","Qoraan"];
 return stringsArray;
}

//8

function arrayLength(array) {
 var al = array.length;
 return al;
}

//9 

function firstElement(array) {
	a = array[0];
 return a;
}

//10 

function lastElement(array) {
var x = array.length-1;
var y = array[x];
return y;
}

//11

function getNthElement(array, number) {
  for(i=0;i<array.length;i++){
  	var x = array[number]
}
  return x; 
}

//12

function push(array, element) {
  array.push(element)
  console.log (array);
}

//13

function pop(array) {
  array.pop()
  console.log (array);
}

//14

function unshift(array, element) {
  array.unshift(element)
  return array;
}

//15

function shift(array) {
  array.shift()
  return array;
}

//16

function reassignLast(array, element) {
  var l=array.length-1
var na =[]
array[l]=element
return array

}

//17

function reassignNthElement(array, index, element) {
  // var i = index
  // var na = []
  array [index] = element 
  return array 

}

//18

function indexOf(array, element) {
	var i = 0;
    i = array.indexOf(element)

	return i;
 }

 //19

function slice(array, index1, index2) {
  array.slice(index1,index2)
    return array

}

//20

function addElement(array, index, element) {
   array.splice(index,0,element)
   return array 
}

//21

function removeElement(array, index) {
array.splice(index,1)
return array
}

//22

function concatArrays(array, array1) {
	
return array+","+array1
}

//23

function concatThreeArrays(array,array1,array2) {
/*var a=[]
a = */ 
return array+","+array1+","+array2;

}

//24

function joinStrings(array,string) {
var myVar3 = array.join(string)
return myVar3;
}

//25

function applySplit(string, splitter) {
	var a =[string];
 a.spilt(splitter)
return a;


}

//26

function applySplit(array, splitter) {
var array = array.split(splitter)
return array

}

//27

function getElementsAfter(array, index) {
 var a = array.slice(index+1);
 return a;
}

//28

function getElementsBefore(array, index) {
  var a = array.slice(0,index);

}

//29

function getAllElementsButFirst(array) {
array.shift()
return array;
}

//30

function getAllElementsButLast(array) {
 array.pop()
 return array;
}

/*
 Day1 End */