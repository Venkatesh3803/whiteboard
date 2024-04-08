import React from "react";
import IconButton from "../IconButton";
import { IoTriangleOutline } from "react-icons/io5";


type Props = {
  isActive: boolean;
  onClick: () => void;
};

export default function TriangleButton({ isActive, onClick }: Props) {
  return (
    <IconButton isActive={isActive} onClick={onClick}>
     <IoTriangleOutline size={20} />
    </IconButton>
  );
}