export const LESSONS = [
  {
    slug: "ct-overview",
    chapter: "modalities",
    title: {
      ar: "نظرة عامة على التصوير المقطعي (CT)",
      en: "CT Overview"
    },
    intro: {
      ar: "التصوير المقطعي (Computed Tomography, CT) تقنية تستخدم حزمة أشعة سينية دوّارة وكواشف لقياس التوهين من زوايا كثيرة، ثم يعيد الحاسوب بناء هذه القياسات إلى صور مقطعية للجسم. ويمكن دمج المقاطع في حجم ثلاثي الأبعاد (3D volume) يُعاد تقطيعه رقميًا بمقاطع أرق أو في مستويات مختلفة.",
      en: "Computed tomography (CT) uses a rotating X-ray tube and detectors to measure attenuation from many angles, and a computer rebuilds those measurements into cross-sectional images of the body. The slices can be stacked into a 3D volume that is digitally re-sliced into thinner sections or viewed in entirely different planes."
    },
    sections: [
      {
        h: { ar: "كيف تتكوّن صورة CT؟", en: "How a CT image is formed" },
        paras: [
          {
            ar: "يدور أنبوب الأشعة والكواشف حول المريض داخل الـ gantry، وتُسجَّل شدة الأشعة النافذة من كل زاوية. ومن مئات هذه الإسقاطات يحسب الحاسوب قيمة التوهين لكل نقطة صغيرة (voxel) في المقطع، فيتكوّن مقطع محوري يمكن التنقل خلاله عبر الجسم كشرائح متتالية.",
            en: "The X-ray tube and detectors rotate around the patient inside the gantry, recording the transmitted beam intensity from every angle. From hundreds of these projections the computer calculates an attenuation value for each tiny volume element (voxel), producing an axial slice, and slices are stacked so the body can be scrolled through like a loaf of bread."
          },
          {
            ar: "تُقاس قيم التوهين بمقياس Hounsfield units (HU)، حيث الماء صفر والهواء ‎-1000 والعظم كثيف موجب مرتفع. ولأن الشاشة لا تعرض كل هذا المدى دفعة واحدة بوضوح، تُستخدم النوافذ (windowing): يحدد عرض النافذة (window width) مدى القيم المعروضة، ويحدد مستوى النافذة (window level) مركز هذا المدى، فتوجد نوافذ خاصة للرئة والعظم والأنسجة الرخوة من البيانات نفسها.",
            en: "Attenuation values are expressed in Hounsfield units (HU), where water is 0, air is -1000 and dense bone is strongly positive. Because a screen cannot usefully display that whole range at once, the image is windowed: the window width sets the range of values shown and the window level sets its centre, so the same raw data can be displayed on lung, bone or soft-tissue windows."
          }
        ]
      },
      {
        h: { ar: "نقاط القوة والاستخدامات الشائعة", en: "Strengths and common uses" },
        paras: [
          {
            ar: "يتميز CT بالسرعة والدقة التشريحية العالية وتوفره الواسع، لذلك هو فحص الاختيار الأول في إصابات الحوادث (trauma) وفي تقييم الصدر والبطن والحوض. كما يسمح بالتصوير متعدد المستويات (multiplanar reconstruction) والعروض ثلاثية الأبعاد التي تساعد في التخطيط الجراحي.",
            en: "CT is fast, anatomically detailed and widely available, making it the first-line test in major trauma and a workhorse for the chest, abdomen and pelvis. Multiplanar reconstructions and 3D renderings from the same dataset are also valuable when planning surgery."
          }
        ],
        bullets: [
          { ar: "بروتوكول HRCT عالي الدقة لتصوير أمراض الرئة الخلالية (interstitial lung disease)", en: "High-resolution CT (HRCT) protocols for interstitial lung disease" },
          { ar: "تنظير القولون الافتراضي (CT colonography) بديلًا غير باضع عن التنظير التقليدي عند بعض المرضى", en: "CT colonography (virtual colonoscopy) as a less invasive alternative to optical colonoscopy in selected patients" },
          { ar: "أخذ خزعات وعينات موجّهة بـ CT من آفات عميقة يصعب الوصول إليها", en: "CT-guided biopsy of deep lesions that are hard to reach any other way" },
          { ar: "تصوير الأوعية (CT angiography) مثل CTPA لتشخيص الانصمام الرئوي", en: "CT angiography, such as CT pulmonary angiography for suspected pulmonary embolism" }
        ]
      },
      {
        h: { ar: "الجرعة الإشعاعية", en: "Radiation dose" },
        paras: [
          {
            ar: "وحدة قياس الجرعة الفعالة هي millisievert (mSv)، ويتعرض الإنسان أصلًا لإشعاع خلفي طبيعي (background radiation) يبلغ في المملكة المتحدة نحو 2.7 mSv سنويًا. جرعات CT أعلى بكثير من جرعات الأشعة العادية، لذلك تُقارن عادة بما يعادلها من سنوات الإشعاع الخلفي لتقريب حجمها، ويجب تبرير كل فحص قبل إجرائه.",
            en: "Effective dose is measured in millisieverts (mSv), and everyone is exposed to natural background radiation, about 2.7 mSv per year in the UK. CT doses are far higher than those of plain radiographs, so they are often expressed as the equivalent period of background radiation to make the size of the dose intuitive, and every scan must be justified before it is performed."
          }
        ],
        table: {
          head: [
            { ar: "الفحص", en: "Examination" },
            { ar: "الجرعة الفعالة التقريبية", en: "Typical effective dose" },
            { ar: "ما يعادلها من الإشعاع الخلفي", en: "Background-radiation equivalent" }
          ],
          rows: [
            [{ ar: "أشعة صدر عادية", en: "Chest X-ray" }, { ar: "0.02 mSv", en: "0.02 mSv" }, { ar: "نحو 3 أيام", en: "About 3 days" }],
            [{ ar: "CT للرأس", en: "CT head" }, { ar: "2 mSv", en: "2 mSv" }, { ar: "نحو 9 أشهر", en: "About 9 months" }],
            [{ ar: "CT للصدر", en: "CT chest" }, { ar: "7 mSv", en: "7 mSv" }, { ar: "نحو 2.5 سنة", en: "About 2.5 years" }],
            [{ ar: "CT للبطن", en: "CT abdomen" }, { ar: "8 mSv", en: "8 mSv" }, { ar: "نحو 3 سنوات", en: "About 3 years" }],
            [{ ar: "إجراءات تداخلية", en: "Interventional procedures" }, { ar: "15–70 mSv", en: "15–70 mSv" }, { ar: "نحو 5–25 سنة", en: "About 5–25 years" }]
          ]
        },
        nums: [
          { v: "2.7 mSv", ar: "الإشعاع الخلفي الطبيعي سنويًا في المملكة المتحدة", en: "Natural background radiation per year in the UK" },
          { v: "7 mSv", ar: "الجرعة التقريبية لفحص CT للصدر", en: "Approximate dose of a CT chest" }
        ]
      },
      {
        h: { ar: "المخاطر والسلامة", en: "Risks and safety" },
        paras: [
          {
            ar: "تُصنف آثار الإشعاع إلى نوعين: آثار حتمية (deterministic) تظهر عند تجاوز عتبة جرعة معينة وتزداد شدتها مع الجرعة، وتصيب الأنسجة سريعة الانقسام كالقناة الهضمية ونخاع العظم، وهي مرتبطة بجرعات العلاج الإشعاعي العالية؛ وآثار عشوائية (stochastic) لا عتبة معروفة لها، إذ قد يسبب أي تعرض تغيرات في الـ DNA تزيد احتمال السرطان أو آثارًا وراثية، واحتمالها — لا شدتها — هو ما يرتفع مع الجرعة، وهي الشاغل الرئيس في الجرعات التشخيصية الصغيرة.",
            en: "Radiation effects fall into two groups. Deterministic effects appear only above a threshold dose and grow more severe as dose rises; they strike rapidly dividing tissues such as the gut and bone marrow and are relevant to high-dose radiotherapy. Stochastic effects have no known threshold: any exposure may cause DNA changes that raise the chance of cancer or heritable effects, and it is the probability, not the severity, that increases with dose. Stochastic risk is the main concern at low diagnostic doses."
          },
          {
            ar: "إضافة إلى الإشعاع، تحمل فحوص CT مخاطر مادة التباين الوريدية (contrast) كالتفاعلات التحسسية وإصابة الكلى، لا سيما عند مرضى القصور الكلوي أو متناولي metformin، فيجب مراجعة وظائف الكلى وسوابق الحساسية قبل الفحص. كل ذلك يجعل التبرير (justification) قاعدة ذهبية: لا يُجرى الفحص إلا إذا كانت فائدته المتوقعة أكبر من مخاطره.",
            en: "Beyond radiation, CT carries risks from intravenous contrast, including allergic-like reactions and kidney injury, particularly in patients with renal impairment or those taking metformin, so renal function and allergy history must be checked beforehand. All of this is why justification is the golden rule: a scan should only proceed when its expected benefit outweighs its risks."
          }
        ]
      }
    ],
    quiz: [
      {
        q: { ar: "ماذا يغيّر ضبط النوافذ (windowing) في صورة CT؟", en: "What does windowing change in a CT image?" },
        opts: [
          { ar: "مدى قيم Hounsfield المعروضة ومركزها على الشاشة", en: "The range and centre of Hounsfield values displayed on screen" },
          { ar: "الجرعة الإشعاعية التي تلقاها المريض", en: "The radiation dose the patient received" },
          { ar: "سماكة المقطع أثناء التصوير", en: "The slice thickness during acquisition" },
          { ar: "سرعة دوران الـ gantry", en: "The rotation speed of the gantry" }
        ],
        a: 0,
        why: { ar: "النوافذ أداة عرض فقط: window width يحدد المدى وwindow level يحدد مركزه، فتُبرز الأنسجة الرخوة أو الرئة أو العظم من البيانات الخام نفسها دون تغييرها.", en: "Windowing is purely a display tool: window width sets the displayed range and window level its centre, letting soft tissue, lung or bone be emphasised from the same raw data without altering it." }
      },
      {
        q: { ar: "جرعة CT للصدر (نحو 7 mSv) تعادل تقريبًا كم من الإشعاع الخلفي الطبيعي؟", en: "A CT chest dose of about 7 mSv is roughly equivalent to how much natural background radiation?" },
        opts: [
          { ar: "نحو 3 أيام", en: "About 3 days" },
          { ar: "نحو 9 أشهر", en: "About 9 months" },
          { ar: "نحو 2.5 سنة", en: "About 2.5 years" },
          { ar: "نحو 25 سنة", en: "About 25 years" }
        ],
        a: 2,
        why: { ar: "بما أن الإشعاع الخلفي نحو 2.7 mSv سنويًا، فإن 7 mSv تعادل قرابة سنتين ونصف من التعرض الطبيعي، بينما 3 أيام تقابل أشعة الصدر العادية و9 أشهر تقابل CT الرأس.", en: "With background radiation at about 2.7 mSv per year, 7 mSv corresponds to roughly two and a half years of natural exposure; 3 days matches a chest X-ray and 9 months a CT head." }
      },
      {
        q: { ar: "أي مما يلي مثال على أثر عشوائي (stochastic) للإشعاع؟", en: "Which of the following is an example of a stochastic radiation effect?" },
        opts: [
          { ar: "احمرار الجلد بعد تجاوز جرعة عتبة معينة", en: "Skin reddening after a threshold dose is exceeded" },
          { ar: "تثبيط نخاع العظم بجرعات العلاج الإشعاعي", en: "Bone marrow suppression at radiotherapy doses" },
          { ar: "زيادة احتمال حدوث سرطان ناتج عن تغير في DNA", en: "An increased chance of cancer from a DNA change" },
          { ar: "تساقط الشعر في منطقة تعرضت لجرعة عالية", en: "Hair loss in an area exposed to a high dose" }
        ],
        a: 2,
        why: { ar: "الآثار العشوائية احتمالية بلا عتبة: كالسرطان الناتج عن تلف DNA، حيث تزيد الجرعةُ الاحتمالَ لا الشدة. أما احمرار الجلد وتثبيط النخاع وتساقط الشعر فهي آثار حتمية لها عتبات.", en: "Stochastic effects are matters of probability with no threshold, such as cancer arising from DNA damage, where dose raises the chance rather than the severity. Skin reddening, marrow suppression and hair loss are deterministic effects with thresholds." }
      }
    ]
  },
  {
    slug: "mri-overview",
    chapter: "modalities",
    title: {
      ar: "نظرة عامة على التصوير بالرنين المغناطيسي (MRI)",
      en: "MRI Overview"
    },
    intro: {
      ar: "التصوير بالرنين المغناطيسي (Magnetic Resonance Imaging, MRI) يستخدم مجالًا مغناطيسيًا قويًا وموجات راديوية (radiofrequency pulses) للحصول على صور تفصيلية، خاصة للأنسجة الرخوة، دون أي إشعاع مؤين. يعتمد على سلوك بروتونات الهيدروجين في الماء والدهون داخل الجسم.",
      en: "Magnetic resonance imaging (MRI) uses a strong magnetic field and radiofrequency pulses to produce highly detailed images, especially of soft tissues, without any ionising radiation. It exploits the behaviour of hydrogen protons in the water and fat of the body."
    },
    sections: [
      {
        h: { ar: "كيف يعمل MRI؟", en: "How MRI works" },
        paras: [
          {
            ar: "عند وضع المريض داخل المغناطيس تصطف بروتونات الهيدروجين مع اتجاه المجال المغناطيسي وتدور حوله بحركة تسمى precession. ثم تُرسَل نبضة تردد راديوي (RF pulse) بتردد مناسب فتمتص البروتونات طاقة وتنحرف عن اتجاه الاصطفاف.",
            en: "Inside the magnet, hydrogen protons align with the magnetic field and spin around its direction in a motion called precession. A radiofrequency (RF) pulse at just the right frequency is then applied, and the protons absorb energy and are tipped away from their alignment."
          },
          {
            ar: "بعد توقف النبضة تعود البروتونات تدريجيًا إلى وضعها الأصلي في عمليتين: استرجاع T1 واسترخاء T2، وأثناء ذلك تبث إشارات تلتقطها ملفات الاستقبال (receiver coils). وتختلف سرعة هذا الاسترخاء بين الأنسجة، فتنشأ فروق الإشارة التي تصنع التباين، بينما تحدد التدرجات المغناطيسية (gradients) مصدر الإشارة مكانيًا فيبني الحاسوب الصورة.",
            en: "When the pulse stops, the protons gradually return to their original state through T1 recovery and T2 relaxation, emitting signals that are picked up by receiver coils. Because relaxation speeds differ between tissues, signal differences arise that create image contrast, while magnetic field gradients encode where each signal came from so the computer can build the image."
          }
        ],
        nums: [
          { v: "1.5 T / 3 T", ar: "شدتا المجال المغناطيسي الأكثر شيوعًا في أجهزة MRI السريرية (Tesla)", en: "The commonest clinical MRI field strengths (tesla)" }
        ]
      },
      {
        h: { ar: "نقاط القوة والاستخدامات", en: "Strengths and uses" },
        paras: [
          {
            ar: "أعظم مزايا MRI تباين الأنسجة الرخوة (soft tissue contrast) المتفوق على CT، مع إمكانية التصوير في أي مستوى (axial, sagittal, coronal وحتى مستويات مائلة) ودون إشعاع مؤين، ما يجعله مناسبًا للتكرار وللفئات الحساسة عند الالتزام بمعايير السلامة.",
            en: "The greatest strength of MRI is soft-tissue contrast that surpasses CT, combined with imaging in any plane (axial, sagittal, coronal and obliques) and no ionising radiation, which makes it suitable for repeat examinations and, with proper safety screening, for sensitive patient groups."
          }
        ],
        bullets: [
          { ar: "الدماغ والحبل الشوكي: الأورام والجلطات والتصلب المتعدد والصرع", en: "Brain and spine: tumours, stroke, multiple sclerosis and epilepsy" },
          { ar: "المفاصل والعضلات والعظام: إصابات الأربطة والغضاريف والأنسجة الرخوة", en: "Joints and musculoskeletal system: ligament, cartilage and soft-tissue injuries" },
          { ar: "الحوض والكبد والبروستاتا والثدي عند حالات منتقاة", en: "Pelvis, liver, prostate and breast in selected cases" },
          { ar: "القلب والأوعية: وظيفة القلب وتشوهاته وMRA للأوعية دون قسطرة", en: "Heart and vessels: cardiac function and congenital disease, and MR angiography without catheterisation" }
        ]
      },
      {
        h: { ar: "القيود والعيوب", en: "Limitations" },
        bullets: [
          { ar: "زمن فحص طويل نسبيًا (غالبًا 20–60 دقيقة) يجعل الصورة حساسة لحركة المريض (motion artefact)", en: "Long examination times (often 20–60 minutes) make images vulnerable to patient movement (motion artefact)" },
          { ar: "ضجيج مرتفع ومساحة ضيقة داخل الجهاز تسبب مشكلة لمرضى رهاب الأماكن المغلقة (claustrophobia)", en: "Loud noise and a confined bore, which some patients cannot tolerate because of claustrophobia" },
          { ar: "تكلفة عالية وتوفر أقل من CT، وانتظار أطول في كثير من الأنظمة الصحية", en: "Higher cost and less availability than CT, with longer waiting lists in many health systems" },
          { ar: "تفاصيل محدودة في العظم القشري والرئة المليئة بالهواء مقارنة بـ CT", en: "Limited detail of cortical bone and air-filled lung compared with CT" }
        ]
      },
      {
        h: { ar: "السلامة والفرز قبل الفحص", en: "Safety and screening" },
        paras: [
          {
            ar: "المغناطيس يعمل دائمًا، لذلك أي جسم حديدي مغناطيسي (ferromagnetic) قد ينجذب بقوة خطرة داخل الغرفة، ويُمنع إدخال أدوات وأسطوانات غير معتمدة لـ MR. ويخضع كل مريض لفرز دقيق (screening) عن الأجهزة المزروعة كمنظمات ضربات القلب (pacemakers) وبعض غرسات القوقعة ومشابك تمدد الأوعية الدموية القديمة، لأن المجال والنبضات قد يعطلانها أو يحركانها.",
            en: "The magnet is always on, so any ferromagnetic object can be pulled forcefully across the room, and only MR-approved equipment and cylinders may be brought in. Every patient is carefully screened for implants such as pacemakers, some cochlear implants and older aneurysm clips, because the field and pulses can disable them or move them."
          },
          {
            ar: "كذلك يُسأل المريض عن شظايا معدنية داخل العين من إصابات سابقة، فقد تتحرك وتؤذي العين، وتُجرى أشعة للعين عند الاشتباه. أما مادة التباين gadolinium فتُستخدم بحذر عند مرضى القصور الكلوي الشديد لارتباط أنواع قديمة منها بمرض نادر هو التليف الجهازي كلوي المنشأ (nephrogenic systemic fibrosis)، وتُتجنب عادة في الحمل ما لم تكن ضرورية، رغم أن التصوير نفسه دون تباين يُعد خاليًا من الإشعاع المؤين.",
            en: "Patients are also asked about metal fragments in the eye from previous injuries, since these can move and damage the eye, and orbital X-rays are taken if there is any doubt. Gadolinium contrast is used cautiously in severe renal impairment because older agents were linked to a rare condition, nephrogenic systemic fibrosis, and it is usually avoided in pregnancy unless essential, although the scan itself involves no ionising radiation."
          }
        ]
      }
    ],
    quiz: [
      {
        q: { ar: "إشارة MRI تأتي أساسًا من بروتونات أي عنصر؟", en: "The MRI signal comes mainly from the protons of which element?" },
        opts: [
          { ar: "الأكسجين", en: "Oxygen" },
          { ar: "الهيدروجين", en: "Hydrogen" },
          { ar: "الكالسيوم", en: "Calcium" },
          { ar: "الحديد", en: "Iron" }
        ],
        a: 1,
        why: { ar: "أجسامنا غنية بالماء والدهون، وبروتونات الهيدروجين فيها وفيرة وتستجيب للمجال المغناطيسي ونبضات RF، ومن استرخائها T1 وT2 تتكون الإشارة والصورة.", en: "The body is rich in water and fat, so hydrogen protons are abundant and respond to the magnetic field and RF pulses; their T1 and T2 relaxation generates the signal that forms the image." }
      },
      {
        q: { ar: "أي مريض يحتاج تقييم سلامة خاصًا قبل MRI؟", en: "Which patient needs special safety assessment before MRI?" },
        opts: [
          { ar: "مريض لديه منظم ضربات قلب (pacemaker)", en: "A patient with a cardiac pacemaker" },
          { ar: "مريض مصاب بالسكري", en: "A patient with diabetes" },
          { ar: "مريض لديه حساسية من البنسلين", en: "A patient allergic to penicillin" },
          { ar: "مريض أجرى عملية الزائدة سابقًا", en: "A patient who has had an appendicectomy" }
        ],
        a: 0,
        why: { ar: "الأجهزة الإلكترونية المزروعة كمنظمات القلب قد تتعطل أو تتحرك داخل المجال المغناطيسي القوي، لذلك تُفرز كل الغرسات والمشابك والشظايا المعدنية قبل الفحص.", en: "Implanted electronic devices such as pacemakers can malfunction or move in the strong magnetic field, so all implants, clips and metal fragments are screened for before the examination." }
      },
      {
        q: { ar: "ما الميزة الأهم لـ MRI مقارنة بـ CT؟", en: "What is the most important advantage of MRI over CT?" },
        opts: [
          { ar: "أسرع بكثير في حالات الحوادث", en: "It is much faster in trauma" },
          { ar: "أرخص وأكثر توفرًا", en: "It is cheaper and more available" },
          { ar: "تباين أنسجة رخوة أفضل وبدون إشعاع مؤين", en: "Better soft-tissue contrast with no ionising radiation" },
          { ar: "يعرض العظم القشري بتفاصيل أدق", en: "It shows cortical bone in finer detail" }
        ],
        a: 2,
        why: { ar: "تفوق MRI في تمييز الأنسجة الرخوة وخلوه من الإشعاع المؤين يجعله الأفضل للدماغ والمفاصل والحوض، بينما CT أسرع وأفضل للعظم والرئة والحوادث.", en: "Superior soft-tissue discrimination and the absence of ionising radiation make MRI best for brain, joints and pelvis, whereas CT is faster and better for bone, lung and trauma." }
      }
    ]
  },
  {
    slug: "ultrasound-overview",
    chapter: "modalities",
    title: {
      ar: "نظرة عامة على الموجات فوق الصوتية (Ultrasound)",
      en: "Ultrasound Overview"
    },
    intro: {
      ar: "الموجات فوق الصوتية (Ultrasound) تستخدم موجات صوتية عالية التردد يولّدها مسبار (probe) يوضع على الجلد، وتنعكس الأصداء من حدود الأنسجة لتكوين صور لحظية متحركة (real-time). وهي آمنة بلا إشعاع مؤين، ورخيصة ومحمولة، لكنها تعتمد كثيرًا على مهارة الفاحص.",
      en: "Ultrasound uses high-frequency sound waves generated by a probe on the skin, and echoes returning from tissue boundaries are turned into moving, real-time images. It involves no ionising radiation and is cheap and portable, but it is highly dependent on the skill of the operator."
    },
    sections: [
      {
        h: { ar: "كيف تتكوّن الصورة؟", en: "How the image is formed" },
        paras: [
          {
            ar: "يحتوي المسبار على بلورات piezoelectric تولّد نبضات صوتية عند مرور تيار كهربائي فيها، ثم تستقبل الأصداء المرتدة وتحولها إلى إشارات كهربائية. وبحسب زمن عودة الصدى وشدته يرسم الجهاز صورة رمادية (B-mode) تُظهر السوائل داكنة والأنسجة العاكسة فاتحة، وتُحدَّث لحظيًا فنرى الحركة كضربات القلب وحركة الجنين مباشرة.",
            en: "The probe contains piezoelectric crystals that generate sound pulses when an electric current is applied, then receive the returning echoes and convert them back into electrical signals. From each echo timing and strength the machine builds a grey-scale (B-mode) image in which fluid appears dark and reflective tissues bright, updated continuously so movement such as the heartbeat or a fetus can be watched live."
          }
        ],
        nums: [
          { v: "2–18 MHz", ar: "المدى التقريبي لترددات الموجات فوق الصوتية التشخيصية", en: "Approximate frequency range of diagnostic ultrasound" },
          { v: "0 mSv", ar: "الجرعة الإشعاعية: لا يستخدم ultrasound إشعاعًا مؤينًا", en: "Radiation dose: ultrasound uses no ionising radiation" }
        ]
      },
      {
        h: { ar: "Doppler والفحص المزدوج Duplex", en: "Doppler and duplex scanning" },
        paras: [
          {
            ar: "يقيس Doppler تغير تردد الصدى المنعكس عن الدم المتحرك، فيظهر اتجاه الجريان وسرعته بألوان على الصورة (colour Doppler). ويساعد ذلك في كشف أوعية داخل عضو أو ورم، وتأكيد غياب الجريان في وريد مصاب بخثار (DVT)، وقياس قطر التجويف المفتوح في الشرايين مثل تضيق الشريان السباتي (carotid stenosis).",
            en: "Doppler measures the shift in frequency of echoes reflected from moving blood, displaying flow direction and speed as colour on the image (colour Doppler). This helps to find vessels within an organ or tumour, confirm absent flow in a thrombosed vein (DVT), and measure the remaining patent lumen in arteries such as in carotid stenosis."
          },
          {
            ar: "مصطلح duplex يعني ببساطة جمع الصورتين معًا: صورة رمادية تشريحية مع خريطة Doppler ملونة فوقها، ويضيف Doppler الطيفي (spectral Doppler) رسمًا بيانيًا لسرعات الجريان عبر الزمن يستخدم في تقييم الصمامات والتضيقات.",
            en: "Duplex simply means the two are combined: a grey-scale anatomical image with a colour Doppler map overlaid on it. Spectral Doppler adds a graph of flow velocities over time, used to assess valves and the severity of narrowings."
          }
        ]
      },
      {
        h: { ar: "اتجاه الصورة ومستويات المسح", en: "Image orientation and scan planes" },
        paras: [
          {
            ar: "يمثل المحور الطولي للمسبار مستوى يقطع الجسم، ويوجد مستويان رئيسيان للمسح: المستوى المستعرض (transverse, TS) والمستوى الطولي (longitudinal, LS) الموازي للمحور الطولي للجسم أي السهمي (sagittal). والاتفاقية المتبعة أن الجانب الأيسر من الشاشة في المقطع المستعرض يقابل الجانب الأيمن من المريض، بينما في المقطع الطولي يقابل الأيسرُ اتجاهَ رأس المريض.",
            en: "The long axis of the probe defines the plane slicing through the body, and there are two main scan planes: transverse (TS) and longitudinal (LS), the latter being the sagittal plane along the long axis of the body. By convention, in a transverse image the left side of the screen corresponds to the right side of the patient, while in a longitudinal image the left side of the screen points towards the head of the patient."
          }
        ],
        bullets: [
          { ar: "المقطع المستعرض (TS): يسار الشاشة = يمين المريض", en: "Transverse section (TS): left of screen = right of patient" },
          { ar: "المقطع الطولي (LS): يسار الشاشة = جهة رأس المريض", en: "Longitudinal section (LS): left of screen = towards the head of the patient" }
        ]
      },
      {
        h: { ar: "طرق الفحص واستخداماته وحدوده", en: "Approaches, uses and limitations" },
        paras: [
          {
            ar: "الطريقة الأكثر شيوعًا هي الفحص عبر الجلد: عبر الصدر للقلب (transthoracic echocardiogram) وعبر البطن لأعضاء البطن والحوض (transabdominal)، وهي سريعة وأقل إزعاجًا وأكثر قبولًا عند المرضى. لكن أحيانًا يلزم مسبار داخلي أقرب للهدف: عبر المريء (transoesophageal) أو عبر المستقيم (transrectal) أو عبر المهبل (transvaginal)، خاصة عندما يكون العضو المطلوب داخل جدار تجويف أو مجاورًا له كأورام الجدار والعقد اللمفاوية المجاورة، أو عندما تحد بنية جسم المريض من جودة الفحص الخارجي.",
            en: "The commonest approach is through the skin: transthoracic scanning for the heart (echocardiogram) and transabdominal scanning for abdominal and pelvic organs, which are quick, less invasive and more acceptable to patients. Sometimes an internal probe closer to the target is needed: transoesophageal, transrectal or transvaginal, particularly when the area of interest lies within or next to the wall of a lumen, such as intramural tumours and adjacent lymph nodes, or when body habitus limits the external approach."
          }
        ],
        bullets: [
          { ar: "المزايا: آمن في الحمل، محمول حتى سرير المريض، يوجّه الخزعات والتفريغ بدقة لحظية", en: "Advantages: safe in pregnancy, portable to the bedside, and guides biopsies and drainages in real time" },
          { ar: "الحدود: تحجبه الغازات والعظام، وتضعف جودته مع السمنة، ويعتمد على خبرة الفاحص", en: "Limitations: blocked by gas and bone, degraded by obesity, and strongly operator-dependent" }
        ]
      }
    ],
    quiz: [
      {
        q: { ar: "ماذا يعني مصطلح duplex في فحص الموجات فوق الصوتية؟", en: "What does the term duplex mean in ultrasound?" },
        opts: [
          { ar: "استخدام مسبارين في الوقت نفسه", en: "Using two probes at the same time" },
          { ar: "تراكب ألوان Doppler فوق الصورة الرمادية الأساسية", en: "Colour Doppler overlaid on the basic grey-scale image" },
          { ar: "تكرار الفحص مرتين للتأكد", en: "Repeating the examination twice to confirm" },
          { ar: "فحص عضوين في جلسة واحدة", en: "Scanning two organs in one sitting" }
        ],
        a: 1,
        why: { ar: "الفحص المزدوج يجمع بين التصوير الرمادي التشريحي ومعلومات الجريان الملونة من Doppler في صورة واحدة، فتُقيَّم البنية والجريان معًا.", en: "Duplex scanning combines the grey-scale anatomical image with colour Doppler flow information in a single display, so structure and flow are assessed together." }
      },
      {
        q: { ar: "في صورة مقطع مستعرض (transverse)، الجانب الأيسر من الشاشة يمثل:", en: "In a transverse ultrasound image, the left side of the screen represents:" },
        opts: [
          { ar: "الجانب الأيسر من المريض", en: "The left side of the patient" },
          { ar: "الجانب الأيمن من المريض", en: "The right side of the patient" },
          { ar: "رأس المريض دائمًا", en: "The head of the patient, always" },
          { ar: "الجهة الأمامية من المريض", en: "The front of the patient" }
        ],
        a: 1,
        why: { ar: "باتفاقية العرض، يُنظر إلى المقطع المستعرض كأننا ننظر من قدمي المريض إلى أعلى، فيظهر يمين المريض على يسار الشاشة، أما اتجاه الرأس فيخص المقطع الطولي.", en: "By display convention a transverse image is viewed as if looking up from the feet of the patient, so the right of the patient appears on the left of the screen; the head direction convention belongs to longitudinal images." }
      },
      {
        q: { ar: "متى يُفضَّل المسبار الداخلي (مثل transvaginal) على الفحص عبر البطن؟", en: "When is an internal probe (such as transvaginal) preferred over a transabdominal scan?" },
        opts: [
          { ar: "عندما يكون العضو المستهدف قريبًا من جدار التجويف أو يعيق جسم المريض الفحص الخارجي", en: "When the target organ lies close to a lumen wall, or body habitus limits the external scan" },
          { ar: "لأنه أرخص دائمًا", en: "Because it is always cheaper" },
          { ar: "لأنه لا يحتاج جلًا موصلًا", en: "Because it needs no coupling gel" },
          { ar: "عند الحاجة لقياس سرعة الجريان فقط", en: "When only flow velocity needs measuring" }
        ],
        a: 0,
        why: { ar: "قرب المسبار الداخلي من أعضاء الحوض يعطي تفاصيل أدق بترددات أعلى، ويُستخدم خاصة للآفات داخل جدار التجويف أو مجاورة له وعندما تحد بنية الجسم من الفحص الخارجي.", en: "An internal probe sits much closer to the pelvic organs, giving finer detail at higher frequencies; it is used particularly for lesions in or beside a lumen wall and when body habitus limits the external approach." }
      }
    ]
  },
  {
    slug: "requesting-imaging",
    chapter: "modalities",
    title: {
      ar: "كيف تطلب فحص تصوير؟ (Requesting Imaging)",
      en: "Requesting Imaging"
    },
    intro: {
      ar: "طلب التصوير الطبي مهارة أساسية لطبيب الأقسام: فالطلب الجيد يعجل التشخيص ويمنع التأخير والفحوص غير اللازمة. الطلب ليس أمرًا تنفيذيًا بل طلب رأي وخدمة من فريق الأشعة، ويمر بمرحلة مراجعة وتبرير (vetting & justification) قبل تنفيذه.",
      en: "Requesting imaging is a core skill for ward doctors: a good request speeds up diagnosis and prevents delay and unnecessary examinations. A request is not an order but a referral to the radiology team for a specialist service, and it passes through vetting and justification before it is carried out."
    },
    sections: [
      {
        h: { ar: "مكونات نموذج الطلب الكامل", en: "Components of a complete request" },
        paras: [
          {
            ar: "لكي يستطيع أخصائي الأشعة تبرير الفحص واختيار البروتوكول الأنسب، يجب أن يجيب النموذج عن: من المريض؟ وماذا نريد أن نعرف؟ ولماذا الآن؟ وهل توجد موانع أو مخاطر خاصة؟ أي نقص في هذه العناصر يعني غالبًا تأخيرًا أو رفضًا أو فحصًا غير مناسب.",
            en: "For the radiologist to justify the examination and choose the best protocol, the form must answer: who is the patient, what do we need to know, why now, and are there any special risks or contraindications? Missing elements usually mean delay, rejection, or the wrong test being performed."
          }
        ],
        bullets: [
          { ar: "بيانات المريض التعريفية كاملة (الاسم ورقم المستشفى وتاريخ الميلاد)", en: "Full patient identification details (name, hospital number, date of birth)" },
          { ar: "التفاصيل السريرية: العلامات والأعراض، ونتائج أي تصوير سابق وفحوص دم ذات صلة", en: "Clinical details: signs and symptoms, plus results of previous imaging and relevant blood tests" },
          { ar: "السؤال السريري المطلوب الإجابة عنه: ما العلامة المحددة المطلوب البحث عنها؟ وما التشخيص الأولي والتفريقي؟", en: "The clinical question to be answered: what specific finding is being sought, and what are the provisional and differential diagnoses?" },
          { ar: "الفحص المطلوب: الوسيلة المقترحة (modality) والمنطقة من الجسم", en: "The investigation requested: the proposed modality and body region" },
          { ar: "وسيلة نقل المريض وهل توجد مشاكل في الحركة أو التنقل (mobility)", en: "Mode of transport and any mobility problems the patient has" },
          { ar: "خلفية طبية مهمة للسلامة: أمراض الكلى والقلب والسكري وتناول metformin والحساسيات، وموانع كالحمل أو وجود معدن في الجسم", en: "Background medical information relevant to safety: renal disease, cardiac disease, diabetes, metformin use and allergies, plus contraindications such as pregnancy or metal in the body" },
          { ar: "بيانات الطبيب المحيل (referrer) وكيفية الوصول إليه لمناقشة الطلب", en: "Referrer details so the radiology team can contact the requesting clinician to discuss the request" }
        ]
      },
      {
        h: { ar: "كتابة طلب منظم واضح", en: "Writing a structured request" },
        paras: [
          {
            ar: "الطلب المكتوب الجيد يرتب المعلومات السريرية باختصار وبنية ثابتة: يبدأ بخلفية المريض وسوابقه المرضية (scenario)، ثم شكواه الحالية (presenting complaint)، ثم ما وُجد عند الفحص السريري من علامات وقياسات (on examination)، ثم الفحوص التي أُجريت ونتائجها (tests done)، ثم مبرر الفحص أو درجة خطورة تدعمه كمقياس Wells عند اشتباه الانصمام الرئوي (indication)، وبعدها السؤال التشخيصي الصريح كعلامة استفهام (query) مثل ‎?PE ?Pneumonia، وأخيرًا الفحص المطلوب تحديدًا (request) مثل CTPA.",
            en: "A good written request arranges the clinical information concisely in a fixed structure: the background and past history of the patient (scenario), the presenting complaint, the findings on examination including vital signs, the tests already done and their results, the indication or supporting risk score such as a Wells score for suspected pulmonary embolism, then the explicit diagnostic query, for example ?PE or ?pneumonia, and finally the specific request itself, such as a CT pulmonary angiogram."
          },
          {
            ar: "أما الطلب الشفهي لمناقشة حالة مع أخصائي الأشعة فيبدأ بتعريف نفسك: الاسم والدور والفريق، ثم بيانات المريض ورقمه بالمستشفى، ثم السؤال السريري، ثم ملخص التاريخ المرضي، وأخيرًا طلبك أو سؤالك. مثال ذلك مناقشة سيدة حامل يُشتبه لديها بانصمام رئوي، حيث قد ينتهي النقاش إلى أن فحص Doppler للساقين أنسب بداية من التعرض للإشعاع، فلا تتردد في طلب المشورة إذا لم تكن متأكدًا من الوسيلة الأنسب.",
            en: "A verbal request to discuss a case with the radiologist starts with introducing yourself by name, role and team, then gives the patient details and hospital number, states the clinical query, summarises the history, and ends with the request or question. For example, discussing a pregnant woman with suspected pulmonary embolism may conclude that a leg Doppler is the better first step than irradiating the chest, so ask for advice whenever you are unsure which modality is most suitable."
          }
        ]
      },
      {
        h: { ar: "التبرير والمراجعة: لماذا قد يتأخر طلبك أو يُرفض؟", en: "Justification and vetting: why requests get delayed or declined" },
        paras: [
          {
            ar: "بموجب أنظمة التعرض الطبي مثل IR(ME)R تتوزع المسؤوليات: المحيل (referrer) يقدم معلومات سريرية كافية، والممارس (practitioner) وهو أخصائي الأشعة يقرر أن الفحص مبرر وأن فائدته تفوق مخاطره، والمشغّل (operator) وهو المصوّر ينفذه بأقل جرعة ممكنة. لذلك أي طلب ناقص المعلومات سيعود إليك غالبًا لمزيد من التفاصيل، وكلما كان سؤالك السريري محددًا كان التبرير أسرع والبروتوكول أدق.",
            en: "Under medical-exposure regulations such as IR(ME)R, duties are shared: the referrer supplies sufficient clinical information, the practitioner, usually the radiologist, decides that the examination is justified and that benefit outweighs risk, and the operator, the radiographer, performs it with the lowest reasonable dose. A request lacking key information will usually be returned for more detail, so the sharper your clinical question, the quicker the justification and the better tailored the protocol."
          },
          {
            ar: "وقبل أن تطلب اسأل نفسك: هل ستغير نتيجة هذا الفحص خطة علاج المريض فعلًا؟ فإن لم تغير شيئًا فغالبًا لا مبرر له الآن. وانتبه أن تسميته طلب (request) وليست أمرًا (order) مقصودة: القرار النهائي بملاءمة الفحص عند فريق الأشعة، ورفضهم أو تعديلهم للوسيلة رأي تخصصي مبني على المعلومات التي قدمتها أنت.",
            en: "Before requesting, ask yourself whether the result will actually change the management of the patient; if it will not change anything, the test is probably not justified now. Note too that it is deliberately called a request, not an order: the final decision on appropriateness rests with the radiology team, and a refusal or a change of modality is a specialist judgement based on the information you supplied."
          }
        ]
      },
      {
        h: { ar: "نصائح عملية وأخطاء يجب تجنبها", en: "Practical tips and pitfalls" },
        bullets: [
          { ar: "اعرف مريضك جيدًا قبل الطلب: حالته السريرية، درجة الاستعجال (urgency)، وهل أُجري له تصوير سابق يغني عن الجديد أو يُقارن به", en: "Know your patient before requesting: their clinical condition, the urgency, and whether previous imaging already answers the question or is needed for comparison" },
          { ar: "جهّز المعلومات الأساسية في متناولك: رقم المستشفى لاسترجاع الصور السابقة، ونتائج مثل eGFR للتأكد من كفاية وظائف الكلى عند الحاجة لمادة تباين", en: "Have key information ready: the hospital number so previous imaging can be retrieved, and results such as eGFR to confirm renal function is adequate if contrast is needed" },
          { ar: "لخّص بتسلسل واختصار: الخلفية ذات الصلة، سبب الدخول الحالي، العلامات والأعراض الرئيسة، الفحوص المنفذة، والتشخيص الأولي", en: "Summarise in a structured, concise way: relevant background, the current admission, main signs and symptoms, investigations already performed, and the provisional diagnosis" },
          { ar: "ناقش واسأل: إذا شككت في ملاءمة فحص ما أو في الوسيلة الأنسب، استشر فريق الأشعة بدل التخمين", en: "Discuss and ask: if you doubt the appropriateness of a test or which modality fits best, seek advice from the radiology team instead of guessing" },
          { ar: "لا تكتب سبب الطلب «بناءً على طلب الاستشاري» فهذا لا يبرر أي فحص", en: "Never give the reason as simply that a consultant asked for it; that justifies nothing" },
          { ar: "لا تتسوق بين أخصائيي الأشعة باحثًا عن من يوافقك بعد رفض طلبك", en: "Do not shop around different radiologists looking for one who will accept a request another has declined" }
        ]
      }
    ],
    quiz: [
      {
        q: { ar: "لماذا يُطلب ذكر قيمة eGFR في طلب CT بمادة التباين؟", en: "Why is an eGFR value important on a request for contrast-enhanced CT?" },
        opts: [
          { ar: "للتأكد من كفاية وظائف الكلى قبل إعطاء مادة التباين", en: "To confirm renal function is adequate before giving contrast" },
          { ar: "لحساب جرعة الإشعاع بدقة", en: "To calculate the radiation dose precisely" },
          { ar: "لتحديد سرعة دوران الجهاز", en: "To set the rotation speed of the scanner" },
          { ar: "لمعرفة فصيلة دم المريض", en: "To find out the blood group of the patient" }
        ],
        a: 0,
        why: { ar: "مادة التباين اليودية قد تضر الكلى الضعيفة أصلًا، فيراجع فريق الأشعة وظائف الكلى (eGFR) ضمن معلومات السلامة قبل تبرير الفحص واختيار البروتوكول.", en: "Iodinated contrast can harm already impaired kidneys, so the radiology team checks renal function (eGFR) as part of the safety information before justifying the scan and choosing a protocol." }
      },
      {
        q: { ar: "ما العنصر الأهم الذي يساعد أخصائي الأشعة على تبرير الفحص؟", en: "What is the most important element that helps the radiologist justify an examination?" },
        opts: [
          { ar: "اسم الاستشاري المشرف على الحالة", en: "The name of the consultant in charge of the case" },
          { ar: "سؤال سريري واضح مدعوم بتفاصيل سريرية كافية", en: "A clear clinical question backed by sufficient clinical details" },
          { ar: "تكرار الطلب أكثر من مرة", en: "Submitting the request more than once" },
          { ar: "كتابة الطلب بخط اليد", en: "Writing the request by hand" }
        ],
        a: 1,
        why: { ar: "التبرير يقوم على معرفة ما يُبحث عنه ولماذا: علامات وأعراض وتشخيص أولي وتفريقي وسؤال محدد، أما اسم الاستشاري أو تكرار الطلب فلا يضيفان مبررًا.", en: "Justification depends on knowing what is being looked for and why: signs, symptoms, provisional and differential diagnoses and a specific question. A consultant name or a repeated request adds no justification." }
      },
      {
        q: { ar: "إذا لم تكن متأكدًا من الوسيلة الأنسب لحالة مريضك، فما التصرف الصحيح؟", en: "If you are unsure which modality is best for your patient, what should you do?" },
        opts: [
          { ar: "طلب جميع الوسائل المتاحة دفعة واحدة", en: "Request every available modality at once" },
          { ar: "مناقشة الحالة مع فريق الأشعة وطلب مشورتهم", en: "Discuss the case with the radiology team and ask their advice" },
          { ar: "تأجيل التصوير نهائيًا", en: "Abandon imaging altogether" },
          { ar: "سؤال أخصائي أشعة آخر حتى تجد من يوافق رأيك", en: "Ask radiologists one after another until one agrees with you" }
        ],
        a: 1,
        why: { ar: "المناقشة المباشرة مع فريق الأشعة تختار الوسيلة الأنسب والأقل مخاطرة، بينما طلب كل شيء يضيع الموارد ويعرض المريض لفحوص غير مبررة، والتسوق بين الأخصائيين سلوك مرفوض.", en: "A direct discussion with the radiology team selects the most appropriate, lowest-risk modality; requesting everything wastes resources and exposes the patient to unjustified tests, and shopping around between radiologists is unacceptable." }
      }
    ]
  }
];
