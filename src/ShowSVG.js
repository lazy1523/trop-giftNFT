function ShowSVG() {
    return(<svg xmlns="http://www.w3.org/2000/svg" width="400" height="600">
    <rect
      style={{ fill: "rgb(39,112,38)" }}
      width="400"
      height="600"
    />
    <text transform="translate(149 320)" fontSize="102px">
      &#128757;
    </text>
    <text
      style={{ fill: "rgb(241,205,146)" }}
      x="103"
      fontSize="27"
    >
      &#10022;
      <animate
        attributeName="opacity"
        values="0;0.5;0"
        dur="10.0s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        values="349;369;349"
        calcMode="paced"
        dur="6.6s"
        repeatCount="indefinite"
      />
    </text>
    <text
      style={{ fill: "rgb(241,205,146)" }}
      x="228"
      fontSize="22"
    >
      &#10022;
      <animate
        attributeName="opacity"
        values="0;0.5;0"
        dur="14.5s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        values="263;323;263"
        calcMode="paced"
        dur="5.0s"
        repeatCount="indefinite"
      />
    </text>

    <text
      x="100"
      y="430"
      width="320"
      height="30"
      style={{ fontSize: "20px", fill: "rgb(241,205,146)" }}
    >
      "为自己的投资留一辆电动车"
    </text>
    <text
      style={{ fontSize: "20px", fill: "rgb(241,205,146)" }}
      x="280"
      y="500"
      width="320"
      height="30"
    >
      --外卖币哥
    </text>
  </svg>)
    
}

export default ShowSVG;