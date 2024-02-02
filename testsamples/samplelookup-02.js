export default function request(requestId) {
  // this object will be serialized to JSON and sent in the body of the request
  for (var i=1e6, lookupTable=[]; i--;) {
    lookupTable.push(Math.random()*2-1);
  }
  function l() {
    return ++i >= lookupTable.length ? lookupTable[i=0] : lookupTable[i];
  }
  return {
    "Data": [[l(), l(), l(), l()], [l(), l(), l(), l(), l(), l(), l(), l(), l(), l(), l(), l(), l(), l(), l(), l()]]
  }
}