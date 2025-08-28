---
inclusion: always
---

# Project Context - BMAD Integration

This file contains project-specific information that helps BMAD agents understand the current project context, goals, constraints, and team structure.

## Project Overview

### Project Name
BMAD-Kiro Integration

### Project Description
Integration of BMAD Method with Kiro IDE using native Kiro features (Specs, Hooks, Steering, Chat, MCP) to transform Kiro into a BMAD-native development platform.

### Project Goals
- Map all BMAD agents to Kiro steering files for native chat integration
- Convert BMAD workflows to Kiro Specs for structured development processes
- Implement BMAD automation through Kiro Hooks
- Provide dynamic documentation access through MCP servers
- Enable intelligent documentation discovery based on project analysis
- Create seamless cross-artifact integration between all Kiro features
- Support team collaboration through version-controlled configuration

### Project Status
**Current Phase**: Implementation
**Start Date**: January 2025
**Target Completion**: Q1 2025

## Business Context

### Problem Statement
Developers need access to BMAD methodology within their IDE environment, but current solutions require separate tools or complex plugin development. Kiro IDE has powerful native features that can be configured to provide BMAD capabilities without custom development.

### Success Criteria
- All 10 BMAD agents accessible through Kiro chat interface
- Complete BMAD workflow support through Kiro Specs
- Automated BMAD processes through Kiro Hooks
- Intelligent documentation discovery and access
- Zero-setup team collaboration through version control
- Performance equivalent to native BMAD plugin experience

### Key Stakeholders
- **Primary Users**: Developers using Kiro IDE who want BMAD methodology
- **Secondary Users**: Development teams adopting BMAD practices
- **Technical Stakeholders**: Kiro IDE development team, BMAD Method maintainers

## Technical Context

### Current Architecture
- **Target Platform**: Kiro IDE native features
- **Integration Approach**: Configuration-based, no custom plugin development
- **Core Technologies**: Markdown steering files, YAML hook configurations, JSON MCP settings
- **Documentation Sources**: BMAD Method repository, Kiro documentation, technology-specific docs

### Technical Constraints
- Must use only native Kiro features (no custom plugins)
- Configuration must be version-controllable
- Performance must not degrade Kiro IDE experience
- Must maintain full compatibility with BMAD methodology
- Documentation discovery must work with GitMCP format

### Integration Points
- **Steering System**: Agent personas and behaviors
- **Spec System**: Workflow templates and task tracking
- **Hook System**: Automation triggers and agent actions
- **MCP System**: Documentation access and search
- **Chat System**: Agent interaction and context switching

## Team Structure

### Core Team Roles
- **Project Lead**: Overall project coordination and decision making
- **Technical Architect**: System design and integration architecture
- **Implementation Lead**: Hands-on development and configuration
- **QA Lead**: Testing strategy and quality assurance
- **Documentation Lead**: User guides and technical documentation

### Communication Preferences
- **Primary Channel**: GitHub issues and pull requests
- **Real-time Communication**: Discord or Slack for urgent matters
- **Documentation**: All decisions documented in project repository
- **Review Process**: All changes require peer review before merge

### Working Agreements
- **Code Review**: Minimum one approval required for all changes
- **Testing**: All functionality must be tested before merge
- **Documentation**: Update documentation with all feature changes
- **Versioning**: Use semantic versioning for releases

## Development Workflow

### Current Development Process
1. **Requirements Analysis**: Define requirements in spec format
2. **Design Phase**: Create detailed design documents
3. **Implementation**: Develop features following task list
4. **Testing**: Validate functionality and integration
5. **Documentation**: Update user guides and technical docs
6. **Review**: Peer review and quality assurance
7. **Deployment**: Release to target environments

### Quality Gates
- **Code Quality**: All code must pass linting and formatting checks
- **Testing**: Minimum 80% test coverage for critical functionality
- **Documentation**: All features must have corresponding documentation
- **Performance**: No degradation of Kiro IDE performance
- **Compatibility**: Full compatibility with BMAD methodology maintained

### Release Strategy
- **Development Branch**: `main` for stable releases
- **Feature Branches**: Individual branches for each major feature
- **Release Cadence**: Monthly releases with hotfixes as needed
- **Versioning**: Semantic versioning (major.minor.patch)

## Project Constraints

### Technical Constraints
- **Kiro Native Only**: Cannot use custom plugins or extensions
- **Performance**: Must maintain responsive IDE experience
- **Compatibility**: Must work across different operating systems
- **Version Support**: Must support current and previous Kiro versions

### Business Constraints
- **Timeline**: Must deliver core functionality within Q1 2025
- **Resources**: Limited to current team capacity
- **Scope**: Focus on core BMAD features first, advanced features later
- **Quality**: Cannot compromise on BMAD methodology compliance

### External Dependencies
- **Kiro IDE**: Dependent on Kiro's native feature stability
- **BMAD Method**: Must stay synchronized with BMAD methodology updates
- **GitMCP**: Dependent on GitMCP service for documentation access
- **GitHub**: Repository hosting and documentation sources

## Integration with BMAD Agents

### For All Agents
- Reference this project context when making decisions
- Consider project constraints and goals in recommendations
- Align with team working agreements and processes
- Use project-specific terminology and conventions

### For PM Agent
- Use project goals and success criteria for feature prioritization
- Consider business constraints when defining requirements
- Align with stakeholder needs and expectations
- Track progress against project timeline

### For Architect Agent
- Consider technical constraints in architectural decisions
- Design for Kiro native feature integration
- Plan for scalability within constraint boundaries
- Document architectural decisions with project context

### For Developer Agent
- Follow project development workflow and quality gates
- Use project-specific coding standards and conventions
- Consider performance impact on Kiro IDE
- Maintain compatibility with BMAD methodology

### For QA Agent
- Validate against project success criteria
- Test within technical constraint boundaries
- Ensure quality gates are met
- Verify BMAD methodology compliance

## Dynamic Context Updates

### Project Evolution Tracking
This section will be updated as the project evolves:

**Current Sprint Focus**: Task 10 - Context and Configuration Management
**Recent Completions**: BMAD Agent System, Workflow Templates, Automation Hooks
**Upcoming Priorities**: Error Handling, Validation, Documentation
**Known Issues**: None currently identified
**Technical Debt**: Documentation needs regular updates as features are added

### Lessons Learned
- Configuration-based approach provides flexibility without complexity
- Steering files are powerful for agent behavior customization
- Hook system enables sophisticated automation workflows
- MCP integration provides excellent documentation access
- Version control of configuration enables team collaboration

### Future Considerations
- **Expansion Packs**: Consider support for BMAD expansion packs
- **Advanced Workflows**: More complex multi-agent workflows
- **Performance Optimization**: Optimize for larger projects
- **User Experience**: Streamline setup and configuration process
- **Community Features**: Enable community sharing of configurations

## Notes for Implementation

- **Always** consider project constraints when implementing features
- **Prioritize** core BMAD functionality over advanced features
- **Document** all decisions and changes in project repository
- **Test** thoroughly to ensure Kiro IDE performance is maintained
- **Collaborate** effectively using established team processes
- **Maintain** BMAD methodology compliance throughout development