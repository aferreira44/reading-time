function calcReadingTime () {
  // Get text, replace multiple  spaces with one space, trim spaces and split words in an array
  const words = document.getElementById('textarea').value.replace(/ +/g, ' ').trim().split(' ')

  if (words[0] !== '') {
    const calc = words.length / 200
    const minutes = Math.trunc(calc)
    const seconds = Math.trunc((calc % 1).toFixed(4) * 0.6 * 100)

    document.getElementById('result').innerHTML = '<b>Estimated reading time:</b> ' + minutes + ' minutes and ' + seconds + ' seconds. Contains ' + words.length + ' words'
  }
}

function resetForm () {
  document.getElementById('textarea').value = ''
  document.getElementById('result').innerHTML = 'Please <b>enter/paste</b> your text to estimate the reading time.'
}
