// Extra anatomy viewer sets (abdomen, head) — real CC0 CT slices from Wikimedia Commons.
// Label coordinates are percentages measured from the LEFT edge and TOP of the image.
const abdLevel = i =>
  i === 0  ? { ar:'القلب وقواعد الرئتين', en:'Heart & lung bases' } :
  i <= 2   ? { ar:'قواعد الرئتين وقبة الكبد', en:'Lung bases & liver dome' } :
  i <= 5   ? { ar:'مستوى الكبد', en:'Liver level' } :
  i <= 8   ? { ar:'الكبد والطحال والبنكرياس', en:'Liver, spleen & pancreas' } :
  i <= 11  ? { ar:'مستوى الكليتين', en:'Kidneys level' } :
  i <= 15  ? { ar:'أسفل الكليتين والأمعاء', en:'Lower kidneys & bowel' } :
  i <= 17  ? { ar:'أسفل البطن', en:'Lower abdomen' } :
  i <= 23  ? { ar:'الحوض', en:'Pelvis' } :
  i <= 29  ? { ar:'مفصلا الورك', en:'Hip joints' } :
             { ar:'أعلى الفخذ', en:'Proximal femur' };

const headLevel = i =>
  i <= 1   ? { ar:'قمة الجمجمة', en:'Vertex' } :
  i <= 6   ? { ar:'أعلى الدماغ — Centrum semiovale', en:'High brain — centrum semiovale' } :
  i <= 9   ? { ar:'مستوى البطينين الجانبيين', en:'Lateral ventricles' } :
  i <= 11  ? { ar:'العقد القاعدية والبطين الثالث', en:'Basal ganglia & third ventricle' } :
  i <= 13  ? { ar:'المحجران والفصان الصدغيان', en:'Orbits & temporal lobes' } :
  i <= 17  ? { ar:'قاعدة الجمجمة والمخيخ', en:'Skull base & cerebellum' } :
             { ar:'الثقبة العظمى وأعلى الرقبة', en:'Foramen magnum & upper neck' };

export const ANATOMY_SETS = {
  abdomen: {
    slices: Array.from({length:32}, (_,i) => 1 + i*10),
    src: n => `assets/abdomen/slice-${String(n).padStart(3,'0')}.jpg`,
    levelOf: abdLevel,
    total: '320', head: 'CT Abdomen & Pelvis — Axial',
    title: { ar:'تشريح البطن والحوض — CT', en:'Abdomen & Pelvis Anatomy — CT' },
    intro: { ar:'مرّر عبر 32 مقطعًا محوريًا مختارة من سلسلة CT كاملة (320 مقطعًا) لبطن وحوض سليمين، من قواعد الرئتين حتى أعلى الفخذ. فعّل «وضع الاختبار» لإخفاء التسميات واختبار نفسك.',
             en:'Scroll through 32 axial slices sampled from a complete 320-slice CT series of a normal abdomen and pelvis, from the lung bases to the proximal femur. Turn on Test mode to hide the labels and test yourself.' },
    crumb: { ar:'الأساسيات ← البطن ← تشريح البطن', en:'Basics ← Abdomen ← Abdomen anatomy' },
    note:  { ar:'الصور: مقاطع CT حقيقية برخصة CC0 من Wikimedia Commons (سلسلة بطن وحوض طبيعية) — للتعليم فقط، وليست للتشخيص.',
             en:'Images: real CT slices, CC0 via Wikimedia Commons (normal abdomen and pelvis series) — for education only, not for diagnosis.' },
    labels: {
      4: [ // slice 41 — liver level
        {x:30,y:45, ar:'الكبد', en:'Liver'},
        {x:84,y:45, ar:'الطحال', en:'Spleen'},
        {x:72,y:33, ar:'المعدة', en:'Stomach'},
        {x:46,y:50, ar:'الأبهر', en:'Aorta'},
        {x:50,y:70, ar:'جسم الفقرة', en:'Vertebral body'},
      ],
      10: [ // slice 101 — kidneys level
        {x:26,y:52, ar:'الكلية اليمنى', en:'Right kidney'},
        {x:70,y:52, ar:'الكلية اليسرى', en:'Left kidney'},
        {x:54,y:47, ar:'الأبهر', en:'Aorta'},
        {x:45,y:47, ar:'الوريد الأجوف السفلي', en:'IVC'},
        {x:50,y:62, ar:'جسم الفقرة', en:'Vertebral body'},
      ],
      21: [ // slice 211 — pelvis
        {x:18,y:45, ar:'عظم الحرقفة', en:'Iliac bone'},
        {x:50,y:33, ar:'الأمعاء الدقيقة', en:'Small bowel'},
        {x:33,y:50, ar:'الأوعية الحرقفية', en:'Iliac vessels'},
        {x:50,y:74, ar:'العجز', en:'Sacrum'},
      ],
    },
  },
  head: {
    slices: Array.from({length:21}, (_,i) => 1 + i*2),
    src: n => `assets/head/slice-${String(n).padStart(3,'0')}.jpg`,
    levelOf: headLevel,
    total: '41', head: 'CT Brain — Axial',
    title: { ar:'تشريح الرأس — CT الدماغ', en:'Head Anatomy — Brain CT' },
    intro: { ar:'مرّر عبر 21 مقطعًا محوريًا من سلسلة CT كاملة (41 مقطعًا) لدماغ سليم، من قمة الجمجمة حتى أعلى الرقبة. فعّل «وضع الاختبار» لإخفاء التسميات واختبار نفسك.',
             en:'Scroll through 21 axial slices sampled from a complete 41-slice CT series of a normal brain, from the vertex to the upper neck. Turn on Test mode to hide the labels and test yourself.' },
    crumb: { ar:'الأساسيات ← الرأس والعمود الفقري ← تشريح الرأس', en:'Basics ← Head and Spine ← Head anatomy' },
    note:  { ar:'الصور: مقاطع CT حقيقية برخصة CC0 من Wikimedia Commons (سلسلة دماغ طبيعي) — للتعليم فقط، وليست للتشخيص.',
             en:'Images: real CT slices, CC0 via Wikimedia Commons (normal brain series) — for education only, not for diagnosis.' },
    labels: {
      8: [ // slice 17 — lateral ventricles
        {x:50,y:22, ar:'الفص الجبهي', en:'Frontal lobe'},
        {x:43,y:43, ar:'البطين الجانبي', en:'Lateral ventricle'},
        {x:82,y:40, ar:'العظم الجداري', en:'Parietal bone'},
        {x:50,y:82, ar:'الفص القذالي', en:'Occipital lobe'},
      ],
      12: [ // slice 25 — orbits & temporal lobes
        {x:70,y:28, ar:'كرة العين', en:'Eyeball (orbit)'},
        {x:50,y:30, ar:'الجيب الوتدي', en:'Sphenoid sinus'},
        {x:22,y:55, ar:'الفص الصدغي', en:'Temporal lobe'},
        {x:50,y:47, ar:'جذع الدماغ', en:'Brainstem'},
      ],
      16: [ // slice 35 — skull base & cerebellum
        {x:27,y:25, ar:'الجيب الفكي', en:'Maxillary sinus'},
        {x:18,y:59,  ar:'الخشاء', en:'Mastoid air cells'},
        {x:50,y:52, ar:'الجسر', en:'Pons'},
        {x:50,y:68, ar:'المخيخ', en:'Cerebellum'},
      ],
    },
  },
};
