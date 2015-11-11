angular.module('starter.serveMe', ['ionic'])

.factory('serveMe', function serveMe($window, $localstorage){
	
	return{

	makeListOne: function(){
		
		},
	
		
	addTaskBtn: function(listname, localList, taskName) {
		var tasklist = $localstorage.getObject(listname); //tasklist
		if (tasklist == null) {
			tasklist = [];
		}
		tasklist.push({
			"name": taskName,
			"completed": false
		});
		
		 $localstorage.setObject(listname, tasklist);
	},

	/*runs when a task is deleted*/
	deleteTask: function (tasklist, index) {
		
		
		//CREATE VAR FOR TASKLIST
		tasklist.splice(index, 1);
		$localstorage.setObject('tasklist', tasklist);
	},
	
	//CREATE UPDATE TASK FUNCTION (LINKED TO CHECK BUTTON)
	//SETOBJECT
	updateTask: function (listname, tasklist) {
		$localstorage.setObject(listname, tasklist);
	},
	
	getList: function(listName) {
		$localstorage.getObject(listName);
	}
	
		
	
	} //return
		
}); //close