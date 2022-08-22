import { useState } from "react";

export function useChoices(openItem) {
  const [choice, setChoice] = useState(openItem.choice);

  function changeChoices(e) {
    setChoice(e.target.value);
  }

  return { choice, changeChoices }
}