import { FC } from "react";
import { IHeader } from "./interface";
import { messagesIcons } from "../../constants/icons";

import styles from "./header.module.scss";

const Header: FC<IHeader> = () => {
  return (
    <header className={styles.root}>
      <picture>
        <img
          className={styles.img}
          src={messagesIcons.chatIcon}
          alt="chat icon"
        />
      </picture>
      <h1 className={styles.title}>Great Project</h1>
    </header>
  );
};

export { Header };
