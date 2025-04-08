import { useState, useEffect } from "react";
import axios from 'axios';
import styles from "./Chat.module.css";

const MODELS = [
  {name: 'SD XL'},
  {name: 'FLUX'},
  {name: 'lumina'},
  {name: 'PixArt-Sigma'},
]

const Chat = () => {
  const [chat, setChat] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [images, setImages] = useState([]);


  useEffect(() => {
    // axios.get()
  }, [chat]);

  const sendPrompt = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      setChat((prev) => [...prev, { prompt }]);
      setPrompt("");
    }
  };

  const modelOptions = MODELS.map(model => <option>{model.name}</option>)

  console.log(...chat);
  return (
    <>
      <div className={styles.chat__container}>
        <h1>Chat</h1>
        {chat.map((c, i) => (
          <div key={i} style={{ padding: "10px" }}>
            <p
              style={{
                backgroundColor: "#303030",
                borderRadius: 5,
                textAlign: "right",
                padding: "5px",
              }}
            >
              {c.prompt}
            </p>
            <p>{c.response}</p>
          </div>
        ))}
        <div style={{display: 'flex'}}>
        <div style={{padding: 10}}>
        <select>
          {modelOptions}
        </select>
        </div>
        <input
          onKeyDown={sendPrompt}
          type="text"
          placeholder="Generate Comic..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className={styles.chat__input}
          />
        <button onClick={sendPrompt}>Send</button>
          </div>
      </div>
    </>
  );
};

export default Chat;
