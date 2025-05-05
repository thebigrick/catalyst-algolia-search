import getHiddenFacets from './get-hidden-facets';

const filterHiddenFacets = (
  facets: Record<string, Record<string, number>>,
): Record<string, Record<string, number>> => {
  const hiddenFacets = getHiddenFacets();

  const filteredFacets: Record<string, Record<string, number>> = {};
  Object.keys(facets).forEach((key) => {
    if (!hiddenFacets.includes(key)) {
      filteredFacets[key] = facets[key];
    }
  });

  return filteredFacets;
};

export default filterHiddenFacets;
