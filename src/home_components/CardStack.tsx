const cards = [
  {
    title: "Possible Futures #002: Gridless",
    sub: "Latest",
    date: "05.15.25",
    id: "1",
    image: "/sample.jpg",
  },
  {
    title: "Join the frontier",
    sub: "Careers",
    id: "2",
  },
  {
    title: "Get in touch with a sales expert",
    sub: "Contact Sales",
    id: "3",
  },
];

export default function CardStack() {
  return (
    <div className="flex flex-col gap-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition"
        >
          <p className="text-sm text-gray-400">{card.sub}</p>
          <p className="text-lg font-medium text-white">{card.title}</p>
          {card.date && <p className="text-xs text-gray-500">{card.date}</p>}
        </div>
      ))}
    </div>
  );
}
