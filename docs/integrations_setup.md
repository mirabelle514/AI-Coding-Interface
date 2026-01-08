# Design System Integrations Setup Guide

This guide explains how to connect your design system sources (Figma, GitHub, Documentation) to the Design-to-Code Bridge.

## Overview

The Design-to-Code Bridge uses your design system as context for AI code generation. By connecting your sources, you enable:

- **Design System Components**: Figma libraries become reference data for component generation
- **Code Patterns**: GitHub repositories provide context for naming conventions and architecture
- **Documentation**: Design system docs inform AI about guidelines and best practices
- **Cross-Feature Support**: All features (Voice-to-Code, Gesture Recognition, Real-time Collaboration, AI Overlay) use your integrated sources automatically

## Figma Integration

### Prerequisites

- Active Figma account
- Access to your design system file
- Permission to create API tokens

### Setup Steps

1. **Get Your API Token**
   - Go to [figma.com/developers](https://www.figma.com/developers)
   - Click "Create a new personal access token"
   - Copy the token (you won't see it again)

2. **Get Your File ID**
   - Open your design system file in Figma
   - Copy the ID from the URL: `figma.com/file/[YOUR_ID_HERE]/ProjectName`
   - This is the string between `/file/` and `/`

3. **Add to Design-to-Code Bridge**
   - Go to Integrations page
   - Paste your Figma API Token
   - Paste your Figma File ID
   - Click "Save Integrations"

4. **Verification**
   - Status will show "Connected" when successful
   - If you see "Error", verify:
     - Token is correctly copied (no extra spaces)
     - File ID is correct
     - Token has not expired

### Security Note

Your Figma API token is stored locally in your browser only. It is never sent to external servers except Figma's own API for validation.

## GitHub Integration

### Prerequisites

- GitHub account with access to your design system repository
- Public repository (or create a token for private repos)

### Setup Steps

1. **Add Repository URL**
   - Go to Integrations page
   - Enter your repository URL: `https://github.com/username/design-system-repo`
   - Click "Save Integrations"

2. **For Private Repositories (Optional)**
   - Go to [github.com/settings/tokens](https://github.com/settings/tokens)
   - Create a new classic token with `repo` scope
   - Copy the token
   - Paste it in the "GitHub Token" field on Integrations page

3. **Verification**
   - Status will show "Connected" when the repository is accessible
   - If you see "Error", verify:
     - Repository URL is correct
     - Repository is public (or token is valid for private repos)
     - No typos in the URL

### What We Access

When connected to GitHub, the Bridge:
- Reads the repository metadata and structure
- Indexes component files and code patterns
- Extracts naming conventions and patterns
- Does NOT commit, push, or modify your repository

## Documentation Integration

### Prerequisites

- Live documentation URL
- Publicly accessible (no authentication required)

### Supported Documentation Platforms

- Storybook
- Notion
- GitHub Wiki
- GitBook
- Custom documentation sites
- README.md files

### Setup Steps

1. **Add Documentation URL**
   - Go to Integrations page
   - Enter your documentation URL: `https://design-system.example.com`
   - Click "Save Integrations"

2. **Examples**
   ```
   Storybook: https://storybook.company.com
   Notion: https://notion.so/Design-System-abc123...
   GitHub Wiki: https://github.com/user/repo/wiki
   Custom: https://docs.mydesign.com
   ```

3. **Verification**
   - Status will show "Connected" when the URL is accessible
   - If you see "Error", verify:
     - URL is publicly accessible
     - No trailing slashes that might cause redirects
     - Site does not require authentication

## Using Integrated Sources in Features

### Voice-to-Code

After connecting integrations, when you speak a design description:

```
"I need a button that matches our primary button component style"
```

The AI will:
1. Reference your Figma components
2. Check your GitHub patterns
3. Consult your documentation guidelines
4. Generate code that matches your design system

### Gesture Recognition

When you draw or gesture a component:

1. Your Figma library provides visual reference
2. GitHub patterns inform code structure
3. Documentation guidelines are applied

### Real-time Collaboration

When collaborating with team members:

1. Shared design system context ensures consistency
2. All participants see component recommendations from Figma
3. Generated code follows patterns from your GitHub repo

### AI Assistance Overlay

The AI overlay analyzes your code in context of:

1. Your design system components
2. Your codebase patterns
3. Your documentation guidelines

## Troubleshooting

### Figma Connection Issues

**Token expired or invalid**
- Create a new token at [figma.com/developers](https://www.figma.com/developers)
- Paste the new token and save

**File ID not found**
- Verify the ID from the URL
- Ensure you have access to the file
- Check for extra spaces or special characters

**Status shows "Error"**
- Clear the token and re-enter it
- Try with a different file to test
- Verify your internet connection

### GitHub Connection Issues

**Repository not found**
- Verify the URL format: `https://github.com/owner/repo`
- Ensure the repository is public (or token is valid)
- Check for typos in the repository name

**Private repository access**
- Create a personal access token
- Select `repo` scope
- Paste the token in the GitHub Token field

### Documentation Connection Issues

**Site not accessible**
- Verify the URL is publicly accessible
- Check for authentication requirements
- Try without trailing slashes (e.g., `example.com` not `example.com/`)
- Ensure the site doesn't require JavaScript to load

## Data Storage and Privacy

All integration settings are stored **locally in your browser** using browser localStorage:

- Settings are not sent to any external server
- Settings persist across browser sessions
- Tokens are not encrypted (use in secure environment)
- Clear browser data to remove settings

## Advanced Configuration

### Using Custom Design System Sources

You can connect any of these as documentation:

1. **Private Documentation**
   - Deploy your docs as a public site
   - Use the site URL in integrations

2. **Multiple Design Systems**
   - Currently, only one set of integrations is supported
   - For multiple systems, create separate projects

3. **API-Based Design Systems**
   - Coming in a future release
   - Currently limited to URL-based sources

## Next Steps

1. Configure your integrations on the [Integrations page](#/integrations)
2. Verify all three sources show "Connected"
3. Try the [Voice-to-Code feature](#/voice-to-code) to see your design system in action
4. Explore other prototypes with your design system context

## Support and Questions

For issues with:

- **Figma**: Check [Figma API docs](https://www.figma.com/developers/api)
- **GitHub**: Check [GitHub API docs](https://docs.github.com/en/rest)
- **Documentation**: Verify your site is publicly accessible

See [Testing Guide](testing_design_to_code_bridge.md) for feature-specific help.
