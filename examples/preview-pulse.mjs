/**
 * Preview the markdown pulse block locally without touching README.md.
 * Run with: node examples/preview-pulse.mjs
 */
import { renderPulseMarkdown } from '../scripts/update-pulse.mjs';

console.log(
  renderPulseMarkdown({
    repoCount: 17,
    languages: 'Rust, TypeScript, JavaScript',
    updatedUtc: '2026-11-21 19:00 UTC',
  })
);
