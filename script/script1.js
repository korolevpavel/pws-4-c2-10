$('#voted').hide();
$("#result").prop("disabled", true);

function postRequest(voteAnimal) {
	
	const request = new XMLHttpRequest();
	const url = new URL('https://sf-pyw.mosyag.in/sse/vote/' + voteAnimal)
	
	request.open('POST', url)
	request.send();

	$("#dogs").prop("disabled", true);
	$("#cats").prop("disabled", true);
	$("#parrots").prop("disabled", true);
	$('#voted').show()
	$("#result").prop("disabled", false);
}