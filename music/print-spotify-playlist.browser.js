getTracks = (function () {
  PLAYLIST_LOADING_TIME = 5000
  PLAYLIST_COLLECTION_TIME = 1500

  function go () {
    try {
      var newPageDoc = window.open().document
      newPageDoc.body.innerText = 'Loading...'
      var callback = (s => newPageDoc.body.innerText = s)
      iteratePlaylists(callback)
    } catch (e) {
      alert('Please allow popups before continuing')
    }
  }

  function iteratePlaylists (callback) {
    var results = []
    var playlistLinks = querySelectorAllPossibleFrames('[data-ta-id="list-playlist"] a')
    playlistLinks.concat('end').reduce((timeout, l) => {
      if (l === 'end') {
        setTimeout(function () {
          callback(results.join('\n\n'))
        }, timeout)
      } else {
        setTimeout(function () {
          l.click()
          setTimeout(function () {
            results.push(getCurrentTrackList())
          }, PLAYLIST_LOADING_TIME)
        }, timeout)
      }
      return timeout + PLAYLIST_LOADING_TIME + PLAYLIST_COLLECTION_TIME
    }, 0)
    return results
  }

  function canAccessFrame (frame) {
    var html = null;
    try {
      var html = frame.document.body.innerHTML
    } catch (err) {}
    return (html !== null)
  }

  function querySelectorAllPossibleFrames (selector) {
    query = [].map.call(
      window.frames, 
      f => canAccessFrame(f) ? f.document.querySelectorAll(selector) : []
    )
    query.push(document.querySelectorAll(selector))
    return query.reduce((aggregate, nodeList) => {
      [].forEach.call(nodeList, n => aggregate.push(n))
      return aggregate
    }, [])
  }

  function tidyString (s) {
    return s.trim().replace(/\s+/g, ' ').replace(':', '')
  }

  function getCurrentTrackList () {
    var playlistName = tidyString(querySelectorAllPossibleFrames ('h1.main')[0].textContent)
    var artists = [].map.call(querySelectorAllPossibleFrames ('td.tl-artists'), n => n.textContent).map(tidyString)
    var titles = [].map.call(querySelectorAllPossibleFrames ('td.tl-name'), n => n.textContent).map(tidyString)
    var tracks = []
    for (var i = 0; i < titles.length; i++) {
      tracks[i] = artists[i] + ' ' + titles[i]
    }
    return playlistName + '\n' + tracks.join('\n')
  }

  return go
})()

results = getTracks()
