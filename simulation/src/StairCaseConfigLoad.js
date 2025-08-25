var floorFinish,liveLoad,ws,wDead,totalDead,FactoredLoad,mu;
var loadStepLength;
function StairCaseConfigLoad(d,overallDepth,steel,fe,concrete,Wf){
	 $("#page4Div1").html("<center><img src='images/loadCal1.png'></center>");
	
	
	console.log(" concrete load "+concrete);
	var selection4 =''   
	  	 +'<div class="row" >'
		   +'<div class="col-sm-6">'
		   +'<label class="labelstyle marginBottom">Live load  : </label>'
		   +'</div>'	    
		   +'<div class="col-sm-6">'
		   +'<input type="number" id="lLoadVal" style= "width:100%;"  class=" form-control marginBottom" tabindex="1" >'
		   +'</div>'
		   +'</div>'
		   +'<div class="row" id="floorFinishDiv" hidden >'
		   +'<div class="col-sm-6">'
		   +'<label class="labelstyle marginBottom">Floor finish : </label>'
		   +'</div>'	    
		   +'<div class="col-sm-6">'
		   +'<input type="number" id="floorFinishVal" style= "width:100%;"  class=" form-control marginBottom" tabindex="2">'
		   +'</div>'
		   +'</div>'
		   +'<div class="row" id="selfWeightOfSlabDiv" hidden>'
		   +'<div class="col-sm-12">'	   
		   +'	<div class="alert alert-info">'
	   	   +' 		<strong class="" id="selfWeightOfSlab"></strong> '
	  	   +'	</div>'  	   	 
	  	   +'</div>'	   
	  	   +'</div>'
	  	   +'<div class="row" id="wDeadDiv" hidden>'
		   +'<div class="col-sm-12">'	   
		   +'	<div class="alert alert-info">'
	   	   +' 		<strong class="" id="wDead"></strong> '
	  	   +'	</div>'  	   	 
	  	   +'</div>'	   
	  	   +'</div>'
	  	   +'<div class="row" id="DeadloadStepDiv" hidden>'
		   +'<div class="col-sm-12">'	   
		   +'	<div class="alert alert-info">'
	   	   +' 		<strong class="" id="deadLoadLength"></strong> '
	  	   +'	</div>'  	   	 
	  	   +'</div>'	   
	  	   +'</div>'
	  	 +'<div class="row" id="totalLoadDiv" hidden>'
		   +'<div class="col-sm-12">'	   
		   +'	<div class="alert alert-info">'
	   	   +' 		<strong class="" id="totalLoad"></strong> '
	  	   +'	</div>'  	   	 
	  	   +'</div>'	   
	  	   +'</div>'
	  	 +'<div class="row" id="FactoredLoadDiv" hidden>'
		   +'<div class="col-sm-12">'	   
		   +'	<div class="alert alert-info">'
	   	   +' 		<strong class="" id="FactoredLoad"></strong> '
	  	   +'	</div>'  	   	 
	  	   +'</div>'	   
	  	   +'</div>'
	  	 +'<div class="row calRowBorder" id="FactoredMomentDiv" hidden>'
		   +'<div class="col-sm-5">'
		   +'<label class="labelstyle ">Factored moment(Mu) kN.M : </label>'
		   +'</div>'	    
		   +'<div class="col-sm-4">'
		   +'<input type="number" id="muVal" style= "width:100%;"  class=" form-control " >'
		   +'</div>'
		   +'<div class="col-sm-3" id="buttonDiv">'
		   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="muSumbit" data-toggle="modal" data-target="#myModalMu" >SUBMIT</button>'
		   +'</div>'	     
		   +'</div>'
		   +  ' <!-- Modal -->'
			+ '<div class="modal fade" id="myModalMu" role="dialog">'
			+ ' <div class="modal-dialog modal-md">'
			+ '    <div class="modal-content">'
			+ '     <div class="modal-header">'				
			+ '       <h4 class="modal-title" >Message box</h4>'
			+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
			+ '     </div>'
			+ '     <div class="modal-body1">'
			+ '       <p id="modelMsgMu" style=" margin: 12px;"></p>'
			+ '     </div>'
			+ '     <div class="modal-footer">'
			+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
			+ '     </div>'
			+ '   </div>'
			+ ' </div>'
			+ '</div>'
			 +'<div class="row" id="loadDiv" hidden>'
			   +'<div class="col-sm-12">'	   
//			   +'	<div class="alert alert-info">'
			   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="NextLevel4" >NEXT LEVEL</button>'
//			  +'	</div>'  	   	 
		  	   +'</div>'	   
		  	   +'</div>'
			
	  	   $("#page4Div2").html(selection4);

	
	
$("#lLoadVal").change(function(){
		
		liveLoad = $("#lLoadVal").val(); 
		if(liveLoad>=3 && liveLoad<=5){
			 // Get textbox value
		    $("#floorFinishDiv").prop("hidden",false);
		
		}
		else
			{
			toastr.info("Take Live Load value between 3 - 5 kN/m  ");
			
			}	  
	});
	
	$("#floorFinishVal").change(function(){
		
		floorFinish = $(this).val();
		if(floorFinish>=1 && floorFinish<=2){
			 //  calcuate self weight of slab
		     wsTemp=25*overallDepth*1;
		     ws=wsTemp.toFixed(2);
		     
		     //  Dead load of Slab on span(Wsdead)
		     temp2=Math.pow(rHVal,2)+Math.pow(TreadWidth, 2);
		     wDeadTemp=ws*(Math.sqrt(temp2)/TreadWidth);
		     wsDead=wDeadTemp.toFixed(2);
		     
		     //Dead load of step /1 m length
		     loadStepLengthTemp=rHVal*25/2;
		     loadStepLength=loadStepLengthTemp.toFixed(2);
		     
		     //Total load
//		     totalDead=parseFloat(liveLoad+floorFinish+loadStepLength+wsDead);
		     totalDeadTemp=  parseFloat(liveLoad) + parseFloat(floorFinish) + parseFloat(loadStepLength) + parseFloat(wsDead);
		     totalDead=totalDeadTemp.toFixed(2);
		     //FactoredLoad
		     FactoredLoadTemp=1.5*totalDead;
		     FactoredLoad=FactoredLoadTemp.toFixed(2);
		     
		     $("#selfWeightOfSlabDiv,#wDeadDiv,#totalLoad,#FactoredLoadDiv,#DeadloadStepDiv,#FactoredMomentDiv").prop("hidden",false);
		     $("#lLoadVal,#floorFinishVal").prop("disabled",true);
		     
		    $("#selfWeightOfSlab").html("<center>Self weight of slab(Ws) = "+ws+"</center>");
		    $("#wDead").html("<center>Dead load of slab on span(wDead) = "+wsDead+"</center>");
		    $("#deadLoadLength").html("<center>Dead load of step /1 m length = "+loadStepLength+"</center>");
		    $("#totalLoad").html("<center>Total load = "+totalDead+"</center>");
		    $("#FactoredLoad").html("<center>Factored Load (W)kN/M = "+FactoredLoad+"</center>");
		}
		else
			{
			toastr.info("Take Floor Finish between 1 - 2 kN/m ");
			
			}	  
	});
	var id3=0;
	
	$("#muSumbit").click(function(){		
		 $("body").css("padding","0px 0px 0px 0px");
		
		 muVal=$("#muVal").val();
		 console.log("mu "+muVal);
		 
		 var muTemp=parseFloat((FactoredLoad*Math.pow(goingCorr,2))/8);
		 mu=muTemp.toFixed(2);
		
		if(muVal==""){			
			$("#modelMsgMu").html("<b class='boldTextRed'>Enter numeric value ");
		}else{
			if (id3 <= 2) {
				if (muVal==mu) {					
					
					id3=0;		
					$("#loadDiv").prop("hidden",false);
					 $("#muVal,#muSumbit").prop("disabled",true);
					toastr.success("Correct Answer");
					$("#modelMsgMu").html("<b class='boldTextBlue'>Calculate bending moment.");
					
				} else if (muVal!=mu) {
					$("#modelMsgMu").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");				
				}
			} else if (id3 == 3){
				$("#modelMsgMu").html('<img src="images/factoredMoment.png" class="img-fluid">');
			} else {
				muVal =parseFloat($("#muVal").val());

				if (muVal==mu)  {					
					
					id3=0;	
					$("#loadDiv").prop("hidden",false);
					 $("#muVal,#muSumbit").prop("disabled",true);
					toastr.success("Correct Answer");
					$("#modelMsgMu").html("<b class='boldTextBlue'>Calculate bending moment.");
					
				} else {
					$("#modelMsgMu").html("<b class='boldTextBlue'>Correct Answer "+mu);
				}
			}
			id3++;
		}	 
	});
	
	$("#NextLevel4").click(function (){
		 
		 $("#page4").prop("hidden",true);
//	 	$("#referValue").prop("disabled",false);
	 	$("#page5").prop("hidden",false);
			StairCaseAnim3();
			StairCaseBendingMoment(overallDepth,floorFinish,liveLoad,ws,wDead,loadStepLength,totalDead,FactoredLoad,mu,d,steel,fe,concrete,Wf);
			tempMasterJson = {
					"Live_Load(kN/m<sup>2</sup>)":liveLoad,
					"Floor_Finish(kN/m<sup>2</sup>)":floorFinish,
					"Self_weight_of_slab(Ws)(kN/m<sup>2</sup>)":ws,
					"Dead_load_on_span(wDead)(kN/m<sup>2</sup>)":wsDead,
					"Dead_load_step_1m_length(kN/m<sup>2</sup>)":loadStepLength,
					"Total_load(kN/m<sup>2</sup>)":totalDead,
					"Factored_Total_Load(kN/m<sup>2</sup>)":FactoredLoad,
					"Factored_moment(kN/m)":mu,
					
					};
			jsonArray.push(tempMasterJson);
			
			MasterJson=jsonArray;
			console.log(MasterJson);
		});
		
}
