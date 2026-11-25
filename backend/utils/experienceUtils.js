const MONTH_NAMES = {
  jan: 1, january: 1,
  feb: 2, february: 2,
  mar: 3, march: 3,
  apr: 4, april: 4,
  may: 5,
  jun: 6, june: 6,
  jul: 7, july: 7,
  aug: 8, august: 8,
  sep: 9, sept: 9, september: 9,
  oct: 10, october: 10,
  nov: 11, november: 11,
  dec: 12, december: 12,
};

function parseMonthYear(value, now = new Date()) {
  if (!value || typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;

  if (/^present$/i.test(trimmed) || /^current$/i.test(trimmed)) {
    return {
      month: now.getMonth() + 1,
      year: now.getFullYear(),
      isPresent: true,
    };
  }

  // MM/YYYY or M/YYYY
  let match = trimmed.match(/^(\d{1,2})\s*[/-]\s*(\d{4})$/);
  if (match) {
    const month = parseInt(match[1], 10);
    const year = parseInt(match[2], 10);
    if (month >= 1 && month <= 12 && year >= 1950 && year <= 2100) {
      return { month, year, isPresent: false };
    }
  }

  // YYYY-MM or YYYY/MM
  match = trimmed.match(/^(\d{4})\s*[/-]\s*(\d{1,2})$/);
  if (match) {
    const year = parseInt(match[1], 10);
    const month = parseInt(match[2], 10);
    if (month >= 1 && month <= 12 && year >= 1950 && year <= 2100) {
      return { month, year, isPresent: false };
    }
  }

  // "Jan 2024" or "January, 2024"
  match = trimmed.match(/^([a-zA-Z]+)[,\s]+(\d{4})$/);
  if (match) {
    const month = MONTH_NAMES[match[1].toLowerCase()];
    const year = parseInt(match[2], 10);
    if (month && year >= 1950 && year <= 2100) {
      return { month, year, isPresent: false };
    }
  }

  return null;
}

function formatDuration(totalMonths) {
  if (typeof totalMonths !== "number" || Number.isNaN(totalMonths) || totalMonths <= 0) {
    return "0 months";
  }
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "year" : "years"}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? "month" : "months"}`);
  return parts.join(" ");
}

function calculateExperienceDuration(startDate, endDate, now = new Date()) {
  const start = parseMonthYear(startDate, now);
  const end = parseMonthYear(endDate, now);
  if (!start || !end) return null;

  const startIndex = start.year * 12 + (start.month - 1);
  const endIndex = end.year * 12 + (end.month - 1);

  if (endIndex < startIndex) {
    return {
      isValidOrder: false,
      totalMonths: 0,
      years: 0,
      months: 0,
      formatted: "",
    };
  }

  const totalMonths = endIndex - startIndex + 1;
  return {
    isValidOrder: true,
    totalMonths,
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
    formatted: formatDuration(totalMonths),
  };
}

function calculateTotalExperience(experiences = [], now = new Date()) {
  const intervals = [];

  for (const item of experiences) {
    const start = parseMonthYear(item.startDate, now);
    const end = parseMonthYear(item.endDate, now);
    if (!start || !end) continue;

    const startIndex = start.year * 12 + (start.month - 1);
    const endIndex = end.year * 12 + (end.month - 1);
    if (endIndex >= startIndex) {
      intervals.push([startIndex, endIndex]);
    }
  }

  if (intervals.length === 0) {
    return { totalMonths: 0, years: 0, months: 0, formatted: "0 months" };
  }

  intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const [curStart, curEnd] = intervals[i];
    const last = merged[merged.length - 1];
    if (curStart <= last[1] + 1) {
      last[1] = Math.max(last[1], curEnd);
    } else {
      merged.push([curStart, curEnd]);
    }
  }

  const totalMonths = merged.reduce((sum, [s, e]) => sum + (e - s + 1), 0);
  return {
    totalMonths,
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
    formatted: formatDuration(totalMonths),
  };
}

module.exports = {
  parseMonthYear,
  formatDuration,
  calculateExperienceDuration,
  calculateTotalExperience,
};
