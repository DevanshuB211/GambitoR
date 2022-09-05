import React from "react";
import style from "./InputBox.module.css";

const InputBox = ({
  name,
  type,
  className,
  label,
  value,
  htmlFor,
  defaultValue,
  onChange,
  placeholder,
  accept
}) => {
  return (
    <div className={`${style.input} ${className}`}>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        accept={accept}
        value={value}
        name={name}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default React.memo(InputBox);
