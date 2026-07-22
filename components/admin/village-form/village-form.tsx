"use client";

import Link from "next/link";
import { useState } from "react";
import { createVillage, unpublishVillage, updateVillage } from "@/app/admin/actions";
import { FormSection } from "@/components/admin/village-form/form-section";
import { ImageUploadField } from "@/components/admin/village-form/image-upload-field";
import {
  CheckboxInput,
  FieldGrid,
  IconSelect,
  NumberInput,
  RepeatableItemCard,
  SelectInput,
  TextArea,
  TextInput,
} from "@/components/admin/village-form/field-primitives";
import { RepeatableList } from "@/components/admin/village-form/repeatable-list";
import { defaultVillageFormState } from "@/lib/villages/form-defaults";
import { slugifyName, validateVillageForm } from "@/lib/villages/form-schema";
import {
  COTSWOLDS_REGIONS,
  type CrowdLevel,
  type VillageStatus,
} from "@/lib/villages/types";
import type { FormFieldErrors, VillageFormState } from "@/lib/villages/form-types";

type VillageFormProps = {
  mode?: "create" | "edit";
  villageId?: number;
  initialData?: VillageFormState;
  originalSlug?: string;
  currentStatus?: VillageStatus;
  /** Other villages available for comparison multi-select. */
  villageOptions?: { id: number; name: string }[];
};

