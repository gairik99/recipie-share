const fs = require("fs");

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export function getMeals() {
  const stmt = db.prepare("SELECT * FROM meals");
  // throw new Error("Lodaing meals failed");
  return stmt.all();
}

export function getMeal(slug) {
  const stmt = db.prepare("SELECT * FROM meals WHERE slug = ?");
  const meal = stmt.get(slug);
  if (!meal) {
    throw new Error("Meal not found");
  } else {
    return meal;
  }
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  db.prepare(
    `
  INSERT INTO meals (title, slug, image, summary, instructions, creator, creator_email)
  VALUES (
  @title, 
  @slug, 
  @image, 
  @summary, 
  @instructions, 
  @creator, 
  @creator_email
  )
  `
  ).run(meal);
}
