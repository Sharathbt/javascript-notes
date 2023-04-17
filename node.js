
// using os module-----------------------------------------------------
// let os= require("os");
// console.log(os.arch());
// console.log(os.platform());

// using childprocess---------------------------------------------------------
let variable=require("child_process");
// console.log("opening calculator");
// let ans=variable.execSync("code");

let ans2=variable.execSync("node abc.js");// another file oprning
console.log(""+ans2)   // for strings use ""+ otherwise the output in tthe binary form
