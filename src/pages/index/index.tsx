import { FC, useCallback, useEffect, useState } from "react";
import { getChatList, getMessages } from "../../api/chat";
import { ChatItemList, Header, MessagesList } from "../../components";
import { MessageContext } from "../../context/messageContext";
import { useMatchMedia } from "../../hooks/use-match-media";
import { IChatItem, IMessage, IPage } from "../../interface";

import "../../styles/mainPage.scss";


export const PageIndex: FC<IPage> = (props: IPage) => {
  const [chatList, setChatList] = useState<IChatItem[]>([]);
  const [messageData, setMessageData] = useState<IMessage[]>([]);
  const [messageId, setMessageId] = useState<string>('');
  const [inputState, setInputState] = useState<{text: string[], active: boolean}>({text: [], active: false,})
  const { isDesktop, isTablet} = useMatchMedia()

  const handleChangeMessageId = (id: string) => {
    setMessageId(id);
    setInputState(() => ({active: false , text: []}))
  };

  const sendMessage = useCallback(() => {
    if (inputState.text.length === 0) {
      return
    }
    console.log(`send message: ${inputState.text.join('')}`)
    setInputState(() => ({active: false , text: []}))
  },[inputState.text]);

  const handleKeyDown = useCallback((e:KeyboardEvent) => {
    if (!inputState.active) {
      return 
    }

      if (e.key === 'Backspace') {
        const inputArr = inputState.text
        inputArr.pop()
        setInputState(prev => ({...prev, text: inputArr}))
        return
    } else if (e.key === 'Enter') {
      setInputState(() => ({active: false , text: []}))
      return  sendMessage() 
    } else if (/[a-z, а-я, 0-9]/i.test(e.key)) {
      setInputState(prev => ({...prev, text: [...inputState.text, e.key]}))
    }
},[inputState.active, inputState.text, sendMessage])


  useEffect(() => {
    if (!inputState.active) {
     return
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
    window.removeEventListener('keydown',handleKeyDown)
    }
  },[inputState, handleKeyDown])

  useEffect(() => {
    getChatList()
      .then((data) => {
        setChatList(data.response)
        setMessageId(data.response[0].id)
      })
      .catch((error) => console.error(error));
    }, []);
    
    useEffect(() => {
    getMessages(messageId)
      .then((data) => setMessageData(data.response))
      .catch((error) => console.log(error));
  }, [messageId]);

  if (!chatList || !messageData) {
    return <div>Error!!!</div>;
  }

  return (
    <MessageContext.Provider value={{ messageId, handleChangeMessageId, chatList, messageData, setInputState, inputState, sendMessage }}>
    <main className="root">
      <ChatItemList />
      <section className="content__container">
        {!isDesktop && !isTablet ?
          <h2 className="no__content__text">ПРОСТИТЕ! Но ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ У НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ</h2>
        :
        <>
        <Header />
        {!messageData ?
          <div>Loading...</div>
          :
          <MessagesList />
        }
        </>
        }
      </section>
    </main>
    </MessageContext.Provider>
  );
};
