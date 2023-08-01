import boxArrowRight from '../../../public/assets/images/boxArrowRight.svg'


export const CustomArrowLeft = ({  style, onClick }) => {
  return (
    <div
      className={"rounded-full absolute w-9 h-9 "}
      style={{
        ...style,
        display: "block",
        background: "rgb(205, 205, 205)",
        position: "absolute",
        top: "45%",
        left: "10px",
        zIndex: "10",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${boxArrowRight.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "rgb()",
        width : "30px" ,
        height : "30px"
      }}
      onClick={onClick}
    />
  );
};
