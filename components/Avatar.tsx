import React from "react";
interface Props {
  url: string;
  className?: string;
}

const Avatar: React.FC<Props> = ({ url, className }: Props) => {
  return (
    <img
      src={url}
      loading="lazy"
      className={`h-10 rounded-full cursor-pointer transform transition duration-150  hover:scale-110 ${className}`}
      alt="highlander santos"
    />
  );
};

export default Avatar;
