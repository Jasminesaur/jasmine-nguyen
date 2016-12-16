$(document).ready(function(){
	var myElem = document.getElementById('tabs');
	if(myElem != null){
	$( "#tabs" ).tabs();
	} else{
	$( "#tabs-3" ).tabs();
	$( "#tabs-2" ).tabs();
	}
});
