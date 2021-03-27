# Liveworksheets Answers
Displays answers for liveworksheets.com

Hit F12 in your browser and enter this in the console:

```js
fetch("https://raw.githubusercontent.com/punpun0/liveworksheets-answers/main/answers.js")
.then((res) => res.text()
.then((t) => eval(t)))
```

answersEx.js has experimental features that have not been fully tested! Use at your own risk.
