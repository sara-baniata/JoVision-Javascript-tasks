


setInterval(displaydate,1000);
function displaydate(){
let SOL = new Date();
document.getElementById('time').innerHTML=
`${SOL.getHours()}:${SOL.getMinutes()}:${SOL.getSeconds()}`;
}