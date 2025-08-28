---
inclusion: always
---

# MCP Error Handling and Recovery Guide

## Overview

This guide provides comprehensive error handling strategies for MCP (Model Context Protocol) server connections in the BMAD-Kiro integration. It ensures graceful degradation and recovery when documentation servers are unavailable.

## Error Categories and Responses

### 1. Connection Errors

#### Server Unavailable
**Symptoms**: Complete inability to reach MCP server
**Response Strategy**:
- Immediate fallback to local steering files
- Display clear user notification
- Implement exponential backoff retry
- Continue functionality with local resources

#### Timeout Errors  
**Symptoms**: Server responds slowly or times out
**Response Strategy**:
- Implement timeout thresholds (30 seconds default)
- Retry with exponential backoff
- Route queries to faster servers
- Cache responses for offline use

#### Network Issues
**Symptoms**: Intermittent connectivity problems
**Response Strategy**:
- Detect network connectivity status
- Queue requests during outages
- Retry when connectivity restored
- Provide offline mode guidance

### 2. Configuration Errors

#### Invalid MCP Configuration
**Symptoms**: Malformed JSON, missing parameters
**Response Strategy**:
- Validate configuration on startup
- Provide specific error messages
- Offer automatic configuration fixes
- Generate working configuration templates

#### Authentication Failures
**Symptoms**: Invalid credentials or permissions
**Response Strategy**:
- Detect authentication errors
- Guide user through credential setup
- Provide alternative access methods
- Document authentication requirements

### 3. Performance Issues

#### Rate Limiting
**Symptoms**: Too many requests, server throttling
**Response Strategy**:
- Implement request rate limiting
- Queue requests with delays
- Distribute load across servers
- Cache frequently accessed content

#### High Latency
**Symptoms**: Slow server responses
**Response Strategy**:
- Monitor response times
- Route to faster servers
- Implement local caching
- Provide performance feedback

## Graceful Degradation Strategy

### Fallback Hierarchy

```
Level 1: Full MCP Functionality
├── All servers online and responsive
├── Real-time documentation access
└── Complete technology guidance

Level 2: Partial MCP Access
├── Some servers online, others offline
├── Hybrid local/remote documentation
└── Prioritized server usage

Level 3: Local Resource Mode
├── All MCP servers offline
├── Local steering file guidance
└── BMAD core resource access

Level 4: Emergency Mode
├── Minimal functionality
├── Basic BMAD principles only
└── Manual reference guidance
```

### Local Resource Utilization

When MCP servers are unavailable, utilize these local resources:

#### BMAD Core Resources
- **Knowledge Base**: `.bmad-core/data/bmad-kb.md`
- **Agent Definitions**: `.bmad-core/agents/*.md`
- **Templates**: `.bmad-core/templates/*.yaml`
- **Tasks**: `.bmad-core/tasks/*.md`
- **Checklists**: `.bmad-core/checklists/*.md`

#### Steering File Resources
- **Methodology Guide**: `steering/bmad-method-guide.md`
- **Technical Preferences**: `steering/context/technical-preferences.md`
- **Project Context**: `steering/context/project-context.md`
- **Team Standards**: `steering/context/team-standards.md`

#### Spec Templates
- **Planning Workflow**: `specs/templates/planning-workflow/`
- **Development Cycle**: `specs/templates/development-cycle/`
- **Brownfield Workflow**: `specs/templates/brownfield-workflow/`

## Retry Mechanisms

### Exponential Backoff Configuration

```
Retry Schedule:
- Attempt 1: Immediate
- Attempt 2: 1 second + jitter
- Attempt 3: 2 seconds + jitter
- Attempt 4: 4 seconds + jitter
- Attempt 5: 8 seconds + jitter
- Attempt 6: 16 seconds + jitter
- Final: Switch to local mode

Jitter: ±25% random variation
Maximum Delay: 60 seconds
Circuit Breaker: 5 consecutive failures
```

### Server-Specific Retry Logic

#### Critical Servers (BMAD-METHOD, Kiro-Docs)
- Immediate retry on failure
- Aggressive retry schedule
- High priority in recovery queue
- Extended retry attempts (10 attempts)

