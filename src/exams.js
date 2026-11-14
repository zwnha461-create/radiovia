// Original mock anatomy exams for Radiovia — questions on our own CC0 CT slices.
// Each question: { set, frame (index into the set's slice list), x/y marker %, opts[4], a }
export const EXAMS = [
 {
  "id": "chest",
  "title": {
   "ar": "امتحان تشريح الصدر — CT",
   "en": "Chest Anatomy Exam — CT"
  },
  "desc": {
   "ar": "23 سؤالًا على مقاطع CT محورية لصدر سليم: سمِّ التركيب الذي تشير إليه النقطة.",
   "en": "23 questions on axial CT slices of a normal chest: name the structure at the marker."
  },
  "questions": [
   {
    "set": "chest",
    "frame": 2,
    "x": 53.5,
    "y": 40,
    "opts": [
     {
      "ar": "القصبة الهوائية",
      "en": "Trachea"
     },
     {
      "ar": "القصبة الرئيسية اليمنى",
      "en": "Right main bronchus"
     },
     {
      "ar": "تفرّع القصبة الهوائية — Carina",
      "en": "Carina"
     },
     {
      "ar": "الأبهر الصاعد",
      "en": "Ascending aorta"
     }
    ],
    "a": 0
   },
   {
    "set": "chest",
    "frame": 2,
    "x": 36,
    "y": 48,
    "opts": [
     {
      "ar": "قمة الرئة اليسرى",
      "en": "Left lung apex"
     },
     {
      "ar": "الرئة اليمنى",
      "en": "Right lung"
     },
     {
      "ar": "ضلع",
      "en": "Rib"
     },
     {
      "ar": "قمة الرئة اليمنى",
      "en": "Right lung apex"
     }
    ],
    "a": 3
   },
   {
    "set": "chest",
    "frame": 2,
    "x": 72,
    "y": 48,
    "opts": [
     {
      "ar": "الرئة اليسرى",
      "en": "Left lung"
     },
     {
      "ar": "ضلع",
      "en": "Rib"
     },
     {
      "ar": "قمة الرئة اليسرى",
      "en": "Left lung apex"
     },
     {
      "ar": "قمة الرئة اليمنى",
      "en": "Right lung apex"
     }
    ],
    "a": 2
   },
   {
    "set": "chest",
    "frame": 2,
    "x": 14,
    "y": 55,
    "opts": [
     {
      "ar": "عظم القص",
      "en": "Sternum"
     },
     {
      "ar": "لوح الكتف الأيمن",
      "en": "Right scapula"
     },
     {
      "ar": "ضلع",
      "en": "Rib"
     },
     {
      "ar": "جسم الفقرة",
      "en": "Vertebral body"
     }
    ],
    "a": 1
   },
   {
    "set": "chest",
    "frame": 2,
    "x": 55,
    "y": 56,
    "opts": [
     {
      "ar": "جسم الفقرة",
      "en": "Vertebral body"
     },
     {
      "ar": "عظم القص",
      "en": "Sternum"
     },
     {
      "ar": "الأبهر النازل",
      "en": "Descending aorta"
     },
     {
      "ar": "ضلع",
      "en": "Rib"
     }
    ],
    "a": 0
   },
   {
    "set": "chest",
    "frame": 7,
    "x": 55,
    "y": 23,
    "opts": [
     {
      "ar": "جسم الفقرة",
      "en": "Vertebral body"
     },
     {
      "ar": "ضلع",
      "en": "Rib"
     },
     {
      "ar": "القلب",
      "en": "Heart"
     },
     {
      "ar": "عظم القص",
      "en": "Sternum"
     }
    ],
    "a": 3
   },
   {
    "set": "chest",
    "frame": 7,
    "x": 55,
    "y": 38,
    "opts": [
     {
      "ar": "القلب",
      "en": "Heart"
     },
     {
      "ar": "القصبة الهوائية",
      "en": "Trachea"
     },
     {
      "ar": "الأبهر الصاعد",
      "en": "Ascending aorta"
     },
     {
      "ar": "الأبهر النازل",
      "en": "Descending aorta"
     }
    ],
    "a": 2
   },
   {
    "set": "chest",
    "frame": 7,
    "x": 54.5,
    "y": 48,
    "opts": [
     {
      "ar": "القصبة الرئيسية اليسرى",
      "en": "Left main bronchus"
     },
     {
      "ar": "تفرّع القصبة الهوائية — Carina",
      "en": "Carina"
     },
     {
      "ar": "القصبة الهوائية",
      "en": "Trachea"
     },
     {
      "ar": "القصبة الرئيسية اليمنى",
      "en": "Right main bronchus"
     }
    ],
    "a": 1
   },
   {
    "set": "chest",
    "frame": 7,
    "x": 61,
    "y": 56,
    "opts": [
     {
      "ar": "الأبهر النازل",
      "en": "Descending aorta"
     },
     {
      "ar": "الأبهر الصاعد",
      "en": "Ascending aorta"
     },
     {
      "ar": "جسم الفقرة",
      "en": "Vertebral body"
     },
     {
      "ar": "تفرّع القصبة الهوائية — Carina",
      "en": "Carina"
     }
    ],
    "a": 0
   },
   {
    "set": "chest",
    "frame": 7,
    "x": 34,
    "y": 46,
    "opts": [
     {
      "ar": "الرئة اليسرى",
      "en": "Left lung"
     },
     {
      "ar": "قمة الرئة اليمنى",
      "en": "Right lung apex"
     },
     {
      "ar": "القلب",
      "en": "Heart"
     },
     {
      "ar": "الرئة اليمنى",
      "en": "Right lung"
     }
    ],
    "a": 3
   },
   {
    "set": "chest",
    "frame": 7,
    "x": 74,
    "y": 46,
    "opts": [
     {
      "ar": "قمة الرئة اليسرى",
      "en": "Left lung apex"
     },
     {
      "ar": "القلب",
      "en": "Heart"
     },
     {
      "ar": "الرئة اليسرى",
      "en": "Left lung"
     },
     {
      "ar": "الرئة اليمنى",
      "en": "Right lung"
     }
    ],
    "a": 2
   },
   {
    "set": "chest",
    "frame": 7,
    "x": 55,
    "y": 63.5,
    "opts": [
     {
      "ar": "ضلع",
      "en": "Rib"
     },
     {
      "ar": "جسم الفقرة",
      "en": "Vertebral body"
     },
     {
      "ar": "عظم القص",
      "en": "Sternum"
     },
     {
      "ar": "الأبهر النازل",
      "en": "Descending aorta"
     }
    ],
    "a": 1
   },
   {
    "set": "chest",
    "frame": 12,
    "x": 58.6,
    "y": 18.5,
    "opts": [
     {
      "ar": "عظم القص",
      "en": "Sternum"
     },
     {
      "ar": "جسم الفقرة",
      "en": "Vertebral body"
     },
     {
      "ar": "ضلع",
      "en": "Rib"
     },
     {
      "ar": "القلب",
      "en": "Heart"
     }
    ],
    "a": 0
   },
   {
    "set": "chest",
    "frame": 12,
    "x": 58.6,
    "y": 35,
    "opts": [
     {
      "ar": "الأبهر الصاعد",
      "en": "Ascending aorta"
     },
     {
      "ar": "الكبد",
      "en": "Liver"
     },
     {
      "ar": "عظم القص",
      "en": "Sternum"
     },
     {
      "ar": "القلب",
      "en": "Heart"
     }
    ],
    "a": 3
   },
   {
    "set": "chest",
    "frame": 12,
    "x": 36,
    "y": 46,
    "opts": [
     {
      "ar": "قاعدة الرئة اليمنى",
      "en": "Right lung base"
     },
     {
      "ar": "القلب",
      "en": "Heart"
     },
     {
      "ar": "الرئة اليمنى",
      "en": "Right lung"
     },
     {
      "ar": "الرئة اليسرى",
      "en": "Left lung"
     }
    ],
    "a": 2
   },
   {
    "set": "chest",
    "frame": 12,
    "x": 80,
    "y": 46,
    "opts": [
     {
      "ar": "القلب",
      "en": "Heart"
     },
     {
      "ar": "الرئة اليسرى",
      "en": "Left lung"
     },
     {
      "ar": "الرئة اليمنى",
      "en": "Right lung"
     },
     {
      "ar": "قمة الرئة اليسرى",
      "en": "Left lung apex"
     }
    ],
    "a": 1
   },
   {
    "set": "chest",
    "frame": 12,
    "x": 58.6,
    "y": 63.5,
    "opts": [
     {
      "ar": "جسم الفقرة",
      "en": "Vertebral body"
     },
     {
      "ar": "عظم القص",
      "en": "Sternum"
     },
     {
      "ar": "الأبهر النازل",
      "en": "Descending aorta"
     },
     {
      "ar": "ضلع",
      "en": "Rib"
     }
    ],
    "a": 0
   },
   {
    "set": "chest",
    "frame": 9,
    "x": 45,
    "y": 49,
    "opts": [
     {
      "ar": "القصبة الرئيسية اليسرى",
      "en": "Left main bronchus"
     },
     {
      "ar": "القصبة الهوائية",
      "en": "Trachea"
     },
     {
      "ar": "تفرّع القصبة الهوائية — Carina",
      "en": "Carina"
     },
     {
      "ar": "القصبة الرئيسية اليمنى",
      "en": "Right main bronchus"
     }
    ],
    "a": 3
   },
   {
    "set": "chest",
    "frame": 9,
    "x": 58,
    "y": 48,
    "opts": [
     {
      "ar": "القصبة الهوائية",
      "en": "Trachea"
     },
     {
      "ar": "تفرّع القصبة الهوائية — Carina",
      "en": "Carina"
     },
     {
      "ar": "القصبة الرئيسية اليسرى",
      "en": "Left main bronchus"
     },
     {
      "ar": "القصبة الرئيسية اليمنى",
      "en": "Right main bronchus"
     }
    ],
    "a": 2
   },
   {
    "set": "chest",
    "frame": 9,
    "x": 19,
    "y": 45,
    "opts": [
     {
      "ar": "جسم الفقرة",
      "en": "Vertebral body"
     },
     {
      "ar": "ضلع",
      "en": "Rib"
     },
     {
      "ar": "لوح الكتف الأيمن",
      "en": "Right scapula"
     },
     {
      "ar": "عظم القص",
      "en": "Sternum"
     }
    ],
    "a": 1
   },
   {
    "set": "chest",
    "frame": 16,
    "x": 35,
    "y": 45,
    "opts": [
     {
      "ar": "الكبد",
      "en": "Liver"
     },
     {
      "ar": "القلب",
      "en": "Heart"
     },
     {
      "ar": "الطحال",
      "en": "Spleen"
     },
     {
      "ar": "المعدة",
      "en": "Stomach"
     }
    ],
    "a": 0
   },
   {
    "set": "chest",
    "frame": 16,
    "x": 46,
    "y": 57,
    "opts": [
     {
      "ar": "الأبهر الصاعد",
      "en": "Ascending aorta"
     },
     {
      "ar": "جسم الفقرة",
      "en": "Vertebral body"
     },
     {
      "ar": "الوريد الأجوف السفلي",
      "en": "Inferior vena cava"
     },
     {
      "ar": "الأبهر النازل",
      "en": "Descending aorta"
     }
    ],
    "a": 3
   },
   {
    "set": "chest",
    "frame": 16,
    "x": 30,
    "y": 68,
    "opts": [
     {
      "ar": "الكبد",
      "en": "Liver"
     },
     {
      "ar": "القلب",
      "en": "Heart"
     },
     {
      "ar": "قاعدة الرئة اليمنى",
      "en": "Right lung base"
     },
     {
      "ar": "الرئة اليمنى",
      "en": "Right lung"
     }
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "abdomen",
  "title": {
   "ar": "امتحان تشريح البطن والحوض — CT",
   "en": "Abdomen & Pelvis Anatomy Exam — CT"
  },
  "desc": {
   "ar": "23 سؤالًا على مقاطع CT محورية لبطن وحوض سليمين: سمِّ التركيب الذي تشير إليه النقطة.",
   "en": "23 questions on axial CT slices of a normal abdomen and pelvis: name the structure at the marker."
  },
  "questions": [
   {
    "set": "abdomen",
    "frame": 4,
    "x": 30,
    "y": 45,
    "opts": [
     {
      "ar": "القلب",
      "en": "Heart"
     },
     {
      "ar": "الكبد",
      "en": "Liver"
     },
     {
      "ar": "الطحال",
      "en": "Spleen"
     },
     {
      "ar": "المعدة",
      "en": "Stomach"
     }
    ],
    "a": 1
   },
   {
    "set": "abdomen",
    "frame": 4,
    "x": 84,
    "y": 45,
    "opts": [
     {
      "ar": "الطحال",
      "en": "Spleen"
     },
     {
      "ar": "الكبد",
      "en": "Liver"
     },
     {
      "ar": "الكلية اليسرى",
      "en": "Left kidney"
     },
     {
      "ar": "المعدة",
      "en": "Stomach"
     }
    ],
    "a": 0
   },
   {
    "set": "abdomen",
    "frame": 4,
    "x": 72,
    "y": 33,
    "opts": [
     {
      "ar": "الطحال",
      "en": "Spleen"
     },
     {
      "ar": "الأمعاء الدقيقة",
      "en": "Small bowel"
     },
     {
      "ar": "الكبد",
      "en": "Liver"
     },
     {
      "ar": "المعدة",
      "en": "Stomach"
     }
    ],
    "a": 3
   },
   {
    "set": "abdomen",
    "frame": 4,
    "x": 46,
    "y": 50,
    "opts": [
     {
      "ar": "جسم الفقرة",
      "en": "Vertebral body"
     },
     {
      "ar": "الشريان الحرقفي المشترك",
      "en": "Common iliac artery"
     },
     {
      "ar": "الأبهر البطني",
      "en": "Abdominal aorta"
     },
     {
      "ar": "الوريد الأجوف السفلي",
      "en": "Inferior vena cava"
     }
    ],
    "a": 2
   },
   {
    "set": "abdomen",
    "frame": 4,
    "x": 50,
    "y": 70,
    "opts": [
     {
      "ar": "عظم القص",
      "en": "Sternum"
     },
     {
      "ar": "جسم الفقرة",
      "en": "Vertebral body"
     },
     {
      "ar": "العجز",
      "en": "Sacrum"
     },
     {
      "ar": "الأبهر البطني",
      "en": "Abdominal aorta"
     }
    ],
    "a": 1
   },
   {
    "set": "abdomen",
    "frame": 6,
    "x": 82,
    "y": 48,
    "opts": [
     {
      "ar": "الطحال",
      "en": "Spleen"
     },
     {
      "ar": "الكبد",
      "en": "Liver"
     },
     {
      "ar": "الكلية اليسرى",
      "en": "Left kidney"
     },
     {
      "ar": "المعدة",
      "en": "Stomach"
     }
    ],
    "a": 0
   },
   {
    "set": "abdomen",
    "frame": 6,
    "x": 48,
    "y": 42,
    "opts": [
     {
      "ar": "الوريد الأجوف السفلي",
      "en": "Inferior vena cava"
     },
     {
      "ar": "جسم الفقرة",
      "en": "Vertebral body"
     },
     {
      "ar": "الشريان الحرقفي المشترك",
      "en": "Common iliac artery"
     },
     {
      "ar": "الأبهر البطني",
      "en": "Abdominal aorta"
     }
    ],
    "a": 3
   },
   {
    "set": "abdomen",
    "frame": 6,
    "x": 28,
    "y": 40,
    "opts": [
     {
      "ar": "الكلية اليمنى",
      "en": "Right kidney"
     },
     {
      "ar": "المعدة",
      "en": "Stomach"
     },
     {
      "ar": "الكبد",
      "en": "Liver"
     },
     {
      "ar": "الطحال",
      "en": "Spleen"
     }
    ],
    "a": 2
   },
   {
    "set": "abdomen",
    "frame": 10,
    "x": 26,
    "y": 52,
    "opts": [
     {
      "ar": "العضلة القطنية اليمنى",
      "en": "Right psoas muscle"
     },
     {
      "ar": "الكلية اليمنى",
      "en": "Right kidney"
     },
     {
      "ar": "الكلية اليسرى",
      "en": "Left kidney"
     },
     {
      "ar": "الكبد",
      "en": "Liver"
     }
    ],
    "a": 1
   },
   {
    "set": "abdomen",
    "frame": 10,
    "x": 70,
    "y": 52,
    "opts": [
     {
      "ar": "الكلية اليسرى",
      "en": "Left kidney"
     },
     {
      "ar": "الكلية اليمنى",
      "en": "Right kidney"
     },
     {
      "ar": "الطحال",
      "en": "Spleen"
     },
     {
      "ar": "العضلة القطنية اليمنى",
      "en": "Right psoas muscle"
     }
    ],
    "a": 0
   },
   {
    "set": "abdomen",
    "frame": 10,
    "x": 54,
    "y": 47,
    "opts": [
     {
      "ar": "الوريد الأجوف السفلي",
      "en": "Inferior vena cava"
     },
     {
      "ar": "جسم الفقرة",
      "en": "Vertebral body"
     },
     {
      "ar": "الشريان الحرقفي المشترك",
      "en": "Common iliac artery"
     },
     {
      "ar": "الأبهر البطني",
      "en": "Abdominal aorta"
     }
    ],
    "a": 3
   },
   {
    "set": "abdomen",
    "frame": 10,
    "x": 45,
    "y": 47,
    "opts": [
     {
      "ar": "الكبد",
      "en": "Liver"
     },
     {
      "ar": "الأوعية الحرقفية",
      "en": "Iliac vessels"
     },
     {
      "ar": "الوريد الأجوف السفلي",
      "en": "Inferior vena cava"
     },
     {
      "ar": "الأبهر البطني",
      "en": "Abdominal aorta"
     }
    ],
    "a": 2
   },
   {
    "set": "abdomen",
    "frame": 10,
    "x": 50,
    "y": 62,
    "opts": [
     {
      "ar": "عظم القص",
      "en": "Sternum"
     },
     {
      "ar": "جسم الفقرة",
      "en": "Vertebral body"
     },
     {
      "ar": "العجز",
      "en": "Sacrum"
     },
     {
      "ar": "الأبهر البطني",
      "en": "Abdominal aorta"
     }
    ],
    "a": 1
   },
   {
    "set": "abdomen",
    "frame": 15,
    "x": 35,
    "y": 58,
    "opts": [
     {
      "ar": "العضلة القطنية اليمنى",
      "en": "Right psoas muscle"
     },
     {
      "ar": "الكلية اليمنى",
      "en": "Right kidney"
     },
     {
      "ar": "عظم الحرقفة",
      "en": "Iliac bone"
     },
     {
      "ar": "جسم الفقرة",
      "en": "Vertebral body"
     }
    ],
    "a": 0
   },
   {
    "set": "abdomen",
    "frame": 15,
    "x": 47,
    "y": 40,
    "opts": [
     {
      "ar": "الأبهر البطني",
      "en": "Abdominal aorta"
     },
     {
      "ar": "الوريد الأجوف السفلي",
      "en": "Inferior vena cava"
     },
     {
      "ar": "الأوعية الحرقفية",
      "en": "Iliac vessels"
     },
     {
      "ar": "الشريان الحرقفي المشترك",
      "en": "Common iliac artery"
     }
    ],
    "a": 3
   },
   {
    "set": "abdomen",
    "frame": 21,
    "x": 18,
    "y": 45,
    "opts": [
     {
      "ar": "رأس عظم الفخذ",
      "en": "Femoral head"
     },
     {
      "ar": "جسم الفقرة",
      "en": "Vertebral body"
     },
     {
      "ar": "عظم الحرقفة",
      "en": "Iliac bone"
     },
     {
      "ar": "العجز",
      "en": "Sacrum"
     }
    ],
    "a": 2
   },
   {
    "set": "abdomen",
    "frame": 21,
    "x": 50,
    "y": 33,
    "opts": [
     {
      "ar": "الطحال",
      "en": "Spleen"
     },
     {
      "ar": "الأمعاء الدقيقة",
      "en": "Small bowel"
     },
     {
      "ar": "المعدة",
      "en": "Stomach"
     },
     {
      "ar": "المثانة",
      "en": "Bladder"
     }
    ],
    "a": 1
   },
   {
    "set": "abdomen",
    "frame": 21,
    "x": 33,
    "y": 50,
    "opts": [
     {
      "ar": "الأوعية الحرقفية",
      "en": "Iliac vessels"
     },
     {
      "ar": "الشريان الحرقفي المشترك",
      "en": "Common iliac artery"
     },
     {
      "ar": "الوريد الأجوف السفلي",
      "en": "Inferior vena cava"
     },
     {
      "ar": "الأبهر البطني",
      "en": "Abdominal aorta"
     }
    ],
    "a": 0
   },
   {
    "set": "abdomen",
    "frame": 21,
    "x": 50,
    "y": 74,
    "opts": [
     {
      "ar": "جسم الفقرة",
      "en": "Vertebral body"
     },
     {
      "ar": "العصعص",
      "en": "Coccyx"
     },
     {
      "ar": "عظم الحرقفة",
      "en": "Iliac bone"
     },
     {
      "ar": "العجز",
      "en": "Sacrum"
     }
    ],
    "a": 3
   },
   {
    "set": "abdomen",
    "frame": 25,
    "x": 26,
    "y": 58,
    "opts": [
     {
      "ar": "عظم الحرقفة",
      "en": "Iliac bone"
     },
     {
      "ar": "العجز",
      "en": "Sacrum"
     },
     {
      "ar": "رأس عظم الفخذ",
      "en": "Femoral head"
     },
     {
      "ar": "المدور الكبير",
      "en": "Greater trochanter"
     }
    ],
    "a": 2
   },
   {
    "set": "abdomen",
    "frame": 25,
    "x": 50,
    "y": 55,
    "opts": [
     {
      "ar": "المعدة",
      "en": "Stomach"
     },
     {
      "ar": "المثانة",
      "en": "Bladder"
     },
     {
      "ar": "الأمعاء الدقيقة",
      "en": "Small bowel"
     },
     {
      "ar": "العجز",
      "en": "Sacrum"
     }
    ],
    "a": 1
   },
   {
    "set": "abdomen",
    "frame": 25,
    "x": 17,
    "y": 68,
    "opts": [
     {
      "ar": "المدور الكبير",
      "en": "Greater trochanter"
     },
     {
      "ar": "رأس عظم الفخذ",
      "en": "Femoral head"
     },
     {
      "ar": "عظم الحرقفة",
      "en": "Iliac bone"
     },
     {
      "ar": "العصعص",
      "en": "Coccyx"
     }
    ],
    "a": 0
   },
   {
    "set": "abdomen",
    "frame": 25,
    "x": 50,
    "y": 88,
    "opts": [
     {
      "ar": "العجز",
      "en": "Sacrum"
     },
     {
      "ar": "جسم الفقرة",
      "en": "Vertebral body"
     },
     {
      "ar": "المثانة",
      "en": "Bladder"
     },
     {
      "ar": "العصعص",
      "en": "Coccyx"
     }
    ],
    "a": 3
   }
  ]
 },
 {
  "id": "head",
  "title": {
   "ar": "امتحان تشريح الرأس — CT",
   "en": "Head Anatomy Exam — CT"
  },
  "desc": {
   "ar": "17 سؤالًا على مقاطع CT محورية لدماغ سليم: سمِّ التركيب الذي تشير إليه النقطة.",
   "en": "17 questions on axial CT slices of a normal brain: name the structure at the marker."
  },
  "questions": [
   {
    "set": "head",
    "frame": 4,
    "x": 50,
    "y": 45,
    "opts": [
     {
      "ar": "البطين الجانبي",
      "en": "Lateral ventricle"
     },
     {
      "ar": "المخيخ",
      "en": "Cerebellum"
     },
     {
      "ar": "المادة البيضاء — Centrum semiovale",
      "en": "Centrum semiovale"
     },
     {
      "ar": "الفص الجبهي",
      "en": "Frontal lobe"
     }
    ],
    "a": 2
   },
   {
    "set": "head",
    "frame": 4,
    "x": 50,
    "y": 25,
    "opts": [
     {
      "ar": "المادة البيضاء — Centrum semiovale",
      "en": "Centrum semiovale"
     },
     {
      "ar": "الفص الجبهي",
      "en": "Frontal lobe"
     },
     {
      "ar": "الفص القذالي",
      "en": "Occipital lobe"
     },
     {
      "ar": "الفص الصدغي",
      "en": "Temporal lobe"
     }
    ],
    "a": 1
   },
   {
    "set": "head",
    "frame": 4,
    "x": 74,
    "y": 30,
    "opts": [
     {
      "ar": "العظم الجداري",
      "en": "Parietal bone"
     },
     {
      "ar": "الجيب الجبهي",
      "en": "Frontal sinus"
     },
     {
      "ar": "خلايا الخشاء الهوائية",
      "en": "Mastoid air cells"
     },
     {
      "ar": "العظم الصخري من الصدغي",
      "en": "Petrous part of temporal bone"
     }
    ],
    "a": 0
   },
   {
    "set": "head",
    "frame": 8,
    "x": 43,
    "y": 43,
    "opts": [
     {
      "ar": "البطين الثالث",
      "en": "Third ventricle"
     },
     {
      "ar": "المادة البيضاء — Centrum semiovale",
      "en": "Centrum semiovale"
     },
     {
      "ar": "جذع الدماغ",
      "en": "Brainstem"
     },
     {
      "ar": "البطين الجانبي",
      "en": "Lateral ventricle"
     }
    ],
    "a": 3
   },
   {
    "set": "head",
    "frame": 8,
    "x": 82,
    "y": 40,
    "opts": [
     {
      "ar": "خلايا الخشاء الهوائية",
      "en": "Mastoid air cells"
     },
     {
      "ar": "العظم الصخري من الصدغي",
      "en": "Petrous part of temporal bone"
     },
     {
      "ar": "العظم الجداري",
      "en": "Parietal bone"
     },
     {
      "ar": "الجيب الجبهي",
      "en": "Frontal sinus"
     }
    ],
    "a": 2
   },
   {
    "set": "head",
    "frame": 8,
    "x": 50,
    "y": 82,
    "opts": [
     {
      "ar": "الفص الصدغي",
      "en": "Temporal lobe"
     },
     {
      "ar": "الفص القذالي",
      "en": "Occipital lobe"
     },
     {
      "ar": "الفص الجبهي",
      "en": "Frontal lobe"
     },
     {
      "ar": "المخيخ",
      "en": "Cerebellum"
     }
    ],
    "a": 1
   },
   {
    "set": "head",
    "frame": 11,
    "x": 50,
    "y": 52,
    "opts": [
     {
      "ar": "البطين الثالث",
      "en": "Third ventricle"
     },
     {
      "ar": "البطين الجانبي",
      "en": "Lateral ventricle"
     },
     {
      "ar": "جذع الدماغ",
      "en": "Brainstem"
     },
     {
      "ar": "الجيب الوتدي",
      "en": "Sphenoid sinus"
     }
    ],
    "a": 0
   },
   {
    "set": "head",
    "frame": 11,
    "x": 46,
    "y": 13,
    "opts": [
     {
      "ar": "الجيب الوتدي",
      "en": "Sphenoid sinus"
     },
     {
      "ar": "الجيب الفكي",
      "en": "Maxillary sinus"
     },
     {
      "ar": "كرة العين",
      "en": "Eyeball"
     },
     {
      "ar": "الجيب الجبهي",
      "en": "Frontal sinus"
     }
    ],
    "a": 3
   },
   {
    "set": "head",
    "frame": 11,
    "x": 20,
    "y": 45,
    "opts": [
     {
      "ar": "الفص القذالي",
      "en": "Occipital lobe"
     },
     {
      "ar": "المخيخ",
      "en": "Cerebellum"
     },
     {
      "ar": "الفص الصدغي",
      "en": "Temporal lobe"
     },
     {
      "ar": "الفص الجبهي",
      "en": "Frontal lobe"
     }
    ],
    "a": 2
   },
   {
    "set": "head",
    "frame": 12,
    "x": 70,
    "y": 28,
    "opts": [
     {
      "ar": "خلايا الخشاء الهوائية",
      "en": "Mastoid air cells"
     },
     {
      "ar": "كرة العين",
      "en": "Eyeball"
     },
     {
      "ar": "الجيب الجبهي",
      "en": "Frontal sinus"
     },
     {
      "ar": "الجيب الوتدي",
      "en": "Sphenoid sinus"
     }
    ],
    "a": 1
   },
   {
    "set": "head",
    "frame": 12,
    "x": 50,
    "y": 30,
    "opts": [
     {
      "ar": "الجيب الوتدي",
      "en": "Sphenoid sinus"
     },
     {
      "ar": "الجيب الجبهي",
      "en": "Frontal sinus"
     },
     {
      "ar": "الجيب الفكي",
      "en": "Maxillary sinus"
     },
     {
      "ar": "البطين الثالث",
      "en": "Third ventricle"
     }
    ],
    "a": 0
   },
   {
    "set": "head",
    "frame": 12,
    "x": 50,
    "y": 47,
    "opts": [
     {
      "ar": "الجسر — Pons",
      "en": "Pons"
     },
     {
      "ar": "البطين الثالث",
      "en": "Third ventricle"
     },
     {
      "ar": "المخيخ",
      "en": "Cerebellum"
     },
     {
      "ar": "جذع الدماغ",
      "en": "Brainstem"
     }
    ],
    "a": 3
   },
   {
    "set": "head",
    "frame": 14,
    "x": 25,
    "y": 48,
    "opts": [
     {
      "ar": "العظم الجداري",
      "en": "Parietal bone"
     },
     {
      "ar": "الجيب الوتدي",
      "en": "Sphenoid sinus"
     },
     {
      "ar": "العظم الصخري من الصدغي",
      "en": "Petrous part of temporal bone"
     },
     {
      "ar": "خلايا الخشاء الهوائية",
      "en": "Mastoid air cells"
     }
    ],
    "a": 2
   },
   {
    "set": "head",
    "frame": 14,
    "x": 50,
    "y": 52,
    "opts": [
     {
      "ar": "البطين الثالث",
      "en": "Third ventricle"
     },
     {
      "ar": "الجسر — Pons",
      "en": "Pons"
     },
     {
      "ar": "جذع الدماغ",
      "en": "Brainstem"
     },
     {
      "ar": "المخيخ",
      "en": "Cerebellum"
     }
    ],
    "a": 1
   },
   {
    "set": "head",
    "frame": 14,
    "x": 50,
    "y": 62,
    "opts": [
     {
      "ar": "المخيخ",
      "en": "Cerebellum"
     },
     {
      "ar": "الفص القذالي",
      "en": "Occipital lobe"
     },
     {
      "ar": "الجسر — Pons",
      "en": "Pons"
     },
     {
      "ar": "الفص الصدغي",
      "en": "Temporal lobe"
     }
    ],
    "a": 0
   },
   {
    "set": "head",
    "frame": 16,
    "x": 27,
    "y": 25,
    "opts": [
     {
      "ar": "الجيب الجبهي",
      "en": "Frontal sinus"
     },
     {
      "ar": "الجيب الوتدي",
      "en": "Sphenoid sinus"
     },
     {
      "ar": "كرة العين",
      "en": "Eyeball"
     },
     {
      "ar": "الجيب الفكي",
      "en": "Maxillary sinus"
     }
    ],
    "a": 3
   },
   {
    "set": "head",
    "frame": 16,
    "x": 18,
    "y": 59,
    "opts": [
     {
      "ar": "العظم الجداري",
      "en": "Parietal bone"
     },
     {
      "ar": "الجيب الفكي",
      "en": "Maxillary sinus"
     },
     {
      "ar": "خلايا الخشاء الهوائية",
      "en": "Mastoid air cells"
     },
     {
      "ar": "العظم الصخري من الصدغي",
      "en": "Petrous part of temporal bone"
     }
    ],
    "a": 2
   }
  ]
 }
];
