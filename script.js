function stringChop(str, size) {
  // your code here
	let arr = [];
	if(!str){
		return []
	}
	let new_arr = str.split("")
	let length = new_arr.length
	for(let i=0; i<=length-1; i++){
        if(length<=size && length){
		   arr.push(new_arr.slice(0,length).join(""))
        }else{
            arr.push(new_arr.slice(0,size).join(""))
            // length = new_arr.length-2
            new_arr.splice(0,size)
        }
        // length = length-2
	}
    // console.log(arr)
    let arr1=[]
    let length1 = Math.ceil(arr.length/size)
    // console.log(length1)
   for(let i=0; i<length1; i++){
    arr1.push(arr[i])
   }
	   return arr1
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");    
alert(stringChop(str, size));
