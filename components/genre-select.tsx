"use client";

import { useQueryState } from "nuqs";

import { Button } from "@/components/ui/button";

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
      <Button
        key={genre.id}
        variant={activeGenre ? "active" : "outline"}
        onClick={() => handleClick(genre.id)}
      >
        {genre.name}
      </Button>
    );
  });
}
