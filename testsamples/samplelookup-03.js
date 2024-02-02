export default function request(requestId) {
  // this object will be serialized to JSON and sent in the body of the request
  function l() {
    return Math.random()*2-1;
  }
  return {
    "Data": [[l(), l(), l(), l()], [l(), l(), l(), l(), l(), l(), l(), l(), l(), l(), l(), l(), l(), l(), l(), l()]]
  }
}