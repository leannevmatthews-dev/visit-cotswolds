import Link from "next/link";
import { DeleteVillageButton } from "@/components/admin/delete-village-button";
import type { VillageListItem } from "@/lib/villages/admin-queries";

export function VillagesTable({ villages }: { villages: VillageListItem[] }) {
  if (villages.length === 0) {
    return (
      <div className="border border-outline/15 bg-surface-container-low px-6 py-12 text-center">
        <p className="font-body-lg text-on-surface-variant mb-4">
          No villages yet. Create your first one to get started.
        </p>
        <Link
          href="/admin/villages/new"
          className="admin-cta inline-flex items-center justify-center bg-limestone px-6 py-2.5 font-label-caps text-label-caps text-on-background transition-colors hover:bg-white"
        >
          New Village
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border border-outline/15">
      <table className="w-full min-w-[36rem] table-fixed border-collapse text-left">
        <colgroup>
          <col className="w-[38%]" />
          <col className="w-[32%]" />
          <col className="w-[30%]" />
        </colgroup>
        <thead>
          <tr className="border-b border-outline/15 bg-surface-container-low">
            <th className="font-label-caps px-4 py-3 text-[10px] tracking-widest text-on-surface-variant">
              Name
            </th>
            <th className="font-label-caps px-4 py-3 text-[10px] tracking-widest text-on-surface-variant">
              Slug
            </th>
            <th className="font-label-caps px-4 py-3 text-right text-[10px] tracking-widest text-on-surface-variant">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {villages.map((village) => (
            <tr
              key={village.id}
              className="border-b border-outline/10 last:border-b-0 hover:bg-surface-container-low/50"
            >
              <td className="px-4 py-3 font-body-lg text-on-surface">
                {village.name}
              </td>
              <td className="px-4 py-3 font-body-sm text-on-surface-variant">
                <code className="text-on-surface">{village.slug}</code>
              </td>
              <td className="admin-actions-cell whitespace-nowrap px-4 py-3 text-right align-middle">
                <Link
                  href={`/admin/villages/${village.slug}/edit`}
                  className="mr-3 inline-flex shrink-0 items-center border border-outline/40 px-3 py-1.5 font-label-caps text-[10px] tracking-widest text-on-surface transition-colors hover:border-limestone hover:text-limestone"
                >
                  Edit
                </Link>
                <DeleteVillageButton id={village.id} name={village.name} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
