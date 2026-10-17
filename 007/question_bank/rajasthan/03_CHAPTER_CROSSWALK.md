# 03 — RAS Subject / PYQ to Chapter 01–37 Crosswalk

This is a **macro-level taxonomy** derived from the structure declared in the project’s own Chapter 37 capstone. It is not a question-level tagging report. Individual questions cannot be honestly mapped until their original paper text has been ingested and reviewed.

| Chapter(s) | Project-defined domain | Likely Mains/Prelims tagging facets | Tagging rule |
|---|---|---|---|
| 01–05 | Ancient Rajasthan, prehistory and dynasties | Prehistoric sites, epigraphy, ancient/medieval rulers, chronology | Tag only when question text directly tests this domain; allow secondary tags for art/architecture. |
| 06–10 | Resistance, 1857, peasant/tribal movements, Prajamandals, integration | Modern history, freedom movement, tribal/peasant mobilization, unification | Distinguish events, people, place and dates as separate facets. |
| 11–17 | Art, architecture, painting, fairs, festivals, folk culture and GI tags | Heritage, schools of painting, performing arts, crafts, fairs | Use one primary topic and any supported secondary topic; don't tag by keyword alone. |
| 18–23 | Geography, geology, rivers, basins, irrigation, forests and minerals | Physical geography, climate, river basin, land/water, environment/resources | Distinguish general Indian geography from Rajasthan-specific geography. |
| 24–29 | Constitution, state polity, institutions, administration, accountability | Constitution, Governor/CM, High Court/RPSC, local government, RTI, service guarantee | Record article/section and the law version applicable to exam date when relevant. |
| 30 | Macro-economy, GSDP, budget and fiscal policy | GSDP/GSVA/NSDP, sectoral shares, budget, debt, inflation, SDGs | Capture reference year, prices (current/constant), base year and estimate vintage. |
| 31 | Agriculture, livestock and rural development | Crop outputs, agro-climatic zones, landholdings, livestock census, rural schemes | Include agricultural year / census vintage and distinguish scheme announcement from live eligibility. |
| 32 | Industry, MSME, minerals and exports | RIICO, RIPS, MSME law, industrial corridors, mining, export policy | Version policy and legislative amendments; flag outdated rates. |
| 33 | Infrastructure, energy, transport and EAPs | Power generation, renewables, roads, rail, airports, projects and lender | Record data cut-off date and distinguish total installed capacity from renewable capacity. |
| 34 | Social welfare, healthcare, education and poverty | Right to Health, insurance, pensions, nutrition, education, vulnerable groups | Track scheme version/eligibility/benefit value by financial year. |
| 35 | Sociology, tribes, customs and social movements | Census, ST population, PVTG, tribe profiles, customs, reform movements | Do not universalize ethnographic traits; attach source locality/time and qualification. |
| 36 | Sports, yoga and traditional games | Sports institutions, awards, athletes, rural games, Yoga Sutras | Verify achievements and award amounts against official/governing-body sources. |
| 37 | Capstone / integrated recall | Cross-domain questions, chronology and linked themes | Use as a secondary synthesis tag only; also tag the actual source chapter(s). |

## Recommended question-level schema

Each question record should have:

- `question_id`: stable ID such as `RAS-PRE-2024-Q001` or `RAS-MAIN-2024-P2-Q01`.
- `paper_record_id`: link to an item in `manifest.json`.
- `question_no_as_printed`: preserve the printed number, including skipped/deleted items.
- `language`, `question_text_verbatim`, `options_verbatim`, `final_key`, `key_status`.
- `primary_chapter`, `secondary_chapters`, `topic_tags`, `syllabus_unit`.
- `question_type`: fact / chronology / statement-combination / match-list / conceptual / analytical / essay / short answer.
- `source_page`, `source_pdf_sha256`, `extraction_method`, `human_verified`.
- `answer_confidence` and `notes` for withdrawn questions or revised keys.

**No question counts or topic frequency claims should be published until each paper has been fully extracted, pagination checked, and OCR/text extraction manually sampled.**
