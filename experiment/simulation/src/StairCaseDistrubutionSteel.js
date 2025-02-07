var diaVal1;
var astmin;
function StairCaseDistrubutionSteel(overallDepth,dreq,ast,area1Bar,noOfBars,spacingSteelMin,beamVal,d){
	console.log("StairCaseDistrubutionSteel");
	$("#page6Div1").html("<center><img src='images/astmin12.png' class='img-fluid'></center>");
	var htm=''
		 +'<div class="row" id="" >'
		   +'<div class="col-sm-12 steel" style="background-color:#0a4a54;">'	   
//		   +'	<div class="alert alert-success">'
	 	   +' 		<span class="" id=""><center>Distribution Steel</center></span> '
//		   +'	</div>'  	   	 
		   +'</div>'
		   +'</div>'
		   +'<div class="row calRowBorder" id="diaDiv1" >'
		   +'<div class="col-sm-6">'
		   +'<label class="labelstyle ">Dia for distribution Steel : </label>'
		   +'</div>'	    
		   +'<div class="col-sm-6">'
		   +'<input type="number" id="diaVal" style= "width:100%;"  class=" form-control " >'
		   +'</div>'
		   +'</div>'
		  +'<div class="row calRowBorder" id="AstMinDiv" hidden >'
		   +'<div class="col-sm-5">'
		   +'<label class="labelstyle ">Ast<sub>min</sub> : </label>'
		   +'</div>'	    
		   +'<div class="col-sm-4">'
		   +'<input type="number" id="astminVal" style= "width:100%;"  class=" form-control " >'
		   +'</div>'
		   +'<div class="col-sm-3" id="buttonDiv">'
		   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="AstMinSubmit" data-toggle="modal" data-target="#myModalAstmin" >SUBMIT</button>'
		   +'</div>'	     
		   +'</div>'
		   
		   +'<div class="row" id="spacing1" hidden>'
		   +'<div class="col-sm-6">'	   
		   +'	<div class="alert alert-success">'
	 	   +' 		<span class="" id="spacing11"><center><img src="images/spaingmin.png" class="img-fluid"></img></center></span> '
		   +'	</div>'  	   	 
		   +'</div>'
		   +'<div class="col-sm-6">'	   
		   +'	<div class="alert alert-success">'
	 	   +' 		<strong class="" id="spacing12D"></strong> '
		   +'	</div>'  	   	 
		   +'</div>'
		   +'</div>'
		   +'<div class="row" id="spacing2" hidden>'
		   +'<div class="col-sm-6">'	   
		   +'	<div class="alert alert-success">'
	 	   +' 		<span class="" id="spacing21"><center><img src="images/spacing1min.png" class="img-fluid"></img></center></span> '
		   +'	</div>'  	   	 
		   +'</div>'
		   +'<div class="col-sm-6">'	   
		   +'	<div class="alert alert-success">'
	 	   +' 		<strong class="" id="spacing22D"></strong> '
		   +'	</div>'  	   	 
		   +'</div>'
		   +'</div>'
		   +'<div class="row" id="spacing3" hidden>'
		   +'<div class="col-sm-6">'	   
		   +'	<div class="alert alert-success">'
	 	   +' 		<span class="" id="spacing23"><center><img src="images/const300.png" class="img-fluid"></img></center></span> '
		   +'	</div>'  	   	 
		   +'</div>'
		   +'<div class="col-sm-6">'	   
		   +'	<div class="alert alert-success">'
	 	   +' 		<strong class="" id="spacing23D"><center>300 mm</center></strong> '
		   +'	</div>'  	   	 
		   +'</div>'
		   +'</div>'
		   
		 
		   +  ' <!-- Modal -->'
			+ '<div class="modal fade" id="myModalAstmin" role="dialog">'
			+ ' <div class="modal-dialog modal-md">'
			+ '    <div class="modal-content">'
			+ '     <div class="modal-header">'				
			+ '       <h4 class="modal-title" >Message box</h4>'
			+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
			+ '     </div>'
			+ '     <div class="modal-body1">'
			+ '       <p id="myModalAstminMsg" style=" margin: 12px;"></p>'
			+ '     </div>'
			+ '     <div class="modal-footer">'
			+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
			+ '     </div>'
			+ '   </div>'
			+ ' </div>'
			+ '</div>'
			 +'<div class="row" id="spacingMinDiv1" hidden>'
			   +'<div class="col-sm-12 steel">'	   
//			   +'	<div class="alert alert-success">'
		 	   +' 		<span class="" id="spacingMin1"></span> '
//			   +'	</div>'  	   	 
			   +'</div>'
			   +'</div>'
			  
			   +'<div class="row" id="AstDiv1" hidden>'
			   +'<div class="col-sm-12">'	   
//			   +'	<div class="alert alert-info">'
			   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="NextLevel6" >NEXT LEVEL</button>'
//			  +'	</div>'  	   	 
		  	   +'</div>'	   
		  	   +'</div>'
		  	 +'<div class="row calRowBorder" id="DeflectionDiv" hidden >'
			   +'<div class="col-sm-5">'
			   +'<label class="labelstyle ">Ast<sub>min</sub> : </label>'
			   +'</div>'	    
			   +'<div class="col-sm-4">'
			   +'<input type="number" id="deflectionVal" style= "width:100%;"  class=" form-control " >'
			   +'</div>'
			   +'<div class="col-sm-3" id="buttonDiv">'
			   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="deflectionSubmit" data-toggle="modal" data-target="#myModalAstmin" >SUBMIT</button>'
			   +'</div>'	     
			   +'</div>'
			
			$("#page6Div2").html(htm);
		   
		   $("#diaVal").change(function(){
				diaVal1=$("#diaVal").val();
				if(diaVal1==10 || diaVal1==12||diaVal1==16||diaVal1==20||diaVal1==25||diaVal1==32){
					$("#AstMinDiv").prop("hidden",false);
					$("#diaVal").prop("disabled",true);
					
				}
				else
					{
					toastr.info("Take minimum value of dia for distribution steel is 10,12,16,20,25,32 mm ");
					
					}
			});
var id6=0;
	
	$("#AstMinSubmit").click(function(){		
		 $("body").css("padding","0px 0px 0px 0px");
		
		 astminVal=$("#astminVal").val();
		 console.log("astminVal "+astminVal);
		 
		 var astminTemp=parseFloat(0.0012*1000*(overallDepth*1000));
		 astmin=astminTemp.toFixed(2);
		
		 var spacingCal1Temp=parseFloat((diaVal1*1000)/astmin);
		 var spacingCal1= spacingCal1Temp.toFixed(2);
		 var spacingCal2Temp=parseFloat(5*provideD*1000);
		 var spacingCal2=spacingCal2Temp.toFixed(2);
		 
		 
		 
		if(astminVal==""){			
			$("#myModalAstminMsg").html("<b class='boldTextRed'>Enter numeric value ");
		}else{
			if (id6 <= 2) {
				if (astminVal==astmin) {					
					
					id6=0;		
					findMainSteel(spacingCal1,spacingCal2,300);
					 $("#astminVal,#AstMinSubmit").prop("disabled",true);
					 $("#spacing1,#spacing2,#spacing3,#spacingMinDiv1,#diaDiv1,#AstDiv1").prop("hidden",false);
					toastr.success("Correct Answer");
					$("#myModalAstminMsg").html("<b class='boldTextBlue'>Calculate Deflection check.");
					$("#spacing12D").html("<center>"+spacingCal1+"</center>");
					$("#spacing22D").html("<center>"+spacingCal2+"</center>");
					
					
					
				} else if (astminVal!=astmin) {
					$("#myModalAstminMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");				
				}
			} else if (id6 == 3){
				$("#myModalAstminMsg").html('<img src="images/Ast_min.png" class="img-fluid">');
			} else {
				astminVal =parseFloat($("#astminVal").val());

				if (astminVal==astmin)  {					
					
					id6=0;	
					findMainSteel(spacingCal1,spacingCal2,300);
					 $("#astminVal,#AstMinSubmit").prop("disabled",true);
					 $("#spacing1,#spacing2,#spacing3,#spacingMinDiv1,#diaDiv1,#AstDiv1").prop("hidden",false);
					toastr.success("Correct Answer");
					$("#myModalAstminMsg").html("<b class='boldTextBlue'>Calculate Deflection check.");
					$("#spacing12D").html("<center>"+spacingCal1+"</center>");
					$("#spacing22D").html("<center>"+spacingCal2+"</center>");
					
				} else {
					$("#myModalAstminMsg").html("<b class='boldTextBlue'>Correct Answer "+astmin);
				}
			}
			id6++;
		}	 
	});
	
	function findMainSteel(spacingCal1,spacingCal2,const300){
		
		if((spacingCal1<spacingCal2)&&(spacingCal1<const300)){
			
			spacingSteelMin=spacingCal1;
			$("#spacingMin1").html("<center>Spacing of distribution Steel "+diaVal1+"mm Bar <br>at "+spacingSteelMin+"mm centre to centre</center>");
		}
		else if((spacingCal2<spacingCal1)&&(spacingCal2<300))
			{
			spacingSteelMin=spacingCal2;
			$("#spacingMin1").html("<center>Spacing of distribution Steel "+diaVal1+"mm Bar <br>at "+spacingSteelMin+"mm centre to centre</center>");
			}
		else
			{
			spacingSteelMin=300;
			$("#spacingMin1").html("<center>Spacing of distribution Steel "+diaVal1+"mm Bar <br>at 300mm centre to centre</center>");
				}
	}
	
	
	$("#NextLevel6 ").click(function(){
		 $("#page6").prop("hidden",true);
//		$("#referValue").prop("disabled",false);
		$("#page7").prop("hidden",false);
//			StairCaseAnim3();
			StairCaseDeflectionCheck(ast,astmin,dreq,beamVal,d);
			tempMasterJson = {
					
					"Ast(mm<sup>2</sup>)":ast,
					"Ast<sub>min</sub>(mm<sup>2</sup>)":astmin,
					
					
					};
			jsonArray.push(tempMasterJson);
			
			MasterJson=jsonArray;
			console.log(MasterJson);
		});
//	
}