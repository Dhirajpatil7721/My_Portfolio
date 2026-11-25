export const MONTH_OPTIONS = [
  { value: "01", label: "January", short: "Jan" },
  { value: "02", label: "February", short: "Feb" },
  { value: "03", label: "March", short: "Mar" },
  { value: "04", label: "April", short: "Apr" },
  { value: "05", label: "May", short: "May" },
  { value: "06", label: "June", short: "Jun" },
  { value: "07", label: "July", short: "Jul" },
  { value: "08", label: "August", short: "Aug" },
  { value: "09", label: "September", short: "Sep" },
  { value: "10", label: "October", short: "Oct" },
  { value: "11", label: "November", short: "Nov" },
  { value: "12", label: "December", short: "Dec" },
];

const MONTH_NAME_MAP = {
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

export function getYearOptions(startYear = 2000, endYear = new Date().getFullYear() + 1) {
  const years = [];
  for (let y = endYear; y >= startYear; y--) {
    years.push(String(y));
  }
  return years;
}

export function parseMonthYear(value, now = new Date()) {
  if (!value || typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;

  if (/^present$/i.test(trimmed) || /^current$/i.test(trimmed)) {
    return {
      month: String(now.getMonth() + 1).padStart(2, "0"),
      year: String(now.getFullYear()),
      monthNum: now.getMonth() + 1,
      yearNum: now.getFullYear(),
      isPresent: true,
    };
  }

  let match = trimmed.match(/^(\d{1,2})\s*[/-]\s*(\d{4})$/);
  if (match) {
    const monthNum = parseInt(match[1], 10);
    const yearNum = parseInt(match[2], 10);
    if (monthNum >= 1 && monthNum <= 12 && yearNum >= 1950 && yearNum <= 2100) {
      return {
        month: String(monthNum).padStart(2, "0"),
        year: String(yearNum),
        monthNum,
        yearNum,
        isPresent: false,
      };
    }
  }

  match = trimmed.match(/^(\d{4})\s*[/-]\s*(\d{1,2})$/);
  if (match) {
    const yearNum = parseInt(match[1], 10);
    const monthNum = parseInt(match[2], 10);
    if (monthNum >= 1 && monthNum <= 12 && yearNum >= 1950 && yearNum <= 2100) {
      return {
        month: String(monthNum).padStart(2, "0"),
        year: String(yearNum),
        monthNum,
        yearNum,
        isPresent: false,
      };
    }
  }

  match = trimmed.match(/^([a-zA-Z]+)[,\s]+(\d{4})$/);
  if (match) {
    const monthNum = MONTH_NAME_MAP[match[1].toLowerCase()];
    const yearNum = parseInt(match[2], 10);
    if (monthNum && yearNum >= 1950 && yearNum <= 2100) {
      return {
        month: String(monthNum).padStart(2, "0"),
        year: String(yearNum),
        monthNum,
        yearNum,
        isPresent: false,
      };
    }
  }

  return null;
}

export function formatMonthYear(month, year) {
  if (!month || !year) return "";
  return `${String(month).padStart(2, "0")}/${year}`;
}

export function formatDisplayDate(value) {
  if (!value) return "";
  if (/^present$/i.test(value.trim()) || /^current$/i.test(value.trim())) {
    return "Present";
  }
  const parsed = parseMonthYear(value);
  if (!parsed) return value;
  const monthObj = MONTH_OPTIONS[parsed.monthNum - 1];
  return `${monthObj.short} ${parsed.yearNum}`;
}

export function formatDuration(totalMonths) {
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

export function calculateDuration(startDate, endDate, now = new Date()) {
  const start = parseMonthYear(startDate, now);
  const end = parseMonthYear(endDate, now);
  if (!start || !end) return null;

  const startIndex = start.yearNum * 12 + (start.monthNum - 1);
  const endIndex = end.yearNum * 12 + (end.monthNum - 1);

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

export function calculateTotalExperience(experiences = [], now = new Date()) {
  const intervals = [];

  for (const item of experiences) {
    const start = parseMonthYear(item.startDate, now);
    const end = parseMonthYear(item.endDate, now);
    if (!start || !end) continue;

    const startIndex = start.yearNum * 12 + (start.monthNum - 1);
    const endIndex = end.yearNum * 12 + (end.monthNum - 1);
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

export function normalizeWebsiteUrl(url) {
  if (!url || typeof url !== "string") return null;
  const trimmed = url.trim();
  if (!trimmed) return null;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(trimmed)) return null;
  return `https://${trimmed}`;
}
