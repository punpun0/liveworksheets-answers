var data = contenidojson;
var results = [];

for (var i = 0, len = data.length; i < len; i++) {
  if (data[i][0].startsWith("playmp3") || data[i][0].startsWith("link") || data[i][0].startsWith("drag") || data[i][0].startsWith("drop") || data[i][0].startsWith("select")){
    continue;
  } else {
    results.push([data[i][0],data[i][1]]);
  }
}
results.sort(function(a,b){return a[1]-b[1]});

console.log('Liveworksheets.com Atsakymai\nAtsakymus per pasvirąjį brūkšnį (/) reikės atrinkti pačiam.\nPasirinkimo atsakymai (choose:A/B/C) turi žvaigždutę (*) prie teisingo atsakymo.\nDrag & drop atsakymai neveikia ir yra panaikinti! Todėl atsakymų lentelė gali eiti ne iš eilės.\npunpun @2021');

for (var i = 0; i < results.length; i++){
	console.log(`${i+1}. ${results[i][0].replaceAll("$","'")}`);
}
