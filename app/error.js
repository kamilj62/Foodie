"use client";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An error occured</h1>
      <p>failed to fetch meal data. Please try again later.</p>
    </main>
  );
}
