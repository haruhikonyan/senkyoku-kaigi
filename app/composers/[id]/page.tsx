import { searchTuneIds } from '@/actions/search-tunes';
import TuneWithParts from '@/components/TuneWithParts';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const getComposer = async (composerId: number) => {
  return await prisma.composer.findUnique({
    where: { id: composerId },
    select: {
      id: true,
      displayName: true,
      fullName: true,
    },
  });
};

export default async function Page(
  props: {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ genreIds: string[] | string | undefined }>;
  }
) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  // TODO: zod で変換とチェック
  const id = Number(params.id);
  // TODO: zod 使って変換とチェック
  // たぶんこのへん TuneWithParts に合わせて共通化されそう
  const genreIds = Array.isArray(searchParams.genreIds)
    ? searchParams.genreIds.map((g) => Number(g))
    : searchParams.genreIds != null
      ? [Number(searchParams.genreIds)]
      : undefined;
  const composer = await getComposer(id);
  if (composer == null) return notFound();
  const tuneIds = await searchTuneIds({ composerId: composer.id, genreIds });
  return (
    <>
      <h1>
        {composer.displayName}({composer.fullName})
      </h1>
      <div className="mt-3 d-grid gap-3">
        {tuneIds.map(({ id }) => (
          <TuneWithParts key={id} tuneId={id} />
        ))}
      </div>
    </>
  );
}
