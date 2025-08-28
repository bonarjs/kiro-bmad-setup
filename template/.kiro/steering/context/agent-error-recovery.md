---
inclusion: always
---

# Agent Context Error Recovery Guide

## Overview

This guide provides comprehensive error recovery strategies for BMAD agent activation, context switching, and interaction issues in the Kiro IDE integration. It ensures robust agent functionality with clear fallback mechanisms and user guidance.

## Agent Error Categories

### 1. Agent Activation Errors

#### Context Key Recognition Failures
**Symptoms**: Agent not responding to @agent-name triggers
**Causes**:
- Incorrect contextKey configuration in steering files
- Malformed steering file frontmatter
- Missing or corrupted steering files
- Kiro steering engine issues

**Recovery Strategy**:
1. Validate steering file syntax and contextKey
2. Fallback to BMad Master agent
3. Provide manual agent selection guidance
4. Offer steering file regeneration

#### Steering File Loading Errors
**Symptoms**: Agent loads but behaves incorrectly
**Causes**:
- Corrupted steering file content
- Missing file references (#[[file:path]])
- Invalid markdown formatting
- Broken BMAD core references

**Recovery Strategy**:
1. Validate steering file integrity
2. Regenerate corrupted files from templates
3. Provide default agent behavior
4. Guide user through manual fixes

### 2. Context Switching Errors

#### Agent Transition Failures
**Symptoms**: Unable to switch between agents
**Causes**:
- Context conflicts between agents
- Memory/state persistence issues
- Invalid agent combinations
- Kiro chat session problems

**Recovery Strategy**:
1. Clear agent context and restart
2. Provide explicit agent switching guidance
3. Fallback to universal BMad Master
4. Create new chat session if needed

#### Context Persistence Issues
**Symptoms**: Agent loses context mid-conversation
**Causes**:
- Long conversation history
- Memory limitations
- Context window overflow
- Session state corruption

**Recovery Strategy**:
1. Summarize current context
2. Start fresh agent session
3. Restore critical context information
4. Guide user through context reconstruction

### 3. Agent Command Errors

#### Invalid Command Recognition
**Symptoms**: Agent doesn't recognize valid commands
**Causes**:
- Missing * prefix on commands
- Typos in command names
- Agent-specific command limitations
- Command syntax errors

**Recovery Strategy**:
1. Provide command syntax correction
2. Show available commands for current agent
3. Offer command auto-completion
4. Guide user through proper command usage

#### Command Execution Failures
**Symptoms**: Commands recognized but fail to execute
**Causes**:
- Missing dependencies or resources
- File access permissions
- Resource loading failures
- Task execution errors

**Recovery Strategy**:
1. Diagnose specific execution failure
2. Provide alternative execution methods
3. Fallback to manual task guidance
4. Offer resource troubleshooting

## Agent Validation System

### Steering File Validation

#### Syntax Validation Checklist
```markdown
## Steering File Validation

### Frontmatter Check
- [ ] Valid YAML frontmatter with --- delimiters
- [ ] inclusion: manual|always|conditional specified
- [ ] contextKey: "@agent-name" properly formatted
- [ ] No syntax errors in YAML

### Content Structure Check
- [ ] Agent Identity section present
- [ ] Persona section defined
- [ ] Core Principles listed
- [ ] Available Commands documented
- [ ] Integration Rules specified

### File Reference Check
- [ ] All #[[file:path]] references valid
- [ ] Referenced files exist and accessible
- [ ] No circular references
- [ ] BMAD core references correct

### Agent-Specific Validation
- [ ] Agent name matches contextKey
- [ ] Role and expertise clearly defined
- [ ] Commands appropriate for agent type
- [ ] Dependencies properly listed
```

#### Automatic Validation Process
1. **Startup Validation**: Check all steering files on Kiro startup
2. **Runtime Validation**: Validate files when agents are activated
3. **Error Detection**: Identify and classify validation errors
4. **Auto-Repair**: Attempt automatic fixes for common issues
5. **User Notification**: Report validation issues with recovery guidance

### Agent Context Validation

#### Context Integrity Checks
```markdown
## Agent Context Validation

### Activation Validation
- [ ] Agent responds to contextKey trigger
- [ ] Correct persona and behavior activated
- [ ] Commands available and functional
- [ ] Dependencies loaded successfully

### Context Consistency
- [ ] Agent maintains consistent behavior
- [ ] Context preserved across interactions
- [ ] No conflicting agent states
- [ ] Memory and state management working

### Integration Validation
- [ ] Spec context integration functional
- [ ] File references working correctly
- [ ] MCP integration operational
- [ ] Hook integration responsive
```

## Fallback Mechanisms

### BMad Master Agent Fallback

When specific agents fail to activate or function properly:

#### Automatic Fallback Triggers
- Agent activation timeout (>10 seconds)
- Repeated agent command failures
- Context switching errors
- Steering file corruption detected

#### Fallback Process
```
🧙 Agent Fallback Activated

Original Request: @architect create system design
Detected Issue: Architect agent not responding

🔄 Automatic Actions:
1. Switching to BMad Master agent
2. Loading architect capabilities
3. Maintaining original request context
4. Providing equivalent functionality

💡 BMad Master Response:
"I'll handle your system design request using architect capabilities. 
The architect agent seems to be having issues, but I can provide 
the same expertise and functionality."

🛠️ Recovery Options:
1. Continue with BMad Master (recommended)
2. Try reactivating architect agent
3. Start new chat session
4. Troubleshoot agent configuration

Would you like me to proceed with the system design?
```

### Universal Agent Commands

#### Fallback Command Set
When agent-specific commands fail, provide universal alternatives:

```markdown
## Universal Fallback Commands

### Document Creation
- *create-doc → BMad Master document creation
- *template → Show available templates
- *help → Universal help system

### Task Execution  
- *task → BMad Master task execution
- *workflow → Show available workflows
- *status → Universal status check

### Agent Management
- *agent → List available agents
- *switch → Agent switching guidance
- *validate → Agent validation check
- *reset → Reset agent context
```

### Manual Agent Selection

When automatic agent activation fails:

#### Agent Selection Interface
```
🎭 Agent Selection Required

The requested agent (@architect) is not responding.

Available Agents:
1. 🧙 BMad Master - Universal task executor
2. 📋 PM Agent - Product management and PRDs
3. 🏗️ Architect Agent - System design (troubleshoot)
4. 💻 Dev Agent - Code implementation
5. 🧪 QA Agent - Testing and quality assurance
6. 📊 Analyst Agent - Research and analysis
7. 🎨 UX Expert - User experience design
8. 📝 PO Agent - Product ownership
9. 🏃 SM Agent - Scrum master and stories
10. 🎭 BMad Orchestrator - Workflow coordination

Select an agent by number or:
- Type 'troubleshoot' to fix the architect agent
- Type 'continue' to use BMad Master
- Type 'help' for more options

Your choice:
```

## Error Recovery Procedures

### Agent Activation Recovery

#### Step-by-Step Recovery Process
1. **Detect Activation Failure**
   - Monitor for agent response within 10 seconds
   - Check for proper contextKey recognition
   - Validate steering file accessibility

2. **Diagnose Root Cause**
   - Check steering file syntax and integrity
   - Verify file permissions and accessibility
   - Test contextKey configuration
   - Validate BMAD core references

3. **Apply Automatic Fixes**
   - Regenerate corrupted steering files
   - Fix common syntax errors
   - Restore missing file references
   - Reset agent context state

4. **Fallback to Working Agent**
   - Activate BMad Master as universal fallback
   - Maintain original request context
   - Provide equivalent functionality
   - Guide user through alternatives

5. **User Notification and Guidance**
   - Explain what happened and why
   - Show what actions were taken automatically
   - Provide options for manual recovery
   - Offer troubleshooting assistance

### Context Switching Recovery

#### Context Preservation Strategy
When switching between agents fails:

```
🔄 Context Switching Recovery

Previous Agent: @pm (Product Manager)
Requested Agent: @architect (System Architect)
Issue: Context switching failed

🧠 Context Preservation:
- Current task: Creating system architecture
- Project context: E-commerce platform
- Previous work: PRD completed
- Active spec: planning-workflow

🔄 Recovery Actions:
1. Preserving conversation context
2. Activating BMad Master with architect capabilities
3. Loading relevant project files
4. Maintaining workflow continuity

🎯 Continuing with:
"I'll take over the architecture design work from where the PM agent left off. 
I have access to the completed PRD and understand we're designing an 
e-commerce platform architecture."

Ready to proceed with system design?
```

### Command Error Recovery

#### Command Validation and Correction
```
❌ Command Error Recovery

Input: "*creat-doc prd"
Issue: Command not recognized

🔍 Analysis:
- Detected typo in command name
- Similar command found: "*create-doc"
- Agent supports document creation

💡 Suggested Correction:
Did you mean: "*create-doc prd"?

🛠️ Recovery Options:
1. Execute corrected command (recommended)
2. Show all available commands
3. Provide command syntax help
4. Switch to different agent

Auto-correct and execute? (y/n)
```

## Logging and Debugging

### Agent Interaction Logging

#### Log Categories
1. **Agent Activation**: Record all agent activation attempts
2. **Context Switching**: Log agent transitions and context changes
3. **Command Execution**: Track command usage and results
4. **Error Events**: Capture all error conditions and recovery actions
5. **Performance Metrics**: Monitor agent response times and success rates

#### Log Format
```
[TIMESTAMP] [LEVEL] [CATEGORY] [AGENT] [ACTION] [RESULT]
2025-01-26 10:30:15 ERROR ACTIVATION architect timeout fallback_to_master
2025-01-26 10:30:16 INFO FALLBACK bmad-master activated architect_capabilities
2025-01-26 10:30:17 SUCCESS COMMAND bmad-master create-doc prd_generated
```

### Debug Information Collection

#### Agent State Diagnostics
```
🔍 Agent Debug Information

Current Session:
- Active Agent: bmad-master (fallback from architect)
- Session Duration: 15 minutes
- Commands Executed: 7
- Errors Encountered: 2

Agent Status:
✅ BMad Master: Active and responsive
⚠️ Architect Agent: Activation timeout (investigating)
✅ PM Agent: Available
✅ Dev Agent: Available

Recent Errors:
1. 10:30:15 - Architect agent activation timeout
2. 10:28:42 - Invalid command "*creat-doc" corrected

System Health:
- Steering Files: 9/10 valid (architect.md needs repair)
- MCP Servers: 3/4 online
- File References: All accessible
- Memory Usage: Normal

Recommendations:
1. Repair architect agent steering file
2. Clear agent context cache
3. Restart chat session if issues persist
```

### Troubleshooting Tools

#### Agent Validation Tool
```
🛠️ Agent Validation Tool

Checking all BMAD agents...

✅ BMad Master: Valid and functional
✅ BMad Orchestrator: Valid and functional  
✅ PM Agent: Valid and functional
✅ Dev Agent: Valid and functional
✅ QA Agent: Valid and functional
✅ Analyst Agent: Valid and functional
✅ UX Expert Agent: Valid and functional
✅ PO Agent: Valid and functional
✅ SM Agent: Valid and functional
❌ Architect Agent: Steering file syntax error

Issues Found:
1. architect-agent.md: Line 15 - Invalid YAML frontmatter
   Fix: Remove extra quotation mark in contextKey

Auto-fix available issues? (y/n)
```

#### Context Reset Tool
```
🔄 Agent Context Reset Tool

Current Context Issues:
- Agent response degradation detected
- Context window approaching limit
- Memory fragmentation present

Reset Options:
1. Soft Reset: Clear conversation history, preserve context
2. Hard Reset: Complete context wipe, fresh start
3. Selective Reset: Choose what to preserve

Context to Preserve:
- [ ] Current project information
- [ ] Active spec context
- [ ] Technical preferences
- [ ] Conversation history (last 10 messages)

Recommended: Soft Reset with project context preservation

Proceed with reset? (y/n)
```

## User Guidance and Support

### Error Communication Strategy

#### User-Friendly Error Messages
- **Clear Explanation**: What happened and why
- **Automatic Actions**: What the system did to help
- **User Options**: What the user can do next
- **Impact Assessment**: How this affects their work
- **Recovery Timeline**: When normal function will resume

#### Progressive Disclosure
1. **Initial Message**: Brief, actionable summary
2. **Details Available**: Option to see technical details
3. **Troubleshooting**: Step-by-step recovery guidance
4. **Advanced Options**: Expert-level troubleshooting

### Self-Service Recovery

#### User Recovery Actions
```
🛠️ Agent Recovery Self-Service

Quick Fixes You Can Try:

1. **Restart Agent**
   - Type: @bmad-master *reset
   - Effect: Clears agent context and restarts

2. **Switch Agents**
   - Type: @bmad-orchestrator *agent
   - Effect: Shows agent selection menu

3. **Validate Configuration**
   - Type: @bmad-master *validate
   - Effect: Checks all agent configurations

4. **New Chat Session**
   - Start a new chat in Kiro
   - Effect: Fresh context and agent state

5. **Check System Status**
   - Type: @bmad-master *status
   - Effect: Shows system health information

Still having issues? Type 'help troubleshoot' for advanced options.
```

### Expert Support Mode

#### Advanced Troubleshooting
```
🔧 Expert Troubleshooting Mode

Advanced Recovery Options:

1. **Steering File Regeneration**
   - Backup current files
   - Regenerate from BMAD core templates
   - Test agent activation
   - Restore custom configurations

2. **Context State Analysis**
   - Export current context state
   - Analyze for corruption or conflicts
   - Rebuild clean context
   - Import preserved user data

3. **Agent Dependency Check**
   - Validate all file references
   - Check BMAD core accessibility
   - Test MCP server connections
   - Verify template availability

4. **System Integration Test**
   - Test agent-spec integration
   - Validate hook-agent communication
   - Check chat-steering integration
   - Verify cross-artifact functionality

Select troubleshooting level:
1. Guided (recommended)
2. Semi-automatic
3. Manual expert mode
```

This comprehensive agent error recovery system ensures that BMAD agents remain functional and accessible even when individual agents experience issues, providing clear fallback mechanisms and user guidance for resolution.