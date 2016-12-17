$(document).ready(function(){
	var myElem = document.getElementById('tabs');
	if(myElem === null){
	$( "#tabs-3" ).tabs();
	$( "#tabs-2" ).tabs();
	$( "#tabs" ).tabs();
	} else{
	$( "#tabs" ).tabs();
	}
});
