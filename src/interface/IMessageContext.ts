import { IChatItem } from "./IChatItem";
import { IMessage } from "./IMessage";

interface IMessageContext {
  messageId: string;
  handleChangeMessageId: (id: string) => void;
  chatList: IChatItem[];
  messageData: IMessage[];
  setInputState: React.Dispatch<
    React.SetStateAction<{ text: string[]; active: boolean }>
  >;
  inputState: { text: string[]; active: boolean };
  sendMessage: () => void;
}

export type { IMessageContext };
