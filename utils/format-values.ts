export function formatReleaseDate(
  date: string,
  opts?: Intl.DateTimeFormatOptions
) {
  if (!date) return "N/A";
  return new Intl.DateTimeFormat("pt-BR", opts).format(new Date(date));
}

export function formatAverageVote(
  vote: number,
  opts?: Intl.DateTimeFormatOptions
) {
  return new Intl.NumberFormat("pt-BR", opts).format(Number(vote.toFixed(1)));
}

export function formatRuntime(runtime: number) {
  if (runtime === null) return "N/A";

  const hours = Math.floor(runtime / 60);

  if (hours === 0) return runtime + "min";

  const minutes = runtime % 60;
  return new Intl.NumberFormat("pt-BR").format(hours) + "h" + minutes + "min";
}

export function formatAirDate(date: string) {
  return new Date(date);
}

export function formatGenreIds(genreId?: string) {
  switch (genreId) {
    case "28":
      return "de ação";
    case "12":
      return "de aventura";
    case "16":
      return "de animação";
    case "35":
      return "de comédia";
    case "80":
      return "de crime";
    case "99":
      return "de documentário";
    case "18":
      return "de drama";
    case "10751":
      return "de família";
    case "14":
      return "de fantasia";
    case "36":
      return "de história";
    case "27":
      return "de terror";
    case "10402":
      return "de música";
    case "9648":
      return "de mistério";
    case "10749":
      return "de romance";
    case "878":
      return "de ficção científica";
    case "10770":
      return "de cinema TV";
    case "53":
      return "de thriller";
    case "10752":
      return "de guerra";
    case "37":
      return "de faroeste";
    default:
      return;
  }
}
