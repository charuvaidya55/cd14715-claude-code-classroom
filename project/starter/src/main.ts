import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

/**
 * Main entry point for the Claude Multi-Agent Code Review System
 * Usage: npm run dev <owner> <repo> <pr-number>
 */
async function main() {
  const [owner, repo, prStr] = process.argv.slice(2);

  // TODO: Validate command line arguments
  // - Check if owner, repo, and prStr are provided
  // - Convert prStr to number and validate it's a valid integer
  // - Exit with error message if validation fails
  if (!owner || !repo || !prStr) {
  console.error("Usage: npm run dev <owner> <repo> <pr-number>");
  process.exit(1);
}

const prNumber = Number(prStr);

if (!Number.isInteger(prNumber)) {
  console.error("PR number must be a valid integer");
  process.exit(1);
}
  
  // TODO: Validate authentication (choose ONE method)
  // Students must have either:
  //   - ANTHROPIC_API_KEY environment variable, OR
  //   - AWS_ACCESS_KEY_ID + AWS_SECRET_ACCESS_KEY for Bedrock
      if (!process.env.ANTHROPIC_API_KEY) {
  console.error("ANTHROPIC_API_KEY is not set");
  process.exit(1);
}
  //
  // If using AWS Bedrock:
  //   - Verify AWS_REGION is set
  //   - Log: "🔐 Using AWS Bedrock authentication"
  // If using Anthropic API:
  //   - Log: "🔐 Using Anthropic API authentication"
  // If neither method is configured:
  //   - Exit with clear error message showing both options

  // TODO: Validate ANTHROPIC_MODEL environment variable
  // This is REQUIRED for both authentication methods
  // - For AWS Bedrock: us.anthropic.claude-sonnet-4-5-20250929-v1:0
  // - For Anthropic API: claude-sonnet-4-5-20250929
  // Exit with error if not set
  if (!process.env.ANTHROPIC_MODEL) {
  console.error("ANTHROPIC_MODEL is not set");
  process.exit(1);
}

  console.log('start here', owner, repo, prStr)
  try {
    // TODO: Create orchestrator instance
    // TODO: Call .reviewPullRequest(owner, repo, prNumber);
    // TODO: Generate formatted reports using ReportGenerator
    // Hint: Use ReportGenerator to create Markdown, HTML, and JSON reports
    // Save reports to 'reports/' directory with appropriate filenames
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
