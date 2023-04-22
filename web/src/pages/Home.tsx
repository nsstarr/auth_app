import Navbar from '../components/Navbar';
import CROMWELL from "../assets/cromwellabout.jpg";

interface HomeProps {}

function Home({}: HomeProps) {
  return (
    <main className="h-[100vh]">
      <Navbar />
      <section className="flex flex-col space-y-8 mx-60 mt-20">
        <img src={CROMWELL} alt="cromwell" className="w-full" />
        <h1 className="text-orange font-display text-2xl font-bold">
          {' '}
          We keep industry working
        </h1>
        <p data-testid="paragraph-1">
          Cromwell has grown from humble beginnings over 50 years ago to become
          a trusted source of MRO supplies and industrial products.
        </p>
        <p data-testid="paragraph-2">
          With a network of branches and offices in the UK and across the
          globe,we help keep the vital cogs of industry turning. Supporting
          those who make and manufacture the world around us. Going above and
          beyond to keep operations running and people safe.
        </p>
        <p data-testid="paragraph-3">
          We do this by not only providing easy access to an extensive range of
          great value, high-quality products, but also through exceptional
          customer service and a wealth of technical expertise to help you get
          the job done. Since becoming part of the W.W. Grainger, Inc. family in
          2015, we’re stronger than ever. Always ready to serve. Always
          committed to supporting our customers as they rise to new challenges –
          today, tomorrow and beyond.
        </p>
      </section>
    </main>
  );
}

export default Home;
