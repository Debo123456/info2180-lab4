// JavaScript Document
window.onload = function main()
{
	
	var $wall = document.getElementsByClassName("boundary");
	var $end = document.getElementById("end");
	var $start = document.getElementById("start");	
	var touchedWall = false;
	var $status = document.getElementById("status");
	var $maze = document.getElementById("maze");
		
	var youLose = function($wall)
	{
		touchedWall = true;
		for(var i = 0; i < $wall.length; i++)
		{		
			$wall.item(i).setAttribute("class", "boundary youlose");
		}
	}
	
	var start = function(evt)
	{
		touchedWall = false;
		console.log(touchedWall);
		for(var i = 0; i < $wall.length; i++)
		{		
			$wall.item(i).setAttribute("class", "boundary");
		}
		
		for(var i = 0; i < $wall.length; i++)
		{
			$wall.item(i).addEventListener("mouseover", function()
			{
				youLose($wall);
			});
		}
		
		document.addEventListener("mouseover", function(){
			if(event.clientX < $maze.offsetLeft || event.clientX > $maze.offsetRight)
			{
				youLose($wall);
			}
		});
	}
	
	var end = function()
	{
		console.log(touchedWall);
		if(touchedWall == false)
		{
			$status.innerHTML = "Succesful completion of maze";
			$status.style.color = "green";
		}
		else
		{
			$status.innerHTML = "You lost, try again";
			$status.style.color = "red";
		}
	}
	
	
	
	
	var game = function()
	{
		
		
		$start.addEventListener("click", function()
		{
			start();
		});
		
		$end.addEventListener("mouseover", function()
		{
			end();
		});
	}
	
	game();
}

