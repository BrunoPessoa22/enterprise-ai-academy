import programs from "@/lib/curriculum";
import Certificate from "@/components/Certificate";

export const dynamicParams = false;

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <Certificate slug={slug} />;
}
