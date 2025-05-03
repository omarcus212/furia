import React, { useState } from "react";
import { Profile } from "../../../interface/profile";
import ImageView from "../../shared/imageView";
import TextTittle from "../../shared/text";
import CustomButton from "../../shared/button";


const ContainerProfile: React.FC<Profile> = ({ username, profile_photo_url, bio, onClickEdit }) => {

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => { setShowMenu(!showMenu) }

    return (
        <div className="w-full h-[138px] mb-8 relative">
            <div className="flex flex-col w-full h-full">
                <ImageView
                    className="w-full h-full object-cover opacity-10"
                    imgSrc="/image/bannerprofile098564.jpg"
                />
            </div>

            <div className="absolute inset-0 flex flex-col sm:flex-row items-center sm:items-start justify-between px-4 sm:px-10 pt-[90px] gap-4">

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">

                    <div className="w-[90px] h-[90px] sm:w-[146px] sm:h-[142px] p-2 border-4 border-white rounded-full">
                        <ImageView
                            className="w-full h-full object-cover"
                            classNameImg="rounded-full"
                            imgSrc={`${profile_photo_url}`}
                        />
                    </div>
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <TextTittle
                            text={username}
                            className="text-white text-[20px] sm:text-[32px] font-semibold"
                        />
                        <p className="text-white hidden sm:block text-sm sm:text-base mt-2 max-w-[300px] sm:max-w-none">
                            {bio}
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <CustomButton
                        text="..."
                        onClick={toggleMenu}
                        className="text-white text-2xl sm:text-3xl rounded-full hover:bg-white/20 px-3 py-1 transition"
                    />
                    {showMenu && (
                        <div className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg px-4 py-2 text-sm z-50">
                            <CustomButton
                                text="Atualizar"
                                onClick={onClickEdit}
                                className="text-black w-full text-sm"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ContainerProfile;