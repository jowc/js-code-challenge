//return word with highest number of letter repeatation

countNumbers = (word) => {
  const splittedWord = word.split(" ")
  const wordObject = splittedWord.map((word) => {
    let tempItems = word.toLowerCase().split("")
    return tempItems.reduce(
      (acc, cur) => {
        return acc
      },
      { max: 1, word }
    )
  })
  return wordObject
}

console.log(countNumbers("I have a lot of code challenges to work on."))
