import type { coursesType } from "../types/coursesType";
import Button from "../ui/Button";

function CourseItems({ item }: { item: coursesType }) {
  const {
    id,
    name,
    imgUrl,
    category,
    userIcon,
    students,
    star,
    rating,
    coursePrice,
    discoutBtn,
  } = item;
  return (
    <div
      key={id}
      className=" bg-[#415A77] w-[377px] rounded-[15px] text-white "
    >
      <img src={imgUrl} alt={name} />

      <div className="p-[15px]">
        <div className="flex justify-between items-center">
          <h6 className="font-poppins text-[15px] font-medium">{category}</h6>

          <div className="flex gap-1 items-center">
            <img src={userIcon} alt="icone" className="w-2.5 h-2.5" />
            <h6 className="font-anek font-normal text-[15px]">{students}</h6>
          </div>
        </div>
        <h3 className="text-2xl font-bold font-poppins mb-3.5">{name}</h3>

        <div className="flex justify-between items-end ">
          <div>
            <div className="flex gap-1 items-center mb-1">
              <img src={star} alt="rating" />
              <h6 className="font-poppins text-[13px] font-normal">{rating}</h6>
            </div>

            <h3 className="font-anek text-2xl font-extrabold">{coursePrice}</h3>
          </div>

          <Button
            title={discoutBtn}
            className="font-anek font-semibold text-[20px] text-white px-[22px] py-2.5 bg-primary rounded-[10px]"
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default CourseItems;
