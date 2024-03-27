var x=100;
    var y=100;

	function StairCaseAnim3(){
		$("#page1Div1").html('');
		$("#page2Div1").html('');	
		$("#page3Div1").html('');		
	    $("#centerText1").html('STAIRCASE PLAN VIEW');
	    $("#centerText2").html('CONFIGURATION'); 
		$('#page3Div1').removeAttr('width');
		$('#page3Div1').removeAttr('height');
		var w =670;
		var h = 520;

		var width = $(window).width();

		if ($(window).width() < 500) {
			width = $(this).width();
			paper = new Raphael(document.getElementById('page3Div1'), '100%', '100%');
			paper.setViewBox(0, 0, w, h, true);
			paper.setSize('100%', '100%');
		} else {
			paper = new Raphael(document.getElementById('page3Div1'), '100%', '100%');
			paper.setViewBox(0, 0, w, h, true);
			paper.setSize('100%', '100%');
		}

	
		var StairElevation3=paper.image("images/animStaircase.png", (x-10), (y-80), 450, 410);
}		