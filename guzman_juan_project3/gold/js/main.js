
var formValues = function(data){
	console.log(data);
};



$(document).ready(function(){
	
	var scheduleForm = $('#scheduleCall');
	
	scheduleForm.validate({
		invalideHandler: function(form, validator){},
		submitHandler: function(){
			var data = scheduleForm.serializeArray();
			formValues(data);
		}
	});
	
});
