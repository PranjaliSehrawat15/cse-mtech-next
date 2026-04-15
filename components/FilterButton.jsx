"use client";
import React from "react";

/**
 * FilterButton Component
 *
 * A reusable filter button with active/inactive states and count display
 *
 * @param {string} filterId - Unique identifier for this filter
 * @param {string} label - Display text for the button
 * @param {number} count - Number of items in this category (optional)
 * @param {boolean} isActive - Whether this filter is currently active
 * @param {string} color - Color for active state (hex code)
 * @param {function} onClick - Click handler function
 */
const FilterButton = ({
  filterId,
  label,
  count,
  isActive,
  color = "#F26520",
  onClick,
}) => {
  const themeNavy = "#164265";

  return (
    <button
      type="button"
      onClick={() => onClick(filterId)}
      className={`btn d-inline-flex align-items-center gap-2 rounded-pill px-4 py-2 border fw-semibold text-nowrap transition-all shadow-sm ${isActive ? "shadow-md" : ""}`}
      style={(() => {
        if (isActive) {
          return {
            backgroundColor: color,
            borderColor: color,
            color: "#FFFFFF",
          };
        }

        return {
          backgroundColor: "#FFFFFF",
          borderColor: `${themeNavy}33`,
          color: themeNavy,
        };
      })()}
      aria-pressed={isActive}
      aria-label={`Filter by ${label}${count !== undefined ? `, ${count} items` : ""}`}
    >
      <span
        style={
          isActive
            ? {}
            : {
                color: themeNavy,
              }
        }
      >
        {label}
      </span>

      {count !== undefined ? (
        <span
          className="badge rounded-pill"
          style={
            isActive
              ? { backgroundColor: "rgba(255,255,255,0.22)", color: "#FFFFFF" }
              : { backgroundColor: `${themeNavy}14`, color: themeNavy }
          }
        >
          {count}
        </span>
      ) : null}
    </button>
  );
};

export default FilterButton;
