// Check off Todo by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Deleting a Todo by clicking
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(800, function(){
		$(this).remove();
	});
	e.stopPropagation(); //Stops all Parent events
});

// Add a Todo
$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		var todoText = $(this).val();
		// Create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
		$(this).val("");
	}
});

$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
})