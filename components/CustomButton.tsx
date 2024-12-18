"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

function CustomButton({
  title,
  containerStyles,
  handlerClick,
  btnType = "button",
  textStyles,
  rightIcon,
}: CustomButtonProps) {
  return (
    <button
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handlerClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="icon" fill className="object-contain" />
        </div>
      )}
    </button>
  );
}

export default CustomButton;
