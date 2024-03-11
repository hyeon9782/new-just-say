import { SITUATIONS } from "@/constants/situation";
import SituationCard from "./situation-card";

const SituationList = () => {
  return (
    <div className="flex flex-col gap-2">
      {SITUATIONS.map((situation, index) => (
        <SituationCard key={index} situation={situation} />
      ))}
    </div>
  );
};

export default SituationList;
