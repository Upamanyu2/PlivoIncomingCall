var plivo = require('plivo');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.all('/receive_calls/', function(request, response) {
  // Generate a Speak XML with the details of the text to play on the call.
  var r = plivo.Response();
  r.addSpeak('Hello, you just received your first call');
  response.set({'Content-Type': 'text/xml'});
  response.send(r.toXML());
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});