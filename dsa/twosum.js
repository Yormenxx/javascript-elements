

function twoSum(nums,target){

    let result = 0;

    for(let i = 0; i < nums.length; i++){

        for(let j = i + 1; j < nums.length; j++){

            if(nums[i]+nums[j]===target){
            
                return `Indexes are ${i} and ${j}`;
            }else{
               
                return `No two sum solution found`;
            }
        
        }
    }


}

console.log(twoSum([2,7,11,15],9));





