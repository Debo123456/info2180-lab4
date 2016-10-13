// JavaScript Document
window.onload = function main()
{
	
	var $wall = document.getElementsByClassName("boundary");
		
		
		
		for(var i = 0; i < $wall.length; i++)
		{
			$wall.item(i).addEventListener("mouseover", function lose()
		{
			for(var i = 0; i < $wall.length; i++)
			{		
				$wall.item(i).setAttribute("class", "boundary youlose");
			}
		} );
		
		
			
		}
		
}

