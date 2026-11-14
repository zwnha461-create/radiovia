export const LESSONS = [
{
  slug: "introduction-to-molecular-imaging",
  chapter: "molecular",
  title: { ar: "مدخل إلى التصوير الجزيئي", en: "Introduction to molecular imaging" },
  intro: {
    ar: "التصوير الجزيئي يرصد العمليات الحيوية داخل الجسم على مستوى الجزيئات والخلايا، بدل الاكتفاء برسم البنية التشريحية. يعتمد غالبًا على مادة ترتبط بهدف جزيئي محدد مثل مستقبِل (receptor) معيّن، فيصبح توزّعها مرآةً لوظيفة فسيولوجية يمكن تصويرها وقياسها.",
    en: "Molecular imaging visualises biological processes at the molecular and cellular level rather than anatomy alone. It usually relies on a probe that binds a specific molecular target, such as a receptor, so that its distribution reflects a physiological function that can be imaged and measured."
  },
  sections: [
    {
      h: { ar: "الفكرة الأساسية", en: "The basic idea" },
      paras: [
        {
          ar: "في التصوير الجزيئي تُستخدم مادة مصمَّمة لتلتصق بجزيء هدفي داخل الجسم، كأن ترتبط بمستقبِل على سطح خلية أو تُحتجز داخل مسار أيضي معيّن. وبقياس مكان هذه المادة وكميتها نحصل على معلومات عن وظيفة النسيج وحالته، لا عن شكله فقط.",
          en: "In molecular imaging a probe is designed to attach to a target molecule in the body, for example by binding a cell-surface receptor or becoming trapped in a metabolic pathway. Measuring where the probe goes, and how much accumulates, reveals tissue function rather than just structure."
        },
        {
          ar: "لهذا السبب قد يكشف التصوير الجزيئي تغيّرات مرضية مبكرة تسبق أي تغيّر تشريحي مرئي، لأن الخلل الوظيفي يظهر عادة قبل أن يتغيّر حجم العضو أو شكله.",
          en: "This is why molecular imaging can reveal disease early: functional abnormality often appears before any visible change in the size or shape of an organ."
        }
      ]
    },
    {
      h: { ar: "التقسيم العام: نووي وغير نووي", en: "Nuclear and non-nuclear branches" },
      paras: [
        {
          ar: "ينقسم التصوير الجزيئي إلى فرعين كبيرين: تصوير غير نووي لا يستخدم مواد مشعة (مثل الموجات فوق الصوتية المعزَّزة بالتباين والتصوير البصري)، وتصوير نووي يستخدم مواد مشعة. ويركّز هذا الفصل في معظمه على الفرع النووي، أي التصوير بالنويدات المشعة (radionuclide imaging).",
          en: "Molecular imaging divides into a non-nuclear branch, which uses no radioactivity (for example contrast-enhanced ultrasound and optical imaging), and a nuclear branch based on radioactive tracers. This chapter concentrates mainly on the nuclear branch, also called radionuclide imaging."
        }
      ],
      table: {
        head: [
          { ar: "الفرع", en: "Branch" },
          { ar: "كيف تُقاس المادة؟", en: "How is the tracer measured?" },
          { ar: "مثال", en: "Example" }
        ],
        rows: [
          [
            { ar: "نووي داخل الجسم (in vivo)", en: "Nuclear, in vivo" },
            { ar: "تُقاس النشاطية الإشعاعية وهي تغادر جسم المريض وتتكوّن صورة", en: "Activity is measured as it leaves the body and an image is formed" },
            { ar: "مسح العظام بكاميرا gamma", en: "Bone scan with a gamma camera" }
          ],
          [
            { ar: "نووي مخبري (in vitro)", en: "Nuclear, in vitro" },
            { ar: "تُؤخذ عينات من أنسجة أو سوائل المريض وتُقاس نشاطيتها خارج الجسم، دون صورة", en: "Samples of tissue or fluid are taken and their activity is counted outside the body; no image results" },
            { ar: "قياس معدل الترشيح الكبيبي (GFR) بعينات دم", en: "GFR measurement from blood samples" }
          ],
          [
            { ar: "غير نووي", en: "Non-nuclear" },
            { ar: "تُستخدم إشارات ضوئية أو صوتية من مواد غير مشعة", en: "Optical or acoustic signals from non-radioactive agents are detected" },
            { ar: "التصوير بالفقاعات الدقيقة (microbubbles)", en: "Microbubble ultrasound imaging" }
          ]
        ]
      }
    },
    {
      h: { ar: "مكوّنا المستحضر المشع", en: "The two parts of a radiopharmaceutical" },
      paras: [
        {
          ar: "يتكوّن كل مستحضر مشع (radiopharmaceutical) من جزأين: نويدة مشعة (radionuclide) تُصدر إشعاع gamma الذي تلتقطه الكاميرا، ومكوّن صيدلاني (pharmaceutical) يُلصَق بالجزء المشع ويحدّد سلوكه الكيميائي والحيوي داخل الجسم.",
          en: "Every radiopharmaceutical has two parts: a radionuclide that emits the gamma radiation detected by the camera, and a pharmaceutical component to which the radionuclide is attached, which governs the chemical and biological behaviour of the compound."
        },
        {
          ar: "النقطة الجوهرية أن المكوّن الصيدلاني هو الذي يقرّر أين يتجه المستحضر وأين يتراكم، وبالتالي يحدّد طبيعة الصورة الناتجة؛ أما النويدة المشعة فوظيفتها أن تجعل هذا التوزّع قابلًا للرصد من خارج الجسم.",
          en: "The key point is that the pharmaceutical part largely decides where the agent travels and accumulates, and therefore determines the nature of the image; the radionuclide simply makes that distribution detectable from outside the body."
        }
      ]
    },
    {
      h: { ar: "داخل الجسم أم في المختبر؟", en: "In vivo versus in vitro" },
      bullets: [
        {
          ar: "In vivo: يُدخَل المتتبّع إلى المريض، ثم تُقاس النشاطية الإشعاعية أثناء خروجها من الجسم، كما في تصوير العظام بالكاميرا.",
          en: "In vivo: the tracer is given to the patient and the emitted radioactivity is measured as it leaves the body, as in a gamma camera bone scan."
        },
        {
          ar: "In vitro: يُعطى المتتبّع للمريض ثم تُسحب عينات (دم أو سوائل) وتُقاس نشاطيتها في المختبر؛ القياس رقمي فقط ولا توجد صورة.",
          en: "In vitro: the tracer is given to the patient, samples such as blood are then withdrawn, and their activity is counted in the laboratory; the result is a number, not an image."
        },
        {
          ar: "كلا الأسلوبين يقيس وظيفة فسيولوجية، لكن in vivo وحده يضيف البُعد المكاني الذي يسمح بالتصوير.",
          en: "Both approaches quantify physiology, but only the in vivo route adds the spatial information needed to form an image."
        }
      ]
    }
  ],
  quiz: [
    {
      q: { ar: "ما الذي يحدّد بصورة رئيسية أين يتراكم المستحضر المشع داخل الجسم؟", en: "What mainly determines where a radiopharmaceutical accumulates in the body?" },
      opts: [
        { ar: "المكوّن الصيدلاني (pharmaceutical)", en: "The pharmaceutical component" },
        { ar: "طاقة فوتونات gamma", en: "The gamma photon energy" },
        { ar: "نوع كاميرا gamma المستخدمة", en: "The type of gamma camera used" },
        { ar: "عمر النصف للنظير المشع", en: "The half-life of the radionuclide" }
      ],
      a: 0,
      why: {
        ar: "المكوّن الصيدلاني يحدّد السلوك الفسيولوجي والتوزّع الحيوي، بينما دور النويدة المشعة هو إصدار الإشعاع القابل للكشف فقط.",
        en: "The pharmaceutical part controls the physiological behaviour and biodistribution; the radionuclide only provides the detectable emission."
      }
    },
    {
      q: { ar: "أي مما يلي مثال على دراسة نووية بطريقة in vitro؟", en: "Which of the following is an in vitro nuclear study?" },
      opts: [
        { ar: "مسح العظام بكاميرا gamma", en: "A gamma camera bone scan" },
        { ar: "قياس GFR بعدّ نشاطية عينات دم مسحوبة من المريض", en: "GFR estimation by counting activity in withdrawn blood samples" },
        { ar: "تصوير PET بمادة FDG", en: "FDG PET imaging" },
        { ar: "تصوير SPECT للقلب", en: "Cardiac SPECT imaging" }
      ],
      a: 1,
      why: {
        ar: "في الدراسات in vitro تُقاس النشاطية في عينات خارج الجسم ولا تتكوّن أي صورة.",
        en: "In vitro studies count activity in samples outside the body and produce no image."
      }
    },
    {
      q: { ar: "ما مصدر الإشارة التي تلتقطها كاميرا gamma في التصوير النووي داخل الجسم؟", en: "What produces the signal detected by the gamma camera in in vivo nuclear imaging?" },
      opts: [
        { ar: "انعكاس الموجات الصوتية عن الأنسجة", en: "Reflected sound waves from tissues" },
        { ar: "إشعاع gamma المنبعث من النويدة المشعة داخل المريض", en: "Gamma rays emitted by the radionuclide inside the patient" },
        { ar: "حزمة أشعة X تمر عبر المريض من مصدر خارجي", en: "An X-ray beam transmitted through the patient from an external source" },
        { ar: "إشارات تردد راديوي من بروتونات الهيدروجين", en: "Radiofrequency signals from hydrogen protons" }
      ],
      a: 1,
      why: {
        ar: "التصوير النووي تصوير انبعاثي (emission): الإشعاع يصدر من المستحضر المشع داخل جسم المريض نفسه، لا من مصدر خارجي.",
        en: "Nuclear imaging is emission imaging: the radiation comes from the radiopharmaceutical inside the patient, not from an external source."
      }
    }
  ]
},
{
  slug: "planar-imaging",
  chapter: "molecular",
  title: { ar: "التصوير المستوي (Planar)", en: "Planar imaging" },
  intro: {
    ar: "التصوير المستوي هو الحصول على صور نووية ثنائية الأبعاد بكاميرا gamma، وهو نظير الأفلام الشعاعية البسيطة في عالم الطب النووي. يشمل ثلاثة أنماط رئيسية: ساكن (static) وديناميكي (dynamic) ومُبوَّب (gated)، ويختار المشغّل بينها بحسب سرعة تغيّر توزّع المستحضر المشع.",
    en: "Planar imaging acquires two-dimensional nuclear images with a gamma camera, the nuclear medicine equivalent of a plain radiograph. It comes in three main patterns — static, dynamic and gated — chosen according to how quickly the radiopharmaceutical distribution changes."
  },
  sections: [
    {
      h: { ar: "الأنماط الثلاثة للتصوير المستوي", en: "The three patterns of planar imaging" },
      paras: [
        {
          ar: "في النمط الساكن يبقى توزّع المستحضر ثابتًا تقريبًا طوال فترة الالتقاط، فيُحقن المريض ثم ننتظر الفترة المناسبة ثم نلتقط الصورة، وتنتهي الدراسة بزمن محدد مسبقًا أو بعدد عدّات (counts) محدد. أما النمط الديناميكي فيلتقط سلسلة إطارات متتابعة تبدأ فور الحقن لأن التوزّع يتغيّر بسرعة مع الزمن.",
          en: "In a static study the tracer distribution stays effectively fixed during acquisition: the patient is injected, imaging is delayed by an appropriate interval, and the acquisition ends after a preset time or a preset number of counts. A dynamic study instead records a rapid sequence of frames starting immediately after injection because the distribution changes quickly with time."
        },
        {
          ar: "النمط المُبوَّب مخصَّص للأعضاء ذات الحركة الفسيولوجية المنتظمة، وأشهر أمثلته تصوير حوض الدم القلبي (gated blood pool) حيث تُزامَن الإطارات مع موجة R في تخطيط القلب ECG، وتُركَّب إطارات الدورات القلبية المتتالية فوق بعضها.",
          en: "Gated imaging is used for organs with regular physiological motion. The classic example is the gated cardiac blood pool study, in which frames are synchronised to the R wave of the ECG and frames from successive cardiac cycles are summed together."
        }
      ],
      table: {
        head: [
          { ar: "النمط", en: "Pattern" },
          { ar: "التوقيت", en: "Timing" },
          { ar: "أمثلة", en: "Examples" }
        ],
        rows: [
          [
            { ar: "ساكن (static)", en: "Static" },
            { ar: "حقن ← انتظار ← تصوير", en: "Inject, wait, then image" },
            { ar: "DMSA للكلى، مسح العظام، تروية الرئة", en: "Renal DMSA, bone scan, lung perfusion" }
          ],
          [
            { ar: "ديناميكي (dynamic)", en: "Dynamic" },
            { ar: "حقن ثم تصوير فوري بإطارات متتابعة", en: "Inject, then image immediately as a frame series" },
            { ar: "MAG3 للكلى، إفراغ المرارة، إفراغ المعدة", en: "MAG3 renogram, gallbladder and gastric emptying" }
          ],
          [
            { ar: "مُبوَّب (gated)", en: "Gated" },
            { ar: "التقاط متزامن مع إشارة فسيولوجية مثل ECG", en: "Acquisition triggered by a physiological signal such as the ECG" },
            { ar: "تصوير حوض الدم القلبي", en: "Cardiac blood pool imaging" }
          ]
        ]
      }
    },
    {
      h: { ar: "متغيرات الالتقاط: المُصادم والمصفوفة والعدّات", en: "Acquisition variables: collimator, matrix and counts" },
      paras: [
        {
          ar: "يُختار المُصادم (collimator) على ثلاث طبقات: فئة الطاقة (منخفضة أو متوسطة أو عالية بحسب النويدة)، وفئة الأداء (عام أو عالي الدقة أو عالي الحساسية)، والهندسة (متوازٍ أو متباعد أو متقارب أو ثقب دبوس pinhole). المُصادم عالي الدقة يحسّن الدقة المكانية على حساب معدل العدّ وطول زمن التصوير، بينما عالي الحساسية يرفع معدل العدّ ويُفضَّل في الدراسات الديناميكية.",
          en: "The collimator is chosen on three levels: energy class (low, medium or high energy, matched to the radionuclide), performance class (general purpose, high resolution or high sensitivity), and geometry (parallel, diverging, converging or pinhole). A high-resolution collimator improves spatial resolution at the cost of count rate and longer imaging times, whereas a high-sensitivity collimator raises count rate and suits dynamic studies."
        },
        {
          ar: "جودة الصورة مرتبطة بكثافة العدّات: فكلما زاد عدد العدّات ارتفعت نسبة الإشارة إلى الضجيج (SNR). ويمكن رفع العدّات بإطالة زمن التصوير أو زيادة النشاطية المعطاة أو التأكد من حساسية كاميرا مناسبة.",
          en: "Image quality depends on count density: more counts mean a higher signal-to-noise ratio (SNR). Count density can be raised by imaging for longer, by increasing the administered activity, or by ensuring adequate camera sensitivity."
        },
        {
          ar: "حجم المصفوفة (matrix) مقايضة أخرى: المصفوفة الأكبر تعني بكسلات أكثر ودقة مكانية أفضل، لكن عدّات أقل في كل بكسل وضجيجًا أعلى وحاجة أكبر لمعالجة حاسوبية. لذلك تُستخدم مصفوفات أصغر كلما كانت الحركة أو الزمن عاملًا حاسمًا.",
          en: "Matrix size is another trade-off: a larger matrix gives more pixels and better spatial resolution, but fewer counts per pixel, more noise and greater computing demands. Smaller matrices are therefore used when motion or timing dominates."
        }
      ],
      nums: [
        { v: "256 × 256", ar: "مصفوفة معتادة للتصوير الساكن", en: "Typical matrix for static imaging" },
        { v: "128 × 128", ar: "مصفوفة شائعة للدراسات الديناميكية", en: "Common matrix for dynamic imaging" },
        { v: "64 × 64", ar: "مصفوفة التصوير القلبي المُبوَّب", en: "Matrix for gated cardiac imaging" }
      ]
    },
    {
      h: { ar: "وضعية الكاميرا والتصوير الكامل للجسم", en: "Camera position and whole-body techniques" },
      paras: [
        {
          ar: "كلما اقتربت كاميرا gamma من المريض تحسّنت الدقة المكانية، لأن انتشار الفوتونات أثناء عبورها المُصادم يقل مع صغر الفجوة الهوائية. وتساعد أنظمة التتبّع التلقائي بالأشعة تحت الحمراء (autocontouring) على إبقاء الكاميرا قريبة بأمان أثناء المسح.",
          en: "Spatial resolution improves as the gamma camera is brought closer to the patient, because a smaller air gap means less spread of photons through the collimator. Infrared autocontouring systems keep the camera close yet safe during scanning."
        },
        {
          ar: "حين يكون العضو أكبر من مجال الرؤية — كمسح العظام لكامل الجسم — تُستخدم طريقتان: المسح المستمر بحيث تتحرك الطاولة بين رأسي الكاميرا بسرعة ثابتة، أو التصوير خطوة-والتقاط (step and shoot) حيث تُلتقط عدة صور ساكنة على طول الجسم ثم تُدمج معًا أثناء المعالجة. وتفيد المناظر المائلة والجانبية في فصل التراكيب المتطابقة في المنظر الأمامي.",
          en: "When the region exceeds the field of view, as in a whole-body bone scan, two methods exist: continuous scanning, with the couch moving between the camera heads at constant speed, or step-and-shoot, where several static images along the body are stitched together in processing. Oblique and lateral views help separate structures that overlap on the anterior view."
        },
        {
          ar: "في الدراسات الديناميكية والمُبوَّبة يمكن التسجيل بنمط القائمة (list mode)، حيث تُحفظ كل عدّة مع زمنها، ثم تُقسَّم البيانات لاحقًا إلى فواصل زمنية حسب الحاجة — بثمن استهلاك ذاكرة حاسوبية كبيرة.",
          en: "Dynamic and gated studies can also be recorded in list mode, storing every count with its time stamp so the data can later be reframed into any time intervals — at the cost of large computer memory requirements."
        }
      ]
    },
    {
      h: { ar: "العرض والمعالجة", en: "Display and processing" },
      bullets: [
        {
          ar: "جداول البحث (lookup tables) تربط قيمة عدّات البكسل بالسطوع أو اللون المعروض؛ الجداول غير الخطية (لوغاريتمية أو أسّية) مفيدة حين تتركز إشارة قوية في منطقة غير مهمة فلا تستهلك معظم درجات العرض.",
          en: "Lookup tables map pixel count values to displayed brightness or colour; non-linear (logarithmic or exponential) tables help when a very hot area of little interest would otherwise consume most of the display range."
        },
        {
          ar: "تحسين التباين يتم بضبط النوافذ (windowing) بحيث تظهر البكسلات المهمة بأفضل صورة.",
          en: "Contrast is optimised by windowing the display so the pixels of interest are shown to best advantage."
        },
        {
          ar: "الترشيح (filtering) بالالتفاف (convolution) يغيّر قيم العدّات نفسها لتنعيم الصورة أو حدّتها، لا مجرد طريقة عرضها.",
          en: "Convolution filtering alters the count values themselves to smooth or sharpen the image, rather than merely changing the display."
        },
        {
          ar: "تحليل منطقة الاهتمام (ROI) يحسب مجموع العدّات داخل منطقة مرسومة يدويًا أو تلقائيًا؛ وأخذ متوسط المنظرين الأمامي والخلفي يصحّح أثر العمق، كما في دراسات DMSA.",
          en: "Region of interest (ROI) analysis totals the counts within a user-drawn or automatic region; averaging anterior and posterior views corrects for depth, as in DMSA studies."
        },
        {
          ar: "منحنيات النشاط مع الزمن (time-activity curves) تعرض معدل العدّ في منطقة ما عبر الزمن، ومنها تُشتق قيم مثل زمن بلوغ الذروة ومساحة ما تحت المنحنى ومعدل الغسل (washout).",
          en: "Time-activity curves plot the count rate in a region against time, yielding parameters such as time to peak, area under the curve and washout rate."
        }
      ]
    }
  ],
  quiz: [
    {
      q: { ar: "في التصوير القلبي المُبوَّب، ما الإشارة المستخدمة لمزامنة الالتقاط؟", en: "In gated cardiac imaging, which signal synchronises acquisition?" },
      opts: [
        { ar: "موجة R في تخطيط القلب ECG", en: "The R wave of the ECG" },
        { ar: "معدل التنفس", en: "The respiratory rate" },
        { ar: "ضغط الدم الانقباضي", en: "Systolic blood pressure" },
        { ar: "زمن الحقن الوريدي", en: "The time of intravenous injection" }
      ],
      a: 0,
      why: {
        ar: "البوّابة تُشغَّل بموجة R، وتُركَّب إطارات كل دورة قلبية على إطارات الدورات السابقة لبناء دورة ممثِّلة واحدة.",
        en: "Gating is triggered by the R wave, and frames from each cardiac cycle are overlaid on previous cycles to build one representative cycle."
      }
    },
    {
      q: { ar: "ما أثر زيادة حجم المصفوفة (matrix) عند ثبات عدد العدّات الكلي؟", en: "What happens when matrix size is increased while total counts stay the same?" },
      opts: [
        { ar: "تتحسن الدقة المكانية لكن تقل العدّات في كل بكسل فيزداد الضجيج", en: "Spatial resolution improves but counts per pixel fall, so noise rises" },
        { ar: "يقل الضجيج وتسوء الدقة المكانية", en: "Noise falls and spatial resolution worsens" },
        { ar: "لا يتغير شيء في الصورة", en: "Nothing changes in the image" },
        { ar: "يزداد معدل العدّ تلقائيًا", en: "The count rate automatically increases" }
      ],
      a: 0,
      why: {
        ar: "المصفوفة الأكبر تقسم العدّات نفسها على بكسلات أكثر: دقة مكانية أعلى مقابل SNR أقل في كل بكسل.",
        en: "A larger matrix spreads the same counts over more pixels: better spatial resolution but a lower SNR per pixel."
      }
    },
    {
      q: { ar: "متى يُفضَّل المُصادم عالي الحساسية (high sensitivity)؟", en: "When is a high-sensitivity collimator preferred?" },
      opts: [
        { ar: "في مسح العظام الساكن للتراكيب الصغيرة", en: "In static bone scans of small structures" },
        { ar: "في الدراسات الديناميكية حيث معدل العدّ أهم من التفاصيل التشريحية", en: "In dynamic studies where count rate matters more than anatomical detail" },
        { ar: "في تصوير الغدة الدرقية بمُصادم الثقب الدبوس", en: "In thyroid imaging with a pinhole collimator" },
        { ar: "عند استخدام نويدات عالية الطاقة فقط", en: "Only when high-energy radionuclides are used" }
      ],
      a: 1,
      why: {
        ar: "عالي الحساسية يرفع معدل العدّ على حساب الدقة المكانية، وهو المطلوب في الدراسات الديناميكية كتخطيط الكلى (renography).",
        en: "High sensitivity raises count rate at the expense of spatial resolution, which suits dynamic studies such as renography."
      }
    }
  ]
},
{
  slug: "gamma-camera",
  chapter: "molecular",
  title: { ar: "كاميرا gamma", en: "The gamma camera" },
  intro: {
    ar: "كاميرا gamma هي جهاز الكشف الأساسي في الطب النووي: تلتقط فوتونات gamma الصادرة من المريض وتحولها إلى صورة لتوزّع المستحضر المشع. تتكون من مُصادم (collimator) ينتقي اتجاه الفوتونات، وبلّورة وميضية (scintillation crystal) تحوّل الفوتون إلى وميض ضوئي، وأنابيب مضاعِفة ضوئية (PMT) تحوّل الوميض إلى إشارة كهربائية.",
    en: "The gamma camera is the core detector of nuclear medicine: it captures gamma photons emitted by the patient and converts them into an image of radiopharmaceutical distribution. It consists of a collimator that selects photon direction, a scintillation crystal that converts photons into light flashes, and photomultiplier tubes (PMTs) that turn the light into electrical signals."
  },
  sections: [
    {
      h: { ar: "المُصادم: أنواع الثقوب وهندستها", en: "The collimator: hole geometries" },
      paras: [
        {
          ar: "المُصادم شبكة رصاصية سميكة مثقوبة لا تسمح بالمرور إلا للفوتونات القادمة باتجاه محدد، وبهذا يفرض العلاقة المكانية بين نقطة الانبعاث ونقطة الكشف. أكثر الأنواع شيوعًا هو المتوازي الثقوب (parallel hole) الذي يعطي صورة بحجم الجسم نفسه.",
          en: "The collimator is a thick perforated lead plate that only allows through photons travelling in a chosen direction, thereby defining the spatial relationship between emission point and detection point. The parallel-hole design is the most common and produces an image the same size as the object."
        },
        {
          ar: "المُصادم متباعد الثقوب (diverging) يصغّر الصورة ليتسع مجال رؤية أكبر، والمتقارب (converging) يكبّرها، أما الثقب الدبوس (pinhole) فهو ثقب وحيد مخروطي يكبّر الأجسام الصغيرة القريبة منه بشدة، ويُستخدم لتصوير الغدة الدرقية مثلًا.",
          en: "A diverging collimator minifies the image to cover a larger field, a converging collimator magnifies it, and a pinhole collimator — a single conical aperture — strongly magnifies small nearby objects and is used for structures such as the thyroid."
        },
        {
          ar: "تُصنع الثقوب بثلاث طرق: تجعيد رقائق رصاصية (رخيص لكن الفراغات بين الحواجز تُضعف التباين)، أو الحفر في كتلة رصاصية (حواجز متصلة وتباين أفضل لكنه أغلى)، أو الصبّ من رصاص منصهر.",
          en: "Holes are manufactured in three ways: crimping lead foil sheets (cheap, but gaps in the septa degrade contrast), drilling into a solid lead block (continuous septa and better contrast, but more expensive), or casting from molten lead."
        }
      ]
    },
    {
      h: { ar: "سُمك الحواجز وفئات الطاقة", en: "Septal thickness and energy classes" },
      paras: [
        {
          ar: "حواجز المُصادم (septa) يجب أن تمتص الفوتونات التي تصطدم بها بزاوية، وإلا عبرت الحاجز وسُجّلت في موضع خاطئ. وكلما ارتفعت طاقة الفوتونات احتجنا حواجز أسمك لامتصاصها، ولذلك تُصنَّف المُصادمات المتوازية بحسب سُمك حواجزها إلى منخفضة ومتوسطة وعالية الطاقة.",
          en: "Collimator septa must absorb photons that strike them at an angle, otherwise the photons penetrate and are recorded in the wrong place. Higher-energy photons need thicker septa for adequate absorption, so parallel-hole collimators are classed as low, medium or high energy according to septal thickness."
        }
      ],
      table: {
        head: [
          { ar: "النويدة المشعة", en: "Radionuclide" },
          { ar: "طاقة الفوتون (keV)", en: "Photon energy (keV)" },
          { ar: "فئة المُصادم", en: "Collimator class" },
          { ar: "سُمك الحواجز (mm)", en: "Septal thickness (mm)" }
        ],
        rows: [
          [
            { ar: "Technetium-99m", en: "Technetium-99m" },
            { ar: "140", en: "140" },
            { ar: "طاقة منخفضة", en: "Low energy" },
            { ar: "0.3", en: "0.3" }
          ],
          [
            { ar: "Indium-111", en: "Indium-111" },
            { ar: "حتى ~300", en: "Up to ~300" },
            { ar: "طاقة متوسطة", en: "Medium energy" },
            { ar: "1", en: "1" }
          ],
          [
            { ar: "Iodine-131", en: "Iodine-131" },
            { ar: "حتى ~400", en: "Up to ~400" },
            { ar: "طاقة عالية", en: "High energy" },
            { ar: "2", en: "2" }
          ]
        ]
      }
    },
    {
      h: { ar: "بلّورة الوميض والأنابيب المضاعِفة الضوئية", en: "Scintillation crystal and photomultiplier tubes" },
      paras: [
        {
          ar: "خلف المُصادم توجد بلّورة يوديد الصوديوم المُطعَّمة بالثاليوم NaI(Tl)، بسُمك يقارب 9.5 إلى 12.5 mm. عندما يمتصّ الفوتون داخل البلّورة تنطلق دفقة صغيرة من الضوء المرئي (وميض scintillation) يتناسب مقدارها مع طاقة الفوتون الممتصة.",
          en: "Behind the collimator sits a sodium iodide crystal doped with thallium, NaI(Tl), roughly 9.5 to 12.5 mm thick. When a photon is absorbed in the crystal it produces a small flash of visible light — a scintillation — whose intensity is proportional to the absorbed photon energy."
        },
        {
          ar: "يلتقط الوميضَ صفٌّ من الأنابيب المضاعِفة الضوئية (photomultiplier tubes, PMTs) الملتصقة بوجه البلّورة الخلفي عبر دليل ضوئي. كل PMT يحوّل الضوء إلى نبضة كهربائية ويضخّمها بدرجة هائلة، ثم تمر الإشارة عبر مضخّم أولي (pre-amplifier) قبل المعالجة.",
          en: "The flash is collected by an array of photomultiplier tubes (PMTs) optically coupled to the back face of the crystal. Each PMT converts the light into an electrical pulse and amplifies it enormously; the signal then passes through a pre-amplifier before processing."
        },
        {
          ar: "بمقارنة حصص الضوء التي يتلقاها كل PMT تستنتج إلكترونيات تحديد الموضع (منطق Anger) إحداثيات مكان الوميض داخل البلّورة، فتُبنى الصورة حدثًا بعد حدث.",
          en: "By comparing how much light each PMT receives, position logic electronics (Anger logic) calculate the coordinates of each scintillation within the crystal, building the image event by event."
        }
      ]
    },
    {
      h: { ar: "تحليل الطاقة وتكوين الصورة", en: "Energy analysis and image formation" },
      paras: [
        {
          ar: "مجموع إشارات الـ PMTs لكل حدث يمثل طاقة الفوتون، فيرسم محلل ارتفاع النبضة (pulse height analyser) طيفًا للطاقات يظهر فيه قمّة ضوئية (photopeak) عند طاقة الانبعاث الكاملة — 140 keV للتكنيشيوم-99m — وشريط Compton من الفوتونات التي فقدت جزءًا من طاقتها بالتشتت داخل المريض.",
          en: "The summed PMT signal for each event represents the photon energy. A pulse height analyser produces an energy spectrum showing a photopeak at the full emission energy — 140 keV for technetium-99m — and a Compton band from photons that lost part of their energy by scattering in the patient."
        },
        {
          ar: "تُقبل العدّات فقط من نافذة طاقة ضيقة حول القمة الضوئية — عادة ±10% — فتُرفض معظم الفوتونات المتشتتة التي تحمل معلومات مكانية خاطئة. وتعتمد جودة هذا الفرز على الدقة الطاقية (energy resolution) التي تُقاس بعرض القمة عند نصف ارتفاعها FWHM وتبلغ نحو 10% عند 140 keV.",
          en: "Only counts within a narrow energy window around the photopeak — typically ±10% — are accepted, rejecting most scattered photons that carry false positional information. The quality of this selection depends on energy resolution, measured as the FWHM of the photopeak and around 10% at 140 keV."
        },
        {
          ar: "كل حدث مقبول يُسجَّل في بكسل المصفوفة المقابل لموضعه المحسوب، وتتراكم العدّات حتى يكتمل زمن الالتقاط أو العدد المطلوب، فتظهر صورة توزّع النشاطية الإشعاعية.",
          en: "Each accepted event is recorded in the matrix pixel corresponding to its calculated position, and counts accumulate until the preset time or count total is reached, forming the image of activity distribution."
        }
      ],
      nums: [
        { v: "140 keV", ar: "طاقة فوتون التكنيشيوم-99m وقمته الضوئية", en: "Technetium-99m photon energy and photopeak" },
        { v: "~10%", ar: "الدقة الطاقية النموذجية لبلّورة NaI(Tl)", en: "Typical energy resolution of NaI(Tl)" },
        { v: "±10%", ar: "عرض نافذة الطاقة المعتاد حول القمة الضوئية", en: "Usual energy window width around the photopeak" }
      ]
    }
  ],
  quiz: [
    {
      q: { ar: "أي مُصادم يُختار لتكبير صورة عضو صغير كالغدة الدرقية؟", en: "Which collimator is chosen to magnify a small organ such as the thyroid?" },
      opts: [
        { ar: "متباعد الثقوب (diverging)", en: "Diverging hole" },
        { ar: "متوازي الثقوب (parallel hole)", en: "Parallel hole" },
        { ar: "الثقب الدبوس (pinhole)", en: "Pinhole" },
        { ar: "عالي الطاقة (high energy)", en: "High energy" }
      ],
      a: 2,
      why: {
        ar: "مُصادم الثقب الدبوس ذو فتحة وحيدة مخروطية ويكبّر الأجسام الصغيرة القريبة منه، وهو الخيار الكلاسيكي للغدة الدرقية.",
        en: "The pinhole collimator has a single conical aperture and magnifies small nearby objects, the classic choice for the thyroid."
      }
    },
    {
      q: { ar: "لماذا تحتاج فوتونات Iodine-131 حواجز مُصادم أسمك من فوتونات Technetium-99m؟", en: "Why do iodine-131 photons need thicker collimator septa than technetium-99m photons?" },
      opts: [
        { ar: "لأن عمر نصف اليود أطول", en: "Because iodine has a longer half-life" },
        { ar: "لأن طاقتها الأعلى تجعلها أكثر قدرة على اختراق الحواجز الرصاصية الرقيقة", en: "Because their higher energy penetrates thin lead septa more readily" },
        { ar: "لأن اليود يُعطى بجرعات أكبر", en: "Because iodine is given in larger activities" },
        { ar: "لأن بلّورة NaI لا تكشف فوتونات التكنيشيوم", en: "Because the NaI crystal cannot detect technetium photons" }
      ],
      a: 1,
      why: {
        ar: "سُمك الحواجز يُختار ليكفي امتصاص الفوتونات المائلة؛ الفوتونات الأعلى طاقة (~364 إلى 400 keV) تحتاج حواجز بنحو 2 mm مقابل 0.3 mm عند 140 keV.",
        en: "Septa must absorb obliquely incident photons; higher-energy photons (~364 to 400 keV) need about 2 mm septa versus 0.3 mm at 140 keV."
      }
    },
    {
      q: { ar: "ما وظيفة محلل ارتفاع النبضة (pulse height analyser)؟", en: "What does the pulse height analyser do?" },
      opts: [
        { ar: "يحسب إحداثيات كل وميض داخل البلّورة", en: "It calculates the coordinates of each scintillation in the crystal" },
        { ar: "يقيس طاقة كل فوتون ويقبل فقط العدّات داخل نافذة القمة الضوئية", en: "It measures each photon energy and accepts only counts within the photopeak window" },
        { ar: "يضخّم الإشارة الضوئية من البلّورة", en: "It amplifies the light signal from the crystal" },
        { ar: "يحرّك رأس الكاميرا حول المريض", en: "It rotates the camera head around the patient" }
      ],
      a: 1,
      why: {
        ar: "محلل ارتفاع النبضة يفرز الأحداث بحسب الطاقة، فتُبنى الصورة من الفوتونات غير المتشتتة الواقعة في نافذة القمة الضوئية فقط.",
        en: "The pulse height analyser sorts events by energy so the image is built only from unscattered photons within the photopeak window."
      }
    }
  ]
},
{
  slug: "radiopharmaceuticals",
  chapter: "molecular",
  title: { ar: "المستحضرات المشعة", en: "Radiopharmaceuticals" },
  intro: {
    ar: "المستحضر المشع مركَّب من جزأين متكاملين: نظير مشع يُنتج الإشارة، ومادة صيدلانية تُوجّه المركَّب إلى العضو أو العملية المستهدفة. وتنوّع تركيبات النظائر مع المواد الصيدلانية هو ما يمنح الطب النووي طيفه الواسع من الفحوصات القلبية والكلوية والعظمية والعصبية وغيرها.",
    en: "A radiopharmaceutical combines two complementary parts: a radioactive isotope that produces the signal, and a pharmaceutical that directs the compound to the target organ or process. The many combinations of isotopes and pharmaceuticals give nuclear medicine its wide range of cardiac, renal, bone, neurological and other studies."
  },
  sections: [
    {
      h: { ar: "منطق التصنيف", en: "How the agents are organised" },
      paras: [
        {
          ar: "يمكن النظر إلى المستحضرات المشعة من زاويتين: بحسب الجهاز أو العضو المدروس (قلب، غدد صماء، كلى، دماغ، رئة، أورام...)، أو بحسب النظير المشع المستخدَم وما يرافقه من نوع إشعاع وطريقة إنتاج وعمر نصف. الزاوية الأولى عملية سريريًا، والثانية تكشف خصائص النظير التي تحدّد توقيت التصوير ولوجستيات التحضير.",
          en: "Radiopharmaceuticals can be viewed in two ways: by the system or organ studied (heart, endocrine, renal, brain, lung, tumours and so on), or by the radioisotope used, together with its emission type, production method and half-life. The first view is clinically practical; the second reveals the isotope properties that dictate imaging timing and preparation logistics."
        },
        {
          ar: "ليست كل المستحضرات منتِجة للصور: فبعضها يُستخدم لقياسات in vitro فقط (كاختبارات التنفس وقياس GFR بعينات)، وبعضها علاجي بحت يسلّم جرعة إشعاعية للهدف دون غرض تصويري.",
          en: "Not every agent produces an image: some are used only for in vitro measurements (such as breath tests and sampled GFR), and others are purely therapeutic, delivering a radiation dose to a target with no imaging purpose."
        }
      ]
    },
    {
      h: { ar: "أمثلة بحسب الجهاز: القلب والغدد الصماء", en: "By system: cardiac and endocrine examples" },
      bullets: [
        {
          ar: "القلب: Thallium-201 لتروية عضلة القلب يُحقن عند ذروة الجهد أو بعد مُوسّع دوائي مثل adenosine، ويُصوَّر فورًا ثم بعد 3 إلى 4 ساعات للتمييز بين نقص التروية القابل للعكس والاحتشاء الثابت. وبديله الأشهر مركّبات التكنيشيوم sestamibi وtetrofosmin الأقصر عمرًا والتي تحتاج حقنة ثانية للدراسة المتأخرة.",
          en: "Cardiac: thallium-201 for myocardial perfusion is injected at peak exercise or after a pharmacological stressor such as adenosine, with immediate imaging and repeat imaging at 3 to 4 hours to separate reversible ischaemia from fixed infarction. The common alternatives are the technetium agents sestamibi and tetrofosmin, which have shorter half-lives and need a second injection for the delayed study."
        },
        {
          ar: "دراسة MUGA توسّم كريات المريض الحمراء نفسه وتعيد حقنها لتقييم حركة جدار البطين ووظيفته وأحجام الحجرات — دون أي تقييم للتروية.",
          en: "A MUGA study labels the patient own red blood cells and reinjects them to assess ventricular wall motion, function and chamber size — but not perfusion."
        },
        {
          ar: "الغدد الصماء: pertechnetate ‏(99mTc) لوظيفة الدرقية مع تصوير بعد 15 إلى 30 دقيقة، وsestamibi أو tetrofosmin للغدد جارات الدرقية بتصوير مبكر عند 20 دقيقة ومتأخر عند ساعتين، وIodine-131 MIBG للأورام العصبية الصمّاء مع حجب درقي مسبق وتصوير بعد يوم إلى يومين.",
          en: "Endocrine: technetium-99m pertechnetate for thyroid function, imaged 15 to 30 minutes after injection; sestamibi or tetrofosmin for parathyroid studies with early imaging at 20 minutes and delayed imaging at 2 hours; and iodine-131 MIBG for neuroendocrine tumours, with prior thyroid blockade and imaging at 1 to 2 days."
        }
      ]
    },
    {
      h: { ar: "أمثلة بحسب الجهاز: الكلى والرئة والدماغ والعظام", en: "By system: renal, lung, CNS and bone examples" },
      bullets: [
        {
          ar: "الكلى: DTPA وMAG3 الموسومان بالتكنيشيوم لتقدير GFR بدراسة ديناميكية تستمر 25 إلى 30 دقيقة (مع إمكانية إعطاء مدرّ)، مقابل DMSA الذي يُصوَّر بعد نحو 3 ساعات دراسةً ساكنة لوظيفة القشرة الكلوية وندباتها، لا دراسة وظيفية زمنية.",
          en: "Renal: technetium-labelled DTPA and MAG3 estimate GFR in a dynamic study lasting 25 to 30 minutes (a diuretic may be given), whereas DMSA is imaged after about 3 hours as a static study of renal cortical function and scarring, not a time-based functional study."
        },
        {
          ar: "الرئة: استنشاق رذاذ DTPA لدراسة التهوية مع تصوير فوري، وحقن MAA (حبيبات ألبومين مجمّعة) لدراسة التروية مع تصوير فوري متعدد الزوايا.",
          en: "Lung: inhaled DTPA aerosol for ventilation with immediate imaging, and injected MAA (macroaggregated albumin) particles for perfusion, imaged immediately from several angles."
        },
        {
          ar: "الدماغ: HMPAO الموسوم بالتكنيشيوم لتصوير SPECT لتدفق الدم الدماغي (يبدأ التصوير من 20 دقيقة حتى 2 إلى 3 ساعات)، وIodine-123 ioflupane المعروف بـ DaTscan لمرض Parkinson مع حجب درقي وتصوير بعد 3 إلى 6 ساعات.",
          en: "CNS: technetium HMPAO for SPECT cerebral blood flow imaging (starting 20 minutes to 2 to 3 hours after injection), and iodine-123 ioflupane, the DaTscan, for Parkinson disease, with thyroid blockade and imaging at 3 to 6 hours."
        },
        {
          ar: "العظام والأورام والالتهاب: MDP (ثنائي الفوسفونات) لمسح العظام بعد 2 إلى 5 ساعات من الحقن، وGallium-67 citrate للالتهاب والأورام بتصوير متأخر جدًا عند 48 و72 ساعة، وFDG في PET للأورام مع بدء التصوير بعد 30 إلى 60 دقيقة.",
          en: "Bone, tumour and infection: MDP (a diphosphonate) for bone scans at 2 to 5 hours after injection; gallium-67 citrate for infection and tumours with very delayed imaging at 48 and 72 hours; and FDG for PET tumour imaging starting 30 to 60 minutes after injection."
        }
      ]
    },
    {
      h: { ar: "أمثلة بحسب النظير المشع", en: "By radioisotope" },
      paras: [
        {
          ar: "لكل نظير بصمته: نوع الانبعاث (gamma أو positron أو beta)، وطريقة الإنتاج (مولّد generator أو مسرّع دوراني cyclotron أو مفاعل reactor)، وعمر النصف الذي يحدّد نافذة الاستخدام الممكنة. الجدول التالي يعيد تنظيم أبرز النظائر بهذه الخصائص الثلاث.",
          en: "Each isotope has a signature: its emission type (gamma, positron or beta), its production route (generator, cyclotron or reactor) and its half-life, which sets the usable time window. The table reorganises the key isotopes by these three properties."
        }
      ],
      table: {
        head: [
          { ar: "النظير", en: "Isotope" },
          { ar: "الانبعاث", en: "Emission" },
          { ar: "الإنتاج", en: "Production" },
          { ar: "عمر النصف", en: "Half-life" },
          { ar: "استخدامات نموذجية", en: "Typical uses" }
        ],
        rows: [
          [
            { ar: "Technetium-99m", en: "Technetium-99m" },
            { ar: "gamma ‏(140 keV)", en: "Gamma (140 keV)" },
            { ar: "مولّد", en: "Generator" },
            { ar: "6 ساعات", en: "6.02 h" },
            { ar: "عظام، كلى، قلب، درقية، رئة، دماغ", en: "Bone, renal, cardiac, thyroid, lung, brain" }
          ],
          [
            { ar: "Fluorine-18", en: "Fluorine-18" },
            { ar: "positron", en: "Positron" },
            { ar: "مسرّع دوراني", en: "Cyclotron" },
            { ar: "110 دقائق", en: "109 min" },
            { ar: "FDG PET للأورام والقلب", en: "FDG PET for tumours and myocardium" }
          ],
          [
            { ar: "Iodine-123", en: "Iodine-123" },
            { ar: "gamma", en: "Gamma" },
            { ar: "مسرّع دوراني", en: "Cyclotron" },
            { ar: "13.2 ساعة", en: "13.2 h" },
            { ar: "درقية، MIBG، ‏DaTscan", en: "Thyroid, MIBG, DaTscan" }
          ],
          [
            { ar: "Iodine-131", en: "Iodine-131" },
            { ar: "gamma + beta", en: "Gamma + beta" },
            { ar: "مفاعل", en: "Reactor" },
            { ar: "8 أيام", en: "8.06 d" },
            { ar: "علاج فرط الدرقية وسرطانها، تصوير النقائل", en: "Treating hyperthyroidism and thyroid cancer; metastasis imaging" }
          ],
          [
            { ar: "Gallium-67", en: "Gallium-67" },
            { ar: "gamma", en: "Gamma" },
            { ar: "مسرّع دوراني", en: "Cyclotron" },
            { ar: "78 ساعة", en: "78.3 h" },
            { ar: "التهاب وإنتان، لمفوما", en: "Inflammation and infection, lymphoma" }
          ],
          [
            { ar: "Thallium-201", en: "Thallium-201" },
            { ar: "gamma", en: "Gamma" },
            { ar: "مسرّع دوراني", en: "Cyclotron" },
            { ar: "73.5 ساعة", en: "73.5 h" },
            { ar: "تروية عضلة القلب، جارات الدرقية", en: "Myocardial perfusion, parathyroid" }
          ],
          [
            { ar: "Indium-111", en: "Indium-111" },
            { ar: "gamma", en: "Gamma" },
            { ar: "مسرّع دوراني", en: "Cyclotron" },
            { ar: "2.8 يوم", en: "2.8 d" },
            { ar: "كريات بيضاء موسومة للإنتان، octreotide", en: "Labelled leucocytes for infection, octreotide" }
          ],
          [
            { ar: "Gallium-68", en: "Gallium-68" },
            { ar: "positron", en: "Positron" },
            { ar: "مولّد", en: "Generator" },
            { ar: "68 دقيقة", en: "68 min" },
            { ar: "DOTATOC للأورام العصبية الصمّاء، PSMA للبروستاتا", en: "DOTATOC for neuroendocrine tumours, PSMA for prostate" }
          ],
          [
            { ar: "Carbon-14", en: "Carbon-14" },
            { ar: "beta", en: "Beta" },
            { ar: "مفاعل", en: "Reactor" },
            { ar: "5730 سنة", en: "5730 y" },
            { ar: "اختبارات تنفس in vitro ‏(H. pylori، فرط نمو البكتيريا)", en: "In vitro breath tests (H. pylori, bacterial overgrowth)" }
          ],
          [
            { ar: "Strontium-89", en: "Strontium-89" },
            { ar: "beta", en: "Beta" },
            { ar: "مفاعل", en: "Reactor" },
            { ar: "50.5 يوم", en: "50.5 d" },
            { ar: "علاج نقائل العظام", en: "Treatment of bone metastases" }
          ]
        ]
      }
    },
    {
      h: { ar: "ماذا يمليه عمر النصف وتوقيت التصوير؟", en: "Half-life and imaging timing" },
      paras: [
        {
          ar: "توقيت التصوير بعد الحقن ليس اعتباطيًا: فهو يعكس زمن وصول المستحضر إلى هدفه وانقشاع الخلفية. فحوصات سريعة الالتقاط كتروية الرئة تبدأ فورًا، ودراسات تحتاج توازنًا كمسح العظام تنتظر ساعات، وأخرى بطيئة الخلفية كـ gallium-67 تنتظر يومين إلى ثلاثة أيام كاملة.",
          en: "The delay between injection and imaging is not arbitrary: it reflects the time for the agent to reach its target and for background activity to clear. Fast studies such as lung perfusion start immediately, equilibration studies such as bone scans wait hours, and slow-background agents such as gallium-67 wait a full two to three days."
        },
        {
          ar: "بعض البروتوكولات تتطلب تحضيرًا دوائيًا مرافقًا، كالحجب الدرقي (thyroid blockade) قبل مركّبات اليود المشع التي لا تستهدف الدرقية (MIBG وioflupane) لمنع امتصاص الدرقية لليود الحر.",
          en: "Some protocols need accompanying medication, such as thyroid blockade before radioiodine-labelled agents that do not target the thyroid (MIBG and ioflupane), to prevent thyroid uptake of free iodide."
        }
      ]
    }
  ],
  quiz: [
    {
      q: { ar: "أي مستحضر يُستخدم دراسةً ساكنة لقشرة الكلى وندباتها؟", en: "Which agent is used for a static study of the renal cortex and scarring?" },
      opts: [
        { ar: "99mTc-MAG3", en: "Technetium-99m MAG3" },
        { ar: "99mTc-DMSA", en: "Technetium-99m DMSA" },
        { ar: "99mTc-DTPA", en: "Technetium-99m DTPA" },
        { ar: "99mTc-MAA", en: "Technetium-99m MAA" }
      ],
      a: 1,
      why: {
        ar: "DMSA يثبت في قشرة الكلى ويُصوَّر بعد نحو 3 ساعات دراسة ساكنة، بينما MAG3 وDTPA دراسات ديناميكية للوظيفة وGFR.",
        en: "DMSA fixes in the renal cortex and is imaged after about 3 hours as a static study, while MAG3 and DTPA are dynamic functional and GFR studies."
      }
    },
    {
      q: { ar: "ما المستحضر المستخدم لدراسة تروية الرئة (perfusion)؟", en: "Which agent is used for lung perfusion imaging?" },
      opts: [
        { ar: "رذاذ 99mTc-DTPA المستنشق", en: "Inhaled technetium-99m DTPA aerosol" },
        { ar: "حقن 99mTc-MAA", en: "Injected technetium-99m MAA" },
        { ar: "غاز Xenon-133", en: "Xenon-133 gas" },
        { ar: "99mTc-sulfur colloid فمويًا", en: "Oral technetium-99m sulfur colloid" }
      ],
      a: 1,
      why: {
        ar: "حبيبات MAA تُحقن وريديًا فتحتجز في الشعيرات الرئوية بنسبة تدفق الدم، بينما رذاذ DTPA والزينون لدراسة التهوية.",
        en: "MAA particles are injected intravenously and lodge in pulmonary capillaries in proportion to blood flow; DTPA aerosol and xenon are ventilation agents."
      }
    },
    {
      q: { ar: "متى يبدأ عادة تصوير FDG PET بعد الحقن؟", en: "When does FDG PET imaging typically begin after injection?" },
      opts: [
        { ar: "فورًا دون انتظار", en: "Immediately, with no delay" },
        { ar: "بعد 30 إلى 60 دقيقة", en: "After 30 to 60 minutes" },
        { ar: "بعد 6 ساعات", en: "After 6 hours" },
        { ar: "بعد 48 ساعة", en: "After 48 hours" }
      ],
      a: 1,
      why: {
        ar: "يحتاج FDG نحو 30 إلى 60 دقيقة ليتراكم في الأنسجة المستهلِكة للجلوكوز وتنخفض خلفية الدم، ثم يستمر الالتقاط من 5 إلى 60 دقيقة.",
        en: "FDG needs about 30 to 60 minutes to accumulate in glucose-using tissues and clear from the blood background; acquisition then lasts 5 to 60 minutes."
      }
    }
  ]
},
{
  slug: "production-of-radioisotopes",
  chapter: "molecular",
  title: { ar: "إنتاج النظائر المشعة", en: "Production of radioisotopes" },
  intro: {
    ar: "تُنتَج النظائر المشعة الطبية بثلاث طرق رئيسية: المسرّع الدوراني (cyclotron) والمفاعل النووي (reactor) والمولّد (generator). ولكل طريقة بصمتها من حيث نوع النظائر الناتجة وخصائص اضمحلالها، فهي التي تحدّد أي الفحوصات ممكنة وأين يجب أن يُحضَّر المستحضر.",
    en: "Medical radioisotopes are produced by three main routes: the cyclotron, the nuclear reactor and the radionuclide generator. Each route leaves its signature on the isotopes produced and their decay properties, shaping which studies are possible and where the agent must be prepared."
  },
  sections: [
    {
      h: { ar: "المسرّع الدوراني (cyclotron)", en: "The cyclotron" },
      paras: [
        {
          ar: "يُسمى الإنتاج بالمسرّع الدوراني أيضًا القصف النووي (nuclear bombardment). تُحقن جسيمات مشحونة في مركز حجرة مفرَّغة، ثم تُسرَّع بجهد متناوب عالي التردد بين قطبين مجوَّفين على شكل حرف D يُسميان dees، بينما يجبرها مجال مغناطيسي ساكن كبير على مسار حلزوني يتسع من المركز إلى الحافة.",
          en: "Cyclotron production is also called nuclear bombardment. Charged particles are injected into the centre of a vacuum chamber and accelerated by a high-frequency alternating voltage between two hollow D-shaped electrodes called dees, while a large static magnetic field forces them into a spiral path that widens from centre to edge."
        },
        {
          ar: "عند وصول الجسيمات المسرَّعة إلى الحافة تدخل حجرة القصف وتصطدم بمادة الهدف فتتحول بعض نوى الهدف إلى النظير المشع المطلوب. وبما أن القصف يضيف بروتونات، تكون النواتج غنية بالبروتونات (proton-rich) فتضمحل غالبًا بانبعاث positron أو بالأسر الإلكتروني.",
          en: "At the edge of the chamber the accelerated particles strike a target material and convert some target nuclei into the desired radioisotope. Because bombardment adds protons, the products are proton-rich and typically decay by positron emission or electron capture."
        },
        {
          ar: "من منتجات المسرّع: Fluorine-18 (من قصف ماء غني بـ oxygen-18 بالبروتونات) وهو نظير FDG في PET، وGallium-67 لتصوير الالتهاب والأورام، وThallium-201 لدراسات القلب، إضافة إلى Molybdenum-99 أب التكنيشيوم.",
          en: "Cyclotron products include fluorine-18 (made by bombarding oxygen-18 enriched water with protons), the FDG isotope for PET; gallium-67 for inflammation and tumour imaging; thallium-201 for cardiac studies; and molybdenum-99, the parent of technetium."
        }
      ]
    },
    {
      h: { ar: "المفاعل النووي (reactor)", en: "The nuclear reactor" },
      paras: [
        {
          ar: "في المفاعل ينشطر uranium-235 انشطارًا تلقائيًا إلى شظايا أخف مطلقًا نيوترونين أو ثلاثة في كل انشطار، وتضرب هذه النيوترونات أنوية يورانيوم أخرى في سلسلة متفاعلة ذاتية الاستدامة. تُنزَل مواد الهدف في منافذ داخل المفاعل فتلتقط النيوترونات (neutron capture) وتتحول إلى نظائر أثقل من العنصر نفسه.",
          en: "In a reactor, uranium-235 undergoes spontaneous fission into lighter fragments, releasing two or three neutrons per fission, and these neutrons strike further uranium nuclei in a self-sustaining chain reaction. Target materials lowered into reactor ports capture neutrons and are converted into heavier isotopes of the same element."
        },
        {
          ar: "تُضبط قوة التفاعل بقضبان تحكم (control rods) من مواد ماصة للنيوترونات كالكادميوم والبورون، وبقضبان مهدّئة (moderator) تبطئ النيوترونات السريعة لأن البطيئة أكفأ في إحداث انشطارات جديدة. والنظائر الناتجة بإضافة النيوترونات تقع فوق خط الاستقرار فتكون غنية بالنيوترونات وتضمحل بانبعاث beta ناقص.",
          en: "The reaction is regulated by control rods of neutron-absorbing materials such as cadmium and boron, and by moderator material that slows fast neutrons because slow neutrons initiate fission more efficiently. Neutron-added products sit above the line of stability, so they are neutron-rich and decay by beta-minus emission."
        },
        {
          ar: "من منتجات المفاعل: Iodine-131 لعلاج الدرقية وتصويرها، وXenon-133 لدراسات تهوية الرئة (عمر نصفه نحو 5 أيام فيسهل نقله، بخلاف krypton-81m ذي 13 ثانية)، وMolybdenum-99. ومن عيوب الطريقة أن نسبة ضئيلة فقط من نوى الهدف تُنشَّط، فتكون الغلة منخفضة وترافقها نظائر أخرى غير مرغوبة.",
          en: "Reactor products include iodine-131 for thyroid therapy and imaging, xenon-133 for lung ventilation studies (its roughly 5-day half-life makes it transportable, unlike 13-second krypton-81m), and molybdenum-99. A drawback is that only a tiny fraction of target nuclei is activated, giving low yield and unwanted by-product isotopes."
        }
      ]
    },
    {
      h: { ar: "المولّد (generator)", en: "The radionuclide generator" },
      paras: [
        {
          ar: "المولّد حل أنيق لمشكلة النظائر قصيرة العمر: يُمتَصّ نظير أب (parent) بطيء الاضمحلال على سطح مثل الألومينا داخل عمود زجاجي معقّم محاط بدرع رصاصي أو من يورانيوم منضّب. يضمحل الأب داخل العمود مولّدًا النظير الابن (daughter) قصير العمر المطلوب للتصوير.",
          en: "The generator elegantly solves the short half-life problem: a slow-decaying parent radionuclide is adsorbed onto a surface such as alumina inside a sterile glass column within a lead or depleted-uranium shield. The parent decays inside the column, continuously producing the short-lived daughter needed for imaging."
        },
        {
          ar: "لاستخراج الابن تُمرَّر مادة غاسلة (eluent) — محلول ملحي معقّم عادة — عبر العمود فتجرف الابن وحده إلى قارورة مفرَّغة، وتُسمى العملية الغسل (elution). بعد كل غسلة تهبط نشاطية الابن في العمود إلى الصفر تقريبًا ثم تعاود التراكم باضمحلال الأب حتى الغسلة التالية.",
          en: "To harvest the daughter, an eluting solvent — usually sterile saline — is passed through the column, washing out the daughter alone into an evacuated vial; this process is called elution. After each elution the daughter activity in the column falls to near zero, then rebuilds as more parent decays, ready for the next elution."
        },
        {
          ar: "أشهر مولّد هو Molybdenum-99/Tc-99m الذي يزوّد أقسام الطب النووي بالتكنيشيوم-99m يوميًا — النظير المستخدم في نحو 80% من فحوصات الطب النووي. ومثال آخر مولّد Rubidium-81/Krypton-81m لتهوية الرئة، ويُستخرج فيه الكريبتون الغازي بنفخ الهواء عبر العمود.",
          en: "The best-known generator is molybdenum-99/technetium-99m, which supplies departments daily with technetium-99m — the isotope used in about 80% of nuclear medicine studies. Another example is the rubidium-81/krypton-81m generator for lung ventilation, where the gaseous krypton is drawn off by blowing air through the column."
        }
      ],
      nums: [
        { v: "~80%", ar: "حصة فحوصات الطب النووي المعتمدة على Technetium-99m", en: "Share of nuclear medicine studies using technetium-99m" },
        { v: "66 h / 6 h", ar: "عمرا نصف الأب Mo-99 والابن Tc-99m على الترتيب", en: "Half-lives of parent Mo-99 and daughter Tc-99m" },
        { v: "109 min", ar: "عمر نصف Fluorine-18 منتج المسرّع الدوراني", en: "Half-life of cyclotron-produced fluorine-18" }
      ]
    },
    {
      h: { ar: "مقارنة الطرق الثلاث", en: "Comparing the three routes" },
      paras: [
        {
          ar: "الجدول التالي يجمع الفروق الجوهرية بين الطرق الثلاث: مبدأ الإنتاج، وطبيعة النظائر الناتجة من حيث غناها بالبروتونات أو النيوترونات ونمط اضمحلالها، وأمثلة لكل طريقة.",
          en: "The table below brings together the essential differences between the three routes: the production principle, the character of the resulting isotopes in terms of proton or neutron richness and decay mode, and examples of each method."
        }
      ],
      table: {
        head: [
          { ar: "وجه المقارنة", en: "Feature" },
          { ar: "Cyclotron", en: "Cyclotron" },
          { ar: "Reactor", en: "Reactor" },
          { ar: "Generator", en: "Generator" }
        ],
        rows: [
          [
            { ar: "المبدأ", en: "Principle" },
            { ar: "قصف هدف بجسيمات مشحونة مسرَّعة", en: "Bombarding a target with accelerated charged particles" },
            { ar: "أسر نيوتروني داخل مفاعل انشطاري", en: "Neutron capture inside a fission reactor" },
            { ar: "اضمحلال أب طويل العمر إلى ابن قصير العمر في الموقع", en: "Decay of a long-lived parent to a short-lived daughter on site" }
          ],
          [
            { ar: "طبيعة النواتج", en: "Product character" },
            { ar: "غنية بالبروتونات: positron أو أسر إلكتروني", en: "Proton-rich: positron emission or electron capture" },
            { ar: "غنية بالنيوترونات: beta ناقص", en: "Neutron-rich: beta-minus decay" },
            { ar: "يعتمد على زوج الأب والابن المختار", en: "Depends on the chosen parent-daughter pair" }
          ],
          [
            { ar: "أمثلة", en: "Examples" },
            { ar: "F-18، ‏Ga-67، ‏Tl-201", en: "F-18, Ga-67, Tl-201" },
            { ar: "I-131، ‏Xe-133، ‏Mo-99", en: "I-131, Xe-133, Mo-99" },
            { ar: "Tc-99m من Mo-99، ‏Kr-81m من Rb-81", en: "Tc-99m from Mo-99, Kr-81m from Rb-81" }
          ]
        ]
      }
    }
  ],
  quiz: [
    {
      q: { ar: "كيف يُستخرج النظير الابن من مولّد Mo-99/Tc-99m؟", en: "How is the daughter isotope obtained from a Mo-99/Tc-99m generator?" },
      opts: [
        { ar: "بتسخين العمود حتى يتبخر التكنيشيوم", en: "By heating the column until the technetium evaporates" },
        { ar: "بتمرير محلول ملحي معقّم عبر العمود (elution) فيجرف التكنيشيوم إلى قارورة", en: "By passing sterile saline through the column (elution), washing the technetium into a vial" },
        { ar: "بقصف العمود بالنيوترونات", en: "By bombarding the column with neutrons" },
        { ar: "بتذويب عمود الألومينا كاملًا", en: "By dissolving the whole alumina column" }
      ],
      a: 1,
      why: {
        ar: "الغسل بمحلول ملحي يفصل الابن (pertechnetate) عن الأب الممتز على الألومينا دون إزالته، فيبقى المولّد صالحًا لغسلات متكررة.",
        en: "Saline elution separates the daughter (pertechnetate) from the parent adsorbed on alumina without removing the parent, so the generator can be eluted repeatedly."
      }
    },
    {
      q: { ar: "لماذا تضمحل منتجات المفاعل غالبًا بانبعاث beta ناقص؟", en: "Why do reactor products usually decay by beta-minus emission?" },
      opts: [
        { ar: "لأنها غنية بالبروتونات", en: "Because they are proton-rich" },
        { ar: "لأن أسر النيوترون يجعلها غنية بالنيوترونات وفوق خط الاستقرار", en: "Because neutron capture makes them neutron-rich, above the line of stability" },
        { ar: "لأن المفاعل يرفع طاقتها الحرارية", en: "Because the reactor heats them up" },
        { ar: "لأنها تُنتج داخل الماء", en: "Because they are produced in water" }
      ],
      a: 1,
      why: {
        ar: "إضافة نيوترونات تنشئ نظائر ثقيلة غنية بالنيوترونات، واستعادة الاستقرار تتم بتحويل نيوترون إلى بروتون مع انبعاث beta ناقص.",
        en: "Adding neutrons creates heavy neutron-rich isotopes; stability is regained by converting a neutron into a proton with beta-minus emission."
      }
    },
    {
      q: { ar: "ما وظيفة قضبان التحكم (control rods) في المفاعل؟", en: "What is the role of control rods in a reactor?" },
      opts: [
        { ar: "تسريع النيوترونات لزيادة الانشطار", en: "To speed up neutrons and increase fission" },
        { ar: "امتصاص النيوترونات بمواد كالكادميوم والبورون لضبط التفاعل المتسلسل", en: "To absorb neutrons using materials such as cadmium and boron, regulating the chain reaction" },
        { ar: "تبريد قلب المفاعل بالماء", en: "To cool the reactor core with water" },
        { ar: "حماية العاملين من إشعاع gamma", en: "To shield workers from gamma radiation" }
      ],
      a: 1,
      why: {
        ar: "قضبان التحكم ماصّة للنيوترونات فتحدّ من استمرار الانشطار، بينما قضبان التهدئة (moderator) تبطئ النيوترونات لتزيد كفاءتها الانشطارية.",
        en: "Control rods absorb neutrons and limit further fission, whereas moderator material slows neutrons to make them more effective at causing fission."
      }
    }
  ]
},
{
  slug: "spect-imaging",
  chapter: "molecular",
  title: { ar: "تصوير SPECT", en: "SPECT imaging" },
  intro: {
    ar: "‏SPECT هو التصوير المقطعي المحوسب بانبعاث الفوتون المفرد: طريقة الحصول على صور نووية مقطعية، نظير CT في عالم الأشعة السينية. تدور فيه كاميرا gamma حول المريض ملتقطة مناظر مستوية من زوايا كثيرة، ثم تُعاد تركيب المقاطع العرضية حاسوبيًا من هذه الإسقاطات.",
    en: "SPECT — single photon emission computed tomography — obtains cross-sectional nuclear images, the nuclear counterpart of CT in X-ray imaging. A gamma camera rotates around the patient collecting planar views from many angles, and cross-sectional slices are then reconstructed computationally from these projections."
  },
  sections: [
    {
      h: { ar: "ماذا يعني الاسم؟", en: "What the name means" },
      bullets: [
        {
          ar: "فوتون مفرد (single photon): تُكشف فوتونات gamma مفردة ناتجة عن اضمحلال النويدة — بخلاف PET التي تعتمد الكشف المتزامن لفوتونين ناتجين عن إفناء positron.",
          en: "Single photon: individual gamma photons from radionuclide decay are detected — unlike PET, which relies on simultaneous detection of the two photons from positron annihilation."
        },
        {
          ar: "انبعاث (emission): النشاطية المشعة تنبعث من داخل المريض نفسه، لا تُنفَّذ عبره من مصدر خارجي كما في الأشعة السينية.",
          en: "Emission: the radioactivity originates inside the patient rather than being transmitted through the patient from an external source as in X-ray imaging."
        },
        {
          ar: "مقطعي محوسب (computed tomography): تُبنى شرائح يمكن إعادة تركيبها إلى بيانات ثلاثية الأبعاد.",
          en: "Computed tomography: slices are acquired that can be reconstructed into three-dimensional data."
        },
        {
          ar: "يصلح SPECT لأي مستحضر مشع بشرطين: أن لا يتغير توزّعه جوهريًا أثناء الالتقاط (20 إلى 40 دقيقة عادة)، وأن يتاح زمن كافٍ لجمع فوتونات كافية.",
          en: "SPECT works with any radiopharmaceutical provided its distribution does not change significantly during acquisition (typically 20 to 40 minutes) and enough time is available to collect sufficient photons."
        }
      ]
    },
    {
      h: { ar: "التجهيزات: الرؤوس والجسر والهجين SPECT/CT", en: "Equipment: heads, gantry and hybrid SPECT/CT" },
      paras: [
        {
          ar: "الأنظمة الحديثة كاميرات متعددة الرؤوس — غالبًا رأسان واسعا المجال — محمولة على جسر (gantry) بتقنية الحلقة المنزلقة (slip ring) تتيح الدوران المستمر حول المريض، ويوضع الرأسان على هيئة H متقابلين أو L متعامدين بحسب الدراسة. الكاميرات أحادية الرأس التي تدور ببطء لم تعد شائعة لطول زمن الالتقاط.",
          en: "Modern systems are multiple-head cameras — usually two large field-of-view heads — mounted on a gantry with slip-ring technology that allows continuous rotation around the patient. The heads can be set in an opposed H configuration or a perpendicular L configuration depending on the study. Single-head cameras, with their long acquisition times, are no longer common."
        },
        {
          ar: "في الأنظمة الهجينة SPECT/CT يوضع مصدر أشعة X وصف كواشف بين رأسي كاميرا gamma، فتُدمج الصورة الوظيفية مع صورة CT تشريحية، وتُستخدم بيانات CT أيضًا لتصحيح التوهين (attenuation correction) في صور SPECT.",
          en: "In hybrid SPECT/CT an X-ray source and detector array sit between the gamma camera heads, so the functional images are fused with anatomical CT images; the CT data also provide attenuation correction for the SPECT images."
        },
        {
          ar: "يشترط في الجسر مركز دوران (centre of rotation) مضبوط المحاذاة بدقة، وسرعة دوران ثابتة، وكواشف موازية لمحور الدوران. أما طاولة المريض فيجب أن تكون مريحة للدراسات الطويلة وخفيفة التوهين لتسمح بالتقاط كامل بزاوية 360 درجة.",
          en: "The gantry needs an accurately aligned centre of rotation, constant rotational speed and detectors parallel to the axis of rotation. The patient table must be comfortable for long acquisitions and of low attenuation to allow a full 360-degree acquisition."
        }
      ]
    },
    {
      h: { ar: "المُصادمات ومعالم الالتقاط", en: "Collimators and acquisition parameters" },
      paras: [
        {
          ar: "يُستخدم في SPECT مُصادم عالي الدقة لتعظيم الدقة المكانية عبر عمق المريض كله وتقليل تشوه الصورة أثناء إعادة التركيب. الثقوب المتوازية يجب أن تكون منتظمة الحجم والحواجز ما أمكن، أما المُصادمات غير المتوازية — كالمروحة fan beam التي تكبّر وتملأ مجال الكشف، والمفيدة خصوصًا في تصوير الدماغ — فلا تُستخدم إلا مع مدارات دائرية غير ملاصقة للجسم.",
          en: "SPECT uses a high-resolution collimator to maximise spatial resolution throughout the patient depth and minimise distortion during reconstruction. Parallel holes and septa should be as uniform as possible; non-parallel designs — such as the fan-beam collimator, which magnifies to fill more of the detector and is particularly useful for brain imaging — can only be used with circular, non-body-contouring orbits."
        },
        {
          ar: "كما في التصوير المستوي، القرب من المريض جوهري: تكتشف حساسات الأشعة تحت الحمراء على وجه المُصادم محيط الجسم تلقائيًا لتقليل المسافة بأمان، وتوجد حساسات ضغط تمنع أي تلامس مع المريض. وتُستخدم عادة مصفوفة 128 × 128 في الأنظمة ثنائية الرأس، بزمن 20 إلى 40 ثانية لكل إسقاط، وبنمط دوران مستمر أو خطوة-والتقاط.",
          en: "As in planar imaging, closeness to the patient is essential: infrared sensors on the collimator face enable automatic body contouring to minimise distance safely, and pressure-sensitive devices prevent any contact with the patient. A 128 × 128 matrix is typical for dual-head systems, with 20 to 40 seconds per projection frame and either continuous or step-and-shoot rotation."
        }
      ],
      nums: [
        { v: "128 × 128", ar: "مصفوفة معتادة في أنظمة SPECT الحديثة ثنائية الرأس", en: "Typical matrix of a modern dual-head SPECT system" },
        { v: "20–40 s", ar: "زمن الالتقاط لكل إسقاط", en: "Acquisition time per projection frame" },
        { v: "20–40 min", ar: "المدة الكلية النموذجية لدراسة SPECT", en: "Typical total SPECT acquisition duration" }
      ]
    },
    {
      h: { ar: "إعادة التركيب وتصحيح التوهين", en: "Reconstruction and attenuation correction" },
      paras: [
        {
          ar: "تمر إعادة التركيب بثلاث خطوات: أولًا تُستخرج من كل زاوية إسقاط ملفات أحادية البعد لقياسات النشاطية. ثانيًا تُرشَّح هذه الملفات بمرشحات توازن بين تقليل الضجيج والحفاظ على الدقة، ويحدِّد تردد القطع (cut-off) أقصى تردد مكاني يبقى في الصورة. ثالثًا تُبنى الشريحة بالإسقاط الخلفي (back projection) أو بإعادة التركيب التكرارية (iterative reconstruction) من الملفات المرشَّحة.",
          en: "Reconstruction has three stages. First, one-dimensional profiles of measured activity are formed for each projection angle. Second, the profiles are filtered, balancing noise reduction against preservation of resolution, with the filter cut-off frequency setting the maximum spatial frequency retained. Third, the slice is built from the filtered profiles by back projection or iterative reconstruction."
        },
        {
          ar: "تصحيح التوهين يتم بطريقتين: تحليلية تفترض توهينًا منتظمًا وتعدّل عدّات البكسلات بحسب بعدها عن الكاميرا وحافة الجسم، أو بالقياس المباشر حيث تزوّد بيانات CT خريطة توهين حقيقية تُعدَّل العدّات وفقها.",
          en: "Attenuation is corrected in two ways: analytically, assuming uniform attenuation and adjusting pixel counts according to distance from the camera and the body edge, or by direct measurement, where CT data generate a true attenuation map against which counts are adjusted."
        },
        {
          ar: "لتقليل العيوب: يُمنع تحرك المريض، ويُبقى موضع الحقن شديد النشاطية خارج مجال الرؤية، وتُرفع الذراعان فوق الرأس في تصوير الصدر والبطن لتقليل التوهين والمسافة معًا.",
          en: "Artefacts are minimised by preventing patient movement, keeping the very hot injection site out of the field of view, and raising the arms above the head for chest and abdominal imaging to reduce both attenuation and detector distance."
        }
      ]
    },
    {
      h: { ar: "حالة خاصة: SPECT القلبي", en: "Special case: cardiac SPECT" },
      paras: [
        {
          ar: "القلب يقع بعيدًا عن مركز الجسم، لذلك يُصوَّر بمدى 180 درجة فقط من الإسقاط المائل الخلفي الأيسر إلى الأمامي الأيمن، مع وضع الرأسين على هيئة L لتقليل المسافة والتوهين. ويُستخدم البوّاب القلبي ECG لإظهار حركة الجدار، حيث تُجمع 8 إطارات لكل دورة قلبية في مصفوفة 64 × 64 عند كل زاوية إسقاط.",
          en: "The heart lies off-centre, so it is imaged over only 180 degrees, from the left posterior oblique to the right anterior oblique projection, with the heads in L configuration to reduce distance and attenuation. ECG gating demonstrates wall motion, acquiring 8 frames per cardiac cycle into a 64 × 64 matrix at each projection angle."
        }
      ]
    }
  ],
  quiz: [
    {
      q: { ar: "لماذا يُعد ضبط مركز الدوران (centre of rotation) حرجًا في SPECT؟", en: "Why is accurate centre-of-rotation alignment critical in SPECT?" },
      opts: [
        { ar: "لأن إعادة التركيب تفترض تطابق مركز دوران الجسر مع مركز الكواشف، وأي انحراف يشوّه الصورة", en: "Because reconstruction assumes the gantry centre of rotation matches the detector centre; any offset distorts the image" },
        { ar: "لأنه يحدد طاقة الفوتونات المقبولة", en: "Because it sets the accepted photon energy" },
        { ar: "لأنه يتحكم في سرعة اضمحلال النظير", en: "Because it controls the isotope decay rate" },
        { ar: "لأنه يمنع تسخين البلّورة", en: "Because it prevents crystal heating" }
      ],
      a: 0,
      why: {
        ar: "الإسقاط الخلفي يعيد توزيع العدّات اعتمادًا على هندسة دوران مفترضة؛ انحراف مركز الدوران الفعلي عن المفترض يولّد عيوبًا وتشويشًا في الشرائح المعاد تركيبها.",
        en: "Back projection redistributes counts using assumed rotation geometry; a mismatch between the true and assumed centre of rotation produces artefacts and blurring in the reconstructed slices."
      }
    },
    {
      q: { ar: "ما فائدة بيانات CT في نظام SPECT/CT الهجين إضافة إلى التوطين التشريحي؟", en: "Besides anatomical localisation, what do CT data provide in hybrid SPECT/CT?" },
      opts: [
        { ar: "زيادة نشاطية المستحضر المشع", en: "Increased radiopharmaceutical activity" },
        { ar: "خريطة توهين لتصحيح التوهين في صور SPECT", en: "An attenuation map for attenuation correction of the SPECT images" },
        { ar: "مزامنة الالتقاط مع ECG", en: "ECG synchronisation of the acquisition" },
        { ar: "تبريد كواشف gamma", en: "Cooling of the gamma detectors" }
      ],
      a: 1,
      why: {
        ar: "قيم التوهين المستخرجة من CT تسمح بتصحيح عدّات SPECT بكسلًا ببكسل وفق توهين الأنسجة الفعلي عند كل موضع.",
        en: "CT-derived attenuation values allow pixel-by-pixel correction of SPECT counts according to the true tissue attenuation at each location."
      }
    },
    {
      q: { ar: "لماذا يُستخدم مُصادم المروحة (fan beam) في تصوير SPECT للدماغ؟", en: "Why is a fan-beam collimator used for brain SPECT?" },
      opts: [
        { ar: "لأنه يخفض طاقة الفوتونات", en: "Because it lowers photon energy" },
        { ar: "لأنه يكبّر صورة الدماغ فيملأ جزءًا أكبر من مجال الكشف ويستغله بكفاءة", en: "Because it magnifies the brain image to fill more of the detector field of view, using it efficiently" },
        { ar: "لأنه يلغي الحاجة إلى إعادة التركيب", en: "Because it removes the need for reconstruction" },
        { ar: "لأنه يسمح بزمن التقاط أقصر من ثانية واحدة", en: "Because it allows sub-second acquisitions" }
      ],
      a: 1,
      why: {
        ar: "التكبير في مُصادم المروحة يوظّف مساحة أكبر من الكاشف لبيانات الدماغ فيحسّن استخدام العدّات والدقة، بشرط مدار دائري غير ملاصق.",
        en: "Fan-beam magnification devotes more of the detector area to brain data, improving count usage and resolution, provided a circular non-contouring orbit is used."
      }
    }
  ]
},
{
  slug: "pet-imaging",
  chapter: "molecular",
  title: { ar: "تصوير PET", en: "PET imaging" },
  intro: {
    ar: "‏PET — التصوير المقطعي بانبعاث البوزيترون — تصوير نووي مقطعي يعتمد على الرصد المتزامن لفوتونَي gamma الناتجين عن إفناء (annihilation) بوزيترون بإلكترون. هذه الهندسة الفريدة تمنح PET حساسية ودقة تفوقان SPECT، ويهيمن عليه نظير Fluorine-18 في صورة FDG مقياسًا لاستقلاب الجلوكوز.",
    en: "PET — positron emission tomography — is tomographic nuclear imaging based on the near-simultaneous detection of the two gamma photons produced when a positron annihilates with an electron. This unique geometry gives PET sensitivity and resolution beyond SPECT, and it is dominated by fluorine-18 as FDG, a tracer of glucose metabolism."
  },
  sections: [
    {
      h: { ar: "فيزياء الإفناء", en: "Annihilation physics" },
      paras: [
        {
          ar: "تبدأ العملية باضمحلال بوزيتروني: نويدة غنية بالبروتونات — تُنتَج غالبًا في مسرّع دوراني — تطلق positron وهو جسيم مضاد للإلكترون له كتلته نفسها وشحنة موجبة. ولا يحدث هذا الاضمحلال إلا إذا تجاوز فرق الطاقة بين النواة الأم والابنة 1.022 MeV، أي ضعف كتلة الطاقة للإلكترون الواحد (2 × 0.511 MeV).",
          en: "The process begins with positron decay: a proton-rich radionuclide — usually cyclotron-produced — emits a positron, the electron antiparticle, with the same mass but positive charge. This decay can only occur if the energy difference between parent and daughter nuclei exceeds 1.022 MeV, twice the 0.511 MeV rest energy of one electron."
        },
        {
          ar: "يسافر البوزيترون مسافة قصيرة داخل النسيج متصادمًا مع الذرات وفَاقدًا طاقته بالتأيين — وهو مسار متعرج يودع معظم جرعة المريض الإشعاعية — ثم يفنى مع إلكترون. ومسافة هذا السفر (positron range) متغيرة، وهي أحد حدود دقة PET المكانية.",
          en: "The positron travels a short distance through tissue, colliding with atoms and losing energy by ionisation — a tortuous path that deposits most of the patient radiation dose — before annihilating with an electron. This travel distance, the positron range, is variable and is one of the fundamental limits on PET spatial resolution."
        },
        {
          ar: "عند الإفناء تتحول الكتلتان إلى فوتونين طاقة كل منهما 511 keV. ولأن الزخم الابتدائي صفر تقريبًا، ينطلق الفوتونان في اتجاهين متعاكسين تمامًا (180 درجة) حفاظًا على الزخم.",
          en: "At annihilation the two masses convert into two photons of 511 keV each. Because the initial momentum is essentially zero, the photons must travel in exactly opposite directions (180 degrees apart) to conserve momentum."
        }
      ],
      nums: [
        { v: "511 keV", ar: "طاقة كل فوتون من فوتونَي الإفناء", en: "Energy of each annihilation photon" },
        { v: "1.022 MeV", ar: "الحد الأدنى لفرق الطاقة اللازم للاضمحلال البوزيتروني", en: "Minimum energy difference required for positron decay" },
        { v: "~1 ns", ar: "نافذة التزامن لقبول حدثين كزوج إفناء واحد", en: "Coincidence timing window for accepting two events as one annihilation" }
      ]
    },
    {
      h: { ar: "ماسح PET وبلّوراته", en: "The PET scanner and its crystals" },
      paras: [
        {
          ar: "يتكون الماسح من كتل كواشف (detector blocks) مرتبة في حلقة حول المريض على جسر، كل كتلة بلّورة مقسّمة بحزوز إلى عناصر كشف صغيرة تفصل بينها مادة عاكسة تمنع تسرّب الضوء بين العناصر، وتقرأ كل كتلة أربعة أنابيب مضاعِفة ضوئية. البلّورة المثالية لطاقة 511 keV عالية معامل التوهين الخطي، وذات نسبة عالية من التفاعل الكهروضوئي إلى Compton، ووفرة في ضوء الوميض، وزمن اضمحلال ضوئي قصير.",
          en: "The scanner consists of detector blocks arranged in a ring around the patient on a gantry. Each block is a crystal cut into small detector elements separated by reflective material that prevents light cross-talk, and each block is viewed by four photomultiplier tubes. The ideal crystal for 511 keV photons has a high linear attenuation coefficient, a high photoelectric-to-Compton interaction ratio, high light output and a short scintillation decay time."
        },
        {
          ar: "بلّورة NaI المستعملة في كاميرات gamma لا تصلح لـ PET لأن معامل توهينها لا يكفي لإيقاف فوتونات 511 keV. الأكثر استعمالًا تاريخيًا هو germanate البزموت BGO رغم أن إنتاجه الضوئي وزمن اضمحلاله أسوأ من NaI، وتتفوق عليه مواد أحدث مثل LSO وGSO بخصائص أنسب.",
          en: "The NaI crystal of gamma cameras is unsuitable for PET because its attenuation coefficient is too low to stop 511 keV photons. The most widely used PET scintillator has been bismuth germanate (BGO), despite light output and decay time inferior to NaI; newer materials such as LSO and GSO offer more suitable properties."
        }
      ]
    },
    {
      h: { ar: "الكشف المتزامن وخط الاستجابة", en: "Coincidence detection and the line of response" },
      paras: [
        {
          ar: "لا تُقبل الأحداث فرادى: يجب أن يكشف عنصران متقابلان فوتونًا في اللحظة نفسها تقريبًا (ضمن نحو نانوثانية واحدة) حتى يُحتسب الحدثان ناتجين عن إفناء واحد. يُسمى هذا الاقتران تزامنًا (coincidence) ويُسمى الخط الواصل بين العنصرين خط الاستجابة (line of response, LOR)، وعلى امتداده وقع الإفناء في موضع ما.",
          en: "Events are not accepted singly: two opposite detector elements must each register a photon at essentially the same instant (within about a nanosecond) for the pair to count as one annihilation. This pairing is a coincidence, and the line joining the two elements is the line of response (LOR), along which the annihilation occurred at some point."
        },
        {
          ar: "بهذا المعنى يتحقق التصويب (collimation) في PET إلكترونيًا من هندسة الإفناء نفسها، فلا حاجة إطلاقًا إلى شبكات الرصاص المستعملة في التصوير المستوي وSPECT. وتسجّل العناصر أيضًا الطاقة المودعة لاستخدامها في رفض التشتت.",
          en: "In this sense PET achieves collimation electronically, from annihilation geometry itself, and the lead collimator grids of planar imaging and SPECT are not required at all. The elements also record deposited energy, used for scatter rejection."
        }
      ]
    },
    {
      h: { ar: "الالتقاط ثنائي وثلاثي الأبعاد والتزامنات غير المرغوبة", en: "2D versus 3D acquisition and unwanted coincidences" },
      paras: [
        {
          ar: "في الالتقاط ثنائي الأبعاد تُقبل فقط التزامنات المحصورة في شريحة واحدة، بفضل حلقات تصويب من التنغستن عالي التوهين ترفض الفوتونات المائلة القادمة من شرائح أخرى. وفي الالتقاط ثلاثي الأبعاد لا توجد حلقات، فتُقبل تزامنات من حجم نسيجي أكبر بكثير فيرتفع معدل العدّ الكلي — مفيد حين يكون التشتت قليلًا أو النشاطية منخفضة، كما في تصوير الدماغ والأطفال.",
          en: "In 2D acquisition only coincidences confined to a single slice are accepted, using highly attenuating tungsten septa rings to reject oblique photons from other slices. In 3D acquisition there are no septa, so coincidences from a much larger tissue volume are accepted and total count rate rises — useful when scatter is low or activity is limited, as in brain and paediatric imaging."
        },
        {
          ar: "نوعان من التزامن الزائف يولّدان خطوط استجابة وهمية: تزامن التشتت (scatter coincidence) حين يغيّر أحد فوتونَي الإفناء نفسه اتجاهه بالتشتت قبل الكشف، ويزداد مع كبر حجم الجسم ومع الالتقاط ثلاثي الأبعاد ويُعالج جزئيًا بالتمييز الطاقي رغم اتساع نافذة القمة الضوئية بسبب ضعف الدقة الطاقية للبلّورات. وتزامن العشوائية (random coincidence) حين ينتمي الفوتونان إلى إفنائين مختلفين، ويزداد بارتفاع النشاطية المعطاة واتساع نافذة التزامن وبالالتقاط ثلاثي الأبعاد.",
          en: "Two kinds of false coincidence create spurious lines of response. A scatter coincidence occurs when one photon of a true pair changes direction by scattering before detection; it increases with body size and with 3D acquisition, and is only partly controlled by energy discrimination because the wide photopeak window follows from the scintillators poor energy resolution. A random coincidence pairs photons from two different annihilations; it increases with administered activity, with a wider coincidence window and with 3D acquisition."
        }
      ]
    },
    {
      h: { ar: "تصحيحات البيانات وإعادة التركيب", en: "Data corrections and reconstruction" },
      bullets: [
        {
          ar: "تصحيح التوهين: توهين PET أشد منه في SPECT لطول مسار الفوتونين عبر الجسم؛ يُصحَّح بافتراض شكل المقطع وتوهين منتظم، أو بقياس نفاذية فوتونات 511 keV عبر المريض لكل خط استجابة بمصدر قضيبي دوّار (germanium-68/gallium-68) بلا مريض ثم بوجوده — وفي الأنظمة الحديثة تتولى CT هذه المهمة.",
          en: "Attenuation correction: attenuation is greater in PET than SPECT because the photon pair crosses the whole body; it is corrected by assuming the body contour and uniform attenuation, or by measuring 511 keV transmission along each line of response with a rotating rod source (germanium-68/gallium-68) with and without the patient — in modern systems CT performs this role."
        },
        {
          ar: "المعايرة (normalisation): تختلف عناصر الكشف في أبعادها وحصتها من ضوء الوميض الواصل إلى الـ PMTs، فيُحسب بمسح المصدر القضيبي بلا جسم عامل تصحيح لكل خط استجابة يساوي عدّاته مقسومة على متوسط عدّات كل الخطوط.",
          en: "Normalisation: detector elements differ in dimensions and in how much scintillation light reaches their PMTs, so a rod-source scan without an object yields a correction factor for each line of response — its measured counts divided by the average counts over all lines."
        },
        {
          ar: "الزمن الميت (dead time): بعد كل كشف يعمى العنصر فترة قصيرة فيضيع جزء من العدّات خاصة في الالتقاط ثلاثي الأبعاد عالي المعدل؛ يُقاس الزمن الميت وتُستكمل العدّات الضائعة بخوارزميات رياضية.",
          en: "Dead time: after each detection an element is briefly blind, losing counts especially in high-rate 3D scanning; dead time is measured and mathematical models extrapolate the lost counts."
        },
        {
          ar: "اضمحلال النشاطية: أثناء انتقال الماسح على طول جسم المريض تضمحل النشاطية، فتُصحَّح عدّات الأسِرّة المتأخرة بعامل اضمحلال معروف. ثم تُعاد تركيب البيانات بالإسقاط الخلفي المرشَّح أو بالطرق التكرارية.",
          en: "Decay: activity decays as the scanner steps along the patient, so later bed positions are corrected by the known decay factor. Data are then reconstructed by filtered back projection or iterative methods."
        }
      ]
    }
  ],
  quiz: [
    {
      q: { ar: "لماذا لا يحتاج PET إلى مُصادمات رصاصية كالمستعملة في SPECT؟", en: "Why does PET not need the lead collimators used in SPECT?" },
      opts: [
        { ar: "لأن فوتونات 511 keV لا تتشتت داخل الجسم", en: "Because 511 keV photons do not scatter in the body" },
        { ar: "لأن الكشف المتزامن لفوتونين متقابلين يحدّد خط الاستجابة هندسيًا — تصويب إلكتروني", en: "Because coincidence detection of two opposite photons defines the line of response geometrically — electronic collimation" },
        { ar: "لأن بلّورة BGO تمتص كل الفوتونات المائلة", en: "Because the BGO crystal absorbs all oblique photons" },
        { ar: "لأن البوزيترونات نفسها تتحرك في خطوط مستقيمة", en: "Because the positrons themselves travel in straight lines" }
      ],
      a: 1,
      why: {
        ar: "اتجاه خط الاستجابة يُعرف من موضعَي العنصرين المتزامنين، فتقوم هندسة الإفناء مقام المُصادم الفيزيائي.",
        en: "The line of response is known from the positions of the two coincident elements, so annihilation geometry replaces the physical collimator."
      }
    },
    {
      q: { ar: "أي مما يلي يزيد تزامنات العشوائية (random coincidences)؟", en: "Which of the following increases random coincidences?" },
      opts: [
        { ar: "تقليل النشاطية المعطاة", en: "Reducing the administered activity" },
        { ar: "تضييق نافذة الطاقة", en: "Narrowing the energy window" },
        { ar: "زيادة النشاطية المعطاة واتساع نافذة التزامن", en: "Higher administered activity and a wider coincidence timing window" },
        { ar: "استخدام الالتقاط ثنائي الأبعاد بحلقات التنغستن", en: "Using 2D acquisition with tungsten septa" }
      ],
      a: 2,
      why: {
        ar: "العشوائيات تنشأ من اقتران فوتونين من إفنائين مختلفين، واحتمالها يرتفع مع معدل العدّات المفردة (النشاطية) ومع طول نافذة التزامن الزمنية.",
        en: "Randoms pair photons from different annihilations; their probability rises with the singles count rate (activity) and with the length of the timing window."
      }
    },
    {
      q: { ar: "لماذا تُستخدم بلّورة BGO أو LSO في PET بدل NaI(Tl)؟", en: "Why are BGO or LSO crystals used in PET instead of NaI(Tl)?" },
      opts: [
        { ar: "لأنها أرخص ثمنًا", en: "Because they are cheaper" },
        { ar: "لأن معامل التوهين الخطي لـ NaI لا يكفي لإيقاف فوتونات 511 keV بكفاءة", en: "Because the linear attenuation coefficient of NaI is too low to stop 511 keV photons efficiently" },
        { ar: "لأن NaI لا يصدر أي ضوء وميضي", en: "Because NaI produces no scintillation light" },
        { ar: "لأنها لا تحتاج إلى أنابيب مضاعِفة ضوئية", en: "Because they need no photomultiplier tubes" }
      ],
      a: 1,
      why: {
        ar: "فوتونات الإفناء بطاقة 511 keV تحتاج بلّورات عالية الكثافة والتوهين مثل BGO وLSO؛ كفاءة NaI عند هذه الطاقة ضعيفة جدًا.",
        en: "Annihilation photons at 511 keV require dense, high-attenuation crystals such as BGO and LSO; NaI efficiency at this energy is far too low."
      }
    }
  ]
},
{
  slug: "nm-image-quality",
  chapter: "molecular",
  title: { ar: "جودة الصورة في الطب النووي", en: "NM image quality" },
  intro: {
    ar: "تتحدد جودة الصورة النووية — كما في بقية وسائل التصوير — بثلاثة عوامل كبرى: التباين (contrast) والضجيج (noise) والدقة المكانية (spatial resolution). لكن خصوصية الطب النووي أن عدّاته شحيحة بطبيعتها، فتتشابك العوامل الثلاثة في مقايضات لا مفر منها بين العدّات والدقة والزمن.",
    en: "As in every other modality, nuclear medicine image quality rests on three major factors: contrast, noise and spatial resolution. The specialty of nuclear medicine is that counts are inherently scarce, so the three factors are locked together in unavoidable trade-offs between counts, resolution and time."
  },
  sections: [
    {
      h: { ar: "التباين: من الجسم إلى الصورة", en: "Contrast: from subject to image" },
      paras: [
        {
          ar: "تباين الصورة النووية وليد تفاضل امتصاص الأنسجة للمستحضر المشع: فقد تكون الآفة أحرّ من محيطها (تباين موجب) أو أبرد منه (تباين سالب). ويُفرَّق بين تباين الجسم (subject contrast) وهو خاصية الجسم نفسه — نشاطية الآفة لكل وحدة حجم نسبة إلى نشاطية النسيج السليم، ويُحسب ‎(AL − AT) / AT‎ — وبين تباين الصورة (image contrast) وهو الفرق الظاهر في العرض مقاسًا بكثافة العدّات (count density) أي العدّات لكل وحدة مساحة أو لكل بكسل.",
          en: "Nuclear image contrast arises from differential radiopharmaceutical uptake: a lesion may be hotter than its surroundings (positive contrast) or colder (negative contrast). A distinction is made between subject contrast, a property of the object itself — lesion activity per unit volume relative to healthy tissue activity, calculated as (AL − AT) / AT — and image contrast, the displayed difference measured as count density, that is counts per unit area or per pixel."
        },
        {
          ar: "عوامل كثيرة تُضعف تباين الصورة قبل أن يصل إلى العين: صغر تباين الجسم أصلًا، وإشعاع الخلفية المضاف فوق الصورة كلها (نشاطية فوق الآفة وتحتها أو مصادر قريبة)، واختراق الفوتونات لحواجز المُصادم، والتشتت داخل المريض، وتوهين آفة عميقة أكثر من سطح محيطها، وحركة المريض، وضعف دقة الكاميرا المكانية.",
          en: "Many factors degrade image contrast before it reaches the eye: intrinsically low subject contrast; background radiation superimposed over the whole image (activity above and below the lesion, or nearby sources); septal penetration of the collimator; scatter within the patient; greater attenuation of a deep lesion than of its surroundings; patient movement; and poor camera spatial resolution."
        }
      ]
    },
    {
      h: { ar: "الضجيج: بنيوي وعشوائي", en: "Noise: structured and random" },
      paras: [
        {
          ar: "الضجيج البنيوي (structured noise) كثافة عدّات غير عشوائية تتداخل مع الهدف: امتصاص في تراكيب لا تهمّنا (كعضلات مشدودة بعد جهد أو أمعاء في دراسة gallium)، أو عيوب في نظام التصوير كعدم انتظام الكاميرا. أما الضجيج العشوائي (random noise) — ويُسمى أيضًا العتامة الكمّية (quantum mottle) — فهو الأهم مقدارًا وينشأ من عشوائية الاضمحلال الإشعاعي ذاته: فانحراف العدّات المعياري ‎σ = √N‎.",
          en: "Structured noise is non-random count density that interferes with the target: uptake in structures of no interest (such as tense muscles after exertion or bowel in a gallium study), or imaging system faults such as camera non-uniformity. Random noise — also called quantum mottle — is the larger contributor and arises from the randomness of radioactive decay itself: the standard deviation of counts is σ = √N."
        },
        {
          ar: "من هذه العلاقة تتبع باقي المقادير: نسبة الإشارة إلى الضجيج ‎SNR = N/√N = √N‎، وتباين الضجيج النسبي ‎CN = 1/√N = 1/√(A·S)‎ حيث A المساحة وS كثافة العدّات. والنتيجة العملية ثابتة: الضجيج النسبي يهبط مع الجذر التربيعي للعدّات فقط، فمضاعفة SNR تتطلب أربعة أضعاف العدّات.",
          en: "The other quantities follow from it: the signal-to-noise ratio SNR = N/√N = √N, and the relative noise contrast CN = 1/√N = 1/√(A·S), where A is area and S is count density. The practical consequence is fixed: relative noise falls only with the square root of counts, so doubling SNR requires four times the counts."
        },
        {
          ar: "يُخفَّض الضجيج بإطالة زمن الالتقاط، أو زيادة النشاطية المعطاة لزمن ثابت، أو كاميرا أكثر حساسية — مع التنبه إلى أن رفع الحساسية على حساب المُصادم قد يُضعف الدقة المكانية والتباين.",
          en: "Noise is reduced by longer acquisition times, by increasing the administered activity for a fixed time, or by a more sensitive camera — remembering that sensitivity gained through the collimator may cost spatial resolution and contrast."
        }
      ],
      nums: [
        { v: "σ = √N", ar: "الانحراف المعياري لعدّات N بسبب عشوائية الاضمحلال", en: "Standard deviation of N counts from decay randomness" },
        { v: "SNR = √N", ar: "نسبة الإشارة إلى الضجيج تنمو مع جذر العدّات فقط", en: "Signal-to-noise ratio grows only with the square root of counts" }
      ]
    },
    {
      h: { ar: "الدقة المكانية: ذاتية ومُصادمية ونظامية", en: "Spatial resolution: intrinsic, collimator and system" },
      paras: [
        {
          ar: "تُقاس الدقة المكانية بعرض منحنى استجابة مصدر نقطي (PSF) أو خطي (LSF) عند نصف ارتفاعه الأقصى FWHM، والأخير أكثر استعمالًا؛ وتحويل Fourier لمنحنى المصدر الخطي يعطي دالة نقل التضمين MTF التي تصف وفاء الصورة للجسم. والدقة الذاتية (intrinsic, RI) هي سقف ما تستطيعه الكواشف والإلكترونيات وحدها.",
          en: "Spatial resolution is quantified as the full width at half maximum (FWHM) of the response to a point source (PSF) or a line source (LSF), the latter being more commonly used; the Fourier transform of the LSF gives the modulation transfer function (MTF), describing how faithfully the image represents the object. Intrinsic resolution (RI) is the ceiling set by the detector and electronics alone."
        },
        {
          ar: "تتأثر الدقة الذاتية بتصحيحات خطية وطاقية الوميض، وبانتشار الضوء داخل البلّورة (البلّورة الأسمك تنشر أكثر فتسوء الدقة)، وبطاقة الفوتون (الطاقة الأعلى تولّد فوتونات ضوئية أكثر فيقل التباين الإحصائي وتتحسن الدقة)، وبجودة الاقتران البصري وعدد الـ PMTs وأشكالها (المربعة والسداسية أفضل من الدائرية). عند 140 keV تتراوح الدقة الذاتية بين 2.5 و4 mm ‏(FWHM).",
          en: "Intrinsic resolution depends on scintillation linearity and energy corrections, on light spread within the crystal (a thicker crystal spreads more and worsens resolution), on photon energy (higher energy yields more light photons, less statistical variation and better resolution), and on optical coupling quality, PMT number and shape (square or hexagonal outperform circular). At 140 keV intrinsic resolution lies between 2.5 and 4 mm FWHM."
        },
        {
          ar: "دقة المُصادم (collimator resolution, RC) لمُصادم متوازي الثقوب تُقدَّر بالعلاقة ‎RC ≈ d(1 + b/h)‎ حيث d قطر الثقب وb بعد المصدر عن المُصادم وh طول الثقب: فالدقة تتحسن بثقوب أطول وأضيق وبأقرب مسافة ممكنة إلى المريض، لكنها تتدهور بسرعة مع عمق الجسم داخل المريض، فيُخفَّف ذلك بالتصوير من اتجاهات متعددة. وتجمع دقة النظام الكلية (system resolution, RS) المكوّنين جمعًا تربيعيًا: ‎RS = √(RI² + RC²)‎.",
          en: "Collimator resolution (RC) for a parallel-hole collimator is approximated by RC ≈ d(1 + b/h), where d is hole diameter, b is source-to-collimator distance and h is hole length: resolution improves with longer, narrower holes and the smallest possible distance to the patient, but degrades rapidly with depth in the body, mitigated by imaging from several orientations. Overall system resolution (RS) combines the two components in quadrature: RS = √(RI² + RC²)."
        }
      ],
      nums: [
        { v: "2.5–4 mm", ar: "الدقة الذاتية FWHM عند 140 keV", en: "Intrinsic resolution FWHM at 140 keV" },
        { v: "RS = √(RI² + RC²)", ar: "دقة النظام من دقتَي الكاشف والمُصادم", en: "System resolution from intrinsic and collimator components" }
      ]
    },
    {
      h: { ar: "جودة الصورة في PET", en: "Image quality in PET" },
      paras: [
        {
          ar: "في PET يلغي الطابع المقطعي مشكلة الأنسجة المشعّة أمام الآفة وخلفها فيتحسن التباين، لكن تزامنات التشتت والعشوائية تعمل بالاتجاه المعاكس. ويُخفَّض الضجيج بزيادة حساسية النظام: كفاءة كشف ذاتية أعلى (بلّورة أعمق وأعلى توهينًا)، وكفاءة هندسية أعلى (الالتقاط ثلاثي الأبعاد أفضل من ثنائي الأبعاد)، ونافذة قبول طاقية أوسع — بثمن قبول تشتت أكثر يضر بالتباين.",
          en: "In PET the tomographic approach removes the contrast loss from activity in front of and behind the lesion, but scatter and random coincidences work against contrast. Noise falls as system sensitivity rises: higher intrinsic detector efficiency (a deeper, higher-attenuation crystal), higher geometric efficiency (3D acquisition beats 2D), and a wider photopeak acceptance window — at the cost of accepting more scatter and losing contrast."
        },
        {
          ar: "دقة PET تحدّها عوامل لا وجود لها في كاميرا gamma: مدى البوزيترون (مسافته من الانحلال إلى الإفناء — نحو 0.6 mm لـ fluorine-18 لكنه 2 mm لـ oxygen-15)، وعدم استقامة فوتونَي الإفناء تمامًا على 180 درجة بسبب زخم متبقٍّ، وحجم عناصر الكشف، وسُمك البلّورة (الدقة أفضل في مركز حلقة الكشف منها في أطرافها). ولأن حساسية عدّات PET أعلى بكثير من SPECT يكون الضجيج أقل إشكالًا ويمكن إعادة التركيب بترددات مكانية أعلى.",
          en: "PET resolution is limited by factors absent in gamma camera imaging: positron range (distance from decay to annihilation — about 0.6 mm for fluorine-18 but 2 mm for oxygen-15); non-collinearity of the annihilation photons, which deviate from exactly 180 degrees when residual momentum remains; detector element size; and crystal thickness, with resolution better at the centre of the detector ring than at the periphery. Because PET count sensitivity far exceeds SPECT, noise is less of a problem and reconstruction can use much higher spatial frequencies."
        }
      ]
    }
  ],
  quiz: [
    {
      q: { ar: "كاميرا جمعت 10,000 عدّة في بكسل؛ كم تصبح SNR إذا تضاعفت العدّات أربع مرات؟", en: "A pixel collects 10,000 counts; what happens to SNR if counts are quadrupled?" },
      opts: [
        { ar: "تتضاعف أربع مرات", en: "It quadruples" },
        { ar: "تتضاعف مرتين فقط لأن SNR = √N", en: "It only doubles, because SNR = √N" },
        { ar: "لا تتغير", en: "It stays the same" },
        { ar: "تزيد بمقدار 10,000", en: "It increases by 10,000" }
      ],
      a: 1,
      why: {
        ar: "بما أن σ = √N فإن SNR = N/√N = √N؛ مضاعفة العدّات أربع مرات ترفع SNR إلى الضعف فقط (من 100 إلى 200).",
        en: "Since σ = √N, SNR = N/√N = √N; quadrupling counts only doubles SNR (from 100 to 200)."
      }
    },
    {
      q: { ar: "إذا كانت الدقة الذاتية RI = 3 mm ودقة المُصادم RC = 4 mm، فما دقة النظام RS؟", en: "If intrinsic resolution RI = 3 mm and collimator resolution RC = 4 mm, what is system resolution RS?" },
      opts: [
        { ar: "7 mm", en: "7 mm" },
        { ar: "3.5 mm", en: "3.5 mm" },
        { ar: "5 mm", en: "5 mm" },
        { ar: "12 mm", en: "12 mm" }
      ],
      a: 2,
      why: {
        ar: "تُجمع المكونات تربيعيًا: ‏RS = √(3² + 4²) = √25 = 5 mm، لا جمعًا حسابيًا.",
        en: "Components add in quadrature: RS = √(3² + 4²) = √25 = 5 mm, not by simple addition."
      }
    },
    {
      q: { ar: "أي عامل يحدّ دقة PET ولا يوجد في تصوير كاميرا gamma؟", en: "Which factor limits PET resolution but is absent in gamma camera imaging?" },
      opts: [
        { ar: "سُمك بلّورة الكشف", en: "Detector crystal thickness" },
        { ar: "مدى البوزيترون وعدم استقامة فوتونَي الإفناء", en: "Positron range and non-collinearity of the annihilation photons" },
        { ar: "حركة المريض", en: "Patient movement" },
        { ar: "حجم بكسل العرض", en: "Display pixel size" }
      ],
      a: 1,
      why: {
        ar: "الإفناء لا يحدث عند نقطة الاضمحلال بل بعد سفر البوزيترون، وقد ينحرف الفوتونان قليلًا عن 180 درجة — حدّان فيزيائيان خاصان بـ PET.",
        en: "Annihilation occurs after the positron has travelled from the decay site, and the photon pair can deviate slightly from 180 degrees — two physical limits unique to PET."
      }
    }
  ]
},
{
  slug: "nm-quality-assurance",
  chapter: "molecular",
  title: { ar: "ضمان الجودة في الطب النووي", en: "NM quality assurance" },
  intro: {
    ar: "ضمان الجودة (QA) التزام قانوني لكل جهاز يُستخدم في تعريض طبي وفق تشريعات الإشعاع المؤيّن مثل IRR17 في بريطانيا، وهو عمليًا الضمانة الأولى ضد الصور الخادعة والعيوب الصامتة. يقوم على قياسات دورية موثّقة لكاميرا gamma وأنظمة SPECT بمصادر وفانتومات معيارية.",
    en: "Quality assurance is a legal requirement for all equipment used in medical exposures under ionising radiation regulations such as IRR17 in the UK, and in practice it is the first line of defence against misleading images and silent faults. It is built on scheduled, documented measurements of the gamma camera and SPECT systems using standard sources and phantoms."
  },
  sections: [
    {
      h: { ar: "قياسات ذاتية ونظامية", en: "Intrinsic versus system measurements" },
      paras: [
        {
          ar: "القاعدة التأسيسية في QA هي التمييز بين القياس الذاتي (intrinsic) الذي يُجرى والمُصادم منزوع لاختبار البلّورة والإلكترونيات وحدها، والقياس النظامي (system) الذي يُجرى بالمُصادم مركّبًا لاختبار أداء الجهاز كاملًا كما يُستخدم سريريًا. كل اختبار لاحق يندرج تحت أحد هذين النوعين.",
          en: "The foundation of QA is the distinction between intrinsic measurements, performed with the collimator removed to test the crystal and electronics alone, and system measurements, performed with the collimator fitted to test the whole device as used clinically. Every subsequent test falls into one of these two categories."
        }
      ]
    },
    {
      h: { ar: "الانتظامية (uniformity)", en: "Uniformity" },
      paras: [
        {
          ar: "عند تعريض الكاميرا لمصدر منتظم يجب أن تعطي كل البكسلات قيمة العدّ نفسها. وتعتمد الانتظامية على الخطية المكانية للنظام واستجابته الطاقية، وتُقاس يوميًا، فإذا انحرفت قيمة ما عن المتوسط بأكثر من انحرافين معياريين (+2 SD) لزم إجراء تصحيحي.",
          en: "Irradiated by a uniform source, the camera should return the same count value in every pixel. Uniformity depends on the spatial linearity and energy response of the system; it is measured daily, and any value deviating from the mean by more than +2 standard deviations triggers remedial action."
        },
        {
          ar: "الانتظامية الذاتية تُقاس بمصدر نقطي من cobalt-57 موضوع على المحور المركزي على بعد يساوي خمسة أضعاف قطر البلّورة، لتصبح تباينات تدفق الفوتونات الواصلة إلى الكاشف أقل من 1%. أما النظامية فتُقاس بمصدر فيضي (flood source) — سائل مشعّ بالتكنيشيوم أو راتنج بلاستيكي مشبع بـ cobalt-57 — بعد تطبيق تصحيحات الخطية والطاقة والحساسية.",
          en: "Intrinsic uniformity uses a cobalt-57 point source on the central axis at a distance of five times the crystal diameter, reducing photon flux variation across the detector to under 1%. System uniformity uses a flood source — liquid filled with technetium-99m or cobalt-57 loaded plastic resin — with linearity, energy and sensitivity corrections applied."
        }
      ]
    },
    {
      h: { ar: "الدقة المكانية والخطية", en: "Spatial resolution and linearity" },
      bullets: [
        {
          ar: "اختبارات كيفية: فانتوم Anger ذي القطاعات المثقوبة بأقطار مختلفة تفصلها مسافات تعادل أربعة أضعاف قطر الثقب، وفانتوم القضبان الرباعي (quadrant bar phantom) بأربع مجموعات قضبان رصاصية مختلفة التباعد.",
          en: "Qualitative tests: the Anger pie phantom, with perforated segments of differing hole diameters separated by four times the hole diameter, and the quadrant bar phantom, with four sets of lead bars of different spacing."
        },
        {
          ar: "قياسات كمية: تصوير مصدر نقطي أو خطي وحساب FWHM؛ وبمعيار Rayleigh فإن FWHM هو أصغر فصل بين مصدرين خطيين يمكن رؤيتهما منفصلين.",
          en: "Quantitative tests: imaging a point or line source and calculating the FWHM; by the Rayleigh criterion, the FWHM is the minimum separation at which two line sources are seen as distinct."
        },
        {
          ar: "فانتومات الانبعاث مثل فانتوم الكبد Williams — بقع ساخنة أو أقراص perspex بسماكات مختلفة فوق مصدر مشع — تقيّم الدقة عند أعماق متفاوتة.",
          en: "Emission phantoms such as the Williams liver phantom — hot spots or perspex discs of varying thickness over a radioactive source — assess resolution at different depths."
        },
        {
          ar: "الخطية (linearity) تقيس التشوه المكاني في الصورة، وتُختبر بتصوير فانتوم خطوط متوازية متساوية التباعد (PLES) والتأكد من بقاء خطوطه مستقيمة ومتساوية البعد.",
          en: "Linearity measures spatial distortion of the image and is tested by imaging a parallel-line equal-spacing (PLES) phantom, checking the lines remain straight and equally spaced."
        }
      ]
    },
    {
      h: { ar: "الحساسية ومعدل العدّ والدقة الطاقية", en: "Sensitivity, count rate capability and energy resolution" },
      bullets: [
        {
          ar: "الحساسية: نسبة الإشعاع المنبعث التي تُكشف ضمن القمة الضوئية للكاميرا المُصادَمة؛ تُقاس بفانتوم صغير يحوي كمية نشاطية معلومة يُصوَّر زمنًا معلومًا على بعد 10 cm من وجه الكاميرا.",
          en: "Sensitivity: the fraction of emitted radiation detected within the photopeak of the collimated camera; measured with a small phantom of known activity imaged for a known time at 10 cm from the camera face."
        },
        {
          ar: "قدرة معدل العدّ: قدرة الكاميرا على تسجيل معدل العدّ خطيًا كلما ارتفع، وتُعبَّر عادة بخسارة 20% — أي معدل العدّ الذي يصبح عنده المسجَّل أقل من المتوقع بنسبة 20% بسبب الزمن الميت (dead time).",
          en: "Count rate capability: the ability to record count rate linearly as it rises, usually expressed as the 20% count loss rate — the rate at which the recorded value falls 20% below expectation because of dead time."
        },
        {
          ar: "الدقة الطاقية: انتشار الطاقات المسجلة لفوتونات واردة، وتُحسب ‎(FWHM القمة الضوئية ÷ طاقة القمة) × 100%‎.",
          en: "Energy resolution: the spread of recorded energies for incident photons, calculated as (photopeak FWHM ÷ photopeak energy) × 100%."
        }
      ]
    },
    {
      h: { ar: "ضمان جودة SPECT", en: "SPECT quality assurance" },
      paras: [
        {
          ar: "يضيف SPECT اختبار مركز الدوران: فإعادة التركيب تفترض تطابق مركز دوران الجسر مع مركز الكاشف، ويُقاس ذلك بمصدر نقطي من technetium-99m داخل مجال الرؤية مزاحًا نحو 15 cm عن محور الدوران وتتبّع مساره الجيبي عبر الإسقاطات.",
          en: "SPECT adds the centre-of-rotation test: reconstruction assumes the gantry rotation centre matches the detector centre, and this is measured with a technetium-99m point source in the field of view offset about 15 cm from the axis of rotation, tracking its sinusoidal path through the projections."
        },
        {
          ar: "الأداء الكلي لنظام SPECT يُقيَّم بفانتوم Jaszczak — أسطوانة مملوءة بسائل مشع تحوي قضبانًا وكرات بأحجام متدرجة — فيكشف في دراسة واحدة مشاكل الدقة والتباين والانتظامية في الحجم المعاد تركيبه.",
          en: "Overall SPECT performance is assessed with the Jaszczak phantom — a liquid-filled cylinder containing rods and spheres of graded sizes — revealing resolution, contrast and uniformity problems in the reconstructed volume in a single study."
        }
      ]
    }
  ],
  quiz: [
    {
      q: { ar: "ما الفرق بين قياس الانتظامية الذاتي والنظامي؟", en: "What distinguishes intrinsic from system uniformity measurement?" },
      opts: [
        { ar: "الذاتي يُجرى بالمُصادم منزوع وبمصدر نقطي، والنظامي بالمُصادم مركّب وبمصدر فيضي", en: "Intrinsic is measured with the collimator removed using a point source; system with the collimator fitted using a flood source" },
        { ar: "الذاتي أسبوعي والنظامي يومي دائمًا", en: "Intrinsic is always weekly and system always daily" },
        { ar: "الذاتي خاص بـ PET والنظامي خاص بـ SPECT", en: "Intrinsic applies to PET and system to SPECT" },
        { ar: "لا فرق بينهما", en: "There is no difference" }
      ],
      a: 0,
      why: {
        ar: "إزالة المُصادم تعزل أداء البلّورة والإلكترونيات (مصدر نقطي Co-57 بعيد)، بينما القياس النظامي يختبر الجهاز كاملًا كما يُستخدم سريريًا بمصدر فيضي.",
        en: "Removing the collimator isolates crystal and electronics performance (distant Co-57 point source), while the system test checks the complete clinically configured device with a flood source."
      }
    },
    {
      q: { ar: "كيف تُحسب الدقة الطاقية لكاميرا gamma؟", en: "How is the energy resolution of a gamma camera calculated?" },
      opts: [
        { ar: "طاقة القمة الضوئية ÷ FWHM × 100%", en: "Photopeak energy ÷ FWHM × 100%" },
        { ar: "FWHM للقمة الضوئية ÷ طاقة القمة × 100%", en: "Photopeak FWHM ÷ photopeak energy × 100%" },
        { ar: "عدد العدّات ÷ زمن الالتقاط", en: "Counts ÷ acquisition time" },
        { ar: "سُمك البلّورة ÷ قطر الـ PMT", en: "Crystal thickness ÷ PMT diameter" }
      ],
      a: 1,
      why: {
        ar: "الدقة الطاقية هي عرض القمة الضوئية عند نصف ارتفاعها نسبة إلى طاقتها، مضروبًا في 100 للتعبير عنها كنسبة مئوية.",
        en: "Energy resolution is the photopeak FWHM expressed as a percentage of the photopeak energy."
      }
    },
    {
      q: { ar: "بمَ يُختبَر مركز دوران نظام SPECT؟", en: "How is the centre of rotation of a SPECT system tested?" },
      opts: [
        { ar: "بمصدر فيضي من cobalt-57", en: "With a cobalt-57 flood source" },
        { ar: "بمصدر نقطي من technetium-99m مزاح نحو 15 cm عن محور الدوران", en: "With a technetium-99m point source offset about 15 cm from the rotation axis" },
        { ar: "بفانتوم القضبان الرباعي", en: "With a quadrant bar phantom" },
        { ar: "بفانتوم Jaszczak فقط", en: "With the Jaszczak phantom only" }
      ],
      a: 1,
      why: {
        ar: "المصدر النقطي المزاح يرسم عبر الإسقاطات مسارًا جيبيًا يُكشف منه أي انحراف بين مركز الدوران الحقيقي والمفترض؛ أما Jaszczak فيقيّم الأداء الكلي.",
        en: "The offset point source traces a sinusoid through the projections, revealing any discrepancy between the true and assumed centres of rotation; Jaszczak assesses overall performance."
      }
    }
  ]
},
{
  slug: "nm-artefacts",
  chapter: "molecular",
  title: { ar: "عيوب الصور في الطب النووي", en: "NM artefacts" },
  intro: {
    ar: "كثير من «الآفات» في صور الطب النووي ليست آفات أصلًا، بل عيوب (artefacts) تقنية أو حركية أو فسيولوجية. ومعرفة العيوب الشائعة شرط لتفسير صحيح: فبعضها يحاكي المرض، وبعضها يخفيه، وبعضها يكشف خللًا في الجهاز نفسه يستوجب الصيانة.",
    en: "Many apparent lesions in nuclear medicine images are not lesions at all, but technical, motion-related or physiological artefacts. Recognising the common artefacts is essential for correct interpretation: some mimic disease, some hide it, and some reveal a fault in the equipment itself that needs servicing."
  },
  sections: [
    {
      h: { ar: "أسباب تقنية متعلقة بالحقن", en: "Technical and injection-related causes" },
      bullets: [
        {
          ar: "موضع الحقن نفسه منطقة شديدة النشاطية (hot spot) قد تحجب تراكيب قريبة أو تُشتت الانتباه، ويفترض إبقاؤه خارج مجال الرؤية قدر الإمكان.",
          en: "The injection site itself is a very hot focus that can obscure nearby structures or distract the reader, and should be kept out of the field of view where possible."
        },
        {
          ar: "تسرّب الحقن خارج الوريد (extravasation) يجعل المستحضر يُصرَّف عبر الأوعية اللمفية فيظهر امتصاص في العقد اللمفية على مسار التصريف، فيحاكي نقائل عقدية.",
          en: "Extravasation of the injection drains via the lymphatics, producing uptake in lymph nodes along the drainage path that can mimic nodal metastases."
        },
        {
          ar: "تلوث البول المشع للجلد أو الملابس يخلق بؤرًا سطحية كاذبة، ويعالَج بالتنظيف وإعادة التصوير.",
          en: "Radioactive urine contamination of skin or clothing creates false superficial foci, resolved by cleaning and re-imaging."
        }
      ]
    },
    {
      h: { ar: "أعطال الجهاز", en: "Equipment malfunction" },
      bullets: [
        {
          ar: "تعطّل أنبوب مضاعِف ضوئي (PMT) واحد يترك منطقة باردة ثابتة الشكل في كل الصور.",
          en: "Failure of a single photomultiplier tube leaves a fixed cold region in every image."
        },
        {
          ar: "تشقق بلّورة الوميض أو كسرها يولّد أنماطًا شاذة مميزة لا تتغير مع المريض.",
          en: "A cracked or broken scintillation crystal produces characteristic abnormal patterns that do not change with the patient."
        },
        {
          ar: "فشل مصفوفة التصحيح (correction matrix) أو اختلاف حساسية الكواشف يظهران عدم انتظامية في صور الفيض وصور المرضى على السواء — وهنا تظهر قيمة اختبارات QA اليومية.",
          en: "Correction matrix failure or differences in detector sensitivity show as non-uniformity in flood images and patient images alike — which is why daily QA testing matters."
        }
      ]
    },
    {
      h: { ar: "أسباب مرتبطة بالمريض: التوهين والحركة", en: "Patient-related: attenuation and motion" },
      bullets: [
        {
          ar: "أجسام معدنية يرتديها المريض (أبازيم الأحزمة مثلًا) تحجب الفوتونات وتخلق عيوب توهين باردة.",
          en: "Metal objects worn by the patient, such as belt buckles, block photons and create cold attenuation defects."
        },
        {
          ar: "توهين الثدي — وخاصة حشوات الثدي الاصطناعية — قد يحاكي عيب تروية في الجدار الأمامي للقلب.",
          en: "Breast attenuation — particularly with breast prostheses — can mimic an anterior wall perfusion defect in cardiac studies."
        },
        {
          ar: "توهين الحجاب الحاجز يظهر خصوصًا لدى البدينين ومرضى الاستسقاء ومن يخضعون لغسيل الكلى، فيؤثر على الجدار السفلي للقلب.",
          en: "Diaphragmatic attenuation is prominent in obese patients, those with ascites and those on dialysis, and affects the inferior cardiac wall."
        },
        {
          ar: "حركة المريض أثناء الالتقاط الطويل تُخطئ محاذاة الإسقاطات فتتشوه المقاطع المعاد تركيبها وتضيع حدة التراكيب.",
          en: "Patient motion during a long acquisition misaligns the projections, distorting reconstructed slices and blurring structures."
        }
      ]
    },
    {
      h: { ar: "امتصاص فسيولوجي طبيعي يحاكي المرض", en: "Physiological uptake that mimics disease" },
      paras: [
        {
          ar: "في دراسات FDG PET خاصة، تراكمات طبيعية كثيرة قد تُقرأ خطأً كأورام إن لم تُعرف خريطتها. في الرأس والرقبة: قشرة الدماغ، وحلقة Waldeyer، والغدد اللعابية، والعضلات خارج العين، والحنجرة لدى كثيري الكلام. وفي العضلات: الشد الناتج عن التوتر في العضلة شبه المنحرفة والعضلات حول العمود الفقري، والحجاب الحاجز مع فرط التنفس، والعضلات الهيكلية بتأثير الإنسولين، وأثر التمرين العنيف الحديث.",
          en: "Particularly in FDG PET, many normal accumulations are misread as tumours if their map is not known. In the head and neck: cerebral cortex, Waldeyer ring, salivary glands, extra-ocular muscles and the larynx in patients who talked excessively. In muscle: stress tension in trapezius and paraspinal muscles, the diaphragm with hyperventilation, skeletal muscle under insulin effect, and the aftermath of vigorous exercise."
        },
        {
          ar: "في الجهاز الهضمي والبولي: الأعور والقولون الأيمن أشد إلفًا للجلوكوز، ويظهر الجهاز الجامع الكلوي والحالبان والمثانة على مسار إفراز المستحضر، وقد يوجد امتصاص رحمي أثناء الحيض. ومن غيرها: ثديا الرضاعة، وامتصاص عضلة القلب بعد الوجبات، والدهن البني (brown fat) المتعاطف التوزيع في الرقبة والكتفين، والغدة الزعترية (thymus) عند الأطفال.",
          en: "In the gut and urinary tract: the caecum and right colon are relatively glucose-avid, the renal collecting systems, ureters and bladder show excreted activity, and uterine uptake may occur during menstruation. Elsewhere: lactating breasts, post-prandial myocardial uptake, sympathetically distributed brown fat in the neck and shoulders, and the thymus in children."
        }
      ]
    },
    {
      h: { ar: "عيوب خاصة بالأنظمة المقطعية والهجينة", en: "Artefacts specific to SPECT and PET/CT" },
      bullets: [
        {
          ar: "خطأ مركز الدوران في SPECT: إذا اختلف المركز المفترض في إعادة التركيب عن محور الدوران الحقيقي تشوهت الإسقاطات الخلفية وظهرت عيوب حلقية وتشويش.",
          en: "Centre-of-rotation error in SPECT: if the assumed centre used in reconstruction differs from the true axis of rotation, back projection is corrupted, producing ring-like artefacts and distortion."
        },
        {
          ar: "عدم التطابق (misregistration) بين صور النويدات وصور CT في الأنظمة الهجينة — غالبًا بسبب الحركة أو التنفس — يضع النشاطية في مواضع تشريحية خاطئة ويُفسد تصحيح التوهين.",
          en: "Misregistration between the radionuclide and CT images in hybrid systems — usually from motion or breathing — places activity in wrong anatomical locations and corrupts attenuation correction."
        },
        {
          ar: "عيوب CT نفسها كلها تنتقل إلى الصور المدمجة لأن خريطة التوهين مشتقة منها.",
          en: "All CT artefacts propagate into the fused images because the attenuation map is derived from CT."
        },
        {
          ar: "الاقتطاع (truncation): مجال رؤية SPECT أوسع من مجال CT، فحيث لا توجد بيانات CT لا يمكن تصحيح التوهين عند حواف الجسم.",
          en: "Truncation: the SPECT field of view is larger than the CT field of view, so where CT data are missing no attenuation correction is possible at the body edges."
        }
      ]
    }
  ],
  quiz: [
    {
      q: { ar: "ما أثر تسرّب حقنة المستحضر المشع خارج الوريد (extravasation) على الصورة؟", en: "What does extravasation of an injected radiopharmaceutical cause on the image?" },
      opts: [
        { ar: "امتصاص في العقد اللمفية على مسار التصريف من موضع الحقن", en: "Uptake in lymph nodes along the drainage path from the injection site" },
        { ar: "انعدام كامل لنشاطية الكبد", en: "Complete absence of liver activity" },
        { ar: "عيوب حلقية حول مركز الدوران", en: "Ring artefacts around the centre of rotation" },
        { ar: "تجانس مفرط في كل الصورة", en: "Excessive uniformity across the whole image" }
      ],
      a: 0,
      why: {
        ar: "المتسرب يُصرَّف لمفيًا فيتراكم في العقد على المسار، وهو نمط قد يحاكي النقائل العقدية إن لم يُنتبه لموضع الحقن.",
        en: "Extravasated tracer drains through lymphatics and accumulates in nodes along the path, a pattern that can mimic nodal metastases if the injection site is overlooked."
      }
    },
    {
      q: { ar: "أي امتصاص فسيولوجي يظهر بتوزيع متماثل في الرقبة والكتفين لدى الشباب النحيلين في FDG PET؟", en: "Which physiological uptake appears symmetrically in the neck and shoulders of slim young patients on FDG PET?" },
      opts: [
        { ar: "امتصاص الغدة الزعترية", en: "Thymic uptake" },
        { ar: "الدهن البني (brown fat)", en: "Brown fat" },
        { ar: "امتصاص حلقة Waldeyer", en: "Waldeyer ring uptake" },
        { ar: "امتصاص الأعور", en: "Caecal uptake" }
      ],
      a: 1,
      why: {
        ar: "الدهن البني المنشَّط وديًا يستهلك الجلوكوز ويظهر متماثلًا في الرقبة وحول الكتفين، وهو من أشهر محاكيات المرض في PET.",
        en: "Sympathetically activated brown fat consumes glucose and appears symmetrically in the neck and around the shoulders — one of the classic PET pitfalls."
      }
    },
    {
      q: { ar: "لماذا يحدث عيب الاقتطاع (truncation) في SPECT/CT؟", en: "Why does truncation artefact occur in SPECT/CT?" },
      opts: [
        { ar: "لأن مجال رؤية SPECT أكبر من مجال رؤية CT فتغيب بيانات التوهين عند الأطراف", en: "Because the SPECT field of view is larger than the CT field of view, so attenuation data are missing at the edges" },
        { ar: "لأن المريض تحرك أثناء CT", en: "Because the patient moved during CT" },
        { ar: "لأن البلّورة متشققة", en: "Because the crystal is cracked" },
        { ar: "لأن نشاطية المستحضر اضمحلت", en: "Because the radiopharmaceutical decayed" }
      ],
      a: 0,
      why: {
        ar: "تصحيح التوهين يحتاج خريطة CT؛ أجزاء الجسم داخل مجال SPECT وخارج مجال CT لا تجد بيانات تصحيح فتظهر مشوهة عند الحواف.",
        en: "Attenuation correction needs the CT map; body parts inside the SPECT field but outside the CT field have no correction data and are distorted at the edges."
      }
    }
  ]
},
{
  slug: "non-nuclear-molecular-imaging",
  chapter: "molecular",
  title: { ar: "التصوير الجزيئي غير النووي", en: "Non-nuclear molecular imaging" },
  intro: {
    ar: "ليست الجزيئية حكرًا على المواد المشعة: تقنيات غير نووية ترصد سلوك الخلايا ووظائف الأنسجة دون أي إشعاع مؤيّن، أبرزها الموجات فوق الصوتية المعزَّزة بالتباين (CEUS) والتصوير البصري بنوعيه التلألؤ الحيوي والفلورة، وينضم إليها مطيافية الرنين المغناطيسي (MR spectroscopy) المغطاة في فصل الرنين.",
    en: "Molecular imaging is not confined to radioactive tracers: non-nuclear techniques probe cellular behaviour and tissue function without ionising radiation. The main examples are contrast-enhanced ultrasound (CEUS) and optical imaging in its bioluminescence and fluorescence forms, joined by MR spectroscopy, which is covered in the MRI chapter."
  },
  sections: [
    {
      h: { ar: "الموجات المعزَّزة بالتباين CEUS والفقاعات الدقيقة", en: "CEUS and microbubbles" },
      paras: [
        {
          ar: "تقوم CEUS على حقن فقاعات دقيقة (microbubbles) قطرها 1 إلى 4 ميكرومتر، تتكون من لب غازي عالي الوزن الجزيئي مثل مركبات perfluorocarbon أو سداسي فلوريد الكبريت (sulphur hexafluoride)، محاط بقشرة غالبًا دهنية (lipid). بعد الحقن تدور الفقاعات في الدم بضع دقائق ثم تزيلها منظومة الشبكية البطانية (reticuloendothelial system) أو تتفكك طبيعيًا أو بتأثير موجة الموجات نفسها.",
          en: "CEUS is based on injecting microbubbles 1 to 4 micrometres in diameter, each a core of high-molecular-weight gas such as a perfluorocarbon or sulphur hexafluoride, enclosed in a shell that is typically lipid. After injection the bubbles circulate in the blood for a few minutes, then are removed by the reticuloendothelial system or break down naturally or under the ultrasound beam."
        },
        {
          ar: "الفقاعات شديدة العكس للصدى لأن عدم تطابق المعاوقة الصوتية (impedance mismatch) بين الغاز والدم أو النسيج المحيط كبير جدًا. وبهذه الصورة غير الموجَّهة تُستخدم CEUS لتقييم تدفق الدم (كما في الثقبة البيضوية المفتوحة patent foramen ovale) وتروية الأنسجة (كأورام الكبد).",
          en: "Microbubbles are intensely echogenic because of the large acoustic impedance mismatch between the gas and the surrounding blood or tissue. In this non-targeted form, CEUS is used to assess blood flow (for example in a patent foramen ovale) and tissue perfusion (for example in liver tumours)."
        }
      ],
      nums: [
        { v: "1–4 μm", ar: "قطر الفقاعة الدقيقة — بحجم كرية دم حمراء تقريبًا", en: "Microbubble diameter — roughly red-cell sized" },
        { v: "دقائق", ar: "زمن بقاء الفقاعات في الدورة الدموية قبل إزالتها", en: "Minutes of circulation before the bubbles are cleared" }
      ]
    },
    {
      h: { ar: "CEUS الموجَّهة جزيئيًا", en: "Targeted CEUS as molecular imaging" },
      paras: [
        {
          ar: "في التطور الأحدث تُثبَّت روابط (ligands) على قشرة الفقاعة فتتحول إلى عامل تصوير جزيئي يلتصق بأهداف محددة. لكن حجم الفقاعة الكبير نسبيًا يحصر أهدافها داخل الأوعية الدموية حصرًا، لأنها لا تعبر بطانة الأوعية إلى الأنسجة.",
          en: "More recently, ligands have been attached to the bubble shell, converting microbubbles into molecular imaging agents that bind specific targets. However, the relatively large bubble size confines them strictly to intravascular targets, because they cannot cross the vessel endothelium into tissue."
        },
        {
          ar: "الأهداف قيد البحث حاليًا تشمل علامات تولّد الأوعية (angiogenesis) مثل VEGF، وعلامات الالتهاب مثل ICAM-1، وعلامات الخثار مثل GPIIb-IIIa. ورغم أن CEUS غير الموجَّهة شائعة سريريًا، ما تزال CEUS الموجَّهة بالروابط في المرحلة ما قبل السريرية (pre-clinical).",
          en: "Targets under investigation include angiogenesis markers such as VEGF, inflammatory markers such as ICAM-1, and thrombosis markers such as GPIIb-IIIa. While non-targeted CEUS is in routine clinical use, ligand-targeted CEUS remains at the pre-clinical stage."
        }
      ]
    },
    {
      h: { ar: "التصوير البصري: التلألؤ الحيوي", en: "Optical imaging: bioluminescence" },
      paras: [
        {
          ar: "يستغل التلألؤ الحيوي (bioluminescence) تفاعلًا كيميائيًا حيويًا لإنزيم luciferase: يُحقن ركيزته luciferin، وحين تدخل خلية تحمل الإنزيم يحدث تفاعل ينبعث منه فوتون ضوئي قابل للكشف. والخلايا الحاملة لـ luciferase غالبًا خلايا ورمية مُهندَسة، فيفيد التلألؤ في كشف وجود الخلايا الورمية ومتابعة استجابتها للعلاج — وهو أسلوب بحثي في المقام الأول.",
          en: "Bioluminescence exploits the biochemical reaction of the enzyme luciferase: its substrate luciferin is injected, and when it enters a cell containing luciferase a reaction occurs that emits a detectable photon. Luciferase-bearing cells are typically engineered tumour cells, so bioluminescence is useful for detecting tumour cell presence and treatment response — primarily as a research tool."
        }
      ]
    },
    {
      h: { ar: "التصوير البصري: الفلورة", en: "Optical imaging: fluorescence" },
      paras: [
        {
          ar: "في الفلورة (fluorescence) تُثار الجزيئات المحقونة بمصدر ضوئي خارجي بالطول الموجي المناسب، ثم يُقاس الضوء المنبعث عند عودة الجزيئات من حالتها المثارة إلى حالتها الأرضية. ميزتها الكبرى أن الإثارة قابلة للتكرار (حتى حد ما) فيمكن قياس الإشارة مرارًا، بخلاف التلألؤ الذي يعتمد على تفاعل كيميائي يُستهلَك.",
          en: "In fluorescence, injected molecules are excited by an external light source of the appropriate wavelength, and the photons emitted as the molecules decay back from their excited state are measured. Its great advantage is that excitation can be repeated (up to a limit), so the signal can be measured again and again, unlike the consumable chemical reaction of bioluminescence."
        },
        {
          ar: "يشارك النوعان عيوب التصوير البصري العامة: تشتت الفوتونات المنبعثة داخل الأنسجة، وعمق اختراق محدود يجعله مناسبًا للتراكيب السطحية فقط، إضافة إلى إشارة خلفية منخفضة بطبيعتها.",
          en: "Both forms share the general drawbacks of optical imaging: scattering of the emitted photons within tissue, and limited penetration depth restricting use to superficial structures, alongside an inherently low background signal."
        }
      ]
    },
    {
      h: { ar: "المزايا والعيوب باختصار", en: "Advantages and disadvantages in brief" },
      paras: [
        {
          ar: "تتقاسم التقنيات غير النووية غياب الإشعاع المؤيّن والسرعة واللحظية، وتختلف في قيودها الفيزيائية: قصر عمر الفقاعات واعتماد المشغّل في CEUS، وتشتت الفوتونات وسطحية الاختراق في التصوير البصري.",
          en: "The non-nuclear techniques share the absence of ionising radiation, speed and real-time imaging, but differ in their physical limits: short bubble lifetime and operator dependence in CEUS, and photon scatter with superficial-only penetration in optical imaging."
        }
      ],
      table: {
        head: [
          { ar: "التقنية", en: "Technique" },
          { ar: "مزايا بارزة", en: "Key advantages" },
          { ar: "قيود بارزة", en: "Key limitations" }
        ],
        rows: [
          [
            { ar: "CEUS بالفقاعات الدقيقة", en: "Microbubble CEUS" },
            { ar: "لا إشعاع، التقاط سريع، تصوير لحظي (real-time)، تجهيزات بسيطة", en: "No radiation, rapid acquisition, real-time imaging, simple equipment" },
            { ar: "فقاعات قصيرة العمر، مناطق مسح صغيرة فقط، اعتماد كبير على المشغّل", en: "Short-lived bubbles, only small areas can be scanned, highly operator dependent" }
          ],
          [
            { ar: "التصوير البصري (تلألؤ وفلورة)", en: "Optical imaging (bioluminescence and fluorescence)" },
            { ar: "لا إشعاع، التقاط سريع ولحظي، وإشارة الفلورة قابلة للتكرار", en: "No radiation, rapid and real-time imaging, repeatable fluorescence signal" },
            { ar: "تشتت الفوتونات وعمق اختراق محدود للتراكيب السطحية فقط", en: "Photon scatter and limited penetration depth, suitable only for superficial structures" }
          ]
        ]
      }
    }
  ],
  quiz: [
    {
      q: { ar: "مم تتكون الفقاعة الدقيقة في CEUS؟", en: "What is a CEUS microbubble made of?" },
      opts: [
        { ar: "لب غازي عالي الوزن الجزيئي (مثل sulphur hexafluoride) داخل قشرة دهنية غالبًا، بقطر 1 إلى 4 μm", en: "A high-molecular-weight gas core (such as sulphur hexafluoride) in a usually lipid shell, 1 to 4 micrometres across" },
        { ar: "قطرة يود مائي بقطر 100 μm", en: "A drop of aqueous iodine 100 micrometres across" },
        { ar: "جسيم حديد مغناطيسي صلب", en: "A solid iron magnetic particle" },
        { ar: "نظير مشع قصير العمر داخل غشاء بروتيني", en: "A short-lived radionuclide inside a protein membrane" }
      ],
      a: 0,
      why: {
        ar: "الفقاعات غاز محبوس في قشرة رقيقة بحجم يقارب كرية الدم الحمراء، وعدم تطابق المعاوقة مع الدم هو سر قوة صداها.",
        en: "Microbubbles are gas trapped in a thin shell at roughly red-cell size, and the impedance mismatch with blood is what makes them so echogenic."
      }
    },
    {
      q: { ar: "لماذا تقتصر أهداف CEUS الموجَّهة على الأوعية الدموية؟", en: "Why are targeted CEUS agents confined to vascular targets?" },
      opts: [
        { ar: "لأن الروابط تتحلل في الأنسجة", en: "Because the ligands degrade in tissue" },
        { ar: "لأن الفقاعات كبيرة نسبيًا فلا تعبر بطانة الأوعية إلى النسيج", en: "Because the bubbles are relatively large and cannot cross the vessel endothelium into tissue" },
        { ar: "لأن الموجات لا تخترق جدار الوعاء", en: "Because ultrasound cannot penetrate the vessel wall" },
        { ar: "لأن الغاز يذوب فورًا خارج الدم", en: "Because the gas dissolves instantly outside blood" }
      ],
      a: 1,
      why: {
        ar: "حجم الفقاعة (1 إلى 4 μm) يجعلها عاملًا داخل وعائي صرفًا، فأهدافها أهداف بطانة الأوعية: VEGF وICAM-1 وGPIIb-IIIa.",
        en: "At 1 to 4 micrometres the bubbles are purely intravascular agents, so their targets are endothelial: VEGF, ICAM-1 and GPIIb-IIIa."
      }
    },
    {
      q: { ar: "ما الزوج الكيميائي الذي يقوم عليه التلألؤ الحيوي؟", en: "Which chemical pair underlies bioluminescence imaging?" },
      opts: [
        { ar: "إنزيم luciferase وركيزته luciferin", en: "The enzyme luciferase and its substrate luciferin" },
        { ar: "FDG وإنزيم hexokinase", en: "FDG and the enzyme hexokinase" },
        { ar: "الهيموغلوبين والأكسجين", en: "Haemoglobin and oxygen" },
        { ar: "اليود وإنزيم peroxidase", en: "Iodine and peroxidase" }
      ],
      a: 0,
      why: {
        ar: "حين يلتقي luciferin المحقون بخلايا تحمل luciferase ينطلق فوتون؛ والخلايا المهندَسة ورميًا هي عادة حاملة الإنزيم.",
        en: "When injected luciferin meets cells expressing luciferase, a photon is emitted; engineered tumour cells are the usual enzyme carriers."
      }
    }
  ]
}
];
