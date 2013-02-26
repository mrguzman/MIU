
$('#home').on('pageinit', function(){
	//code needed for home page goes here
	
	
});	
		
$('#additem').on('pageinit', function(){

		var myForm = $('#scheduleCall');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
	});
	
	var storeData = function(key, data){
			if(!key){
			var id = Math.floor(Math.random()*100000001);
		}else{
			var id = key;
		}
		var item = {};
			item.fname = ["First Name:", $('#fname').value];
			item.lname = ["Last Name:", $('#lname').value];
			item.contactNum = ["Contact Number:", $('#contactNum').value];
			item.contactType = ["Contact Type:", $('#contactType').value];
			item.date = ["Scheduled Date:", $('#date').value];
			item.timeOfDay = ["Preferred Time:", $('timeOfday').value];
			item.interestLevel = ["Interest Level", $('#interestLevel').value];
			item.leadSource = ["Lead Source:", $('#leadTypes').value];
			item.comments = ["Comments:", $('#comments').value];
			localStorage.setItem(id, JSON.stringify(item));
			
			alert("Callback Saved");

}; 

	
	//any other code needed for addItem page goes here
	
});


//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};


var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};

