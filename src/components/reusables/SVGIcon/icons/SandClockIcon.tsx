import * as React from "react";

const SandClockIcon: React.FC<{
  active?: boolean;
  black?: boolean;
  color?: string;
  size?: number;
}> = ({ active, black, color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 6H11V7C11 7.26522 11.1054 7.51957 11.2929 7.70711C11.4804 7.89464 11.7348 8 12 8C12.2652 8 12.5196 7.89464 12.7071 7.70711C12.8946 7.51957 13 7.26522 13 7V6Z"
        fill={black ? "#212121" : active ? "#ffe878" : color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2V4H7V7C7 8.32608 7.52678 9.59785 8.46447 10.5355C9.40215 11.4732 10.6739 12 12 12C10.6739 12 9.40215 12.5268 8.46447 13.4645C7.52678 14.4021 7 15.6739 7 17V20H6V22H18V20H17V17C17 15.6739 16.4732 14.4021 15.5355 13.4645C14.5979 12.5268 13.3261 12 12 12C12.6566 12 13.3068 11.8707 13.9134 11.6194C14.52 11.3681 15.0712 10.9998 15.5355 10.5355C15.9998 10.0712 16.3681 9.52004 16.6194 8.91342C16.8707 8.30679 17 7.65661 17 7V4H18V2H6ZM9 4H15V7C15 7.79565 14.6839 8.55871 14.1213 9.12132C13.5587 9.68393 12.7956 10 12 10C11.2044 10 10.4413 9.68393 9.87868 9.12132C9.31607 8.55871 9 7.79565 9 7V4ZM9 17V20H15V17C15 16.2044 14.6839 15.4413 14.1213 14.8787C13.5587 14.3161 12.7956 14 12 14C11.2044 14 10.4413 14.3161 9.87868 14.8787C9.31607 15.4413 9 16.2044 9 17Z"
        fill={black ? "#212121" : active ? "#ffe878" : color}
      />
    </svg>
  );
};

export default SandClockIcon;
