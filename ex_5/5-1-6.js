function min(array){
    let output = array[0]
    for (const item of array){
        if(output > item){
            output = item
        }
    }
    return output
}

const testArray = [52,273,32,103,275,24,57]
console.log(`${testArray}중에서`);
console.log(`최솟값 = ${min(testArray)}`);