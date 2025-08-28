---
inclusion: always
---

# BMAD Method Guide - Comprehensive Methodology Reference

## Overview

The BMAD Method (Breakthrough Method of Agile AI-driven Development) is a natural language framework for AI-assisted software development that transforms users into "Vibe CEOs" directing specialized AI agents through structured workflows. This guide provides comprehensive reference material for all BMAD agents operating within Kiro IDE.

## Core Philosophy

### The Vibe CEO Concept

You are the "Vibe CEO" - thinking like a CEO with unlimited resources and a singular vision. Your AI agents are your high-powered team, and your role is to:

- **Direct**: Provide clear instructions and objectives
- **Refine**: Iterate on outputs to achieve quality
- **Oversee**: Maintain strategic alignment across all agents

### Fundamental Principles

1. **MAXIMIZE_AI_LEVERAGE**: Push the AI to deliver more. Challenge outputs and iterate.
2. **QUALITY_CONTROL**: You are the ultimate arbiter of quality. Review all outputs.
3. **STRATEGIC_OVERSIGHT**: Maintain the high-level vision and ensure alignment.
4. **ITERATIVE_REFINEMENT**: Expect to revisit steps. This is not a linear process.
5. **CLEAR_INSTRUCTIONS**: Precise requests lead to better outputs.
6. **DOCUMENTATION_IS_KEY**: Good inputs (briefs, PRDs) lead to good outputs.
7. **START_SMALL_SCALE_FAST**: Test concepts, then expand.
8. **EMBRACE_THE_CHAOS**: Adapt and overcome challenges.

## Core Architectural Principles

### 1. Dev Agents Must Be Lean

- **Minimize dev agent dependencies**: Development agents that work in IDEs must have minimal context overhead
- **Save context for code**: Every line counts - dev agents should focus on coding, not documentation
- **Web agents can be larger**: Planning agents (PRD Writer, Architect) used in web UI can have more complex tasks and dependencies
- **Small files, loaded on demand**: Multiple small, focused files are better than large files with many branches

### 2. Natural Language First

- **Everything is markdown**: Agents, tasks, templates - all written in plain English
- **No code in core**: The framework itself contains no programming code, only natural language instructions
- **Self-contained templates**: Templates are defined as YAML files with structured sections that include metadata, workflow configuration, and detailed instructions for content generation

### 3. Agent and Task Design

- **Agents define roles**: Each agent is a persona with specific expertise (e.g., Frontend Developer, API Developer)
- **Tasks are procedures**: Step-by-step instructions an agent follows to complete work
- **Templates are outputs**: Structured documents with embedded instructions for generation
- **Dependencies matter**: Explicitly declare only what's needed

## BMAD Agent System

### Core Development Team

| Agent       | Role               | Primary Functions                       | When to Use                            |
| ----------- | ------------------ | --------------------------------------- | -------------------------------------- |
| `analyst`   | Business Analyst   | Market research, requirements gathering | Project planning, competitive analysis |
| `pm`        | Product Manager    | PRD creation, feature prioritization    | Strategic planning, roadmaps           |
| `architect` | Solution Architect | System design, technical architecture   | Complex systems, scalability planning  |
| `dev`       | Developer          | Code implementation, debugging          | All development tasks                  |
| `qa`        | QA Specialist      | Test planning, quality assurance        | Testing strategies, bug validation     |
| `ux-expert` | UX Designer        | UI/UX design, prototypes                | User experience, interface design      |
| `po`        | Product Owner      | Backlog management, story validation    | Story refinement, acceptance criteria  |
| `sm`        | Scrum Master       | Sprint planning, story creation         | Project management, workflow           |

### Meta Agents

| Agent               | Role             | Primary Functions                     | When to Use                       |
| ------------------- | ---------------- | ------------------------------------- | --------------------------------- |
| `bmad-orchestrator` | Team Coordinator | Multi-agent workflows, role switching | Complex multi-role tasks          |
| `bmad-master`       | Universal Expert | All capabilities without switching    | Single-session comprehensive work |

### Agent Specialization Rules

1. **Agent Specialization**: Each agent has specific expertise and responsibilities
2. **Clean Handoffs**: Always start fresh when switching between agents
3. **Status Tracking**: Maintain story statuses (Draft → Approved → InProgress → Done)
4. **Iterative Development**: Complete one story before starting the next
5. **Documentation First**: Always start with solid PRD and architecture

