


function task4(){
    let sum=0;
	let  arr=[];
	for (let i=0;i<=100;i++){
		arr.push(i);
		//if (i%2==0)
	    //sum+=i;
	    //another method by filter 
	}
	let arr2=arr.filter(fun_even);
	for (let i=0;i<arr2.length;i++)
		sum+=arr2[i];

	document.getElementById('SA').innerHTML="<strong style='color:#F54927'>The sum of the array elements is : </strong>"+sum;
	
}
function fun_even(value)
{   
	return value%2==0;
}