export function VillageForm({
  mode = "create",
  villageId,
  initialData,
  originalSlug,
  currentStatus = "draft",
  villageOptions = [],
}: VillageFormProps) {
  const [form, setForm] = useState<VillageFormState>(
    () => initialData ?? defaultVillageFormState(),
  );
  const [status, setStatus] = useState<VillageStatus>(currentStatus);
  const [errors, setErrors] = useState<FormFieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [pendingAction, setPendingAction] = useState<VillageStatus | null>(
    null,
  );
  const [unpublishPending, setUnpublishPending] = useState(false);
  const [slugTouched, setSlugTouched] = useState(mode === "edit");

  function setField<K extends keyof VillageFormState>(
    key: K,
    value: VillageFormState[K],
  ) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  }

  function setParkingField<K extends keyof VillageFormState["parking_guide"]>(
    key: K,
    value: VillageFormState["parking_guide"][K],
  ) {
    setForm((current) => ({
      ...current,
      parking_guide: { ...current.parking_guide, [key]: value },
    }));
  }

  async function handleSave(status: VillageStatus) {
    setSubmitError(null);

    const validation = validateVillageForm(form);
    if (!validation.ok) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setPendingAction(status);

    const result =
      mode === "edit" && villageId != null && originalSlug
        ? await updateVillage(villageId, originalSlug, form, status)
        : await createVillage(form, status);

    if (result && "error" in result) {
      setSubmitError(result.error);
      setPendingAction(null);
    } else {
      setStatus(status);
    }
  }

  async function handleUnpublish() {
    if (villageId == null || !originalSlug) {
      return;
    }

    const villageName = form.name.trim() || "this village";
    const confirmed = window.confirm(
      `Are you sure you want to take ${villageName} offline? It will no longer appear on the live site.`,
    );

    if (!confirmed) {
      return;
    }

    setSubmitError(null);
    setUnpublishPending(true);

    const result = await unpublishVillage(villageId, originalSlug);

    if ("error" in result) {
      setSubmitError(result.error);
      setUnpublishPending(false);
      return;
    }

    setStatus("draft");
    setUnpublishPending(false);
  }

  const isPublished = status === "published";
  const pending = pendingAction !== null || unpublishPending;
  const secondaryStatus: VillageStatus = isPublished ? "published" : "draft";
  const secondaryLabel = isPublished ? "Save Changes" : "Save Draft";
  const secondaryPendingLabel = isPublished
    ? "Saving changes…"
    : "Saving draft…";
  const publishPendingLabel = isPublished ? "Saving changes…" : "Publishing…";

  function handleNameBlur() {
    if (!slugTouched && form.name.trim()) {
      setField("slug", slugifyName(form.name));
    }
  }

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="flex flex-col gap-6"
    >
      <div className="flex items-center gap-3">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 font-label-caps text-[10px] tracking-widest uppercase ${
            isPublished
              ? "bg-limestone/15 text-limestone"
              : "bg-on-surface-variant/10 text-on-surface-variant"
          }`}
        >
          {isPublished ? "Published" : "Draft"}
        </span>
      </div>

      {(errors.form || submitError) && (
        <div
          className="border border-error/40 bg-error/10 px-4 py-3 font-body-sm text-error"
          role="alert"
        >
          {errors.form ?? submitError}
        </div>
      )}

      <FormSection title="1. Basics">
        <FieldGrid>
          <TextInput
            id="name"
            label="Name"
            value={form.name}
            onChange={(value) => setField("name", value)}
            onBlur={handleNameBlur}
            error={errors.name}
            required
            placeholder="Burford"
          />
          <TextInput
            id="slug"
            label="Slug"
            value={form.slug}
            onChange={(value) => {
              setSlugTouched(true);
              setField("slug", value);
            }}
            error={errors.slug}
            required
            placeholder="burford"
            hint="Used in the URL: /villages/[slug]"
          />
          <TextInput
            id="region_label"
            label="Region label"
            value={form.region_label}
            onChange={(value) => setField("region_label", value)}
            placeholder="Gloucestershire"
            hint="County or area shown on village cards (e.g. Gloucestershire)"
          />
          <SelectInput
            id="cotswolds_region"
            label="Cotswolds region"
            value={form.cotswolds_region}
            onChange={(value) =>
              setField(
                "cotswolds_region",
                value as VillageFormState["cotswolds_region"],
              )
            }
            options={COTSWOLDS_REGIONS}
            error={errors.cotswolds_region}
            hint="Used for north / central / south filtering on the Villages listing page"
            placeholder="Select Cotswolds region"
          />
          <TextInput
            id="tagline_quote"
            label="Tagline quote"
            value={form.tagline_quote}
            onChange={(value) => setField("tagline_quote", value)}
            placeholder="The gateway to the Cotswolds"
          />
        </FieldGrid>
      </FormSection>

      <FormSection title="2. Hero & Brief">
        <TextArea
          id="brief_summary"
          label="Brief summary"
          value={form.brief_summary}
          onChange={(value) => setField("brief_summary", value)}
          rows={3}
        />
        <TextArea
          id="brief_best_tip"
          label="Brief best tip"
          value={form.brief_best_tip}
          onChange={(value) => setField("brief_best_tip", value)}
          rows={2}
        />
        <TextInput
          id="overview_heading"
          label="Overview heading"
          value={form.overview_heading}
          onChange={(value) => setField("overview_heading", value)}
        />
        <TextArea
          id="overview_body"
          label="Overview body"
          value={form.overview_body}
          onChange={(value) => setField("overview_body", value)}
          rows={6}
        />
        <ImageUploadField
          id="hero_background_image_url"
          label="Hero background image"
          value={form.hero_background_image_url}
          onChange={(value) => setField("hero_background_image_url", value)}
          villageSlug={form.slug}
          fieldName="hero-background"
          showAlt={false}
          hint="Large photo behind the village name, tagline, and video player at the top of the page. Also used as the video poster before play."
        />
        <ImageUploadField
          id="overview_image_url"
          label="Village Overview image"
          value={form.overview_image_url}
          onChange={(value) => setField("overview_image_url", value)}
          villageSlug={form.slug}
          fieldName="overview"
          showAlt={false}
          hint="Shown beside the Village Overview editorial section. If left empty, the hero image is used as a fallback."
        />
        <TextInput
          id="video_embed_url"
          label="Video embed URL"
          value={form.video_embed_url}
          onChange={(value) => setField("video_embed_url", value)}
          placeholder="https://..."
          hint="MP4 or video file URL for the village film player in the hero."
        />
      </FormSection>

      <FormSection title="3. At A Glance">
        <FieldGrid>
          <TextInput
            id="time_needed"
            label="Time needed"
            value={form.time_needed}
            onChange={(value) => setField("time_needed", value)}
            placeholder="Half day"
          />
          <TextInput
            id="dog_friendly"
            label="Dog friendly"
            value={form.dog_friendly}
            onChange={(value) => setField("dog_friendly", value)}
            placeholder="Yes, on leads"
          />
          <TextInput
            id="best_season"
            label="Best season"
            value={form.best_season}
            onChange={(value) => setField("best_season", value)}
            placeholder="Spring & autumn"
          />
        </FieldGrid>
        <FieldGrid>
          <NumberInput
            id="score_first_time_visitor"
            label="First-time visitor score (1–5)"
            value={form.score_first_time_visitor}
            onChange={(value) => setField("score_first_time_visitor", value)}
            error={errors.score_first_time_visitor}
          />
          <NumberInput
            id="score_couples"
            label="Couples score (1–5)"
            value={form.score_couples}
            onChange={(value) => setField("score_couples", value)}
            error={errors.score_couples}
          />
          <NumberInput
            id="score_families"
            label="Families score (1–5)"
            value={form.score_families}
            onChange={(value) => setField("score_families", value)}
            error={errors.score_families}
          />
          <NumberInput
            id="score_food_drink"
            label="Food & drink score (1–5)"
            value={form.score_food_drink}
            onChange={(value) => setField("score_food_drink", value)}
            error={errors.score_food_drink}
          />
          <NumberInput
            id="score_accessibility"
            label="Accessibility score (1–5)"
            value={form.score_accessibility}
            onChange={(value) => setField("score_accessibility", value)}
            error={errors.score_accessibility}
          />
          <NumberInput
            id="score_hidden_gem_factor"
            label="Hidden gem factor score (1–5)"
            value={form.score_hidden_gem_factor}
            onChange={(value) => setField("score_hidden_gem_factor", value)}
            error={errors.score_hidden_gem_factor}
          />
        </FieldGrid>
      </FormSection>

      <FormSection title="4. Things To Do">
        <RepeatableList
          items={form.things_to_do}
          onChange={(items) => setField("things_to_do", items)}
          createItem={() => ({
            title: "",
            body: "",
            insider_tip: "",
            image_url: "",
            image_alt: "",
            external_link: null,
          })}
          addLabel="Add thing to do"
          emptyLabel="No things to do yet."
          renderItem={(item, index, update, remove) => (
            <RepeatableItemCard
              key={index}
              title={`Things to do ${index + 1}`}
              onRemove={remove}
            >
              <TextInput
                id={`things-to-do-title-${index}`}
                label="Title"
                value={item.title}
                onChange={(value) => update({ title: value })}
              />
              <TextArea
                id={`things-to-do-body-${index}`}
                label="Body"
                value={item.body}
                onChange={(value) => update({ body: value })}
                rows={3}
              />
              <TextArea
                id={`things-to-do-tip-${index}`}
                label="Insider tip"
                value={item.insider_tip}
                onChange={(value) => update({ insider_tip: value })}
                rows={2}
              />
              <ImageUploadField
                id={`things-to-do-image-${index}`}
                label="Image (optional)"
                hint="Photo for this things to do card"
                value={item.image_url ?? ""}
                onChange={(value) => update({ image_url: value })}
                altValue={item.image_alt ?? ""}
                onAltChange={(value) => update({ image_alt: value })}
                villageSlug={form.slug}
                fieldName={`things-to-do-${index}`}
              />
            </RepeatableItemCard>
          )}
        />
      </FormSection>

      <FormSection title="5. Places To Eat">
        <RepeatableList
          items={form.places_to_eat}
          onChange={(items) => setField("places_to_eat", items)}
          createItem={() => ({
            name: "",
            category: "",
            location_label: "",
            image_url: "",
            image_alt: "",
            external_link: "",
          })}
          addLabel="Add place to eat"
          emptyLabel="No places to eat yet."
          renderItem={(item, index, update, remove) => (
            <RepeatableItemCard
              key={index}
              title={`Eat ${index + 1}`}
              onRemove={remove}
            >
              <FieldGrid>
                <TextInput
                  id={`eat-name-${index}`}
                  label="Name"
                  value={item.name}
                  onChange={(value) => update({ name: value })}
                />
                <TextInput
                  id={`eat-category-${index}`}
                  label="Category"
                  value={item.category}
                  onChange={(value) => update({ category: value })}
                />
                <TextInput
                  id={`eat-location-${index}`}
                  label="Location label"
                  value={item.location_label}
                  onChange={(value) => update({ location_label: value })}
                />
                <ImageUploadField
                  id={`eat-image-${index}`}
                  label="Image (optional)"
                  hint="Photo for this specific place to eat"
                  value={item.image_url ?? ""}
                  onChange={(value) => update({ image_url: value })}
                  altValue={item.image_alt ?? ""}
                  onAltChange={(value) => update({ image_alt: value })}
                  villageSlug={form.slug}
                  fieldName={`eat-${index}`}
                />
                <TextInput
                  id={`eat-link-${index}`}
                  label="External link (optional)"
                  value={item.external_link ?? ""}
                  onChange={(value) => update({ external_link: value })}
                />
              </FieldGrid>
            </RepeatableItemCard>
          )}
        />
      </FormSection>

      <FormSection title="6. Places To Stay">
        <RepeatableList
          items={form.places_to_stay}
          onChange={(items) => setField("places_to_stay", items)}
          createItem={() => ({
            name: "",
            category: "",
            location_label: "",
            image_url: "",
            image_alt: "",
            external_link: "",
          })}
          addLabel="Add place to stay"
          emptyLabel="No places to stay yet."
          renderItem={(item, index, update, remove) => (
            <RepeatableItemCard
              key={index}
              title={`Stay ${index + 1}`}
              onRemove={remove}
            >
              <FieldGrid>
                <TextInput
                  id={`stay-name-${index}`}
                  label="Name"
                  value={item.name}
                  onChange={(value) => update({ name: value })}
                />
                <TextInput
                  id={`stay-category-${index}`}
                  label="Category"
                  value={item.category}
                  onChange={(value) => update({ category: value })}
                />
                <TextInput
                  id={`stay-location-${index}`}
                  label="Location label"
                  value={item.location_label}
                  onChange={(value) => update({ location_label: value })}
                />
                <ImageUploadField
                  id={`stay-image-${index}`}
                  label="Image (optional)"
                  hint="Photo for this specific place to stay"
                  value={item.image_url ?? ""}
                  onChange={(value) => update({ image_url: value })}
                  altValue={item.image_alt ?? ""}
                  onAltChange={(value) => update({ image_alt: value })}
                  villageSlug={form.slug}
                  fieldName={`stay-${index}`}
                />
                <TextInput
                  id={`stay-link-${index}`}
                  label="External link (optional)"
                  value={item.external_link ?? ""}
                  onChange={(value) => update({ external_link: value })}
                />
              </FieldGrid>
            </RepeatableItemCard>
          )}
        />
      </FormSection>

      <FormSection title="7. Our Take & Review">
        <TextArea
          id="our_take_body"
          label="Our take"
          value={form.our_take_body}
          onChange={(value) => setField("our_take_body", value)}
          rows={5}
        />
        <FieldGrid>
          <TextInput
            id="visited_date"
            label="Visited date"
            value={form.visited_date}
            onChange={(value) => setField("visited_date", value)}
            placeholder="March 2025"
          />
          <TextInput
            id="reviewed_by_name"
            label="Reviewed by name"
            value={form.reviewed_by_name}
            onChange={(value) => setField("reviewed_by_name", value)}
          />
          <TextInput
            id="reviewed_by_credential"
            label="Reviewed by credential"
            value={form.reviewed_by_credential}
            onChange={(value) => setField("reviewed_by_credential", value)}
            placeholder="Local guide"
          />
        </FieldGrid>
        <ImageUploadField
          id="our_take_image_url"
          label="Our Take section image (optional)"
          value={form.our_take_image_url}
          onChange={(value) => setField("our_take_image_url", value)}
          altValue={form.our_take_image_alt}
          onAltChange={(value) => setField("our_take_image_alt", value)}
          villageSlug={form.slug}
          fieldName="our-take"
          hint="Portrait photo beside the “Our Take” editorial section (falls back to the hero background if left empty)."
        />
      </FormSection>

      <FormSection title="8. When To Visit">
        <TextArea
          id="crowd_intelligence_note"
          label="Crowd intelligence note"
          value={form.crowd_intelligence_note}
          onChange={(value) => setField("crowd_intelligence_note", value)}
          rows={3}
        />
        <RepeatableList
          items={form.crowd_times}
          onChange={(items) => setField("crowd_times", items)}
          createItem={() => ({
            time_range: "",
            level: "Quiet" as CrowdLevel,
          })}
          addLabel="Add crowd time"
          emptyLabel="No crowd times yet."
          renderItem={(item, index, update, remove) => (
            <RepeatableItemCard
              key={index}
              title={`Crowd time ${index + 1}`}
              onRemove={remove}
            >
              <FieldGrid>
                <TextInput
                  id={`crowd-time-range-${index}`}
                  label="Time range"
                  value={item.time_range}
                  onChange={(value) => update({ time_range: value })}
                  placeholder="Weekday mornings"
                />
                <SelectInput
                  id={`crowd-level-${index}`}
                  label="Level"
                  value={item.level}
                  onChange={(value) => update({ level: value as CrowdLevel })}
                  options={[
                    "Very Quiet",
                    "Quiet",
                    "Moderate",
                    "Busy",
                    "Very Busy",
                  ]}
                  hint="Select crowd level"
                />
              </FieldGrid>
            </RepeatableItemCard>
          )}
        />
      </FormSection>

      <FormSection title="9. Perfect For">
        <RepeatableList
          items={form.perfect_for}
          onChange={(items) => setField("perfect_for", items)}
          createItem={() => ""}
          addLabel="Add item"
          emptyLabel="No items yet."
          renderItem={(item, index, update, remove) => (
            <RepeatableItemCard
              key={index}
              title={`Item ${index + 1}`}
              onRemove={remove}
            >
              <TextInput
                id={`perfect-for-${index}`}
                label="Text"
                value={item}
                onChange={(value) => update(() => value)}
              />
            </RepeatableItemCard>
          )}
        />
      </FormSection>

      <FormSection title="10. Maybe Skip If">
        <RepeatableList
          items={form.maybe_skip_if}
          onChange={(items) => setField("maybe_skip_if", items)}
          createItem={() => ""}
          addLabel="Add item"
          emptyLabel="No items yet."
          renderItem={(item, index, update, remove) => (
            <RepeatableItemCard
              key={index}
              title={`Item ${index + 1}`}
              onRemove={remove}
            >
              <TextInput
                id={`maybe-skip-if-${index}`}
                label="Text"
                value={item}
                onChange={(value) => update(() => value)}
              />
            </RepeatableItemCard>
          )}
        />
      </FormSection>

      <FormSection title="11. Local Tips">
        <RepeatableList
          items={form.local_tips}
          onChange={(items) => setField("local_tips", items)}
          createItem={() => ({ icon: "", source: "", tip_text: "" })}
          addLabel="Add local tip"
          emptyLabel="No local tips yet."
          renderItem={(item, index, update, remove) => (
            <RepeatableItemCard
              key={index}
              title={`Tip ${index + 1}`}
              onRemove={remove}
            >
              <FieldGrid>
                <IconSelect
                  id={`local-tip-icon-${index}`}
                  label="Icon"
                  value={item.icon}
                  onChange={(value) => update({ icon: value })}
                />
                <TextInput
                  id={`local-tip-source-${index}`}
                  label="Source (optional)"
                  value={item.source ?? ""}
                  onChange={(value) => update({ source: value })}
                />
              </FieldGrid>
              <TextArea
                id={`local-tip-text-${index}`}
                label="Tip text"
                value={item.tip_text}
                onChange={(value) => update({ tip_text: value })}
                rows={3}
              />
            </RepeatableItemCard>
          )}
        />
      </FormSection>

      <FormSection title="12. Hidden Gems">
        <RepeatableList
          items={form.hidden_gems}
          onChange={(items) => setField("hidden_gems", items)}
          createItem={() => ({ number: "", title: "", body: "" })}
          addLabel="Add hidden gem"
          emptyLabel="No hidden gems yet."
          renderItem={(item, index, update, remove) => (
            <RepeatableItemCard
              key={index}
              title={`Hidden gem ${index + 1}`}
              onRemove={remove}
            >
              <FieldGrid>
                <TextInput
                  id={`hidden-gem-number-${index}`}
                  label="Number"
                  value={item.number}
                  onChange={(value) => update({ number: value })}
                  placeholder="01"
                />
                <TextInput
                  id={`hidden-gem-title-${index}`}
                  label="Title"
                  value={item.title}
                  onChange={(value) => update({ title: value })}
                />
              </FieldGrid>
              <TextArea
                id={`hidden-gem-body-${index}`}
                label="Body"
                value={item.body}
                onChange={(value) => update({ body: value })}
                rows={3}
              />
            </RepeatableItemCard>
          )}
        />
        <ImageUploadField
          id="hidden_gems_image_url"
          label="Hidden gems image"
          value={form.hidden_gems_image_url}
          onChange={(value) => setField("hidden_gems_image_url", value)}
          altValue={form.hidden_gems_image_alt}
          onAltChange={(value) => setField("hidden_gems_image_alt", value)}
          villageSlug={form.slug}
          fieldName="hidden-gems"
          hint="Shown in the “What Most Visitors Miss” section"
        />
      </FormSection>

      <FormSection title="13. Parking Guide">
        <FieldGrid>
          <TextInput
            id="parking-main-location"
            label="Main location"
            value={form.parking_guide.main_location}
            onChange={(value) => setParkingField("main_location", value)}
          />
          <TextInput
            id="parking-cost"
            label="Cost"
            value={form.parking_guide.cost}
            onChange={(value) => setParkingField("cost", value)}
          />
          <TextInput
            id="parking-best-time"
            label="Best time"
            value={form.parking_guide.best_time}
            onChange={(value) => setParkingField("best_time", value)}
          />
          <TextInput
            id="parking-map-query"
            label="Car park postcode or name (for map)"
            value={form.parking_guide.map_query ?? ""}
            onChange={(value) => setParkingField("map_query", value)}
            hint="Used to generate the map pin automatically. Postcode preferred, or exact car park name plus postcode."
          />
        </FieldGrid>
        <details className="mt-1">
          <summary className="cursor-pointer font-label-caps text-[10px] tracking-widest text-on-surface-variant">
            Advanced: Map override URL (optional)
          </summary>
          <div className="mt-3">
            <TextInput
              id="parking-map-override-url"
              label="Map override URL"
              value={form.parking_guide.map_override_url ?? ""}
              onChange={(value) => setParkingField("map_override_url", value)}
              hint="Only needed if the automatic search doesn't point to the right spot"
            />
          </div>
        </details>
        <TextArea
          id="parking-main-detail"
          label="Main detail"
          value={form.parking_guide.main_detail}
          onChange={(value) => setParkingField("main_detail", value)}
          rows={3}
        />
        <TextArea
          id="parking-on-street"
          label="On-street note"
          value={form.parking_guide.on_street_note}
          onChange={(value) => setParkingField("on_street_note", value)}
          rows={2}
        />
        <TextArea
          id="parking-overflow"
          label="Overflow note"
          value={form.parking_guide.overflow_note}
          onChange={(value) => setParkingField("overflow_note", value)}
          rows={2}
        />
      </FormSection>

      <FormSection title="14. Getting Here">
        <TextArea
          id="getting-here-rail"
          label="Rail"
          value={form.getting_here_rail}
          onChange={(value) => setField("getting_here_rail", value)}
          rows={3}
        />
        <TextArea
          id="getting-here-parking"
          label="Parking"
          value={form.getting_here_parking}
          onChange={(value) => setField("getting_here_parking", value)}
          rows={3}
        />
      </FormSection>

      <FormSection title="15. Accessibility">
        <FieldGrid>
          <TextArea
            id="accessibility-wheelchair"
            label="Wheelchair"
            value={form.accessibility_wheelchair}
            onChange={(value) => setField("accessibility_wheelchair", value)}
            rows={3}
          />
          <TextArea
            id="accessibility-pushchair"
            label="Pushchair"
            value={form.accessibility_pushchair}
            onChange={(value) => setField("accessibility_pushchair", value)}
            rows={3}
          />
          <TextArea
            id="accessibility-mobility"
            label="Mobility notes"
            value={form.accessibility_mobility_notes}
            onChange={(value) => setField("accessibility_mobility_notes", value)}
            rows={3}
          />
          <TextArea
            id="accessibility-surface"
            label="Surface"
            value={form.accessibility_surface}
            onChange={(value) => setField("accessibility_surface", value)}
            rows={3}
          />
        </FieldGrid>
      </FormSection>

      <FormSection title="16. Rainy Day Options">
        <RepeatableList
          items={form.rainy_day_options}
          onChange={(items) => setField("rainy_day_options", items)}
          createItem={() => ({ icon: "", name: "", body: "" })}
          addLabel="Add rainy day option"
          emptyLabel="No rainy day options yet."
          renderItem={(item, index, update, remove) => (
            <RepeatableItemCard
              key={index}
              title={`Option ${index + 1}`}
              onRemove={remove}
            >
              <FieldGrid>
                <IconSelect
                  id={`rainy-icon-${index}`}
                  label="Icon"
                  value={item.icon}
                  onChange={(value) => update({ icon: value })}
                />
                <TextInput
                  id={`rainy-name-${index}`}
                  label="Name"
                  value={item.name}
                  onChange={(value) => update({ name: value })}
                />
              </FieldGrid>
              <TextArea
                id={`rainy-body-${index}`}
                label="Body"
                value={item.body}
                onChange={(value) => update({ body: value })}
                rows={3}
              />
            </RepeatableItemCard>
          )}
        />
      </FormSection>

      <FormSection title="17. Comparison & Alternatives">
        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-3 font-label-caps text-[10px] tracking-widest text-on-surface-variant">
              This village&rsquo;s ratings
            </p>
            <p className="mb-4 font-body-sm text-on-surface-variant">
              Enter once here. These values power this village&rsquo;s &ldquo;You Are
              Here&rdquo; card and appear when other villages select it for comparison.
            </p>
            <FieldGrid>
              <SelectInput
                id="own-beauty"
                label="Beauty"
                value={form.own_beauty ?? ""}
                onChange={(value) =>
                  setField("own_beauty", value as VillageFormState["own_beauty"])
                }
                options={["Good", "High", "Very High", "Exceptional"]}
                hint="Canonical beauty rating"
              />
              <SelectInput
                id="own-crowds"
                label="Crowds"
                value={form.own_crowds ?? ""}
                onChange={(value) =>
                  setField("own_crowds", value as VillageFormState["own_crowds"])
                }
                options={["Low", "Moderate", "High", "Very High"]}
                hint="Canonical crowd rating"
              />
              <SelectInput
                id="own-food"
                label="Food"
                value={form.own_food ?? ""}
                onChange={(value) =>
                  setField("own_food", value as VillageFormState["own_food"])
                }
                options={["Limited", "Good", "Strong", "Exceptional"]}
                hint="Canonical food rating"
              />
              <SelectInput
                id="own-time-needed"
                label="Time needed"
                value={form.own_time_needed ?? ""}
                onChange={(value) =>
                  setField(
                    "own_time_needed",
                    value as VillageFormState["own_time_needed"],
                  )
                }
                options={[
                  "1-2 hours",
                  "2-3 hours",
                  "2-4 hours",
                  "Half day",
                  "Full day",
                ]}
                hint="Canonical visit length"
              />
            </FieldGrid>
          </div>

          <div>
            <p className="mb-3 font-label-caps text-[10px] tracking-widest text-on-surface-variant">
              Compare against
            </p>
            <p className="mb-4 font-body-sm text-on-surface-variant">
              Pick peer villages. Their live ratings are loaded from each peer&rsquo;s
              own row. You no longer type other villages&rsquo; stats here.
            </p>
            {villageOptions.length === 0 ? (
              <p className="font-body-sm text-on-surface-variant">
                No other villages available to compare against yet.
              </p>
            ) : (
              <div className="flex flex-col gap-3">
                {villageOptions.map((option) => {
                  const checked = form.comparison_village_ids.includes(option.id);
                  return (
                    <CheckboxInput
                      key={option.id}
                      id={`compare-village-${option.id}`}
                      label={option.name}
                      checked={checked}
                      onChange={(isChecked) => {
                        const next = isChecked
                          ? [...form.comparison_village_ids, option.id]
                          : form.comparison_village_ids.filter(
                              (id) => id !== option.id,
                            );
                        setField("comparison_village_ids", next);
                      }}
                    />
                  );
                })}
              </div>
            )}
          </div>

          <div>
            <p className="mb-3 font-label-caps text-[10px] tracking-widest text-on-surface-variant">
              Alternative villages
            </p>
            <RepeatableList
              items={form.alternative_villages}
              onChange={(items) => setField("alternative_villages", items)}
              createItem={() => ({ icon: "", need: "", suggested_villages: [] })}
              addLabel="Add alternative"
              emptyLabel="No alternatives yet."
              renderItem={(item, index, update, remove) => (
                <RepeatableItemCard
                  key={index}
                  title={`Alternative ${index + 1}`}
                  onRemove={remove}
                >
                  <FieldGrid>
                    <IconSelect
                      id={`alternative-icon-${index}`}
                      label="Icon"
                      value={item.icon}
                      onChange={(value) => update({ icon: value })}
                    />
                    <TextInput
                      id={`alternative-need-${index}`}
                      label="Need"
                      value={item.need}
                      onChange={(value) => update({ need: value })}
                    />
                  </FieldGrid>
                  <div>
                    <p className="mb-3 font-label-caps text-[10px] tracking-widest text-on-surface-variant">
                      Suggested villages
                    </p>
                    <RepeatableList
                      items={item.suggested_villages}
                      onChange={(suggested) => update({ suggested_villages: suggested })}
                      createItem={() => ""}
                      addLabel="Add village name"
                      emptyLabel="No suggested villages yet."
                      renderItem={(name, nameIndex, updateName, removeName) => (
                        <RepeatableItemCard
                          key={nameIndex}
                          title={`Village ${nameIndex + 1}`}
                          onRemove={removeName}
                        >
                          <TextInput
                            id={`alternative-${index}-village-${nameIndex}`}
                            label="Village name"
                            value={name}
                            onChange={(value) => updateName(() => value)}
                          />
                        </RepeatableItemCard>
                      )}
                    />
                  </div>
                </RepeatableItemCard>
              )}
            />
          </div>
        </div>
      </FormSection>

      <FormSection title="18. Combine With">
        <RepeatableList
          items={form.combine_with}
          onChange={(items) => setField("combine_with", items)}
          createItem={() => ({
            title: "",
            body: "",
            duration_label: "",
            left_image_url: "",
            right_image_url: "",
            left_image_alt: "",
            right_image_alt: "",
          })}
          addLabel="Add trip idea"
          emptyLabel="No combine-with items yet."
          renderItem={(item, index, update, remove) => (
            <RepeatableItemCard
              key={index}
              title={`Trip ${index + 1}`}
              onRemove={remove}
            >
              <TextInput
                id={`combine-title-${index}`}
                label="Title"
                value={item.title}
                onChange={(value) => update({ title: value })}
              />
              <TextArea
                id={`combine-body-${index}`}
                label="Body"
                value={item.body}
                onChange={(value) => update({ body: value })}
                rows={3}
              />
              <TextInput
                id={`combine-duration-${index}`}
                label="Duration label"
                value={item.duration_label}
                onChange={(value) => update({ duration_label: value })}
                placeholder="Half day"
              />
              <FieldGrid>
                <ImageUploadField
                  id={`combine-left-image-${index}`}
                  label="Left image"
                  value={item.left_image_url}
                  onChange={(value) => update({ left_image_url: value })}
                  altValue={item.left_image_alt ?? ""}
                  onAltChange={(value) => update({ left_image_alt: value })}
                  villageSlug={form.slug}
                  fieldName={`combine-left-${index}`}
                />
                <ImageUploadField
                  id={`combine-right-image-${index}`}
                  label="Right image"
                  value={item.right_image_url}
                  onChange={(value) => update({ right_image_url: value })}
                  altValue={item.right_image_alt ?? ""}
                  onAltChange={(value) => update({ right_image_alt: value })}
                  villageSlug={form.slug}
                  fieldName={`combine-right-${index}`}
                />
              </FieldGrid>
            </RepeatableItemCard>
          )}
        />
      </FormSection>

      <FormSection title="19. FAQ">
        <RepeatableList
          items={form.faq_items}
          onChange={(items) => setField("faq_items", items)}
          createItem={() => ({ question: "", answer: "" })}
          addLabel="Add FAQ item"
          emptyLabel="No FAQ items yet."
          renderItem={(item, index, update, remove) => (
            <RepeatableItemCard
              key={index}
              title={`FAQ ${index + 1}`}
              onRemove={remove}
            >
              <TextInput
                id={`faq-question-${index}`}
                label="Question"
                value={item.question}
                onChange={(value) => update({ question: value })}
              />
              <TextArea
                id={`faq-answer-${index}`}
                label="Answer"
                value={item.answer}
                onChange={(value) => update({ answer: value })}
                rows={3}
              />
            </RepeatableItemCard>
          )}
        />
      </FormSection>

      <FormSection title="20. Nearby Villages">
        <RepeatableList
          items={form.nearby_villages}
          onChange={(items) => setField("nearby_villages", items)}
          createItem={() => ({
            village_name: "",
            drive_time_label: "",
            image_url: "",
            image_alt: "",
          })}
          addLabel="Add nearby village"
          emptyLabel="No nearby villages yet."
          renderItem={(item, index, update, remove) => (
            <RepeatableItemCard
              key={index}
              title={`Nearby ${index + 1}`}
              onRemove={remove}
            >
              <FieldGrid>
                <TextInput
                  id={`nearby-name-${index}`}
                  label="Village name"
                  value={item.village_name}
                  onChange={(value) => update({ village_name: value })}
                />
                <TextInput
                  id={`nearby-drive-${index}`}
                  label="Drive time label"
                  value={item.drive_time_label}
                  onChange={(value) => update({ drive_time_label: value })}
                  placeholder="15 min"
                />
                <ImageUploadField
                  id={`nearby-image-${index}`}
                  label="Image (optional)"
                  value={item.image_url ?? ""}
                  onChange={(value) => update({ image_url: value })}
                  altValue={item.image_alt ?? ""}
                  onAltChange={(value) => update({ image_alt: value })}
                  villageSlug={form.slug}
                  fieldName={`nearby-${index}`}
                />
              </FieldGrid>
            </RepeatableItemCard>
          )}
        />
      </FormSection>

      <FormSection title="21. Local Businesses">
        <RepeatableList
          items={form.local_businesses}
          onChange={(items) => setField("local_businesses", items)}
          createItem={() => ({
            name: "",
            category: "",
            description: "",
            address: "",
            website_url: "",
            image_url: "",
            image_alt: "",
          })}
          addLabel="Add local business"
          emptyLabel="No local businesses yet."
          renderItem={(item, index, update, remove) => (
            <RepeatableItemCard
              key={index}
              title={`Business ${index + 1}`}
              onRemove={remove}
            >
              <FieldGrid>
                <TextInput
                  id={`business-name-${index}`}
                  label="Name"
                  value={item.name}
                  onChange={(value) => update({ name: value })}
                />
                <TextInput
                  id={`business-category-${index}`}
                  label="Category"
                  value={item.category}
                  onChange={(value) => update({ category: value })}
                />
                <TextArea
                  id={`business-description-${index}`}
                  label="Description"
                  value={item.description}
                  onChange={(value) => update({ description: value })}
                  rows={3}
                />
                <TextInput
                  id={`business-address-${index}`}
                  label="Address (optional)"
                  value={item.address ?? ""}
                  onChange={(value) => update({ address: value })}
                />
                <TextInput
                  id={`business-website-${index}`}
                  label="Website URL (optional)"
                  value={item.website_url ?? ""}
                  onChange={(value) => update({ website_url: value })}
                />
                <ImageUploadField
                  id={`business-image-${index}`}
                  label="Image (optional)"
                  hint="Photo for this local business"
                  value={item.image_url ?? ""}
                  onChange={(value) => update({ image_url: value })}
                  altValue={item.image_alt ?? ""}
                  onAltChange={(value) => update({ image_alt: value })}
                  villageSlug={form.slug}
                  fieldName={`business-${index}`}
                />
              </FieldGrid>
            </RepeatableItemCard>
          )}
        />
      </FormSection>

      <FormSection title="22. SEO">
        <TextInput
          id="meta_title"
          label="Meta title"
          value={form.meta_title}
          onChange={(value) => setField("meta_title", value)}
        />
        <TextArea
          id="meta_description"
          label="Meta description"
          value={form.meta_description}
          onChange={(value) => setField("meta_description", value)}
          rows={3}
        />
        <TextInput
          id="alt_text"
          label="Alt text"
          value={form.alt_text}
          onChange={(value) => setField("alt_text", value)}
        />
      </FormSection>

      <div className="sticky bottom-0 z-10 -mx-margin-mobile border-t border-outline/15 bg-background/95 px-margin-mobile py-4 backdrop-blur md:-mx-margin-desktop md:px-margin-desktop">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="min-w-[8rem]">
            {mode === "edit" && isPublished && villageId != null && originalSlug ? (
              <button
                type="button"
                disabled={pending}
                onClick={handleUnpublish}
                className="admin-cta inline-flex items-center border border-error/50 px-5 py-2.5 font-label-caps text-[10px] tracking-widest text-error transition-colors hover:bg-error/10 disabled:opacity-60"
              >
                {unpublishPending ? "Unpublishing…" : "Unpublish"}
              </button>
            ) : null}
          </div>
          <div className="flex flex-wrap items-center justify-end gap-3">
          <Link
            href="/admin"
            className="admin-cta inline-flex items-center border border-outline/30 px-5 py-2.5 font-label-caps text-[10px] tracking-widest text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
          >
            Cancel
          </Link>
          <button
            type="button"
            disabled={pending}
            onClick={() => handleSave(secondaryStatus)}
            className="admin-cta inline-flex items-center border border-outline/30 px-5 py-2.5 font-label-caps text-[10px] tracking-widest text-on-surface-variant transition-colors hover:border-primary hover:text-primary disabled:opacity-60"
          >
            {pending && pendingAction === secondaryStatus
              ? secondaryPendingLabel
              : secondaryLabel}
          </button>
          <button
            type="button"
            disabled={pending}
            onClick={() => handleSave("published")}
            className="admin-cta inline-flex items-center bg-limestone px-6 py-2.5 font-label-caps text-label-caps text-on-background transition-colors hover:bg-white disabled:opacity-60"
          >
            {pending && pendingAction === "published"
              ? publishPendingLabel
              : "Publish"}
          </button>
          </div>
        </div>
      </div>
    </form>
  );
}
