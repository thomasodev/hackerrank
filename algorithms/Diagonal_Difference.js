<<<<<<< HEAD
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function diagonalDifference(arr) {
    let leftToRight = 0;
    let rightToLeft = 0;
    let k = arr.length - 1;

    for(let i in arr){
        for(let j in arr[i]){
            if(i == j) leftToRight += arr[i][j];
            if(j == k){ 
                rightToLeft += arr[i][j];
                k--;
            }
        }
    }
    return Math.abs(leftToRight - rightToLeft);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
=======
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function diagonalDifference(arr) {
    let leftToRight = 0;
    let rightToLeft = 0;
    let k = arr.length - 1;

    for(let i in arr){
        for(let j in arr[i]){
            if(i == j) leftToRight += arr[i][j];
            if(j == k){ 
                rightToLeft += arr[i][j];
                k--;
            }
        }
    }
    return Math.abs(leftToRight - rightToLeft);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
>>>>>>> 7dd2db9017a344c8502e1891dd916664cecc752f
}