<!--
For specialized templates, append to your PR URL:
  ?template=bug_fix.md   - Bug fixes
  ?template=feature.md   - New features
  ?template=docs.md      - Documentation
  ?template=refactor.md  - Code refactoring

Example: https://github.com/joaoferreira/portfolio-website/compare/develop...your-branch?expand=1&template=bug_fix.md
-->

# Pull Request

## 🔗 Related Issue

Closes #

---

## 📝 Summary

_What does this PR do and why?_

---

## 📏 Reviewability

- [ ] This PR has one clear purpose
- [ ] The linked issue is not labeled `triage`
- [ ] Unrelated bugs or improvements are tracked in separate issues/PRs
- [ ] Changes are tested locally
- [ ] If AI-assisted, I understand and can explain the generated changes

---

## 🏷️ Type of Change

- [ ] Bug fix
- [ ] Feature / Enhancement
- [ ] Documentation
- [ ] Refactor
- [ ] Chore (deps, CI, tooling)
- [ ] Other (describe below)

---

## 🧪 Verification

_List exact commands, screenshots, videos, logs, reproduction steps, or manual validation. If evidence is not feasible, explain why._

| Check                     | Command                  | Status |
|---------------------------|--------------------------|--------|
| Build successful          | `npm run build`          |        |
| Type checking             | `npx tsc --noEmit`       |        |
| Linting                   | `npm run lint`           |        |
| Dev server runs           | `npm run dev`            |        |
| Responsive design tested | Manual browser testing   |        |
| SEO metadata validated   | Check page source/metadata|        |

---

## ✅ Checklist

- [ ] Code follows project style guidelines (see CLAUDE.md)
- [ ] TypeScript types are properly defined
- [ ] Components are properly categorized (layout/ui)
- [ ] Client components have "use client" directive
- [ ] Pages include proper metadata for SEO
- [ ] Color palette matches design system
- [ ] Navigation includes all required links
- [ ] No console errors or warnings
- [ ] Documentation updated (if applicable)
- [ ] No secrets or credentials committed

---

## 🎨 Design Changes (if applicable)

- [ ] Color palette unchanged (#faf9f5, #000, #e3dacc)
- [ ] Typography uses Inter and Source Serif 4
- [ ] Container widths follow standards (max-w-3xl or max-w-6xl)
- [ ] Responsive design tested on mobile/tablet/desktop
- [ ] Accessibility standards maintained

---

## 📓 Notes (optional)

_Screenshots, design decisions, or additional context._