---
inclusion: always
---

# Team Standards - BMAD Integration

This file defines team-specific guidelines, processes, and standards for collaborative development using BMAD methodology within Kiro IDE.

## Code Review Standards

### Review Process
- **Mandatory Reviews**: All code changes require at least one peer review
- **Review Assignment**: Automatic assignment to team members with relevant expertise
- **Review Timeline**: Reviews should be completed within 24 hours for urgent changes, 48 hours for regular changes
- **Self-Review**: Authors must review their own changes before requesting peer review

### Review Criteria
- **Functionality**: Code works as intended and meets requirements
- **Code Quality**: Follows team coding standards and best practices
- **Testing**: Adequate test coverage and all tests pass
- **Documentation**: Code is properly documented and README updated if needed
- **Performance**: No performance regressions introduced
- **Security**: No security vulnerabilities or sensitive data exposure

### Review Checklist
```markdown
- [ ] Code follows team coding standards
- [ ] All tests pass and coverage is maintained
- [ ] Documentation is updated where necessary
- [ ] No security vulnerabilities introduced
- [ ] Performance impact is acceptable
- [ ] BMAD methodology compliance maintained
- [ ] Breaking changes are properly documented
- [ ] Configuration changes are version-controlled
```

## Deployment Procedures

### Environment Strategy
- **Development**: Local development with Docker Compose
- **Staging**: Pre-production environment for integration testing
- **Production**: Live environment with full monitoring and backup

### Deployment Pipeline
1. **Code Review**: All changes reviewed and approved
2. **Automated Testing**: Full test suite passes
3. **Security Scanning**: Automated security vulnerability scanning
4. **Staging Deployment**: Deploy to staging for integration testing
5. **Manual Testing**: Critical path testing in staging environment
6. **Production Deployment**: Deploy to production with monitoring
7. **Post-Deployment Verification**: Verify deployment success and functionality

### Rollback Procedures
- **Immediate Rollback**: Automated rollback triggers for critical failures
- **Manual Rollback**: Clear procedures for manual rollback when needed
- **Rollback Testing**: Regular testing of rollback procedures
- **Communication**: Clear communication during rollback events

### Deployment Checklist
```markdown
- [ ] All tests pass in CI/CD pipeline
- [ ] Security scans show no critical vulnerabilities
- [ ] Staging deployment successful and tested
- [ ] Database migrations tested and reversible
- [ ] Monitoring and alerting configured
- [ ] Rollback plan documented and tested
- [ ] Team notified of deployment schedule
- [ ] Post-deployment verification plan ready
```

## Quality Gates

### Code Quality Standards
- **Linting**: All code must pass ESLint/Prettier for JavaScript/TypeScript
- **Type Safety**: TypeScript strict mode enabled with no `any` types
- **Code Coverage**: Minimum 80% test coverage for critical functionality
- **Complexity**: Maximum cyclomatic complexity of 10 per function
- **Documentation**: All public APIs and complex functions documented

### Testing Requirements
- **Unit Tests**: All business logic must have unit tests
- **Integration Tests**: All API endpoints must have integration tests
- **End-to-End Tests**: Critical user workflows must have E2E tests
- **Performance Tests**: Load testing for performance-critical features
- **Security Tests**: Automated security testing in CI/CD pipeline

### Quality Metrics
- **Build Success Rate**: >95% successful builds
- **Test Pass Rate**: 100% test pass rate required for deployment
- **Code Coverage**: Maintain >80% coverage, trending upward
- **Security Vulnerabilities**: Zero critical vulnerabilities in production
- **Performance**: Response times within defined SLA thresholds

### Quality Gate Checklist
```markdown
- [ ] All automated tests pass
- [ ] Code coverage meets minimum threshold
- [ ] No critical security vulnerabilities
- [ ] Performance benchmarks met
- [ ] Code quality metrics within acceptable range
- [ ] Documentation updated and accurate
- [ ] BMAD methodology compliance verified
```

## Collaboration Tools

### Communication Channels
- **Primary**: GitHub issues and pull requests for all project communication
- **Real-time**: Discord/Slack for urgent matters and quick questions
- **Meetings**: Weekly team sync, monthly retrospectives
- **Documentation**: All decisions documented in project repository

### Project Management
- **Issue Tracking**: GitHub Issues with proper labels and milestones
- **Project Boards**: GitHub Projects for sprint planning and tracking
- **Time Tracking**: Optional time tracking for capacity planning
- **Reporting**: Weekly progress reports and monthly metrics review

### Knowledge Sharing
- **Documentation**: Comprehensive documentation in project repository
- **Code Comments**: Inline documentation for complex logic
- **Team Wiki**: Shared knowledge base for team processes and decisions
- **Learning Sessions**: Regular knowledge sharing sessions for new technologies

### Tool Configuration
```yaml
# GitHub Labels
labels:
  - name: "bug"
    color: "d73a4a"
    description: "Something isn't working"
  - name: "enhancement"
    color: "a2eeef"
    description: "New feature or request"
  - name: "documentation"
    color: "0075ca"
    description: "Improvements or additions to documentation"
  - name: "bmad-agent"
    color: "7057ff"
    description: "Related to BMAD agent functionality"
  - name: "bmad-workflow"
    color: "008672"
    description: "Related to BMAD workflow implementation"
```

