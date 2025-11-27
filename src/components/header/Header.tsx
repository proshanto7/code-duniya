import Container from "../common/Container";
import ListItem from "../ui/ListItem";
import Flex from "../common/Flex";
import Button from "../ui/Button";
import Image from "../ui/Image";
import LogoImg from "../../assets/images/logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";

function Header() {
  let [istrue, setIstrue] = useState<boolean>(false);

  const MobileBtnHendle = () => {
    setIstrue(!istrue);
  };

  const navList = [
    {
      id: 1,
      title: "হোম",
    },
    {
      id: 2,
      title: "আমাদের কোর্সসমহ",
    },
    {
      id: 3,
      title: "যোগাযোগ",
    },
    {
      id: 4,
      title: "হোক্যারিয়ার গাইডলাইনম",
    },
  ];

  return (
    <header className="bg-primary text-white py-[15px]">
      <nav className="relative">
        <Container>
          <Flex className="justify-between items-center">
            <Image
              imgUrl={LogoImg}
              alt="logo"
              className="max-w-[150px] lg:w-auto cursor-pointer"
            />
            <ul className="hidden lg:flex gap-6 ">
              {navList.map((items) => (
                <ListItem
                  className="text-[24px] font-semibold font-anek cursor-pointer  "
                  key={items.id}
                  items={items}
                />
              ))}
            </ul>

            {istrue ? (
              <div className="absolute left-0 top-[50px] sm:top-[55px] translate-x-0 duration-500 ease-linear text-center py-5 bg-primary w-full lg:hidden z-999">
                <ul>
                  {navList.map((items) => (
                    <ListItem
                      className="text-[18px] py-3 font-semibold font-anek cursor-pointer hover:bg-secendary duration-500  "
                      key={items.id}
                      items={items}
                    />
                  ))}
                </ul>
                <Button
                  title="কোর্স দেখুন"
                  className="block sm:hidden font-anek font-semibold text-lg lg:text-2xl text-white px-5 lg:px-[58px] lg:py-3 py-2 bg-secendary rounded-[10px] mx-auto"
                ></Button>
              </div>
            ) : (
              <div className="absolute left-0 top-[50px] sm:top-[55px] translate-x-[-1023px] duration-500 ease-linear text-center py-5 bg-primary w-full lg:hidden z-999">
                <ul>
                  {navList.map((items) => (
                    <ListItem
                      className="text-[18px] py-3 font-semibold font-anek cursor-pointer hover:bg-secendary duration-500  "
                      key={items.id}
                      items={items}
                    />
                  ))}
                </ul>
                <Button
                  title="কোর্স দেখুন"
                  className="block sm:hidden font-anek font-semibold text-lg lg:text-2xl text-white px-5 lg:px-[58px] lg:py-3 py-2 bg-secendary rounded-[10px] mx-auto"
                ></Button>
              </div>
            )}

            <div className="flex items-center gap-5">
              <Button
                title="কোর্স দেখুন"
                className="hidden sm:block font-anek font-semibold text-lg lg:text-2xl text-white px-5 lg:px-[58px] lg:py-3 py-2 bg-secendary rounded-[10px]"
              ></Button>

              {istrue ? (
                <MdOutlineCancel
                  onClick={MobileBtnHendle}
                  className="lg:hidden text-4xl cursor-pointer"
                />
              ) : (
                <RiMenu3Fill
                  onClick={MobileBtnHendle}
                  className="lg:hidden text-4xl cursor-pointer "
                />
              )}
            </div>
          </Flex>
        </Container>
      </nav>
    </header>
  );
}

export default Header;
