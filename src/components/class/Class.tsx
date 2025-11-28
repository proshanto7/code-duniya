import Image from "../ui/Image";
import ClassImg from "../../assets/images/class.png";
import Container from "../common/Container";
import Flex from "../common/Flex";
import ListItem from "../ui/ListItem";

function Class() {
  const classList = [
    {
      id: 1,
      title: "সপ্তাহে ২ - ৩ দিন ক্লাস",
    },
    {
      id: 2,
      title: "অনলাইন / অফলাইন ক্লাস প্রতিটি কোর্সে",
    },
    {
      id: 3,
      title: "মনোরম ক্লাস রুম",
    },
    {
      id: 4,
      title: "অনলাইন ২৪/৭ সাপোর্ট",
    },
    {
      id: 5,
      title: "অত্যাধুনিক মনিটর এবং প্রজেক্টর এর সুবিধা",
    },
  ];

  return (
    <section className="lg:mb-[141px] md:mb-15 mb-10">
      <Container>
        <Flex className="lg:gap-[35px] flex-col sm:flex-row gap-5">
          <div className="sm:w-2/4 w-full">
            <Image imgUrl={ClassImg} alt="class img" className="w-full" />
          </div>
          <div className="sm:w-2/4 w-full">
            <h2 className="lg:text-4xl md:text-3xl text-2xl text-black font-anek font-bold mb-5 lg:mb-8">
              আমাদের ক্লাসের বিশেষত্ব
            </h2>

            {classList.map((item) => (
              <ListItem
                key={item.id}
                items={item}
                className="lg:text-2xl md:text-lg text-[16px] text-black font-anek font-medium mb-3 lg:mb-6 ml-12"
              />
            ))}
          </div>
        </Flex>
      </Container>
    </section>
  );
}

export default Class;
