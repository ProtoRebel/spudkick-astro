export const utilSlug = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-');
};

export type Slug = ReturnType<typeof utilSlug>;
