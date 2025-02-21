import { Suspense } from "react";

import { HeaderFallback } from "@/components/header-fallback";
import { TvDetails } from "@/components/tv-details";

interface Props {
  params: Promise<{ tvId: string }>;
}

export default async function TvPage({ params }: Props) {
  const { tvId } = await params;

  return (
    <main>
      <Suspense fallback={<HeaderFallback />}>
        <TvDetails tvId={tvId} />
      </Suspense>
    </main>
  );
}
