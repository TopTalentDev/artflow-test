import { useCallback, useEffect, useState } from "react";
import { IChatItem } from "../utils";
import ChatItem from "./ChatItem";
import SendMessage from "./SendMessage";

import styles from "../styles/Home.module.css";

export const chatLoading = {
  turn: "bot",
  type: "loading",
  content: "Loading...",
};

export const chatStory = {
  turn: "bot",
  type: "message",
  content: "Here is the start of the story you asked for. enjoy!",
};

export const chatImage = {
  turn: "bot",
  type: "message",
  content:
    "Here is the character portrait you requested for 'warhammer space trader'",
};

const ChatBox = () => {
  const [chatItems, setChatItems] = useState<IChatItem[]>([]);
  const [turn, setTurn] = useState<String>("");
  const [msgIdx, setMsgIdx] = useState(0);

  const fetchStory = useCallback(() => {
    fetch(`${process.env.API_Story}`)
      .then((res) => res.json())
      .then((res) => {
        addChatItem({
          turn: "bot",
          ...res,
        });
      });
  }, []);

  const fetchImage = useCallback(() => {
    fetch(`${process.env.API_Image}`)
      .then((res) => res.json())
      .then((res) => {
        addChatItem({
          turn: "bot",
          ...res,
        });
      });
  }, []);

  const addChatItem = useCallback(
    (chatItem: IChatItem) => {
      setChatItems((chatItems) => [...chatItems, chatItem]);
      if (chatItem.type === "story") {
        setChatItems((chatItems) => [...chatItems, chatLoading]);
        setTimeout(() => {
          setChatItems((chatItems) => [...chatItems, chatStory]);
          fetchStory();
          setTurn("user");
        }, 10000);
      }
      if (chatItem.type === "image") {
        setChatItems((chatItems) => [...chatItems, chatLoading]);
        setTimeout(() => {
          setChatItems((chatItems) => [...chatItems, chatImage]);
          fetchImage();
          setTurn("user");
        }, 30000);
      }
    },
    [fetchImage, fetchStory]
  );

  const fetchMSG = useCallback(() => {
    fetch(`${process.env.API_MSG}/${msgIdx}`)
      .then((res) => res.json())
      .then((res) => {
        setMsgIdx(msgIdx + 1);
        addChatItem({
          turn: "bot",
          ...res,
        });
      });
  }, [addChatItem, msgIdx]);

  useEffect(() => {
    setTurn("bot");
  }, []);

  useEffect(() => {
    if (turn === "bot") {
      fetchMSG();
      setTurn("user");
    }
  }, [turn, fetchMSG]);

  return (
    <div className={styles["chat-box"]}>
      <div>
        {chatItems.map((chatItem, idx) => (
          <ChatItem item={chatItem} key={idx} />
        ))}
      </div>
      <SendMessage addChatItem={addChatItem} setTurn={setTurn} />
    </div>
  );
};

export default ChatBox;
