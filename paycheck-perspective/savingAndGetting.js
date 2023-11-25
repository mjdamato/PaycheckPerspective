import React from "react";

class linksStuff{
	savedJobs = 0;

	saveLink(){
	const link = location.href;
	this.savedJobs++;
	alert("rahh: " + link);
}

	deleteLink(){
	this.savedJobs--;
	}
}