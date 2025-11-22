/**
 * Parse comma-separated email addresses from environment variable
 */
export function parseEmailList(envVar: string | undefined): string[] {
  if (!envVar) return [];
  return envVar
    .split(',')
    .map(email => email.trim())
    .filter(email => email.length > 0);
}

/**
 * Get committee email recipients
 */
export function getCommitteeEmails(): string[] {
  return parseEmailList(process.env.COMMITTEE_TO_EMAILS);
}

/**
 * Get CC email recipients
 */
export function getCommitteeCCEmails(): string[] {
  return parseEmailList(process.env.COMMITTEE_CC_EMAILS);
}

/**
 * Get sender email address
 */
export function getSenderEmail(): string {
  return process.env.SENDER_EMAIL || 'Pride in My Pines <noreply@updates.prideinmypines.com>';
}

