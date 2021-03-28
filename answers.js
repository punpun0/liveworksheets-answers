console.log(
  `Liveworksheets.com answers

Choice answers have a star (choose:A/*B/C) next to the correct answer.
Some answers (e.g. drag & drop) have been removed because they don't work and are removed!
So the answer table could not be going in succession.

@punpun 2021`
);

// entry point, all the answers are stored in contenidojson variable
var data = contenidojson;
var results = [];

for (var i = 0, len = data.length; i < len; i++) {
  // skip unnecesary info and answers that are not working or haven't been tested yet
  if (data[i][0].startsWith('playmp3') || data[i][0].startsWith('join') || data[i][0].startsWith('drag') || data[i][0].startsWith('drop') || data[i][0].startsWith('select') || data[i][0].startsWith('tick') || data[i][0].startsWith('link') || data[i][0].startsWith('speak') || data[i][0].startsWith('listen') || data[i][0].startsWith('value')) {
    continue;
  } else {
    // grab the answer and the Y axis coordinates
    results.push([data[i][0], data[i][1]]);
  }
}

// sort by Y axis
results.sort(function(a, b) {
  return a[1] - b[1]
});

// print results
for (var i = 0; i < results.length; i++) {
  console.log(`${i+1}. ${results[i][0].replaceAll("$","'")}`);
}
