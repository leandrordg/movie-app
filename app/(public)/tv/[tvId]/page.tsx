import { Suspense } from "react";

import { TvDetails } from "@/components/tv-details";
import { TvFallback } from "@/components/tv-fallback";

interface Props {
  params: Promise<{ tvId: string }>;
}

export default async function TvPage({ params }: Props) {
  const { tvId } = await params;

  return (
    <main>
      <Suspense fallback={<TvFallback />}>
        <TvDetails tvId={tvId} />
      </Suspense>
    </main>
  );
}
