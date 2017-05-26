Vue.component('component-anno-list',{
	data: function() {
		return {
			annolist:[]
		}
	},
	mounted: function(){
	var xmlhttp = new XMLHttpRequest();
	var url = "xmlhttp/annolist.txt";
	xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
				this.annolist = this.response.body; 
		    }
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	}


})

new Vue({
	el: '#app',
})
