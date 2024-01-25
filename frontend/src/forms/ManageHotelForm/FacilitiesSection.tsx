import { useFormContext } from "react-hook-form";
import { hotelFacilities } from "../../config/hotel_options_config";
import { HotelFormData } from "./ManageHotelForm";


const FacilitiesSection = () => {
    const {register, formState: {errors}} = useFormContext<HotelFormData>();


  return (
    <div>
        <h2 className="text-2xl font-bold mb-3">Facilities</h2>
        <div className="grid grid-col-5 gap-3">
            {hotelFacilities.map((facility)=> (
                <label htmlFor="">
                    <input type="checkbox" value={facility}/>
                    {facility}
                </label>
            ))}
        </div>
    </div>
  )
}

export default FacilitiesSection