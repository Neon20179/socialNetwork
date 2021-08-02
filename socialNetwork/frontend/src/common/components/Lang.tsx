import React, { useEffect, useRef, FC } from "react";

interface LangProps {
  ruText: string;
  enText: string;
  userLang: any;
}

const Lang: FC<LangProps> = ({ ruText, enText, userLang }) => {
  let enNode = useRef<HTMLSpanElement>(null).current;
  let ruNode = useRef<HTMLSpanElement>(null).current;

  useEffect(() => {
    if (userLang === "EN") {
      enNode.style.transform = "translateY(60px)";
      ruNode.style.transform = "none";
    } else if (userLang === "RU") {
      enNode.style.transform = "none";
      ruNode.style.transform = "translateY(60px)";
    }
  }, [userLang]);

  return (
    <div className="lang">
      <span
        className="en"
        ref={(el) => {
          enNode = el;
        }}
      >
        {enText}
      </span>
      <span
        className="ru"
        ref={(el) => {
          ruNode = el;
        }}
      >
        {ruText}
      </span>
    </div>
  );
};

export default Lang;
