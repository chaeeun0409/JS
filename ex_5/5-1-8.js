function min(...items){
    let output = items[0]
    for(const item of items){
        if(output > item){
            output = item
        }
        
    }
    return output
}
console.log('min(52,273,32,103,275,24,57');
console.log(`=${min(52,273,32,103,275,24,57)}`);
