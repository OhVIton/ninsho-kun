import { Message } from "../constants/messages";
import { BACKEND_URL } from "../constants/scripts";

const fetchAuthCode = async (after: number) => {
  const response = await fetch(BACKEND_URL + "?after=" + after);
  const data = await response.json();

  if (!data.authCode) {
    throw new Error(Message.AUTH_CODE_NOT_FOUND);
  }
  return data.authCode;
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.message) {
    case Message.GET_AUTH_CODE:
      fetchAuthCode(message.after)
        .then((authCode) => sendResponse({ authCode }))
        .catch((error) => sendResponse({ error }));
      break;
  }

  return true;
});
