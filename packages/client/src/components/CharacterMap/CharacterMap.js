import { memo, useContext } from "react";
import { TextContext } from "../../App";
function itemize(text) {
  const letters = text.split('')
    .filter(l => l!== ' ')
    .reduce((collection,item) => {
      const letter = item.toLowerCase();
      return {
        ...collection,
        [letter]: (collection[letter] || 0) + 1
      }
    },{})

    console.log(letters);
    return Object.entries(letters)
      .sort((a,b) => b[1] - a[1])
}
function CharacterMap({show}) {
  const text = useContext(TextContext);
  if(!show) {
    return null;
  }
  return (
    <div>
      Character Count: {itemize(text).map(character => (
        <div key={character[0]}>
          {character[0]}:{character[1]}
          </div>
      ))}
    </div>
  )
}

export default memo(CharacterMap)