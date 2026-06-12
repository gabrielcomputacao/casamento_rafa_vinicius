import ConfirmGuests from "@/src/components/confirmGuest/ConfirmGuests";
import Countdown from "@/src/components/countdown/Countdown";
import EventDetails from "@/src/components/eventDetails/EventDetails";
import Reception from "@/src/components/eventDetailsReception/EventDetails";
import GifList from "@/src/components/giftList/GiftList";
import HeroSection from "@/src/components/hero/Hero";
import Highlights from "@/src/components/highLights/HighLights";
import MessageCouple from "@/src/components/messageCouple/MessageCouple";
import OurStory from "@/src/components/ourStory/OurSotry";
import RiceRain from "@/src/components/riceRain/RiceRain";
import WaveDivider from "@/src/components/waveDivider/WaveDivider";

export default function Home() {
  return (
    <div className="w-full h-full">
      <RiceRain />
      <HeroSection
        src="/anabruno/videos/casaldancandocasamento.mp4"
        type="video"
        noiva="Ana"
        noivo="Bruno"
      />
      <Countdown />
      <WaveDivider fromColor="#C2C8C6" toColor="#fff" />
      <OurStory />
      <WaveDivider fromColor="#fff" toColor="#819596" />
      <EventDetails />
       <WaveDivider fromColor="#819596" toColor="#fff" />
      <Reception />
      <ConfirmGuests />
      <GifList />
      <MessageCouple />
    </div>
  );
}
