//solution 17
function duplicate(){
  var arr=[1,1,1,2,3,2,5,5454,1,2,3,1,48,2,555,6,5,6,6,6,46,4,1,23,4]
  var ans= [...new Set(arr)]
  console.log(ans)
}

//solution 18
var arr = [3,1,4,3,1,4,2,5];
function secondlargestes(){
  let ans= [... new Set(arr)]
  var sorted= ans.sort(function(a,b){
    return b-a
  })
  console.log(sorted[1])
  //var sorted= ans.sort((a,b) => b-a)   by using arrow function
  // console.log([...new Set (arr)].sort(function (a, b) {
  //   return b - a;
  //   }) [1]);
}

//solution 19
function reverarr(){
  let ans= [... new Set(arr)].sort((a,b) => a-b)
  let arr2=[]
  for (let i=ans.length-1; i>=0;i--)
  {
    arr2.push(ans[i])
  }
  console.log(arr2)
}

//solution 20
function mostoccured(){
  let arr3=[1,2,3,2,5,1,2,13,13,12,1,1,2,2,1,2,1,1,1]
  let obj={};
  arr3.forEach(function(val){
    obj[val] === undefined ? (obj[val] = 1) : obj[val]++;
  });
  console.log(obj)
  
}
