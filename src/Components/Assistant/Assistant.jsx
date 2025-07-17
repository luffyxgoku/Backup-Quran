import { useState } from "react";
import send from "../../assets/move.png";
import "./Assistant.css";
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Assistant() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  });
  const processPrompt = async (content) => {
    setPrompt("");
    try {
      setMessages((prev) => [...prev, { sender: "user", text: content }]);

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: content,
        config: {
          thinkingConfig: {
            thinkingBudget: 0,
          },
        },
      });
      console.log("RESPONSE = ", response.text);
      setMessages((prev) => [...prev, { sender: "ai", text: response.text }]);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  return (
    <>
      <div className="chat-container">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "user" ? "user" : "ai"}`}
          >
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {msg.text}
            </ReactMarkdown>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your query"
          onChange={handleInputChange}
          value={prompt}
          className="prompt-input"
        />
        <img
          onClick={() => processPrompt(prompt)}
          className="send-icon"
          src={send}
          alt="send"
        />
      </div>
    </>
  );
}
