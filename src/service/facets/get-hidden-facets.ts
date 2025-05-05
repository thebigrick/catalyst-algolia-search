/**
 * Hidden facets are not displayed in the UI but are still available for filtering.
 */
const getHiddenFacets = (): string[] => {
  const res = ['category_ids', 'categories_without_path', 'default_price', 'option_names'];

  for (let i = 0; i <= 10; i++) {
    res.push(`categories.lvl${i}`);
  }

  return res;
};

export default getHiddenFacets;