## BMAD Workflows

### The Two-Phase Approach

#### Phase 1: Planning (Web UI - Cost Effective)

- Use large context windows (Gemini's 1M tokens)
- Generate comprehensive documents (PRD, Architecture)
- Leverage multiple agents for brainstorming
- Create once, use throughout development

#### Phase 2: Development (IDE - Implementation)

- Shard documents into manageable pieces
- Execute focused SM → Dev cycles
- One story at a time, sequential progress
- Real-time file operations and testing

### The Development Loop

```text
1. SM Agent (New Chat) → Creates next story from sharded docs
2. You → Review and approve story
3. Dev Agent (New Chat) → Implements approved story
4. QA Agent (New Chat) → Reviews and refactors code
5. You → Verify completion
6. Repeat until epic complete
```

### Workflow Types

#### Greenfield Development (New Projects)

1. **Optional Analysis**: Market research, competitive analysis
2. **Project Brief**: Create foundation document
3. **PRD Creation**: Comprehensive product requirements
4. **Architecture Design**: Technical foundation
5. **Validation & Alignment**: Ensure document consistency
6. **Document Preparation**: Copy final documents to project
7. **Document Sharding**: Break down for development
8. **Development Cycle**: Sequential SM → Dev → QA workflow

#### Brownfield Development (Existing Projects)

**Key Concept**: Requires comprehensive documentation of existing project for AI agents to understand context, patterns, and constraints.

**Option 1: PRD-First (Recommended for Large Codebases)**:
1. Create PRD first to define enhancement requirements
2. Focused documentation based on PRD needs
3. More efficient - avoids documenting unused code

**Option 2: Document-First (Good for Smaller Projects)**:
1. Document entire system first
2. Create PRD with full context
3. More thorough - captures everything

**Brownfield-Specific Resources**:
- `brownfield-prd-tmpl`: Enhancement planning with existing system analysis
- `brownfield-architecture-tmpl`: Integration-focused architecture
- `document-project` task: Generates comprehensive documentation from codebase

## Document Management

### Required File Naming for Framework Integration

- `docs/prd.md` - Product Requirements Document
- `docs/architecture.md` - System Architecture Document

**Why These Names Matter**:
- Agents automatically reference these files during development
- Sharding tasks expect these specific filenames
- Workflow automation depends on standard naming

### Document Sharding

Templates with Level 2 headings (`##`) can be automatically sharded:

**Original PRD**:
```markdown
## Goals and Background Context
## Requirements
## User Interface Design Goals
## Success Metrics
```

**After Sharding**:
- `docs/prd/goals-and-background-context.md`
- `docs/prd/requirements.md`
- `docs/prd/user-interface-design-goals.md`
- `docs/prd/success-metrics.md`

### Status Tracking Workflow

Stories progress through defined statuses:
- **Draft** → **Approved** → **InProgress** → **Done**

Each status change requires user verification and approval before proceeding.

## Template System

### Template Processing Architecture

BMad employs a sophisticated template system with three key components:

1. **Template Format**: Defines markup language for variable substitution and AI processing directives
2. **Document Creation**: Orchestrates template selection and user interaction
3. **Advanced Elicitation**: Provides interactive refinement through structured brainstorming

### Template Structure

Templates follow YAML format with:

1. **Structure**: Templates are defined in YAML with clear metadata, workflow configuration, and section hierarchy
2. **Separation of Concerns**: Instructions for LLMs are in `instruction` fields, separate from content
3. **Reusability**: Templates are agent-agnostic and can be used across different agents
4. **Key Components**:
   - `template` block for metadata (id, name, version, output settings)
   - `workflow` block for interaction mode configuration
   - `sections` array defining document structure with nested subsections
   - Each section has `id`, `title`, and `instruction` fields
5. **Advanced Features**:
   - Variable substitution using `{{variable_name}}` syntax
   - Conditional sections with `condition` field
   - Repeatable sections with `repeatable: true`
   - Agent permissions with `owner` and `editors` fields
   - Examples arrays for guidance (never included in output)
6. **Clean Output**: YAML structure ensures all processing logic stays separate from generated content

## Quality Assurance and Testing

### Test Architect Integration

The QA agent (Test Architect) provides comprehensive quality assurance throughout the development lifecycle:

#### Key QA Commands and Functions

- **Risk Assessment**: `*risk {story}` - Identifies technical debt impact, integration complexity, regression potential
- **Test Design**: `*design {story}` - Creates comprehensive test strategies
- **Requirements Tracing**: `*trace {story}` - Validates requirements coverage
- **NFR Validation**: `*nfr {story}` - Validates non-functional requirements
- **Gate Decisions**: `*gate {story}` - Quality gate assessments
- **Full Review**: `*review {story}` - Complete story review process

#### Quality Standards

- **Risk-Based Testing**: Focus testing on high-risk areas
- **Integration Safety**: Ensure changes don't break existing functionality
- **Performance Validation**: Verify non-functional requirements
- **Code Quality**: Maintain coding standards and best practices

## Best Practices

### Environment-Specific Usage

**Web UI Best For**:
- Initial planning and documentation phases
- Cost-effective large document creation
- Agent consultation and brainstorming
- Multi-agent workflows with orchestrator

**IDE Best For**:
- Active development and implementation
- File operations and project integration
- Story management and development cycles
- Code review and debugging

### Context Management

**CRITICAL CONTEXT MANAGEMENT**:
- **Context windows matter!** Always use fresh, clean context windows
- **Model selection matters!** Use most powerful thinking model for SM story creation
- **ALWAYS start new chat between SM, Dev, and QA work**

### Development Workflow Rules

**CRITICAL RULE for Development**:
- **ALWAYS use SM agent for story creation** - Never use bmad-master or bmad-orchestrator
- **ALWAYS use Dev agent for implementation** - Never use bmad-master or bmad-orchestrator
- **Why this matters**: SM and Dev agents are specifically optimized for the development workflow
- **No exceptions**: Even if using bmad-master for everything else, switch to SM → Dev for implementation

### Success Tips

- **Use Gemini for big picture planning** - The team-fullstack bundle provides collaborative expertise
- **Use bmad-master for document organization** - Sharding creates manageable chunks
- **Follow the SM → Dev cycle religiously** - This ensures systematic progress
- **Keep conversations focused** - One agent, one task per conversation
- **Review everything** - Always review and approve before marking complete

## Technical Integration

### Core Configuration

The `core-config.yaml` file acts as a map for BMad agents, telling them exactly where to find project documents and how they're structured. It enables:

- **Version Flexibility**: Work with V3, V4, or custom document structures
- **Custom Locations**: Define where documents and shards live
- **Developer Context**: Specify which files the dev agent should always load
- **Debug Support**: Built-in logging for troubleshooting

### Technical Preferences System

The technical preferences system ensures consistency across all agents and projects by:

- Ensuring consistency across all agents and projects
- Eliminating repetitive technology specification
- Providing personalized recommendations aligned with user preferences
- Evolving over time with lessons learned

## Error Handling and Recovery

### Common Issues and Solutions

1. **Context Overflow**: Use document sharding and fresh chat sessions
2. **Agent Confusion**: Use specific agents for their intended purposes
3. **Workflow Breaks**: Return to previous phase and validate documents
4. **Quality Issues**: Leverage QA agent for comprehensive review

### Recovery Patterns

- **MCP Server Unavailable**: Fall back to local steering file guidance
- **Invalid Agent Context**: Suggest correct agent syntax and available agents
- **Missing Template**: List available templates and suggest alternatives
- **Hook Execution Failure**: Provide clear error messages and recovery steps

## Integration with Kiro IDE

### Native Kiro Features Mapping

- **Agents**: Implemented through Kiro steering files with contextKey activation
- **Workflows**: Implemented as Kiro Specs following Requirements → Design → Implementation
- **Templates**: Converted to Kiro Spec templates maintaining BMAD structure
- **Automation**: Implemented through Kiro Hooks triggering agent actions
- **Knowledge**: Accessed through MCP servers for documentation and best practices

### Kiro-Specific Considerations

- Use `@agent-name` syntax for agent activation in Kiro chat
- Leverage Kiro's native file operations and project integration
- Utilize Kiro's spec system for structured workflow management
- Take advantage of Kiro's hook system for automated quality assurance

## Conclusion

The BMAD Method provides a comprehensive framework for AI-assisted software development that emphasizes quality, structure, and iterative refinement. By following these principles and workflows, teams can achieve consistent, high-quality results while maximizing the leverage of AI capabilities.

Remember: The power is in natural language orchestration, not code. Dev agents code, planning agents plan. Keep dev agents lean for maximum coding efficiency.

#[[file:.bmad-core/data/bmad-kb.md]]