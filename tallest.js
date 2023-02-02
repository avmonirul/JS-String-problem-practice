function maxInArray(number){
    for(let i = 0; i < number.length; i++){
        let largest = number[0];
        const index = i;
        const element =number[index];
        if(element > largest){
             largest = element;
        }
        return largest;
    }
}

const heights = [165, 190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log('tallest person is', tallest);