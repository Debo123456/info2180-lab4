// JavaScript Document
window.onload = function main()
{
	
	var $wall = document.getElementsByClassName("boundary");
	var $end = document.getElementById("end");	
	var touchedWall = false;
		
		
		for(var i = 0; i < $wall.length; i++)
		{
			$wall.item(i).addEventListener("mouseover", function()
			{
				for(var i = 0; i < $wall.length; i++)
				{		
					$wall.item(i).setAttribute("class", "boundary youlose");
				}
			});
		}
		
		$end.addEventListener("mouseover", function()
		{
			if(touchedWall === false)
			{
				alert("Succesful completion of maze");
			}
			else
			{
				alert("Unsuccesful, try again");
			}
		});
		
}

