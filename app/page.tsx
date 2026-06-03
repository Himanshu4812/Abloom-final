import { MainLayout } from "@/src/components/layout/MainLayout";
import { HeroScrollSequence } from "@/src/components/sections/HeroScrollSequence";
import { Overview } from "@/src/components/sections/Overview";
import { UnitInfrastructure } from "@/src/components/sections/UnitInfrastructure";
import { Gallery } from "@/src/components/sections/Gallery";
import { PlansSection } from "@/src/components/sections/PlansSection";
import { GetInTouch } from "@/src/components/sections/GetInTouch";

export default function AbloomPage() {
  return (
    <MainLayout>
      <HeroScrollSequence />
      <Overview />
      <UnitInfrastructure />
      <Gallery />
      <PlansSection />
      <GetInTouch />
    </MainLayout>
  );
}
