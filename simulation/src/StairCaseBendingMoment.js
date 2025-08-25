
var ast;
var beamVal;
var provideD;
var spacingSteelMin;
var area1Bar;

var noOfBars;
function StairCaseBendingMoment(overallDepth,floorFinish,liveLoad,ws,wDead,loadStepLength,totalDead,FactoredLoad,Mu,d,steel,fe,concrete,Wf){
	
	 $("#page5Div1").html("<center><img src='images/ast1.png' class='img-fluid'></center>");
	console.log(" concrete Bending moment "+concrete);
var htm=''
	   +'<div class="row" >'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Width of beam thickness wall-b (mm)  : </label>'
	   +'</div>'	    
	   +'<div class="col-sm-6">'
//	   +'<input type="number" id="beamVal" style= "width:100%;"  class=" form-control marginBottom" tabindex="1" >'
	   +'<select  class="form-control selectConf marginBottom" id="beamVal"  style="height:auto; "  >'
	   +'<option value="0">--- Select Width of beam thickness wall-b(mm)--- </option>'
//	   +'<option value="250" >Fe250  </option>'
	   +'<option value="100" >100  </option>'
	   +'<option value="230" >230  </option>'
	   +'<option value="250" >250  </option>'
	   +'<option value="300" >300  </option>'
	   +'</select>'	 
	   +'</div>'
	   +'</div>'
	   +'<div class="row" id="beamActualValueDiv" hidden>'
	   +'<div class="col-sm-12">'	   
	   +'	<div class="alert alert-primary">'
   	   +' 		<strong class="" id="beamActualValue"></strong> '
  	   +'	</div>'  	   	 
  	   +'</div>'	   
  	   +'</div>'
	   +'<div class="row" id="beamDiv" hidden>'
	   +'<div class="col-sm-12">'	   
	   +'	<div class="alert alert-info">'
   	   +' 		<strong class="" id="BeamDivMsg"></strong> '
  	   +'	</div>'  	   	 
  	   +'</div>'	   
  	   +'</div>'
  	 +'<div class="row" id="beamDiv1" hidden>'
	   +'<div class="col-sm-12">'	   
	   +'	<div class="alert alert-success">'
 	   +' 		<strong class="" id="BeamDivMsg1"></strong> '
	   +'	</div>'  	   	 
	   +'</div>'	   
	   +'</div>'
	   +'<div class="row calRowBorder" id="reinforcementDiv" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Ast (mm<sup>2</sup>) : </label>'
	   +'</div>'	    
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="reinforcementText" style= "width:100%;"  class=" form-control " >'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="reDetailingSumbit" data-toggle="modal" data-target="#myModalRein" >SUBMIT</button>'
	   +'</div>'	     
	   +'</div>'
	   +'<div class="row" id="areaOf1BarDiv" hidden>'
	   +'<div class="col-sm-12">'	   
	   +'	<div class="alert alert-success">'
 	   +' 		<strong class="" id="areaOf1BarDivMsg"></strong> '
	   +'	</div>'  	   	 
	   +'</div>'	   
	   +'</div>'
	   +'<div class="row" id="areaOfNoBarDiv" hidden>'
	   +'<div class="col-sm-12">'	   
	   +'	<div class="alert alert-success">'
 	   +' 		<strong class="" id="areaOfNoBarDivMsg"></strong> '
	   +'	</div>'  	   	 
	   +'</div>'	   
	   +'</div>'
	  
	   +'<div class="row" id="SpacingTitleDiv" hidden>'
	   +'<div class="col-sm-12 steel" >' 
	   +' <strong class="" id=""><center> Spacing of main steel</center></strong> '
	   +'</div>'
	   +'</div>'
	   +'<div class="row" id="spacing1" hidden>'
	   +'<div class="col-sm-6">'	   
	   +'	<div class="alert alert-success">'
 	   +' 		<span class="" id="spacing11"><center><img src="images/spacing12.png" class="img-fluid"></img></center></span> '
	   +'	</div>'  	   	 
	   +'</div>'
	   +'<div class="col-sm-6">'	   
	   +'	<div class="alert alert-success">'
 	   +' 		<strong class="" id="spacing12"></strong> '
	   +'	</div>'  	   	 
	   +'</div>'
	   +'</div>'
	   +'<div class="row" id="spacing2" hidden>'
	   +'<div class="col-sm-6">'	   
	   +'	<div class="alert alert-success">'
 	   +' 		<span class="" id="spacing21"><center><img src="images/spacing1.png" class="img-fluid"></img></center></span> '
	   +'	</div>'  	   	 
	   +'</div>'
	   +'<div class="col-sm-6">'	   
	   +'	<div class="alert alert-success">'
 	   +' 		<strong class="" id="spacing22"></strong> '
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
 	   +' 		<strong class="" id="spacing23"><center>300 mm</center></strong> '
	   +'	</div>'  	   	 
	   +'</div>'
	   +'</div>'
	   +'<div class="row" id="spacingMinDiv" hidden>'
	   +'<div class="col-sm-12 steel">'	   
//	   +'	<div class="alert alert-success">'
 	   +' 		<span class="" id="spacingMin"></span> '
//	   +'	</div>'  	   	 
	   +'</div>'
	   +'</div>'
	   
	   +'<div class="row" id="AstDiv" hidden>'
	   +'<div class="col-sm-12">'	   
//	   +'	<div class="alert alert-info">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="NextLevel5" >NEXT LEVEL</button>'
//	  +'	</div>'  	   	 
  	   +'</div>'	   
  	   +'</div>'
	   
	   
	   +  ' <!-- Modal -->'
		+ '<div class="modal fade" id="myModalRein" role="dialog">'
		+ ' <div class="modal-dialog modal-md">'
		+ '    <div class="modal-content">'
		+ '     <div class="modal-header">'				
		+ '       <h4 class="modal-title" >Message box</h4>'
		+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
		+ '     </div>'
		+ '     <div class="modal-body1">'
		+ '       <p id="modelMsgRein" style=" margin: 12px;"></p>'
		+ '     </div>'
		+ '     <div class="modal-footer">'
		+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
		+ '     </div>'
		+ '   </div>'
		+ ' </div>'
		+ '</div>'
		
	   
$("#page5Div2").html(htm);

$("#beamVal").change(function(){
	
	 beamVal=$("#beamVal").val();
//	 var convertBeam=beamVal*1000;
	temp=parseFloat(Mu*1000000)/parseFloat(steel*concrete*beamVal);
	temp1=Math.sqrt(temp);
	var convertAns=parseFloat(temp1/1000);
	dreq=convertAns.toFixed(2);
	if(dreq<d)
	{
		$("#beamDiv,#beamDiv1,#beamActualValueDiv,#reinforcementDiv").prop("hidden",false);
		$("#beamVal").prop("disabled",true);
		$("#beamActualValue").html("<center>Here "+dreq+" < "+d+"</center>");
		$("#BeamDivMsg").html("<center>Here d<sub>required </sub> < 'd'</sub></center>");
		$("#BeamDivMsg1").html("<center>Now Provide 'd'</center>");
		provideD=d;
		
	}
	else
		{
		$("#beamDiv,#beamDiv1,#beamActualValueDiv,#reinforcementDiv").prop("hidden",false);
		$("#beamVal").prop("disabled",true);
		$("#beamActualValue").html("<center>Here "+dreq+" > "+d+"</center>");
		$("#BeamDivMsg").html("<center>Here d<sub>required </sub> > 'd'</sub></center>");
		$("#BeamDivMsg1").html("<center>Now Provide d<sub>required </sub></center>");
		provideD=dreq;
		}
});
var id4=0;

$("#reDetailingSumbit").click(function(){		
	 $("body").css("padding","0px 0px 0px 0px");
	
	 reinforcementText1=$("#reinforcementText").val();
	 console.log("concrete in ast  "+concrete);
	 
	 var convertedD=parseFloat(provideD*1000);
	
	 var temp1=1-parseFloat(4.6*mu*1000000)/parseFloat(concrete*beamVal*Math.pow(convertedD,2));
	 
	 var temp2=parseFloat(0.5*parseFloat(concrete)*beamVal*convertedD/fe);
	 
	 var temp3=Math.sqrt(temp1);
	 
	 var temp4=parseFloat(1-temp3);
	 
	 var ans1=temp2*temp4;
	 
	 ast=ans1.toFixed(2);
	console.log(ast);
	
	area1Bar=parseFloat((3.14/4)*Math.pow(Wf,2));
	
	noOfBars=Math.ceil(ast/area1Bar);
	
	 var spacingCal1Temp=parseFloat((area1Bar*1000)/ast);
	 var spacingCal1= spacingCal1Temp.toFixed(2);
	 var spacingCal2Temp=parseFloat(3*provideD*1000);
	 var spacingCal2=spacingCal2Temp.toFixed(2);
	 
	 
	 
	if(reinforcementText==""){			
		$("#modelMsgRein").html("<b class='boldTextRed'>Enter numeric value ");
	}else{
		if (id4 <= 2) {
			if (reinforcementText==ast) {					
				
				id4=0;		
				$("#areaOf1BarDiv,#areaOfNoBarDiv,#SpacingTitleDiv,#spacing1,#spacing2,#spacing3,#spacingMinDiv,#AstDiv").prop("hidden",false);
				$("#reinforcementText,#reDetailingSumbit").prop("disabled",true);
				$("#areaOf1BarDivMsg").html("<center>Area of 1 Bar "+area1Bar+"</center>");
				$("#areaOfNoBarDivMsg").html("<center>No of Bar's "+noOfBars+"</center>");
				$("#spacing12").html("<center> "+spacingCal1+"</center>");
				$("#spacing22").html("<center> "+spacingCal2+"</center>");
				toastr.success("Correct Answer");
				$("#modelMsgRein").html("<b class='boldTextBlue'>Calculate spacing of main steel.");
				findMainSteel(spacingCal1,spacingCal2,300);
				
				
			} else if (reinforcementText!=ast) {
				$("#modelMsgRein").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");				
			}
		} else if (id4 == 3){
			$("#modelMsgRein").html('<center><img src="images/ast.png" class="img-fluid"></center>');
		} else {
			reinforcementText =parseFloat($("#reinforcementText").val());

			if (reinforcementText==ast)  {					
				
				id4=0;	
				$("#areaOf1BarDiv,#areaOfNoBarDiv,#SpacingTitleDiv,#spacing1,#spacing2,#spacing3,#spacingMinDiv,#AstDiv").prop("hidden",false);
				$("#reinforcementText,#reDetailingSumbit").prop("disabled",true);
				$("#areaOf1BarDivMsg").html("<center>Area of 1 Bar "+area1Bar+" mm<sup>2</sup></center>");
				$("#areaOfNoBarDivMsg").html("<center>No of Bar's "+noOfBars+"</center>");
				$("#spacing12").html("<center> "+spacingCal1+"</center>");
				$("#spacing22").html("<center> "+spacingCal2+"</center>");
				toastr.success("Correct Answer");
				$("#modelMsgRein").html("<b class='boldTextBlue'>Calculate spacing of main steel.");
				findMainSteel(spacingCal1,spacingCal2,300);
				
			} else {
				$("#modelMsgRein").html("<b class='boldTextBlue'>Correct Answer "+ast);
			}
		}
		id4++;
	}	 
});
function findMainSteel(spacingCal1,spacingCal2,const300){
	
	if((spacingCal1<spacingCal2)&&(spacingCal1<const300)){
		
		spacingSteelMin=spacingCal1;
//		$("#spacingMin").html("<center>Spacing of main Steel "+spacingSteelMin+"mm centre to centre</center>");
		$("#spacingMin").html("<center>Spacing of main Steel "+Wf+"mm Bar <br>at "+spacingSteelMin+"mm centre to centre</center>");
		
	}
	else if((spacingCal2<spacingCal1)&&(spacingCal2<300))
		{
		spacingSteelMin=spacingCal2;
//		$("#spacingMin").html("<center>Spacing of main Steel "+spacingSteelMin+"mm centre to centre</center>");
		$("#spacingMin").html("<center>Spacing of main Steel "+Wf+"mm Bar <br>at "+spacingSteelMin+"mm centre to centre</center>");
		
		}
	else
		{
		spacingSteelMin=300;
		$("#spacingMin").html("<center>Spacing of main Steel "+Wf+"mm Bar <br>at 300mm centre to centre</center>");
		
//		$("#spacingMin").html("<center>Spacing of main Steel 300mm centre to centre</center>");
		}
}
$("#NextLevel5").click(function (){
	 
	 $("#page5").prop("hidden",true);
//	$("#referValue").prop("disabled",false);
	$("#page6").prop("hidden",false);
		StairCaseAnim3();
		StairCaseDistrubutionSteel(overallDepth,dreq,ast,area1Bar,noOfBars,spacingSteelMin,beamVal,d);
		tempMasterJson = {
				"Provide_d(m)":dreq,
				"Ast(mm<sup>2</sup>)":ast,
				"Area_of_1_bar(mm<sup>2</sup>)":area1Bar,
				"No_of_Bar's":noOfBars,
				"Spacing_steel_minimum(mm)":spacingSteelMin,
				
				};
		jsonArray.push(tempMasterJson);
		
		MasterJson=jsonArray;
		console.log(MasterJson);
	});


}