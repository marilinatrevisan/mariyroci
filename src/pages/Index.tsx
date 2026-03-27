import HeroSection from "@/components/HeroSection";
import DateSection from "@/components/DateSection";
import LocationSection from "@/components/LocationSection";
import ScheduleSection from "@/components/ScheduleSection";
import DressCodeSection from "@/components/DressCodeSection";
import GiftSection from "@/components/GiftSection";
import ConfirmSection from "@/components/ConfirmSection";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <DateSection />
      <LocationSection />
      <ScheduleSection />
      <DressCodeSection />
      <GiftSection />
      <ConfirmSection />
      <MusicPlayer />
    </div>
  );
};

export default Index;
