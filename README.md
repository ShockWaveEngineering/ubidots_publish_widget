# ubidots_publish_widget

<script src='https://cdn.jsdelivr.net/gh/ShockWaveEngineering/ubidots_publish_widget@0.1.2/src/ubidots_publish_widget.js'></script>
<link href='https://cdn.jsdelivr.net/gh/ShockWaveEngineering/ubidots_publish_widget@0.1.2/src/ubidots_publish_widget.css' rel='stylesheet' />



The context has to be in a valid JSON format (Double quotes must be used, not single quotes)

var sectorApplicationBrowser = 
{
    "sectors":[
    {
        "name":"north sector",
        "crop":"default",
        "plantDate":"2008",
        "angle": 0,
        "application": 5.0
    },
    {
        "name":"east sector",
        "crop":"default",
        "plantDate":"2008",
        "angle": 45,
        "application": 6.0
    },
    {
        "name":"west sector",
        "crop":"default",
        "plantDate":"2008",
        "angle": 70,
        "application": 10.0
    }
]};

{"sectors":[{"name":"north sector","crop":"default","plantDate":"2008","angle":0,"application":5.0},{"name":"east sector","crop":"default","plantDate":"2008","angle":45,"application":6.0},{"name":"west sector","crop":"default","plantDate":"2008","angle":70,"application":10.0}]}



var sectorApplicationBrowser = 
{
    "sectors":[
    {
        "angle": 0,
        "application": 5.0
    },
    {
        "angle": 45,
        "application": 6.0
    },
    {
        "angle": 70,
        "application": 10.0
    }
]};

{"sectors":[{"angle": 0,"application": 5.0},{"angle": 45,"application": 6.0},{"angle": 70,"application": 10.0}]}
