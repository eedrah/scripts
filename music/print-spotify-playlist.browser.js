tidyString = s => s.trim().replace(/\s+/g, ' ').replace(':', '')
artists = [].map.call(document.querySelectorAll('td.tl-artists'), n => n.textContent).map(tidyString)
titles = [].map.call(document.querySelectorAll('td.tl-name'), n => n.textContent).map(tidyString)
tracks = []
for (i = 0; i < titles.length; i++) {
  tracks[i] = artists[i] + ' ' + titles[i]
}
console.log(tracks.join('\n'))
