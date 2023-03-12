import { FC } from "react";
import { INewMessage } from "./interface";

import styles from './newMessage.module.scss';

const NewMessage: FC<INewMessage > = () => {
  return (
    <section className={styles.root}>
    <h2 className={styles.new__title}>Новые сообщения</h2>
    </section>
  );
};

export { NewMessage };