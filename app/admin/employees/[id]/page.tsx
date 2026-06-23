import { employees } from "@/lib/org";
import EmployeeDetail from "@/components/EmployeeDetail";

export const dynamicParams = false;

export function generateStaticParams() {
  return employees.map((e) => ({ id: e.id }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <EmployeeDetail id={id} />;
}
