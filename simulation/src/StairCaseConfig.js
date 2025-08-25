	var BuildingType;
	var	length;
	var	width;
	var widthEachFlight;
	var FtoF_hight;
	var HightEachFlight;
	var changeVal=0;
	 var concrete;
	 tMin=0.25;
		tMax=0.35;
		rMin=0.15;
		rMax=0.25;
	MasterJson = {};
	 var jsonArray = [];
	 var fe;
//var ArrayJson=[];
//var InputValMasterJson={};

function StairCaseConfig(){

    
      $("#centerText1").html('DESIGN');
      $("#centerText2").html('CONFIGURATION');
     


var selection ='<div class="row">'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Enter Length (m) : </label>'
	   +'</div>'
	   +'<div class="col-sm-7">'
	   +'<input type="number" id="Lval" style= "width:100%;"  class=" form-control marginBottom"   >'
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
	   
	   +'<div class="row" id="FlightsNos1" hidden>'
	   +'<div class="col-sm-5">'
	   +'</div>'
	   +' <div class="col-sm-7">'
	   +' 	<div class="alert alert-info">'
   	   +' 	<strong class="labelstyleInfo1"><center>  </center></strong> '
  	   +'	</div>'
  	   +' </div>'
//  	   +'<div class="col-sm-3">'
//	   +'</div>'   
	   +'</div>'	 
//	   +'<div class="row">'
//	   +'<div class="col-sm-5">'
//	   +'<label class="labelstyle marginBottom"> Width of Each Flight (m) : </label>'
//	   +'</div>'
//	   +'<div class="col-sm-7">'
//	   +'<input type="number" id="Wval_1Flight" style= 10px;width:100%;" class=" form-control marginBottom" disabled>'
//	   +'</div>'
////	   +'<div class="col-sm-3">'
////	   +'</div>'	     
//	   +'</div>'	
	   
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
	   +  '<div class="row" id="ck" >'
		 
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Grade of Concrete f<sub>ck</sub> : </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-7">'
	   +'<select  class="form-control selectConf marginBottom" id="concreteGrade" " style="height:auto; " disabled>'
	   +'<option value="0">--- Select grade of concrete --- </option>'
//	   +'<option value="10" >M10  </option>'
//	   +'<option value="15" >M15  </option>'
	   +'<option value="20" >M20  </option>'
	   +'<option value="25" >M25  </option>'
	   +'<option value="30" >M30  </option>'
	   +'<option value="35" >M35  </option>'
	   +'<option value="40" >M40  </option>'
	   +'<option value="45" >M45  </option>'
	   +'<option value="50" >M50  </option>'
	   +'<option value="55" >M55  </option>'
	   +'<option value="60" >M60  </option>'
	   +'<option value="65" >M65  </option>'
	   +'<option value="70" >M70  </option>'
	   +'<option value="75" >M75  </option>'
	   +'<option value="80" >M80  </option>'		    
	  
	   +'</select>'
	  
	   +'</div>'
	 
	   +'</div>'
	   
	   + '<div class="row" id="fe" >'
	   
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Grade of Steel f<sub>y</sub> : </label>'
	   +'</div>'
	   +'<div class="col-sm-7">'
	   +'<select  class="form-control selectConf marginBottom" id="steelGrade"  style="height:auto; "  disabled>'
	   +'<option value="0">--- Select grade of steel --- </option>'
//	   +'<option value="250" >Fe250  </option>'
	   +'<option value="0.138" >Fe415  </option>'
	   +'<option value="0.133" >Fe500  </option>'
	   +'</select>'	   
	   +'</div>'
	   
	   +'</div>'
	   +'<div class="row calRowBorder" id="heightFlight" hidden>'
	   +'<div class="col-sm-5">'
	   +"<label class='labelstyle '>Height of Each Flight (m) : </label>"
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="Hval_1Flight" style= 10px;width:100%;"  class=" form-control " >'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subHval_1Flight" data-toggle="modal" data-target="#myModal" >SUBMIT</button>'
	   +'</div>'	    
	   +'</div>'
	
	   
	   +'<div class="row" id="rowNum12" hidden>'
	   +'<div class="col-sm-12">'	   
//	   +'	<div class="alert alert-info">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="NextLevel1" >NEXT LEVEL</button>'
//	  +'	</div>'  	   	 
  	   +'</div>'	   
  	   +'</div>'
	   
	   
	    
//	   + modelHtm
	   $("#page1Div2").html(selection);
		
//$("#configConnection").change(function(){	
//	$("#configConnection").prop("disabled",true);	
//		changeVal=changeVal+1;
//		BuildingType = $("#configConnection").val();
//		$("#configConnection").children(":selected").css("background-color","#f7dddd");	
//			console.log("BuildingType="+BuildingType);
////			tMin=250;
////			tMax=350;
////			rMin=150;
////			rMax=250;
////			$("#Lval").prop("disabled",false);	
////			//$("#configConnection").prop("disabled",true);	
////			digAnim();
////			StairCaseAnim();
//		if(BuildingType == 1){		  
//			tMin=0.25;
//			tMax=0.35;
//			rMin=0.15;
//			rMax=0.25;
//			$("#Lval").prop("disabled",false);	
//			//$("#configConnection").prop("disabled",true);	
//			digAnim();
//					
//					
//		}else if(BuildingType==2) {
//			tMin=0.25;
//			tMax=0.3;
//			rMin=0.12;
//			rMax=0.15;
//			$("#Lval").prop("disabled",false);	
//			//$("#configConnection").prop("disabled",true);
//			digAnim();
//				
//		}else{
//			tMin=0.25;
//			tMax=0.3;
//			rMin=0.15;
//			rMax=0.19;
//			$("#Lval").prop("disabled",false);	
//			//$("#configConnection").prop("disabled",true);	
//			digAnim();									
//			
//		}
////		StairCaseAnim();
//	});
	
//	$("#Lval").change(function(){		
//		$("body").css("padding","0px 0px 0px 0px");	
//		length = $("#Lval").val();		
//		if(length == ""){			
//			alert("Enter numeric value ");
//			//$("#modelMsg").html("<b class='boldTextRed'>Please Enter Value</b>");
//		}else {
//			length = parseFloat($("#Lval").val());
//				if(length <= 0){			
//					alert("Entered value is incorrect.Try again.");					
//				}else{
//					lengthAnim(length);
//					$("#Wval").prop("disabled",false);	
//					$("#Lval").prop("disabled",true);										
//				}
//		}
//	});
$("#Lval").change(function(){	
	
	
	$("body").css("padding","0px 0px 0px 0px");	
	length = $("#Lval").val();		
	if(length == ""){			
		alert("Enter numeric value ");
		//$("#modelMsg").html("<b class='boldTextRed'>Please Enter Value</b>");
	}else {
		length = parseFloat($("#Lval").val());
			if(length <= 0){			
				toastr.info("Entered value is incorrect.Try again.");					
			}else{
				if(length>=4.5 && length<=8){
					$("#page1Div1").empty("");
					StairCaseAnimStart();
					lengthAnim(length);
					$("#Wval").prop("disabled",false);	
					$("#Lval").prop("disabled",true);	
				}
				else
					{
					toastr.info("Take Staircase length between 4.5 - 8.0m ");
					}	
			}
	}
});

$("#Wval").change(function(){		
	$("body").css("padding","0px 0px 0px 0px");	
	width = $("#Wval").val();	
	widthEachFlight=parseFloat((width/2));
	if(width == ""){			
		alert("Enter numeric value");
		//$("#modelMsg").html("<b class='boldTextRed'>Please Enter Value</b>");
	}else {
		width = parseFloat($("#Wval").val());
			if(width <= 0){			
				toastr.info("Entered value is incorrect.Try again.");					
			}else{
				
				if(width>=0.9 && width<=2.5){
					widthAnim(width);
					
					$("#FlightsNos,#FlightsNos1").prop("hidden",false);
					$(".labelstyleInfo1").html("<center> Width of each flight "+widthEachFlight+"</center>");
//					$("#Wval_1Flight").prop("disabled",false);	
					$("#Wval").prop("disabled",true);
					$("#FtoFhight").prop("disabled",false);	
//					$("#Wval_1Flight").prop("disabled",true);
				}
				else
					{
					toastr.info("Take Staircase width between 0.9 - 2.5m ");
					
					}	
			
			}
	}
});	

//	$("#Wval").change(function(){		
//		$("body").css("padding","0px 0px 0px 0px");	
//		width = $("#Wval").val();	
//		widthEachFlight=parseFloat((width/2));
//		if(width == ""){			
//			alert("Enter numeric value");
//			//$("#modelMsg").html("<b class='boldTextRed'>Please Enter Value</b>");
//		}else {
//			width = parseFloat($("#Wval").val());
//				if(width <= 0){			
//					alert("Entered value is incorrect.Try again.");					
//				}else{
//					widthAnim(width);
//					
//					$("#FlightsNos,#FlightsNos1").prop("hidden",false);
//					$(".labelstyleInfo1").html("<center> Width of each flight "+widthEachFlight+"</center>");
////					$("#Wval_1Flight").prop("disabled",false);	
//					$("#Wval").prop("disabled",true);
//					$("#FtoFhight").prop("disabled",false);	
////					$("#Wval_1Flight").prop("disabled",true);
//				}
//		}
//	});

	
	$("#FtoFhight").change(function(){		
		$("body").css("padding","0px 0px 0px 0px");	
		FtoF_hight = $("#FtoFhight").val();		
		if(FtoF_hight == ""){			
			alert("Enter numeric value");
			//$("#modelMsg").html("<b class='boldTextRed'>Please Enter Value</b>");
		}else {
			FtoF_hight = parseFloat($("#FtoFhight").val());
				if(FtoF_hight == 0){			
					toastr.info("Entered value is incorrect.Try again.");					
				}else{
					if(FtoF_hight>=2.75 && FtoF_hight<=4.5){
						$("#concreteGrade").prop("disabled",false);	
						$("#subHval_1Flight").prop("disabled",false);	
						$("#FtoFhight").prop("disabled",true);
					}
					else
						{
						toastr.info("Take Staircase floor between 2.75 - 4.5 kN/m  ");
						}
				}
		}
	});
	
	$('#concreteGrade').change(function() {
	     concrete = $(this).val();
	    console.log(concrete);
//	    var concrete = $(this).find('option:selected').value();
//	    console.log(concrete);
	    if(concrete == ""){			
			alert("Enter numeric value");
			//$("#modelMsg").html("<b class='boldTextRed'>Please Enter Value</b>");
		}else {
			concrete = parseFloat($(this).val());
				if(concrete == 0){			
					alert("Entered value is incorrect.Try again.");					
				}else{
					
					$("#steelGrade").prop("disabled",false);	
//					$("#subHval_1Flight").prop("disabled",false);	
					$("#concreteGrade").prop("disabled",true);				
				}
		}
	});
	  var steel;
	$('#steelGrade').on('change', function () {
		 steel= parseFloat($(this).val());
		    console.log(steel);
//		    var concrete = $(this).find('option:selected').value();
//		    console.log(concrete);
		    if(steel == ""){			
				alert("Enter numeric value");
				//$("#modelMsg").html("<b class='boldTextRed'>Please Enter Value</b>");
			}else {
				steel = parseFloat($(this).val());
					if(steel == 0){			
						alert("Entered value is incorrect.Try again.");					
					}else{
						if(steel=="0.138")
							{
								fe="415";
							}
						else
							{
							   fe="500";
							}
						$("#heightFlight").prop("hidden",false);	
//						$("#subHval_1Flight").prop("disabled",false);	
						$("#steelGrade").prop("disabled",true);				
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
					$("#rowNum12").prop("hidden",false);	
					$("#Hval_1Flight").prop("disabled",true);	
					$("#subHval_1Flight").prop("disabled",true);
						id=0;		
//					toastr.success("Correct Answer");
				} else if (HightEachFlight != H_perFlAnsCorr) {
					$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");				
				}
			} else if (id == 3){
				$("#modelMsg").html("<b class='boldTextBlue'>Formula :  Floor_to_Floor Height / 2  </b>");
			} else {
				HightEachFlight =parseFloat($("#Hval_1Flight").val());
//				flow = flowAns.toFixed(2);
				if (HightEachFlight == H_perFlAnsCorr) {					
					//addToMasterJSON();
					$("#rowNum12").prop("hidden",false);	
					$("#Hval_1Flight").prop("disabled",true);	
					$("#subHval_1Flight").prop("disabled",true);		
					id=0;
//					toastr.success("Correct Answer");
				} else {
					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +H_perFlAnsCorr+'</b>');
				}
			}
			id++;
		}

	 
	});
 
    $("#NextLevel1").click(function(){
	
    		
    	$("#page1").prop("hidden",true);
    	$("#referValue").prop("disabled",false);
    	$("#page2").prop("hidden",false);
		StairCaseAnim2();
		StairCaseConfig2(length,HightEachFlight,rMin,rMax,tMin,tMax,steel,fe,concrete);	
		
		tempMasterJson = {
				"length(m)":length,
				"HeightEachFlight(m)":parseFloat(HightEachFlight),
				"widthEachFlight(m)":widthEachFlight,
				"concrete":"M"+concrete,
				"steel(Fe)":fe+"("+steel+")",
				};
		jsonArray.push(tempMasterJson);
		
		MasterJson=jsonArray;
		console.log(MasterJson);
	});

}
	
	
	