function getTracks () {
  var tidyString = s => s.trim().replace(/\s+/g, ' ').replace(':', '')
  var playlistName = tidyString(document.querySelector('h1.main').textContent)
  var artists = [].map.call(document.querySelectorAll('td.tl-artists'), n => n.textContent).map(tidyString)
  var titles = [].map.call(document.querySelectorAll('td.tl-name'), n => n.textContent).map(tidyString)
  var tracks = []
  for (var i = 0; i < titles.length; i++) {
    tracks[i] = artists[i] + ' ' + titles[i]
  }
  prompt(null, playlistName + '\n' + tracks.join('\n'))
}
