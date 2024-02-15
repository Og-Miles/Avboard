import React from "react";

interface CardProps {
  title: string;
  amount: string;
  percentage: string;
  text: string;
  icon?: React.ReactNode;
  backgroundImage?: any;
  bgColor?: string;
  bgMain?: string;
}

const CustomCard: React.FC<CardProps> = ({
  title,
  amount,
  percentage,
  icon,
  text,
  backgroundImage,
  bgMain,
  bgColor,
}) => {
  const cardStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "5% 20%",
      }
    : {};

  return (
    <div
      className={`bg-${bgMain} rounded-2xl shadow-lg h-full w-full flex p-4 justify-between`}
      style={cardStyle}
    >
      <div className='flex flex-col justify-between '>
        <p className='text-slate-400'>{title}</p>
        <p className='text-2xl font-bold text-slate-700'>{amount}</p>
        <p className='text-slate-400 w-[40px] mt-4'>
          <span className='text-green-500 font-bold'>{percentage}</span> {text}
        </p>
      </div>
      {icon && (
        <div
          className={`bg-${bgColor} rounded-full p-2 text-white h-fit w-fit justify-items-end items-center object-center flex`}
        >
          {React.cloneElement(icon, { className: "h-[30px] w-[30px]" })}
        </div>
      )}
    </div>
  );
};

export default CustomCard;
