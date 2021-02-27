import { useContext } from "react";
import { TextContext } from "../../App";

export default function WordCount({show}) {
  const text = useContext(TextContext);

  if(!show) {
    return null;
  }

  return (
    <div>
    Word Count: { text.split(' ').length}
    </div>
  )
}