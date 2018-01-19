// Main javascript file which contains the game functions.

// Initial text to load.
window.onload = function () { InitialLoad(roomIndex) };

// Game variables.
var roomIndex = 0;
var previousRoom;
var doorCode = Math.floor(Math.random() * 9000) + 1000;

// Text loader variables.
var loadText = "";
var loadTimer;
var skipTextLoad = false;

// Cursor variables.
var blink;
var inputText = "";
var seeCursor = false;

// Other
var bgColor;
var textColor;

/*
	Array storing variables used through the game
	0 = Got code from book
	1 = Exited room using window
	2 = Got Screwdriver
*/
var storyVariables = [];

/*
	Event listener for arrow key movement. Used to change the fake cursors position.
*/
window.addEventListener("keyup", function (e) {
	if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {
		UpdateCursorPos();
	}
	if (e.keyCode == 13) {
		footer_OnEnter();
	}
}, true);

/*
	Function run when the page is first loaded.
	- roomIndex: Index of room to load.
*/
function InitialLoad(roomIndex)
{
	var room = RoomArray[roomIndex];
	loadText = room.text;
	TextLoader(loadText);
	CursorBlink()
}

/*
	This function takes the input text and adds it to the main text box character by character.
	- text: Text string to load.
*/
function TextLoader(text)
{
	console.log("Length of text input:" + text.length);
	var newChar = text.charAt(0);
	// We need to take tags into account. If a '<' is found the tag is added whole so it works.
	if (newChar === "<")
	{
		newChar = text.substr(0, text.indexOf(">") + 1);
		text = text.slice(newChar.length);
	}
	else
	{
		text = text.slice(1);
	}
	document.getElementById('maincontent').innerHTML += newChar;
	if (skipTextLoad)
	{
		document.getElementById('maincontent').innerHTML += text;
		skipTextLoad = false;
		loadTimer = 0;
	}
	else if (text.length == 0)
	{
		window.clearTimeout(loadTimer);
		loadTimer = 0;
	}
	else
	{
		loadTimer = window.setTimeout(function () { TextLoader(text) }, 10);
	}
	FocusFooter();
}

/*
	This function makes the fake cursor blink.
*/
function CursorBlink()
{
	if (seeCursor == false)
	{
		document.getElementById('cursor').style.visibility = "visible";
		seeCursor = true;
	}
	else if (seeCursor == true)
	{
		document.getElementById('cursor').style.visibility = "hidden";
		seeCursor = false;
	}
	blink = window.setTimeout(function () { CursorBlink() }, 400);
}

/*
	This function skips the text loading effect, loading all text at once, well kinda...
	It actually just changes a bool which makes this happen in the textLoader function.
*/
function body_OnClick()
{
	if (!skipTextLoad && loadTimer != 0)
	{
		skipTextLoad = true;
	}
	else
	{
		FocusFooter();
	}
}

function footer_OnInput()
{
	// Stop the cursor from blinking.
	window.clearInterval(blink);
	document.getElementById('cursor').style.visibility = "visible";
	seeCursor = true;

	// Update the text of footerTop to that of the hidden textbox
	document.getElementById('footerTop').value = "> " + document.getElementById('footer').value;
	blink = window.setTimeout(function () { CursorBlink() }, 200);
	UpdateCursorPos()
}

function footer_OnEnter()
{
	var value = document.getElementById('footer').value;
	if (!skipTextLoad && loadTimer != 0)
	{
		skipTextLoad = true
	}
	if (value == "restart game")
	{
		document.getElementById('maincontent').innerHTML = "";
		roomIndex = 0;
		doorCode = Math.floor(Math.random() * 9000) + 1000;
		storyVariables = [];
		TextLoader(RoomArray[roomIndex].text)
		document.getElementById('footer').value = "";
		document.getElementById('footerTop').value = "> ";
		UpdateCursorPos();
	}
	if (!value == "" && loadTimer == 0)
	{
		var space = '<br/><br/>';
		var input = space + document.getElementById('footerTop').value;
		var text = ProcessInput(value);
		TextLoader(input + space + text);
		document.getElementById('footer').value = "";
		document.getElementById('footerTop').value = "> ";
		UpdateCursorPos();
	}
}

