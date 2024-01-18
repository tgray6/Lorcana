import { ICard, ISet } from "../types/types";
import useData from "./useData";

export default function useCards(selectedSet: ISet | null) {
  return useData<ICard>("/cards/all?page=1");
}

// import { useState, useEffect } from "react";
// import apiClient from "../services/api-client";
// import { ICard } from "../types/types";
// import { CanceledError } from "axios";

// export default function useCards() {
//   const [cards, setCards] = useState<ICard[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const controller = new AbortController();

//     setIsLoading(true);
//     apiClient
//       .get<ICard[]>("/cards/all?page=1", { signal: controller.signal })
//       .then((res) => {
//         setCards(res.data);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setIsLoading(false);
//         setError(err.message);
//       });
//     return () => controller.abort();
//   }, []);

//   return { cards, error, isLoading };
// }
