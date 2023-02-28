import React, { useState, createContext } from "react";

const TopicContext = createContext("");

function Topic(props) {
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleTopicChange = (e) => {
    setSelectedTopic(e.target.value);
  };

  return (
    <TopicContext.Provider value={selectedTopic}>
      <div>
        <p>Current topic: {selectedTopic}</p>
        <label htmlFor="options">Select a topic:</label>
        <select id="topics" value={selectedTopic} onChange={handleTopicChange}>
          <option value="Fruits">Fruits</option>
          <option value="Sport">Sport</option>
          <option value="Protein">Protein</option>
        </select>
        {props.children}
      </div>
    </TopicContext.Provider>
  );
}

export default Topic;
export { TopicContext };