const API_BASE = process.env.NEXT_PUBLIC_MFS_API_BASE;

export const fetchAtmBasedCaravans = async () => {
  const res = await fetch(`${API_BASE}/gvm-based-motorhomes-list`, {
    cache: "no-store",
  });

  const json = await res.json();
  return json?.bands || [];
};
