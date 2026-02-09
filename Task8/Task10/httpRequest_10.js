
async function fun(){
 try{
 const response=await fetch('https://api.ipify.org/');

 if(response.ok){
 const data= await response.text();
 console.log(data);
 document.getElementById('box').innerHTML=`${data}`;
 }
 else{
 throw new Error('Failed to fetch data');
 }
}
catch (error){console.error('Error:', error);}

}
/*
function fun(){
  fetch('https://api.ipify.org/')
      .then(response => response.text())
      .then (data => console.log(data))
      .catch(error =>console.error('Error:', error));
}*/
