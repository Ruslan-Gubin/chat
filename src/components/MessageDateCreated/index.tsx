import {  formatedTimeYears } from "../../utils/formatedTime";
import { IMessageDateCreated } from "./interface";

import styles from './MessageDateCreated.module.scss';

const MessageDateCreated = ({date}:IMessageDateCreated) => {
  return (
    <div className={styles.root}>
    <span >  
      {formatedTimeYears.format(date)}
    </span>
    </div>
  );
};

export { MessageDateCreated };