function beweeg(){
	var el = document.getElementById("blokje");
	var moveh = 0;
	var movev = 0;
	var turn = 0;
	var interval = setInterval(loop, 5);
	
	function loop(){
		if(turn == 0){
				if(moveh == 350)
					{
						if(movev == 350)
							{
								turn = 1;
							}

							movev++
							el.style.top = movev+"px";

					}
				else{
					moveh++;
					el.style.left = moveh+"px";
				}
		}
		else{
			if(moveh == 0){
				
			if(movev == 0)
				{
					turn = 0;
				}
			else{
				movev--;
				el.style.top = movev+"px";
			}
			}
			else{
				
			moveh--;
			el.style.left = moveh+"px";
			}
		}
	}
}


