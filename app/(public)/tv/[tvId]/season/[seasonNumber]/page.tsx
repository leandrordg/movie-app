import { Suspense } from "react";

import { SeasonDetails } from "@/components/season-details";
import { SeasonFallback } from "@/components/season-fallback";

interface Props {
  params: Promise<{ tvId: string; seasonNumber: string }>;
}

export default async function SeasonPage({ params }: Props) {
  const { tvId, seasonNumber } = await params;

  return (
    <main>
      <Suspense fallback={<SeasonFallback />}>
        <SeasonDetails tvId={tvId} seasonNumber={seasonNumber} />
      </Suspense>
    </main>
  );
}
