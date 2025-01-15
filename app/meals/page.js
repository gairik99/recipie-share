import React, { Suspense } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

export const metadata = {
  title: "All Meals",
  description: "Browse meals, shared by a food-loving community.",
};

async function Meals() {
  const meals = getMeals();
  // console.log("mealspage", meals);
  return <MealsGrid meals={meals} />;
}

const MealsPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious Meals, <span className={styles.highlight}>by you</span>
        </h1>
        <p>Choose your recipe and and cook it yourself.It is easy and fun!</p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p className={styles.loading}>Loading... ..</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
