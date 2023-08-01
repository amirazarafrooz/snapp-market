import boxArrowLeft from '../../../public/assets/images/boxArrowLeft.svg'


export const CustomArrowRight = ({ style, onClick }) => {
    return (
      <div
        className={"rounded-full absolute w-9 h-9 "}
        style={{
          ...style,
          display: "block",
          background: "rgb(225, 225, 225)",
          position: "absolute",
          top: "45%",
          right: "10px",
          zIndex: "10",
          cursor: "pointer",
          backgroundImage: `url(${boxArrowLeft.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: '12px' ,
        }}
        onClick={onClick}
      />
    );
  };
  