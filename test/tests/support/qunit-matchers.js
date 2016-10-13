import { buildPatternMatcher } from 'orbit-core/lib/pattern-matcher';

QUnit.assert.matchesPattern = function(actual, pattern, message) {
  const isMatch = buildPatternMatcher(pattern);
  this.push(isMatch(actual), actual, pattern, message);
};
