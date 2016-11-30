cat /dev/clipboard | {
  is_in_playlist=false
  while IFS= read -r ROWW; do
    ROW="$(printf '%s' "$ROWW" | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')"
    if [ "$is_in_playlist" = false ]; then 
      if [[ -n "$ROW" ]]; then
        mkdir "$ROW"
        cd "$ROW"
        is_in_playlist=true
      fi
    else 
      if [[ -n "$ROW" ]]; then
        printf '%s\n' "$ROW" >> ref.txt
      else
        is_in_playlist=false
        cd ..
      fi
    fi
  done
}
