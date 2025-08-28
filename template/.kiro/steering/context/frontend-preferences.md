---
inclusion: always
---

# Frontend Technical Preferences - BMAD

Este arquivo define as preferências técnicas para desenvolvimento frontend seguindo os padrões BMAD.

## Stack Tecnológica Preferencial

### Framework e Bibliotecas Core
- **Framework**: Next.js 15+
- **UI Library**: React 19+
- **TypeScript**: Sempre preferido para type safety

### Styling e UI
- **Styling**: Tailwind CSS v4 + shadcn/ui v2.0+
- **Design System**: shadcn/ui como base, customizado conforme necessário
- **Icons**: Lucide React (padrão shadcn/ui)

### Funcionalidades Específicas
- **Charts**: Recharts para visualizações de dados
- **Animations**: Framer Motion v10+ para animações complexas
- **Forms**: React Hook Form + Zod para validação
- **State Management**: Context API + React Query para estado global e server state

### Testing
- **Test Framework**: Jest 30.x.x
- **React Testing**: @testing-library/react 16.x.x
- **DOM Testing**: @testing-library/jest-dom 6.x.x
- **TypeScript Testing**: ts-jest 29.x.x

## Versões de Dependências Recomendadas

```json
{
  "react": "19.x.x",
  "next": "15.x.x",
  "typescript": "^5.0.0",
  "tailwindcss": "^4.0.0",
  "@radix-ui/react-*": "latest",
  "framer-motion": "^10.0.0",
  "react-hook-form": "^7.0.0",
  "zod": "^3.0.0",
  "@tanstack/react-query": "^5.0.0",
  "recharts": "^2.0.0",
  "jest": "30.x.x",
  "@testing-library/react": "16.x.x",
  "@testing-library/jest-dom": "6.x.x",
  "ts-jest": "29.x.x"
}
```

## Padrões de Desenvolvimento

### Estrutura de Componentes
- Usar componentes funcionais com hooks
- Preferir composição sobre herança
- Implementar design system baseado em shadcn/ui

### Performance
- Usar React.memo para componentes que re-renderizam frequentemente
- Implementar lazy loading para rotas e componentes pesados
- Otimizar imagens com Next.js Image component

### Acessibilidade
- Seguir padrões WCAG 2.1 AA
- Usar componentes Radix UI como base (já acessíveis)
- Implementar navegação por teclado adequada

### Testing Strategy
- Unit tests para lógica de negócio
- Integration tests para fluxos críticos
- Component tests para UI components
- E2E tests para user journeys principais

## Integração com Agentes BMAD

### Para Architect Agent
- Use estas preferências ao criar especificações de arquitetura frontend
- Considere performance e escalabilidade desde o início
- Documente decisões arquiteturais baseadas nestas tecnologias

### Para Developer Agent
- Implemente seguindo estas tecnologias e versões
- Use os padrões de testing especificados
- Mantenha consistência com o design system

### Para UX Expert Agent
- Considere as capacidades do Tailwind CSS e shadcn/ui
- Projete componentes que aproveitem Framer Motion
- Garanta compatibilidade com os padrões de acessibilidade

### Para QA Agent
- Use as ferramentas de testing especificadas
- Valide performance seguindo as práticas Next.js
- Teste acessibilidade conforme padrões definidos

## Notas de Implementação

- **Sempre** usar TypeScript para type safety
- **Preferir** server components do Next.js quando possível
- **Implementar** error boundaries para robustez
- **Seguir** padrões de nomenclatura consistentes
- **Documentar** componentes complexos com JSDoc