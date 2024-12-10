import CardsList from "./CardsList";

export default function Cards() {
  return (
    <section className="container bg-neutral-200 rounded flex justify-center py-3">
      <div className="p-2 grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 max-w-3xl">
        <CardsList />
      </div>
    </section>
  );
}
