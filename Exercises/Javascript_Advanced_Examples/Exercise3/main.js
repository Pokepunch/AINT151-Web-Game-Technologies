var roomObject = {
	title:'room name',
	text:'you are standing in a room, there is a picture on the wall and a table',
	choices:['examine picture','examine table']
}


function OnLoad()
{
	document.getElementById('roomtitle').innerHTML = roomObject.title;
	document.getElementById('roomtext').innerHTML = roomObject.text;
	for(var i = 0; i < roomObject.choices.length; i++)
	{
		document.getElementById('roomchoices').innerHTML += "<button type='button'>" + roomObject.choices[i] + "</button>"
	}
}
