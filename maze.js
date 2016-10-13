// JavaScript Document
window.onload = function main()
{
	
	var $wall = document.getElementsByClassName("boundary");
	var $end = document.getElementById("end");
	var $start = document.getElementById("start");	
	var touchedWall = false;
	var $status = document.getElementById("status");
		
		
		for(var i = 0; i < $wall.length; i++)
		{
			$wall.item(i).addEventListener("mouseover", function()
			{
				touchedWall = true;
				for(var i = 0; i < $wall.length; i++)
				{		
					$wall.item(i).setAttribute("class", "boundary youlose");
				}
			});
		}
		
		$start.addEventListener("click", function()
		{
			for(var i = 0; i < $wall.length; i++)
			{		
				$wall.item(i).setAttribute("class", "boundary");
			}
			touchedWall = false;
		});
		
		$end.addEventListener("mouseover", function()
		{
			if(touchedWall === false)
			{
				$status.innerHTML = "Succesful completion of maze";
				$status.style.color = "green";
			}
			else
			{
				$status.innerHTML = "You lost, try again";
				$status.style.color = "red";
			}
		});
		
}

