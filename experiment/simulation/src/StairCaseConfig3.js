
function Page3(length,HightEachFlight,rMin,rMax,tMin,tMax){
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
   	   +' 		<strong class="labelstyleInfo"><center> Effective Span : wall </center></strong> '
  	   +'	</div>'  	   	 
  	   +'</div>'	   
  	   +'</div>'
  	   
  	   +'<div class="row" id="rowNum9">'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Enter Value of X (m) : </label>'
	   +'</div>'	    
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="xval" style= "width:100%;"  class=" form-control marginBottom" >'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'</div>'	     
	   +'</div>'
	   
	   +'<div class="row" id="rowNum10">'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Enter Value of Y (m) : </label>'
	   +'</div>'	    
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="yval" style= "width:100%;"  class=" form-control marginBottom" >'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'</div>'	     
	   +'</div>'
	   
	   +'<div class="row calRowBorder " id="rowNum11" >'
	   +'<div class="col-sm-5">'
	   +"<label class='labelstyle '>Calculate wall &rarr; L<sub>eff</sub> (m) : </label>"
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="wallEft" style= 10px;width:100%;"  class=" form-control " >'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subWeffect" data-toggle="modal" data-target="#myModal" >SUBMIT</button>'
	   +'</div>'	    
	   +'</div>'
	   
	   +'<div class="row" id="rowNum12">'
	   +'<div class="col-sm-12">'	   
	   +'	<div class="alert alert-info">'
   	   +' 		<strong class="labelstyleInfo"><center>Effective Span : Beam </center></strong> '
  	   +'	</div>'  	   	 
  	   +'</div>'	   
  	   +'</div>'
	   
	   +'<div class="row" id="rowNum13">'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Enter Value of W1 (m) : </label>'
	   +'</div>'	    
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="Wval" style= "width:100%;"  class=" form-control marginBottom" >'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'</div>'	     
	   +'</div>'
	   
	   +'<div class="row" id="rowNum14">'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Enter Value of W2 (m) : </label>'
	   +'</div>'	    
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="Wval" style= "width:100%;"  class=" form-control marginBottom" >'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'</div>'	     
	   +'</div>'
	   
	   +'<div class="row  calRowBorder" id="rowNum15" >'
	   +'<div class="col-sm-5">'
	   +"<label class='labelstyle'>Calculate Beam &rarr; L<sub>eff</sub> (m) : </label>"
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="beamEft" style= 10px;width:100%;"  class=" form-control  "  >'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subBeffect" data-toggle="modal" data-target="#myModal" >SUBMIT</button>'
	   +'</div>'	    
	   +'</div>'
  	   
  	   +'<div class="row calRowBorder " id="rowNum16" >'
	   +'<div class="col-sm-5">'
	   +"<label class='labelstyle '>Thickness of Waist Slab D (m) : </label>"
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="tWastSlab" style= 10px;width:100%;"  class=" form-control " >'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subtWastSlab" data-toggle="modal" data-target="#myModal" >SUBMIT</button>'
	   +'</div>'	    
	   +'</div>'
	   
//	   +'<div class="row" id="rowNum29" >'
//	   +'<div class="col-sm-12">'
//	   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="nxtLvl3"  data-toggle="modal" data-target="#myModal" disabled ><b> NEXT LEVEL </b></button>'
//	   +'</div>'
//	   +'</div>'
	   

	 
	   +'<div class="row" id="rowNum17" >'
	   +'<div class="col-sm-12">'
	   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="nxtLvl22"  data-toggle="modal" data-target="#myModal" disabled ><b>SUBMIT</b></button>'
	   +'</div>'
	   +'</div>'	   
//	   + modelHtm1
	   $("#page3Div2").html(selection3);
	   
	   
	   
	$("#xval").change(function(){		
		$("body").css("padding","0px 0px 0px 0px");	
		xIO= $("#xval").val();		
		if(xIO == ""){			
			alert("Enter numeric value ");
			//$("#modelMsg").html("<b class='boldTextRed'>Please Enter Value</b>");
		}else {
			xIO = parseFloat($("#xval").val());
				if(xIO <= 0){			
					alert("Entered value is incorrect.Try again.");					
				}else{
					$("#rowNum10").prop("hidden",false);
					$("#yval").prop("disabled",false);	
					$("#xval").prop("disabled",true);										
				}
		}
	}); 
	
	 var xIO,yIO;
	$("#yval").change(function(){		
		$("body").css("padding","0px 0px 0px 0px");	
		yIO = $("#yval").val();		
		if(yIO == ""){			
			alert("Enter numeric value ");
			//$("#modelMsg").html("<b class='boldTextRed'>Please Enter Value</b>");
		}else {
			yIO = parseFloat($("#yval").val());
				if(yIO <= 0){			
					alert("Entered value is incorrect.Try again.");					
				}else{
					$("#wallEft").prop("disabled",false);	 
					$("#subWeffect").prop("disabled",false);
					$("#yval").prop("disabled",true);										
				}
		}
	});
	    
	
	$("#nxtLvl22").click(function (){
		$("body").css("padding","0px 0px 0px 0px");	
		//StairCaseAnim2();
//	StairCaseConfig3(length,riserNum,TreadNum);
	$("#modelMsg").html("<b class='boldTextGreen'>Configured Successfully</b>");
	clearInterval(cron);
	
});	
	  
	   
	   
	   
	   
	   
	   
}