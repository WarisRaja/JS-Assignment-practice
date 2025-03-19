//solution 1
function barbar(fn,kitnaderpar){
  setInterval(fn,kitnaderpar);
}
//barbar(function(){
//   console.log("hello")
// },2000)

//solution 2
function greetkaro(greating){
return function (person){
  console.log(`${greating} ${person}`)
}
}

var great = greetkaro("ASlam !");
great("waris")
great("raja")

//solution 3
function once(fn){
  var executed=false;
  return function(){
    if (!executed){
      executed = true
      fn();
      }
          else
    console.warn("already executed once")
  
}
}
var ekbar = once(function(){console.log("hi one time")})
ekbar()

//solution 4
function throt(fn,delay){
     var lastcall =0;
  return function(){
    let current= Date.now()
    if(current - lastcall >= delay){
      lastcall=current;
      fn();
    }
  }
}
var tfun= throt(function(){
  console.log("ran after 2 sec")
},2000)
