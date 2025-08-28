---
inclusion: always
---

# Hook Execution Error Handling Guide

## Overview

This guide provides comprehensive error handling strategies for BMAD hook execution in the Kiro IDE integration. It ensures robust automation with clear fallback mechanisms, retry strategies, and user notification systems for hook-related issues.

## Hook Error Categories

### 1. Hook Trigger Errors

#### File Pattern Matching Failures
**Symptoms**: Hooks don't trigger when expected files are modified
**Causes**:
- Incorrect file pattern syntax in hook configuration
- File path resolution issues
- Permission problems accessing files
- Kiro hook engine configuration issues

**Recovery Strategy**:
1. Validate file pattern syntax
2. Test pattern matching with current file structure
3. Provide alternative trigger patterns
4. Fallback to manual hook execution

#### Trigger Condition Failures
**Symptoms**: Hooks trigger at wrong times or not at all
**Causes**:
- Incorrect trigger type configuration
- Timing issues with file system events
- Conflicting hook configurations
- Kiro event system problems

**Recovery Strategy**:
1. Validate trigger conditions
2. Implement backup trigger mechanisms
3. Provide manual trigger options
4. Log trigger events for debugging

### 2. Hook Execution Errors

#### Agent Communication Failures
**Symptoms**: Hooks trigger but agents don't respond
**Causes**:
- Agent activation failures
- Communication timeout issues
- Agent context problems
- Prompt processing errors

**Recovery Strategy**:
1. Retry with exponential backoff
2. Fallback to alternative agents
3. Provide manual execution guidance
4. Log communication failures

#### Task Execution Failures
**Symptoms**: Agents respond but tasks fail to complete
**Causes**:
- File access permission issues
- Resource unavailability
- Task logic errors
- External dependency failures

**Recovery Strategy**:
1. Implement task-specific error handling
2. Provide partial completion options
3. Offer manual task completion
4. Create detailed error reports

### 3. Hook Configuration Errors

#### YAML Syntax Errors
**Symptoms**: Hooks fail to load or behave unexpectedly
**Causes**:
- Malformed YAML syntax
- Missing required fields
- Invalid configuration values
- Encoding issues

**Recovery Strategy**:
1. Validate YAML syntax on load
2. Provide syntax error details
3. Offer automatic correction
4. Fallback to default configurations

#### Hook Dependency Errors
**Symptoms**: Hooks reference unavailable resources
**Causes**:
- Missing agent steering files
- Broken file references
- Unavailable MCP servers
- Missing template files

**Recovery Strategy**:
1. Validate all dependencies on load
2. Provide dependency resolution guidance
3. Implement graceful degradation
4. Create dependency health checks

## Error Detection and Classification

### Hook Health Monitoring

#### Execution Success Tracking
```yaml
# Hook Health Metrics
hook_metrics:
  bmad-test-sync:
    total_executions: 45
    successful_executions: 42
    failed_executions: 3
    success_rate: 93.3%
    average_execution_time: 2.1s
    last_execution: "2025-01-26T10:30:15Z"
    last_failure: "2025-01-26T09:15:22Z"
    
  bmad-doc-sync:
    total_executions: 28
    successful_executions: 28
    failed_executions: 0
    success_rate: 100%
    average_execution_time: 1.8s
    last_execution: "2025-01-26T10:25:33Z"
    last_failure: null
```

#### Error Classification System
```
Error Severity Levels:
- CRITICAL: Hook completely non-functional
- HIGH: Hook fails frequently (>20% failure rate)
- MEDIUM: Hook has intermittent issues (5-20% failure rate)
- LOW: Hook has occasional issues (<5% failure rate)
- INFO: Hook warnings or performance issues

Error Categories:
- TRIGGER: Hook trigger mechanism failures
- EXECUTION: Hook execution and agent communication
- CONFIGURATION: Hook setup and configuration issues
- DEPENDENCY: External dependency failures
- PERFORMANCE: Slow execution or timeout issues
```

### Automatic Error Detection

#### Real-time Monitoring
Monitor hook execution in real-time:
1. **Execution Tracking**: Monitor all hook executions
2. **Performance Monitoring**: Track execution times and success rates
3. **Error Pattern Detection**: Identify recurring error patterns
4. **Dependency Health**: Monitor external dependencies
5. **Resource Usage**: Track system resource consumption

