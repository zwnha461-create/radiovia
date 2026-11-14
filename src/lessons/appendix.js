export const LESSONS = [
{
  slug:'appendix',
  chapter:'appendix',
  title:{ar:'الملحق — جداول ومراجع سريعة', en:'Appendix — Quick Reference Tables'},
  intro:{ar:'صفحة مرجعية واحدة تجمع ما يحتاجه طالب فيزياء الأشعة على عجل: تعريفات الوحدات الأساسية، وأشهر العلاقات الرياضية، وقيم Hounsfield units، وطاقات الخطوط المميزة للعناصر الشائعة، وأزمنة استرخاء MR، وجرعات فعّالة نموذجية ودقة الأنظمة — كلها مرتبة في جداول من بنائنا لتصل إلى الرقم بسرعة.',
         en:'A single reference page gathering what a radiology physics student needs in a hurry: basic unit definitions, the most-used relationships, Hounsfield unit values, characteristic line energies of common elements, MR relaxation times, typical effective doses and system resolutions — all arranged in tables structured for fast lookup.'},
  sections:[
    { h:{ar:'وحدات وتعريفات أساسية', en:'Basic units and definitions'},
      paras:[
        {ar:'بعض المقادير تتكرر في كل فصول المنهج: النشاط الإشعاعي يُقاس بعدد التحولات في الثانية، والجرعة الممتصة بالطاقة لكل كيلوغرام، وسعة الغلاف الإلكتروني بصيغة في عدد الغلاف. الجدول التالي يعرض الجسيمات دون الذرية الثلاثة بكتلها وشحناتها النسبية، وتليه أهم الأرقام المرجعية.',
         en:'A few quantities recur across the whole syllabus: radioactivity counts transformations per second, absorbed dose is energy per kilogram, and electron shell capacity follows a formula in the shell number. The table below lists the three subatomic particles with their relative masses and charges, followed by the key reference numbers.'}
      ],
      table:{head:[{ar:'الجسيم', en:'Particle'}, {ar:'الكتلة النسبية', en:'Relative mass'}, {ar:'الشحنة النسبية', en:'Relative charge'}, {ar:'رمزه', en:'Symbol'}],
        rows:[
          [{ar:'الإلكترون', en:'Electron'}, {ar:'نحو 1/2000', en:'About 1/2000'}, {ar:'−1', en:'−1'}, {ar:'e⁻', en:'e⁻'}],
          [{ar:'البروتون', en:'Proton'}, {ar:'1', en:'1'}, {ar:'+1', en:'+1'}, {ar:'p', en:'p'}],
          [{ar:'النيوترون', en:'Neutron'}, {ar:'1', en:'1'}, {ar:'0', en:'0'}, {ar:'n', en:'n'}]
        ]},
      nums:[
        {v:'1 Bq', ar:'تحول نووي واحد في الثانية — وحدة النشاط Becquerel', en:'One nuclear transformation per second — the becquerel, unit of activity'},
        {v:'2n²', ar:'الحد الأقصى لإلكترونات الغلاف رقم n', en:'Maximum number of electrons in shell number n'},
        {v:'1 amu', ar:'جزء من اثني عشر من كتلة ذرة carbon-12', en:'One twelfth of the mass of a carbon-12 atom'},
        {v:'2.7 mSv/yr', ar:'متوسط جرعة الخلفية الإشعاعية السنوية (معظمها طبيعي ونحو 0.4 mSv منها طبي)', en:'Average annual background radiation dose (mostly natural, with about 0.4 mSv from medical exposure)'}
      ]},
    { h:{ar:'علاقات رياضية لا غنى عنها', en:'Essential relationships'},
      paras:[
        {ar:'مجموعة صغيرة من العلاقات تحل أغلب مسائل المنهج الحسابية: من سلوك الموجة والفوتون، إلى التوهين والطبقة النصفية، إلى تعريف رقم CT، إلى معادلة Larmor في الرنين. احفظ شكل كل علاقة ومتى تُستخدم، وستتعامل مع معظم الأسئلة الرقمية بثقة.',
         en:'A small set of relationships solves most of the numerical questions in the syllabus: wave and photon behaviour, attenuation and half-value layer, the definition of the CT number, and the Larmor equation in MR. Learn the shape of each relationship and when to deploy it, and most calculation questions become routine.'}
      ],
      table:{head:[{ar:'العلاقة', en:'Relationship'}, {ar:'أين تُستخدم', en:'Where it is used'}],
        rows:[
          [{ar:'c = f λ', en:'c = f λ'}, {ar:'سرعة الموجة من ترددها وطول موجتها', en:'Wave speed from frequency and wavelength'}],
          [{ar:'E = h f', en:'E = h f'}, {ar:'طاقة الفوتون من تردده (h ثابت Planck)', en:'Photon energy from its frequency (h is Planck constant)'}],
          [{ar:'I ∝ 1 / d²', en:'I ∝ 1 / d²'}, {ar:'هبوط الشدة مع المسافة — قانون التربيع العكسي', en:'Intensity fall-off with distance — the inverse square law'}],
          [{ar:'LAC = 0.693 / HVL', en:'LAC = 0.693 / HVL'}, {ar:'معامل التوهين الخطي من سماكة الطبقة النصفية', en:'Linear attenuation coefficient from the half-value layer thickness'}],
          [{ar:'HU = 1000 × (μtissue − μwater) / μwater', en:'HU = 1000 × (μtissue − μwater) / μwater'}, {ar:'تعريف وحدة Hounsfield في CT', en:'Definition of the Hounsfield unit in CT'}],
          [{ar:'الجرعة ∝ mAs / pitch', en:'Dose ∝ mAs / pitch'}, {ar:'تقدير أثر تغيير عوامل CT على الجرعة', en:'Estimating how CT factor changes affect dose'}],
          [{ar:'Larmor: f = γ × B0', en:'Larmor: f = γ × B0'}, {ar:'تردد الرنين من شدة المجال المغناطيسي', en:'Resonance frequency from magnetic field strength'}]
        ]},
      nums:[
        {v:'42 MHz', ar:'تردد Larmor للهيدروجين عند مجال 1 Tesla', en:'Larmor frequency of hydrogen at a field of 1 tesla'},
        {v:'63 MHz', ar:'تردد Larmor للهيدروجين عند 1.5 Tesla', en:'Larmor frequency of hydrogen at 1.5 tesla'},
        {v:'½ m v²', ar:'صيغة الطاقة الحركية لجسيم متحرك', en:'Kinetic energy of a moving particle'}
      ]},
    { h:{ar:'أرقام CT: قيم HU ومؤشرات الجرعة', en:'CT numbers: HU values and dose indices'},
      paras:[
        {ar:'سلم Hounsfield مرجعه الماء صفرًا والهواء عند الطرف السالب، والعظام الكثيفة في الأعلى. وأسفل الجدول تذكير بعائلة مؤشرات جرعة CT وكيف يبني كل مؤشر على سابقه: من قياس اللفة الواحدة، إلى ترجيح المركز والمحيط، إلى إدخال pitch، إلى ضرب طول المسح.',
         en:'The Hounsfield scale is anchored on water at zero, with air at the negative extreme and dense bone at the top. Below the values table is a reminder of the CT dose index family and how each index builds on the previous one: from a single-rotation measurement, to centre–periphery weighting, to including pitch, to multiplying by scan length.'}
      ],
      table:{head:[{ar:'النسيج', en:'Tissue'}, {ar:'قيمة HU نموذجية', en:'Typical HU'}],
        rows:[
          [{ar:'الهواء', en:'Air'}, {ar:'−1000', en:'−1000'}],
          [{ar:'الدهون', en:'Fat'}, {ar:'−50 إلى −100', en:'−50 to −100'}],
          [{ar:'الماء', en:'Water'}, {ar:'0', en:'0'}],
          [{ar:'السائل الدماغي الشوكي CSF', en:'CSF'}, {ar:'نحو +15', en:'About +15'}],
          [{ar:'المادة البيضاء ثم الرمادية', en:'White then grey matter'}, {ar:'+20 إلى +30 ثم +37 إلى +45', en:'+20 to +30, then +37 to +45'}],
          [{ar:'الدم داخل الأوعية ودم متخثر حديثًا', en:'Intravascular blood and fresh clot'}, {ar:'+40 إلى +45 و +70 إلى +80', en:'+40 to +45, and +70 to +80'}],
          [{ar:'الكبد والكلى والعضلات', en:'Liver, kidney and muscle'}, {ar:'نحو +30 إلى +60', en:'About +30 to +60'}],
          [{ar:'العظم', en:'Bone'}, {ar:'نحو +1000', en:'About +1000'}]
        ]},
      bullets:[
        {ar:'CTDIw يجمع القياسين بترجيح: ثلث قيمة المركز زائد ثلثي قيمة المحيط', en:'CTDIw combines the two measurements as one-third of the central value plus two-thirds of the peripheral value'},
        {ar:'CTDIvol = CTDIw ÷ pitch — بوحدة mGy', en:'CTDIvol = CTDIw ÷ pitch — in mGy'},
        {ar:'DLP = CTDIvol × طول المسح — بوحدة mGy·cm ويعبر عن عبء الفحص كله', en:'DLP = CTDIvol × scan length — in mGy·cm, expressing the burden of the whole examination'}
      ]},
    { h:{ar:'عناصر الهدف وأزمنة استرخاء MR', en:'Target elements and MR relaxation times'},
      paras:[
        {ar:'طاقات الخطوط المميزة تحدد نافذة الطاقة المفيدة في كل تطبيق: منخفضة في mammography حيث التباين الدقيق أهم، وأعلى بكثير في الأنابيب العامة. وفي MR تذكّر ترتيب أزمنة الاسترخاء عند 1 Tesla: الدهن أسرع الأنسجة استعادة، والماء الحر أبطؤها بمراحل، والسائل الدماغي بينهما قريب من الماء.',
         en:'Characteristic line energies define the useful energy window of each application: low in mammography, where fine contrast matters most, and far higher in general-purpose tubes. In MR, remember the ordering of relaxation times at 1 tesla: fat recovers fastest, free water is by far the slowest, and CSF sits close to water.'}
      ],
      table:{head:[{ar:'العنصر', en:'Element'}, {ar:'Z', en:'Z'}, {ar:'Kα (keV)', en:'Kα (keV)'}, {ar:'حافة K (keV)', en:'K-edge (keV)'}, {ar:'استخدامه النموذجي', en:'Typical role'}],
        rows:[
          [{ar:'Molybdenum', en:'Molybdenum'}, {ar:'42', en:'42'}, {ar:'17.5', en:'17.5'}, {ar:'20', en:'20'}, {ar:'هدف ومرشح في mammography', en:'Target and filter in mammography'}],
          [{ar:'Rhodium', en:'Rhodium'}, {ar:'45', en:'45'}, {ar:'20.2', en:'20.2'}, {ar:'23.3', en:'23.3'}, {ar:'mammography للثدي الكثيف', en:'Mammography for denser breasts'}],
          [{ar:'Tungsten', en:'Tungsten'}, {ar:'74', en:'74'}, {ar:'59.3', en:'59.3'}, {ar:'نحو 69.5', en:'About 69.5'}, {ar:'هدف أنابيب الأشعة العامة (A = 184)', en:'General radiography tube target (A = 184)'}]
        ]},
      bullets:[
        {ar:'أزمنة استرخاء عند 1 T — الدهن: T1 نحو 250 ms و T2 نحو 80 ms', en:'Relaxation times at 1 T — fat: T1 about 250 ms and T2 about 80 ms'},
        {ar:'المادة البيضاء: T1 نحو 650 ms و T2 نحو 90 ms — والمادة الرمادية: T1 نحو 800 ms و T2 نحو 100 ms', en:'White matter: T1 about 650 ms and T2 about 90 ms — grey matter: T1 about 800 ms and T2 about 100 ms'},
        {ar:'CSF: ‏T1 نحو 2000 ms و T2 نحو 150 ms — والماء الحر: T1 و T2 كلاهما نحو 3000 ms', en:'CSF: T1 about 2000 ms and T2 about 150 ms — free water: both T1 and T2 about 3000 ms'}
      ],
      nums:[
        {v:'511 keV', ar:'طاقة كل فوتون من فوتوني فناء البوزيترون في PET', en:'Energy of each photon from positron annihilation in PET'},
        {v:'6.02 h', ar:'العمر النصفي لـ technetium-99m', en:'Half-life of technetium-99m'},
        {v:'≈110 min', ar:'العمر النصفي لـ fluorine-18 المستخدم في FDG-PET', en:'Half-life of fluorine-18 used in FDG-PET'}
      ]},
    { h:{ar:'جرعات فعّالة نموذجية ودقة الأنظمة', en:'Typical effective doses and system resolution'},
      paras:[
        {ar:'أخيرًا جدولان للمقارنة السريعة: جرعات فعّالة تقريبية لفحوص مألوفة — لاحظ الفارق بين صورة الصدر وكامل PET/CT — ودقة مكانية نموذجية مقدرة بأزواج الخطوط في المليمتر، حيث يتصدر فيلم mammography وتتأخر fluoroscopy. القيم تقريبية وتتغير مع البروتوكولات والأجيال الجهازية، لكن ترتيب الأحجام هو ما يُسأل عنه عادة.',
         en:'Finally, two tables for quick comparison: approximate effective doses for familiar examinations — note the gulf between a chest radiograph and a whole-body PET/CT — and typical spatial resolutions in line pairs per millimetre, led by mammography film-screen and trailing with fluoroscopy. The values are approximate and shift with protocols and equipment generations, but the order of magnitude is what is usually examined.'}
      ],
      table:{head:[{ar:'الفحص', en:'Examination'}, {ar:'جرعة فعّالة تقريبية (mSv)', en:'Approximate effective dose (mSv)'}],
        rows:[
          [{ar:'DEXA', en:'DEXA'}, {ar:'0.001', en:'0.001'}],
          [{ar:'أشعة يد أو قدم', en:'Hand or foot radiograph'}, {ar:'0.005', en:'0.005'}],
          [{ar:'أشعة صدر', en:'Chest radiograph'}, {ar:'0.1', en:'0.1'}],
          [{ar:'Mammography', en:'Mammography'}, {ar:'0.4', en:'0.4'}],
          [{ar:'أشعة عمود فقري قطني', en:'Lumbar spine radiographs'}, {ar:'1.5', en:'1.5'}],
          [{ar:'CT رأس', en:'CT head'}, {ar:'2', en:'2'}],
          [{ar:'مسح عظام بالطب النووي', en:'Nuclear medicine bone scan'}, {ar:'6', en:'6'}],
          [{ar:'CT صدر', en:'CT chest'}, {ar:'7', en:'7'}],
          [{ar:'CT بطن وحوض', en:'CT abdomen and pelvis'}, {ar:'10', en:'10'}],
          [{ar:'كامل PET/CT', en:'Whole-body PET/CT'}, {ar:'24', en:'24'}]
        ]},
      bullets:[
        {ar:'الدقة المكانية (lp/mm): fluoroscopy نحو 1، و CT العرضي نحو 2، والتصوير الرقمي العام نحو 3، و digital mammography بين 5 و 10، وفيلم mammography التقليدي نحو 15', en:'Spatial resolution (lp/mm): fluoroscopy about 1, transaxial CT about 2, general digital radiography about 3, digital mammography 5 to 10, and film-screen mammography about 15'},
        {ar:'مكافئات الرصاص للحماية تلخيصًا: مئزر 0.25 mm Pb عند 100 kV، وواقي درقية 0.5 mm Pb', en:'Lead protection at a glance: an apron of 0.25 mm Pb at 100 kV, and a thyroid shield of 0.5 mm Pb'},
        {ar:'ضغط الثدي الأقصى في mammography نحو 200 N، والاعتيادي بين 100 و 150 N، ومسافة البؤرة إلى الكاشف نحو 65 cm', en:'Maximum breast compression in mammography is about 200 N, typically 100–150 N, with a focus-to-detector distance of about 65 cm'}
      ]}
  ],
  quiz:[
    { q:{ar:'ما قيمة Hounsfield unit للماء والهواء على الترتيب؟', en:'What are the Hounsfield units of water and air respectively?'},
      opts:[
        {ar:'الماء +100 والهواء 0', en:'Water +100 and air 0'},
        {ar:'الماء 0 والهواء −1000', en:'Water 0 and air −1000'},
        {ar:'الماء −1000 والهواء 0', en:'Water −1000 and air 0'},
        {ar:'الماء +1000 والهواء −100', en:'Water +1000 and air −100'}
      ], a:1,
      why:{ar:'سلم HU مرسّخ على الماء صفرًا والهواء عند −1000، وبينهما تتدرج الدهون سالبًا والأنسجة الرخوة موجبًا صغيرًا والعظم نحو +1000.',
           en:'The HU scale is anchored on water at 0 and air at −1000, with fat negative between them, soft tissues slightly positive, and bone up near +1000.'}},
    { q:{ar:'ما تردد Larmor لنواة الهيدروجين في جهاز 1.5 Tesla؟', en:'What is the Larmor frequency of hydrogen in a 1.5 tesla scanner?'},
      opts:[
        {ar:'21 MHz', en:'21 MHz'},
        {ar:'42 MHz', en:'42 MHz'},
        {ar:'63 MHz', en:'63 MHz'},
        {ar:'128 MHz', en:'128 MHz'}
      ], a:2,
      why:{ar:'التردد يتناسب طرديًا مع شدة المجال: 42 MHz عند 1 T، فيصبح 63 MHz عند 1.5 T (و 128 MHz تقريبًا عند 3 T).',
           en:'Frequency scales directly with field strength: 42 MHz at 1 T becomes 63 MHz at 1.5 T (and about 128 MHz at 3 T).'}},
    { q:{ar:'كيف يُشتق CTDIvol من CTDIw؟', en:'How is CTDIvol derived from CTDIw?'},
      opts:[
        {ar:'بضربه في طول المسح', en:'By multiplying it by the scan length'},
        {ar:'بقسمته على pitch', en:'By dividing it by pitch'},
        {ar:'بضربه في pitch', en:'By multiplying it by pitch'},
        {ar:'بجمع قياسي المركز والمحيط دون ترجيح', en:'By adding the centre and periphery measurements unweighted'}
      ], a:1,
      why:{ar:'CTDIvol = CTDIw ÷ pitch، فيأخذ في الحسبان تباعد اللفات أو تداخلها؛ أما الضرب في طول المسح فيعطي DLP لا CTDIvol.',
           en:'CTDIvol = CTDIw ÷ pitch, accounting for the spacing or overlap of rotations; multiplying by scan length gives the DLP instead.'}}
  ]
}
];
