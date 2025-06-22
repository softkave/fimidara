import { auth } from "@/auth";

export default auth((req) => {
  // Add any custom middleware logic here if needed
});

export const config = {
  unstable_allowDynamic: ["**"],
};
