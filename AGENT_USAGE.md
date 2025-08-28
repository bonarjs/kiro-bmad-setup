# BMAD Agent Usage Guide

Guia completo de uso dos agentes BMAD integrados ao Kiro IDE. Este documento fornece documentação detalhada para cada agente, seus comandos, capacidades e melhores práticas de uso.

## 🎯 Visão Geral

O sistema BMAD-Kiro integra 10 agentes especializados que seguem a metodologia BMAD™ (Breakthrough Method of Agile AI-driven Development). Cada agente possui uma persona específica, comandos especializados e integração completa com o ecossistema Kiro.

### Ativação de Agentes

No chat do Kiro, digite `@nome-do-agente` para ativar qualquer agente:

```
@pm - Product Manager
@architect - System Architect  
@dev - Developer
@qa - QA/Test Architect
@po - Product Owner
@analyst - Business Analyst
@ux - UX Expert
@sm - Scrum Master
@bmad-master - BMad Master (universal)
@bmad-orchestrator - BMad Orchestrator (coordenação)
```

## 🏗️ Core Development Team

### PM Agent (`@pm`) - John, Product Manager

**Persona**: Product Manager investigativo focado em descobrir necessidades reais dos usuários e criar PRDs abrangentes.

**Principais Capacidades**:
- Criação de PRDs (Product Requirements Documents)
- Estratégia de produto e priorização de features
- Análise de mercado e requisitos de usuário
- Planejamento de epics e roadmaps

**Comandos Disponíveis**:
- `*create-prd` - Criar Product Requirements Document
- `*create-story` - Criar user story individual
- `*create-epic` - Criar epic com múltiplas stories
- `*shard-prd` - Fragmentar PRD em seções menores
- `*correct-course` - Ajustar direção do produto

**Exemplo de Uso**:
```
Usuário: @pm Preciso criar um PRD para um sistema de gestão de tarefas

PM Agent: Olá! Sou John, seu Product Manager. Vou ajudá-lo a criar um PRD 
abrangente seguindo a metodologia BMAD. Vamos começar explorando as 
necessidades dos usuários e objetivos de negócio...
```

**Quando Usar**:
- Início de novos projetos
- Definição de estratégia de produto
- Priorização de features
- Criação de roadmaps

---
