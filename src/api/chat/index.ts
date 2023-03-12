import {wrapper} from "../../utils/wrapper";
import {URLS} from "../../constants/urls";

export const getChatList = () => {
    return wrapper("get", `${URLS.MAIN_URL}/${URLS.MESSAGES}`)
}
export const getMessages = (id: string) => {
    return wrapper("get", `${URLS.MAIN_URL}/${URLS.MESSAGES_ONE}?chat_id=${id}`)
}