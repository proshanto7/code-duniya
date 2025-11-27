import Container from "../common/Container";
import Flex from "../common/Flex";
import Button from "../ui/Button";
import Image from "../ui/Image";
import Banner from "../../assets/images/banner.png";

function Hero() {
  return (
    <section className="bg-primary pt-20 pb-[172px]">
      <Container>
        <Flex>
          <div className="w-2/4">
            <h1 className="max-w-[435px] font-anek font-bold text-white text-[50px]">
              দেশের সর্ব বৃহৎ আইটি ট্রেনিং প্লাটফর্ম
            </h1>

            <p className="max-w-[457px] text-white text-[20px] font-anek my-[41px]">
              আইটি ট্রেনিং এর মাধ্যমে নিজেকে স্বাবলম্বী করুন। নিজেকে আইটি
              এক্সপার্ট হিসেবে গড়ে তুলুন
            </p>

            <Button
              className="font-anek font-semibold text-2xl text-white px-[58px] py-3 bg-secendary rounded-[10px]"
              title="কোর্স দেখুন"
            ></Button>
          </div>

          <div>
            <Image imgUrl={Banner} alt="banner image" />
          </div>
        </Flex>
      </Container>
    </section>
  );
}

export default Hero;
