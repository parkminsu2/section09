import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef(); //

  // 새로운 내용 추가
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // 키보드 Enter 누를시 submit
  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onsubmit();
    }
  };

  // 추가 버튼을 누를시 submit
  const onsubmit = () => {
    if (content === "") {
      contentRef.current.focus(); // 추가 성공시 input창 초기화
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeydown}
        placeholder="새로운 Todo..."
      ></input>
      <button onClick={onsubmit}>추가</button>
    </div>
  );
};

export default Editor;
