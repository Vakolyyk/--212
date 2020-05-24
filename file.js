function formValidation()
{
	var userName = document.registration.name;
	var userSurname = document.registration.surname;
	var password1 = document.registration.password1;
	var password2 = document.registration.password2;
	var email = document.registration.email;
	if(allLetter(userName))
	{
		if(allLetter(userSurname))
		{
			if(password1.value === ''){
				alert('Error! Password cannot be blank.')
			}
			if(password2.value === ''){
				alert('Error! Password again cannot be blank.')
			}else if(password1.value!==password2.value)
			{
				alert('Error! Passwords do not match.')
			}else{
				if(Email(email)){
					
				}
			}
				
		}
	}
}

function allLetter(userName)
{ 
	var letters = /^[A-Za-z]+$/;
	if(userName.value===''){
		alert('Error! Name and surname cannot be blank.')
	}
	if(userName.value.match(letters))
	{
		return true;
	}
	else
	{
		alert('Error! Name and surname must contain only letters.');
		return false;
	}
}
function Email(email)
{
	var format= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;		
	if(email.value===''){
		alert('Error! Email cannot be blank.')
	}
	if(email.value.match(format))
	{
		return true;
	}
	else
	{
		alert("Error! You have entered an invalid email address!(example@ex.com)");
		return false;
	}
}

function showButton() {
    return confirm("Do you want to submit the form? ");
}

