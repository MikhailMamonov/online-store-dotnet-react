export const getColumns = (items: any) => {
  if (typeof items !== "undefined" && items.length > 0) {
    return Object.keys(items[0]).map((key) => {
      return { name: key, prop: key };
    });
  }
  return [];
};
