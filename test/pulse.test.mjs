import { test } from 'node:test';
import assert from 'node:assert/strict';
import { renderPulseMarkdown, injectPulseSection } from '../scripts/update-pulse.mjs';

test('injectPulseSection replaces marker block cleanly without touching surrounding prose', () => {
  const sample = [
    '# LevCodeLab',
    '',
    '<!-- LIVE_PULSE:START -->',
    'old table',
    '<!-- LIVE_PULSE:END -->',
    '',
    'Footer line.',
  ].join('\n');

  const block = renderPulseMarkdown({
    repoCount: 17,
    languages: 'Rust, TypeScript, JavaScript',
    updatedUtc: '2026-11-21 18:30 UTC',
  });

  const updated = injectPulseSection(sample, block);
  assert.ok(updated.includes('`17`'));
  assert.ok(updated.includes('`2026-11-21 18:30 UTC`'));
  assert.ok(updated.includes('Footer line.'));
});
