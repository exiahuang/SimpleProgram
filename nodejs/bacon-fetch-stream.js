const Bacon = require("baconjs");
const fetch = require("node-fetch");

function getCommentsStream(postId) {
  const url = "https://jsonplaceholder.typicode.com/comments?postId=" + postId;
  const promise = fetch(url).then(response => response.json());
  const stream = Bacon.fromPromise(promise);
  return stream;
}

// getCommentsStream("1").onValue(data => console.log(data));

const stream = new Bacon.Bus();

const cb = data => {
  const emails = data.map(item => item.email);
  console.log(emails);
};
stream.flatMap(getCommentsStream).onValue(cb);

stream.push("1");
stream.push("2");
//stream.push("333");
