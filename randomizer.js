var run = function(){ 
	while(document.getElementById('content').firstChild){ 
		document.getElementById('content').removeChild(document.getElementById('content').firstChild); 
	}
	var x = document.getElementById("many").value; 
	var list = grabber(); 
	main(x, list); 
}
var main = function(x, list){ 
	var divs = {}; 
	for(var i = 0; i < x; i ++){ 
		divs[i] = document.createElement('div'); 
		var l = document.createElement('ol'); 
		divs[i].appendChild(l); 
	}	
	var size = Math.floor(list.length / x);  
	var left = list.length % x ; 
	var c = 0; 
	for(var j = 0; j < x; j++){
		for(var i = 0; i < size; i++){
			var index = Math.floor(Math.random()*list.length); 
			var text = list[index];
			list.splice(index,1 );	
			var tn = document.createTextNode(text); 
			var li = document.createElement('li'); 
			li.appendChild(tn); 
			divs[j].childNodes[0].appendChild(li); 
		
		}
		if(left  > 0){ 
			var index = Math.floor(Math.random()*list.length); 
			var text = list[index];
			list.splice(index, 1);	
			var tn = document.createTextNode(text); 
			var li = document.createElement('li'); 
			li.appendChild(tn); 
			divs[j].childNodes[0].appendChild(li); 
			left--; 
		}
		document.getElementById('content').appendChild(divs[j]); 
	}
}
grabber = function(){ 
	var m = document.getElementsByName('list'); 
	var list = m[0].value.split("\n"); 
	return list
}