/*
	This function takes the input and checks to see if it matches any available choices.
	Uses two helper functions to check the input words.
*/
function ProcessInput(input)
{
	input = input.toLowerCase();
	var room = RoomArray[roomIndex]
	var words = input.split(" ");
	if (words.length != 2)
	{
		if (!isNaN(input) && roomIndex == 12 || roomIndex == 11)
		{
			if (input == doorCode)
			{
				previousRoom = roomIndex;
				if (storyVariables[1] == 1)
				{
					roomIndex = room.choices[0].index
				}
				else
				{
					roomIndex = room.choices[0].indexAlt;
				}
				return input = RoomArray[roomIndex].intro + "<br/><br/>" + RoomArray[roomIndex].text;
			}
			else
			{
				return "The bulb on the window lights up red with a short beep. The code wasn't correct."
			}
		}
		else
		{
			return "You must enter a verb and an object that you wish to interact with.";
		}
	}
	var verb = words[0];
	var object = words[1];
	var choiceNum = ProcessObject(room, object);
	if (choiceNum != -1)
	{
		if (ProcessVerb(room, verb, choiceNum) == true)
		{
			if (room.choices[choiceNum].index == 'previousRoom')
			{
				roomIndex = previousRoom;
				previousRoom = RoomArray.indexOf(room);
			}
			else if ("loop" in room.choices[choiceNum] && room.choices[choiceNum].loop > 0)
			{
				room.choices[choiceNum].loop -= 1;
				return RoomArray[roomIndex].textAlt;
			}
			else
			{
				previousRoom = roomIndex;
				roomIndex = room.choices[choiceNum].index;
			}
			if ("onceOnly" in RoomArray[roomIndex])
			{
				if (RoomArray[roomIndex].onceOnly == 1)
				{
					return "You can't do this again";
				}
				else
				{
					RoomArray[roomIndex].onceOnly = 1;
				}
			}
			if ("variableCheck" in RoomArray[roomIndex])
			{
				if (storyVariables[RoomArray[roomIndex].variableCheck] == 1)
				{
					RoomArray[roomIndex].text = RoomArray[roomIndex].textAlt;
				}
			}
			if ("variableSet" in RoomArray[roomIndex])
			{
				storyVariables[RoomArray[roomIndex].variableSet] = 1;
			}
			if ("fade" in RoomArray[roomIndex])
			{
				FadeTo(RoomArray[roomIndex].fade[0], RoomArray[roomIndex].fade[1]);
				delete RoomArray[roomIndex].fade;
			}
			if ("intro" in RoomArray[roomIndex])
			{
				input = RoomArray[roomIndex].intro + "<br/><br/>" + RoomArray[roomIndex].text;
				delete RoomArray[roomIndex].intro;
				return input;
			}
			return RoomArray[roomIndex].text;
		}
	}
	return "You can't do that";
}


/*
	This function checks the 2nd input word (The object) agaisnt those in the room you're in.
	Returns either the number of choice the object matches or -1.
*/
function ProcessObject(room, object)
{
	for (var i = 0; i < room.choices.length; i++)
	{
		var choice = room.choices[i].command;
		if (choice === object)
		{
			return i;
		}
	}
	return -1;
}


/*
	This function checks the 1st input word (The verb). Firstly it's compared to the
	word banks to and the base word is found. Then the base word is compared to the
	array of verbs that are applicable to the choice.
	Returns either true or false.
*/
function ProcessVerb(room, verb, choiceNum)
{
	var baseVerb;
	for (var i = 0; i < verbs.length; i++)
	{
		for (var j = 0; j < verbs[i].length; j++)
		{
			if (verb == verbs[i][j])
			{
				baseVerb = verbs[i][0];
				break;
			}
		}
	}
	for (var i = 0; i < room.choices[choiceNum].verbs.length; i++)
	{
		if (room.choices[choiceNum].verbs[i] == baseVerb)
		{
			return true;
		}
	}
	return false;
}

function FadeTo(background, text)
{
	document.body.style.setProperty('background-color', background);
	document.body.style.setProperty('--bg-color', "#" + background);
	document.body.style.setProperty('color', text);
	document.body.style.setProperty('--text-color', "#" + text);
}

function UpdateCursorPos()
{
	var fakeText = "";
	var cursor = document.getElementById('footer');
	console.log("Fake cursor location:" + cursor.selectionEnd);
	for (var i = 0; i < cursor.selectionEnd + 2; i++)
	{
		fakeText += "&nbsp";
	}
	document.getElementById('cursor').innerHTML = fakeText + "_";
}

function FocusFooter()
{
	document.getElementById('footer').focus();
	window.scrollTo(0, document.body.scrollHeight)
}

function footer_OnSelect()
{
	document.getElementById('footer').selectionStart = 	document.getElementById('footer').selectionEnd = -1;
	FocusFooter();
}
