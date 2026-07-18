import ConfirmGuests from "@/src/components/confirmGuest/ConfirmGuests";
import CoupleGallery from "@/src/components/coupleGallery/CoupleGallery";
import Countdown from "@/src/components/countdown/Countdown";
import EventDetails from "@/src/components/eventDetails/EventDetails";
import Reception from "@/src/components/eventDetailsReception/EventDetails";
import GifList from "@/src/components/giftList/GiftListMobileAlt";
import HeroSection from "@/src/components/hero/Hero";
import Highlights from "@/src/components/highLights/HighLights";
import MessageCouple from "@/src/components/messageCouple/MessageCouple";
import OurStory from "@/src/components/ourStory/OurSotry";
import Reveal from "@/src/components/reveal/Reveal";
import RiceRain from "@/src/components/riceRain/RiceRain";
import WaveDivider from "@/src/components/waveDivider/WaveDivider";

export default function Home() {
  return (
    <div className="w-full h-full">
      <RiceRain />
      <HeroSection
        src="/videos/videocasalrafa.mp4"
        type="video"
        noiva="Rafaela"
        noivo="Vinicius"
      />
      <Reveal>
        <Countdown />
      </Reveal>
      <WaveDivider fromColor="#F1E9D4" toColor="#fff" />
      <Reveal delay={80}>
        <OurStory />
      </Reveal>
      <WaveDivider fromColor="#fff" toColor="#FCF9F1" />
      <Reveal delay={80}>
        <CoupleGallery />
      </Reveal>
      <WaveDivider fromColor="#FCF9F1" toColor="#E2d3ad" />
      <EventDetails />
      {/*  <WaveDivider fromColor="#E2d3ad" toColor="#fff" />
      <Reception /> */}
      <Reveal delay={80}>
        <ConfirmGuests />
      </Reveal>
      <Reveal delay={60}>
        <GifList />
      </Reveal>
      <Reveal delay={80}>
        <MessageCouple />
      </Reveal>
    </div>
  );
}
