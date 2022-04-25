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
    var _deviceApiLabel = ""; //specified by test input
    var _variableApiLabel = ""; //specified by test input
    var _variableValue = 0;
    var _variableContext = "";

    //try get values from the DOM
    _deviceApiLabel = document.getElementById('deviceApiLabel').value;
    _variableApiLabel = document.getElementById('variableApiLabel').value;
    _variableValue = document.getElementById('variableValue').value;
    _variableContext = document.getElementById('variableContext').value;

    //print to console
    console.log("deviceApiLabel: " + _deviceApiLabel);
    console.log("variableApiLabel: " + _variableApiLabel);
    console.log("variableValue: " + _variableValue);
    console.log("variableContext: " + _variableContext);


    if(_deviceApiLabel == "" || _variableApiLabel == "")
    {
        console.log("Device API Label or Variable API Label not set");
        return;
    }

    UploadVariableToUbidots(_deviceApiLabel, _variableApiLabel, _variableValue, _variableContext);
}








function UploadVariableToUbidots(deviceApiLabel, variableApiLabel, variableValue, variableContext)
{
	var url = "https://industrial.api.ubidots.com/api/v1.6/devices/" + deviceApiLabel + "/";
	var headers = {'Content-Type' : 'application/json', 'X-Auth-Token' : TOKEN};
	var data = "{\"" + variableApiLabel + "\": {\"value\": " + variableValue + ", \"context\":" + JSON.stringify(variableContext) + "}}";	
	
	$.post({url: url, headers: headers, data: data});
}