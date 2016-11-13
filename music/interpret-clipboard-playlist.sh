folder=`head -1 /dev/clipboard`
mkdir "$folder"
cd "$folder"
tail -n +2 /dev/clipboard > ref.txt
cd ..
