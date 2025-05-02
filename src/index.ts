import { algoliaSearchProvider } from './service/search/algolia-search-provider';

// Registra il provider nello strato di ricerca Catalyst
if (typeof window !== 'undefined') {
  // Inizializza il registro globale se non esiste
  if (!(window as any).__SEARCH_LAYER_REGISTRY__) {
    (window as any).__SEARCH_LAYER_REGISTRY__ = [];
  }

  // Aggiungi il provider se non è già presente
  const registry = (window as any).__SEARCH_LAYER_REGISTRY__;
  if (!registry.some((p: any) => p.id === algoliaSearchProvider.id)) {
    registry.unshift(algoliaSearchProvider);
  }
}

export default algoliaSearchProvider;
