$(document).ready(function(){
// ./js/books.json
	const apiUrl = "./js/books.json";
	const $list = $('.book-list');
	 $.ajax({
	        url : apiUrl,
	        dataType : 'json'
	    })
	.done((res) => {
	    	 res.forEach(el => {
	    	 	$list.append(`<tr>`)
	           	$list.append(`<td class = "id"><p>${el.ident}</p></td>`)
	       		$list.append(`<td class = "title"><p>${el.tytul}</p></td>`)
	       		$list.append(`<td class = "author"><p>${el.autor}</p></td>`)
	       		$list.append(`<td class = "price"><p>${el.cena}</p></td>`)
	       		$list.append(`<td class = "type"><p>${el.typ}</p></td>`)
	       		$list.append(`<td = class = "status"><p>${el.status}</p></td>`)
	       		$list.append(`<td class = "board"><p><img src = "https://static01.helion.com.pl/global/okladki/326x466/${el.ident}.jpg"></p></td></tr>`)
	    	 	

	       	})
	})

});