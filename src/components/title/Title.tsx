function Title( {title , subtitle} : {title : string , subtitle: string}) {
  return (
    <div className="text-center lg:mb-[62px] mb-8">
      <h2 className="text-2xl lg:text-4xl font-bold font-anek text-black pb-3">
        {title}
      </h2>
      <p className=" text-[16px] lg:text-[20px]  font-medium font-anek text-black">
        {subtitle}
      </p>
    </div>
  );
}

export default Title;
