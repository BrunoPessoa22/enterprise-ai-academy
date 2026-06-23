import programs from "@/lib/curriculum";
import { CoursePlayer } from "@/components/CoursePlayer";

export const dynamicParams = false;

export function generateStaticParams() {
  return programs.flatMap((p) => p.weeks.map((w) => ({ slug: p.slug, weekId: w.id })));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; weekId: string }>;
}) {
  const { slug, weekId } = await params;
  return <CoursePlayer slug={slug} weekId={weekId} />;
}
