import placehodler from './../assets/img/slide1.svg'
const SwiperItem = ({props}) => {
    const {title,description,image} = props
    
    return (      
        <>
        <img src={placehodler}  alt="xd"></img>
        <div className='mt-6 text-sm font-bold text-center'>
            {title}
        </div>
        <div className='mt-6 text-text text-sm text-center max-w-[300px] mx-auto'>
            {description}
        </div>
        <div class="mt-auto pt-9">
        <button class="py-4 text-sm text-white w-full block bg-primary rounded-[10px]">Get Started</button>
        </div>
        </>
    );
  };

export default SwiperItem