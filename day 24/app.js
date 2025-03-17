//solution 1
function cb(hof) {
  setTimeout(hof, 3000); // ye after 3 sec ke bad chalayega
  setTimeout(hof(), 3000); //ye turant chala dega
}
cb(function () {
  console.log("i am cb");
});

//solution 2
function mapkicopy(arr, fun) {
  var newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr.push(fun(arr[i]));
  }
  return newarr;
}
var ans = mapkicopy([1, 2, 3, 4, 5], function (val) {
  return val + 2;
});


//solution 3

function counter() {
  var count = 0;
  return function start() {
    count++;
    console.log(count);
  };
}

//var go = counter()();  // ye counter fun ko bar bar chala raha hai
// var go = counter()();  // ye counter fun ko bar bar chala raha hai

var go = counter(); //ise counter fun chala aur returned fun go me store hua

go(); //yaha go me returned fun chalaya ja rha hai jo start hai
go();
go();
go();
go();


//solution 3
function limite(fun,times)
{
  var limit =0;
  return function(){
    if(limit < times){
      limit ++;
      fun();
    }
    else{
      console.warn("limit reached")
    }
  }
}
var timer = limite(function(){
  console.log("heloo.")
},3);