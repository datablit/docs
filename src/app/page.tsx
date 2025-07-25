import Collaboration from "@/home_components/Collaboration";
import DataIngestionSection from "@/home_components/DataIngestionSection";
import DataIntelligence from "@/home_components/DataIntelligence";
import Engagement from "@/home_components/Engagement";
import Experiment from "@/home_components/Experiment";
import Header from "@/home_components/Header";
import Hero from "@/home_components/Hero";
import HomeFooter from "@/home_components/HomeFooter";
import MainHero from "@/home_components/MainHero";
import Newsletter from "@/home_components/Newsletter";
import PointerGlow from "@/home_components/PointerGlow";
import Recommendation from "@/home_components/Recommendation";
import RuleSignal from "@/home_components/RuleSignal";

export default function Home() {
  return (
    <div
      className="h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(18deg, rgba(0, 0, 0, 1) 58%, rgba(59, 40, 87, 1) 98%)",
      }}
    >
      <PointerGlow />
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur ">
        <Header />
      </header>

      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-black/60 backdrop-blur ">
        <HomeFooter />
      </footer>

      <div className="flex flex-1 pt-14 pb-14 overflow-hidden">
        <main className="flex-1 overflow-y-auto px-12 space-y-52 hide-scrollbar">
          <section>
            <MainHero />
          </section>
          <section>
            <DataIngestionSection />
          </section>
          <section>
            <RuleSignal />
          </section>
          <section>
            <DataIntelligence />
          </section>
          <section>
            <Collaboration />
          </section>
          <section>
            <Experiment />
          </section>
          <section>
            <Recommendation />
          </section>
          <section>
            <Engagement />
          </section>
          <section>
            <Newsletter />
          </section>
          <section>
            <Hero />
          </section>
        </main>
      </div>
    </div>
  );
}

{
  /* <section className="min-h-[calc(100vh-48px)]">
<DataIngestionSection />
</section> */
}
