# Is useful: cat | ./download-song.sh
${BASH_SOURCE%/*}/../../../apps/youtube-dl.exe --ffmpeg-location ${BASH_SOURCE%/*}/../../../apps/ffmpeg-20160828-a37e6dd-win64-static/bin/ffmpeg.exe  --format bestaudio --audio-format mp3 --extract-audio --output '%(title)s.%(ext)s' --default-search ytsearch --batch-file -
