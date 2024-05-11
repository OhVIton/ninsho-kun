import { Message } from "../constants/messages";
import { GAS_BACKEND_URL } from "../constants/scripts";

const fetchAuthCode = async () => {
  const response = await fetch(GAS_BACKEND_URL);
  const data = await response.json();

  return data.authCode;
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message) {
    case Message.GET_AUTH_CODE:
      fetchAuthCode().then((authCode) => sendResponse({ authCode }));
      break;
  }

  return true;
});
