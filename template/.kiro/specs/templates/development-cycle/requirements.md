# Development Cycle Requirements

## Introduction

This spec template guides teams through the BMAD development cycle workflow, transforming PRD epics into implementable user stories and managing the iterative development process from story creation through QA review and completion.

The development cycle follows BMAD's core principle of "SM → Dev → QA" cycles with clean handoffs, ensuring systematic progress through small, manageable increments while maintaining high quality standards.

## Requirements

### Requirement 1: Story Creation and Management

**User Story:** As a Scrum Master, I want to create well-defined user stories from PRD epics, so that developers have clear, actionable work items that can be completed in focused sessions.

#### Acceptance Criteria

1. WHEN I create a story THEN it SHALL follow the standard "As a [role], I want [action], so that [benefit]" format
2. WHEN I define acceptance criteria THEN each SHALL be clear, testable, and traceable to PRD requirements
3. WHEN I break down stories THEN each SHALL be sized for completion by a single AI agent in one focused session (2-4 hours)
4. WHEN I create tasks and subtasks THEN they SHALL reference applicable acceptance criteria numbers
5. WHEN I document dev notes THEN they SHALL provide complete context without requiring architecture document review
6. WHEN I specify testing requirements THEN they SHALL include test file locations, frameworks, and patterns from architecture

### Requirement 2: Development Implementation Workflow

**User Story:** As a developer, I want a structured implementation workflow with clear tasks and comprehensive context, so that I can efficiently implement stories while maintaining code quality and consistency.

#### Acceptance Criteria

1. WHEN I start story implementation THEN the story status SHALL progress from "Approved" to "InProgress"
2. WHEN I implement functionality THEN I SHALL complete all tasks and subtasks with checkbox tracking
3. WHEN I write code THEN I SHALL follow testing standards and patterns specified in the story
4. WHEN I complete implementation THEN I SHALL update the File List with all created/modified files
5. WHEN I finish development THEN I SHALL change story status to "Review" and add completion notes
6. WHEN I encounter issues THEN I SHALL document them in debug log references for troubleshooting

### Requirement 3: Quality Assurance and Review

**User Story:** As a QA specialist, I want to perform comprehensive code review and quality assessment, so that completed stories meet BMAD quality standards and project requirements.

#### Acceptance Criteria

1. WHEN I review a story THEN I SHALL validate all acceptance criteria have been met
2. WHEN I assess code quality THEN I SHALL check adherence to coding standards and architectural patterns
3. WHEN I evaluate testing THEN I SHALL verify test coverage and quality meet project requirements
4. WHEN I find issues THEN I SHALL document them with specific improvement recommendations
5. WHEN I approve a story THEN I SHALL change status to "Done" and document QA results
6. WHEN changes are needed THEN I SHALL keep status as "Review" with unchecked items for developer action

### Requirement 4: Development Cycle Coordination

**User Story:** As a project coordinator, I want to manage the development cycle workflow with proper handoffs and status tracking, so that work progresses systematically through the SM → Dev → QA cycle.

#### Acceptance Criteria

1. WHEN I coordinate development THEN only one story SHALL be in progress at a time per developer
2. WHEN agents switch roles THEN they SHALL use clean, fresh context windows for optimal performance
3. WHEN handoffs occur THEN all necessary context SHALL be preserved in story documentation
4. WHEN cycles complete THEN I SHALL verify story completion before starting the next story
5. WHEN issues arise THEN I SHALL facilitate resolution and maintain workflow continuity

### Requirement 5: Progress Tracking and Documentation

**User Story:** As a team member, I want comprehensive tracking of development progress and changes, so that I can understand project status and maintain accountability.

#### Acceptance Criteria

1. WHEN stories are created or modified THEN changes SHALL be tracked in the change log with date, version, description, and author
2. WHEN development occurs THEN the agent model and version SHALL be recorded for traceability
3. WHEN files are modified THEN they SHALL be listed in the File List section for impact tracking
4. WHEN debugging occurs THEN debug log references SHALL be maintained for troubleshooting
5. WHEN QA reviews occur THEN results SHALL be documented with specific findings and recommendations

#[[file:.bmad-core/templates/story-tmpl.yaml]]