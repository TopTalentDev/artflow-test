import { useState } from "react";

import styles from "../styles/Home.module.css";

const SendMessage = ({
  addChatItem,
  setTurn,
}: {
  addChatItem: any;
  setTurn: any;
}) => {
  const [message, setMessage] = useState("");

  const clickSendBtn = (e: any) => {
    e.preventDefault();
    addChatItem({
      turn: "user",
      type: "message",
      content: message,
    });
    setTurn("bot");
    setMessage("");
  };

  return (
    <div className={styles["message-area"]}>
      <textarea
        className={styles["message"]}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className={styles["send-btn"]} onClick={clickSendBtn}>
        Send
      </button>
    </div>
  );
};

export default SendMessage;
