import { Avatar } from "../Avatar";
import { IChatAsideItem } from "./interface";
import { formatedTime } from "../../utils/formatedTime";

import styles from './chatAsideItem.module.scss';
import { useMessageContext } from "../../context/messageContext";

const ChatAsideItem = ({chat}: IChatAsideItem) => {
  const { messageId , handleChangeMessageId } = useMessageContext()

  return (
    <article onClick={() => handleChangeMessageId(chat.id)} className={chat.id === messageId ? `${styles.root} ${styles.blue}`: styles.root}>
      <figure className={styles.figure}>
        <Avatar src={chat.avatar ? chat.avatar : ''} size={'md'} />
        <figcaption className={styles.figcaption}>
          <header className={styles.header}>
        <h2 className={styles.title}>{chat.title}</h2>
        <span className={styles.time}>{formatedTime.format(chat.last_message.created_at)}</span>
          </header>
        <p className={styles.text}>{chat.last_message.message}</p>
        </figcaption>
      </figure>
    </article>
  );
};

export { ChatAsideItem };