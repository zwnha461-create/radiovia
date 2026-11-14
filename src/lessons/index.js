// Lessons registry — chapter files are written per chapter (see schema in each production brief).
import { LESSONS as BASIC } from './basic.js';
import { LESSONS as XRAY } from './xray.js';
import { LESSONS as CT } from './ct.js';
import { LESSONS as US } from './us.js';
import { LESSONS as MR } from './mr.js';
import { LESSONS as MR2 } from './mr2.js';
import { LESSONS as MOLECULAR } from './molecular.js';
import { LESSONS as DOSE } from './dose.js';
import { LESSONS as APPENDIX } from './appendix.js';

export const CHAPTERS = [
  { key:'basic',     icon:'⚛️', ar:'العلوم الأساسية', en:'Basic Science' },
  { key:'xray',      icon:'🩻', ar:'تصوير الأشعة السينية', en:'X-ray Imaging' },
  { key:'ct',        icon:'⭕', ar:'التصوير المقطعي — CT', en:'CT Imaging' },
  { key:'us',        icon:'🔊', ar:'الموجات فوق الصوتية', en:'Ultrasound Imaging' },
  { key:'mr',        icon:'🧲', ar:'الرنين المغناطيسي — MR', en:'MR Imaging' },
  { key:'molecular', icon:'☢️', ar:'التصوير الجزيئي والطب النووي', en:'Molecular Imaging' },
  { key:'dose',      icon:'🛡️', ar:'قياس الجرعات والحماية من الإشعاع', en:'Dosimetry, Protection & Legislation' },
];

// The pilot lesson keeps its rich custom page (animated tube + spectrum) in main.js.
export const FEATURED = {
  slug:'production-of-x-rays', chapter:'xray', featured:true,
  title:{ ar:'إنتاج الأشعة السينية', en:'Production of X-rays' },
};

const MR_ALL = [...MR, ...MR2];
const BY_CHAPTER = { basic:BASIC, xray:XRAY, ct:CT, us:US, mr:MR_ALL, molecular:MOLECULAR, dose:DOSE };

export const chapterLessons = key =>
  key === 'xray' ? [FEATURED, ...XRAY] : (BY_CHAPTER[key] || []);

export const ALL_LESSONS = [
  ...BASIC, FEATURED, ...XRAY, ...CT, ...US, ...MR_ALL, ...MOLECULAR, ...DOSE, ...APPENDIX,
];
export const APPENDIX_LESSONS = APPENDIX;
export const findLesson = slug => ALL_LESSONS.find(l => l.slug === slug);
export const chapterOf = key => CHAPTERS.find(c => c.key === key);
