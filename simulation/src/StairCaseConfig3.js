var Wf;
function Page3(length,HightEachFlight,rMin,rMax,tMin,tMax,goingCorr,steel,fe,concrete){
	console.log(" concrete 3 "+concrete);
	L= parseFloat(length);
	console.log("L =  "+L);
   
	hFlightAns =parseFloat(HightEachFlight);
   	console.log("concreteValue2 =  "+hFlightAns);
   	
    rMinVal= parseFloat(rMin);
	
	rMaxVal= parseFloat(rMax);
	
	tMinVal= parseFloat(tMin);
	
	tMaxVal= parseFloat(tMax);
	   	

	$("#page1Div2").html('');	
	$("#page2Div2").html('');	 
	$("#centerText1").html('MIMIC');
    $("#centerText2").html('CONFIGURATION'); 


var selection3 ='<div class="row" id="rowNum8">'
	   +'<div class="col-sm-12">'	   
	   +'	<div class="alert alert-info">'
   	   +' 		<strong class="labelstyleInfo"><center>Calculation of Effective Depth of waist slab  </center></strong> '
  	   +'	</div>'  	   	 
  	   +'</div>'	   
  	   +'</div>'
  	 +'<div class="row" id="MFDiv">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">MF : </label>'
	   +'</div>'	    
	   +'<div class="col-sm-3">'
	   +'<input type="number" id="MFval" style= "width:100%;"  class=" form-control marginBottom" >'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-primary btnDesign" style = "width:100%;" id="mfSubmit" data-toggle="modal" data-target="#myModalMF" >MF VALUE</button>'
	   +'</div>'
	  	     
	   +'</div>'
	   
	   +'<div class="row calRowBorder " id="rowNum11" hidden>'
	   +'<div class="col-sm-5">'
	   +"<label class='labelstyle '>Effective depth provided for waist slab - d (m) : </label>"
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="dval" style= 10px;width:100%;"  class=" form-control " >'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="dsubmit" data-toggle="modal" data-target="#myModald" >SUBMIT</button>'
	   +'</div>'	    
	   +'</div>'
	   

	   +'<div class="row" id="rowNum13" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Adopting &empty; (mm) : </label>'
	   +'</div>'	    
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="Wval" style= "width:100%;"  class=" form-control marginBottom" >'
	   +'</div>'
	  	   
	   +'</div>'
	   
	   +'<div class="row" id="rowNum14" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Clear cover(mm): </label>'
	   +'</div>'	    
	   +'<div class="col-sm-4">'
	   +'<select  class="form-control selectConf" id="clearCoverSelect" style="height:auto;" >'
	   +'<option value="0">--- Select Types --- </option>'
	   +' <option  value="0.015" name="">15</option>'
	   +'  <option  value="0.020" name="">20</option>'
//	   +'  <option id="buildingF " value="3" name="publicBuilding">Factory Building</option>'
	   +' </select>	 '
	   +'</div>'
	  	     
	   +'</div>'
	   
	   +'<div class="row  calRowBorder" id="rowNum15" hidden>'
	   +'<div class="col-sm-5">'
	   +"<label class='labelstyle'>Overall Depth(D) </label>"
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="overallDepthText" style= 10px;width:100%;"  class="form-control"  >'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="overallDepthSubmit" data-toggle="modal" data-target="#myModaloverAll" >SUBMIT</button>'
	   +'</div>'	    
	   +'</div>'
	   +'<div class="row" id="rowNum16" hidden>'
	   +'<div class="col-sm-12">'	   
//	   +'	<div class="alert alert-info">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="NextLevel3" >NEXT LEVEL</button>'
//	  +'	</div>'  	   	 
  	   +'</div>'	   
  	   +'</div>'
	   +  ' <!-- Modal -->'
		+ '<div class="modal fade" id="myModalMF" role="dialog">'
		+ ' <div class="modal-dialog modal-md">'
		+ '    <div class="modal-content">'
		+ '     <div class="modal-header">'				
		+ '       <h4 class="modal-title" >Message box</h4>'
		+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
		+ '     </div>'
		+ '     <div class="modal-body1">'
		+ '       <p id="modelMsgMF"></p>'
		+ '     </div>'
		+ '     <div class="modal-footer">'
		+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
		+ '     </div>'
		+ '   </div>'
		+ ' </div>'
		+ '</div>'
	   
	   
  	   +  ' <!-- Modal -->'
		+ '<div class="modal fade" id="myModald" role="dialog">'
		+ ' <div class="modal-dialog modal-md">'
		+ '    <div class="modal-content">'
		+ '     <div class="modal-header">'				
		+ '       <h4 class="modal-title" >Message box</h4>'
		+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
		+ '     </div>'
		+ '     <div class="modal-body">'
		+ '       <p id="modelMsgd"></p>'
		+ '     </div>'
		+ '     <div class="modal-footer">'
		+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
		+ '     </div>'
		+ '   </div>'
		+ ' </div>'
		+ '</div>'
		  +  ' <!-- Modal -->'
			+ '<div class="modal fade" id="myModaloverAll" role="dialog">'
			+ ' <div class="modal-dialog modal-md">'
			+ '    <div class="modal-content">'
			+ '     <div class="modal-header">'				
			+ '       <h4 class="modal-title" >Message box</h4>'
			+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
			+ '     </div>'
			+ '     <div class="modal-body">'
			+ '       <p id="modelMsgoverAll"></p>'
			+ '     </div>'
			+ '     <div class="modal-footer">'
			+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
			+ '     </div>'
			+ '   </div>'
			+ ' </div>'
			+ '</div>'
  	 
		
		
	   $("#page3Div2").html(selection3);
	  

$("#mfSubmit").click(function(){
	var htm=''
//		+'<center style="color:blue;">take MF value between 0.7 - 2.0 m</center>'
		+'<img src="images/mfgraph.png" class="img-fluid">'
		$("#modelMsgMF").html(htm);
});
$("#MFval").change(function(){
	mf=$("#MFval").val();
	if(0.7<=mf && mf<=2.0){
		$("#rowNum11").prop("hidden",false);
	}
	else
		{
		toastr.info("Take MF value between 0.7 - 2.0  ");
		
		}
});
$("#Wval").change(function(){
	Wf=$("#Wval").val();
	if( Wf==12||Wf==16||Wf==20||Wf==25||Wf==32){
		$("#rowNum14").prop("hidden",false);
	}
	else
		{
		toastr.info("Take minimum value of adopting is 12,16,20,25,32 mm ");
		
		}
});

var id1=0;
var d;
$("#dsubmit").click(function(){		
	 $("body").css("padding","0px 0px 0px 0px");
	 var leff=goingCorr;
	 console.log("leff "+leff);
	 
	 mf=$("#MFval").val();
	 console.log("mf "+mf);
	 var dTemp=parseFloat(parseFloat(leff)/parseFloat(20*mf));
	 var dVal = $("#dval").val();
	 
	 console.log("dTemp "+dTemp);
//	var value = parseFloat($("#inputValue").val()); // Convert to float
     d = dTemp.toFixed(2);
	  
	 console.log("dVal "+dVal);
	 console.log("d "+d);
	 
	if(dVal==""){			
		$("#modelMsgd").html("<b class='boldTextRed'>Enter numeric value ");
	}else{
		if (id1 <= 2) {
			if (dVal==d) {					
				//addToMasterJSON();
				$("#rowNum13").prop("hidden",false);
				$("#modelMsgd").html("<b class='boldTextBlue'>Calculate Overall Deapth (D)</b> ");		
				$("#mfSubmit").prop("disabled",true);
				$("#dVal,#dsubmit").prop("disabled",true);
			
//				riserHtAnim(rHVal);
				id1=0;		
				toastr.success("Correct Answer");
				
			} else if (dVal!=d) {
				$("#modelMsgd").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");				
			}
		} else if (id1 == 3){
			$("#modelMsgd").html('<img src="images/d.png" class="img-fluid">');
		} else {
			dVal =parseFloat($("#dval").val());
//			flow = flowAns.toFixed(2);
			if (dVal==d)  {					
				//addToMasterJSON();
				
				$("#rowNum13").prop("hidden",false);
				$("#modelMsgd").html("<b class='boldTextBlue'>Calculate Overall Deapth(D)</b> ");		
				$("#mfSubmit").prop("disabled",true);
				$("#dVal,#dsubmit").prop("disabled",true);
				
//				riserHtAnim(rHVal);
				id1=0;		
				toastr.success("Correct Answer");
				
			} else {
				$("#modelMsgd").html("<b class='boldTextBlue'>Correct Answer "+d);
			}
		}
		id1++;
	}	 
});
	var selectedText;    
$('#clearCoverSelect').on('change', function () {
    // Get selected option text
     selectedText = $(this).val();
     
    $("#rowNum15").prop("hidden",false);	
    console.log(selectedText);

});	
id2=0;
var overallDepthText;
$("#overallDepthSubmit").click(function(){	
//	$("#modelMsgoverAll").html("");
	 $("body").css("padding","0px 0px 0px 0px");
	 overallDepthText= $("#overallDepthText").val();
	 convertMFMM=parseFloat(Wf/1000);
	 var temp=parseFloat(parseFloat(d)+parseFloat(convertMFMM/2)+parseFloat(selectedText));
	 overallDepth=temp.toFixed(2);
	 console.log("overallDepthText "+overallDepthText);
	 console.log("convertMFMM "+convertMFMM);
	 console.log("d "+d);
	 console.log("selectedText "+selectedText);
	 
	 console.log("overallDepth "+overallDepth);
	if(overallDepthText==""){			
		$("#modelMsgoverAll").html("<b class='boldTextRed'>Enter numeric value ");
	}else{
		if (id2 <= 2) {
			if (overallDepthText==overallDepth) {					
				$("#modelMsgoverAll").html("<b class='boldTextBlue'>Calculate load .</b>");
				$("#rowNum16").prop("hidden",false);
				 $("#overallDepthText,#overallDepthSubmit").prop("disabled",true);
				id2=0;		
				toastr.success("Correct Answer");
				
			} else if (overallDepthText!=overallDepth) {
				$("#modelMsgoverAll").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");				
			}
		} else if (id2 == 3){
			$("#modelMsgoverAll").html('<img src="images/overAll.png" class="img-fluid">');
		} else {
			overallDepthText =parseFloat($("#overallDepthText").val());
//			flow = flowAns.toFixed(2);
			if (overallDepthText==overallDepth)  {					
				$("#modelMsgoverAll").html("<b class='boldTextBlue'>Calculate load .</b>");
				$("#rowNum16").prop("hidden",false);
				$("#overallDepthText,#overallDepthSubmit").prop("disabled",true);
				id2=0;		
				toastr.success("Correct Answer");
				
			} else {
				$("#modelMsgoverAll").html("<b class='boldTextBlue'>Correct Answer "+overallDepth);
			}
		}
		id2++;
	}	 
});
	    
	
	$("#NextLevel3").click(function (){
		$("body").css("padding","0px 0px 0px 0px");	
		 $("#page3").prop("hidden",true);
//		 	$("#referValue").prop("disabled",false);
		 	$("#page4").prop("hidden",false);
//				StairCaseAnim3();
		 	StairCaseConfigLoad(d,overallDepth,steel,fe,concrete,Wf);
				tempMasterJson = {
						"d(m)":d,
						"D(m)":overallDepth,
						"Adopting(&empty;)":Wf,
						};
				jsonArray.push(tempMasterJson);
				
				MasterJson=jsonArray;
				console.log(MasterJson);
			});
		//StairCaseAnim2();
		
//	StairCaseConfig3(length,riserNum,TreadNum);
//	$("#modelMsg").html("<b class='boldTextGreen'>Configured Successfully</b>");
//	clearInterval(cron);
	
}
	  
	