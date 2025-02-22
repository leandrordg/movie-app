export function formatReleaseDate(
  date: string,
  opts?: Intl.DateTimeFormatOptions
) {
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

export function formatVoteAverage(vote: number) {
  return vote > 999 ? (vote / 1000).toFixed(1) + "k" : vote;
}

export function formatAirDate(date: string) {
  return new Date(date);
}
