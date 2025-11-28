import type { CategoryItemProps } from "../types/catagoryItemType";

function CategoryItem({ item }: { item: CategoryItemProps }) {
  return (
    <div
      key={item.id}
      className="w-full rounded-[25px] bg-[#1B263B] py-4 lg:px-[43px] text-center"
    >
      <span className="flex justify-center">{item.svgIcon}</span>

      <h5 className="lg:text-2xl text-lg font-semibold text-white font-anek mt-2.5">
        {item.name}
      </h5>
    </div>
  );
}

export default CategoryItem;
