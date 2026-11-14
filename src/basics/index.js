// Radiology Basics registry — text lessons, image-anatomy viewers and section quizzes.
import { LESSONS as MODALITIES } from './modalities.js';
import { LESSONS as PATH1 } from './pathology1.js';
import { LESSONS as PATH2 } from './pathology2.js';
import { QUIZZES } from './quizzes.js';

export const BASICS_CHAPTERS = [
  { key:'modalities', icon:'🧭', ar:'وسائط التصوير', en:'Imaging Modalities' },
  { key:'chest',      icon:'🫁', ar:'الصدر', en:'Chest' },
  { key:'abdomen',    icon:'🟠', ar:'البطن', en:'Abdomen' },
  { key:'head',       icon:'🧠', ar:'الرأس والعمود الفقري', en:'Head and Spine' },
];

const BY_CHAPTER = {
  modalities: MODALITIES,
  chest: PATH1.filter(l => l.chapter === 'chest'),
  abdomen: PATH2,
  head: PATH1.filter(l => l.chapter === 'head'),
};

// Image-anatomy viewers per chapter (null link = not built yet).
export const BASICS_VIEWERS = {
  chest:   { slug:'chest-anatomy',   link:'#/anatomy',          title:{ ar:'تشريح الصدر — CT', en:'Chest Anatomy — CT' } },
  abdomen: { slug:'abdomen-anatomy', link:'#/anatomy-abdomen',  title:{ ar:'تشريح البطن — CT', en:'Abdomen Anatomy — CT' } },
  head:    { slug:'head-anatomy',    link:'#/anatomy-head',     title:{ ar:'تشريح الرأس — CT', en:'Head Anatomy — CT' } },
};

export const basicsChapterLessons = key => BY_CHAPTER[key] || [];
export const basicsChapterQuiz = key => QUIZZES.find(q => q.chapter === key) || null;
export const ALL_BASICS_LESSONS = [...MODALITIES, ...PATH1, ...PATH2];
export const findBasicsLesson = slug => ALL_BASICS_LESSONS.find(l => l.slug === slug);
export const findQuiz = slug => QUIZZES.find(q => q.slug === slug);
export const basicsChapterOf = key => BASICS_CHAPTERS.find(c => c.key === key);
