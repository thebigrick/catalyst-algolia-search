# Catalyst Algolia Search

An Algolia search provider implementation for Catalyst-based applications.

## Overview

Catalyst Algolia Search is a search provider that integrates Algolia's powerful search capabilities with the Catalyst framework. Built on top of the [catalyst-search-layer](https://github.com/thebigrick/catalyst-search-layer) abstraction, it provides a seamless way to replace Catalyst's built-in search with Algolia's search engine.

Key features include:

- Fully-featured search provider implementation
- Automatic mapping between Algolia data and Catalyst formats
- Support for facets, filters, and sorting
- Intelligent handling of search requests and responses
- Dynamic filter generation based on Algolia facets

> **BETA Notice**: This package is currently in beta. While stable and functional, it may undergo changes before the final release.

## Installation

```bash
# Clone as a git submodule
git submodule add https://github.com/thebigrick/catalyst-algolia-search.git plugins/catalyst-algolia-search

# Install dependencies
cd plugins/catalyst-algolia-search
pnpm install
```

## Configuration

### Environment Variables

Set the following environment variables to configure your Algolia connection:

```env
ALGOLIA_APP_ID=your_algolia_app_id
ALGOLIA_API_KEY=your_algolia_api_key
ALGOLIA_INDEX_NAME=your_algolia_index_name
```

### BigCommerce Integration

For BigCommerce stores, the Algolia Search&Discovery app must be installed from the BigCommerce marketplace to enable this integration. The app establishes the necessary connection between your store data and Algolia's search engine.

### Sorting Functionality

Please note that sorting capabilities are only available after creating the corresponding indices in your Algolia dashboard. Custom sorting options need to be configured at the index level in Algolia for them to be accessible through this integration.

## Requirements

- Catalyst framework
- `@thebigrick/catalyst-search-layer`
- `@thebigrick/catalyst-pluginizr`
- Algolia account with properly configured indices
- For BigCommerce: Algolia Search&Discovery app installed

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
