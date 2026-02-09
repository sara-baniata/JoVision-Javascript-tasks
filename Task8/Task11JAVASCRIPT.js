/*11. Create an HTML page that has a button called "Get ip", When clicked it makes a request to "https://api.ipify.org/" and replace the text of the button with the API's result, Handle errors in the request by creating a window alert of the error. [Javascript, Error handling, Window popups]
Hint: To test your code, Create errors intentionally by editing the url of the request to an invalid one, For example:  "https://api.ipify.orgx/"
*/


async function fun(){
 try{
 const response=await fetch('https://api.ipify.org/');

 if(response.ok){
 const data= await response.text();
 console.log(data);
 document.getElementById('box').innerHTML=`${data}`;
 }
 else{
   throw 'Failed to fetch data';
 }
}
catch (error){window.alert( error);}

}


/* the HTML file and the CSS file are the same of the task8 and task 10*/