#### Proactive Issue Detection
```
🔍 Hook Health Monitoring

Current Status: 🟡 Some Issues Detected

Hook Performance Summary:
┌─────────────────────┬─────────┬──────────┬─────────────┬────────────┐
│ Hook                │ Status  │ Success  │ Avg Time    │ Last Run   │
├─────────────────────┼─────────┼──────────┼─────────────┼────────────┤
│ bmad-test-sync      │ ✅ Good │ 93.3%    │ 2.1s        │ 2 min ago  │
│ bmad-doc-sync       │ ✅ Good │ 100%     │ 1.8s        │ 5 min ago  │
│ bmad-code-standards │ ⚠️ Issues│ 78.5%    │ 4.2s (slow) │ 1 min ago  │
│ bmad-story-validation│ ✅ Good │ 95.7%    │ 1.5s        │ 8 min ago  │
│ bmad-tech-discovery │ ❌ Failed│ 12.1%    │ N/A         │ 15 min ago │
└─────────────────────┴─────────┴──────────┴─────────────┴────────────┘

🚨 Issues Requiring Attention:
1. bmad-code-standards: Performance degradation (4.2s avg, target <3s)
2. bmad-tech-discovery: High failure rate (87.9% failures in last hour)

🔄 Automatic Actions Taken:
- Increased retry attempts for failing hooks
- Activated fallback mechanisms for critical hooks
- Logged detailed error information for analysis

Recommendations:
1. Investigate bmad-tech-discovery agent communication issues
2. Optimize bmad-code-standards hook performance
3. Consider temporary hook disabling if issues persist
```

## Retry Mechanisms and Strategies

### Exponential Backoff Retry

#### Hook-Specific Retry Configuration
```yaml
# Retry Configuration by Hook Type
retry_policies:
  critical_hooks:
    - bmad-test-sync
    - bmad-code-standards
    initial_delay: 1s
    max_delay: 30s
    max_retries: 5
    backoff_multiplier: 2
    jitter: 0.25
    
  standard_hooks:
    - bmad-doc-sync
    - bmad-story-validation
    initial_delay: 2s
    max_delay: 60s
    max_retries: 3
    backoff_multiplier: 2
    jitter: 0.25
    
  discovery_hooks:
    - bmad-tech-discovery
    - bmad-spec-docs
    initial_delay: 5s
    max_delay: 120s
    max_retries: 2
    backoff_multiplier: 3
    jitter: 0.5
```

#### Intelligent Retry Logic
```
Hook Retry Decision Matrix:

Error Type → Retry Strategy:
- Agent Timeout → Immediate retry with shorter timeout
- Agent Not Found → Retry with BMad Master fallback
- File Access Error → Retry after permission check
- Network Error → Exponential backoff retry
- Configuration Error → No retry, require manual fix
- Resource Exhaustion → Delayed retry with resource check

Retry Conditions:
- Transient errors: Always retry
- Permanent errors: No retry, log and notify
- Unknown errors: Limited retry with escalation
- Performance issues: Retry with optimization
```

### Circuit Breaker Pattern

#### Hook Circuit Breaker Implementation
```
🔌 Hook Circuit Breaker Status

bmad-tech-discovery Hook:
├── State: OPEN (Circuit Breaker Active)
├── Failure Count: 8/5 (threshold exceeded)
├── Last Failure: Agent communication timeout
├── Next Retry: 2025-01-26T10:45:00Z (5 minutes)
└── Fallback: Manual technology detection available

Circuit Breaker States:
- CLOSED: Normal operation, all executions attempted
- OPEN: Circuit breaker active, executions blocked
- HALF_OPEN: Testing recovery, limited executions allowed

Recovery Conditions:
- Successful execution after timeout period
- Manual circuit breaker reset
- Configuration fix applied
- Dependency restoration confirmed
```

### Fallback Mechanisms

#### Hook Fallback Hierarchy
```
Hook Execution Fallback Chain:

Level 1: Primary Hook Execution
├── Normal hook trigger and agent execution
├── Full automation with configured agent
└── Complete task execution

Level 2: Alternative Agent Fallback
├── Hook triggers but primary agent fails
├── Fallback to BMad Master or alternative agent
└── Reduced functionality but task completion

Level 3: Manual Execution Guidance
├── Hook automation fails completely
├── Provide user with manual execution steps
└── Maintain workflow continuity

Level 4: Notification Only
├── All automation attempts fail
├── Notify user of required manual action
└── Log failure for later analysis
```

