interface IImgProps {
    imgSrc: string,   
    imgAlt?: string,   
    width?: string,    
    height?: string,   
    className?: string,  
}

const ImageView: React.FC<IImgProps> = ({imgSrc,imgAlt, height,width, className,  ...props}) => {
    return (
        <div className={`w-full h-full hidden md:block ${className}`} {...props}>
            <img
                src={imgSrc}
                alt={imgAlt}
                className="object-cover w-full h-full hidden md:block"
                style={{ width, height }}
            />
        </div>
    );
};

export default ImageView;
