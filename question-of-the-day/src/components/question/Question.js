import React, { useContext } from "react";
import { TopicContext } from "../topic/Topic";

function Question() {
  const selectedTopic = useContext(TopicContext);
  let fruits = ["Is a banana yellow?", "Is a strawberry red?"];
  let sports = ["Is football a popular sport?", "Is Volleyball played on a football field?"];
  let protein = ["Is protein useful for the body", "Is protein a vitamin?"];

  const renderQuestion = () => {
    switch(selectedTopic) {
      case 'Fruits':
        return (
          <div>{fruits[0]}</div>
        )
      case 'Sport':
        return (
          <div>{sports[0]}</div>
        )
      case 'Protein':
        return (
          <div>{protein[0]}</div>
        )
      default:
        return (
          <div>No questions available for selected topic</div>
        )
    }
  }

  return (
    <div>
      {renderQuestion()}
    </div>
  );
}

export default Question;