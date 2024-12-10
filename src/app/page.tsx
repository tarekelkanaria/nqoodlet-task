import Cards from "components/Cards";
import CardsActions from "components/CardsActions";
import Header from "components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-slate-500">
        <CardsActions />
        <Cards />
      </main>
    </>
  );
}
