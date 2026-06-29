"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import {
  iconCategoriesForValue,
  isVillageMaterialIcon,
} from "@/lib/villages/material-icons";

const inputClassName =
  "w-full border border-outline/25 bg-surface-container-lowest px-3 py-2 font-body-sm text-on-surface outline-none transition-colors focus:border-limestone/60";

const labelClassName =
  "font-label-caps text-[10px] tracking-widest text-on-surface-variant";

type FieldProps = {
  label: string;
  id: string;
  error?: string;
  hint?: string;
  children: ReactNode;
};

export function Field({ label, id, error, hint, children }: FieldProps) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className={labelClassName}>{label}</span>
      {children}
      {hint && <span className="font-body-sm text-on-surface-variant">{hint}</span>}
      {error && (
        <span className="font-body-sm text-error" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}

type TextInputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  hint?: string;
  required?: boolean;
  placeholder?: string;
};

export function TextInput({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  hint,
  required,
  placeholder,
}: TextInputProps) {
  return (
    <Field label={label} id={id} error={error} hint={hint}>
      <input
        id={id}
        type="text"
        value={value ?? ""}
        required={required}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
        className={inputClassName}
      />
    </Field>
  );
}

type SelectInputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  error?: string;
  hint?: string;
  placeholder?: string;
};

export function SelectInput({
  id,
  label,
  value,
  onChange,
  options,
  error,
  hint,
  placeholder = "Select…",
}: SelectInputProps) {
  return (
    <Field label={label} id={id} error={error} hint={hint}>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={inputClassName}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Field>
  );
}

type TextAreaProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  hint?: string;
  rows?: number;
  placeholder?: string;
};

export function TextArea({
  id,
  label,
  value,
  onChange,
  error,
  hint,
  rows = 4,
  placeholder,
}: TextAreaProps) {
  return (
    <Field label={label} id={id} error={error} hint={hint}>
      <textarea
        id={id}
        value={value}
        rows={rows}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className={`${inputClassName} resize-y`}
      />
    </Field>
  );
}

type NumberInputProps = {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  error?: string;
  min?: number;
  max?: number;
};

function MaterialIconPreview({ name }: { name: string }) {
  return (
    <span
      className="material-symbols-outlined shrink-0 text-[20px] leading-none text-limestone"
      aria-hidden="true"
    >
      {name}
    </span>
  );
}

type IconSelectProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  hint?: string;
};

export function IconSelect({
  id,
  label,
  value,
  onChange,
  error,
  hint,
}: IconSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();
  const categories = iconCategoriesForValue(value);
  const hasLegacyValue = Boolean(value && !isVillageMaterialIcon(value));

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open]);

  function selectIcon(icon: string) {
    onChange(icon);
    setOpen(false);
  }

  return (
    <Field label={label} id={id} error={error} hint={hint}>
      <div ref={rootRef} className="relative">
        <button
          type="button"
          id={id}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listboxId}
          onClick={() => setOpen((current) => !current)}
          className={`${inputClassName} flex w-full items-center justify-between gap-3 text-left`}
        >
          <span className="flex min-w-0 items-center gap-2">
            {value ? (
              <MaterialIconPreview name={value} />
            ) : (
              <span
                className="inline-block size-5 shrink-0 rounded-full border border-outline/25"
                aria-hidden="true"
              />
            )}
            <span className="truncate font-body-sm text-on-surface">
              {value || "Select icon…"}
            </span>
          </span>
          <span
            className="material-symbols-outlined shrink-0 text-base text-on-surface-variant"
            aria-hidden="true"
          >
            {open ? "expand_less" : "expand_more"}
          </span>
        </button>

        {open && (
          <ul
            id={listboxId}
            role="listbox"
            aria-label={`${label} options`}
            className="admin-icon-select__menu absolute z-20 mt-1 max-h-72 w-full overflow-y-auto border border-outline/25 bg-surface-container-lowest shadow-lg"
          >
            <li role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={value === ""}
                onClick={() => selectIcon("")}
                className="admin-icon-select__option flex w-full items-center gap-3 px-3 py-2 text-left transition-colors hover:bg-surface-container-low"
              >
                <span
                  className="inline-block size-5 shrink-0 rounded-full border border-outline/25"
                  aria-hidden="true"
                />
                <span className="font-body-sm text-on-surface-variant">None</span>
              </button>
            </li>
            {categories.map((category) => (
              <li key={category.label} role="presentation">
                <p
                  className="admin-icon-select__category sticky top-0 border-b border-outline/15 bg-surface-container-low px-3 py-2 font-label-caps text-[9px] tracking-widest text-on-surface-variant"
                  aria-hidden="true"
                >
                  {category.label}
                </p>
                <ul role="group" aria-label={category.label}>
                  {category.icons.map((icon) => {
                    const isLegacy =
                      hasLegacyValue &&
                      category.label === "Saved value (not in list)" &&
                      icon === value;

                    return (
                      <li key={`${category.label}-${icon}`} role="presentation">
                        <button
                          type="button"
                          role="option"
                          aria-selected={value === icon}
                          onClick={() => selectIcon(icon)}
                          className={`admin-icon-select__option flex w-full items-center gap-3 px-3 py-2 text-left transition-colors hover:bg-surface-container-low ${
                            value === icon ? "bg-surface-container-low/80" : ""
                          }`}
                        >
                          <MaterialIconPreview name={icon} />
                          <span className="min-w-0 truncate font-body-sm text-on-surface">
                            {icon}
                            {isLegacy ? " (pick a replacement)" : ""}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Field>
  );
}

export function NumberInput({
  id,
  label,
  value,
  onChange,
  error,
  min = 1,
  max = 5,
}: NumberInputProps) {
  return (
    <Field label={label} id={id} error={error}>
      <input
        id={id}
        type="number"
        min={min}
        max={max}
        value={value ?? ""}
        onChange={(event) => onChange(Number(event.target.value))}
        className={inputClassName}
      />
    </Field>
  );
}

type CheckboxInputProps = {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export function CheckboxInput({ id, label, checked, onChange }: CheckboxInputProps) {
  return (
    <label htmlFor={id} className="flex items-center gap-3">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="size-4 accent-limestone"
      />
      <span className="font-body-sm text-on-surface">{label}</span>
    </label>
  );
}

export function FieldGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">{children}</div>
  );
}

export function RemoveItemButton({
  onClick,
  label = "Remove",
}: {
  onClick: () => void;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="admin-cta shrink-0 font-label-caps text-[10px] tracking-widest text-error transition-colors hover:text-error/80"
    >
      {label}
    </button>
  );
}

export function AddItemButton({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="admin-cta inline-flex items-center border border-outline/30 px-4 py-2 font-label-caps text-[10px] tracking-widest text-on-surface transition-colors hover:border-limestone hover:text-limestone"
    >
      {label}
    </button>
  );
}

export function RepeatableItemCard({
  title,
  onRemove,
  children,
}: {
  title: string;
  onRemove: () => void;
  children: ReactNode;
}) {
  return (
    <div className="border border-outline/20 bg-surface-container-lowest/60 p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">
          {title}
        </p>
        <RemoveItemButton onClick={onRemove} />
      </div>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}
