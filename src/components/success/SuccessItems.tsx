
import type {successType} from "../types/successType"


function SuccessItems({item} :{ item : successType}) {

const {id , ratio , title, discription} = item


  return (
    <div key={id} className="w-full lg:max-w-[377px]  bg-primary rounded-[15px] text-white px-7 py-5 lg:py-9">

<h3 className="font-anek text-3xl lg:text-4xl font-semibold mb-4">{ratio} </h3>
<h3 className="font-anek text-xl lg:text-4xl font-semibold mb-5">{title}</h3>
<p className="font-anek text-[14px] lg:text-[16px] font-normal lg:mb-10">{discription}</p>

    </div>
  )
}

export default SuccessItems