import { useState } from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    processPrompt(prompt);
  };

  return (
    <div className="assistant-container">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message ${
            msg.sender === "ai" ? "ai-message" : "user-message"
          }`}
        >
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{msg.text}</ReactMarkdown>
        </div>
      ))}

      <form className="input-form" onSubmit={handleSubmit}>
        <div className="textarea-wrapper">
          <textarea
            className="chat-textarea"
            value={prompt}
            onChange={handleInputChange}
            placeholder="Ask your question..."
          />
          <button type="submit" className="send-btn">
            <img src={send} alt="Send" />
          </button>
        </div>
      </form>
    </div>
  );
}
