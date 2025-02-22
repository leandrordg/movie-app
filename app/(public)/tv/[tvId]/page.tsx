import { Suspense } from "react";

import { DetailsFallback } from "@/components/details-fallback";
import { TvDetails } from "@/components/tv-details";

interface Props {
  params: Promise<{ tvId: string }>;
}

export default async function TvPage({ params }: Props) {
  const { tvId } = await params;

  return (
    <main>
      <Suspense fallback={<DetailsFallback />}>
        <TvDetails tvId={tvId} />
      </Suspense>
    </main>
  );
}
