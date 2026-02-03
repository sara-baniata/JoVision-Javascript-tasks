

function BOX1()
{
	let arr=[];
	for(let i=0;i<=100;i++)
	   arr.push(i);
    for(let i=0;i<=100;i++)
	{
		if(arr[i]%3==0)
			arr.splice(i,1);
	}
	console.log(arr);
}
function BOX2()
{
	let arr=[];
	for(let i=0;i<=100;i++)
		arr.push(i);
	for(let i=101;i<=150;i++)
	{
		arr.push(i);
		
	}
	console.log(arr.slice(101,151));
}
function BOX3()
{
	let arr=[];
	for(let i=0;i<=100;i++){
		arr.push(i);
	    arr[i]+=3;
		
	}
	console.log(arr);
}
function BOX4(){
	let arr=[];
	for(let i=0;i<=100;i++){
		arr.push(i);
	}
	console.log(arr.slice(20,41));
	
}
function BOX5(){
	let arr=[];
	for(let i=0;i<=100;i++){
	arr.push(i);
	}
	shuffleArray(arr);
	console.log(arr);
	arr.sort();
	arr.reverse();
	console.log(arr);
}
 function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
