
const buildCount = (i)=>{
    let count = i;
    const displayCount = () =>{
        count++
        console.log(count);
    }
    return displayCount;
};
const myCount = buildCount();
myCount()
myCount()
myCount()