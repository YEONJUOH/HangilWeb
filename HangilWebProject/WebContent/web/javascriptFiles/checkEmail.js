/**
 * 
 */

function emailReturn(){
	var email = $('#Email').val()+$('#domain').val();
	var regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
	
	if (email.match(regExp)) {
		return true;
	}else{
		return false;
	}
	
	
	
}