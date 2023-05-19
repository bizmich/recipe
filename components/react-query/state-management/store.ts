import { Recipe } from "@/types/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Store {
  recipe: Recipe[];
  comment: string[];
  postRecipe: (data: Recipe) => void;
  deleteRecipe: (id: string) => void;
  putRecipe: (data: Recipe) => void;
}

const useStore = create<Store>()(
  persist(
    (set, get) => ({
      recipe: [],
      comment: [],
      postRecipe: (data) => set({ recipe: [data, ...get().recipe] }),
      deleteRecipe: (id) =>
        set({ recipe: get().recipe.filter((r) => r.id !== id) }),
      putRecipe: (data) =>
        set({
          recipe: get().recipe.filter((r) =>
            r.id == data.id ? { ...r, ...data } : r
          ),
        }),
      //   addAFish: () => set({ fishes: get().fishes + 1 }),
    }),
    {
      name: "food-storage", // unique name
      getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
    }
  )
);
export default useStore;
