import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  // TODO: zod で変換とチェック
  const id = Number(params.id);
  const composer = await prisma.composer.findUnique({
    where: { id },
    include: {
      tunes: {
        include: {
          playstyle: true,
          tuneGenres: {
            include: {
              genre: true,
            },
          },
          tuneParts: {
            include: {
              partGroup: {
                include: {
                  partGroupCategory: true,
                },
              },
              parts: {
                include: {
                  mainInstrument: true,
                  partSubInstruments: {
                    include: {
                      instrument: true,
                    },
                  },
                },
              },
            },
          },
        },
        orderBy: {
          title: 'asc',
        },
      },
    },
  });
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
            {Object.entries(
              Object.groupBy(
                tune.tuneParts,
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
                      <span
                        key={mainInstrumentName}
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
                        {mainInstrumentName}: {parts?.length}
                        {parts?.filter((p) => p.partSubInstruments.length !== 0)
                          .length !== 0 &&
                          `(${
                            parts?.filter(
                              (p) => p.partSubInstruments.length !== 0,
                            ).length
                          })`}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            ))}
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
