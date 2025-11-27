import Container from "../common/Container";
import Title from "../title/Title";
import MERNstack from "../../assets/images/mern.png";
import UIUX from "../../assets/images/uiux.png";
import VideoEdit from "../../assets/images/videoEditing.png"
import DigMark from "../../assets/images/digitalMarketing.jpg"
import GoogleSeo from "../../assets/images/seoCourse.jpg"
import Python from "../../assets/images/python.jpg"
import userIcon from "../../assets/images/user.png";
import Star from "../../assets/images/star.png";
import CourseItems from "./CourseItems";
import Button from "../ui/Button";




function Courses() {
  const coursesList = [
    {
      id: 1,
      name: "MERN Stack Development",
      imgUrl: MERNstack,
      category: "Web and Software",
      userIcon: userIcon,
      students: "৩০০০ স্টুডেন্ট",
      star: Star,
      rating: "Rating | 450 Reviews",
      coursePrice: "৳  1,20000 BDT",
      discoutBtn: "ডিসকাউন্ট",
    },
    {
      id: 2,
      name: "UI/UX Design",
      imgUrl: UIUX,
      category: "Graphics & Multimedia",
      userIcon: userIcon,
      students: "৩০০০ স্টুডেন্ট",

      star: Star,
      rating: "Rating | 450 Reviews",
      coursePrice: "৳  1,20000 BDT",
      discoutBtn: "ডিসকাউন্ট",
    },
    {
      id: 3,
      name: "Professional Video Editing",
      imgUrl: VideoEdit,
      category: "Films & Media",
      userIcon: userIcon,
      students: "৩০০০ স্টুডেন্ট",

      star: Star,
      rating: "Rating | 450 Reviews",
      coursePrice: "৳  1,20000 BDT",
      discoutBtn: "ডিসকাউন্ট",
    },
    {
      id: 4,
      name: "Diploma in Digital Marketing",
      imgUrl: DigMark,
      category: "digital marketing",
      userIcon: userIcon,
      students: "৩০০০ স্টুডেন্ট",

      star: Star,
      rating: "Rating | 450 Reviews",
      coursePrice: "৳  1,20000 BDT",
      discoutBtn: "ডিসকাউন্ট",
    },
    {
      id: 3,
      name: "AI Driven Google Ads and Shopify SEO",
      imgUrl: GoogleSeo,
      category: "digital marketing",
      userIcon: userIcon,
      students: "৩০০০ স্টুডেন্ট",

      star: Star,
      rating: "Rating | 450 Reviews",
      coursePrice: "৳  1,20000 BDT",
      discoutBtn: "ডিসকাউন্ট",
    },
    {
      id: 6,
      name: "Back-End Development with Python & Django",
      imgUrl: Python,
      category: "Web and Software",
      userIcon: userIcon,
      students: "৩০০০ স্টুডেন্ট",

      star: Star,
      rating: "Rating | 450 Reviews",
      coursePrice: "৳  1,20000 BDT",
      discoutBtn: "ডিসকাউন্ট",
    },
  ];

  return (
    <section className="pt-[180px] pb-24">
      <Container>
        <Title title="আমাদের কোর্স সমুহ" subtitle="আমাদের সমস্ত কোর্স সুদক্ষ মেন্টর দ্বারা পরিচালিত এবং সমৃদ্ধ রিসোর্স
        দ্বারা পরিপূর্ণ"/>

        <div className="grid grid-cols-3 gap-6">
          {coursesList.map((item) => (

            <CourseItems item={item} key={item.id}/>
           
          ))}
        </div>
       <Button title="আরও কোর্স দেখুন" className="font-anek font-semibold text-2xl text-white px-[58px] py-3 bg-secendary rounded-[15px] mt-12 block mx-auto"/>
      </Container>
    </section>
  );
}

export default Courses;
