import { IChatItem } from "../utils";
import Image from "next/image";

import styles from "../styles/Home.module.css";

const ChatItem = ({ item }: { item: IChatItem }) => {
  return (
    <div className={styles[`chat-box-item-${item.turn}`]}>
      {item.type !== "img" && item.type !== "loading" && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {item.turn === "bot" && (
            <div className={styles[`chat-box-avatar-${item.turn}`]}>A</div>
          )}
          <div className={styles["chat-box-msg"]}>{item.content}</div>
          {item.turn === "user" && (
            <div className={styles[`chat-box-avatar-${item.turn}`]}>C</div>
          )}
        </div>
      )}
      {item.type === "img" && (
        <div>
          <div className={styles["chat-box-image"]}>
            <div className={styles["chat-box-avatar-bot"]}>A</div>
            <Image src={item.content} alt="" width={150} height={100} />
          </div>
        </div>
      )}
      {item.type === "loading" && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={styles["chat-box-avatar-bot"]}>A</div>
          <div className={styles["loader"]}></div>
        </div>
      )}
    </div>
  );
};

export default ChatItem;
