/**
 * Created by alper on 14-Jan-19.
 */

var evraks = [];
$('span.file').each(function (key, name) {
	evraks.push($(name).attr('evrak_id'));
});
$('div', {id: 'links'}).appendTo('body');
var newevraks = Array.from(new Set(evraks));
newevraks.length;
var last = 0;
var dosyaId = '000000000'; // dosyaId
var test = window.setInterval(function () {
	//evraks.forEach(async function(a,key){
	a = newevraks[last];
	last++;
	if (last >= newevraks.length) {
		clearInterval(test);
		console.log('bitti');
	} else {
		console.log(last);
		var url = 'https://vatandas.uyap.gov.tr/main/jsp/vatandas/download_document.uyap?evrakId=' + a + '&dosyaId=' + dosyaId + '&yargiTuru=1';

		var link = document.createElement('a');
		link.href = url;
		//link.id='link'+key;
		document.body.appendChild(link);
		link.click();
	}
	//});
}, 2000);

var link = $('<a>', {
	href: url,
	text: 'indirlink',
	title: 'indirlink'
});
link.appendTo('body .modal-body');

var link = document.createElement('a');
link.href = url;
document.body.appendChild(link);
link.click();

var link = $('<a>', {
	href: url,
	text: a
});
link.appendTo('body').click();