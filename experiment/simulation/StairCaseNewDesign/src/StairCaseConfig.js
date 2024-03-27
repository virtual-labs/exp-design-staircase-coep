	var BuildingType;
	var	length;
	var	width;
	var widthEachFlight;
	var FtoF_hight;
	var HightEachFlight;
	var changeVal=0;
	var tMin,tMax;
	var rMin, rMax;
	
//var ArrayJson=[];
//var InputValMasterJson={};

//function StairCaseConfig(){

     $("#page2Div2").html('');	
		$("#page3Div2").html('');	  
      $("#centerText1").html('STAIRCASE DIAGRAM');
      $("#centerText2").html('CONFIGURATION');



var selection ='<div class="row">'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Enter Length (m) : </label>'
	   +'</div>'
	   +'<div class="col-sm-7">'
	   +'<input type="number" id="Lval" style= "width:100%;"  class=" form-control marginBottom"  disabled >'
	   +'</div>'
//	   +'<div class="col-sm-3">'
//	   +'</div>'
	   +'</div>'



	   +'<div class="row">'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Enter Width (m) : </label>'
	   +'</div>'	    
	   +'<div class="col-sm-7">'
	   +'<input type="number" id="Wval" style= "width:100%;"  class=" form-control marginBottom" disabled>'
	   +'</div>'
//	   +'<div class="col-sm-3">'
//	   +'</div>'	     
	   +'</div>'
	   
	   
	   +'<div class="row" id="FlightsNos" hidden>'
	   +'<div class="col-sm-5">'
	   +'</div>'
	   +' <div class="col-sm-7">'
	   +' 	<div class="alert alert-info">'
   	   +' 	<strong class="labelstyleInfo "><center> Dog-legged Staircase &rarr; Number of Flights = 2 </center></strong> '
  	   +'	</div>'
  	   +' </div>'
//  	   +'<div class="col-sm-3">'
//	   +'</div>'   
	   +'</div>'	
	   
	     
	   +'<div class="row">'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom"> Width of Each Flight (m) : </label>'
	   +'</div>'
	   +'<div class="col-sm-7">'
	   +'<input type="number" id="Wval_1Flight" style= 10px;width:100%;" class=" form-control marginBottom" disabled>'
	   +'</div>'
//	   +'<div class="col-sm-3">'
//	   +'</div>'	     
	   +'</div>'	
	   
	   +'<div class="row">'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Floor-to-Floor Height (m) : </label>'
	   +'</div>'
	   +'<div class="col-sm-7">'
	   +'<input type="number" id="FtoFhight" style= 10px;width:100%;"  class=" form-control marginBottom" disabled>'
	   +'</div>'	
//	   +'<div class="col-sm-3">'
//	   +'</div>'     
	   +'</div>'
	   
	   +'<div class="row calRowBorder">'
	   +'<div class="col-sm-5">'
	   +"<label class='labelstyle '>Height of Each Flight (m) : </label>"
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="Hval_1Flight" style= 10px;width:100%;"  class=" form-control " disabled>'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subHval_1Flight" data-toggle="modal" data-target="#myModal" >CHECK ANSWER</button>'
	   +'</div>'	    
	   +'</div>'

	   +'<div class="row">'
//	   +'<div class="col-sm-3">'
//	   +'</div>'
	   +'<div class="col-sm-12">'
	   +'<button type="button" style="padding: 10px;  marginBottom"  class="btn btn-danger btnStyle" id="nxtLvl"  disabled ><b>SUBMIT</b></button>'
	   +'</div>'
//	   +'<div class="col-sm-3">'
//	   +'</div>'
	   +'</div>'	   
//	   + modelHtm
	   $("#page1Div2").html(selection);
		
