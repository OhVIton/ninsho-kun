import { Message } from "../constants/messages";
import { AuthCodeResponse } from "../types/authCode";

let isSubmitted = false;

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

  isSubmitted = true;
};

(async () => {
  if (await isAuthCodeRequired()) {
    const after = (new Date().getTime() / 1000) | 0;
    while (!isSubmitted) {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // 認証コードを取得して送信
      chrome.runtime.sendMessage(
        { message: Message.GET_AUTH_CODE, after: after },
        (response) => {
          if (response.error) {
            return;
          }

          const authCode = (response as AuthCodeResponse).authCode;

          // 認証コードを入力して送信
          submitAuthCode(authCode);
        },
      );
    }
  }
})();
