setTimeout(()=>{
    console.log('1초후에 실행됩니다');
},1*1000)

let count = 0
setInterval(()=>{
    console.log(`1초마다 실행됩니다${count}번째`);
    count++
},1*1000)