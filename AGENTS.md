# Repository Guidelines

## Project Structure & Module Organization
Frontend assets live in `frontend/`, containing `resume.html`, `styles.css`, and `scripts.js` that Cloudflare serves from the GCS bucket. All resume data and builders are under `resume/`; TypeScript sources in `resume/src` render HTML/PDF artifacts into `resume/artifacts/`. Infrastructure configuration (Pulumi stacks, manifests, helper charts) resides in `infra/`, while `backend/gcs-proxy/` is a git submodule of the upstream https://github.com/domZippilli/gcs-proxy-cloud-run.git (deployed by `infra/gcp/gcs-proxy.ts`). A fresh clone leaves it empty until you run `git submodule update --init`; do not edit its code in this repository. Images for documentation and SEO live in `img/`.

## Build, Test, and Development Commands
- `yarn install` – installs the shared TypeScript toolchain (tsx, prettier).
- `yarn build:website-resume [--variant sre-devops-en]` – executes `resume/build-website-resume.ts`, writing `resume/artifacts/resume-<variant>.html` and, for the default variant, `resume/artifacts/resume.html`.
- `cd resume && make dev-build-website-resume` – builds the default website resume and copies it to `frontend/resume.html` for local preview.
- `yarn build:pdf` – calls `make build-pdf` inside `resume/`, cloning the JSON Resume theme, patching icons/fonts, and emitting PDFs named `sergei-chukh-resume-<variant>.pdf`.
- `yarn update:hh-resumes` – uploads resume variants to HeadHunter; requires `HH_TOKEN`.
- `pulumi preview --stack dev --cwd infra` – validates infra changes for the targeted stack. The Pulumi program runs through tsx (`main`: `index.ts`, `typescript: false`, `nodeargs: '--import tsx --no-warnings'`). Do not go back to ts-node: it cannot load TypeScript 7.

## Coding Style & Naming Conventions
TypeScript and JavaScript use 2-space indentation, single quotes, and trailing commas; no git hook formats code, so run `yarn prettier --write <paths>` on the files you touch before committing. Filenames stay kebab-case (`sre-support-engineer-en.ts`). CSS utility rules belong in `frontend/additional.css`, while `styles.css` holds base typography/layout. Resume variant IDs follow `<role>-<language>` and should match filenames in `resume/src/data/common/`.

## Testing Guidelines
The project relies on artifact inspection. After running `yarn build:website-resume`, inspect the generated HTML in `resume/artifacts/` to confirm layout and localization. For a local preview, run `cd resume && make dev-build-website-resume`, then open `frontend/resume.html` locally or via `python3 -m http.server`. For PDFs, spot-check fonts and page breaks in each regenerated file. When touching infrastructure, run targeted Pulumi previews. `backend/gcs-proxy/` is upstream code, so do not add tests or `npm test` scripts there; changes to it belong in the upstream repository.

## Security & Configuration Tips
Store temporary secrets in local `.env` files excluded by `.gitignore`. Keep Pulumi state backends consistent with the values referenced in `infra/` docs before running `pulumi up`. Images and PDFs contain personal information; verify sharing permissions before uploading generated artifacts outside this repository.

## Translation Preferences

- **Russian Technical Terminology:**
    - Prefer **"работа приложений"** instead of "рабочие нагрузки" when translating "workloads".
