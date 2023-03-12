import { IMessageProps } from "./interface";
import { formatedTime } from "../../utils/formatedTime";
import wathing from "../../assets/wathing.png";

import styles from "./message.module.scss";

const Message = ({ message, my, main }: IMessageProps) => {
  return (
    <article
      className={
        !my && !message.is_new
          ? `${styles.rootNoMy} ${styles.root}`
          : styles.root
      }
    >
      <picture className={styles.user__image_container}>
        {main && (
          <img
            className={styles.user__image}
            src={message.user.avatar}
            alt="User image"
          />
        )}
      </picture>
      <div className={styles.message__container}>
        <h2 className={styles.user__name}>{message.user.name}</h2>
        <p
          className={
            my || message.is_new
              ? `${styles.user__text_you} ${styles.user__text}`
              : styles.user__text_you
          }
        >
          {message.message}
          <span className={styles.message__time}>
            {formatedTime.format(message.created_at)}
            {!message.user.you && !message.is_new && (
              <img src={wathing} alt="icon withing" />
            )}
          </span>
        </p>
      </div>
    </article>
  );
};

export { Message };
