import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Index() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    }
    return (
        <div className="sliders">
            <Slider {...settings}>
                <div className="avatar">
                    <h3><img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads02&accessoriesType=Kurt&hairColor=Brown&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=CollarSweater&clotheColor=Gray01&eyeType=Close&eyebrowType=DefaultNatural&mouthType=Concerned&skinColor=Tanned' alt=""/></h3>
                </div>
                <div className="avatar">
                    <h3><img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Prescription01&hairColor=Blue&facialHairType=BeardMajestic&facialHairColor=Brown&clotheType=ShirtScoopNeck&clotheColor=Blue01&eyeType=Dizzy&eyebrowType=AngryNatural&mouthType=Grimace&skinColor=Yellow' alt=""/></h3>
                </div>
                <div className="avatar">
                    <h3><img src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Prescription01&hatColor=Red&hairColor=SilverGray&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=CollarSweater&clotheColor=Pink&eyeType=Default&eyebrowType=UpDownNatural&mouthType=Tongue&skinColor=Black' alt=""/></h3>
                </div>
                <div className="avatar">
                    <h3><img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesarSidePart&accessoriesType=Prescription02&hatColor=PastelBlue&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=Brown&clotheType=BlazerSweater&clotheColor=Blue01&eyeType=Dizzy&eyebrowType=AngryNatural&mouthType=Twinkle&skinColor=Light' alt=""/></h3>
                </div>
                <div className="avatar">
                    <h3><img src='https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Prescription01&hatColor=Gray01&hairColor=Blue&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=Overall&clotheColor=Blue03&eyeType=EyeRoll&eyebrowType=Default&mouthType=Concerned&skinColor=Pale' alt=""/></h3>
                </div>
                <div className="avatar">
                    <h3><img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairFroBand&accessoriesType=Kurt&hatColor=PastelYellow&hairColor=Platinum&facialHairType=Blank&facialHairColor=Black&clotheType=BlazerShirt&clotheColor=Pink&eyeType=Squint&eyebrowType=SadConcernedNatural&mouthType=Concerned&skinColor=Light' alt=""/></h3>
                </div>
            </Slider>
        </div>
    )
}
