import React from "react";
interface Props {
  params: { id: number; photoId: number };
}

const PhotoDetail = ({ params: { id, photoId } }: Props) => {
  return (
    <div className=" text-secondary-content">
      User: {id}, photo:{photoId}
    </div>
  );
};

export default PhotoDetail;
