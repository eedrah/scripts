artists = [].map.call(document.querySelectorAll('td.tl-artists'), n => n.textContent).map(s => s.trim().replace(/\s+/g, ' '))
titles = [].map.call(document.querySelectorAll('td.tl-name'), n => n.textContent).map(s => s.trim().replace(/\s+/g, ' '))
tracks = []
for (i = 0; i < titles.length; i++) {
  tracks[i] = titles[i] + ' ' + artists[i]
}
console.log(tracks.join('\n'))
