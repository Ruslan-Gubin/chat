import { FC } from "react";
import { ChatAsideItem } from "../ChatAsideItem";
import { IChatItemList } from "./interface";

import styles from './chatItemList.module.scss';
import { useMessageContext } from "../../context/messageContext";

const ChatItemList: FC<IChatItemList> = () => {
  const { chatList } = useMessageContext()

  return (
    <aside className={styles.root}>
      <header className={styles.header}>
      <h2 className={styles.title}>All chats</h2>
      </header>
      <ul>
        {chatList && chatList.map(chat => 
        <li key={chat.id}>
          <ChatAsideItem  chat={chat}/>
        </li>
          )}
      </ul>
    </aside>
  );
};

export { ChatItemList };