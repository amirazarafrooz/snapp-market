import boxArrowLeft from '../../../public/assets/images/boxArrowLeft.svg'


export const CustomArrowRight = ({ style, onClick }) => {
    return (
      <div
        className={"rounded-full absolute w-9 h-9 "}
        style={{
          ...style,
          display: "block",
          background: "rgb(205, 205, 205)",
          position: "absolute",
          top: "45%",
          right: "10px",
          zIndex: "10",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${boxArrowLeft.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "black",
          width : "30px" ,
          height : "30px"
        }}
        onClick={onClick}
      />
    );
  };
  