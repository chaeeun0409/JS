function sample(){
    console.log(arguments);
    for(let i = 0; i< arguments.length; i++){
        console.log(`${i}번째 요소: ${arguments}`);
    }
}

sample(1,2)
sample(1, 2,3)
sample(1, 2,3,4)
