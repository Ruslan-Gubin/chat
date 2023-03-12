import { ILastMessage } from "./ILastMessage";
import { IUsers } from "./IUsers";

interface IChatItem {
    avatar: string;
    count_unread: number;
    created_at: number;
    id: string;
    last_message: ILastMessage;
    private: boolean;
    title: string;
    users: IUsers[];
  }


export type { IChatItem }