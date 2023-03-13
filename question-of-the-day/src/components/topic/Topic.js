import React, { useState, createContext } from "react";
import "./Topic.css";

const TopicContext = createContext("");

function Topic(props) {
  const [selectedTopic, setSelectedTopic] = useState("No topic selected");

  const handleTopicChange = (e) => {
    setSelectedTopic(e.target.value);
  };

  return (
    <TopicContext.Provider value={selectedTopic}>
      <div>
        <div className="current-topic">
        <p>Current topic: {selectedTopic}</p>
        </div>
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