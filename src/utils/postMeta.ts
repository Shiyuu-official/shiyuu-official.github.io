export const CATEGORY_LABELS = {
  summary: "总结",
  talk: "随想",
  creation: "创作",
  study: "学习",
  record: "记录",
};

export const getCategoryFromId = (id: string) => id.split("/")[0] ?? "";

export const getCategoryLabel = (id: string) => {
  const key = getCategoryFromId(id);
  return CATEGORY_LABELS[key] ?? key;
};

export const estimateWordCount = (body?: string) => {
  if (!body) return 0;
  const text = body.replace(/<[^>]+>/g, "").replace(/\s/g, "");
  return text.length;
};
