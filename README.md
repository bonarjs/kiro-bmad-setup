# BMAD-Kiro Integration Guide

## Overview

This guide provides comprehensive instructions for setting up and using BMAD Method with Kiro IDE through native Kiro features. The integration transforms Kiro into a BMAD-native development platform using Specs, Hooks, Steering files, Chat, and MCP servers.

## Table of Contents

- [Quick Start](#quick-start)
- [Installation](#installation)
- [Team Onboarding](#team-onboarding)
- [Configuration](#configuration)
- [Usage Examples](#usage-examples)
- [Project Types](#project-types)
- [Troubleshooting](#troubleshooting)
- [Advanced Configuration](#advanced-configuration)

## Quick Start

### Prerequisites

- Kiro IDE installed and running
- Git repository for your project
- Node.js and npm/yarn for MCP server dependencies

### 5-Minute Setup

1. **Install the kiro-bmad-setup package:**
   ```bash
   npm install kiro-bmad-setup
   # or
   yarn add kiro-bmad-setup
   ```

2. **Run the setup script:**
   ```bash
   npm run setup
   # or
   yarn setup
   ```

3. **Install MCP dependencies:**
   ```bash
   # Install MCP remote server capability
   npm install -g @modelcontextprotocol/server-remote
   ```

4. **Verify installation:**
   - Open Kiro IDE in your project
   - Type `@pm` in chat - you should see PM agent context activate
   - Check that hooks are loaded in the Hooks panel
   - Verify MCP servers are connected in the MCP panel

5. **Create your first spec:**
   - Go to Specs panel
   - Create new spec using "planning-workflow" template
   - Follow the Requirements → Design → Tasks workflow
