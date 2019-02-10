export const TOGGLE_FILTER = "TOGGLE_FILTER";
export const TOGGLE_MENU = "TOGGLE_MENU";

export function toggleFilter() {
  return { type: TOGGLE_FILTER };
}

export function toggleMenu() {
  return { type: TOGGLE_MENU };
}
