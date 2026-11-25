import { useEffect, useState } from "react";
import axios from "axios";
import { calculateTotalExperience } from "../utils/experienceUtils";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

/**
 * Fetches `/experience` and returns the formatted total experience duration
 * across all entries, falling back to `fallback` while loading or on error.
 */
export function useTotalExperience(fallback = "2+ years") {
  const [totalExperienceText, setTotalExperienceText] = useState(fallback);

  useEffect(() => {
    let isMounted = true;

    const loadTotalExperience = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/experience`);
        const apiTotal = response.data?.totalExperience;
        const resolvedTotal =
          apiTotal && typeof apiTotal.totalMonths === "number"
            ? apiTotal
            : Array.isArray(response.data?.data)
              ? calculateTotalExperience(response.data.data)
              : null;

        if (isMounted && resolvedTotal?.totalMonths > 0 && resolvedTotal.formatted) {
          setTotalExperienceText(resolvedTotal.formatted);
        }
      } catch (error) {
        console.error("Error fetching total experience:", error);
      }
    };

    loadTotalExperience();

    return () => {
      isMounted = false;
    };
  }, [fallback]);

  return totalExperienceText;
}
