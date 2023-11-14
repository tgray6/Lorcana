import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Card } from "../types/types";
import { CanceledError } from "axios";

export default function useCards() {
  const [cards, setCards] = useState<Card[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<Card[]>("/", { signal: controller.signal })
      .then((res) => {
        setCards(Object.values(res.data));
        // console.log(Object.values(res.data)[0]["card-number"]);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        } else {
          setError(err.message);
          console.log(err);
        }
      });
    return () => controller.abort();
  }, []);

  return { cards, error };
}