#### High Priority Servers (Core Frameworks)
- 1-second initial delay
- Standard retry schedule
- Medium priority in recovery
- Standard retry attempts (5 attempts)

#### Medium/Low Priority Servers
- 5-30 second initial delay
- Relaxed retry schedule
- Lower priority in recovery
- Reduced retry attempts (3 attempts)

## Error Messages and User Communication

### Standard Error Message Format

```
🚨 [Error Type] - [Server Name]

📋 What Happened:
[Clear description of the issue]

🔄 Automatic Actions Taken:
- [List of automatic responses]
- [Fallback measures activated]
- [Retry attempts in progress]

💡 What This Means:
[Impact on user functionality]

🛠️ Recovery Options:
1. [Automatic option - recommended]
2. [User-assisted option]
3. [Manual troubleshooting option]

📚 Current Capabilities:
[List of available functionality]

⏱️ Estimated Resolution:
[Time estimate for recovery]

Would you like me to [suggested action]?
```

### Specific Error Messages

#### MCP Server Unavailable
```
⚠️ Documentation Server Unavailable - {server-name}

📋 What Happened:
The {server-name} documentation server is currently unreachable. This may be due to server maintenance, network issues, or temporary outages.

🔄 Automatic Actions Taken:
- Switched to local BMAD guidance for immediate needs
- Activated retry mechanism with exponential backoff
- Routing documentation queries to available servers
- Maintaining full BMAD methodology access

💡 What This Means:
You can continue working with full BMAD capabilities using local resources. Some technology-specific documentation may be limited until the server recovers.

🛠️ Recovery Options:
1. Wait for automatic reconnection (recommended - 2-5 minutes)
2. Check your internet connection and retry
3. Verify MCP configuration in .kiro/settings/mcp.json
4. Use alternative documentation sources (GitHub, official docs)

📚 Current Capabilities:
✅ Full BMAD methodology guidance
✅ All agent interactions and workflows
✅ Spec creation and management
✅ Hook automation and code standards
✅ Local technical preferences and standards

⏱️ Estimated Resolution: 2-5 minutes
Next retry attempt in: {countdown}

Continue with local guidance while we restore the connection?
```

#### Configuration Error
```
⚙️ MCP Configuration Issue

📋 What Happened:
There's a problem with your MCP server configuration that's preventing proper connection to documentation servers.

🔍 Specific Issue:
{detailed-error-description}

🔄 Automatic Actions Taken:
- Disabled problematic server configurations
- Activated working servers for continued functionality
- Generated corrected configuration template
- Preserved your existing settings as backup

💡 What This Means:
Some documentation servers may be unavailable until the configuration is fixed. Core BMAD functionality remains fully operational.

🛠️ Recovery Options:
1. Apply automatic configuration fix (recommended)
2. Review and manually correct the configuration
3. Reset to default working configuration
4. Get step-by-step configuration guidance

📝 Configuration Fix Preview:
{configuration-fix-preview}

📚 Current Capabilities:
✅ All BMAD agents and workflows
✅ Local documentation and guidance
✅ Working MCP servers (if any)
✅ Full development workflow support

Shall I apply the automatic fix or would you prefer to review the changes first?
```

## Recovery Procedures

### Automatic Recovery

#### Health Check Process
1. **Periodic Monitoring**: Test server connectivity every 5 minutes
2. **Response Validation**: Verify server responses are valid
3. **Performance Tracking**: Monitor response times and success rates
4. **Automatic Restoration**: Restore servers when they become available

#### Recovery Triggers
- Successful ping response
- Valid documentation query response
- Response time within acceptable thresholds
- Sustained availability for 2+ minutes

### Manual Recovery Options

#### Basic Troubleshooting Steps
1. **Check Internet Connection**: Verify basic connectivity
2. **Restart Kiro**: Refresh MCP server connections
3. **Validate Configuration**: Check MCP configuration syntax
4. **Clear Cache**: Clear any cached MCP data
5. **Update Dependencies**: Ensure MCP tools are up to date

