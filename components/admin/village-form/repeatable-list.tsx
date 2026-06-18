import type { ReactNode } from "react";
import { AddItemButton } from "@/components/admin/village-form/field-primitives";

type RepeatableListProps<T> = {
  items: T[];
  onChange: (items: T[]) => void;
  createItem: () => T;
  addLabel: string;
  emptyLabel?: string;
  renderItem: (
    item: T,
    index: number,
    update: (patch: Partial<T> | ((current: T) => T)) => void,
    remove: () => void,
  ) => ReactNode;
};

export function RepeatableList<T>({
  items,
  onChange,
  createItem,
  addLabel,
  emptyLabel,
  renderItem,
}: RepeatableListProps<T>) {
  function updateItem(
    index: number,
    patch: Partial<T> | ((current: T) => T),
  ) {
    onChange(
      items.map((item, itemIndex) => {
        if (itemIndex !== index) return item;
        return typeof patch === "function" ? patch(item) : { ...item, ...patch };
      }),
    );
  }

  function removeItem(index: number) {
    onChange(items.filter((_, itemIndex) => itemIndex !== index));
  }

  function addItem() {
    onChange([...items, createItem()]);
  }

  return (
    <div className="flex flex-col gap-4">
      {items.length === 0 && emptyLabel && (
        <p className="font-body-sm text-on-surface-variant">{emptyLabel}</p>
      )}

      {items.map((item, index) =>
        renderItem(
          item,
          index,
          (patch) => updateItem(index, patch),
          () => removeItem(index),
        ),
      )}

      <AddItemButton onClick={addItem} label={addLabel} />
    </div>
  );
}
