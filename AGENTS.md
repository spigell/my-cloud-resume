# Repository Guidelines

## Project Structure & Module Organization
Frontend assets live in `frontend/`, containing `resume.html`, `styles.css`, and `scripts.js` that Cloudflare serves from the GCS bucket. All resume data and builders are under `resume/`; TypeScript sources in `resume/src` render HTML/PDF artifacts into `resume/artifacts/`. Infrastructure configuration (Pulumi stacks, manifests, helper charts) resides in `infra/`, while backend helpers sit in `backend/gcs-proxy/`. Images for documentation and SEO live in `img/`.

## Build, Test, and Development Commands
- `yarn install` – installs the shared TypeScript toolchain (ts-node, prettier, Husky hooks).
- `yarn build:website-resume [--variant sre-devops-en]` – executes `resume/build-website-resume.ts`, producing `resume/artifacts/resume.html` and copying it into `frontend/resume.html`.
- `yarn build:pdf` – calls `make build-pdf` inside `resume/`, cloning the JSON Resume theme, patching icons/fonts, and emitting PDFs named `sergei-chukh-resume-<variant>.pdf`.
- `yarn update:hh-resumes` – refreshes HeadHunter-specific blocks before rebuilding.
- `pulumi preview --stack dev --cwd infra` – validates infra changes for the targeted stack.

## Coding Style & Naming Conventions
TypeScript and JavaScript use 2-space indentation, single quotes, and trailing commas; run `npx prettier --write` (auto-triggered via `lint-staged` on `*.ts`). Filenames stay kebab-case (`sre-support-engineer-en.ts`). CSS utility rules belong in `frontend/additional.css`, while `styles.css` holds base typography/layout. Resume variant IDs follow `<role>-<language>` and should match filenames in `resume/src/data/common/`.

## Testing Guidelines
The project relies on artifact inspection. After running `yarn build:website-resume`, open `frontend/resume.html` locally or via `python3 -m http.server` to confirm layout and localization. For PDFs, spot-check fonts and page breaks in each regenerated file. When touching infrastructure or backend helpers, run targeted Pulumi previews and, if applicable, unit tests under the corresponding service directory (add `npm test` scripts when new logic appears).

## Security & Configuration Tips
Store temporary secrets in local `.env` files excluded by `.gitignore`. Keep Pulumi state backends consistent with the values referenced in `infra/` docs before running `pulumi up`. Images and PDFs contain personal information; verify sharing permissions before uploading generated artifacts outside this repository.

## Translation Preferences

- **Russian Technical Terminology:**
    - Prefer **"работа приложений"** instead of "рабочие нагрузки" when translating "workloads".
