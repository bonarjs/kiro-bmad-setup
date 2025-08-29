# Kiro BMAD Setup Product Requirements Document (PRD)

## 1. Goals and Background Context

### Goals
*   **Automatizar a Instalação**: Eliminar a configuração manual da integração BMAD-Kiro.
*   **Garantir Consistência**: Fornecer uma estrutura de integração padronizada e livre de erros.
*   **Acelerar Adoção**: Reduzir drasticamente o tempo e o esforço necessários para começar a usar o BMAD no Kiro IDE.
*   **Manter Desacoplamento**: Permitir que o `.bmad-core` e a integração `.kiro` sejam atualizados de forma independente.

### Background Context
Atualmente, para integrar a metodologia BMAD ao Kiro IDE, os desenvolvedores precisam criar e configurar manualmente uma estrutura complexa de diretórios e arquivos (`.kiro/`). Este processo é demorado, suscetível a erros e inconsistente entre diferentes projetos e equipes. O `kiro-bmad-setup` resolve este problema fornecendo um instalador NPX de um único comando que automatiza todo o processo, garantindo uma configuração rápida, correta e padronizada.

### Change Log
| Date | Version | Description | Author |
|---|---|---|---|
| 2025-08-29 | 1.1 | Added check for existing `.kiro` directory | Gemini |
| 2025-08-29 | 1.0 | Initial PRD draft | Gemini |

## 2. Requirements

### Functional Requirements
1.  **FR1**: O script deve ser executável via `npx kiro-bmad-setup install`.
2.  **FR2**: O script deve verificar a existência de um diretório `.kiro` na raiz do projeto. Se o diretório já existir, a instalação deve ser interrompida com uma mensagem informativa para evitar a sobreescrita.
3.  **FR3**: O script deve verificar a existência do diretório `.bmad-core` na raiz do projeto onde o comando foi executado.
4.  **FR4**: Se o diretório `.bmad-core` não existir, o script deve executar o comando `npx bmad-method install` e aguardar sua conclusão bem-sucedida.
5.  **FR5**: Se a execução de `npx bmad-method install` falhar, o script principal deve parar e informar o erro ao usuário.
6.  **FR6**: Após garantir a existência do `.bmad-core`, o script deve copiar a estrutura de diretórios e arquivos de `template/.kiro` (do pacote) para a raiz do projeto do usuário.
7.  **FR7**: O script deve exibir mensagens de status claras para o usuário, indicando as etapas principais (verificando `.kiro`, verificando `.bmad-core`, instalando `.bmad-core`, copiando arquivos `.kiro`).
8.  **FR8**: Ao final da execução, o script deve exibir uma mensagem clara de sucesso ou de falha.

### Non-Functional Requirements
1.  **NFR1**: A execução completa do script (incluindo a instalação do `.bmad-core`) deve levar menos de 60 segundos em uma conexão de internet padrão.
2.  **NFR2**: O pacote NPX deve ser compatível com as versões LTS do Node.js (atualmente 18.x, 20.x, 22.x).
3.  **NFR3**: O script deve funcionar de forma idêntica nos sistemas operacionais Linux, macOS e Windows.
4.  **NFR4**: O pacote deve ter o mínimo de dependências externas para garantir uma instalação rápida e segura.

## 3. Technical Assumptions

### Repository Structure
*   **Monorepo**: O projeto será um único repositório contendo o código do pacote e os templates.

### Service Architecture
*   **CLI Package**: A arquitetura é um pacote de linha de comando autocontido, publicado no NPM.

### Testing Requirements
*   **Unit + Integration**: Serão criados testes unitários para a lógica interna (verificações de arquivos, execução de comandos) e testes de integração que simulam a execução do `npx` em um diretório de teste.

### Additional Technical Assumptions and Requests
*   O pacote será desenvolvido em **TypeScript** para robustez e manutenibilidade.
*   Serão utilizadas bibliotecas padrão para CLIs, como `commander.js` para parsing de argumentos, `fs-extra` para operações de arquivo e `execa` para executar sub-processos.

## 4. Epic List

*   **Epic 1: MVP do Instalador**: Desenvolver, testar e publicar a funcionalidade principal do instalador `kiro-bmad-setup`, garantindo uma instalação completa e bem-sucedida do boilerplate `.kiro`.
