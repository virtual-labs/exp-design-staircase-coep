var BuildingType1;
var L;
var hFlightAns;
var rMinVal;
var rMaxVal;
var tMinVal
var tMaxVal;
var rHVal;
var riserNum;
var TreadNum;
var numRiserAns,numRiserCorr, numTreadsCorr,TreadWidth ;
var goingCorr;
var wLandingCorr;

function StairCaseConfig2(length,HightEachFlight,rMin,rMax,tMin,tMax,steel,fe,concrete){
	
	
	
	
	$("#page1Div1").empty();
	$("#page1Div2").empty();
	console.log(" concrete 2"+concrete);
	L= parseFloat(length);
	console.log("L =  "+L);
   
	hFlightAns =parseFloat(HightEachFlight);
   	console.log("concreteValue2 =  "+hFlightAns);
   	
    rMinVal= parseFloat(rMin);
	
	rMaxVal= parseFloat(rMax);
	
	tMinVal= parseFloat(tMin);
	
	tMaxVal= parseFloat(tMax);
	   	
	$("#page1Div2").html('');	
	$("#page3Div2").html('');	 

	$("#centerText1").html('MIMIC');
    $("#centerText2").html('CONFIGURATION'); 
	

var selection2 =''

	   
	   +'<div class="row calRowBorder" id="rowNum2" >'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle">Height of Riser (m) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="riserH" style= "width:100%;"  class=" form-control " min='+rMinVal+' max='+rMaxVal+'  >'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subRiserH" data-toggle="modal" data-target="#myModal" >SUBMIT</button>'
	   +'</div>'
	   +'</div>'

	   +'<div class="row calRowBorder" id="rowNum3" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Number of Risers : </label>'
	   +'</div>'	    
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="Rnum" style= "width:100%;"  class=" form-control " disabled>'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subRnum" data-toggle="modal" data-target="#myModal" >SUBMIT</button>'
	   +'</div>'	     
	   +'</div>'
	   
	   +'<div class="row calRowBorder" id="rowNum4" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Number of Treads : </label>'
	   +'</div>'	    
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="Tnum" style= "width:100%;"  class=" form-control " disabled>'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subTnum" data-toggle="modal" data-target="#myModal" >SUBMIT</button>'
	   +'</div>'	     
	   +'</div>'
	      
	   +'<div class="row calRowBorder" id="rowNum5" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle "> Width of Tread (m) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="WofT" style= 10px;width:100%;" class=" form-control " disabled>'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subWofT" data-toggle="modal" data-target="#myModal" >SUBMIT</button>'
	   +'</div>'	     
	   +'</div>'	
	   
	   +'<div class="row calRowBorder" id="rowNum6" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">  L<sub>eff</sub> (m) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="going" style= 10px;width:100%;"  class=" form-control " disabled>'
	   +'</div>'	
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subGoing" data-toggle="modal" data-target="#myModal" >SUBMIT</button>'
	   +'</div>'    
	   +'</div>'
	   
//	   +'<div class="row calRowBorder" id="rowNum7" hidden>'
//	   +'<div class="col-sm-5">'
//	   +"<label class='labelstyle '>Width of Each Landing : </label>"
//	   +'</div>'
//	   +'<div class="col-sm-4">'
//	   +'<input type="number" id="Landing1W" style= 10px;width:100%;"  class=" form-control " disabled>'
//	   +'</div>'
//	   +'<div class="col-sm-3" id="buttonDiv">'
//	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subLanding1W" data-toggle="modal" data-target="#myModal" >SUBMIT</button>'
//	   +'</div>'	    
//	   +'</div>'
	   
//	   +'<div class="row" id="rowNum17" hidden>'
//	   +'<div class="col-sm-12">'	   
//	   +'	<div class="alert alert-info">'
//   	   +' 		<strong class="labelstyleInfo"><center>Click on > arrow</center></strong> '
//  	   +'	</div>'  	   	 
//  	   +'</div>'
//	   +'</div>'	
	   
	   +'<div class="row" id="rowNum17" hidden>'
	   +'<div class="col-sm-12">'	   
//	   +'	<div class="alert alert-info">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="NextLevel2" >NEXT LEVEL</button>'
//	  +'	</div>'  	   	 
  	   +'</div>'	   
  	   +'</div>'
	   
////	   + modelHtm1
	   $("#page2Div2").html(selection2);
	   
	   
	  var id2=0;
	   $("#subRiserH").click(function(){		
	 	 $("body").css("padding","0px 0px 0px 0px");
		 rHVal = $("#riserH").val();	
		if(rHVal==""){			
			$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
		}else{
			if (id2 <= 2) {
				if (rHVal>=rMinVal && rHVal<=rMaxVal) {					
					//addToMasterJSON();
					
					$("#rowNum3").prop("hidden",false);
					$("#Rnum").prop("disabled",false);	
					$("#subRnum").prop("disabled",false);	
					$("#riserH").prop("disabled",true);
					$("#subRiserH").prop("disabled",true);
					riserHtAnim(rHVal);
					id2=0;		
					toastr.success("Correct Answer");
					
				} else if (rHVal<rMinVal || rHVal>rMaxVal) {
					$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");				
				}
			} else if (id2 == 3){
				$("#modelMsg").html("<b class='boldTextBlue'>NOTE : As Per The Selected Building Type The Standard Range of Riser is "+rMinVal+" m to "+rMaxVal+" m  </b>");
			} else {
				rHVal =parseFloat($("#riserH").val());
//				flow = flowAns.toFixed(2);
				if (rHVal>=rMinVal && rHVal<=rMaxVal) {					
					//addToMasterJSON();
					
					$("#rowNum3").prop("hidden",false);
					$("#Rnum").prop("disabled",false);	
					$("#subRnum").prop("disabled",false);	
					$("#riserH").prop("disabled",true);
					$("#subRiserH").prop("disabled",true);
					riserHtAnim(rHVal);
					id2=0;		
					toastr.success("Correct Answer");
					
				} else {
					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  Value between "+rMinVal+" m to "+rMaxVal+" m</b>");
				}
			}
			id2++;
		}	 
	});
	
		var mmTOm = Math.pow(10,-3);
	  	var Rconvert= rHVal*mmTOm;
	  	console.log("bVal = "+Rconvert);
	  	var RconvertAns=Rconvert.toFixed(2);
	  	console.log("bVal = "+RconvertAns);
		
		
		$("#subRnum").click(function(){	
		numRiserAns = hFlightAns/rHVal;
   		numRiserCorr=Math.ceil(numRiserAns);
   		 
   	
   		
   		
	 	 $("body").css("padding","0px 0px 0px 0px");
		 riserNum =$("#Rnum").val();	
		if(riserNum==""){			
			$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
		}else{
			if (id2 <= 2) {
				if (riserNum == numRiserCorr) {				
					//addToMasterJSON();
					$("#rowNum4").prop("hidden",false);	
					$("#Tnum").prop("disabled",false);	
					$("#subTnum").prop("disabled",false);
					$("#Rnum").prop("disabled",true);	
					$("#subRnum").prop("disabled",true);
					id2=0;		
					toastr.success("Correct Answer");
				} else if (riserNum != numRiserCorr) {
					$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");				
				}
			} else if (id2 == 3){
				$("#ModelTitle1").html("Formula");
				numRiserFormulaImg= '<img src="images/formulaNoR.png"   class="img-responsive" alt="Cinque Terre" width="100%" height="50%" >'
				$("#modelMsg").html(numRiserFormulaImg);
			} else {
				$("#ModelTitle1").html("Message box");
				riserNum =parseFloat($("#Rnum").val());
//				flow = flowAns.toFixed(2);
				if (riserNum == numRiserCorr) {					
					//addToMasterJSON();
					$("#rowNum4").prop("hidden",false);	
					$("#Tnum").prop("disabled",false);	
					$("#subTnum").prop("disabled",false);
					$("#Rnum").prop("disabled",true);	
					$("#subRnum").prop("disabled",true);		
					id2=0;
					toastr.success("Correct Answer");
				} else {
					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +numRiserCorr+'</b>');
				}
			}
			id2++;
		}
	}); 
	
	
	$("#subTnum").click(function(){	
		 var numTreadsAns = numRiserCorr-1;
   		 var numTreadsCorr1=numTreadsAns.toFixed(2);
   		numTreadsCorr=parseFloat(numTreadsCorr1);
	 	 $("body").css("padding","0px 0px 0px 0px");
		 TreadNum =$("#Tnum").val();	
		if(TreadNum==""){			
			$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
		}else{
			if (id2 <= 2) {
				if (TreadNum == numTreadsCorr) {				
					//addToMasterJSON();
					$("#rowNum5").prop("hidden",false);	
					$("#WofT").prop("disabled",false);	
					$("#subWofT").prop("disabled",false);
					$("#Tnum").prop("disabled",true);	
					$("#subTnum").prop("disabled",true);
					id2=0;		
					toastr.success("Correct Answer");
				} else if (TreadNum != numTreadsCorr) {
					$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");				
				}
			} else if (id2 == 3){
				$("#modelMsg").html("<b class='boldTextBlue'>Formula : Number of Riser - 1  </b>");
			} else {
				TreadNum =parseFloat($("#Tnum").val());
//				flow = flowAns.toFixed(2);
				if (TreadNum == numTreadsCorr) {					
					//addToMasterJSON();
					$("#rowNum5").prop("hidden",false);	
					$("#WofT").prop("disabled",false);	
					$("#subWofT").prop("disabled",false);
					$("#Tnum").prop("disabled",true);	
					$("#subTnum").prop("disabled",true);		
					id2=0;
					toastr.success("Correct Answer");
				} else {
					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +numTreadsCorr+'</b>');
				}
			}
			id2++;
		}
	});   
		
 $("#subWofT").click(function(){		
	 	 $("body").css("padding","0px 0px 0px 0px");
		 TreadWidth = $("#WofT").val();	
		if(TreadWidth==""){			
			$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
		}else{
			if (id2 <= 2) {
				if (TreadWidth>=tMinVal && TreadWidth<=tMaxVal) {					
					//addToMasterJSON();
					
					$("#rowNum6").prop("hidden",false);	
					$("#going").prop("disabled",false);	
					$("#subGoing").prop("disabled",false);
					$("#WofT").prop("disabled",true);	
					$("#subWofT").prop("disabled",true);
					treadWAnim(TreadWidth);
					id2=0;		
					toastr.success("Correct Answer");
					
				} else if (TreadWidth<tMinVal || TreadWidth>tMaxVal) {
					$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");				
				}
			} else if (id2 == 3){
				$("#modelMsg").html("<b class='boldTextBlue'>NOTE : As Per The Selected Building Type The Standard Range of Tread is "+tMinVal+"m to "+tMaxVal+"m  </b>");
			} else {
				TreadWidth =parseFloat($("#WofT").val());
//				flow = flowAns.toFixed(2);
				if (TreadWidth>=tMinVal && TreadWidth<=tMaxVal) {					
					//addToMasterJSON();
					
					$("#rowNum6").prop("hidden",false);	
					$("#going").prop("disabled",false);	
					$("#subGoing").prop("disabled",false);
					$("#WofT").prop("disabled",true);	
					$("#subWofT").prop("disabled",true);	
					treadWAnim(TreadWidth);
					id2=0;
					toastr.success("Correct Answer");
				} else {
					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  Value between "+tMinVal+"m to "+tMaxVal+"m</b>");
				}
			}
			id2++;
		}	 
	});

