# Brownfield Workflow Requirements

## Introduction

This spec template guides teams through the BMAD brownfield workflow for enhancing existing projects. The workflow emphasizes comprehensive analysis of existing systems, careful integration planning, and risk mitigation to ensure new features integrate seamlessly while preserving existing functionality.

The brownfield workflow follows BMAD methodology principles adapted for existing codebases, focusing on thorough documentation, compatibility requirements, and incremental integration strategies that minimize disruption to operational systems.

## Requirements

### Requirement 1: Existing Project Analysis and Documentation

**User Story:** As a project analyst, I want to thoroughly analyze and document the existing project structure, architecture, and constraints, so that enhancement planning is based on accurate understanding of the current system.

#### Acceptance Criteria

1. WHEN I start brownfield analysis THEN the system SHALL determine if document-project analysis was already performed
2. WHEN existing documentation is available THEN the system SHALL reference and build upon it rather than re-analyzing
3. WHEN documentation is insufficient THEN the system SHALL recommend running document-project task first
4. WHEN I analyze the current state THEN the system SHALL document project purpose, tech stack, architecture style, and deployment approach
5. WHEN I identify constraints THEN the system SHALL document technical debt, known issues, and system limitations
6. WHEN I make assumptions THEN the system SHALL explicitly validate them with the user before proceeding

### Requirement 2: Enhancement Scope and Impact Assessment

**User Story:** As a project manager, I want to clearly define the enhancement scope and assess its impact on the existing system, so that I can plan appropriate integration strategies and resource allocation.

#### Acceptance Criteria

1. WHEN I define enhancement scope THEN the system SHALL assess complexity and recommend appropriate workflow (full PRD vs simple epic/story)
2. WHEN I categorize enhancements THEN the system SHALL distinguish between new features, modifications, integrations, performance improvements, and technology upgrades
3. WHEN I assess impact THEN the system SHALL classify as minimal, moderate, significant, or major impact on existing codebase
4. WHEN I document enhancement goals THEN they SHALL be specific to brownfield context and integration requirements
5. WHEN I establish background context THEN it SHALL explain how the enhancement fits with existing project evolution

### Requirement 3: Compatibility and Integration Requirements

**User Story:** As a system architect, I want to define comprehensive compatibility requirements and integration constraints, so that new functionality integrates seamlessly without breaking existing features.

#### Acceptance Criteria

1. WHEN I define functional requirements THEN each SHALL consider integration with existing functionality
2. WHEN I specify non-functional requirements THEN they SHALL include performance impact constraints on existing system
3. WHEN I create compatibility requirements THEN they SHALL cover API compatibility, database schema compatibility, UI/UX consistency, and integration compatibility
4. WHEN I plan integration THEN the system SHALL define database, API, frontend, and testing integration strategies
5. WHEN I assess risks THEN the system SHALL identify technical, integration, and deployment risks with mitigation strategies

### Requirement 4: Brownfield Architecture Integration

**User Story:** As a system architect, I want to design architecture that integrates new components with existing systems while maintaining consistency and minimizing risk, so that enhancements feel native to the existing application.

#### Acceptance Criteria

1. WHEN I design architecture THEN it SHALL align with existing technology stack and architectural patterns
2. WHEN I introduce new technologies THEN they SHALL be justified with clear rationale and integration methods
3. WHEN I design data models THEN they SHALL integrate with existing schema while ensuring backward compatibility
4. WHEN I plan component architecture THEN new components SHALL follow existing patterns and integration interfaces
5. WHEN I design APIs THEN they SHALL maintain consistency with existing API patterns and authentication methods
6. WHEN I plan deployment THEN it SHALL integrate with existing infrastructure and deployment pipelines

### Requirement 5: Risk-Aware Story Planning and Implementation

**User Story:** As a product owner, I want to structure enhancement work into stories that minimize risk to existing functionality while delivering incremental value, so that the system remains stable throughout the enhancement process.

#### Acceptance Criteria

1. WHEN I create epic structure THEN it SHALL favor single comprehensive epic unless multiple unrelated enhancements are requested
2. WHEN I sequence stories THEN they SHALL minimize risk to existing system and include verification of existing functionality
3. WHEN I define acceptance criteria THEN they SHALL include both new functionality and existing system integrity requirements
4. WHEN I plan integration verification THEN each story SHALL include specific steps to ensure existing functionality remains intact
5. WHEN I size stories THEN they SHALL account for additional complexity of working within existing codebase constraints
6. WHEN I plan rollback THEN each story SHALL include rollback considerations and procedures

### Requirement 6: Quality Assurance and Validation

**User Story:** As a quality assurance specialist, I want comprehensive validation procedures that ensure both new functionality works correctly and existing functionality remains unaffected, so that system quality is maintained throughout the enhancement process.

#### Acceptance Criteria

1. WHEN I plan testing THEN it SHALL integrate with existing test suite and frameworks
2. WHEN I design regression testing THEN it SHALL verify existing functionality remains intact after each change
3. WHEN I create integration tests THEN they SHALL validate new components work correctly with existing systems
4. WHEN I plan security testing THEN it SHALL ensure new features don't introduce vulnerabilities to existing system
5. WHEN I validate deployment THEN it SHALL include rollback procedures and monitoring for existing system impact
6. WHEN I document QA results THEN they SHALL specifically address both new functionality and existing system integrity

#[[file:.bmad-core/templates/brownfield-prd-tmpl.yaml]]
#[[file:.bmad-core/templates/brownfield-architecture-tmpl.yaml]]