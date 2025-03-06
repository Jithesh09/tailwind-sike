import { star } from '../assets/icons'

const ReviewCard = ({imgURL, customerName, feedBack, rating}) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <img 
        src={imgURL} 
        className="rounded-full object-cover w-[120px] h-[120px]"/>
        <p className='mt-6 max-w-sm text-center info-text'>{feedBack}</p>
        <div className='flex items-center gap-2.5 justify-center mt-3'>
            <img src={star}
            width={24}
            height={24}
            className='object-contain m-0'></img>
            <p className='font-montserrat text-slate-gray text-xl'>({rating})</p>
        </div>
        <h3 className='mt-1 font-palanquin text-3xl font-bold'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard