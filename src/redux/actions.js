export const TOGGLE_FILTER = "TOGGLE_FILTER";
export const SHOW_MENU = "SHOW_MENU";
export const HIDE_MENU = "TOGGLE_MENU";

export function toggleFilter() {
  return { type: TOGGLE_FILTER };
}

export function showMenu() {
  return { type: SHOW_MENU };
}

export function hideMenu() {
  return { type: HIDE_MENU };
}
