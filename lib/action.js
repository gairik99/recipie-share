"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";
import { uploadImage } from "./cloudinary";

const isInvalidInput = (text) => {
  return !text || text.trim() === "";
};

export async function shareMeal(prevState, formData) {
  let image = formData.get("image");
  // console.log(image);
  const meal = {
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
  };

  if (
    isInvalidInput(meal.creator) ||
    isInvalidInput(meal.creator_email) ||
    isInvalidInput(meal.title) ||
    isInvalidInput(meal.summary) ||
    isInvalidInput(meal.instructions) ||
    image?.size == 0
  ) {
    return { message: "Invalid input" };
  }
  let imageUrl;
  try {
    imageUrl = await uploadImage(image);
  } catch (err) {
    throw new Error("Image upload failed");
  }
  meal.image = imageUrl;
  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
