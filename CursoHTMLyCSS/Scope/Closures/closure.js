
const buildCount = (i)=>{
    let count = i;
    const displayCount = () =>{
        count++
        console.log(count);
    }
    return displayCount;
};
const myCount = buildCount(0);
myCount()
myCount()
myCount()