$("#configSelection").change(function(){	
//	$("#configSelection").prop("disabled",false);	
		changeVal=changeVal+1;
		BuildingType = $("#configConnection").val();
		$("#configConnection").children(":selected").css("background-color","#f7dddd");	
			console.log("BuildingType="+BuildingType);	
		if(BuildingType == 1){		  
			tMin=0.22;
			tMax=0.25;
			rMin=0.15;
			rMax=0.18;
			$("#Lval").prop("disabled",false);	
			//$("#configConnection").prop("disabled",true);	
			digAnim();		
					
		}else if(BuildingType==2) {
			tMin=0.25;
			tMax=0.3;
			rMin=0.12;
			rMax=0.15;
			$("#Lval").prop("disabled",false);	
			//$("#configConnection").prop("disabled",true);
			digAnim();
				
		}else{
			tMin=0.25;
			tMax=0.3;
			rMin=0.15;
			rMax=0.19;
			$("#Lval").prop("disabled",false);	
			//$("#configConnection").prop("disabled",true);	
			digAnim();									
			
		}
//		StairCaseAnim();
	});
	
	$("#Lval").change(function(){		
		$("body").css("padding","0px 0px 0px 0px");	
		length = $("#Lval").val();		
		if(length == ""){			
			alert("Enter numeric value ");
			//$("#modelMsg").html("<b class='boldTextRed'>Please Enter Value</b>");
		}else {
			length = parseFloat($("#Lval").val());
				if(length <= 0){			
					alert("Entered value is incorrect.Try again.");					
				}else{
					lengthAnim(length);
					$("#Wval").prop("disabled",false);	
					$("#Lval").prop("disabled",true);										
				}
		}
	});

	
	$("#Wval").change(function(){		
		$("body").css("padding","0px 0px 0px 0px");	
		width = $("#Wval").val();		
		if(width == ""){			
			alert("Enter numeric value");
			//$("#modelMsg").html("<b class='boldTextRed'>Please Enter Value</b>");
		}else {
			width = parseFloat($("#Wval").val());
				if(width <= 0){			
					alert("Entered value is incorrect.Try again.");					
				}else{
					widthAnim(width);					
					$("#FlightsNos").prop("hidden",false);
					$("#Wval_1Flight").prop("disabled",false);	
					$("#Wval").prop("disabled",true);				
				}
		}
	});
	
		
	$("#Wval_1Flight").change(function(){		
		$("body").css("padding","0px 0px 0px 0px");	
		widthEachFlight = $("#Wval_1Flight").val();		
		if(widthEachFlight == ""){			
			alert("Enter numeric value");
		}else {
			widthEachFlight = parseFloat($("#Wval_1Flight").val());
				if(widthEachFlight <= 0){			
					alert("Entered value is incorrect.Try again.");					
				}else{
					$("#FtoFhight").prop("disabled",false);	
					$("#Wval_1Flight").prop("disabled",true);				
				}
		}
	});
	
	$("#FtoFhight").change(function(){		
		$("body").css("padding","0px 0px 0px 0px");	
		FtoF_hight = $("#FtoFhight").val();		
		if(FtoF_hight == ""){			
			alert("Enter numeric value");
			//$("#modelMsg").html("<b class='boldTextRed'>Please Enter Value</b>");
		}else {
			FtoF_hight = parseFloat($("#FtoFhight").val());
				if(FtoF_hight <= 0){			
					alert("Entered value is incorrect.Try again.");					
				}else{
					$("#Hval_1Flight").prop("disabled",false);	
					$("#subHval_1Flight").prop("disabled",false);	
					$("#FtoFhight").prop("disabled",true);				
				}
		}
	});
	 
	var id=0;
		$("#subHval_1Flight").click(function(){	
		 var H_perFlAns = FtoF_hight/2;
   		 var Roundup=H_perFlAns.toFixed(2);
   		 var H_perFlAnsCorr=parseFloat(Roundup);
	 	 $("body").css("padding","0px 0px 0px 0px");
		 HightEachFlight =$("#Hval_1Flight").val();	
		if(HightEachFlight==""){			
			$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
		}else{
			if (id <= 2) {
				if (HightEachFlight == H_perFlAnsCorr) {					
					//addToMasterJSON();
					$("#nxtLvl").prop("disabled",false);	
					$("#Hval_1Flight").prop("disabled",true);	
					$("#subHval_1Flight").prop("disabled",true);
						id=0;		
					toastr.success("Correct Answer");
				} else if (HightEachFlight != H_perFlAnsCorr) {
					$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");				
				}
			} else if (id == 3){
				$("#modelMsg").html("<b class='boldTextBlue'>Formula :  Floor_to_Floor Hight / 2  </b>");
			} else {
				HightEachFlight =parseFloat($("#Hval_1Flight").val());
//				flow = flowAns.toFixed(2);
				if (HightEachFlight == H_perFlAnsCorr) {					
					//addToMasterJSON();
					$("#nxtLvl").prop("disabled",false);	
					$("#Hval_1Flight").prop("disabled",true);	
					$("#subHval_1Flight").prop("disabled",true);		
					id=0;
					toastr.success("Correct Answer");
				} else {
					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +H_perFlAnsCorr+'</b>');
				}
			}
			id++;
		}

	 
	});
 
    $("#nxtLvl").click(function(){
	
		$("#canvas-div").html('');
		$("#main-div-conf").html('');
		$("#centerText1").html('');
		$("#centerText2").html('');
			$("body").css("padding","0px 0px 0px 0px");	
//		StairCaseAnim2();
//		StairCaseConfig2(length,HightEachFlight,rMin,rMax,tMin,tMax);	
		 //	$("#nextLevelForConfig").prop("disabled",false);
	   		$("#modelMsg").html("<b class='boldTextGreen'>Configured Successfully</b>");
	  
	});

	
	
	
	