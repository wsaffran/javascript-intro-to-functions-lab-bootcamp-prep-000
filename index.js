function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

sayHiToGrandma(string) {
  var uppercase = "HELLO!"
  var verdict = uppercase.toUpperCase() === uppercase
  if (verdict)
    return "I can't hear you!"
}
