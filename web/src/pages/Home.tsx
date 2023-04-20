import Navbar from '../components/Navbar';

interface HomeProps {}

function Home({}: HomeProps) {
  return (
    <main className='h-[100vh]'>
      <Navbar />
      <section className='mt-64'>Home</section>
    </main>
  );
}

export default Home;
