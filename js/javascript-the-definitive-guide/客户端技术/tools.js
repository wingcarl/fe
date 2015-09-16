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

function getScrollOffsets(w) {
	w = w || window;
	if(w.pageXOffset != null )return {x:w.pageXOffset,y:w.pageYOffset};
	var d = w.document;
	if(document.compatMode == "CSS1Compat")
		return {x:d.documentElement.scrollLeft,y:d.documentElement.scrollTop};

	return {x:d.body.scrollLeft,y:d.body.scrollTop};
}

function getViewportSize(w){
	w = w || window;
	if(w.innerWidth != null) return {w:w.innerWidth,h:w.innerHeight};

	var d = w.document;
	if(document.compatMode == "CSS1Compat")
		return {w:d.documentElement.clientWidth,h:w.documentElement.clientHeight};
	return {w:d.body.clientWidth,h:d.body.clientHeight};
}

function getSelectedText(){
	if(window.getSelection)
		return window.getSelection().toString();
	else if(document.selection){
		return document.selection.createRange().text;
	}
}