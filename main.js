function validateform()
			{
				var errors = new Array();
				//var errors=[]; this is also array
				var data = new Object(); //empty object to collect info from form
				//var data = {};this is another syntax to create object

				//variables to hold references for inputs
				var fname  = document.getElementById('fullname');
				var em  = document.getElementById('email');
				var msg  = document.getElementById('message');
				var btn  = document.getElementById('submit-button');


				var regforemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;


				if(fname.value!='')
				{
					data = {fn:fname.value};
						//console.log(data);
						errors.length=0;

						

						if(em.value=='' && msg.value=='')
						{
							errors.length=0;
							errors.push("email is missing");
							errors.push("message is missing");
							//console.log(errors);
							
						}
				}
				if(em.value!='')
					{
						if(em.value.match(regforemail))
						{
							data = {fn:fname.value,em:email.value};
							errors.length=0;
							errors.push("message is missing");
							//console.log(data);
							//console.log(errors);
						}
						else
						{
							errors.length=0;
							errors.push("wrong email syntax","message is missing");
							//console.log(errors);

						}
					}
					
				if(msg.value!='')
					{
							data = {msg:msg.value};
							errors.length=0;
							
							
							
					}	
						
				if(errors.length!=0)
					{
					console.log(errors);
					}
			
				if(msg.value!='' && fname.value!='' && email.value!='')
					{
					data = {fn:fname.value,em:email.value,msg:msg.value};
					console.log(data);
					document.getElementById('submitform').reset();
					}
				else
					{
					if(msg.value=='' && fname.value=='' && email.value=='')
					{
					errors[0]="name is missing";
					errors[1]="email is missing";
					errors[2]="msg is missing";
					console.log(errors);
					}
					
					
					}
				
				
			
			}