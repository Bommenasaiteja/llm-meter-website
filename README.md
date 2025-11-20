# LLM Meter Website

The official website for LLM Meter - Track and monitor your LLM usage, costs, and performance across multiple providers (OpenAI, Anthropic, Ollama, etc.).

## Features

- Usage Analytics Dashboard
- Cost Tracking and Reporting
- Performance Metrics Visualization
- Multi-Provider Support (OpenAI, Anthropic, Ollama, etc.)
- CLI & API Access
- Interactive REPL Mode
- Model Pricing Configuration

## Getting started

1. Install the dependencies. We recommend using pnpm. If you want to use `npm`,
   just replace `pnpm` with `npm`.

```bash
pnpm install
```

2. Then, start the development server:

```bash
pnpm run dev
```

3. Visit [http://localhost:3000](http://localhost:3000) in your browser to view
   the website.

## Project Structure

- `src/app/` - Next.js 13+ App Router pages and layouts
- `src/components/ui/` - Reusable UI components
- `src/lib/` - Utility functions and hooks
- `public/` - Static assets

## Documentation

- [CLI Documentation](/docs/cli) - Complete CLI usage guide
- [Local Installation Guide](/docs/local-install) - Step-by-step setup instructions
- [API Reference](https://api.llm-meter.com) - API documentation

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

MIT License

## Learn more

For a deeper understanding of the technologies used in this website, check out
the resources listed below:

- [Next.js](https://nextjs.org/docs) - Next.js documentation
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org) - Typed JavaScript
