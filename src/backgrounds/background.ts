import { Message } from "../constants/messages";

const fetchAuthCode = async () => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycby93St3zB6fAmH1DDlOJ-eObK7Xc2U4QWlbPok-WLjbWWzWHeqz8ZpxO_LWpY3O3jB4/exec",
  );
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
