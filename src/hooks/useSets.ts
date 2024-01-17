import { ISet } from "../types/types";
import useData from "./useData";

export default function useSets() {
  return useData<ISet>("/sets/fetch");
}

// import { useState, useEffect } from "react";
// import apiClient from "../services/api-client";
// import { ISet } from "../types/types";
// import { CanceledError } from "axios";

// export default function useCards() {
//   const [set, setSet] = useState<ISet[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const controller = new AbortController();

//     setIsLoading(true);
//     apiClient
//       .get<ISet[]>("/sets/fetch", { signal: controller.signal })
//       .then((res) => {
//         setSet(res.data);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setIsLoading(false);
//         setError(err.message);
//       });
//     return () => controller.abort();
//   }, []);

//   return { set, error, isLoading };
// }
