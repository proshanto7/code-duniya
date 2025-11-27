import Container from "../common/Container";
import Flex from "../common/Flex";
import Button from "../ui/Button";
import Image from "../ui/Image";
import Banner from "../../assets/images/banner.png";

function Hero() {
  return (
    <section className="bg-primary pt-8 lg:pt-20 pb-[172px]">
      <Container>
        <Flex className="flex-col md:flex-row md:gap-0 gap-4 ">
          <div className="w-full md:w-2/4">
            <h1 className="max-w-[435px] font-anek font-bold text-white text-3xl lg:text-[50px]">
              দেশের সর্ব বৃহৎ আইটি ট্রেনিং প্লাটফর্ম
            </h1>

            <p className="max-w-[457px] text-white text-lg lg:text-[20px] font-anek my-3 md:my-7 lg:my-[41px]">
              আইটি ট্রেনিং এর মাধ্যমে নিজেকে স্বাবলম্বী করুন। নিজেকে আইটি
              এক্সপার্ট হিসেবে গড়ে তুলুন
            </p>

            <Button
              className="font-anek font-semibold text-lg md:text-2xl text-white px-4 md:px-[58px] py-2 md:py-3 bg-secendary rounded-[10px]"
              title="কোর্স দেখুন"
            ></Button>
          </div>

          <div className="w-full md:w-2/4">
            <Image imgUrl={Banner} alt="banner image" className="w-full"/>
          </div>
        </Flex>
      </Container>
    </section>
  );
}

export default Hero;
