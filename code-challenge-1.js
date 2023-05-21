//return word with highest number of letter repeatation

countNumbers = (word) => {
  const splittedWord = word.split(" ")
  const wordObject = splittedWord.map((word) => {
    let tempItems = word.toLowerCase().split("")
    return tempItems.reduce(
      (acc, cur) => {
        acc[cur] = acc[cur] ? acc[cur] + 1 : 1
        if (acc[cur] > acc.max) acc.max = acc[cur]
        return acc
      },
      { max: 1, word }
    )
  })
  let max = 1
  wordObject.forEach((item) => {
    if (item.max > max) {
      max = item.max
    }
  })
  let pickedWords = wordObject.filter((item) => item.max === max)
  if (pickedWords.length > 1) {
    return pickedWords.map(({ word, ...item }) => word)
  }
  return pickedWords[0]["word"]
}

console.log(countNumbers("I have a lot of code challenges to worrk oon."))
