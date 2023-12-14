import React from "react";
import Card from "./Card";
function createCard(emojiTerm) {
  return (
    <Card
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
    />
  );
}
export default createCard;
