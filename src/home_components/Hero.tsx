import CardStack from "./CardStack";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 px-6 mt-24 gap-12">
      <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
        <span>Building the future of</span>
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}
          bitcoin mining{" "}
        </span>
      </h1>
      <div className="flex flex-col gap-4">
        <CardStack />
      </div>
    </section>
  );
}
