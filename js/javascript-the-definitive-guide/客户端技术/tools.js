function onLoad(f){
	if(onLoad.loaded)
		window.setTimeot(f,0);
	else if(window.addEventListener)
		window.addEventListener("load",f,false);
	else if(window.attachEvent)
		window.attachEvent("onload",f);
}

onLoad.loaded = false;
onLoad(function(){onLoad.loaded = true;})