## User Notification System

### Notification Levels and Formats

#### Hook Execution Notifications
```
🔔 Hook Execution Notifications

SUCCESS (Low Priority):
✅ Code Standards Applied
Hook: bmad-code-standards
File: src/components/UserProfile.tsx
Action: Applied BMAD coding standards and formatting
Time: 2025-01-26 10:30:15
Duration: 1.8s

WARNING (Medium Priority):
⚠️ Hook Execution Delayed
Hook: bmad-test-sync
Issue: QA agent responding slowly (3.2s)
Action: Tests updated successfully despite delay
Recommendation: Monitor QA agent performance

ERROR (High Priority):
❌ Hook Execution Failed
Hook: bmad-tech-discovery
Issue: BMad Master agent not responding
Impact: Technology detection not performed
Fallback: Manual technology analysis available
Action Required: Check agent configuration or run manual analysis

CRITICAL (Immediate Attention):
🚨 Multiple Hook Failures Detected
Affected Hooks: 3/5 hooks failing
System Impact: Automation significantly degraded
Immediate Action: System diagnostics recommended
Fallback: All tasks can be performed manually
```

#### Notification Delivery Methods
1. **In-Chat Notifications**: Direct messages in Kiro chat
2. **Status Bar Updates**: Brief status updates in Kiro UI
3. **Error Logs**: Detailed error information in log files
4. **Email Alerts**: Critical issues sent via email (if configured)
5. **Desktop Notifications**: System-level notifications for urgent issues

### User-Friendly Error Messages

#### Hook Error Message Template
```
🔧 Hook Execution Issue - {hook-name}

📋 What Happened:
{clear-description-of-issue}

🎯 Impact on Your Work:
{explanation-of-impact}

🔄 Automatic Actions Taken:
- {list-of-automatic-responses}
- {fallback-measures-activated}
- {retry-attempts-status}

💡 What This Means:
{user-friendly-explanation}

🛠️ Your Options:
1. {automatic-option} (Recommended)
2. {manual-option}
3. {alternative-approach}

📚 Available Alternatives:
{list-of-manual-alternatives}

⏱️ Estimated Resolution:
{time-estimate-for-fix}

Need help with manual execution? Type 'help {hook-name}' for guidance.
```

#### Specific Hook Error Messages

##### Test Sync Hook Failure
```
🧪 Test Synchronization Issue

📋 What Happened:
The automatic test sync hook failed to update your test files after you modified src/utils/validation.ts.

🎯 Impact on Your Work:
Your tests may be out of sync with recent code changes, which could lead to false test results.

🔄 Automatic Actions Taken:
- Retried test sync 3 times with exponential backoff
- Attempted fallback to BMad Master agent
- Logged detailed error information for analysis

💡 What This Means:
The QA agent couldn't automatically update your tests, but your code changes are safe and unaffected.

🛠️ Your Options:
1. Wait for automatic retry (next attempt in 2 minutes)
2. Run manual test sync: @qa *sync-tests src/utils/validation.ts
3. Update tests manually using your preferred method

📚 Available Alternatives:
- Manual test review and updates
- Run existing tests to check for failures
- Use IDE test generation features

⏱️ Estimated Resolution: 2-5 minutes

The hook will retry automatically. Your development can continue normally.
```

##### Code Standards Hook Failure
```
📏 Code Standards Application Failed

📋 What Happened:
The automatic code formatting hook couldn't apply BMAD coding standards to your recently saved file.

🎯 Impact on Your Work:
Your code may not follow team coding standards, which could cause issues during code review.

🔄 Automatic Actions Taken:
- Attempted code formatting with Dev agent (failed)
- Tried fallback to BMad Master agent (timeout)
- Preserved your original code changes (no data loss)

💡 What This Means:
Your code is safe, but manual formatting may be needed to meet team standards.

🛠️ Your Options:
1. Apply standards manually: @dev *apply-standards {filename}
2. Use IDE auto-formatting features
3. Continue coding and fix formatting later

📚 Available Alternatives:
- IDE built-in formatting (Ctrl+Shift+F)
- Manual code review against team standards
- Batch formatting before committing changes

⏱️ Estimated Resolution: Hook will retry on next file save

Your code is preserved and safe. Development can continue normally.
```

## Hook Debugging and Troubleshooting

### Debug Information Collection

