var kQuery = mainKqueryFunction;
function mainKqueryFunction(selector){
	var classSelector = '.';
	var idSelector = "#";
	var element={};

	if(selector.indexOf(classSelector) != -1){

		// Class selector is used
		selector = selector.replace(classSelector,"");
		element.obj = document.getElementsByClassName(selector);

	}else{

		if(selector.indexOf(idSelector) != -1){
			// Class selector is used
			selector = selector.replace(idSelector,"");
			element.obj = document.getElementById(selector);
		}

	}

	element.value = function(){
		return element.obj.value;
	}();

	return element;

}