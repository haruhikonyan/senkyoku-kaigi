import TuneWithParts from '@/components/TuneWithParts';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const getComposer = async (composerId: number) => {
  return await prisma.composer.findUnique({
    where: { id: composerId },
    select: {
      displayName: true,
      fullName: true,
      tunes: {
        select: {
          id: true,
        },
        orderBy: {
          title: 'asc',
        },
      },
    },
  });
};

export default async function Page({ params }: { params: { id: string } }) {
  // TODO: zod で変換とチェック
  const id = Number(params.id);
  const composer = await getComposer(id);
  if (composer == null) return notFound();
  return (
    <>
      <h1>
        {composer.displayName}({composer.fullName})
      </h1>
      <div className="mt-3 d-grid gap-3">
        {composer.tunes.map((tune) => (
          <TuneWithParts key={tune.id} tuneId={tune.id} />
        ))}
      </div>
    </>
  );
}
