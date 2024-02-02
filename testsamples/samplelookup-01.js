export default function request(requestId) {
  // this object will be serialized to JSON and sent in the body of the request
  return {
    "Data": [[1, 0.7, -0.3, 0.6], [0.1, -0.7, 0.5, 0.9, -0.6, -0.9, -0.3, 0, 0.1, -0.7, 0.5, 0.9, 0.6, 0.9, 0.3, 0]]
  }
}