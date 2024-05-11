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
  const loginButton = document.querySelector<HTMLInputElement>("#idToken2_0");

  inputElem?.setAttribute("value", authCode);
  loginButton?.click();
};

(async () => {
  if (await isAuthCodeRequired()) {
    // 10秒待機
    await new Promise((resolve) => setTimeout(resolve, 10000));

    // 認証コードを取得して送信
    chrome.runtime.sendMessage(Message.GET_AUTH_CODE, (response) => {
      const authCode = (response as AuthCodeResponse).authCode;
      console.log(authCode);

      // 認証コードを入力して送信
      submitAuthCode(authCode);
    });
  }
})();
