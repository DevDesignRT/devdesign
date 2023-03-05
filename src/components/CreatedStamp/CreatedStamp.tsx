import React, { FC } from "react";

interface CreatedStampProps {
  createdAt: string;
  createdBy: string;
}

const CreatedStamp: FC<CreatedStampProps> = ({ createdAt, createdBy }) => {
  return (
    <blockquote>
      Created: {createdAt}, by
      {createdBy}
    </blockquote>
  );
};

export default CreatedStamp;
