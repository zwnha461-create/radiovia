# Radiovia — راديوفيا

منصة عربية لتعليم الأشعة التشخيصية (Diagnostic Radiography): أساسيات الأشعة، فيزياء الأشعة (FRCR Physics Notes)، اختبارات تشريح تجريبية، ودليل برامج DICOM/PACS.

**Pilot build** — 3 complete pages: Production of X-rays (physics), Chest CT Anatomy (scrollable CC0 CT slices with labels + test mode), DICOM/PACS viewers guide. Arabic by default with a full English toggle.

- Stack: Vite + vanilla JS (no framework), content in `src/content.js`, logic in `src/main.js`.
- Chest CT images: CC0, Mikael Häggström via Wikimedia Commons (`public/assets/chest/`).
- All written content is original wording; scientific facts follow standard FRCR physics topics.
- Publishing route: GitHub (master) → Bolt import (zero AI tokens) → Publish.
