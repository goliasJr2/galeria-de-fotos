import { photo } from "@/types/photo";

type props = {
  photo: photo;
  onClick: () => void;
};
export const PhotoItem = ({ photo, onClick }: props) => {
  return (
    <div className="cursor-pointer hover:opacity-80 m-3" onClick={onClick}>
      <img src={`/assets/img/${photo.url}`} alt="" className="w-full" />
    </div>
  );
};
