import React, { createContext, useState } from "react";
import run from "../config/gemini.js";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const onSent = async (prompt) => {
    setLoading(true);
    setResultData(""); // Clear previous result data
    try {
      const response = await run(prompt);
      // Formatting response
      let responseArray = response.split("**");
      let newResponse = "";
      for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += responseArray[i];
        } else {
          newResponse += "<b>" + responseArray[i] + "</b>";
        }
      }
      let newResponse2 = newResponse.split("*").join("</br>");
      setResultData(newResponse2);
      setShowResult(true);
      setPrevPrompts((prev) => [...prev, prompt]);
      setRecentPrompt(prompt);
    } catch (error) {
      console.error("Error sending prompt:", error);
    } finally {
      setLoading(false);
    }
  };

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    onSent,
    authenticated,
    setAuthenticated,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

// Ensure you export the ContextProvider as the default export
export default ContextProvider;
