import { useEffect } from "react";
import { type FC } from "react"
import "./index.css"

const Chatbot: FC = () => {
  useEffect(() => {
    // Tạo thẻ script để tải script của EasyChatGPT
    const script = document.createElement("script");
    script.src = "https://widget.easychatgpt.io/dist/widget/main.js";
    script.async = true;
    script.onload = () => {
      // Khởi tạo EasyChatGPT sau khi script đã được tải
      if (window.EasyChatGPT) {
        window.EasyChatGPT.init({ handle: "tpm-techscom" });
      }
    };
    document.body.appendChild(script);

    // Xóa script khi component bị hủy
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default Chatbot;
