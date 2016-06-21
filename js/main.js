window.onload = function (){
	$ = kQuery;
	var nameBoxButton = $("#nameBoxButton");
	console.log(nameBoxButton.obj);
	nameBoxButton.obj.addEventListener("click", showValue);

	function showValue(){
		alert($('#name').value);
	}

}