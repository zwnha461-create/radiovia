export const QUIZZES = [
  {
    slug: 'modalities-quiz',
    chapter: 'modalities',
    title: { ar: 'اختبار وسائل التصوير', en: 'Imaging Modalities Quiz' },
    intro: {
      ar: 'اختبر فهمك لأساسيات CT وMRI وUltrasound: الكثافة، ووسائل التباين، والجرعة الإشعاعية.',
      en: 'Test your grasp of CT, MRI and ultrasound basics: density, contrast media and radiation dose.'
    },
    questions: [
      {
        q: { ar: 'بأي وحدة يُقاس توهين الأنسجة في فحص CT؟', en: 'In which unit is tissue attenuation measured on a CT scan?' },
        opts: [
          { ar: 'وحدة Hounsfield (HU)', en: 'Hounsfield unit (HU)' },
          { ar: 'الديسبل (dB)', en: 'Decibel (dB)' },
          { ar: 'تسلا (T)', en: 'Tesla (T)' },
          { ar: 'الميغاهرتز (MHz)', en: 'Megahertz (MHz)' }
        ],
        a: 0,
        why: {
          ar: 'أرقام CT تُعبَّر بوحدة Hounsfield، حيث الماء = 0 HU والهواء = ‎-1000 HU والعظم كثيف موجب عالٍ.',
          en: 'CT numbers are expressed in Hounsfield units, where water is 0 HU, air is -1000 HU and dense bone is strongly positive.'
        }
      },
      {
        q: { ar: 'أي مادة تباين تُستخدم عادةً في فحوص MRI؟', en: 'Which contrast agent is typically used in MRI examinations?' },
        opts: [
          { ar: 'كبريتات الباريوم Barium sulfate', en: 'Barium sulfate' },
          { ar: 'تباين مُيوَّد Iodinated contrast', en: 'Iodinated contrast' },
          { ar: 'تباين أساسه Gadolinium', en: 'Gadolinium-based contrast' },
          { ar: 'هواء بضغط سلبي', en: 'Negative-pressure air' }
        ],
        a: 2,
        why: {
          ar: 'مادة التباين الوريدية في MRI أساسها معدن Gadolinium، بينما يُستخدم التباين المُيوَّد في X-ray وCT، والباريوم لدراسات الجهاز الهضمي.',
          en: 'The IV contrast used in MRI is gadolinium-based, whereas iodinated contrast is used for X-ray and CT, and barium for gastrointestinal studies.'
        }
      },
      {
        q: { ar: 'أي وسيلة تصوير تعتمد على موجات صوتية ولا تستخدم أي إشعاع مؤين؟', en: 'Which imaging modality uses sound waves and no ionising radiation at all?' },
        opts: [
          { ar: 'التصوير المقطعي CT', en: 'Computed tomography (CT)' },
          { ar: 'الموجات فوق الصوتية Ultrasound', en: 'Ultrasound' },
          { ar: 'الأشعة السينية X-ray', en: 'X-ray' },
          { ar: 'التصوير المقطعي بالإصدار البوزيتروني PET', en: 'Positron emission tomography (PET)' }
        ],
        a: 1,
        why: {
          ar: 'يستخدم Ultrasound موجات صوتية عالية التردد لتكوين الصورة، لذلك لا توجد جرعة إشعاعية مؤينة كما في CT وX-ray وPET.',
          en: 'Ultrasound forms images with high-frequency sound waves, so it carries no ionising radiation dose, unlike CT, X-ray and PET.'
        }
      },
      {
        q: { ar: 'أي مادة تظهر بأدنى قيمة HU (الأغمق) في صورة CT؟', en: 'Which substance has the lowest HU value (appears darkest) on CT?' },
        opts: [
          { ar: 'العظم Bone', en: 'Bone' },
          { ar: 'العضلات Muscle', en: 'Muscle' },
          { ar: 'الدهون Fat', en: 'Fat' },
          { ar: 'الهواء Air', en: 'Air' }
        ],
        a: 3,
        why: {
          ar: 'الهواء هو الأقل كثافة بقيمة ‎-1000 HU، ثم الدهون (سالبة قليلاً)، ثم السوائل والأنسجة الرخوة، ثم العظم والمعادن في الأعلى.',
          en: 'Air is the least dense at -1000 HU, followed by fat (slightly negative), then fluid and soft tissue, with bone and metal at the top.'
        }
      },
      {
        q: { ar: 'تُستخدم مادة Barium بشكل رئيسي في فحص أي جهاز؟', en: 'Barium contrast is mainly used to examine which system?' },
        opts: [
          { ar: 'الجهاز العصبي المركزي', en: 'The central nervous system' },
          { ar: 'الجهاز الهضمي Gastrointestinal tract', en: 'The gastrointestinal tract' },
          { ar: 'الجهاز البولي', en: 'The urinary system' },
          { ar: 'الأوعية الدموية في القلب', en: 'The coronary vessels' }
        ],
        a: 1,
        why: {
          ar: 'يُبتلَع الباريوم أو يُعطى شرجيًا ليبطّن الجهاز الهضمي ويُظهر تجويفه في دراسات مثل Barium swallow وBarium enema.',
          en: 'Barium is swallowed or given rectally to coat the gastrointestinal tract and outline its lumen in studies such as barium swallow and barium enema.'
        }
      },
      {
        q: { ar: 'في صور MRI الموزونة T1-weighted، كيف تظهر الدهون Fat عادةً؟', en: 'On a T1-weighted MRI image, how does fat usually appear?' },
        opts: [
          { ar: 'داكنة جدًا (إشارة منعدمة)', en: 'Very dark (no signal)' },
          { ar: 'رمادية متوسطة', en: 'Mid-grey' },
          { ar: 'ساطعة (إشارة عالية)', en: 'Bright (high signal)' },
          { ar: 'مخططة بخطوط سوداء', en: 'Striped with black lines' }
        ],
        a: 2,
        why: {
          ar: 'للدهون زمن استرخاء T1 قصير، لذلك تستعيد مغنطتها بسرعة وتظهر ساطعة في الصور الموزونة T1-weighted، بينما يظهر الماء داكنًا نسبيًا.',
          en: 'Fat has a short T1 relaxation time, so it recovers its magnetisation quickly and appears bright on T1-weighted images, while water appears relatively dark.'
        }
      },
      {
        q: { ar: 'أي فحص يعطي المريض جرعة إشعاعية أعلى بكثير من غيره؟', en: 'Which examination gives the patient a far higher radiation dose than the others?' },
        opts: [
          { ar: 'فحص CT للبطن والحوض', en: 'CT of the abdomen and pelvis' },
          { ar: 'أشعة سينية للصدر Chest X-ray', en: 'Chest X-ray' },
          { ar: 'أشعة سينية لليد', en: 'Hand X-ray' },
          { ar: 'فحص Ultrasound للبطن', en: 'Abdominal ultrasound' }
        ],
        a: 0,
        why: {
          ar: 'جرعة CT البطن والحوض أعلى بعشرات إلى مئات المرات من أشعة صدر بسيطة، أما Ultrasound فلا يستخدم إشعاعًا مؤينًا إطلاقًا.',
          en: 'A CT abdomen/pelvis delivers a dose tens to hundreds of times higher than a simple chest X-ray, while ultrasound uses no ionising radiation at all.'
        }
      },
      {
        q: { ar: 'عند فحص Gallbladder بـ Ultrasound، ما العلامة النموذجية لوجود حصوة Gallstone؟', en: 'When scanning the gallbladder with ultrasound, what is the typical sign of a gallstone?' },
        opts: [
          { ar: 'بنية عديمة الصدى تمامًا دون أي ظل', en: 'A completely echo-free structure with no shadow' },
          { ar: 'بنية عالية الصدى Echogenic مع ظل صوتي خلفي Acoustic shadowing', en: 'A bright echogenic focus with posterior acoustic shadowing' },
          { ar: 'منطقة سائلة سوداء واسعة', en: 'A large black fluid area' },
          { ar: 'خطوط متوازية ساطعة في كل المرارة', en: 'Bright parallel lines throughout the gallbladder' }
        ],
        a: 1,
        why: {
          ar: 'الحصوة تعكس وتمتص الموجات بقوة فتظهر ساطعة (echogenic) ويختفي الصدى خلفها مكوّنًا ظلًا صوتيًا (acoustic shadow)، وهي علامة مميزة للحصوات.',
          en: 'A stone strongly reflects and absorbs the beam, so it appears echogenic with a clean acoustic shadow behind it — a classic sign of gallstones.'
        }
      },
      {
        q: { ar: 'ما نافذة العرض Window الأنسب لتقييم نسيج الرئة نفسه في CT الصدر؟', en: 'Which CT display window is best suited to assessing the lung tissue itself?' },
        opts: [
          { ar: 'نافذة العظم Bone window', en: 'Bone window' },
          { ar: 'نافذة الأنسجة الرخوة Soft tissue window', en: 'Soft tissue window' },
          { ar: 'نافذة الدماغ Brain window', en: 'Brain window' },
          { ar: 'نافذة الرئة Lung window', en: 'Lung window' }
        ],
        a: 3,
        why: {
          ar: 'نافذة الرئة Lung window واسعة الإعدادات ومضبوطة حول مستويات منخفضة تناسب نسيج الرئة المليء بالهواء، بينما تُخفي نافذة الأنسجة الرخوة تفاصيل الرئة الدقيقة.',
          en: 'The lung window uses wide settings centred on low densities that suit air-filled lung tissue, whereas a soft tissue window hides fine lung detail.'
        }
      },
      {
        q: { ar: 'ما أهم احتياطات السلامة قبل إدخال مريض إلى غرفة MRI؟', en: 'What is the key safety check before a patient enters the MRI room?' },
        opts: [
          { ar: 'قياس ضغط الدم فقط', en: 'Measuring blood pressure only' },
          { ar: 'التحقق من عدم وجود أجسام أو غرسات معدنية مغناطيسية Ferromagnetic مثل بعض منظمات القلب', en: 'Checking for ferromagnetic objects or implants, such as some pacemakers' },
          { ar: 'الصيام لمدة 12 ساعة', en: 'Fasting for 12 hours' },
          { ar: 'إعطاء مادة تباين مُيوَّدة', en: 'Giving iodinated contrast' }
        ],
        a: 1,
        why: {
          ar: 'المجال المغناطيسي في MRI قوي ودائم، وقد يجذب الأجسام المغناطيسية Ferromagnetic أو يعطّل غرسات مثل بعض Pacemakers، لذلك يُجرى فحص سلامة صارم قبل الدخول.',
          en: 'The MRI magnetic field is strong and always on; it can attract ferromagnetic objects or interfere with implants such as some pacemakers, so strict safety screening is done first.'
        }
      }
    ]
  },
  {
    slug: 'chest-quiz',
    chapter: 'chest',
    title: { ar: 'اختبار الصدر', en: 'Chest Quiz' },
    intro: {
      ar: 'أسئلة للمبتدئين حول تشريح الصدر الطبيعي وأشهر الحالات المرضية في صور الصدر وCT.',
      en: 'Beginner questions on normal chest anatomy and the commonest chest conditions on X-ray and CT.'
    },
    questions: [
      {
        q: { ar: 'ما المقصود بـ Pleural effusion؟', en: 'What is a pleural effusion?' },
        opts: [
          { ar: 'تجمع سائل في التجويف الجنبي Pleural cavity حول الرئة', en: 'A collection of fluid in the pleural cavity around the lung' },
          { ar: 'تجمع هواء داخل نسيج الرئة', en: 'A collection of air inside the lung tissue' },
          { ar: 'تضخم في عضلة القلب', en: 'Enlargement of the heart muscle' },
          { ar: 'انسداد في الشريان الرئوي', en: 'A blockage in a pulmonary artery' }
        ],
        a: 0,
        why: {
          ar: 'الـ Pleural effusion هو سائل زائد بين طبقتي الغشاء الجنبي، يظهر في أشعة الصدر كعتامة قاعدية مع ضبابية الزاوية الضلعية الحجابية Blunting of the costophrenic angle.',
          en: 'A pleural effusion is excess fluid between the pleural layers; on a chest X-ray it appears as basal opacity with blunting of the costophrenic angle.'
        }
      },
      {
        q: { ar: 'علامة Signet ring sign في CT الصدر تشير غالبًا إلى أي حالة؟', en: 'On chest CT, the signet ring sign most often indicates which condition?' },
        opts: [
          { ar: 'التهاب رئوي Pneumonia', en: 'Pneumonia' },
          { ar: 'استرواح الصدر Pneumothorax', en: 'Pneumothorax' },
          { ar: 'توسع القصبات Bronchiectasis', en: 'Bronchiectasis' },
          { ar: 'سرطان الرئة', en: 'Lung cancer' }
        ],
        a: 2,
        why: {
          ar: 'في Bronchiectasis يتوسع القصيب الهوائي فيصبح قطره أكبر من الشريان المرافق له، فيبدوان كخاتم وحجرته (signet ring).',
          en: 'In bronchiectasis the dilated bronchus is wider than its accompanying artery, so the pair resembles a signet ring.'
        }
      },
      {
        q: { ar: 'في فحص CT pulmonary angiography، كيف يظهر الخثار الرئوي Pulmonary embolism؟', en: 'On CT pulmonary angiography, how does a pulmonary embolism appear?' },
        opts: [
          { ar: 'كمنطقة ساطعة داخل الوريد الأجوف', en: 'As a bright area inside the vena cava' },
          { ar: 'كعيب امتلاء Filling defect داخل الشريان الرئوي المحقون بالتباين', en: 'As a filling defect within the contrast-filled pulmonary artery' },
          { ar: 'كسائل حول القلب', en: 'As fluid around the heart' },
          { ar: 'كثخانة في جدار القصبات', en: 'As thickening of the bronchial walls' }
        ],
        a: 1,
        why: {
          ar: 'الجلطة داخل الشريان لا تمتلئ بمادة التباين، فتظهر كعيب امتلاء Filling defect داكن محاط بالتباين الساطع داخل الوعاء.',
          en: 'Clot inside the artery does not fill with contrast, so it shows as a dark filling defect surrounded by bright contrast within the vessel.'
        }
      },
      {
        q: { ar: 'نمط Honeycombing (أقراص العسل) في الرئة يرتبط بأي مرض؟', en: 'A honeycombing pattern in the lung is associated with which disease?' },
        opts: [
          { ar: 'الربو Asthma', en: 'Asthma' },
          { ar: 'التهاب القصبات الحاد', en: 'Acute bronchitis' },
          { ar: 'التهاب رئوي بكتيري', en: 'Bacterial pneumonia' },
          { ar: 'التليف الرئوي Pulmonary fibrosis', en: 'Pulmonary fibrosis' }
        ],
        a: 3,
        why: {
          ar: 'الـ Honeycombing عبارة عن تجاويف كيسية متراكبة تنتج عن تدمير نسيج الرئة وتليّفه، وهو علامة مرحلة متقدمة من Pulmonary fibrosis.',
          en: 'Honeycombing consists of clustered cystic spaces produced by destroyed, scarred lung tissue and is a sign of advanced pulmonary fibrosis.'
        }
      },
      {
        q: { ar: 'كم عدد فصوص Lobes الرئة اليمنى عند الإنسان الطبيعي؟', en: 'How many lobes does the normal right lung have?' },
        opts: [
          { ar: 'ثلاثة فصوص', en: 'Three lobes' },
          { ar: 'فصان', en: 'Two lobes' },
          { ar: 'أربعة فصوص', en: 'Four lobes' },
          { ar: 'فص واحد', en: 'One lobe' }
        ],
        a: 0,
        why: {
          ar: 'الرئة اليمنى لها ثلاثة فصوص (علوي ومتوسط وسفلي)، بينما اليسرى لها فصان فقط ليفسحا مكانًا للقلب.',
          en: 'The right lung has three lobes (upper, middle and lower), while the left lung has two, making room for the heart.'
        }
      },
      {
        q: { ar: 'ما العلامة الأشعّية النموذجية لـ Pneumothorax (استرواح الصدر)؟', en: 'What is the typical radiographic sign of a pneumothorax?' },
        opts: [
          { ar: 'عتامة بيضاء تشمل الرئة كلها', en: 'White opacity covering the whole lung' },
          { ar: 'خط جنبي رفيع Visceral pleural line مع غياب علامات الرئة خلفه', en: 'A thin visceral pleural line with absent lung markings beyond it' },
          { ar: 'تضخم ظل القلب', en: 'An enlarged cardiac shadow' },
          { ar: 'ارتفاع نصف الحجاب الحاجز', en: 'Elevation of one hemidiaphragm' }
        ],
        a: 1,
        why: {
          ar: 'الهواء في التجويف الجنبي يفصل الغشاء الجنبي الحشوي عن جدار الصدر، فيظهر خط رفيع ولا توجد أوعية رئوية في المنطقة الواقعة خارجه.',
          en: 'Air in the pleural space separates the visceral pleura from the chest wall, producing a thin line with no lung vessels in the space beyond it.'
        }
      },
      {
        q: { ar: 'ظهور Air bronchograms داخل عتامة رئوية يرجّح أي تشخيص؟', en: 'Air bronchograms seen within a lung opacity most suggest which diagnosis?' },
        opts: [
          { ar: 'انخماص كامل Atelectasis', en: 'Complete atelectasis' },
          { ar: 'ذات الرئة Pneumonia مع تصلّد Consolidation', en: 'Pneumonia with consolidation' },
          { ar: 'ورم رئوي كبير', en: 'A large lung tumour' },
          { ar: 'سائل جنبي فقط', en: 'Pleural fluid only' }
        ],
        a: 1,
        why: {
          ar: 'عندما تمتلئ الحويصلات بالإفرازات في Pneumonia تبقى القصبات المليئة بالهواء مرئية كخطوط داكنة متفرعة داخل التصلّد، وهي Air bronchograms.',
          en: 'When alveoli fill with exudate in pneumonia, the air-filled bronchi remain visible as dark branching lines within the consolidation — air bronchograms.'
        }
      },
      {
        q: { ar: 'في أشعة صدر PA منتصبة، متى نعتبر القلب متضخمًا Cardiomegaly؟', en: 'On an erect PA chest X-ray, when is the heart considered enlarged (cardiomegaly)?' },
        opts: [
          { ar: 'عندما يتجاوز عرض القلب ربع عرض الصدر', en: 'When the heart width exceeds a quarter of the chest width' },
          { ar: 'عندما يساوي عرض القلب عرض الصدر تمامًا', en: 'When the heart width equals the chest width' },
          { ar: 'لا يمكن الحكم من أشعة الصدر أبداً', en: 'It can never be judged from a chest X-ray' },
          { ar: 'عندما تتجاوز النسبة القلبية الصدرية Cardiothoracic ratio قيمة 0.5', en: 'When the cardiothoracic ratio exceeds 0.5' }
        ],
        a: 3,
        why: {
          ar: 'تُحسب Cardiothoracic ratio بقسمة أقصى عرض للقلب على أقصى عرض داخلي للصدر، وتجاوزها 0.5 في صورة PA منتصبة يدل على تضخم القلب.',
          en: 'The cardiothoracic ratio divides the maximum heart width by the maximum internal chest width; above 0.5 on an erect PA film indicates cardiomegaly.'
        }
      },
      {
        q: { ar: 'علامة Tram-track sign تعني أشعّيًا:', en: 'The tram-track sign on imaging refers to:' },
        opts: [
          { ar: 'جدار قصبي مثخن يظهر كخطين متوازيين في توسع القصبات', en: 'Thickened bronchial walls seen as parallel lines in bronchiectasis' },
          { ar: 'خطوط عظمية في الأضلاع', en: 'Bony lines within the ribs' },
          { ar: 'مسار أنبوب وريدي', en: 'The course of an IV line' },
          { ar: 'حدود الحجاب الحاجز المزدوجة', en: 'A doubled diaphragm outline' }
        ],
        a: 0,
        why: {
          ar: 'في Bronchiectasis يُرى جدار القصبة المتوسعة والمثخّنة كخطين متوازيين يشبهان سكة الترام، بدل أن تتفرع القصبة وتضيق تدريجيًا بشكل طبيعي.',
          en: 'In bronchiectasis the dilated, thick-walled bronchus is seen as two parallel lines like tram tracks, instead of tapering normally.'
        }
      },
      {
        q: { ar: 'مريض سرطان معروف ظهرت لديه عقيدات رئوية متعددة ثنائية الجانب مختلفة الأحجام. التشخيص الأرجح؟', en: 'A patient with a known cancer has multiple bilateral lung nodules of varying sizes. The most likely diagnosis?' },
        opts: [
          { ar: 'التهاب رئوي فيروسي', en: 'Viral pneumonia' },
          { ar: 'حصوات رئوية', en: 'Lung stones' },
          { ar: 'نقائل رئوية Pulmonary metastases', en: 'Pulmonary metastases' },
          { ar: 'فقاعات هوائية طبيعية', en: 'Normal air bubbles' }
        ],
        a: 2,
        why: {
          ar: 'العقيدات المتعددة مختلفة الأحجام في جانبي الرئتين لدى مريض ورم خبيث معروف هي الصورة النموذجية لانتشار الورم إلى الرئة (Metastases).',
          en: 'Multiple nodules of varying size in both lungs in a patient with a known malignancy are the classic appearance of metastases to the lungs.'
        }
      }
    ]
  },
  {
    slug: 'abdomen-quiz',
    chapter: 'abdomen',
    title: { ar: 'اختبار البطن', en: 'Abdomen Quiz' },
    intro: {
      ar: 'اختبر نفسك في تشريح البطن الطبيعي وأشهر ما يُرى في CT البطن: الكيسات، والانسداد، والحصوات، والأورطي.',
      en: 'Test yourself on normal abdominal anatomy and the commonest CT abdomen findings: cysts, obstruction, stones and the aorta.'
    },
    questions: [
      {
        q: { ar: 'آفة دائرية حادة الحدود ذات كثافة سائلية داخل قشرة الكلية في CT. التشخيص الأرجح؟', en: 'A sharply defined, round lesion of fluid density in the renal cortex on CT. Most likely diagnosis?' },
        opts: [
          { ar: 'حصوة كلوية', en: 'A renal stone' },
          { ar: 'كيسة كلوية بسيطة Simple renal cyst', en: 'A simple renal cyst' },
          { ar: 'ورم كلوي صلب', en: 'A solid renal tumour' },
          { ar: 'خراج كلوي', en: 'A renal abscess' }
        ],
        a: 1,
        why: {
          ar: 'الكيسة البسيطة Simple cyst تكون دائرية منتظمة، حادة الحدود، وبكثافة الماء تمامًا دون تعزيز بالمادة الملونة، وهي شائعة جدًا وغالبًا عَرَضية.',
          en: 'A simple cyst is round and regular with sharp margins and pure water density, showing no enhancement; it is very common and usually incidental.'
        }
      },
      {
        q: { ar: 'في CT بطن، حلقات أمعاء دقيقة متوسعة مع انهيار الحلقات البعيدة ونقطة انتقال واضحة. التشخيص؟', en: 'On CT abdomen there are dilated small bowel loops, collapsed distal loops and a clear transition point. Diagnosis?' },
        opts: [
          { ar: 'انسداد الأمعاء الدقيقة Small bowel obstruction', en: 'Small bowel obstruction' },
          { ar: 'التهاب المعدة', en: 'Gastritis' },
          { ar: 'كيسة بنكرياسية', en: 'A pancreatic cyst' },
          { ar: 'فتق حجابي فقط', en: 'A hiatus hernia only' }
        ],
        a: 0,
        why: {
          ar: 'توسع الحلقات قبل نقطة الانسداد وانهيار ما بعدها هو النمط الكلاسيكي لـ Small bowel obstruction، وغالبًا سببه الالتصاقات Adhesions.',
          en: 'Dilated loops before the blockage with collapse beyond it is the classic pattern of small bowel obstruction, most often caused by adhesions.'
        }
      },
      {
        q: { ar: 'وجود هواء داخل جدار الأمعاء Pneumatosis intestinalis لدى مريض بألم بطني حاد يثير القلق بشأن:', en: 'Air within the bowel wall (pneumatosis intestinalis) in a patient with severe abdominal pain raises concern for:' },
        opts: [
          { ar: 'إمساك بسيط', en: 'Simple constipation' },
          { ar: 'حصوة مرارية', en: 'A gallstone' },
          { ar: 'التهاب الزائدة الدودية', en: 'Appendicitis' },
          { ar: 'إقفار الأمعاء Bowel ischaemia', en: 'Bowel ischaemia' }
        ],
        a: 3,
        why: {
          ar: 'الـ Pneumatosis يعني أن الغاز دخل جدار الأمعاء المتضرر، وهو علامة مقلقة على نقص تروية الأمعاء Bowel ischaemia وقد يترافق مع غاز في الوريد البابي.',
          en: 'Pneumatosis means gas has entered the damaged bowel wall; it is a worrying sign of bowel ischaemia and may accompany portal venous gas.'
        }
      },
      {
        q: { ar: 'مريض ورم معروف وفي كبده عدة مناطق منخفضة الكثافة Hypoattenuating منتشرة. التفسير الأرجح؟', en: 'A patient with a known tumour has several hypoattenuating areas scattered through the liver. Most likely explanation?' },
        opts: [
          { ar: 'كبد دهني فقط', en: 'Fatty liver only' },
          { ar: 'كيسات مائية', en: 'Hydatid cysts' },
          { ar: 'نقائل كبدية Liver metastases', en: 'Liver metastases' },
          { ar: 'حصوات كبدية', en: 'Liver stones' }
        ],
        a: 2,
        why: {
          ar: 'الكبد هو أكثر أعضاء البطن استقبالًا للنقائل، وتظهر Liver metastases عادةً كآفات متعددة منخفضة الكثافة مقارنة بنسيج الكبد المعزز بالتباين.',
          en: 'The liver is the commonest site for metastases in the abdomen; they typically appear as multiple hypoattenuating lesions against enhancing liver tissue.'
        }
      },
      {
        q: { ar: 'ما المقصود بـ Ascites؟', en: 'What is ascites?' },
        opts: [
          { ar: 'هواء حر داخل البطن', en: 'Free air inside the abdomen' },
          { ar: 'تجمع سائل حر في التجويف البريتوني Peritoneal cavity', en: 'Free fluid collected in the peritoneal cavity' },
          { ar: 'تضخم الطحال', en: 'Enlargement of the spleen' },
          { ar: 'انسداد القناة الصفراوية', en: 'Blockage of the bile duct' }
        ],
        a: 1,
        why: {
          ar: 'الـ Ascites سائل حر يتجمع حول الكبد والأمعاء وفي الحوض، وقد ينتج عن مرض كبدي أو انتشار ورمي داخل البريتون.',
          en: 'Ascites is free fluid that collects around the liver and bowel and in the pelvis; causes include liver disease and peritoneal tumour spread.'
        }
      },
      {
        q: { ar: 'يُعرَّف تمدد الأورطي البطني Abdominal aortic aneurysm عندما يتجاوز قطر الأورطي:', en: 'An abdominal aortic aneurysm is defined when the aortic diameter exceeds:' },
        opts: [
          { ar: '3 cm', en: '3 cm' },
          { ar: '1 cm', en: '1 cm' },
          { ar: '2 cm', en: '2 cm' },
          { ar: '10 cm', en: '10 cm' }
        ],
        a: 0,
        why: {
          ar: 'القطر الطبيعي للأورطي البطني نحو 2 cm، ويُشخَّص الـ Aneurysm عند تجاوز 3 cm، ويزداد خطر التمزق Rupture كلما كبر القطر.',
          en: 'The normal abdominal aorta measures about 2 cm; an aneurysm is diagnosed above 3 cm, and the risk of rupture rises with increasing diameter.'
        }
      },
      {
        q: { ar: 'ما الفحص الأفضل للبحث عن حصوة حالب مشتبه بها؟', en: 'Which is the best test to look for a suspected ureteric stone?' },
        opts: [
          { ar: 'أشعة بطن مع تباين فموي', en: 'Abdominal X-ray with oral contrast' },
          { ar: 'فحص MRI للعمود الفقري', en: 'MRI of the spine' },
          { ar: 'فحص CT KUB دون مادة تباين Non-contrast CT KUB', en: 'Non-contrast CT KUB' },
          { ar: 'فحص Ultrasound للمرارة فقط', en: 'Gallbladder ultrasound only' }
        ],
        a: 2,
        why: {
          ar: 'فحص CT KUB دون تباين وريدي سريع وحساس جدًا لمعظم حصوات الجهاز البولي، ويُظهر أيضًا توسع الحالب والكلية الناتج عن الانسداد.',
          en: 'A non-contrast CT KUB is fast and highly sensitive for most urinary tract stones, and also shows any ureteric and renal dilatation from obstruction.'
        }
      },
      {
        q: { ar: 'ماذا يعني مصطلح Hydronephrosis؟', en: 'What does the term hydronephrosis mean?' },
        opts: [
          { ar: 'وجود حصوات داخل المرارة', en: 'Stones inside the gallbladder' },
          { ar: 'التهاب حاد في الكبد', en: 'Acute inflammation of the liver' },
          { ar: 'سائل حر حول الطحال', en: 'Free fluid around the spleen' },
          { ar: 'توسع حويضة الكلية وكؤوسها بسبب انسداد مجرى البول', en: 'Dilatation of the renal pelvis and calyces due to urinary obstruction' }
        ],
        a: 3,
        why: {
          ar: 'عندما يُسد مجرى البول (غالبًا بحصوة حالب) يتراكم البول فوق الانسداد فيتوسع الجهاز الجامع، وهذا هو Hydronephrosis وقد يشمل الحالب أيضًا (Hydroureter).',
          en: 'When urine outflow is blocked (often by a ureteric stone), urine backs up and dilates the collecting system — hydronephrosis, often with hydroureter as well.'
        }
      },
      {
        q: { ar: 'وجود حصوات داخل المرارة Gallbladder يُسمى:', en: 'Stones present inside the gallbladder are called:' },
        opts: [
          { ar: 'التهاب المرارة Cholecystitis', en: 'Cholecystitis' },
          { ar: 'حصوات المرارة Cholelithiasis', en: 'Gallstones (cholelithiasis)' },
          { ar: 'انسداد القناة الصفراوية', en: 'Bile duct obstruction' },
          { ar: 'كيسة المرارة', en: 'A gallbladder cyst' }
        ],
        a: 1,
        why: {
          ar: 'مصطلح Cholelithiasis يصف وجود الحصوات نفسها، أما Cholecystitis فهو التهاب المرارة الذي قد يحدث كمضاعفة لانحشار حصوة في عنقها.',
          en: 'Cholelithiasis describes the stones themselves, whereas cholecystitis is inflammation of the gallbladder, which may complicate an impacted stone.'
        }
      },
      {
        q: { ar: 'مريض لديه انسداد أمعاء دقيقة وسببه جسم كثيف مستقر عند نقطة الانسداد قادم من المرارة. التشخيص؟', en: 'A patient has small bowel obstruction caused by a dense object lodged at the transition point, originating from the gallbladder. Diagnosis?' },
        opts: [
          { ar: 'التهاب الزائدة', en: 'Appendicitis' },
          { ar: 'فتق إربي', en: 'An inguinal hernia' },
          { ar: 'علوص الحصوة المرارية Gallstone ileus', en: 'Gallstone ileus' },
          { ar: 'التواء الأمعاء Volvulus فقط دون جسم غريب', en: 'Volvulus with no foreign body' }
        ],
        a: 2,
        why: {
          ar: 'في Gallstone ileus تعبر حصوة مرارية كبيرة عبر ناسور إلى الأمعاء ثم تنحشر مسببة انسدادًا، وغالبًا ما يترافق مع هواء في القنوات الصفراوية Pneumobilia.',
          en: 'In gallstone ileus a large gallstone passes through a fistula into the bowel and impacts, causing obstruction, often with pneumobilia (air in the biliary tree).'
        }
      }
    ]
  },
  {
    slug: 'head-quiz',
    chapter: 'head',
    title: { ar: 'اختبار الرأس والعمود الفقري', en: 'Head and Spine Quiz' },
    intro: {
      ar: 'أسئلة أساسية حول نزوف الدماغ، والاحتشاء، وضمور الدماغ، وكسور العمود الفقري في CT وMRI.',
      en: 'Core questions on intracranial haemorrhage, infarction, cerebral atrophy and spinal fractures on CT and MRI.'
    },
    questions: [
      {
        q: { ar: 'تجمع دموي هلالي الشكل Crescent يغطي سطح نصف كرة مخية في CT. التشخيص الأرجح؟', en: 'A crescent-shaped blood collection spreading over the surface of a cerebral hemisphere on CT. Most likely diagnosis?' },
        opts: [
          { ar: 'نزف تحت الأم الجافية Subdural haematoma', en: 'Subdural haematoma' },
          { ar: 'نزف فوق الأم الجافية Extradural haematoma', en: 'Extradural haematoma' },
          { ar: 'ورم سحائي', en: 'Meningioma' },
          { ar: 'كيسة عنكبوتية', en: 'Arachnoid cyst' }
        ],
        a: 0,
        why: {
          ar: 'النزف Subdural ينتشر بحرية على سطح الدماغ فيأخذ شكل الهلال ويعبر خطوط الدرزات Sutures، وينتج غالبًا عن تمزق الأوردة الجسرية Bridging veins.',
          en: 'A subdural collection spreads freely over the brain surface, forming a crescent that crosses suture lines; it usually results from torn bridging veins.'
        }
      },
      {
        q: { ar: 'بأي شكل يظهر النزف فوق الأم الجافية Extradural haematoma نموذجيًا؟', en: 'What shape does an extradural haematoma typically take?' },
        opts: [
          { ar: 'شكل هلالي رفيع جدًا', en: 'A very thin crescent' },
          { ar: 'شكل حلقي', en: 'A ring shape' },
          { ar: 'شكل عدسي ثنائي التحدب Biconvex (lentiform)', en: 'A biconvex (lentiform) shape' },
          { ar: 'شكل نجمي', en: 'A star shape' }
        ],
        a: 2,
        why: {
          ar: 'النزف Extradural محصور بالدرزات حيث تلتصق الأم الجافية بالجمجمة، فيتجمّع على شكل عدسة ثنائية التحدب، وغالبًا مصدره الشريان السحائي الأوسط Middle meningeal artery.',
          en: 'An extradural collection is limited by sutures where the dura attaches to the skull, so it forms a biconvex lens shape, often from the middle meningeal artery.'
        }
      },
      {
        q: { ar: 'كيف يظهر الدم الحاد Acute blood في فحص CT الدماغ؟', en: 'How does acute blood appear on a CT head scan?' },
        opts: [
          { ar: 'منخفض الكثافة Hypodense (داكن)', en: 'Hypodense (dark)' },
          { ar: 'عالي الكثافة Hyperdense (ساطع)', en: 'Hyperdense (bright)' },
          { ar: 'مساويًا لكثافة الهواء تمامًا', en: 'Exactly the same density as air' },
          { ar: 'غير مرئي أبدًا في CT', en: 'Never visible on CT' }
        ],
        a: 1,
        why: {
          ar: 'الدم المتجلط حديثًا غني بالهيموغلوبين المركز فيظهر Hyperdense ساطعًا في CT، ثم تنخفض كثافته تدريجيًا مع مرور الأيام حتى يصبح داكنًا في المرحلة المزمنة.',
          en: 'Freshly clotted blood is rich in concentrated haemoglobin and appears hyperdense on CT; its density then falls over days until it becomes dark when chronic.'
        }
      },
      {
        q: { ar: 'ما العلامة المبكرة للاحتشاء الدماغي الحاد Acute infarct في CT؟', en: 'What is an early CT sign of an acute cerebral infarct?' },
        opts: [
          { ar: 'تكلسات متعددة في القشرة', en: 'Multiple cortical calcifications' },
          { ar: 'تضخم البطينات فقط', en: 'Ventricular enlargement only' },
          { ar: 'نزف ساطع كبير', en: 'A large bright haemorrhage' },
          { ar: 'فقدان التمايز بين المادة الرمادية والبيضاء Loss of grey-white differentiation', en: 'Loss of grey-white matter differentiation' }
        ],
        a: 3,
        why: {
          ar: 'في الساعات الأولى من Infarct تنتفخ الخلايا المصابة بالماء (وذمة خلوية) فتقترب كثافة القشرة من المادة البيضاء ويضيع التمايز الطبيعي بينهما، مع انخفاض كثافة خفيف في المنطقة المصابة.',
          en: 'In the first hours of an infarct, injured cells swell with water (cytotoxic oedema), so cortical density approaches that of white matter and normal grey-white differentiation is lost.'
        }
      },
      {
        q: { ar: 'اتساع الأخاديد Sulci والبطينات مع التقدم في العمر، دون أعراض ضغط، يمثل غالبًا:', en: 'Widened sulci and enlarged ventricles in an elderly patient, without pressure symptoms, most often represent:' },
        opts: [
          { ar: 'ضمور الدماغ Cerebral atrophy', en: 'Cerebral atrophy' },
          { ar: 'استسقاء الدماغ Hydrocephalus', en: 'Hydrocephalus' },
          { ar: 'نزفًا حادًا', en: 'Acute haemorrhage' },
          { ar: 'ورمًا كبيرًا', en: 'A large tumour' }
        ],
        a: 0,
        why: {
          ar: 'في Cerebral atrophy ينكمش نسيج الدماغ فيتسع كل من الأخاديد والبطينات معًا بشكل متناسب، وهو تغيّر شائع مع التقدم في العمر.',
          en: 'In cerebral atrophy the brain tissue shrinks, so both the sulci and the ventricles widen together proportionately — a common age-related change.'
        }
      },
      {
        q: { ar: 'بطينات دماغية متوسعة مع أخاديد Sulci ضيقة أو طبيعية، وأعراض ارتفاع ضغط داخل القحف. التشخيص الأرجح؟', en: 'Enlarged cerebral ventricles with narrow or normal sulci and symptoms of raised intracranial pressure. Most likely diagnosis?' },
        opts: [
          { ar: 'ضمور دماغي بسيط', en: 'Simple cerebral atrophy' },
          { ar: 'احتشاء قديم صغير', en: 'A small old infarct' },
          { ar: 'استسقاء الدماغ Hydrocephalus', en: 'Hydrocephalus' },
          { ar: 'تكلس طبيعي في الضفيرة المشيمية', en: 'Normal choroid plexus calcification' }
        ],
        a: 2,
        why: {
          ar: 'في Hydrocephalus يتجمع السائل الدماغي الشوكي CSF تحت ضغط فيتوسع البطينات بينما لا تتسع الأخاديد بل قد تضيق، على عكس الضمور الذي يوسّع الاثنين معًا.',
          en: 'In hydrocephalus, CSF accumulates under pressure so the ventricles enlarge while the sulci do not — they may even narrow — unlike atrophy, which widens both.'
        }
      },
      {
        q: { ar: 'تكلسات ساطعة صغيرة داخل البطينات الجانبية على CT عجوز دون أعراض. التفسير الأشيع؟', en: 'Small bright calcifications within the lateral ventricles on CT in an asymptomatic elderly patient. Commonest explanation?' },
        opts: [
          { ar: 'نزف داخل البطينات', en: 'Intraventricular haemorrhage' },
          { ar: 'تكلس طبيعي في الضفيرة المشيمية Choroid plexus', en: 'Normal choroid plexus calcification' },
          { ar: 'أورام بطينية', en: 'Ventricular tumours' },
          { ar: 'حصوات دماغية معدية', en: 'Infectious brain stones' }
        ],
        a: 1,
        why: {
          ar: 'تكلس الضفيرة المشيمية Choroid plexus ظاهرة طبيعية شائعة جدًا مع التقدم في العمر، ولا ينبغي الخلط بينها وبين النزف الذي يستقر عادة في الأجزاء المنخفضة من البطين.',
          en: 'Choroid plexus calcification is a very common normal finding with ageing and should not be confused with haemorrhage, which usually layers in the dependent part of the ventricle.'
        }
      },
      {
        q: { ar: 'بعد حادث سير، أظهر MRI العمود الفقري فقدانًا واضحًا في ارتفاع جسم فقرة قطنية مع انقطاع قشرتها. التشخيص؟', en: 'After a road accident, spinal MRI shows marked loss of height of a lumbar vertebral body with a cortical break. Diagnosis?' },
        opts: [
          { ar: 'انزلاق غضروفي بسيط', en: 'A simple disc bulge' },
          { ar: 'التهاب الفقرات', en: 'Vertebral infection' },
          { ar: 'تضيق القناة الشوكية فقط', en: 'Spinal canal stenosis only' },
          { ar: 'كسر انضغاطي Crush (compression) fracture', en: 'A crush (compression) fracture' }
        ],
        a: 3,
        why: {
          ar: 'الكسر الانضغاطي ينهار فيه جسم الفقرة ويفقد ارتفاعه، ويجب عندها تقييم ما إذا كان الحبل الشوكي مضغوطًا؛ بقاء إشارة CSF الساطعة خلف الفقرة في T2 علامة مطمئنة نسبيًا.',
          en: 'In a compression (crush) fracture the vertebral body collapses and loses height; the cord must then be assessed — visible bright CSF signal behind the vertebra on T2 is a relatively reassuring sign.'
        }
      },
      {
        q: { ar: 'نزف Subdural مزمن Chronic في CT يظهر عادةً:', en: 'A chronic subdural haematoma on CT usually appears:' },
        opts: [
          { ar: 'أكثر سطوعًا من قشرة الدماغ', en: 'Brighter than the cerebral cortex' },
          { ar: 'منخفض الكثافة Hypodense وأغمق من الدماغ', en: 'Hypodense and darker than the brain' },
          { ar: 'بكثافة الهواء', en: 'With the density of air' },
          { ar: 'مخططًا بخطوط متعاكسة', en: 'With a striped pattern' }
        ],
        a: 1,
        why: {
          ar: 'مع مرور أسابيع يتحلل الدم المتجلط وتنخفض كثافته تدريجيًا، فيصبح النزف المزمن أغمق (hypodense) من نسيج الدماغ، وقد يمر بمرحلة مساوية للكثافة Isodense يصعب فيها تمييزه.',
          en: 'Over weeks the clot breaks down and its density steadily falls, so a chronic collection is hypodense (darker) than brain, passing through an isodense phase where it can be hard to spot.'
        }
      },
      {
        q: { ar: 'في MRI الدماغ بصور T2-weighted، كيف يظهر السائل الدماغي الشوكي CSF؟', en: 'On T2-weighted MRI of the brain, how does cerebrospinal fluid (CSF) appear?' },
        opts: [
          { ar: 'داكنًا تمامًا كالهواء', en: 'Completely dark like air' },
          { ar: 'رماديًا متوسطًا كالقشرة تمامًا', en: 'Mid-grey, exactly like cortex' },
          { ar: 'ساطعًا (إشارة عالية) لاحتوائه على الماء', en: 'Bright (high signal) because of its water content' },
          { ar: 'مخططًا', en: 'Striped' }
        ],
        a: 2,
        why: {
          ar: 'للسوائل الحرة زمن T2 طويل، لذلك يظهر CSF ساطعًا في الصور الموزونة T2-weighted داخل البطينات وحول الدماغ، بينما يظهر داكنًا في T1-weighted.',
          en: 'Free fluid has a long T2 time, so CSF appears bright on T2-weighted images within the ventricles and around the brain, while it is dark on T1-weighted images.'
        }
      }
    ]
  }
];
