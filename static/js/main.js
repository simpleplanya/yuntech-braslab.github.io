new Vue({
	el: '#app',
	data: {
		annolist:[]
	},
	mounted: function ()	{
	var self = this;
	var xmlhttp = new XMLHttpRequest();
	var url = "https://yuntech-braslab.github.io/xmlhttp/annolist.txt";
	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		self.annolist = xmlhttp.responseText;
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	}

})
