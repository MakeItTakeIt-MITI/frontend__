import { useState } from "react";
import checkBoxIcon from "../../assets/review/mini_checkbox.svg";
import checkBoxClicked from "../../assets/review/mini_checkbox_clicked.svg";

interface ReviewCheckBoxProp {
  checked: boolean;
  isChecked: (arg: boolean) => void;
  setSelectedText: (arg: string) => void;
}

export const ReviewCheckBox: React.FC<ReviewCheckBoxProp> = ({
  checked,
  isChecked,

  setSelectedText,
}) => {
  const [selectedOption, setSelectedOption] = useState<null | number>(null);
  const [options, _] = useState([
    { id: 0, text: "수비를 열심히 해주셨어요!" },
    { id: 1, text: "득점력을 지닌 메인 스코어러입니다." },
    { id: 2, text: "좋은 패스로 어시스트를 많이 해주셨어요!" },
    { id: 3, text: "칭찬으로 에너지 레벨을 높여주셨습니다." },
    { id: 4, text: "직접 작성" },
  ]);
  const handleCheckBox = (id: null | number, text: string) => {
    setSelectedOption(id);
    isChecked(!checked);
    setSelectedText(text);
  };

  return (
    <div className="text-sm font-[500] ">
      {options.map((i: any) => {
        return (
          <button
            onClick={() => handleCheckBox(i.id, i.text)}
            key={i.id}
            className="flex items-center gap-1 font-[500]"
          >
            <img
              src={selectedOption === i.id ? checkBoxClicked : checkBoxIcon}
              alt={selectedOption === i.id ? "checkbox clicked" : "checkbox"}
            />
            <span
              style={{ color: selectedOption === i.id ? "#4065F5" : "#666" }}
            >
              {i.text}
            </span>
          </button>
        );
      })}
    </div>
  );
};
