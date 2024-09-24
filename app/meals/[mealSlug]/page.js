export default function MealDetailsPage({ params }) {
  return (
    <main>
      <h1>Meals Detail</h1>
      <p>{params.slug}</p>
    </main>
  );
}