#### Hook Execution Logs
```
📊 Hook Execution Debug Information

Hook: bmad-test-sync
Execution ID: exec_20250126_103015_001
Timestamp: 2025-01-26T10:30:15.234Z
Status: FAILED

Trigger Information:
├── Trigger Type: fileEdit
├── File Pattern: src/**/*.{ts,js,py,java,go}
├── Matched File: src/components/UserProfile.tsx
├── File Size: 2.4KB
├── Modification Type: content_change
└── Trigger Latency: 45ms

Execution Timeline:
├── 10:30:15.234 - Hook triggered
├── 10:30:15.279 - Agent communication initiated
├── 10:30:15.285 - QA agent activation requested
├── 10:30:18.456 - Agent timeout (3.2s)
├── 10:30:18.461 - Fallback to BMad Master initiated
├── 10:30:21.789 - BMad Master timeout (3.3s)
├── 10:30:21.795 - Execution marked as failed
└── 10:30:21.801 - Retry scheduled for 10:32:15

Error Details:
├── Primary Error: QA agent activation timeout
├── Secondary Error: BMad Master agent timeout
├── Error Code: AGENT_TIMEOUT_001
├── Retry Count: 1/3
└── Circuit Breaker: CLOSED (2/5 failures)

System Context:
├── Active Agents: 8/10 responding
├── MCP Servers: 3/4 online
├── System Load: Normal
├── Memory Usage: 67%
└── Network Status: Connected

Recommendations:
1. Check agent steering file integrity
2. Verify system resource availability
3. Test agent activation manually
4. Consider increasing timeout thresholds
```

#### Hook Configuration Validation
```
🔍 Hook Configuration Diagnostics

Hook: bmad-code-standards
Configuration File: hooks/bmad-code-standards.hook
Status: ⚠️ Issues Found

YAML Syntax Validation:
├── ✅ Valid YAML structure
├── ✅ Required fields present
├── ✅ Field types correct
└── ✅ No syntax errors

Configuration Validation:
├── ✅ Hook name valid
├── ✅ Description present
├── ⚠️ File patterns may be too broad
├── ✅ Trigger type supported
├── ✅ Agent prompt well-formed
└── ⚠️ Timeout not specified (using default)

Dependency Validation:
├── ✅ Dev agent steering file exists
├── ✅ Technical preferences accessible
├── ⚠️ Some file references may be stale
└── ✅ BMAD core resources available

Performance Analysis:
├── Average Execution Time: 4.2s (target: <3s)
├── Success Rate: 78.5% (target: >90%)
├── Resource Usage: High CPU during execution
└── Memory Usage: Normal

Recommendations:
1. Narrow file patterns to reduce trigger frequency
2. Add explicit timeout configuration (suggest: 10s)
3. Optimize agent prompt for faster execution
4. Update stale file references
5. Consider splitting complex operations
```

### Troubleshooting Tools

#### Hook Test Execution
```
🧪 Hook Test Execution Tool

Testing Hook: bmad-test-sync
Test Mode: Dry Run (no actual changes)

Test Scenario 1: TypeScript File Change
├── Test File: test/sample.ts
├── Simulated Change: Function addition
├── Expected Trigger: ✅ Pattern matched
├── Agent Activation: ✅ QA agent responds (1.2s)
├── Task Execution: ✅ Test sync completed
└── Result: ✅ PASS

Test Scenario 2: Python File Change
├── Test File: test/sample.py
├── Simulated Change: Import statement
├── Expected Trigger: ✅ Pattern matched
├── Agent Activation: ⚠️ QA agent slow (2.8s)
├── Task Execution: ✅ Test sync completed
└── Result: ⚠️ SLOW

Test Scenario 3: Large File Change
├── Test File: test/large_file.js (50KB)
├── Simulated Change: Multiple functions
├── Expected Trigger: ✅ Pattern matched
├── Agent Activation: ❌ Timeout (5.0s)
├── Task Execution: ❌ Failed
└── Result: ❌ FAIL

Summary:
├── Tests Passed: 1/3
├── Tests with Warnings: 1/3
├── Tests Failed: 1/3
└── Overall Status: ⚠️ Issues Detected

Recommendations:
1. Investigate QA agent performance with large files
2. Consider file size limits for hook triggers
3. Optimize agent prompt for better performance
4. Add timeout handling for large file operations
```

