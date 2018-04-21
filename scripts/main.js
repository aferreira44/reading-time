function calcReadingTime () {
  // Get text, replace multiple  spaces with one space, trim spaces and split words in an array
  const words = document.getElementById('textarea').value.replace(/ +/g, ' ').trim().split(' ')

  if (words[0] !== '') {
    const calcMinutes = words.length / 200
    const minutes = Math.trunc(calcMinutes)
    const seconds = Math.trunc((calcMinutes % 1).toFixed(4) * 60)

    document.getElementById('result').innerHTML =
      '<b>Estimated reading time:</b><br />' +
      minutes + ' minutes and ' + seconds + ' seconds<br />' +
      'Contains ' + words.length + ' words'
  }
}

function resetForm () {
  document.getElementById('textarea').value = ''
  document.getElementById('result').innerHTML = 'Please <b>enter/paste</b> your text'
}
