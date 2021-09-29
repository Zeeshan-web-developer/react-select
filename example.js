import React, { useState } from "react";
import Select, { components } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/fontawesome-free-solid";
const { Option } = components;
const CustomSelectOption = (props) => (
  <Option {...props}>
    <span
      style={{ marginRight: "4px", display: "flex", justifyContent: "end" }}
    >
      {props.data.icon}{" "}
    </span>
    <span> {props.data.label}</span>
  </Option>
);

const CustomSelectValue = ({ data }) => (
  <div>
    <span style={{ marginRight: "5px" }}>{data.icon}</span>
    <span>{data.label}</span>
  </div>
);

const options = [
  {
    value: "online",
    label: "Online",
    icon: <FontAwesomeIcon icon={faCircle} color="#5cd068" />
  },
  {
    value: "away",
    label: "Away",
    icon: <FontAwesomeIcon icon={faCircle} color="orange" />
  },
  {
    value: "busy",
    label: "Busy",
    icon: <FontAwesomeIcon icon={faCircle} color="red" />
  },
  {
    value: "awayLong",
    label: "Extended Away",
    icon: <FontAwesomeIcon icon={faCircle} color="green" />
  }
];
const style = {
  control: (base) => ({
    ...base,
    border: 0,
    height: 5,
    // This line disable the blue border
    boxShadow: "none"
  })
};

export default () => {
  return (
    <Select
      styles={style}
      name="presence"
      clearable={false}
      options={options}
      components={{
        Option: CustomSelectOption,
        SingleValue: CustomSelectValue,
        IndicatorSeparator: () => null
      }}
    />
  );
};
