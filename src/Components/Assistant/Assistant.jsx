import { useState } from "react";
import send from "../../assets/move.png";
import "./Assistant.css";
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useTheme } from "../../Context/ThemeContext";

export default function Assistant() {
  const { theme } = useTheme();

  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: `As-salamu alaykum!
I’m your Quran AI Assistant, powered by Google’s Gemini — here to help you explore the Qur’an, Hadith, Islamic guidance, and more. Ask me anything.
Example: “Can you explain Surah Al-Fatiha and why it’s recited in every prayer?”`,
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
            placeholder="Ask anything..."
          />
          <button type="submit" className="send-btn">
            <img
              src={send}
              className={theme ? "ai-send-img-dark" : "ai-send-img"}
              alt="Send"
            />
          </button>
        </div>
      </form>
    </div>
  );
}
