import React from "react";

const Person = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <mask
        id="mask0_52413_574"
        // style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="48"
      >
        <rect width="48" height="48" rx="24" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0_52413_574)">
        <rect y="-6.23999" width="48" height="60" fill="url(#pattern0)" />
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_52413_574" transform="scale(0.001 0.0008)" />
        </pattern>
        <image
          id="image0_52413_574"
          width="1000"
          height="1250"
        />
      </defs>
    </svg>
  );

};

export default Person;