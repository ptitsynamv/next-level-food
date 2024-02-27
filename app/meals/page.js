import Link from 'next/link';
import s from './page.module.css';
import MealsGrid from '@/components/meals-grid/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

export const metadata = {
  title: 'All meals',
  description: 'Browse meals',
};

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={s.header}>
        <h1>
          Delicious meals, created <span className={s.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={s.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={s.main}>
        <Suspense fallback={<p className={s.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
