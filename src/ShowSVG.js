function ShowSVG({ author, emoji, text, size }) {
  function renderXY() {
    if(size!=0&&size<=50){
      return `translate(${180-size} 320)`;
    }if(size>50){
      return `translate(130 320)`;
    }
    return "translate(180 320)";
  };
  function renderSize () {
    if(size!=0){
      const num= 100+size;
      return `${num}px`
    }
    return "50px";
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="600">
      <rect style={{ fill: "rgb(39,112,38)" }} width="400" height="600" />
      <text transform={renderXY()} fontSize={renderSize()}>
        {/* &#128757; */}
        {emoji}
      </text>
      <text style={{ fill: "rgb(241,205,146)" }} x="103" fontSize="27">
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
      <text style={{ fill: "rgb(241,205,146)" }} x="228" fontSize="22">
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
        x="120"
        y="430"
        width="320"
        height="30"
        style={{ fontSize: "20px", fill: "rgb(241,205,146)" }}
      >
        "{text}"
      </text>
      <text
        style={{ fontSize: "20px", fill: "rgb(241,205,146)" }}
        x="280"
        y="500"
        width="320"
        height="30"
      >
        --{author}
      </text>
    </svg>
  );
}

export default ShowSVG;
