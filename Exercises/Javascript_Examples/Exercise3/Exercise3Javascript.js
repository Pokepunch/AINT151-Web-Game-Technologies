var isLightOn = false;
function ToggleLight()
{
	if (isLightOn == false)
	{
		isLightOn = true;
		document.getElementById('lightBulb').src = "img/bulb-on.png";
	}
	else
	{
		isLightOn = false;
		document.getElementById('lightBulb').src = "img/bulb-off.png";
	}
}

function AddNumbers(num1, num2)
{
	document.getElementById("numbers").innerHTML = num1 + num2;
}
