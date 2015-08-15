$(document).ready(function() {
	$("#pone").hide();
	$("#ptwo").hide();
	$("#pthree").hide();
	$("#pfour").hide();
    $("#one").click(function(){
		$("#pone").fadeToggle("slow");
		$("#ptwo").hide("slow");
		$("#pthree").hide("slow");
		$("#pfour").hide("slow");
	})
	$("#two").click(function(){
		$("#ptwo").toggle("slow");
		$("#pone").hide("slow");
		$("#pthree").hide("slow");
		$("#pfour").hide("slow");
	})
	$("#three").click(function(){
		$("#pthree").toggle("slow");
		$("#pone").hide("slow");
		$("#ptwo").hide("slow");
		$("#pfour").hide("slow");
	})
	$("#four").click(function(){
		$("#pfour").toggle("slow");
		$("#pone").hide("slow");
		$("#ptwo").hide("slow");
		$("#pthree").hide("slow");
	})
	function redirectPage() {
        window.location = linkLocation;
    }
});