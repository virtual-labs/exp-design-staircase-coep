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

function Page2(length,HightEachFlight,rMin,rMax,tMin,tMax){
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
			
//		var modelHtm1 =  ' <!-- Modal -->'
//				+ '<div class="modal fade" id="myModal" role="dialog">'
//				+ ' <div class="modal-dialog modal-md">'
//				+ '    <div class="modal-content">'
//				+ '     <div class="modal-header">'				
//				+ '       <h4 class="modal-title" >Message box</h4>'
//				+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
//				+ '     </div>'
//				+ '     <div class="modal-body">'
//				+ '       <p id="modelMsg"></p>'
//				+ '     </div>'
//				+ '     <div class="modal-footer">'
//				+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
//				+ '     </div>'
//				+ '   </div>'
//				+ ' </div>'
//				+ '</div>';

var selection2 ='<div class="row" id="rowNum1">'
	   +'<div class="col-sm-6">'
	   +' <div class="alert alert-info">'
   	   +' <strong class="labelstyleInfo "><center>Length = '+L+' m</center></strong> '
  	   +'</div>'
  	   +'</div>'
	   +'<div class="col-sm-6">'
	   +' <div class="alert alert-info">'
	   +' <strong class="labelstyleInfo "><center>Hight of Each Flight = '+hFlightAns+' m</center></strong> '	   
	   +'</div>'
	   +'</div>'
	   +'</div>'
	   
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
	   +'<label class="labelstyle ">Total Going (m) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="going" style= 10px;width:100%;"  class=" form-control " disabled>'
	   +'</div>'	
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subGoing" data-toggle="modal" data-target="#myModal" >SUBMIT</button>'
	   +'</div>'    
	   +'</div>'
	   
	   +'<div class="row calRowBorder" id="rowNum7" hidden>'
	   +'<div class="col-sm-5">'
	   +"<label class='labelstyle '>Width of Each Landing : </label>"
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="Landing1W" style= 10px;width:100%;"  class=" form-control " disabled>'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subLanding1W" data-toggle="modal" data-target="#myModal" >SUBMIT</button>'
	   +'</div>'	    
	   +'</div>'
	   
	   +'<div class="row" id="rowNum17" hidden>'
	   +'<div class="col-sm-12">'
	   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="nxtLvl2"  data-toggle="modal" data-target="#myModal" disabled ><b>SUBMIT</b></button>'
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
				$("#modelMsg").html("<b class='boldTextBlue'>NOTE : As Per The Selected Building Type The Standard Range of Riser is "+rMinVal+" mm to "+rMaxVal+" mm  </b>");
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
					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  Value between "+rMinVal+" mm to "+rMaxVal+" mm</b>");
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
   		numRiserCorr=numRiserAns.toFixed(2);
   		 
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
				$("#modelMsg").html("<b class='boldTextBlue'>NOTE : As Per The Selected Building Type The Standard Range of Tread is "+tMinVal+" mm to "+tMaxVal+" mm  </b>");
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
					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  Value between "+tMinVal+" mm to "+tMaxVal+" mm</b>");
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
					$("#rowNum7").prop("hidden",false);	
					$("#Landing1W").prop("disabled",false);	
					$("#subLanding1W").prop("disabled",false);
					$("#going").prop("disabled",true);	
					$("#subGoing").prop("disabled",true);
					id2=0;		
					toastr.success("Correct Answer");
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
					$("#rowNum7").prop("hidden",false);	
					$("#Landing1W").prop("disabled",false);	
					$("#subLanding1W").prop("disabled",false);
					$("#going").prop("disabled",true);	
					$("#subGoing").prop("disabled",true);		
					id2=0;
					toastr.success("Correct Answer");
				} else {
					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +goingCorr+'</b>');
				}
			}
			id2++;
		}
	});

var Landing1Width;
$("#subLanding1W").click(function(){	
		 var widthELanding = L-goingCorr;
		 var widthELanding2 =widthELanding/2;
   		 var wLandingAns=widthELanding2.toFixed(2);
   		wLandingCorr=parseFloat(wLandingAns);
	 	 $("body").css("padding","0px 0px 0px 0px");
		 Landing1Width =$("#Landing1W").val();	
		if(Landing1Width==""){			
			$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
		}else{
			if (id2 <= 2) {
				if (Landing1Width == wLandingCorr) {				
					//addToMasterJSON();
					$("#rowNum8").prop("hidden",false);	
					$("#rowNum9").prop("hidden",false);		
					$("#Landing1W").prop("disabled",true);	
					$("#subLanding1W").prop("disabled",true);
					id2=0;		
					toastr.success("Correct Answer");
				} else if (Landing1Width != wLandingCorr) {
					$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");				
				}
			} else if (id2 == 3){
				$("#ModelTitle1").html("Formula");
				LperWFormulaImg= '<img src="images/formulaLandingW.png"   class="img-responsive" alt="Cinque Terre" width="100%" height="80%" >'
				$("#modelMsg").html(LperWFormulaImg);
				//$("#modelMsg").html("<b class='boldTextBlue'>Formula : (Total Length of Staircase - Total Going) / 2 </b>");
			} else {
				$("#ModelTitle1").html("Message box");
				Landing1Width =parseFloat($("#Landing1W").val());
//				flow = flowAns.toFixed(2);
				if (Landing1Width == wLandingCorr) {					
					//addToMasterJSON();			
//					$("#nxtLvl2").prop("disabled",false);	
					$("#Landing1W").prop("disabled",true);	
					$("#subLanding1W").prop("disabled",true);		
					id2=0;
					toastr.success("Correct Answer");
				} else {
					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +wLandingCorr+'</b>');
				}
			}
			id2++;
		}
	});
	
	

 $("#nxtLvl2").click(function (){
	
	$("body").css("padding","0px 0px 0px 0px");	
	$("#modelMsg").html("<b class='boldTextGreen'>Configured Successfully</b>");
//	clearInterval(cron);
	
});	
}