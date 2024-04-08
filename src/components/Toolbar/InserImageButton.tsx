"use client"
import React, { useEffect, useRef, useState } from "react";
import IconButton from "../IconButton";
import { CiImageOn } from "react-icons/ci";
import axios from "axios";


type Props = {
    isActive: boolean;
    onClick: () => void;
};

export default function InserImageButton({ isActive, onClick }: Props) {
    const imageRef = useRef()
    const [image, setImage] = useState("")

    const handleChange = async (e: any) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', 'crowdFunding');
                const response = await axios.post(
                    'https://api.cloudinary.com/v1_1/ddsepnnsm/image/upload',
                    formData
                );
                const imageUrl = response.data.secure_url;
                setImage(imageUrl);

            } catch (err) {
                console.log(err)
            }

        }
    }


    


    return (
        <IconButton isActive={isActive} onClick={onClick}>
            <div className="" onClick={() => imageRef?.current.click()}>
                <CiImageOn size={22} color="black" />
            </div>
            <input type="file" hidden ref={imageRef} onChange={handleChange} />
        </IconButton>
    );
}