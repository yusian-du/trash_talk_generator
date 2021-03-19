function rubbishWord(options) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  let collection = []

  if (options == 'engineer') {
    let career = randomWord(task.engineer)
    let randomPhrase = randomWord(phrase)
    collection = collection.concat(career).concat(randomPhrase)
    return `身為一個工程師，${collection}`
  }
  if (options == 'designer') {
    let career = randomWord(task.designer)
    let randomPhrase = randomWord(phrase)
    collection = collection.concat(career).concat(randomPhrase)
    return `身為一個設計師，${collection}`
  }
  if (options == 'entrepreneur') {
    let career = randomWord(task.entrepreneur)
    let randomPhrase = randomWord(phrase)
    collection = collection.concat(career).concat(randomPhrase)
    return `身為一個創業家，${collection}`
  } else {
    return `想當哪個職業呢?`
  }
}

function randomWord(word) {
  const randomIndex = Math.floor(Math.random() * word.length)
  return word[randomIndex]
}

module.exports = rubbishWord