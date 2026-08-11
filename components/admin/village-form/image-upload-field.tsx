"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Field, TextInput } from "@/components/admin/village-form/field-primitives";
import { createClient } from "@/utils/supabase/client";
import { isExternalImageUrl } from "@/lib/utils/is-external-image-url";

const ACCEPTED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const ACCEPT_ATTR = ".jpg,.jpeg,.png,.webp";

type ImageUploadFieldProps = {
  id: string;
  label: string;
  hint?: string;
  value: string;
  onChange: (value: string) => void;
  villageSlug: string;
  fieldName: string;
  altValue?: string;
  onAltChange?: (value: string) => void;
  showAlt?: boolean;
};

function extensionForFile(file: File): string {
  const fromName = file.name.split(".").pop()?.toLowerCase();
  if (fromName && ["jpg", "jpeg", "png", "webp"].includes(fromName)) {
    return fromName === "jpg" ? "jpeg" : fromName;
  }

  const fromType = file.type.split("/")[1];
  if (fromType === "jpg") return "jpeg";
  return fromType || "jpeg";
}

export function ImageUploadField({
  id,
  label,
  hint,
  value,
  onChange,
  villageSlug,
  fieldName,
  altValue = "",
  onAltChange,
  showAlt = true,
}: ImageUploadFieldProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  async function handleFileSelected(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    if (!ACCEPTED_TYPES.includes(file.type)) {
      setUploadError("Please choose a JPG, PNG, or WebP image.");
      return;
    }

    const slug = villageSlug.trim() || "village";
    const ext = extensionForFile(file);
    const objectPath = `${slug}/${slug}-${fieldName}-${Date.now()}.${ext}`;

    setUploadError(null);
    setUploading(true);

    try {
      const supabase = createClient();
      const { error } = await supabase.storage
        .from("village-images")
        .upload(objectPath, file, { cacheControl: "3600", upsert: false });

      if (error) {
        throw error;
      }

      const { data } = supabase.storage
        .from("village-images")
        .getPublicUrl(objectPath);

      onChange(data.publicUrl);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Upload failed. Please try again.";
      setUploadError(message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Field label={label} id={id} hint={hint}>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <input
            id={id}
            type="text"
            value={value}
            placeholder="https://..."
            onChange={(event) => onChange(event.target.value)}
            className="w-full flex-1 border border-outline/25 bg-surface-container-lowest px-3 py-2 font-body-sm text-on-surface outline-none transition-colors focus:border-limestone/60"
          />
          <button
            type="button"
            disabled={uploading}
            onClick={() => fileInputRef.current?.click()}
            className="admin-cta shrink-0 border border-outline/30 px-4 py-2 font-label-caps text-[10px] tracking-widest text-on-surface transition-colors hover:border-limestone hover:text-limestone disabled:opacity-60"
          >
            {uploading ? "Uploading…" : "Upload image"}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept={ACCEPT_ATTR}
            className="sr-only"
            onChange={handleFileSelected}
          />
        </div>
        {uploadError && (
          <span className="font-body-sm text-error" role="alert">
            {uploadError}
          </span>
        )}
      </Field>

      {value.trim() && (
        <div className="relative h-24 w-40 overflow-hidden border border-outline/20 bg-surface-container-low">
          <Image
            src={value.trim()}
            alt="Uploaded image preview"
            fill
            className="object-cover"
            sizes="160px"
            unoptimized={isExternalImageUrl(value)}
          />
        </div>
      )}

      {showAlt && onAltChange && (
        <TextInput
          id={`${id}-alt`}
          label="Image alt text (describe what's in the photo for SEO)"
          value={altValue}
          onChange={onAltChange}
        />
      )}
    </div>
  );
}
