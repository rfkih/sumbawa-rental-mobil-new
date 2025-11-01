import { fetchCars } from "@utils";
import { HomeProps } from "@types";
import { fuels, yearsOfProduction } from "@constants";
import { AboutSections, Hero, Fleet } from "@components";


export default async function Home({ searchParams }: HomeProps) {


  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Katalog Mobil</h1>
          <p>Temukan mobil yang Anda inginkan di sini!</p>
        </div>
        <section>
          <div>
            <Fleet/>
          </div>
          <div>
            <AboutSections/>
          </div>
        </section>
      </div>
    </main>
  );
}
