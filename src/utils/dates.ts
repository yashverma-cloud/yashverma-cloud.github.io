const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
] as const;

/** '2026-03' -> 'Mar 2026'. Partial dates stay partial; nothing is guessed. */
export function formatMonth(value: string): string {
  const [year, month] = value.split('-');
  if (!year) return value;
  if (!month) return year;
  const label = MONTHS[Number(month) - 1];
  return label ? `${label} ${year}` : year;
}

/** Inclusive range label for a role. An absent end means the role is current. */
export function formatRange(start: string, end?: string): string {
  return `${formatMonth(start)} – ${end ? formatMonth(end) : 'present'}`;
}

/** ISO value for <time datetime="..."> — the machine-readable half. */
export function isoRange(start: string, end?: string): string {
  return end ? `${start}/${end}` : start;
}
