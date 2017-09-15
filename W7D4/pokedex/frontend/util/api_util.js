export const fetchAllPokemon = function fetchAllPokemon() {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon"
  });
};

export const fetchSinglePokemon = function fetchSinglePokemon(id) {
  return $.ajax({
    method: "GET",
    url: `/api/pokemon/${id}`
  });
};
