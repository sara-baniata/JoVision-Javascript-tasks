function fun(event){
event.preventDefault();
const person ={'name':document.getElementById('name').value,
               'age' :document.getElementById('age') .value,
			   'timestamps':new Date(),
               };
			   const {'name':a,'age':b,'timestamps':c}=person;
			    window.alert("Name :"+a+
				            "\nAge :"+b+
							"\nTimestamps:"+c);
							}