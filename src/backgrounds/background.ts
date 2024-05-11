import { Message } from "../constants/messages";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const tabId = sender.tab?.id;

  if (!tabId) {
    return false;
  }

  switch (message) {
    case Message.GET_AUTH_CODE:
      // TODO: Outlookのメールから認証コードを取得する処理を実装する
      const authCode = "hogehogehoge";

      sendResponse({ authCode });
      break;
  }

  return true;
});
