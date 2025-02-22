import { Suspense } from "react";

import { EpisodeDetails } from "@/components/episode-details";
import { EpisodeFallback } from "@/components/episode-fallback";

interface Props {
  params: Promise<{
    tvId: string;
    seasonNumber: string;
    episodeNumber: string;
  }>;
}

export default async function EpisodePage({ params }: Props) {
  const { tvId, seasonNumber, episodeNumber } = await params;

  return (
    <main>
      <Suspense fallback={<EpisodeFallback />}>
        <EpisodeDetails
          tvId={tvId}
          seasonNumber={seasonNumber}
          episodeNumber={episodeNumber}
        />
      </Suspense>
    </main>
  );
}
