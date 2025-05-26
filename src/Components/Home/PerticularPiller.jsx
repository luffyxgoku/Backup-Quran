import React from "react";
import { useParams } from "react-router-dom";
import PillerBanner from "./PillerBanner";
import PillerInfo from "./PillerInfo";
import bismillah from "../../assets/bismillah.png";

import {
  bannerImages,
  faithPiller,
  hajjPiller,
  jihadEssence,
  salahPiller,
  sawmPiller,
  zakatPiller,
} from "./DATA/Data";

const pillerDataMap = {
  faith: faithPiller,
  salahwat: salahPiller,
  hajj: hajjPiller,
  sawm: sawmPiller,
  donation: zakatPiller,
  jihad: jihadEssence,
};

export default function PerticularPiller() {
  const { piller } = useParams();
  const selectedData = pillerDataMap[piller];

  return (
    <div className="perticular-piller-container">
      <PillerBanner imgSrc={bannerImages[piller]} />
      <div className="bismillah-container-new">
        <img src={bismillah} alt="bismillah" className="bismillah-new" />
      </div>
      {selectedData && <PillerInfo data={selectedData} />}
    </div>
  );
}
