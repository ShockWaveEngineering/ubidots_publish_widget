var TOKEN = "null"; //retrieved at runtime

var ubidots = new Ubidots();
ubidots.on('receivedToken', function (data)
{
	TOKEN = data;
	console.log("Received Token");
	
});



function PublishVariable()
{
    //default values
    var deviceApiLabel = "null"; //specified by test input
    var variableApiLabel = "null"; //specified by test input
    var variableValue = 0;
    var variableContext = "";

    //try get values from the DOM
    deviceApiLabel = document.getElementById('deviceApiLabel').value;
    variableApiLabel = document.getElementById('variableApiLabel').value;
    variableValue = document.getElementById('variableValue').value;
    variableContext = document.getElementById('variableContext').value;

    //print to console
    console.log("deviceApiLabel: " + deviceApiLabel);
    console.log("variableApiLabel: " + variableApiLabel);
    console.log("variableValue: " + variableValue);
    console.log("variableContext: " + variableContext);


    if(deviceApiLabel == "null" || variableApiLabel == "null")
    {
        console.log("Device API Label or Variable API Label not set");
        return;
    }
}








function UploadVariableToUbidots(variableApiLabel, variableValue, variableContext)
{
	var url = "https://industrial.api.ubidots.com/api/v1.6/devices/" + deviceApiLabel + "/";
	var headers = {'Content-Type' : 'application/json', 'X-Auth-Token' : TOKEN};
	var data = "{\"" + variableApiLabel + "\": {\"value\": " + variableValue + ", \"context\":" + JSON.stringify(variableContext) + "}}";	
	
	$.post({url: url, headers: headers, data: data});
}