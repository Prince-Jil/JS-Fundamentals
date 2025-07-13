#!/usr/bin/node

const x = parselnt(process.argv[2]);
if (isNaN(x) || x<= 0) {
    console.log ("missing number of occurrence");
} else {
    let output ='';
    for(let i=0; i<x; i++){
        output += 'C is fun\n';
    }
    console.log(output.trim());
}