import Marquee from "react-fast-marquee";

const quotes = [
  { quote: "They transformed our brand in six weeks.", author: "Sara Lee", role: "CEO, Northwind" },
  { quote: "The most thoughtful studio we have worked with.", author: "Tom Hart", role: "Founder, Brightside" },
];

export default function Testimonials() {
  return (
    <section className="bg-stone-50 py-20">
      <h2 className="mb-10 text-center font-serif text-4xl text-stone-900">What our clients say</h2>
      <Marquee gradient={false} speed={40}>
        {quotes.map((q) => (
          <figure key={q.author} className="mx-4 w-96 rounded-2xl bg-white p-8 shadow-sm animate-float">
            <blockquote className="text-lg text-stone-700">“{q.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-stone-500">{q.author} · {q.role}</figcaption>
          </figure>
        ))}
      </Marquee>
    </section>
  );
}
