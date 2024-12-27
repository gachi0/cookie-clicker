import { Component, JSX } from "solid-js";
import { Column } from "../../components/layout";
import { BUTTON_CSS_ENABLE } from "../../components/button";
import { css } from "../../../styled-system/css";
import { history, sendmsg } from "./chatfn";
import { micromark } from "micromark";


const Page: Component = () => {

  let ref: HTMLTextAreaElement | undefined;

  return <Column style={{ gap: "8px", width: "600px" }}>

    <p style={{ "font-size": "100px" }}>
      会話できません！
    </p>

    {history.map(v => <div
      class={css({
        border: "solid 1px"
      })}
    >
      <div>ROLE: {v.role}</div>
      <div
        style={{
          "background-color": v.role === "user"
            ? "#004400"
            : "#000044"
        }}
        innerHTML={
          v.parts.map(p => micromark(p.text ?? "")).join("\n")
        }
      />


    </div>)}
    <textarea
      ref={ref}
      class={css({
        border: "solid 1px",
        borderRadius: "2px",
        padding: "10px"
      })}
    />
    <button
      style={BUTTON_CSS_ENABLE}
      onclick={async () => {
        const v = ref?.value;
        if (!v) {
          alert("メッセージなし");
          return;
        }
        await sendmsg(v);
      }} >send</button>
  </Column>;
};

export default Page;


Array.from({ length: 100 }, (_, i) => i);