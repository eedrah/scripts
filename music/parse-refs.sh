for f in */ref.txt; do (d=`dirname "$f"`; cd "$d"; cat ref.txt | ${BASH_SOURCE%/*}/download-song.sh; rm ref.txt); done