#### Hook Performance Profiler
```
📈 Hook Performance Profile

Hook: bmad-doc-sync
Profiling Period: Last 24 hours
Total Executions: 28

Performance Breakdown:
┌─────────────────────┬──────────┬─────────┬─────────┬─────────┐
│ Phase               │ Avg Time │ Min     │ Max     │ % Total │
├─────────────────────┼──────────┼─────────┼─────────┼─────────┤
│ Trigger Detection   │ 12ms     │ 8ms     │ 25ms    │ 0.7%    │
│ File Analysis       │ 145ms    │ 89ms    │ 234ms   │ 8.1%    │
│ Agent Activation    │ 234ms    │ 156ms   │ 445ms   │ 13.0%   │
│ Prompt Processing   │ 1.2s     │ 0.8s    │ 2.1s    │ 66.7%   │
│ Task Execution      │ 189ms    │ 123ms   │ 298ms   │ 10.5%   │
│ Result Processing   │ 21ms     │ 15ms    │ 34ms    │ 1.2%    │
└─────────────────────┴──────────┴─────────┴─────────┴─────────┘

Performance Trends:
├── Execution Time: Stable (1.8s avg)
├── Success Rate: Excellent (100%)
├── Resource Usage: Low
└── User Satisfaction: High

Optimization Opportunities:
1. Prompt processing takes 66.7% of execution time
   - Consider prompt optimization
   - Evaluate agent response efficiency
2. Agent activation could be faster
   - Check agent context caching
   - Optimize steering file loading
```

## Hook Recovery Procedures

### Automatic Recovery

#### Self-Healing Mechanisms
1. **Configuration Repair**: Automatically fix common configuration issues
2. **Dependency Resolution**: Restore missing dependencies when possible
3. **Agent Fallback**: Switch to alternative agents when primary fails
4. **Resource Cleanup**: Clean up stuck processes and resources
5. **State Reset**: Reset hook state when corruption detected

#### Recovery Triggers
- Consecutive execution failures (threshold: 3-5 failures)
- Performance degradation (response time >3x normal)
- Resource exhaustion detection
- Configuration validation failures
- User-initiated recovery requests

### Manual Recovery Options

#### Hook Reset Procedures
```
🔄 Hook Recovery Procedures

Quick Recovery Options:
1. **Restart Hook**: Disable and re-enable specific hook
   - Command: @bmad-master *restart-hook {hook-name}
   - Effect: Clears hook state and restarts monitoring

2. **Reset Hook Configuration**: Restore default configuration
   - Command: @bmad-master *reset-hook-config {hook-name}
   - Effect: Replaces current config with working default

3. **Clear Hook Cache**: Clear cached data and state
   - Command: @bmad-master *clear-hook-cache {hook-name}
   - Effect: Forces fresh initialization on next trigger

4. **Validate Hook Setup**: Check configuration and dependencies
   - Command: @bmad-master *validate-hook {hook-name}
   - Effect: Comprehensive validation with fix suggestions

5. **Regenerate Hook**: Create fresh hook from template
   - Command: @bmad-master *regenerate-hook {hook-name}
   - Effect: Replaces hook with fresh template-based version

Advanced Recovery:
- Full hook system restart
- Configuration backup and restore
- Dependency reinstallation
- System-wide hook validation
```

#### Emergency Procedures
```
🚨 Emergency Hook Recovery

When multiple hooks fail simultaneously:

Phase 1: Immediate Stabilization
├── Disable all failing hooks to prevent system instability
├── Activate manual workflow guidance for affected processes
├── Preserve user work and prevent data loss
└── Log comprehensive failure information

Phase 2: Root Cause Analysis
├── Analyze system logs for common failure patterns
├── Check system resources and dependencies
├── Validate agent system health
└── Identify configuration or environmental issues

Phase 3: Systematic Recovery
├── Fix identified root causes
├── Restore hooks one by one with validation
├── Test each hook before enabling automation
└── Monitor system stability during recovery

Phase 4: Prevention
├── Implement additional monitoring
├── Create backup configurations
├── Establish recovery procedures
└── Document lessons learned

Emergency Contacts:
- System Administrator: Check system resources
- Development Team: Review recent configuration changes
- User Community: Report widespread issues
```

This comprehensive hook error handling system ensures that BMAD automation remains reliable and user-friendly even when individual hooks experience issues, providing clear recovery mechanisms and detailed troubleshooting guidance.