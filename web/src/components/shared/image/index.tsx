interface IImgProps {
    imgSrc: string,   
    imgAlt?: string,   
    width?: string,    
    height?: string,   
    className?: string,
    classNameImg?: string,
    onClick?: () => void
}

const ImageView: React.FC<IImgProps> = ({onClick, imgSrc,imgAlt, height,width, className, classNameImg,  ...props}) => {
    return (
        <div className={`${className}`} {...props}>
            <img
                onClick={onClick}
                src={imgSrc}
                alt={imgAlt}
                className={`object-cover w-full h-full ${classNameImg}`}
                style={{ width, height }}
            />
        </div>
    );
};

export default ImageView;
