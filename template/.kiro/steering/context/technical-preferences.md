---
inclusion: always
---

# Technical Preferences - BMAD

This file defines the general technical preferences for development following BMAD standards, covering backend, full-stack, and cross-cutting concerns.

## General Development Principles

### Code Quality Standards
- **Type Safety**: Prefer strongly-typed languages (TypeScript, Rust, Go, Java)
- **Code Style**: Consistent formatting with automated tools (Prettier, ESLint, etc.)
- **Documentation**: Comprehensive inline documentation and README files
- **Version Control**: Git with conventional commits and semantic versioning

### Architecture Patterns
- **Clean Architecture**: Separation of concerns with clear boundaries
- **Domain-Driven Design**: Model business logic explicitly
- **API-First**: Design APIs before implementation
- **Microservices**: When complexity justifies distributed architecture

## Backend Technology Stack

### Languages and Frameworks
- **Primary**: Node.js with TypeScript, Python with FastAPI, or Go
- **Database**: PostgreSQL for relational data, Redis for caching
- **API Style**: REST with OpenAPI specification, GraphQL for complex queries
- **Authentication**: JWT with refresh tokens, OAuth2 for third-party integration

### Infrastructure and DevOps
- **Containerization**: Docker with multi-stage builds
- **Orchestration**: Docker Compose for development, Kubernetes for production
- **CI/CD**: GitHub Actions or GitLab CI with automated testing and deployment
- **Monitoring**: Structured logging with correlation IDs, metrics with Prometheus

### Database and Storage
- **Primary Database**: PostgreSQL 15+ with proper indexing and migrations
- **Caching**: Redis for session storage and frequently accessed data
- **File Storage**: Cloud storage (AWS S3, Google Cloud Storage) for assets
- **Search**: Elasticsearch for full-text search when needed

## Full-Stack Integration

### API Design
- **RESTful APIs**: Follow REST principles with proper HTTP methods
- **Error Handling**: Consistent error responses with proper HTTP status codes
- **Validation**: Input validation on both client and server sides
- **Documentation**: OpenAPI/Swagger documentation for all endpoints

### Security Standards
- **Authentication**: Secure token-based authentication with proper expiration
- **Authorization**: Role-based access control (RBAC) with principle of least privilege
- **Data Protection**: Encryption at rest and in transit
- **Input Sanitization**: Prevent SQL injection, XSS, and other common attacks

### Performance Optimization
- **Caching Strategy**: Multi-level caching (browser, CDN, application, database)
- **Database Optimization**: Proper indexing, query optimization, connection pooling
- **Asset Optimization**: Minification, compression, and CDN usage
- **Monitoring**: Performance metrics and alerting for critical paths

## Testing Strategy

### Testing Pyramid
- **Unit Tests**: 70% - Test individual functions and components
- **Integration Tests**: 20% - Test component interactions and API endpoints
- **End-to-End Tests**: 10% - Test complete user workflows

### Testing Tools and Frameworks
- **Backend Testing**: Jest for Node.js, pytest for Python, Go's built-in testing
- **API Testing**: Supertest for Node.js, requests for Python
- **Database Testing**: Test databases with proper setup/teardown
- **Load Testing**: Artillery or k6 for performance testing

### Quality Gates
- **Code Coverage**: Minimum 80% for critical paths
- **Static Analysis**: ESLint, SonarQube, or language-specific linters
- **Security Scanning**: Automated vulnerability scanning in CI/CD
- **Performance Testing**: Automated performance regression testing

## Development Workflow

### Environment Management
- **Local Development**: Docker Compose for consistent local environments
- **Environment Parity**: Development, staging, and production environments should be similar
- **Configuration**: Environment variables for configuration, never hardcode secrets
- **Database Migrations**: Version-controlled database schema changes

### Code Review Process
- **Pull Request Template**: Standardized PR descriptions with checklist
- **Review Requirements**: At least one approval from senior developer
- **Automated Checks**: All tests pass, code coverage maintained, security scans pass
- **Documentation Updates**: Update documentation when changing APIs or architecture

### Deployment Strategy
- **Blue-Green Deployment**: Zero-downtime deployments with rollback capability
- **Feature Flags**: Gradual feature rollout with ability to disable features
- **Health Checks**: Proper health check endpoints for load balancers
- **Rollback Plan**: Clear rollback procedures for failed deployments

## Integration with BMAD Agents

### For Architect Agent
- Use these preferences when designing system architecture
- Consider scalability, security, and maintainability from the start
- Document architectural decisions and trade-offs
- Plan for monitoring and observability

### For Developer Agent
- Implement following these technology choices and patterns
- Use specified testing frameworks and coverage requirements
- Follow security best practices and input validation
- Maintain code quality standards and documentation

### For QA Agent
- Use specified testing tools and frameworks
- Validate security requirements and performance standards
- Ensure proper error handling and edge case coverage
- Test deployment and rollback procedures

### For PM Agent
- Consider technical constraints when defining requirements
- Plan for scalability and performance requirements
- Include security and compliance requirements in PRDs
- Account for technical debt and maintenance in roadmaps

### For DevOps/Infrastructure
- Follow containerization and orchestration standards
- Implement proper CI/CD pipelines with quality gates
- Set up monitoring, logging, and alerting systems
- Ensure security scanning and compliance checks

## Technology-Specific Guidelines

### Node.js/TypeScript Backend
```json
{
  "node": ">=18.0.0",
  "typescript": "^5.0.0",
  "express": "^4.18.0",
  "fastify": "^4.0.0",
  "prisma": "^5.0.0",
  "jest": "^29.0.0",
  "supertest": "^6.0.0"
}
```

### Python Backend
```txt
fastapi>=0.100.0
pydantic>=2.0.0
sqlalchemy>=2.0.0
alembic>=1.11.0
pytest>=7.0.0
pytest-asyncio>=0.21.0
```

### Database Standards
- Use migrations for all schema changes
- Implement proper indexing strategy
- Use connection pooling for performance
- Regular backup and recovery testing

## Notes for Implementation

- **Always** prioritize security and data protection
- **Prefer** established patterns over custom solutions
- **Document** all architectural decisions and trade-offs
- **Monitor** system performance and user experience
- **Plan** for scalability from the beginning
- **Test** thoroughly at all levels of the application