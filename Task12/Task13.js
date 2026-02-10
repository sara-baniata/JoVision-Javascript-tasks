function fun(event){
    event.preventDefault();
    fetch("https://api.agify.io?name="+document.getElementById('name').value)
	    .then(response => response.json())
	    .then(data => {console.log(data) ;
		      window.alert("Your name is: "+document.getElementById('name').value+
		             "\nYour age is: "+data.age);})

	    .catch(error => window.alert('Error:'+error));
        
}