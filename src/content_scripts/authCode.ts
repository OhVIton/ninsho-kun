import { Message } from "../constants/messages";
import { AuthCodeResponse } from "../types/authCode";

const isAuthCodeRequired = async () => {
  while (true) {
    const formElem = document.querySelector("form[data-stage='HOTP2']");

    if (formElem) {
      return true;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
};

const submitAuthCode = (authCode: string) => {
  const inputElem = document.querySelector("#idToken1");
  const formElem = document.forms[0];

  inputElem?.setAttribute("value", authCode);
  formElem?.submit();
};

(async () => {
  if (await isAuthCodeRequired()) {
    // 認証コードを取得
    const response = await chrome.runtime.sendMessage(Message.GET_AUTH_CODE);
    const authCode = ((await response) as AuthCodeResponse).authCode;

    // 認証コードを入力して送信
    submitAuthCode(authCode);
  }
})();
