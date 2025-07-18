import { useState, useEffect } from "react";
import send from "../../assets/move.png";
import "./Assistant.css";
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Assistant() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hi there! I'm your Quran Assistant. Ask me anything about Islam, the Quran, Hadith, or general guidance.",
    },
  ]);

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  });

  const processPrompt = async (content) => {
    if (!content.trim()) return;
    setPrompt("");
    setMessages((prev) => [...prev, { sender: "user", text: content }]);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: content,
        config: {
          thinkingConfig: {
            thinkingBudget: 0,
          },
        },
      });

      setMessages((prev) => [...prev, { sender: "ai", text: response.text }]);
    } catch (error) {
      console.error("Something went wrong", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "❌ Sorry, I couldn't fetch a response right now.",
        },
      ]);
    }
  };

  return (
    <div className="assistant-wrapper">
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
          placeholder="Ask something..."
          onChange={handleInputChange}
          value={prompt}
          className="prompt-input"
          onKeyDown={(e) => {
            if (e.key === "Enter") processPrompt(prompt);
          }}
        />
        <img
          onClick={() => processPrompt(prompt)}
          className="send-icon"
          src={send}
          alt="send"
        />
      </div>
    </div>
  );
}
