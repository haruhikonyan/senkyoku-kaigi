import { getComposerWhthParts } from '@/actions/tune';
import type { Prisma } from '@prisma/client';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useMemo } from 'react';

type TuneParts = NonNullable<
  Prisma.PromiseReturnType<typeof getComposerWhthParts>
>['tunes'][number]['tuneParts'];

function Parts({
  mainInstrumentName,
  parts,
}: {
  mainInstrumentName: string;
  parts: TuneParts[number]['parts'] | undefined;
}) {
  const useSubInstrument = useMemo(
    () => parts?.filter((p) => p.partSubInstruments.length !== 0).length !== 0,
    [parts],
  );
  return (
    <>
      {useSubInstrument ? (
        <span
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title={
            parts
              ?.map((part) => {
                return part.partSubInstruments.length !== 0
                  ? `${part.partName}持ち替え: ${part.partSubInstruments.map((pi) => pi.instrument.shortName).join(', ')}`
                  : '';
              })
              .filter((t) => t !== '')
              .join(', ') || '持ち替えなし'
          }
        >
          {mainInstrumentName}: {parts?.length}(
          {parts?.filter((p) => p.partSubInstruments.length !== 0).length})
        </span>
      ) : (
        <span>
          {mainInstrumentName}: {parts?.length}
        </span>
      )}
    </>
  );
}

function AllParts({ tuneParts }: { tuneParts: TuneParts }) {
  return (
    <>
      {Object.entries(
        Object.groupBy(
          tuneParts,
          ({ partGroup }) => partGroup.partGroupCategory.name,
        ),
      ).map(([groupName, tuneParts]) => (
        <div key={groupName}>
          <p>{groupName}</p>
          {tuneParts?.map((tunePart) => (
            <div key={tunePart.id} className="d-flex gap-2">
              {Object.entries(
                Object.groupBy(
                  tunePart.parts,
                  ({ mainInstrument }) => mainInstrument.shortName,
                ),
              ).map(([mainInstrumentName, parts]) => (
                <Parts
                  key={mainInstrumentName}
                  mainInstrumentName={mainInstrumentName}
                  parts={parts}
                />
              ))}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default async function Page({ params }: { params: { id: string } }) {
  // TODO: zod で変換とチェック
  const id = Number(params.id);
  const composer = await getComposerWhthParts(id);
  if (composer == null) return notFound();
  return (
    <>
      <h1>
        {composer.displayName}({composer.fullName})
      </h1>
      <div className="mt-3 d-grid gap-3">
        {composer.tunes.map((tune) => (
          <div key={tune.id}>
            <div className="d-flex gap-1">
              {tune.tuneGenres.map((tg) => (
                <div key={tg.genre.name} className="badge bg-secondary">
                  {tg.genre.name}
                </div>
              ))}
            </div>
            <h5>{tune.title}</h5>
            <p>演奏時間: {tune.timeMinutes}分</p>
            <p>調性: {tune.key}</p>
            <span>編成: </span>
            <AllParts tuneParts={tune.tuneParts} />
            <div className="d-flex gap-2">
              {tune.wikipedia_ja != null && (
                <a href={tune.wikipedia_ja} target="_blank" rel="noreferrer">
                  Wikipedia(日本語)
                </a>
              )}
              {tune.wikipedia_en != null && (
                <a href={tune.wikipedia_en} target="_blank" rel="noreferrer">
                  Wikipedia(英語)
                </a>
              )}
              {tune.imslp != null && (
                <a href={tune.imslp} target="_blank" rel="noreferrer">
                  IMSLP
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
