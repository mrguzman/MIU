
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


$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
/*		
$('#addItem').on('pageinit', function(){

	var scheduleForm = $('#scheduleCall');
	
	scheduleForm.validate({
		invalideHandler: function(form, validator){},
		submitHandler: function(){
			var data = scheduleForm.serializeArray();
			storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.


var autofillData = function (){
		for (var n in placeHolder){
			var id = Math.floor(Math.random()*100000001);
			localStorage.setItem(id, JSON.stringify(placeHolder[n]));
		}
};

var getData = function(){
		if (localStorage.length === 0){
			alert("No Leads Currently Scheduled. Place Holders have been loaded.");
			autofilldata();
		}
		var createDiv = document.createElement('div');		//Creates UL to dipslay data as a list item
		createDiv.setAttribute('id', 'items');
		var createUl = document.createElement('ul');
		createDiv.appendChild(createUl);
		document.body.appendChild(createDiv);
		for (var i=0, len=localStorage.length; i<len; i++){		//Loops through key in local storage.
			var createLi = document.createElement('li');
			var linksLi = document.createElement('li'); 
			createUl.appendChild(createLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			createLi.appendChild(makeSubList);
			loadImage(obj.leadSource[1], makeSubList);
			for (var n in obj){
				var makeSubLi = document.createElement('li');
				makeSubList.appendChild(makeSubLi);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubLi.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
			}
			createLinks(localStorage.key(i), linksLi);
		}
};

var storeData = function(data, key){
		if(!key){
			var id = Math.floor(Math.random()*100000001);
		}else{
			var id = key;
		}
		var item = {};
			item.fname = ["First Name:", $('#fname').val()];
			item.lname = ["Last Name:", $('#lname').val()];
			item.contactNum = ["Contact Number:", $('#contactNum').val()];
			item.contactType = ["Contact Type:", $('#contactType').val()];
			item.date = ["Scheduled Date:", $('#date').val()];
			item.timeOfDay = ["Preferred Time:", $('#timeOfDay').val];
			item.interestLevel = ["Interest Level", $('#interestLevel').val()];
			item.leadSource = ["Lead Source:", autoGet('leadTypes').val()];
			item.comments = ["Comments:", $('#comments').val()];
			localStorage.setItem(id, JSON.stringify(item));
			
			alert("Callback Saved");
		
};

/*
var	deleteItem = function (){
			
};
					
var clearLocal = function(){
	var clearAll = $('clearLeads');
	clearAll.addEventListener("click", clearData);
};

*/