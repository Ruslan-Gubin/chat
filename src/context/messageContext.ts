import { createContext, useContext } from "react";
import { IMessageContext } from "../interface";


const MessageContext = createContext<IMessageContext | null>(null)

const useMessageContext = () => {
  const context = useContext(MessageContext)

  if (!context) {
    throw new Error('Can not useMessageContext outside of the MessageContext')
  }

  return context
}

export { MessageContext, useMessageContext }