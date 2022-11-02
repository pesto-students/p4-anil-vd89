const { log } = require('console')

const vowelCount = (statement) => {
  const vowelCheck = new Map([
    ["a", 0],
    ["e", 0],
    ["i", 0],
    ["o", 0],
    ["u", 0],
  ])
  const _phrase = statement.trim().toLowerCase();
  for (const char of _phrase) {
    if (vowelCheck.has(char)) {
      const count = vowelCheck.get(char) ?? 0;
      vowelCheck.set(char, count + 1);
    }
  }
  return vowelCheck
}

const sta = 'I want to work as a strong developer with Good knowledge in JS'
log('VowelCheck ->>>>>>', vowelCount(sta))

/*
 VowelCheck ->>>>>> Map(5) { 'a' => 3, 'e' => 5, 'i' => 3, 'o' => 7, 'u' => 0 }
 */