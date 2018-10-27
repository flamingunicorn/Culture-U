function circle_fl_click() {
    document.getElementById("circle_fl").style.boxShadow = "none";
}

function toggle_div(id) {



	var divelement = doc.getElementById(id);

	console.log(divelement);

	if(divelement.style.display == 'none') {
		divelement.style.display = 'block';
	} else {
		divelement.style.display = 'none';
	}

} 