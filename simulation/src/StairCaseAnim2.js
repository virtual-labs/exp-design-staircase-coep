 var x1=100;
 var y1=200;
	function StairCaseAnim2(){
		$("#page2Div1").html('');	
		$("#page1Div1").html('');	
	    $("#centerText1").html('DIAGRAM');
	    $("#centerText2").html('CONFIGURATION'); 
		$('#page2Div1').removeAttr('width');
		$('#page2Div1').removeAttr('height');
		var w =670;
		var h = 720;
	
		var width = $(window).width();
	
		if ($(window).width() < 500) {
			width = $(this).width();
			paper = new Raphael(document.getElementById('page2Div1'), '100%', '100%');
			paper.setViewBox(0, 0, w, h, true);
			paper.setSize('100%', '100%');
		} else {
			paper = new Raphael(document.getElementById('page2Div1'), '100%', '100%');
			paper.setViewBox(0, 0, w, h, true);
			paper.setSize('100%', '100%');
		}
	
	   footingDig1=paper.image("images/staircaseDig2.png", (x1 -20), (y1 -50), 350, 350);
	   
	}

	function riserHtAnim(rHVal1){
		var RiserVal = paper.text((x1+370), (y1+90),"Riser(R) = "+rHVal1).attr({'font-size':20,'stroke':'#0099ff'});	
		
	}

	function treadWAnim(tWVal1){
		var treadVal = paper.text((x1+190), (y1-20),"Tread(T) = "+tWVal1).attr({'font-size':20,'stroke':'#0099ff'});	
	}








