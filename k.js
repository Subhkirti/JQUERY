var f=[-2,5,"6",7,9,0,"0",1,-26,72,"hi","6",99,"a",0.7,"0.666",72,54,1.11]
f.sort(function(first,second)
{return second-first})
var t=f.map((e)=>{
    if (!isNaN(e)){
        console.log(e)
    }
})




