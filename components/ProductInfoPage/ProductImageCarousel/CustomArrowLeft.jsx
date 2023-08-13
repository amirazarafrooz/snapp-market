import boxArrowRight from '../../../public/assets/images/boxArrowRight.svg'


export const CustomArrowLeft = ({  style, onClick }) => {
  return (
    <div
      className={"rounded-full absolute w-9 h-9 "}
      style={{
        ...style,
        display: "block",
        background: "rgb(225, 225, 225)",
        position: "absolute",
        top: "45%",
        left: "10px",
        zIndex: "10",
        cursor: "pointer",
        backgroundImage: `url(${boxArrowRight.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize : '12px',
        boxShadow: 'rgba(0, 0, 0, 0.11) 0px 0.6rem 1rem 0px',
      }}
      onClick={onClick}
    />
  );
};
