// should be used browser inspector console

let location = new URL('https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container');

console.log(location.toString(), location.href);
console.log(location);
console.log(location.protocol);
console.log(location.host);
console.log(location.port);
console.log(location.pathname);
console.log(location.search);
console.log(location.hash);

