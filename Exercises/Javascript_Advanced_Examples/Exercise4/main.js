function OnLoad()
{
	SelectRoom(0);
}

function SelectRoom(roomIndex)
{
	var room = roomArray[roomIndex]
	document.getElementById('roomTitle').innerHTML = room.title;
	document.getElementById('roomText').innerHTML = room.text;
	document.getElementById('roomChoices').innerHTML = "";
	for(var i = 0; i < room.choices.length; i++)
	{
		document.getElementById('roomChoices').innerHTML += "<button type='button' onClick='SelectRoom(" + room.choices[i].index + ")''>" + room.choices[i].text + "</button>";
	}
}
