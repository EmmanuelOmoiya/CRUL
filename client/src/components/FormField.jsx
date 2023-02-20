import React from "react";

const FormField = ({
  LabelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2 font-poppins">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900 font-poppins"
        >
          {LabelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className=" hover:bg-[rgba(255,255,255,0.12)] font-semibold text-xs bg-transparent border border-green py-1 px-2 rounded-[5px] text-green font-poppins"
          >
            Suggest{" "}
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
          </button>
        )}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        id={name}
        value={value}
        onChange={handleChange}
        className=" border-green focus:hover:bg-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.12)] bg-transparent text-gray-900 text-sm rounded-lg font-poppins border outline-none hover:bg block w-full p-3"
      />
    </div>
  );
};
export default FormField;
