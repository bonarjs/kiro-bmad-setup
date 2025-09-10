# Kiro BMAD Setup

| English 🇬🇧 | Português (BR) 🇧🇷 | Español 🇪🇸 |
|:---:|:---:|:---:|
| This command-line tool (CLI) sets up your project to work with the BMAD Method within the Kiro IDE.<br/><br/>It automatically installs the `.bmad-core` resources and copies the necessary `.kiro` configuration files and hooks. | Esta ferramenta de linha de comando (CLI) prepara seu projeto para trabalhar com o Método BMAD dentro do IDE Kiro.<br/><br/>Ela instala automaticamente os recursos do `.bmad-core` e copia os arquivos de configuração e hooks necessários do `.kiro`. | Esta herramienta de línea de comandos (CLI) configura su proyecto para trabajar con el Método BMAD dentro del IDE Kiro.<br/><br/>Instala automáticamente los recursos de `.bmad-core` y copia los archivos de configuración y los hooks necesarios de `.kiro`. |

## Usage / Como Usar / Cómo Usar

Execute the following command in the root of your project:

Execute o seguinte comando na raiz do seu projeto:

Ejecute el siguiente comando en la raíz de su proyecto:

```
npx kiro-bmad-setup
```

### Autonomous Agents / Agentes Autônomos / Agentes Autónomos

English: This setup includes the gemini-auto autonomous agent (Gemini CLI). In Kiro chat, activate it with `#gemini-auto` and run commands like: `*help`, `*auto-analyze {target}`, `*auto-implement {task}`, `*auto-review {target}`, `*auto-optimize {target}`, `*project-status`, `*gemini-exec {prompt}`.

Português (BR): Esta configuração inclui o agente autônomo gemini-auto (Gemini CLI). No chat do Kiro, ative-o com `#gemini-auto` e execute: `*help`, `*auto-analyze {alvo}`, `*auto-implement {tarefa}`, `*auto-review {alvo}`, `*auto-optimize {alvo}`, `*project-status`, `*gemini-exec {prompt}`.

Español: Esta configuración incluye el agente autónomo gemini-auto (Gemini CLI). En el chat de Kiro, actívelo con `#gemini-auto` y ejecute: `*help`, `*auto-analyze {objetivo}`, `*auto-implement {tarea}`, `*auto-review {objetivo}`, `*auto-optimize {objetivo}`, `*project-status`, `*gemini-exec {prompt}`.

---

### Acknowledgements

This setup and workflow are powered by the amazing work of the following projects. A special thanks to them for helping boost developer productivity!

-   **[Kiro](https://github.com/kirodotdev/Kiro):** An innovative IDE that enhances development workflows.
-   **[BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD):** An open-source methodology for building better software.

---

### CHANGELOG

-   **en-US:** Fixed the extension of hook files, which prevented them from appearing in the KIRO panel. This is now corrected.
-   **pt-BR:** Corrigida a extensão dos arquivos de hook, que impedia que eles aparecessem no painel do KIRO. Agora já foi corrigido.
-   **es-ES:** Se corrigió la extensión de los archivos de hook, lo que impedía que aparecieran en el panel de KIRO. Ahora ya está corregido.
