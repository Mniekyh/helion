$(document).ready(function () {
	var my_url = "./js/books.json";
	$('#dtBasicExample').DataTable({
		
		ajax:{
			url:my_url,
			dataSrc: "",
			method: "GET",
	    	xhrFields: {
	        withCredentials: true,
	        dataType:'json'
	    	}
	    },
		columns:
		[
			{data: "ident"},
			{data: "tytul"},
			{data: "autor"},
			{data: "cena"},
			{data: "typ"},
			{data: "status"}

		]

	
	});
	

});

