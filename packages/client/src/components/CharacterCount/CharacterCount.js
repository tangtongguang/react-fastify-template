import { useContext } from "react";
import { TextContext } from "../../App";

export default function CharacterCount({show}) {
  const text = useContext(TextContext);
  if(!show) {
    return null;
  }
  return (
    <div>
      Character Count: {text.length}
    </div>
  )
}