import React, { useState } from "react";
import axios from "axios";
import BackButton from "./BackButton";

export default function ChatGpt() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAnswer("");

    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "mistralai/mistral-7b-instruct",
          messages: [
            {
              role: "user",
              content: question,
            },
          ],
          max_tokens: 4080,
        },
        {
          headers: {
            Authorization:
              "Bearer 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",
            "Content-Type": "application/json",
            "HTTP-Referer": "https://openrouter.ai/",
            "X-Title": "OpenRouter AI",
          },
        }
      );

      const reply = response.data.choices[0].message.content;
      setConversation((prevConversations) => [
        ...prevConversations,
        { question, answer: reply },
      ]);

      setAnswer(reply);
    } catch (error) {
      console.error("Error", error);

      const errorMessage =
        "If your chat does not work, it means the daily usage has been exhausted. It will be recharged soon. In the future, we will provide a completely free AI system.";

      setQuestion(errorMessage); // نمایش پیام در input
      setAnswer("Error: Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="BodyChat">
      <BackButton />
      <div className="containerAiChat">
        <h2 className="Text_welcome">Chat Ai (Fizent)</h2>
        <form className="form" onSubmit={handleSubmit}>
          <textarea
            className="TextEaChat"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Write your question"
            rows={5}
          />
          <button className="BtnSend" type="submit" disabled={loading}>
            {loading ? "Please Wait..." : "Send"}
          </button>
        </form>
      </div>

      {/* نمایش مکالمات در حال انجام */}
      <div className="answerBox">
        {conversation.map((conversation, index) => (
          <div key={index} className="chatItem">
            <strong className="youAnswer">Fizent Ai</strong>
            <p id="pAnswer">
              <span className="youAnswer">You :</span>
              {conversation.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
