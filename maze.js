// JavaScript Document
window.onload = function main()
{
	//All required variable
	var $wall = document.getElementsByClassName("boundary");
	var $end = document.getElementById("end");
	var $start = document.getElementById("start");	
	var touchedWall = false;
	var gameCompleted = false;
	var $status = document.getElementById("status");
	var $maze = document.getElementById("maze");
	
	//Change boundaries to red when mouse touches them, set touchedWall flag to 'true'	
	var youLose = function($wall)
	{
		touchedWall = true;
		for(var i = 0; i < $wall.length; i++)
		{		
			$wall.item(i).setAttribute("class", "boundary youlose");
		}
		
		$status.innerHTML = "You lost, try again";
		$status.style.color = "red";
	}
	
	//function for starting the game
	var start = function(evt)
	{
		gameCompleted = false;
		
		//reset toucheWall flag to false 
		touchedWall = false;
		
		//Reset boundaries to original color
		for(var i = 0; i < $wall.length; i++)
		{		
			$wall.item(i).setAttribute("class", "boundary");
		}
		
		//only allow boundaries to turn red on hover if "S" was clicked
		for(var i = 0; i < $wall.length; i++)
		{
			$wall.item(i).addEventListener("mouseover", function()
			{
				if(!gameCompleted)
				{
					youLose($wall);
				}
			});
		}
		
		$end.addEventListener("mouseover", function()
		{
			end();
			gameCompleted = true;
		});
		
		$status.innerHTML = "Good Luck!!!";
		$status.style.color = "black";
		
		//Set boundaries to red if player moves the mouse outsied the box
		//Only checked against the left and right of the maze since its not posibble for user to exit the maze through the top or bottom without first touching a boundary.
		document.addEventListener("mouseover", function(){
			if(!gameCompleted)
			{
				if(event.clientX < $maze.offsetLeft || event.clientX > $maze.offsetRight)
				{
					youLose($wall);
				}
			}
		});
	}
	
	//Verified if the maze was completed or if user lost the game
	var end = function()
	{
		if(touchedWall == false)
		{
			$status.innerHTML = "Succesful completion of maze";
			$status.style.color = "green";
		}
	}
	
	
	
	//Implements functions to start and end the game
	var game = function()
	{
		
		
		$start.addEventListener("click", function()
		{
			start();
		});
		
		
	}
	
	//Initiates game function
	game();
}

