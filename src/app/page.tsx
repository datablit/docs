import Collaboration from "@/home_components/Collaboration";
import Dashboard from "@/home_components/Dashboard";
import DataIngestionSection from "@/home_components/DataIngestionSection";
import DataIntelligence from "@/home_components/DataIntelligence";
import Experiment from "@/home_components/Experiment";
import Header from "@/home_components/Header";
import Highlight from "@/home_components/Highlight";
import HomeFooter from "@/home_components/HomeFooter";
import MainHero from "@/home_components/MainHero";
import Newsletter from "@/home_components/Newsletter";
import PointerGlow from "@/home_components/PointerGlow";
import RuleSignal from "@/home_components/RuleSignal";

export default function Home() {
  return (
    <div
      className="h-screen grid grid-rows-[4rem_calc(100%-7rem)_3rem] fixed top-0 left-0 right-0"
      style={{
        background:
          "linear-gradient(18deg, rgba(0, 0, 0, 1) 58%, rgba(59, 40, 87, 1) 98%)",
      }}
    >
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto px-12 space-y-52 hide-scrollbar">
          <section>
            <MainHero />
          </section>
          <section>
            <Highlight />
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
            <Dashboard />
          </section>
          <section>
            <Experiment />
          </section>
          <section>
            <Collaboration />
          </section>

          <section>
            <Newsletter />
          </section>
        </main>
      </div>
      <HomeFooter />
      <PointerGlow />
    </div>
  );
}

{
  /* <section className="min-h-[calc(100vh-48px)]">
<DataIngestionSection />
</section> */
}