#### Advanced Recovery Procedures
1. **Configuration Regeneration**: Create fresh MCP configuration
2. **Alternative Sources**: Add backup documentation servers
3. **Local Documentation**: Set up offline documentation access
4. **Network Diagnostics**: Troubleshoot network connectivity issues

### Recovery Validation

#### Connection Testing
```bash
# Test MCP server connectivity
npx mcp-remote https://gitmcp.io/bmad-code-org/BMAD-METHOD

# Validate configuration syntax
cat .kiro/settings/mcp.json | jq '.'

# Test network connectivity
ping gitmcp.io
```

#### Functionality Verification
- Test documentation search functionality
- Verify agent access to MCP resources
- Confirm spec template file references work
- Validate hook automation with MCP integration

## Performance Optimization

### Caching Strategy
- **Response Caching**: Cache successful documentation queries
- **Offline Access**: Maintain cached content for offline use
- **Smart Invalidation**: Update cache when servers recover
- **Selective Caching**: Cache frequently accessed content

### Load Balancing
- **Server Rotation**: Distribute queries across available servers
- **Response Time Routing**: Route to fastest responding servers
- **Failure Isolation**: Isolate failed servers from query routing
- **Capacity Management**: Monitor server load and adjust routing

### Query Optimization
- **Request Batching**: Combine multiple queries when possible
- **Parallel Queries**: Query multiple servers simultaneously
- **Result Aggregation**: Combine results from multiple sources
- **Smart Filtering**: Filter results based on relevance and quality

## Monitoring and Alerting

### Health Metrics
- **Server Availability**: Percentage uptime for each server
- **Response Times**: Average and percentile response times
- **Error Rates**: Frequency of different error types
- **Query Success**: Percentage of successful documentation queries

### Alert Thresholds
- **Critical**: All servers unavailable (immediate alert)
- **Warning**: >50% servers unavailable (5-minute delay)
- **Performance**: Average response time >3 seconds (15-minute delay)
- **Recovery**: All servers restored (immediate notification)

### Reporting
- **Daily Health Summary**: Overall system health and performance
- **Error Analysis**: Breakdown of error types and frequencies
- **Recovery Metrics**: Time to recovery for different error types
- **Usage Patterns**: Most accessed documentation and peak usage times

## Best Practices

### Configuration Management
- **Version Control**: Keep MCP configuration in version control
- **Backup Strategy**: Maintain backup configurations
- **Testing**: Test configuration changes in development first
- **Documentation**: Document custom server configurations

### Error Prevention
- **Proactive Monitoring**: Monitor server health continuously
- **Redundancy**: Configure multiple servers for critical documentation
- **Validation**: Validate configurations before deployment
- **Updates**: Keep MCP tools and servers updated

### User Experience
- **Clear Communication**: Provide clear, actionable error messages
- **Graceful Degradation**: Maintain functionality during outages
- **Quick Recovery**: Minimize time to restore full functionality
- **User Guidance**: Help users understand and resolve issues

## Integration with BMAD Agents

### Agent-Specific Error Handling

#### BMad Master Agent
- Comprehensive error detection and classification
- Automatic fallback to local resources
- User guidance for troubleshooting
- Technology detection continues without MCP

#### BMad Orchestrator Agent
- Multi-server error orchestration
- Complex fallback strategy management
- User workflow guidance during outages
- Documentation source prioritization

#### Specialized Agents (PM, Architect, Dev, QA, etc.)
- Domain-specific fallback guidance
- Local resource utilization for their expertise areas
- Continued functionality with reduced documentation access
- Clear communication about limitations during outages

### Hook Integration
- **Error-Aware Hooks**: Hooks detect MCP availability
- **Fallback Automation**: Hooks continue with local guidance
- **Recovery Integration**: Hooks resume full functionality when MCP recovers
- **Error Reporting**: Hooks report MCP issues to users

This comprehensive error handling system ensures that BMAD-Kiro integration remains functional and user-friendly even when MCP servers experience issues, providing clear guidance and automatic recovery mechanisms.