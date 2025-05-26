import React from "react";
import { useParams } from "react-router-dom";
import heaven from "../../assets/heaven-banner.jpg";
import hell from "../../assets/hell-banner.jpg";
import barzakh from "../../assets/barzakh-banner.jpg";
import AfterlifeInfo from "./AfterlifeInfo";
import { barzakhEssence, jahannumEssence, jannahEssence } from "./DATA/Data";

const imageSources = {
  jannah: heaven,
  jahannum: hell,
  barzakh: barzakh,
};
const dataSources = {
  jannah: jannahEssence,
  jahannum: jahannumEssence,
  barzakh: barzakhEssence,
};

export default function Jannah() {
  const { perticularAfterlife } = useParams();
  const selectedImage = imageSources[perticularAfterlife];
  const selectedData = dataSources[perticularAfterlife];

  return (
    <div className="perticular-afterlife">
      <img src={selectedImage} alt="banner-img" className="afterlife-banner" />
      <div className="afterlife-info">
        <AfterlifeInfo data={selectedData} />
      </div>
    </div>
  );
}
