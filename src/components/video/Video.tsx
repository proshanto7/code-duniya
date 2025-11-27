import VideoImg from "../../assets/images/video.png";
import Container from "../common/Container";
import Title from "../title/Title";
import Button from "../ui/Button";
import VideoItem from "./VideoItem";

function Video() {
  const videoList = [
    {
      id: 1,
      src: VideoImg,
    },
    {
      id: 2,
      src: VideoImg,
    },
    {
      id: 3,
      src: VideoImg,
    },
    {
      id: 4,
      src: VideoImg,
    },
  ];

  return (
    <section>
      <Container>
        <Title
          title="আমাদের সফলতার গল্পগুলো"
          subtitle="আমাদের হাতে তৈরি হওয়া প্রতিটি নক্ষত্র"
        />

        <div className="grid grid-cols-2 gap-6 mb-14">
          {videoList.map((item) => (
            <VideoItem item={item} key={item.id} />
          ))}
        </div>
        <Button
          title="আরও দেখুন"
          className="font-anek font-semibold text-2xl text-white px-[58px] py-3 bg-secendary rounded-[15px] mb-22 block mx-auto"
        />
      </Container>
    </section>
  );
}

export default Video;
