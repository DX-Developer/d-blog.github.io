const searchBar = document.getElementById('search-bar');


function toggle(){
	if (searchBar.style.display == 'inline-block') {
		searchBar.style.display = 'none'
	}
	else{
		searchBar.style.display = 'inline-block'
	}
}


const upBtn = document.getElementById('upside-btn');

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		upBtn.style.display = 'block'
	}
	else{
		upBtn.style.display = 'none'
	}
}

function goingUp(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}



const searchBar1 = document.getElementById('searchBar1');


function toggle1(){
	if (searchBar1.style.display == 'inline-block') {
		searchBar1.style.display = 'none'
	}
	else{
		searchBar1.style.display = 'inline-block'
	}
}