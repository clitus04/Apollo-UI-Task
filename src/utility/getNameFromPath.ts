export const getNameFromPath = (path: string, links: any[]): string | null => {
  for (let link of links) {
    if (link?.path === path) {
      return link.name;
    }
    if (link.links) {
      const nestedName = getNameFromPath(path, link.links);
      if (nestedName) {
        return nestedName;
      }
    }
  }
  return null;
};
