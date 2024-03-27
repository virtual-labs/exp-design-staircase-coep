 	var x=100;
    var y=100;
   // var StairElevation;
  //  var plainView;
//	function StairCaseAnim(){
		$("#page1Div1").html('');	
	    $("#centerText1").html('STAIRCASE PLAN VIEW');
	    $("#centerText2").html('CONFIGURATION'); 
		$('#page1Div1').removeAttr('width');
		$('#page1Div1').removeAttr('height');
		var w =670;
		var h = 520;

		var width = $(window).width();

		if ($(window).width() < 500) {
			width = $(this).width();
			paper = new Raphael(document.getElementById('page1Div1'), '100%', '100%');
			paper.setViewBox(0, 0, w, h, true);
			paper.setSize('100%', '100%');
		} else {
			paper = new Raphael(document.getElementById('page1Div1'), '100%', '100%');
			paper.setViewBox(0, 0, w, h, true);
			paper.setSize('100%', '100%');
		}

	
		var StairElevation=paper.image("images/StairCases.png", (x-90), (y+10), 345, 310);
		//StairElevation=paper.image("images/ImgA.png", (x -90), (y -50), 345, 500);
		var plainView=paper.image("images/ImgB.png", (x +260), (y -40), 325, 450);

			
		
//}


	function digAnim(){
			StairElevation.remove();
			var dAnimation = Raphael.animation({ 'width': 500, 'height': 500, 'x': (x-70), 'y': (y-50) }, 1000);
			plainView.animate( dAnimation );
		}



 	function lengthAnim(length2){
		var Lval2=paper.text((x+440), (y+205)," = "+length2).attr({'font-size':20,'stroke':'#0099ff'});
	}

function widthAnim(width){
		var wval2=paper.text((x+210), (y-5)," = "+width).attr({'font-size':20,'stroke':'#0099ff'});
	}







