import apiFetch from "./api-fetch";

export function getGames() {
  return apiFetch("/games");
}

export function getGame(id) {
  return apiFetch(`/game/${id}`);
}

export function createGame(game) {
  return apiFetch("/game", { body: game });
}

export function updateGame(id, game) {
  return apiFetch(`/game/${id}`, { method: "PATCH", body: game });
}

export function deleteGame(id) {
  return apiFetch(`/game/${id}`, { method: "DELETE" });
}
