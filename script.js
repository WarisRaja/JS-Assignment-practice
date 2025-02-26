
//there are five ways to print any message on console.
// console.log("this is waris")
// console.warn("this is warning")
// console.info("this is info")
// console.error("this is error")
// console.table({Name:'waris',age :21})

//solution 2
// console.log(typeof 12)
// console.log(typeof "waris ")
// console.log(typeof true)
// console.log(typeof null)

//solution 3
let a =23
let b=20;
let c;
c=a
a=b
b=c

console.log(a,b)

//2nd ways
var aa =12
var bb= 10;
[aa, bb]=[bb,aa]
console.log(aa,bb)


//3rd ways
// here is aa=10 and bb=12
aa= aa+bb;
bb=aa-bb;
aa=aa-bb
console.log(aa,bb)


//solution 4

console.group("my details")
console.log("my name is waris raja")
console.log("my age is 21")
console.log("village is Bathna")
console.groupEnd()

//groupCollapsed it close the group by default
console.groupCollapsed("my details")
console.log("my name is waris raja")


console.groupCollapsed("api data ")
console.log("data sent..")
console.log("data fetching ..")
console.log("data received..")
console.log("data showed..")
console.groupEnd()


console.log("my age is 21")
console.log("village is Bathna")
console.groupEnd()


//solution 5
const obj={
  Name:"waris",
  age:24,
  email:"warismedhso@gmail.com"

}

obj.age=10
console.log(obj)

//if u freez it then updation will not be allowed in this object
Object.freeze(obj)
obj.Name="Raja"
console.log(obj)   // then output will be same

//solution 6
//one way
console.log(Number("4545"))

//second way
console.log(parseInt("4545"))

//third way
console.log(+"4545")
console.log(typeof +"45454")

//solution 7
let str="javascript"
console.log(str.includes("script"))
//first way 
console.log(str.indexOf("script"))  //if it exits then it gives starting index otherwise it gives -1
console.log(str.indexOf("script") !== -1)

//second way
console.log(str.search("script"))


//solution 8
console.log(12*"waris")
console.log(12/"waris")
console.log(12-"waris")
console.log(12+"waris")

