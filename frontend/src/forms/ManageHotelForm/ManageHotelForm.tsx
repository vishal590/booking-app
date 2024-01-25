import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import TypeSection from "./TypeSection";
import FacilitiesSection from "./FacilitiesSection";

export type HotelFormData = {
  name: String;
  city: String;
  country: String;
  description: String;
  type: String;
  pricePerNight: number;
  starPerRating: number;
  facilities: string[];
  imageFiles: FileList;
  adultCount: number;
  childCound: number;
}


const ManageHotelForm = () => {
  const formMethods = useForm<HotelFormData>();

  return (
    <FormProvider {...formMethods}>
      <form className="flex flex-col gap-10">
        <DetailsSection />
        <TypeSection  />
        <FacilitiesSection />
      </form>
    </FormProvider>
    
  )
}

export default ManageHotelForm