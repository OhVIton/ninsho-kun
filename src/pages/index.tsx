import { Inter } from "next/font/google";
import { GAS_BACKEND_URL } from "../constants/scripts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div style={{ width: "16rem" }}>
        <h1>初期設定</h1>
        <a
          href={GAS_BACKEND_URL}
          target="_blank"
          rel="noreferrer noopener"
          style={{ fontSize: "2rem" }}
        >
          ここをクリックしてアカウントを設定する
        </a>
      </div>
    </main>
  );
}
