/*
var getJSON = (url, cb) {
	var xhr = new XMLHttpRequest();
	xhr.addEventListener('load', function() {

    if (xhr.status !== 200) {
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    }

    cb(null, xhr.response);
  });

	xhr.open('GET', url);
	xhr.responseType = 'json';
	xhr.send();
}

var state = {
	data: null
};

$(document).ready(function() {
	getJSON("form.json", function(err, json) {
		if (err) { return alert(err.message);}
		state.data = json;
		console.log(state.data);
	});
});
*/
