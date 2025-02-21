export function formatReleaseDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR").format(new Date(date));
}

export function formatAverageVote(vote: number) {
  return new Intl.NumberFormat("pt-BR").format(vote);
}

export function formatRuntime(runtime: number) {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return new Intl.NumberFormat("pt-BR").format(hours) + "h" + minutes + "min";
}
