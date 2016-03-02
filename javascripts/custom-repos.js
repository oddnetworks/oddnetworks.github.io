// Opt-in repos (case sensitive)
// - These are all children of Odd Networks and visible at https://github.com/Shopify
var optInRepos = [
  'seneca-odd-auth',
  'seneca-odd-views',
  'odd-schemas',
  'seneca-odd-identity',
  'oddcast',
  'oddcast-aws-transport',
  'sync-service'
]

// Add custom repos by full_name. Take the org/user and repo name
// - e.g. batmanjs/batman from https://github.com/batmanjs/batman
var customRepos = []

// Custom repo language, different than that defined by GitHub
var customRepoLanguage = {
  'liquid': 'Liquid',
  'Timber': 'Liquid',
  'skeleton-theme': 'Liquid',
  'dashing': 'Ruby',
  'shopify_theme': 'Ruby',
  'Shopify-Developer-Book': 'Ruby',
  'offsite-gateway-sim': 'Ruby',
  'shopify.github.com': 'JavaScript',
  'batman': 'JavaScript'
}

var customRepoCategories = {
  'seneca-odd-auth': 'Platform',
  'seneca-odd-views': 'Platform',
  'odd-schemas': 'Platform',
  'seneca-odd-identity': 'Platform',
  'oddcast': 'Platform',
  'oddcast-aws-transport': 'Platform',
  'sync-service': 'Platform'
}

// Custom repo avatars. Dimensions should be 40x40
// - Be sure a custom repo doesn't have the same name as a Shopify one, or a one will be overridden
var customRepoAvatar = {
  'Timber': '/images/repo-avatars/timber.gif',
  'dashing': '/images/repo-avatars/dashing.gif',
  'superdb': '/images/repo-avatars/super-debugger.gif',
  'batman': '/images/repo-avatars/batmanjs.gif'
}
