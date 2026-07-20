"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { createPortal } from "react-dom";

export type DirectoryFilterNavOption = {
  id: string;
  label: string;
};

type DirectoryFilterNavProps = {
  ariaLabel: string;
  filters: DirectoryFilterNavOption[];
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
};

const CLOSE_MS = 320;
const SWIPE_CLOSE_PX = 80;

export function DirectoryFilterNav({
  ariaLabel,
  filters,
  activeFilter,
  onFilterChange,
}: DirectoryFilterNavProps) {
  const titleId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragStartY = useRef<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [entered, setEntered] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [portalReady, setPortalReady] = useState(false);

  const activeLabel =
    filters.find((filter) => filter.id === activeFilter)?.label ??
    filters[0]?.label ??
    "All";

  useEffect(() => {
    setPortalReady(true);
  }, []);

  const finishClose = useCallback(() => {
    setMounted(false);
    setDragOffset(0);
    document.body.classList.remove("directory-filter-sheet-open");
    triggerRef.current?.focus();
  }, []);

  const closeSheet = useCallback(() => {
    setEntered(false);
    setDragOffset(0);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(finishClose, CLOSE_MS);
  }, [finishClose]);

  const openSheet = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setMounted(true);
    setDragOffset(0);
    document.body.classList.add("directory-filter-sheet-open");
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const frame = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(frame);
  }, [mounted]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      document.body.classList.remove("directory-filter-sheet-open");
    };
  }, []);

  useEffect(() => {
    if (!mounted || !entered) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeSheet();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    sheetRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mounted, entered, closeSheet]);

  function selectFilter(filterId: string) {
    onFilterChange(filterId);
    closeSheet();
  }

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragStartY.current = event.clientY;
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (dragStartY.current == null) return;
    const delta = Math.max(0, event.clientY - dragStartY.current);
    setDragOffset(delta);
  }

  function onPointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    if (dragStartY.current == null) return;
    const delta = Math.max(0, event.clientY - dragStartY.current);
    dragStartY.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    if (delta >= SWIPE_CLOSE_PX) {
      closeSheet();
      return;
    }
    setDragOffset(0);
  }

  const sheetStyle =
    dragOffset > 0
      ? { transform: `translateY(${dragOffset}px)`, transition: "none" }
      : undefined;

  return (
    <nav
      className="listing-directory-filter-nav sticky top-[5.5rem] z-40 border-b border-outline/5 bg-background/95 backdrop-blur-md"
      aria-label={ariaLabel}
    >
      <div className="listing-directory-filter-nav__inner mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop md:py-5 xl:px-margin-desktop xl:py-5">
        {/* Mobile trigger */}
        <div className="md:hidden">
          <button
            ref={triggerRef}
            type="button"
            className="directory-filter-trigger"
            aria-haspopup="dialog"
            aria-expanded={mounted}
            onClick={openSheet}
          >
            <span className="directory-filter-trigger__label">
              <span className="directory-filter-trigger__prefix">Filter:</span>{" "}
              <span className="directory-filter-trigger__value">
                {activeLabel}
              </span>
            </span>
            <span
              className="material-symbols-outlined directory-filter-trigger__icon"
              aria-hidden="true"
            >
              filter_list
            </span>
          </button>
        </div>

        {/* Desktop pill row */}
        <div className="listing-directory-filter-nav__filters hidden items-center overflow-x-auto no-scrollbar md:flex md:gap-6 xl:gap-10">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;

            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => onFilterChange(filter.id)}
                className={`shrink-0 whitespace-nowrap font-label-caps text-label-caps transition-colors ${
                  isActive
                    ? "border-b-2 border-primary pb-1 text-primary"
                    : "pb-1 text-on-surface-variant hover:text-primary"
                }`}
              >
                {filter.label.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>

      {portalReady &&
        mounted &&
        createPortal(
          <div
            className={`directory-filter-sheet${entered ? " is-open" : ""}`}
            role="presentation"
          >
            <button
              type="button"
              className="directory-filter-sheet__backdrop"
              aria-label="Dismiss filter options"
              onClick={closeSheet}
            />
            <div
              ref={sheetRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              tabIndex={-1}
              className="directory-filter-sheet__panel"
              style={sheetStyle}
            >
              <div
                className="directory-filter-sheet__handle-wrap"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
              >
                <div className="directory-filter-sheet__handle" aria-hidden="true" />
                <div className="directory-filter-sheet__header">
                  <h2
                    id={titleId}
                    className="directory-filter-sheet__title"
                  >
                    Filter by category
                  </h2>
                  <button
                    type="button"
                    className="directory-filter-sheet__close"
                    aria-label="Close filters"
                    onClick={closeSheet}
                  >
                    <span className="material-symbols-outlined" aria-hidden="true">
                      close
                    </span>
                  </button>
                </div>
              </div>

              <ul className="directory-filter-sheet__list" role="listbox" aria-label={ariaLabel}>
                {filters.map((filter) => {
                  const isActive = activeFilter === filter.id;

                  return (
                    <li key={filter.id} role="presentation">
                      <button
                        type="button"
                        role="option"
                        aria-selected={isActive}
                        className={`directory-filter-sheet__option${
                          isActive ? " is-active" : ""
                        }`}
                        onClick={() => selectFilter(filter.id)}
                      >
                        <span className="directory-filter-sheet__option-label">
                          {filter.label}
                        </span>
                        {isActive ? (
                          <span
                            className="material-symbols-outlined directory-filter-sheet__check"
                            aria-hidden="true"
                          >
                            check
                          </span>
                        ) : null}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>,
          document.body,
        )}
    </nav>
  );
}
