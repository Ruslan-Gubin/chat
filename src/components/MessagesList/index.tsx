import { FC, useEffect, useState } from "react";
import { useMessageContext } from "../../context/messageContext";
import { IMessage } from "../../interface";
import { Input } from "../Input";
import { Message } from "../Message";
import { MessageDateCreated } from "../MessageDateCreated";
import { NewMessage } from "../NewMessage";

import styles from "./MessagesList.module.scss";


const MessagesList: FC = () => {
  const { messageData } = useMessageContext();
  const [sortMessage, setSortMessage] = useState<{
    oldMessage: IMessage[];
    newMessage: IMessage[];
  }>({ oldMessage: [], newMessage: [] });

  useEffect(() => {
    if (!messageData) {
      return;
    }
    setSortMessage(() => ({
      oldMessage: messageData.filter((item) => !item.is_new),
      newMessage: messageData.filter((item) => item.is_new),
    }));
  }, [messageData]);

  return (
    <section className={styles.root}>
      {sortMessage.oldMessage && (
        <MessageDateCreated date={sortMessage.oldMessage[0]?.created_at} />
      )}
      <ul className={styles.message__container}>
        {sortMessage.oldMessage &&
          sortMessage.oldMessage.map((item) => (
            <li className={styles.message__item} key={item.id}>
              <Message
                message={item}
                main={!!item.user.avatar}
                my={item.user.you}
              />
            </li>
          ))}
      </ul>
      {sortMessage.newMessage.length > 0 && (
        <>
          {sortMessage.newMessage && (
            <MessageDateCreated date={sortMessage.newMessage[0]?.created_at} />
          )}
          <NewMessage />
          <ul className={styles.message__container}>
            {sortMessage.newMessage.map((item) => (
              <li className={styles.message__item} key={item.id}>
                <Message
                  message={item}
                  main={!!item.user.avatar}
                  my={item.user.you}
                />
              </li>
            ))}
          </ul>
        </>
      )}
      <Input />
    </section>
  );
};

export { MessagesList };
