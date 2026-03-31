const API_BASE = process.env.NEXT_PUBLIC_MFS_API_BASE;

export const fetchSleepBands = async () => {
  const res = await fetch(`${API_BASE}/sleep-based-caravans-list`, {
    cache: "no-store",
  });

  const json = await res.json();
  return json?.bands || [];
};
