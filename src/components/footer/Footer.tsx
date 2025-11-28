import Container from "../common/Container";
import Button from "../ui/Button";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ListItem from "../ui/ListItem";
import Image from "../ui/Image";
import FooterImg from "../../assets/images/banner.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";

function Footer() {
  const footerLinks = [
    {
      id: 1,
      title: "আমাদের কোর্স",
    },
    {
      id: 2,
      title: "মেন্টর",
    },
    {
      id: 3,
      title: "আমাদের ব্লগ",
    },
    {
      id: 4,
      title: "প্রাইভেসি পলিসি",
    },
    {
      id: 5,
      title: "আমাদের সেমিনার",
    },
  ];
  const footerCourses = [
    {
      id: 1,
      title: "ওয়েব ডেভেলপমেন্ট",
    },
    {
      id: 2,
      title: "গ্রাফিক্স ডিজাইন",
    },
    {
      id: 3,
      title: "অ্যাপ ডেভেলপমেন্ট",
    },
    {
      id: 4,
      title: "সাইবার সিকিউরিটি",
    },
    {
      id: 5,
      title: "ভিডিও এডিটিং",
    },
  ];

  return (
    <footer className="bg-primary py-4">
      <Container>
        <div className="text-center">
          <h2 className="lg:text-[80px] text-5xl text-white font-anek font-bold mb-3">
            ভর্তি চলছে
          </h2>
          <p className="lg:text-[20px] text-[16px] font-anek text-white font-bold mb-6">
            আমাদের অনলাইন অথবা অফলাইন কোর্সে এনরোল করে ফেলুন
          </p>

          <div className="flex gap-6 justify-center pb-7 lg:pb-[118px]">
            <Button
              title="সকল কোর্স দেখুন"
              className="border border-white py-2.5 px-15 rounded-[15px] text-white font-anek text-[14px] lg:text-[20px] font-bold"
            />
            <Button
              title="আমাদের সেমিনারে যোগ দিন"
              className="border border-white py-2.5 px-[15px] rounded-[15px] text-white font-anek text-[14px] lg:text-[20px] font-bold"
            />
          </div>
        </div>

        <div className="flex lg:justify-between lg:flex-row flex-col pb-5  lg:pb-15">
          <div className="lg:w-3/4 w-full flex flex-col sm:flex-row sm:gap-0 gap-4">
            <div className="w-2/4">
              <h5 className="lg:text-2xl  text-lg font-semibold font-anek text-white mb-4 lg:mb-7">
                আমাদের ঠিকানা
              </h5>
              <ul>
                <li className="flex gap-3 text-white font-anek font-medium text-[14px] lg:text-2xl mb-1.5 lg:mb-3">
                  <FaMapMarkerAlt />
                  <span>২৮ / ২, মেহের প্লাজা, ধানমন্ডি, ঢাকা</span>
                </li>
                <li className="flex gap-3 text-white font-anek font-medium text-[14px] lg:text-2xl mb-1.5 lg:mb-3">
                  <FaPhone /> <span>+৮৮ ০১৭১৫৫৫৭৮৯৬</span>
                </li>
                <li className="flex gap-3 text-white font-anek font-medium text-[14px] lg:text-2xl mb-1.5 lg:mb-3">
                  <MdEmail /> <span>info@codeduniya.com</span>
                </li>
              </ul>
            </div>

            <div className="flex  gap-10">
              <div>
                <h5 className="lg:text-2xl  text-lg font-semibold font-anek text-white mb-4 lg:mb-7">
                  গুরুত্বপূর্ণ লিংক
                </h5>
                <ul>
                  {footerLinks.map((item) => (
                    <ListItem
                      key={item.id}
                      items={item}
                      className="font-anek text-[14px] lg:text-[20px] font-normal text-white mb-1.5 lg:mb-3"
                    />
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="lg:text-2xl  text-lg font-semibold font-anek text-white mb-4 lg:mb-7">
                  জনপ্রিয় কোর্সগুল
                </h5>
                <ul>
                  {footerCourses.map((item) => (
                    <ListItem
                      key={item.id}
                      items={item}
                      className="font-anek text-[14px] lg:text-[20px] font-normal text-white mb-1.5 lg:mb-3"
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="w-1/4 hidden lg:block">
            <Image imgUrl={FooterImg} alt="footer img" className="  w-full" />
          </div>
        </div>

        <div className="text-center text-white font-anek">
          <h1 className="font-bold text-4xl lg:text-[80px] mb-4">কোড দুনিয়া</h1>
          <h5 className="font-normal text-2xl lg:text-4xl">
            দেশের সর্ববৃহৎ আইটি ট্রেনিং প্লাটফর্ম
          </h5>
          <ul className="flex justify-center gap-6 text-3xl lg:text-[40px] mt-7">
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="#">
                <FaSquareXTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaSquareYoutube />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between text-white font-anek text-[12px] lg:text-[20px] font-normal mt-6 lg:mt-[131px]">
          <p>২০২৪ কপিরাইট | মাহমুদ হাসান রামীম | সর্বসত্ত্ব সংরক্ষিত</p>
          <p>প্রাইভেসি পলিসি</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
