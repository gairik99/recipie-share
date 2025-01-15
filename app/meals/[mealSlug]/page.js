import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { mealSlug } = await params;
  let meal;
  try {
    meal = await getMeal(mealSlug);
  } catch (err) {
    console.log(err.message);
  }

  if (!meal) {
    notFound();
  }
  // console.log(meal);
  return {
    title: meal.title,
    description: meal.summary,
  };
}

const MealDetaisPage = async ({ params }) => {
  const singleMeal = await params;
  let meal;
  try {
    meal = await getMeal(singleMeal.mealSlug);
  } catch (err) {
    console.log(err.message);
  }

  if (!meal) {
    notFound();
  }
  // console.log(meal.instructions);
  meal.instructions = meal.instructions.replace(/\n/g, "<br>");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mail:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
};

export default MealDetaisPage;
