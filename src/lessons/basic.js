export const LESSONS = [
{
  slug: "atomic-structure",
  chapter: "basic",
  title: { ar: "التركيب الذري", en: "Atomic Structure" },
  intro: {
    ar: "كل ما في الأشعة التشخيصية يبدأ من الذرة: من طريقة توليد الأشعة السينية إلى تفاعلها مع أنسجة المريض. في هذا الدرس نبني صورة واضحة للذرة وفق نموذج Rutherford–Bohr، ونتعرف على جسيماتها وأغلفتها الإلكترونية، ونختم بسؤال جوهري: ما الذي يجعل نواة ما مستقرة ونواة أخرى مشعة؟",
    en: "Everything in diagnostic radiology starts with the atom: from how X-rays are generated to how they interact with the patient's tissues. In this lesson we build a clear picture of the atom using the Rutherford–Bohr model, meet its particles and electron shells, and finish with a key question: what makes one nucleus stable and another radioactive?"
  },
  sections: [
    {
      h: { ar: "نواة صغيرة وكتلة مركّزة: نموذج Rutherford–Bohr", en: "A tiny nucleus with concentrated mass: the Rutherford–Bohr model" },
      paras: [
        {
          ar: "في نموذج Rutherford–Bohr تحتل النواة مركز الذرة، وهي مكوّنة من البروتونات موجبة الشحنة والنيوترونات المتعادلة، ويُطلق عليهما معًا اسم النيوكليونات (Nucleons). أما الإلكترونات سالبة الشحنة فتدور حول النواة في مدارات محددة تسمى الأغلفة (Shells)، وكتلة الذرة كلها تقريبًا مركّزة في النواة رغم صغر حجمها الشديد.",
          en: "In the Rutherford–Bohr model the nucleus sits at the centre of the atom and is made of positively charged protons and neutral neutrons, together called nucleons. Negatively charged electrons orbit the nucleus in defined shells, and almost all of the atom's mass is concentrated in the tiny nucleus."
        },
        {
          ar: "نصف أي نواة برمزين: العدد الذري Z وهو عدد البروتونات، وهو ما يحدد هوية العنصر الكيميائي، والعدد الكتلي A وهو مجموع البروتونات والنيوترونات معًا. أما عدد النيوترونات فيُحسب ببساطة من الفرق A − Z، وتغيير عدد النيوترونات لا يغيّر العنصر بل يعطي نظيرًا مختلفًا له.",
          en: "Any nucleus is described by two numbers: the atomic number Z, the number of protons, which determines the chemical element, and the mass number A, the total number of protons plus neutrons. The neutron number is simply A − Z, and changing the neutron count does not change the element — it produces a different isotope of it."
        },
        {
          ar: "ولأن كتل الجسيمات الذرية متناهية الصغر، نستخدم وحدة الكتلة الذرية (amu) مقياسًا نسبيًا: تساوي 1 amu بالضبط 1/12 من كتلة ذرة الكربون-12. وبهذا المقياس تبدو كتل الجسيمات الثلاثة بسيطة كما في الجدول، ويلفت النظر أن كتلة الإلكترون ضئيلة جدًا (نحو 0.0005 amu) مقارنة بالنيوكليونات.",
          en: "Because subatomic masses are extremely small, we use the atomic mass unit (amu) as a relative scale: 1 amu is exactly 1/12 of the mass of a carbon-12 atom. On this scale the three particles have simple values, as shown in the table, and the electron's mass (about 0.0005 amu) is negligible compared with the nucleons."
        }
      ],
      table: {
        head: [
          { ar: "الجسيم", en: "Particle" },
          { ar: "الكتلة النسبية (amu)", en: "Relative mass (amu)" },
          { ar: "الشحنة", en: "Charge" },
          { ar: "الرمز", en: "Symbol" }
        ],
        rows: [
          [ { ar: "النيوترون", en: "Neutron" }, { ar: "1", en: "1" }, { ar: "0", en: "0" }, { ar: "n", en: "n" } ],
          [ { ar: "البروتون", en: "Proton" }, { ar: "1", en: "1" }, { ar: "+1", en: "+1" }, { ar: "p", en: "p" } ],
          [ { ar: "الإلكترون", en: "Electron" }, { ar: "0.0005", en: "0.0005" }, { ar: "−1", en: "−1" }, { ar: "e−", en: "e−" } ]
        ]
      },
      nums: [
        { v: "1 amu", ar: "تساوي 1/12 من كتلة ذرة الكربون-12", en: "Equals 1/12 of the mass of a carbon-12 atom" },
        { v: "A − Z", ar: "طريقة حساب عدد النيوترونات في النواة", en: "How to calculate the number of neutrons in the nucleus" }
      ]
    },
    {
      h: { ar: "الأغلفة الإلكترونية وطاقة الربط", en: "Electron shells and binding energy" },
      paras: [
        {
          ar: "تتوزع الإلكترونات على أغلفة مرقّمة من الداخل إلى الخارج (1، 2، 3...) وتُرمز أيضًا بالحروف K وL وM... ولكل غلاف سعة قصوى من الإلكترونات تحكمها العلاقة 2n² حيث n هو رقم الغلاف؛ فالغلاف K يمتلئ بإلكترونين فقط، بينما يتسع L لثمانية وM لثمانية عشر إلكترونًا.",
          en: "Electrons occupy shells numbered from the inside out (1, 2, 3...) and also labelled by letters K, L, M... Each shell has a maximum capacity given by 2n², where n is the shell number: the K shell holds only 2 electrons, while L holds 8 and M holds 18."
        },
        {
          ar: "يُمسك بالإلكترون في غلافه بفعل التجاذب بين شحنته السالبة وشحنة النواة الموجبة، ولانتزاعه نحتاج إلى تزويد طاقة تسمى طاقة الربط (Binding energy). كلما كان الغلاف أقرب إلى النواة وكلما زاد العدد الذري للعنصر، كبرت طاقة الربط؛ فإلكترونات الغلاف K في العناصر الثقيلة كالتنغستن مرتبطة بقوة هائلة، وهذا بالضبط ما يفسر لاحقًا طاقة الإشعاع المميز (Characteristic radiation).",
          en: "An electron is held in its shell by the attraction between its negative charge and the positive nucleus, and removing it requires supplying an amount of energy called the binding energy. The closer the shell is to the nucleus, and the higher the element's atomic number, the greater the binding energy; K-shell electrons in heavy elements such as tungsten are extremely tightly bound, which later explains the energy of characteristic radiation."
        }
      ],
      table: {
        head: [
          { ar: "رقم الغلاف", en: "Shell number" },
          { ar: "الرمز", en: "Letter symbol" },
          { ar: "أقصى عدد من الإلكترونات (2n²)", en: "Maximum electrons (2n²)" }
        ],
        rows: [
          [ { ar: "1", en: "1" }, { ar: "K", en: "K" }, { ar: "2", en: "2" } ],
          [ { ar: "2", en: "2" }, { ar: "L", en: "L" }, { ar: "8", en: "8" } ],
          [ { ar: "3", en: "3" }, { ar: "M", en: "M" }, { ar: "18", en: "18" } ],
          [ { ar: "4", en: "4" }, { ar: "N", en: "N" }, { ar: "32", en: "32" } ]
        ]
      }
    },
    {
      h: { ar: "الإلكترونات المرتبطة والإلكترونات الحرة", en: "Bound electrons and free electrons" },
      paras: [
        {
          ar: "إلكترونات الذرة إما مرتبطة (Bound) تدور في أغلفتها حول النواة، أو حرة (Free) غادرت الذرة وتتحرك مستقلة عنها. عندما يكتسب إلكترون مرتبط طاقة تساوي طاقة ربطه على الأقل فإنه ينطلق حرًا وتتأين الذرة، وهذه هي الخطوة الأولى في معظم تفاعلات الإشعاع مع المادة.",
          en: "An atom's electrons are either bound, orbiting the nucleus in their shells, or free, having left the atom and moving independently. When a bound electron gains energy at least equal to its binding energy it is ejected and the atom is ionised — the first step in most interactions of radiation with matter."
        },
        {
          ar: "الإلكترون الحر جسيم متحرك له طاقة حركية (Kinetic energy) تساوي ½mv². وفي أنبوب الأشعة السينية تُسرَّع الإلكترونات الحرة بفرق جهد مقداره kVp، فتكتسب طاقة حركية بوحدة الإلكترون فولت (eV) تساوي عدديًا قيمة الجهد؛ فإلكترون عُجّل عبر 100 kVp يضرب الهدف بطاقة 100 keV.",
          en: "A free electron is a moving particle with kinetic energy equal to ½mv². In the X-ray tube, free electrons are accelerated through a potential difference of kVp, gaining kinetic energy in electron-volts (eV) numerically equal to that voltage: an electron accelerated through 100 kVp strikes the target with 100 keV of energy."
        }
      ],
      nums: [
        { v: "½mv²", ar: "طاقة الحركة لأي إلكترون حر متحرك", en: "Kinetic energy of any moving free electron" },
        { v: "100 kVp → 100 keV", ar: "طاقة الإلكترون المعجَّل تساوي عدديًا جهد التعجيل بوحدة keV", en: "An accelerated electron's energy in keV equals the accelerating voltage numerically" }
      ]
    },
    {
      h: { ar: "لماذا تستقر بعض الأنوية وتنحلّ أخرى؟", en: "Why are some nuclei stable and others not?" },
      paras: [
        {
          ar: "داخل النواة تتنافر البروتونات موجبة الشحنة بقوة كهربائية، وتقابلها قوة نووية شديدة قصيرة المدى تربط النيوكليونات ببعضها. تعمل النيوترونات هنا كمادة لاصقة مخففة للتنافر، ولذلك يحتاج الاستقرار إلى توازن دقيق بين عدد النيوترونات وعدد البروتونات: في العناصر الخفيفة تكون النسبة N/Z قريبة من 1، وكلما ثقلت النواة احتاجت إلى نيوترونات إضافية فيرتفع التوازن المطلوب تدريجيًا.",
          en: "Inside the nucleus, positively charged protons repel each other electrically, opposed by a strong, short-range nuclear force binding the nucleons together. Neutrons act as a diluting 'glue' for this repulsion, so stability needs a careful balance between neutron and proton numbers: in light elements the N/Z ratio is close to 1, and as nuclei get heavier they need proportionally more neutrons to stay stable."
        },
        {
          ar: "إذا رسمنا كل الأنوية المعروفة على مخطط Segré (عدد النيوترونات مقابل عدد البروتونات) ظهرت الأنوية المستقرة على شريط ضيق يسمى خط الاستقرار (Line of stability). النواة الواقعة بعيدًا عن هذا الخط تكون غير مستقرة، فتتحول تلقائيًا عبر الاضمحلال الإشعاعي (Radioactive decay) نحو تكوين أكثر استقرارًا، وكل الأنوية التي يتجاوز عددها الذري 82 (الرصاص) غير مستقرة بطبيعتها مهما كانت نسبة نيوتروناتها.",
          en: "Plotting all known nuclei on a Segré chart (neutron number against proton number) shows the stable ones lying on a narrow band called the line of stability. A nucleus lying away from this line is unstable and transforms spontaneously by radioactive decay towards a more stable configuration; every nucleus with atomic number above 82 (lead) is inherently unstable, whatever its neutron balance."
        }
      ]
    }
  ],
  quiz: [
    {
      q: { ar: "ما أقصى عدد من الإلكترونات يمكن أن يستوعبه الغلاف M (الغلاف الثالث)؟", en: "What is the maximum number of electrons that the M shell (third shell) can hold?" },
      opts: [
        { ar: "6 إلكترونات", en: "6 electrons" },
        { ar: "8 إلكترونات", en: "8 electrons" },
        { ar: "18 إلكترونًا", en: "18 electrons" },
        { ar: "32 إلكترونًا", en: "32 electrons" }
      ],
      a: 2,
      why: { ar: "سعة الغلاف تحكمها العلاقة 2n²، وللغلاف الثالث n=3 فيكون العدد 2×9=18 إلكترونًا.", en: "Shell capacity follows 2n²; for the third shell n=3, giving 2×9 = 18 electrons." }
    },
    {
      q: { ar: "نواة عددها الكتلي A=59 وعددها الذري Z=27، كم عدد نيوتروناتها؟", en: "A nucleus has mass number A=59 and atomic number Z=27. How many neutrons does it contain?" },
      opts: [
        { ar: "27 نيوترونًا", en: "27 neutrons" },
        { ar: "32 نيوترونًا", en: "32 neutrons" },
        { ar: "59 نيوترونًا", en: "59 neutrons" },
        { ar: "86 نيوترونًا", en: "86 neutrons" }
      ],
      a: 1,
      why: { ar: "عدد النيوترونات = A − Z = 59 − 27 = 32، وهذه النواة هي الكوبالت-59.", en: "Neutron number = A − Z = 59 − 27 = 32; this nucleus is cobalt-59." }
    },
    {
      q: { ar: "ما المقصود بطاقة ربط الإلكترون (Binding energy)؟", en: "What is meant by the binding energy of an electron?" },
      opts: [
        { ar: "طاقة حركته أثناء دورانه في الغلاف", en: "Its kinetic energy while orbiting in the shell" },
        { ar: "الطاقة المنبعثة عند سقوطه إلى غلاف أدنى", en: "The energy emitted when it falls to a lower shell" },
        { ar: "الطاقة اللازمة لانتزاعه من غلافه والتغلب على جذب النواة", en: "The energy needed to remove it from its shell, overcoming the nuclear attraction" },
        { ar: "مجموع طاقات ربط جميع إلكترونات الذرة", en: "The total binding energy of all the atom's electrons" }
      ],
      a: 2,
      why: { ar: "طاقة الربط هي الطاقة الواجب تزويدها للإلكترون لتحريره من غلافه، وتزداد كلما اقترب الغلاف من النواة وكبر العدد الذري.", en: "Binding energy is the energy that must be supplied to free the electron from its shell; it increases for shells closer to the nucleus and for higher atomic numbers." }
    }
  ]
},
{
  slug: "electromagnetic-radiation",
  chapter: "basic",
  title: { ar: "الإشعاع الكهرومغناطيسي", en: "Electromagnetic Radiation" },
  intro: {
    ar: "الأشعة السينية وأشعة غاما وموجات الراديو والضوء المرئي كلها أفراد من عائلة واحدة: الإشعاع الكهرومغناطيسي (Electromagnetic radiation). فهم طبيعة هذه الموجات وطاقتها وقانون انتشارها يمنحك الأساس الذي تُبنى عليه كل دروس الفيزياء التالية في هذا المنهج.",
    en: "X-rays, gamma rays, radio waves and visible light are all members of one family: electromagnetic radiation. Understanding the nature of these waves, their energy and how they spread out gives you the foundation on which every later physics lesson in this course is built."
  },
  sections: [
    {
      h: { ar: "موجة وجسيم في آن واحد", en: "A wave and a particle at the same time" },
      paras: [
        {
          ar: "يسلك الإشعاع الكهرومغناطيسي سلوكًا مزدوجًا: فهو ينتشر كموجة من مجالين كهربائي ومغناطيسي متذبذبين متعامدين، وفي الوقت نفسه يتفاعل مع المادة كحزم منفصلة من الطاقة تسمى الفوتونات (Photons). الفوتون عديم الكتلة وعديم الشحنة، ويسير في الفراغ بسرعة الضوء الثابتة c وتساوي تقريبًا 3×10⁸ m/s.",
          en: "Electromagnetic radiation behaves in two ways at once: it travels as a wave of oscillating, mutually perpendicular electric and magnetic fields, yet it interacts with matter as discrete packets of energy called photons. A photon has no mass and no charge, and travels in a vacuum at the constant speed of light, c ≈ 3×10⁸ m/s."
        },
        {
          ar: "هذا الوجه الموجي يصف لنا الانتشار والانكسار والحيود، بينما يفسر الوجه الجسيمي كيف يودع الإشعاع طاقته في المادة عند التصادم. وكلما كان تردد الموجة أعلى، كان كل فوتون فيها أغنى بالطاقة وأقدر على اختراق المادة وتأيينها.",
          en: "The wave picture describes propagation, refraction and diffraction, while the particle picture explains how radiation deposits its energy in matter on impact. The higher the wave's frequency, the more energy each photon carries and the greater its ability to penetrate and ionise matter."
        }
      ],
      nums: [
        { v: "3×10⁸ m/s", ar: "سرعة الضوء c — سرعة كل إشعاع كهرومغناطيسي في الفراغ", en: "Speed of light c — the speed of all electromagnetic radiation in a vacuum" }
      ]
    },
    {
      h: { ar: "لغة الموجة: خمسة تعريفات ومعادلتان", en: "Wave vocabulary: five definitions and two equations" },
      paras: [
        {
          ar: "لوصف أي موجة كهرومغناطيسية نحتاج إلى كميات قليلة مترابطة: السعة والطول الموجي والزمن الدوري والتردد والسرعة. الجدول التالي يجمعها بتعريفاتها ووحداتها، ولاحظ أن التردد والزمن الدوري وجهان لعملة واحدة إذ يرتبطان بالعلاقة f = 1/T.",
          en: "Describing any electromagnetic wave needs a few linked quantities: amplitude, wavelength, period, frequency and velocity. The table gathers them with their definitions and units; note that frequency and period are two views of the same thing, linked by f = 1/T."
        },
        {
          ar: "أما سرعة الموجة فتُحسب من حاصل ضرب ترددها في طولها الموجي: c = fλ. ولأن c ثابتة في الفراغ، فإن التردد والطول الموجي مقيدان بعلاقة عكسية صارمة: كلما قصر الطول الموجي ارتفع التردد، والعكس صحيح.",
          en: "Wave velocity is calculated as the product of frequency and wavelength: c = fλ. Because c is fixed in a vacuum, frequency and wavelength are locked in a strict inverse relationship — the shorter the wavelength, the higher the frequency, and vice versa."
        }
      ],
      table: {
        head: [
          { ar: "الكمية", en: "Quantity" },
          { ar: "المقصود بها", en: "Meaning" },
          { ar: "الوحدة", en: "Unit" }
        ],
        rows: [
          [ { ar: "السعة Amplitude (A)", en: "Amplitude (A)" }, { ar: "أقصى قيمة تصل إليها شدة المجال في الموجة", en: "The peak field strength of the wave" }, { ar: "—", en: "—" } ],
          [ { ar: "الطول الموجي Wavelength (λ)", en: "Wavelength (λ)" }, { ar: "المسافة بين قمتين متتاليتين", en: "Distance between two successive peaks" }, { ar: "m (متر)", en: "m (metres)" } ],
          [ { ar: "الزمن الدوري Period (T)", en: "Period (T)" }, { ar: "الزمن الفاصل بين قمتين متتاليتين", en: "Time between two successive peaks" }, { ar: "s (ثانية)", en: "s (seconds)" } ],
          [ { ar: "التردد Frequency (f)", en: "Frequency (f)" }, { ar: "عدد القمم المارة بنقطة معينة في الثانية الواحدة، f = 1/T", en: "Number of peaks passing a point each second, f = 1/T" }, { ar: "Hz (هيرتز)", en: "Hz (hertz)" } ],
          [ { ar: "السرعة Velocity (c)", en: "Velocity (c)" }, { ar: "المسافة التي تقطعها القمة في الثانية، c = fλ", en: "Distance travelled by a peak in one second, c = fλ" }, { ar: "m/s", en: "m/s" } ]
        ]
      },
      nums: [
        { v: "f = 1/T", ar: "التردد يساوي مقلوب الزمن الدوري", en: "Frequency is the reciprocal of the period" },
        { v: "c = fλ", ar: "السرعة تساوي التردد مضروبًا في الطول الموجي", en: "Velocity equals frequency multiplied by wavelength" }
      ]
    },
    {
      h: { ar: "طاقة الفوتون: E = hf", en: "Photon energy: E = hf" },
      paras: [
        {
          ar: "طاقة الفوتون الواحد لا تعتمد على شدة الحزمة بل على ترددها فقط، وفق علاقة بلانك E = hf، حيث h ثابت بلانك (Planck constant) وقيمته 6.626×10⁻³⁴ J·s. وبالجمع مع c = fλ نحصل على صورة مكافئة مفيدة: E = hc/λ، فتتناسب طاقة الفوتون عكسيًا مع طوله الموجي.",
          en: "The energy of a single photon depends not on the beam's intensity but only on its frequency, through Planck's relation E = hf, where h is the Planck constant, 6.626×10⁻³⁴ J·s. Combining this with c = fλ gives the useful equivalent form E = hc/λ, so photon energy is inversely proportional to wavelength."
        },
        {
          ar: "في الأشعة نعبّر عن طاقة الفوتون عادة بوحدة الإلكترون فولت (eV) بدل الجول: فوتونات الضوء المرئي تحمل بضعة إلكترون فولت فقط، بينما تقاس فوتونات الأشعة السينية بعشرات الآلاف (keV). وفوق عتبة تقارب 10 eV تصبح الفوتونات قادرة على تأيين الذرات، وهنا ينقسم الطيف إلى إشعاع مؤيّن وغير مؤيّن.",
          en: "In radiology we usually express photon energy in electron-volts (eV) rather than joules: visible-light photons carry only a few eV, whereas X-ray photons are measured in tens of thousands (keV). Above a threshold of roughly 10 eV, photons become capable of ionising atoms, which is where the spectrum divides into ionising and non-ionising radiation."
        }
      ],
      nums: [
        { v: "E = hf", ar: "طاقة الفوتون تتناسب طرديًا مع تردده", en: "Photon energy is directly proportional to its frequency" },
        { v: "h = 6.626×10⁻³⁴ J·s", ar: "قيمة ثابت بلانك", en: "Value of the Planck constant" }
      ]
    },
    {
      h: { ar: "قانون التربيع العكسي", en: "The inverse square law" },
      paras: [
        {
          ar: "شدة الإشعاع (Intensity) هي الطاقة العابرة لوحدة المساحة في الثانية الواحدة. عندما تنتشر الحزمة من مصدر نقطي تتوزع الفوتونات نفسها على مساحة كرة يتضاعف نصف قطرها مع المسافة، ولأن مساحة الكرة تتناسب مع مربع المسافة، تتناسب الشدة عكسيًا مع مربع المسافة: I ∝ 1/d². عمليًا: مضاعفة بُعدك عن المصدر تخفض الشدة إلى الربع، وثلاثة أضعاف المسافة تخفضها إلى التُسع.",
          en: "Intensity is the energy crossing unit area per second. As a beam spreads out from a point source, the same photons are distributed over the surface of an expanding sphere, and because that surface area grows with the square of the distance, intensity falls with the square of the distance: I ∝ 1/d². In practice, doubling your distance from the source cuts the intensity to one quarter, and trebling it cuts it to one ninth."
        },
        {
          ar: "ينطبق هذا القانون بدقة بشرطين: أن يكون المصدر نقطيًا فعلًا، وألا يتعرض الإشعاع في طريقه لامتصاص أو تشتت يُضعفه أكثر. وهو الأساس الفيزيائي لقاعدة الحماية الشهيرة: المسافة أرخص وسائل الوقاية من الإشعاع وأكثرها فعالية.",
          en: "The law applies strictly under two conditions: the source must truly be a point source, and the beam must not lose energy to absorption or scatter along the way. It is the physical basis of the famous protection rule — distance is the cheapest and most effective radiation shield."
        }
      ],
      nums: [
        { v: "I ∝ 1/d²", ar: "الشدة تتناسب عكسيًا مع مربع المسافة عن المصدر", en: "Intensity is inversely proportional to the square of the distance from the source" },
        { v: "2× distance → ¼ intensity", ar: "مضاعفة المسافة تخفض الشدة إلى الربع", en: "Doubling the distance reduces intensity to one quarter" }
      ]
    },
    {
      h: { ar: "الطيف الكهرومغناطيسي من الراديو إلى غاما", en: "The electromagnetic spectrum, from radio to gamma" },
      paras: [
        {
          ar: "يمتد الطيف الكهرومغناطيسي عبر مدى هائل من الأطوال الموجية، من موجات الراديو الممتدة كيلومترات إلى أشعة غاما ذات الأطوال دون البيكومترية. ومع انتقالنا عبر الطيف نحو أطوال أقصر يرتفع التردد وترتفع معه طاقة الفوتون، فتتحول التأثيرات من مجرد تسخين خفيف إلى اختراق وتأيين كاملين.",
          en: "The electromagnetic spectrum spans an enormous range of wavelengths, from radio waves kilometres long to gamma rays shorter than a picometre. Moving across the spectrum towards shorter wavelengths, frequency rises and photon energy rises with it, so effects progress from gentle heating to full penetration and ionisation."
        }
      ],
      table: {
        head: [
          { ar: "النطاق", en: "Band" },
          { ar: "الطول الموجي التقريبي", en: "Approx. wavelength" },
          { ar: "طاقة الفوتون التقريبية", en: "Approx. photon energy" },
          { ar: "مصدر مألوف", en: "Familiar source" }
        ],
        rows: [
          [ { ar: "موجات الراديو", en: "Radio waves" }, { ar: "من ملمترات إلى كيلومترات", en: "Millimetres to kilometres" }, { ar: "بحدود neV إلى µeV", en: "Around neV to µeV" }, { ar: "إذاعات AM وFM", en: "AM and FM radio" } ],
          [ { ar: "الموجات الدقيقة Microwaves", en: "Microwaves" }, { ar: "mm إلى m", en: "mm to m" }, { ar: "µeV إلى meV", en: "µeV to meV" }, { ar: "فرن المايكروويف", en: "Microwave oven" } ],
          [ { ar: "الأشعة تحت الحمراء", en: "Infrared" }, { ar: "µm إلى mm", en: "µm to mm" }, { ar: "meV إلى eV", en: "meV to eV" }, { ar: "الحرارة المشعة", en: "Radiant heat" } ],
          [ { ar: "الضوء المرئي", en: "Visible light" }, { ar: "400–700 nm", en: "400–700 nm" }, { ar: "1.8–3.3 eV", en: "1.8–3.3 eV" }, { ar: "الشمس", en: "The Sun" } ],
          [ { ar: "الأشعة فوق البنفسجية", en: "Ultraviolet" }, { ar: "10–400 nm", en: "10–400 nm" }, { ar: "3–12 eV", en: "3–12 eV" }, { ar: "لحام القوس الكهربائي", en: "Arc welding" } ],
          [ { ar: "الأشعة السينية", en: "X-rays" }, { ar: "تقريبًا 0.001–100 nm", en: "Roughly 0.001–100 nm" }, { ar: "keV إلى MeV", en: "keV to MeV" }, { ar: "أنبوب الأشعة", en: "X-ray tube" } ],
          [ { ar: "أشعة غاما", en: "Gamma rays" }, { ar: "أقصرها دون 0.001 nm", en: "Shortest below 0.001 nm" }, { ar: "keV إلى ما فوق MeV", en: "keV to above MeV" }, { ar: "المصادر المشعة", en: "Radioactive sources" } ]
        ]
      }
    }
  ],
  quiz: [
    {
      q: { ar: "إذا تضاعف تردد فوتون ما، فماذا يحدث لطاقته؟", en: "If the frequency of a photon doubles, what happens to its energy?" },
      opts: [
        { ar: "تنخفض إلى النصف", en: "It halves" },
        { ar: "تبقى ثابتة لأن سرعة الضوء ثابتة", en: "It stays the same because the speed of light is constant" },
        { ar: "تتضاعف", en: "It doubles" },
        { ar: "تصبح أربعة أضعاف", en: "It becomes four times greater" }
      ],
      a: 2,
      why: { ar: "طاقة الفوتون E = hf تتناسب طرديًا مع التردد، فمضاعفة التردد تضاعف الطاقة.", en: "Photon energy E = hf is directly proportional to frequency, so doubling the frequency doubles the energy." }
    },
    {
      q: { ar: "مصدر نقطي للإشعاع: انتقلت من مسافة 1 m عنه إلى مسافة 3 m. كم تصبح الشدة مقارنة بالأصل؟", en: "For a point radiation source, you move from 1 m away to 3 m away. What fraction of the original intensity remains?" },
      opts: [
        { ar: "الثلث", en: "One third" },
        { ar: "التُسع", en: "One ninth" },
        { ar: "النصف", en: "One half" },
        { ar: "تبقى كما هي", en: "It is unchanged" }
      ],
      a: 1,
      why: { ar: "وفق قانون التربيع العكسي I ∝ 1/d²، وثلاثة أضعاف المسافة تعطي 1/9 من الشدة الأصلية.", en: "By the inverse square law I ∝ 1/d², trebling the distance gives 1/9 of the original intensity." }
    },
    {
      q: { ar: "أي مما يلي يحمل فوتونه أعلى طاقة؟", en: "Which of the following has the highest photon energy?" },
      opts: [
        { ar: "موجات الراديو", en: "Radio waves" },
        { ar: "الأشعة تحت الحمراء", en: "Infrared radiation" },
        { ar: "الضوء المرئي", en: "Visible light" },
        { ar: "الأشعة السينية", en: "X-rays" }
      ],
      a: 3,
      why: { ar: "الأشعة السينية أطوالها الموجية أقصر بكثير وترددها أعلى بكثير من بقية الخيارات، وطاقة الفوتون تتبع التردد وفق E = hf فتقاس بالـ keV.", en: "X-rays have far shorter wavelengths and far higher frequencies than the other options, and since photon energy follows frequency (E = hf), theirs is measured in keV." }
    }
  ]
},
{
  slug: "radioactive-decay",
  chapter: "basic",
  title: { ar: "الاضمحلال الإشعاعي", en: "Radioactive Decay" },
  intro: {
    ar: "النواة غير المستقرة لا تبقى على حالها: إنها تتحول تلقائيًا إلى نواة أكثر استقرارًا وتطلق أثناء ذلك طاقة على هيئة إشعاع. هذا هو الاضمحلال الإشعاعي (Radioactive decay)، وهو الأساس الذي تقوم عليه الطب النووي كله، من التكنيشيوم في أقسام الأشعة إلى اليود المشع في علاج الغدة الدرقية.",
    en: "An unstable nucleus does not stay as it is: it transforms spontaneously into a more stable nucleus, releasing energy as radiation in the process. This is radioactive decay, the foundation of all nuclear medicine — from technetium in radiology departments to radioactive iodine in thyroid treatment."
  },
  sections: [
    {
      h: { ar: "ما الاضمحلال؟ وما النشاط الإشعاعي؟", en: "What is decay, and what is activity?" },
      paras: [
        {
          ar: "يحدث الاضمحلال الإشعاعي عندما تتخلص نواة غير مستقرة من فائض تكوينها بإصدار جسيم مشحون، أو بامتصاص إلكترون مداري داخل النواة، لتصل إلى نواة مستقرة. العملية عشوائية على مستوى النواة المفردة — لا يمكن التنبؤ بموعد اضمحلال نواة بعينها — لكنها منتظمة إحصائيًا على مستوى العينات الكبيرة.",
          en: "Radioactive decay occurs when an unstable nucleus gets rid of its imbalance by emitting a charged particle, or by drawing an orbital electron into the nucleus, arriving at a stable configuration. The process is random for any single nucleus — no one can predict when a given nucleus will decay — yet it is statistically regular for large samples."
        },
        {
          ar: "مقدار الاضمحلال في أي عينة يسمى النشاط الإشعاعي (Activity)، ويعني عدد التحولات النووية الحاصلة في الثانية الواحدة. وحدته في النظام الدولي هي البكريل (Becquerel, Bq) حيث يساوي 1 Bq تحولًا واحدًا في الثانية، وما زالت الوحدة القديمة الكيوري (Ci) مستخدمة في بعض السياقات، ويساوي 1 Ci مقدار 3.7×10¹⁰ Bq.",
          en: "The amount of decay in a sample is called its activity, meaning the number of nuclear transformations occurring per second. Its SI unit is the becquerel (Bq), where 1 Bq is one transformation per second; the older curie (Ci) is still used in some settings, with 1 Ci equal to 3.7×10¹⁰ Bq."
        }
      ],
      nums: [
        { v: "1 Bq", ar: "يساوي تحولًا نوويًا واحدًا في الثانية", en: "Equals one nuclear transformation per second" },
        { v: "1 Ci = 3.7×10¹⁰ Bq", ar: "العلاقة بين وحدة الكيوري القديمة والبكريل", en: "Relationship between the old curie unit and the becquerel" }
      ]
    },
    {
      h: { ar: "مصطلحات لا بد منها", en: "Essential nomenclature" },
      paras: [
        {
          ar: "لغة هذا المجال دقيقة، والخلط بين مصطلحاتها خطأ شائع في الامتحانات. النويدة (Nuclide) هي أي نوع نووي محدد بعدديه الذري والكتلي وحالته الطاقية، فالتكنيشيوم-99m والتكنيشيوم-99 نويتان مختلفتان رغم تطابق تركيبهما. تصفح القائمة التالية واربط كل مصطلح بمفتاحه اللفظي ليسهل تذكره.",
          en: "The language of this field is precise, and confusing its terms is a classic exam error. A nuclide is any nuclear species defined by its proton number, neutron number and energy state — so technetium-99m and technetium-99 are different nuclides despite identical composition. Work through the list and link each term to its verbal key to remember it."
        }
      ],
      bullets: [
        { ar: "النويدة المشعة Radionuclide: نويدة غير مستقرة تضمحل إشعاعيًا.", en: "Radionuclide: an unstable, radioactive nuclide." },
        { ar: "النويدة شبه المستقرة Metastable: نويدة تبقى زمنًا طويلًا في حالة طاقية مثارة قبل أن تهبط إلى حالتها الأرضية، وتُميَّز بالحرف m مثل ⁹⁹ᵐTc.", en: "Metastable nuclide: a nuclide that lingers in an excited energy state before dropping to its ground state, marked with the letter m, as in ⁹⁹ᵐTc." },
        { ar: "الأيزومر Isomer: الصورة شبه المستقرة من نويدة ما؛ فـ ⁹⁹ᵐTc أيزومر لـ ⁹⁹Tc.", en: "Isomer: the metastable form of a nuclide; ⁹⁹ᵐTc is an isomer of ⁹⁹Tc." },
        { ar: "النظائر Isotopes: نويدات تتساوى في عدد البروتونات (نفس العنصر) وتختلف في عدد النيوترونات — المفتاح حرف p من Protons.", en: "Isotopes: nuclides with the same number of protons (same element) but different neutron numbers — key on the 'p' in protons." },
        { ar: "الأيزوتونات Isotones: نويدات تتساوى في عدد النيوترونات وتختلف في البروتونات — المفتاح حرف n من Neutrons.", en: "Isotones: nuclides with the same number of neutrons but different proton numbers — key on the 'n' in neutrons." },
        { ar: "الأيزوبارات Isobars: نويدات تتساوى في العدد الكتلي A وتختلف في العدد الذري.", en: "Isobars: nuclides with the same mass number A but different atomic numbers." }
      ]
    },
    {
      h: { ar: "مخطط Segré يقرر نوع الاضمحلال", en: "The Segré chart decides the decay route" },
      paras: [
        {
          ar: "عدنا إلى مخطط Segré من درس التركيب الذري: الأنوية المستقرة تقع على خط الاستقرار، وما عداها يقع في مناطق ثلاث يتحدد بها أسلوب الاضمحلال. فالنواة الغنية بالنيوترونات تقع دون الخط، والغنية بالبروتونات تقع فوقه، أما الأنوية الثقيلة جدًا فتقع في الطرف البعيد حيث لا ينفع تعديل النسبة وحدها.",
          en: "Return to the Segré chart from the Atomic Structure lesson: stable nuclei lie on the line of stability, and all others fall into three regions that dictate the decay style. Neutron-rich nuclei sit below the line, proton-rich nuclei above it, and the very heaviest nuclei sit at the far end, where merely adjusting the ratio is no longer enough."
        },
        {
          ar: "قاعدة الاتجاه بسيطة: كل اضمحلال خطوة تقرّب النواة من خط الاستقرار. النواة ذات النيوترونات الزائدة تحتاج تحويل نيوترون إلى بروتون، وذات البروتونات الزائدة تحتاج العكس، والثقيلة جدًا تتخلص من نيوكليونات كاملة دفعة واحدة. الجدول في القسم التالي يترجم هذه القاعدة إلى خمسة أنماط عملية.",
          en: "The directional rule is simple: every decay is a step that moves the nucleus closer to the line of stability. A neutron-rich nucleus needs to convert a neutron into a proton, a proton-rich one needs the reverse, and a very heavy nucleus sheds whole nucleons at once. The table in the next section turns this rule into five practical decay modes."
        }
      ]
    },
    {
      h: { ar: "أنماط الاضمحلال الخمسة", en: "The five decay modes" },
      paras: [
        {
          ar: "لاحظ أثناء قراءة الجدول أثر كل نمط في العدد الكتلي A والعدد الذري Z للنواة الوليدة (Daughter nuclide)، فهذان الرقمان هما كل ما تحتاجه لحل أي سؤال حسابي في هذا الموضوع. وتأمل خصوصًا أن اضمحلال بيتا بنوعيه والامتصاص الإلكتروني لا يغير أي منها العدد الكتلي، بينما ينقصه اضمحلال ألفا بأربع وحدات كاملة.",
          en: "As you read the table, note each mode's effect on the mass number A and atomic number Z of the daughter nuclide — those two numbers are all you need to solve any calculation question on this topic. Notice especially that both beta decays and electron capture leave the mass number unchanged, while alpha decay reduces it by a full four units."
        },
        {
          ar: "في اضمحلال β− يتحول نيوترون إلى بروتون وإلكترون منطلق (مع ضديد نيوترينو)، فتصعد النواة درجة في الجدول الدوري. وفي β+ تنعكس العملية فيتحول بروتون إلى نيوترون وبوزيترون، ولا يحدث هذا إلا إذا توفر فرق طاقة كافٍ، وإلا لجأت النواة الغنية بالبروتونات إلى الامتصاص الإلكتروني (Electron capture) فتلتهم إلكترونًا مداريًا يندمج مع بروتون مكوّنًا نيوترونًا، ويشيع هذا النمط مع إصدار أشعة سينية مميزة من الغلاف K الشاغر. أما الانتقال الأيزومري (Isomeric transition) فلا يغيّر تركيب النواة أصلًا، بل تهبط فيه النواة المثارة كـ ⁹⁹ᵐTc إلى حالتها الأرضية مطلقة طاقتها الزائدة فوتونَ غاما نقيًا — وهو سرّ ملاءمة التكنيشيوم للتصوير.",
          en: "In β− decay a neutron converts into a proton and an emitted electron (plus an antineutrino), moving the nucleus one place up the periodic table. In β+ decay the process reverses — a proton becomes a neutron and a positron — but this requires a sufficient energy difference; otherwise a proton-rich nucleus resorts to electron capture, swallowing an orbital electron that combines with a proton to form a neutron, typically followed by characteristic X-rays from the vacated K shell. Isomeric transition changes the nucleus's composition not at all: an excited nucleus such as ⁹⁹ᵐTc simply drops to its ground state, releasing its excess energy as a pure gamma photon — the secret behind technetium's suitability for imaging."
        }
      ],
      table: {
        head: [
          { ar: "نمط الاضمحلال", en: "Decay mode" },
          { ar: "يحدث عندما", en: "Occurs when" },
          { ar: "ما ينطلق / ما يحدث", en: "Emitted / what happens" },
          { ar: "أثره في A", en: "Effect on A" },
          { ar: "أثره في Z", en: "Effect on Z" }
        ],
        rows: [
          [ { ar: "ألفا Alpha", en: "Alpha" }, { ar: "تكون النواة ثقيلة جدًا", en: "The nucleus is very heavy" }, { ar: "نواة هيليوم (2p + 2n)", en: "A helium nucleus (2p + 2n)" }, { ar: "ينقص 4", en: "−4" }, { ar: "ينقص 2", en: "−2" } ],
          [ { ar: "بيتا السالب β−", en: "Beta-minus β−" }, { ar: "تكثر النيوترونات", en: "Too many neutrons" }, { ar: "إلكترون من نيوترون تحول إلى بروتون", en: "An electron, as a neutron becomes a proton" }, { ar: "يبقى كما هو", en: "Unchanged" }, { ar: "يزيد 1", en: "+1" } ],
          [ { ar: "بيتا الموجب β+", en: "Beta-plus β+" }, { ar: "تكثر البروتونات (نيوترونات قليلة)", en: "Too many protons (too few neutrons)" }, { ar: "بوزيترون من بروتون تحول إلى نيوترون", en: "A positron, as a proton becomes a neutron" }, { ar: "يبقى كما هو", en: "Unchanged" }, { ar: "ينقص 1", en: "−1" } ],
          [ { ar: "الامتصاص الإلكتروني Electron capture", en: "Electron capture" }, { ar: "تكثر البروتونات دون طاقة كافية لـ β+", en: "Too many protons but not enough energy for β+" }, { ar: "إلكترون مداري يندمج مع بروتون مكوّنًا نيوترونًا", en: "An orbital electron combines with a proton to form a neutron" }, { ar: "يبقى كما هو", en: "Unchanged" }, { ar: "ينقص 1", en: "−1" } ],
          [ { ar: "الانتقال الأيزومري Isomeric transition", en: "Isomeric transition" }, { ar: "تكون النواة في حالة مثارة شبه مستقرة", en: "The nucleus is in a metastable excited state" }, { ar: "فوتون غاما γ فقط", en: "A gamma photon γ only" }, { ar: "يبقى كما هو", en: "Unchanged" }, { ar: "يبقى كما هو", en: "Unchanged" } ]
        ]
      }
    },
    {
      h: { ar: "عمر النصف وقانون الاضمحلال", en: "Half-life and the decay law" },
      paras: [
        {
          ar: "بما أن الاضمحلال عملية احتمالية ثابتة المعدل، ينخفض نشاط أي عينة أسيًا مع الزمن وفق العلاقة A = A₀e^(−λt)، حيث λ ثابت الاضمحلال (Decay constant) الخاص بالنويدة. والقياس العملي الأشهر لهذا الانخفاض هو عمر النصف (Half-life, T½): الزمن اللازم لكي يهبط النشاط — وعدد الأنوية المشعة معه — إلى نصف قيمته الابتدائية، ويرتبط بالعلاقة T½ = 0.693/λ.",
          en: "Because decay is a probabilistic process running at a fixed fractional rate, the activity of any sample falls exponentially with time according to A = A₀e^(−λt), where λ is the nuclide's decay constant. The most practical measure of this fall is the half-life (T½): the time needed for the activity — and with it the number of radioactive nuclei — to drop to half its initial value, linked by T½ = 0.693/λ."
        },
        {
          ar: "الحساب بعدّ الأنصاف أسرع من المعادلة في أغلب الأسئلة: بعد عمر نصف واحد يتبقى ½ النشاط، وبعد عمرين يتبقى ¼، وبعد ثلاثة يتبقى ⅛، وهكذا تتضاعف المقامات مع كل عمر. وللتكنيشيوم-99m عمر نصف يقارب 6 ساعات، وهو توقيت مثالي سريريًا: طويل بما يكفي لإجراء الفحص، وقصير بما يكفي ليتخلص جسم المريض من النشاط سريعًا بعده.",
          en: "Counting half-lives is faster than the equation for most questions: after one half-life ½ of the activity remains, after two it is ¼, after three ⅛, the denominator doubling each time. Technetium-99m has a half-life of about 6 hours — a clinically ideal timing: long enough to perform the scan, yet short enough for the patient's activity to clear quickly afterwards."
        }
      ],
      nums: [
        { v: "T½ = 0.693/λ", ar: "العلاقة بين عمر النصف وثابت الاضمحلال", en: "Relationship between half-life and the decay constant" },
        { v: "~6 hours", ar: "عمر النصف الفيزيائي للتكنيشيوم-99m", en: "Physical half-life of technetium-99m" }
      ]
    }
  ],
  quiz: [
    {
      q: { ar: "خضعت نويدة لاضمحلال بيتا السالب β−. كيف يتغير عدداها الكتلي والذري؟", en: "A nuclide undergoes beta-minus (β−) decay. How do its mass number and atomic number change?" },
      opts: [
        { ar: "A ينقص 4 وZ ينقص 2", en: "A decreases by 4 and Z decreases by 2" },
        { ar: "A يبقى ثابتًا وZ يزيد بمقدار 1", en: "A stays the same and Z increases by 1" },
        { ar: "A يبقى ثابتًا وZ ينقص بمقدار 1", en: "A stays the same and Z decreases by 1" },
        { ar: "كلاهما يبقى ثابتًا", en: "Both stay the same" }
      ],
      a: 1,
      why: { ar: "في β− يتحول نيوترون إلى بروتون، فلا يتغير مجموع النيوكليونات (A) بينما يزيد عدد البروتونات (Z) بمقدار واحد.", en: "In β− decay a neutron converts into a proton, so the total nucleon count (A) is unchanged while the proton number (Z) rises by one." }
    },
    {
      q: { ar: "بأي نمط اضمحلال يتحول التكنيشيوم ⁹⁹ᵐTc إلى ⁹⁹Tc؟", en: "By which decay mode does technetium-99m (⁹⁹ᵐTc) transform into ⁹⁹Tc?" },
      opts: [
        { ar: "اضمحلال ألفا", en: "Alpha decay" },
        { ar: "الامتصاص الإلكتروني", en: "Electron capture" },
        { ar: "الانتقال الأيزومري مع انبعاث غاما", en: "Isomeric transition with gamma emission" },
        { ar: "اضمحلال بيتا الموجب", en: "Beta-plus decay" }
      ],
      a: 2,
      why: { ar: "⁹⁹ᵐTc نويدة شبه مستقرة؛ تهبط إلى حالتها الأرضية ⁹⁹Tc بالانتقال الأيزومري مطلقة فوتون غاما دون أي تغيير في A أو Z.", en: "⁹⁹ᵐTc is a metastable nuclide; it drops to its ground state ⁹⁹Tc by isomeric transition, emitting a gamma photon with no change in A or Z." }
    },
    {
      q: { ar: "عينة نشاطها الابتدائي 800 MBq وعمر نصفها 6 ساعات. كم نشاطها بعد 18 ساعة؟", en: "A sample starts with an activity of 800 MBq and has a half-life of 6 hours. What is its activity after 18 hours?" },
      opts: [
        { ar: "400 MBq", en: "400 MBq" },
        { ar: "200 MBq", en: "200 MBq" },
        { ar: "100 MBq", en: "100 MBq" },
        { ar: "50 MBq", en: "50 MBq" }
      ],
      a: 2,
      why: { ar: "18 ساعة تعادل ثلاثة أنصاف أعمار: 800 ← 400 ← 200 ← 100 MBq، أي ثُمن القيمة الابتدائية.", en: "18 hours is three half-lives: 800 → 400 → 200 → 100 MBq, one eighth of the starting value." }
    }
  ]
}
];
