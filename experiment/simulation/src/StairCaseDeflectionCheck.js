 var Dreq1;
var compared;
var pt;
function StairCaseDeflectionCheck(ast,astmin,dreq,beamVal,d){
	 Dreq1=dreq;
	 compared=d;
	$("#page7Div1").html("<center><img src='images/finalimg.png' class='img-fluid'></center>");
	var htm=''
		 +'<div class="row" id="" >'
		   +'<div class="col-sm-12 steel" style="background-color:#0a4a54;">'	   
//		   +'	<div class="alert alert-success">'
	 	   +' 		<span class="" id=""><center>Deflection Check</center></span> '
//		   +'	</div>'  	   	 
		   +'</div>'
		   +'</div>'
		   +'<div class="row calRowBorder" id="perRDiv"  >'
		   +'<div class="col-sm-5">'
		   +'<label class="labelstyle ">P.T(%) : </label>'
		   +'</div>'	    
		   +'<div class="col-sm-4">'
		   +'<input type="number" id="perVal" style= "width:100%;"  class=" form-control " >'
		   +'</div>'
		   +'<div class="col-sm-3" id="">'
		   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="perValSubmit" data-toggle="modal" data-target="#myModalPer" >SUBMIT</button>'
		   +'</div>'	     
		   +'</div>'
		   +'<div class="row" id="reqFormulaDiv" hidden>'
		   +'<div class="col-sm-12 " >'	   
		   +'	<div class="alert alert-info">'
	 	   +' 		<span class="" id="reqFormulaMsg"></span> '
		   +'	</div>'  	   	 
		   +'</div>'
		   +'</div>'
		   +'<div class="row"  id="reqActualValue" hidden>'
		   +'<div class="col-sm-12 " >'	   
		   +'	<div class="alert alert-success">'
	 	   +' 		<span class="" id="reqActualMsg"></span> '
		   +'	</div>'  	   	 
		   +'</div>'
		   +'</div>'
		   +'<div class="row"  id="SafeStatus" hidden>'
		   
		   +'</div>'
		   +'<div class="row" id="resultDiv" hidden>'
		   +'<div class="col-sm-12">'	   
//		   +'	<div class="alert alert-info">'
		   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="resultCall" >RESULT</button>'
//		  +'	</div>'  	   	 
	  	   +'</div>'	   
	  	   +'</div>'
		   +  ' <!-- Modal -->'
			+ '<div class="modal fade" id="myModalPer" role="dialog">'
			+ ' <div class="modal-dialog modal-md">'
			+ '    <div class="modal-content">'
			+ '     <div class="modal-header">'				
			+ '       <h4 class="modal-title" >Message box</h4>'
			+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
			+ '     </div>'
			+ '     <div class="modal-body1">'
			+ '       <p id="myModalPerMsg" style=" margin: 12px;"></p>'
			+ '     </div>'
			+ '     <div class="modal-footer">'
			+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
			+ '     </div>'
			+ '   </div>'
			+ ' </div>'
			+ '</div>'
		   $("#page7Div2").html(htm);
var id6=0;
	
	$("#perValSubmit").click(function(){		
		 $("body").css("padding","0px 0px 0px 0px");
		
		 perVal=$("#perVal").val();
		 console.log("perVal "+perVal);
		 var temp2=parseFloat(beamVal)*parseFloat(dreq*1000);
		 var ptTemp=parseFloat((ast/temp2)*100);
		 pt=ptTemp.toFixed(2);
		
	 
		 
		if(perVal==""){			
			$("#myModalPerMsg").html("<b class='boldTextRed'>Enter numeric value ");
		}else{
			if (id6 <= 2) {
				if (perVal==pt) {					
					
					id6=0;		
//					findMainSteel(spacingCal1,spacingCal2,300);
					 $("#perVal").prop("disabled",true);
					 $("#reqFormulaDiv,#reqActualValue,#SafeStatus,#resultDiv").prop("hidden",false);
					toastr.success("Correct Answer");
					$("#myModalPerMsg").html("<b class='boldTextBlue'>Experiment completed succesfully.");
					JsonAdd();
					
					if(Dreq1<=compared)
					{
						
						$("#reqFormulaMsg").html("<center>Here "+Dreq1+" < "+compared+"</center>");
						$("#reqActualMsg").html("<center>Here d<sub>required </sub> < 'd'</sub></center>");
						var htm='	<div class="alert alert-success">'
					 	   +' 		<span class="" id="" style="font-size: 15px; font-weight: bold;"><center>Safe in deflection</center></span> '
						   +'	</div>'
						   $("#SafeStatus").html(htm);
						
					}
					
					else if(Dreq1>compared)
						{
						
						$("#reqFormulaMsg").html("<center>Here "+Dreq1+" < "+compared+"</center>");
						$("#reqActualMsg").html("<center>Here d<sub>required </sub> < 'd'</sub></center>");
						var htm='	<div class="alert alert-danger">'
					 	   +' 		<span class="" style="font-size: 15px; font-weight: bold;"><center>Unsafe in deflection</center></span> '
						   +'	</div>'
						   $("#SafeStatus").html(htm);
						}
					
					
				} else if (perVal!=pt) {
					$("#myModalPerMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");				
				}
			} else if (id6 == 3){
				$("#myModalPerMsg").html('<img src="images/pt.png" class="img-fluid">');
			} else {
				perVal =parseFloat($("#perVal").val());

				if (perVal==pt)  {					
					
					id6=0;		
//					findMainSteel(spacingCal1,spacingCal2,300);
					 $("#perVal").prop("disabled",true);
					 $("#reqFormulaDiv,#reqActualValue,#SafeStatus,#resultDiv").prop("hidden",false);
					toastr.success("Correct Answer");
					$("#myModalPerMsg").html("<b class='boldTextBlue'>Experiment completed succesfully.");
//					CompareD(Dreq,d);
					JsonAdd();
					if(Dreq1<=compared)
					{
						
						$("#reqFormulaMsg").html("<center>Here "+Dreq1+" < "+compared+"</center>");
						$("#reqActualMsg").html("<center>Here d<sub>required </sub> < 'd'</sub></center>");
						var htm='	<div class="alert alert-success">'
					 	   +' 		<span class="" id=""><center>Safe in deflection</center></span> '
						   +'	</div>'
						   $("#SafeStatus").html(htm);
						
					}
					else if(Dreq1>compared)
						{
						
						$("#reqFormulaMsg").html("<center>Here "+Dreq1+" < "+compared+"</center>");
						$("#reqActualMsg").html("<center>Here d<sub>required </sub> < 'd'</sub></center>");
						var htm='	<div class="alert alert-danger">'
					 	   +' 		<span class="" id=""><center>Unsafe in deflection</center></span> '
						   +'	</div>'
						   $("#SafeStatus").html(htm);
						}
					
				} else {
					$("#myModalPerMsg").html("<b class='boldTextBlue'>Correct Answer "+pt);
				}
			}
			id6++;
		}	 
	});
	
	function JsonAdd(){
		tempMasterJson = {
				"D_required":Dreq1,
				"P.T":pt,
				
				
				};
		jsonArray.push(tempMasterJson);
		
		MasterJson=jsonArray;
		console.log(MasterJson);
		
	}
	$("#resultCall").click(function(){
		
	});
	
	
	
	
}