const Image = ({src,alt, ...props}) => {

  // <picture>
  //   <source media=" (min-width: 768px)" srcSet={src.webp} type="image/webp" />
  // </picture>
  return (
    <img src={src} alt={alt} {...props}/>
  );
}


export default Image;