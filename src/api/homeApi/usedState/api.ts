const API_BASE = process.env.NEXT_PUBLIC_MFS_API_BASE;

export const fetchUsedStateBasedCaravans = async () => {
  const res = await fetch(`${API_BASE}/used-caravans-by-state`, {
    cache: "no-store",
  });

  const json = await res.json();
  return json?.states || [];
};
