export const fetchAllPokemon = function fetchAllPokemon() {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon"
  });
};
