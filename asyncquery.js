//AJAX using Fetch API
async function fetchJSONData(method = 'POST',url = "", data = {}) 
{

	const response = await fetch(url, {
		method: method, // *GET, POST, PUT, DELETE, etc.
		mode: "cors", // no-cors, *cors, same-origin
		cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
		credentials: "same-origin", // include, *same-origin, omit
		headers: {
		  "Content-Type": "application/json",
		  // 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: "follow", // manual, *follow, error
		referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data), // body data type must match "Content-Type" header
	});

	if(response.ok)
	{	
		try	{
			 
			JSON.parse(response.text()); //check if valid JSON by trying to parse it 
			
			return response.json(); 
		}catch (error)
		{
			return JSON.parse('{"Error":"' + error + '"}'); 
		}
		
	}
	else
	{
		return JSON.parse('{"Error":"' + response.status + '"}'); 
	}


}