var gVal;
$("#subGoing").click(function(){	
		 var goingAns = numTreadsCorr * TreadWidth;
   		 var goingAns2=goingAns.toFixed(2);
   		goingCorr=parseFloat(goingAns2);
	 	 $("body").css("padding","0px 0px 0px 0px");
		 gVal =$("#going").val();	
		if(gVal==""){			
			$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
		}else{
			if (id2 <= 2) {
				if (gVal == goingCorr) {				
					//addToMasterJSON();
					$("#rowNum17").prop("hidden",false);	
					
					$("#going").prop("disabled",true);	
					$("#subGoing").prop("disabled",true);
					id2=0;		
//					toastr.success("Correct Answer");
				} else if (gVal != goingCorr) {
					$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");				
				}
			} else if (id2 == 3){
				$("#modelMsg").html("<b class='boldTextBlue'>Formula : Number of Treads &times; Width of Tread  </b>");
			} else {
				gVal =parseFloat($("#going").val());
//				flow = flowAns.toFixed(2);
				if (gVal == goingCorr) {					
					//addToMasterJSON();
					$("#rowNum17").prop("hidden",false);	
				
					$("#going").prop("disabled",true);	
					$("#subGoing").prop("disabled",true);		
					id2=0;
//					toastr.success("Correct Answer");
				} else {
					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +goingCorr+'</b>');
				}
			}
			id2++;
		}
	});

var Landing1Width;

	
	

 $("#NextLevel2").click(function (){
	 
	 $("#page2").prop("hidden",true);
 	$("#referValue").prop("disabled",false);
 	$("#page3").prop("hidden",false);
		StairCaseAnim3();
		Page3(length,HightEachFlight,rMin,rMax,tMin,tMax,goingCorr,steel,fe,concrete);
		tempMasterJson = {
				"Height_of_riser(R)(m)":rHVal,
				"No_of_treads":numTreadsCorr,
				"Treads_width(T)(m)":TreadWidth,
				
				"Leff(m)":goingCorr,
				};
		jsonArray.push(tempMasterJson);
		
		MasterJson=jsonArray;
		console.log(MasterJson);
	});
	

}