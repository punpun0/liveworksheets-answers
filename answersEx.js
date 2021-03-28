console.log(
  `Liveworksheets.com answers
  
Choice answers have a star (choose:A/*B/C) next to the correct answer.
Some answers (e.g. drag & drop) have been removed because they don't work and are removed!
So the answer table could not be going in succession.
@punpun 2021
`);

// entry point, all the answers are stored in contenidojson variable
var data = JSON.parse(contenidojson);
console.log(data);
var results = [];
var drag = [];
var dragResults = "";

for (var i = 0, len = data.length; i < len; i++) {
  if (data[i][0].startsWith("drag")) {
    // grab answer and X axis cooordinates
    drag.push([data[i][0], data[i][2]]);
  } else if (data[i][0].startsWith("drop") && (data[i + 1][0].startsWith("drop") === false)) {
    // generate number sequence for the drag & drop answers
    drag.sort(function(a, b) {
      return a[1]-b[1];
    });
    for (var j = 0, l = drag.length; j < l; j++) {
      dragResults += `${drag[j][0].replace("drag:"," ")}`;
    }
    dragResults += "\n";
    drag = [];
    continue;
  }
  // skip unnecesary info and answers that are not working or haven't been tested yet
  else if (data[i][0].startsWith('playmp3') || data[i][0].startsWith('join') || data[i][0].startsWith('drop') || data[i][0].startsWith('select') || data[i][0].startsWith('tick') || data[i][0].startsWith('link') || data[i][0].startsWith('speak') || data[i][0].startsWith('listen') || data[i][0].startsWith('value')) {
    continue;
  } else {
    // grab the answer, X and Y axis coordinates
    results.push([data[i][0], data[i][1], data[i][2]]);
  }
}

// sort by Y axis
results.sort(function(a, b) {
  return a[1]-b[1];
});

// sort by X axis
results.sort(function(a, b) {
  if((a[1] >= b[1] && a[2] >= b[2])){
    return 1;
  }
  return 0;
});

// print results
if (dragResults.length !== 0) {
  console.log(`Drag & Drop answers (experimental):\n${dragResults}`);
}

console.log("Other answer types:");
for (var i = 0; i < results.length; i++) {
  console.log(`${i+1}. ${results[i][0].replaceAll("$","'")}`);
}
