"use client";

import { useQueryState } from "nuqs";

export function GenreSelect({ genres }: { genres: Genre[] }) {
  const [genreId, setGenreId] = useQueryState("genreId", { shallow: false });

  const genresWithAll = [{ id: null, name: "Todos" }, ...genres];

  const handleClick = (id: string | null) => {
    // if user is seeing all genres, should not request all genres again
    if (id === null && genreId === null) return;

    if (genreId === id) {
      setGenreId(null);
      return;
    }

    setGenreId(id);
  };

  return genresWithAll.map((genre) => {
    const activeGenre = genreId === genre.id;

    return (
      <button
        key={genre.id}
        className={`px-4 py-1 border rounded-md shadow text-sm shrink-0 cursor-pointer transition-colors ${
          activeGenre
            ? "bg-blue-900 hover:bg-blue-900/90 border-blue-900"
            : "bg-muted hover:bg-muted/90 border-muted"
        }`}
        onClick={() => handleClick(genre.id)}
      >
        {genre.name}
      </button>
    );
  });
}
