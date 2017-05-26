new Vue({
	el: '#app',
	data: {
		annolist:[]
	},
	mounted: function ()	{
	var self = this;
	var xmlhttp = new XMLHttpRequest();
	var url = "xmlhttp/annolist.txt";
	xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
		self.annolist = self.responseText;
		console.log(self.annolist)
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	}

})
