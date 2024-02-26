import Link from 'next/link';
import s from './page.module.css';
import MealsGrid from '@/components/meals-grid/meals-grid';

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
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
