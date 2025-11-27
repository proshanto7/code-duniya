import Image from "../ui/Image";

type videoType = {
  id: number;
  src: string;
};

function VideoItem({ item }: { item: videoType }) {
  return (
    <div key={item.id}>
      <Image imgUrl={item.src} alt="video img" />
    </div>
  );
}

export default VideoItem;