## Workflow Preferences

### Development Workflow
1. **Feature Planning**: Create GitHub issue with detailed requirements
2. **Branch Creation**: Create feature branch from main
3. **Development**: Implement feature following team standards
4. **Testing**: Write and run tests locally
5. **Code Review**: Create pull request and request review
6. **Integration**: Merge after approval and successful CI/CD
7. **Deployment**: Deploy through automated pipeline
8. **Verification**: Verify deployment and close issue

### Git Workflow
- **Branching Strategy**: Feature branches from main, no direct commits to main
- **Commit Messages**: Conventional commits format (feat:, fix:, docs:, etc.)
- **Pull Requests**: Descriptive titles and detailed descriptions
- **Merge Strategy**: Squash and merge for feature branches

### BMAD Integration Workflow
- **Agent Usage**: Use appropriate BMAD agents for different tasks
- **Spec Creation**: Follow BMAD spec workflow for complex features
- **Hook Configuration**: Configure hooks for automated BMAD processes
- **Documentation**: Maintain BMAD methodology compliance

### Workflow Templates

#### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing completed

## BMAD Compliance
- [ ] Follows BMAD methodology
- [ ] Agent behavior tested
- [ ] Workflow integration verified

## Checklist
- [ ] Code follows team standards
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests pass locally
```

#### Issue Template
```markdown
## Problem Description
Clear description of the issue or feature request

## Expected Behavior
What should happen

## Current Behavior
What actually happens (for bugs)

## Steps to Reproduce
1. Step one
2. Step two
3. Step three

## BMAD Context
- [ ] Related to specific BMAD agent
- [ ] Affects BMAD workflow
- [ ] Impacts BMAD methodology compliance

## Additional Context
Any other relevant information
```

## Version-Controlled Team Configuration

### Configuration Management
- **Centralized Config**: All team configuration in version control
- **Environment Specific**: Different configs for dev/staging/prod
- **Secret Management**: Secure handling of sensitive configuration
- **Change Tracking**: All configuration changes tracked in Git

### Team Onboarding
- **Setup Scripts**: Automated setup for new team members
- **Documentation**: Comprehensive onboarding documentation
- **Mentoring**: Pair programming and mentoring for new team members
- **Tool Access**: Automated provisioning of tool access and permissions

### Configuration Files
```yaml
# .github/CODEOWNERS
* @team-leads
steering/ @bmad-experts
hooks/ @automation-team
specs/ @workflow-team

# .github/workflows/team-standards.yml
name: Team Standards Check
on: [pull_request]
jobs:
  standards-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Check code standards
        run: npm run lint
      - name: Check test coverage
        run: npm run test:coverage
      - name: Check BMAD compliance
        run: npm run bmad:validate
```

## Integration with BMAD Agents

### For All Agents
- Follow team code review standards when suggesting changes
- Respect deployment procedures and quality gates
- Use established communication channels for team coordination
- Maintain team coding standards and conventions

### For PM Agent
- Consider team capacity and workflow preferences in planning
- Use team project management tools for tracking
- Align with team quality gates and deployment procedures
- Communicate through established team channels

### For Architect Agent
- Design solutions that fit team deployment procedures
- Consider team technical capabilities and preferences
- Document architectural decisions using team standards
- Plan for team code review and quality gate processes

### For Developer Agent
- Follow team coding standards and conventions
- Use team testing frameworks and coverage requirements
- Respect team code review process and requirements
- Integrate with team CI/CD pipeline and deployment procedures

### For QA Agent
- Use team testing tools and frameworks
- Follow team quality gate requirements and metrics
- Integrate with team deployment and rollback procedures
- Report issues using team communication channels and tools

### For DevOps/Infrastructure
- Follow team deployment procedures and standards
- Use team-approved tools and configurations
- Maintain team infrastructure and monitoring standards
- Document changes using team version control practices

## Continuous Improvement

### Team Retrospectives
- **Frequency**: Monthly retrospectives to review and improve processes
- **Format**: What went well, what could be improved, action items
- **Documentation**: All retrospective outcomes documented and tracked
- **Follow-up**: Regular review of action items and progress

### Process Evolution
- **Feedback Collection**: Regular collection of team feedback on processes
- **Experimentation**: Safe-to-fail experiments with new tools and processes
- **Measurement**: Metrics to measure process effectiveness
- **Adaptation**: Regular updates to team standards based on learnings

### Knowledge Management
- **Documentation Updates**: Regular updates to team documentation
- **Best Practices**: Capture and share team best practices
- **Lessons Learned**: Document and share lessons learned from projects
- **Training**: Regular training on new tools, technologies, and processes

## Notes for Implementation

- **Customize** these standards based on your specific team needs
- **Review** and update standards regularly based on team feedback
- **Enforce** standards through automation where possible
- **Document** all changes to standards in version control
- **Train** team members on standards and provide ongoing support
- **Measure** effectiveness of standards and adjust as needed