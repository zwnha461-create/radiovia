export const LESSONS = [
{
  slug:'effects-of-radiation',
  chapter:'dose',
  title:{ar:'آثار الإشعاع وكميات الجرعة', en:'Effects of radiation and dose quantities'},
  intro:{ar:'لا يكفي أن نعرف كمّ الطاقة التي امتصّها الجسم؛ فالأثر البيولوجي يعتمد أيضًا على نوع الإشعاع وحساسية النسيج المعرَّض. يعرض هذا الدرس كميات الجرعة الثلاث — absorbed dose و equivalent dose و effective dose — ثم يفرّق بين الآثار الحتمية والعشوائية وعتبات ظهورها، مع حالة خاصة هي تعرّض الجنين أثناء الحمل.',
         en:'Knowing how much energy the body absorbed is not enough; the biological effect also depends on the radiation type and on how sensitive the irradiated tissue is. This lesson presents the three dose quantities — absorbed dose, equivalent dose and effective dose — then separates deterministic from stochastic effects and their thresholds, with the special case of fetal exposure in pregnancy.'},
  sections:[
    { h:{ar:'ثلاث كميات لوصف الجرعة', en:'Three quantities for describing dose'},
      paras:[
        {ar:'أبسط كمية هي absorbed dose: مقدار الطاقة التي يودعها الإشعاع في كل وحدة كتلة من النسيج. عيبها أنها تتعامل مع كل الأنواع الإشعاعية بالتساوي ولا تسأل عن حساسية العضو، لذلك تُبنى فوقها كميتان أخريان تضيفان هذين البعدين تباعًا.',
         en:'The simplest quantity is absorbed dose: the energy deposited by radiation per unit mass of tissue. Its weakness is that it treats all radiation types alike and ignores organ sensitivity, so two further quantities are built on top of it, each adding one of those dimensions.'}
      ],
      table:{head:[{ar:'الكمية', en:'Quantity'}, {ar:'وحدتها', en:'Unit'}, {ar:'ماذا تضيف في الحسبان؟', en:'What does it take into account?'}],
        rows:[
          [{ar:'Absorbed dose', en:'Absorbed dose'}, {ar:'Gray (Gy)', en:'Gray (Gy)'}, {ar:'الطاقة المودعة لكل كيلوغرام فقط', en:'Energy deposited per kilogram only'}],
          [{ar:'Equivalent dose', en:'Equivalent dose'}, {ar:'Sievert (Sv)', en:'Sievert (Sv)'}, {ar:'مدى إتلاف نوع الإشعاع للأنسجة', en:'How damaging the radiation type is'}],
          [{ar:'Effective dose', en:'Effective dose'}, {ar:'Sievert (Sv)', en:'Sievert (Sv)'}, {ar:'حساسية كل عضو بالإضافة إلى نوع الإشعاع', en:'Each organ sensitivity as well as radiation type'}]
        ]},
      nums:[
        {v:'1 Gy = 1 J/kg', ar:'تعريف وحدة الجرعة الممتصة', en:'Definition of the absorbed dose unit'},
        {v:'×20', ar:'عامل الترجيح الإشعاعي لجسيمات alpha', en:'Radiation weighting factor for alpha particles'}
      ]},
    { h:{ar:'نقل الطاقة الخطي LET وعامل الترجيح WR', en:'Linear energy transfer (LET) and the weighting factor WR'},
      paras:[
        {ar:'يُقاس ازدحام الطاقة على طول مسار الجسيم أو الفوتون بمفهوم linear energy transfer (LET). الفوتونات والإلكترونات سريعة العبور فتوزّع طاقتها على مدى طويل، فهي low LET؛ أما جسيمات alpha والنيوترونات فثقيلة وبطيئة نسبيًا، فتصبّ طاقتها كلها في منطقة صغيرة، فهي high LET وأشد إتلافًا للخلايا في تلك البقعة.',
         en:'How densely energy is laid down along the track of a particle or photon is captured by linear energy transfer (LET). Photons and electrons pass through quickly and spread their energy over a long path, so they are low LET; alpha particles and neutrons are heavy and slower, dumping all their energy into a small volume, so they are high LET and far more damaging locally.'},
        {ar:'يُترجم هذا الفرق رقميًا في radiation weighting factor (WR): كلما ارتفع العامل ازدادت equivalent dose الناتجة عن الجرعة الممتصة نفسها. ولأن أشعة X وأشعة gamma والإلكترونات لها WR يساوي 1، تتساوى equivalent dose بالسيفرت عدديًا مع absorbed dose بالغراي لهذه الأنواع الشائعة في التشخيص.',
         en:'This difference is expressed numerically by the radiation weighting factor (WR): the higher the factor, the larger the equivalent dose produced by the same absorbed dose. Because X-rays, gamma rays and electrons all have a WR of 1, for these diagnostically common radiations the equivalent dose in sieverts is numerically equal to the absorbed dose in grays.'}
      ],
      table:{head:[{ar:'نوع الإشعاع', en:'Radiation type'}, {ar:'WR', en:'WR'}],
        rows:[
          [{ar:'فوتونات (X و gamma) وإلكترونات و positrons', en:'Photons (X and gamma), electrons and positrons'}, {ar:'1', en:'1'}],
          [{ar:'Protons', en:'Protons'}, {ar:'2', en:'2'}],
          [{ar:'جسيمات alpha وشظايا الانشطار والأيونات الثقيلة', en:'Alpha particles, fission fragments and heavy ions'}, {ar:'20', en:'20'}],
          [{ar:'Neutrons', en:'Neutrons'}, {ar:'دالة متصلة في طاقة النيوترون', en:'A continuous function of neutron energy'}]
        ]}},
    { h:{ar:'عامل الترجيح النسيجي WT والجرعة الفعّالة', en:'Tissue weighting factor WT and effective dose'},
      paras:[
        {ar:'الأعضاء لا تتساوى في قابليتها للإصابة بالسرطان المستحث إشعاعيًا، لذا تُضرب equivalent dose لكل عضو في tissue weighting factor (WT) خاص به، ومجموع النواتج هو effective dose. أعلى الأوزان للأعضاء سريعة الانقسام أو الحساسة وراثيًا مثل red bone marrow والرئة والثدي، وأدناها للجلد وسطح العظم والدماغ.',
         en:'Organs differ in their susceptibility to radiation-induced cancer, so the equivalent dose to each organ is multiplied by its own tissue weighting factor (WT), and the sum of these products is the effective dose. The largest weights belong to rapidly dividing or genetically sensitive organs such as red bone marrow, lung and breast, and the smallest to skin, bone surface and brain.'}
      ],
      table:{head:[{ar:'WT', en:'WT'}, {ar:'الأعضاء', en:'Organs'}],
        rows:[
          [{ar:'0.12', en:'0.12'}, {ar:'القولون، الرئة، المعدة، الثدي، red bone marrow وبقية الأنسجة', en:'Colon, lung, stomach, breast, red bone marrow and remainder tissues'}],
          [{ar:'0.08', en:'0.08'}, {ar:'الغدد التناسلية (gonads)', en:'Gonads'}],
          [{ar:'0.04', en:'0.04'}, {ar:'المثانة، المريء، الكبد، الغدة الدرقية', en:'Bladder, oesophagus, liver, thyroid'}],
          [{ar:'0.01', en:'0.01'}, {ar:'الجلد، سطح العظم، الدماغ، الغدد اللعابية', en:'Skin, bone surface, brain, salivary glands'}]
        ]}},
    { h:{ar:'الآثار الحتمية والعشوائية', en:'Deterministic versus stochastic effects'},
      paras:[
        {ar:'تنقسم الآثار البيولوجية إلى عائلتين مختلفتين جوهريًا. الآثار الحتمية تنشأ من موت أعداد كبيرة من الخلايا، فلا تظهر إلا فوق عتبة، وتشتدّ كلما زادت الجرعة، وتبدو خلال أيام أو أسابيع. أما الآثار العشوائية فتنشأ من طفرة في خلية واحدة ناجية، فلا عتبة لها نظريًا، والذي يزيد مع الجرعة هو احتمال حدوثها لا شدتها، وقد تتأخر سنوات طويلة.',
         en:'Biological effects fall into two fundamentally different families. Deterministic effects arise from the killing of large numbers of cells, so they appear only above a threshold, grow more severe as dose rises, and show within days or weeks. Stochastic effects arise from a mutation in a single surviving cell, so theoretically they have no threshold; what increases with dose is their probability, not their severity, and they may take many years to appear.'}
      ],
      table:{head:[{ar:'وجه المقارنة', en:'Feature'}, {ar:'حتمية Deterministic', en:'Deterministic'}, {ar:'عشوائية Stochastic', en:'Stochastic'}],
        rows:[
          [{ar:'العتبة', en:'Threshold'}, {ar:'موجودة — لا أثر دونها', en:'Present — no effect below it'}, {ar:'لا توجد عتبة مفترضة', en:'No assumed threshold'}],
          [{ar:'ما يزيد مع الجرعة', en:'What rises with dose'}, {ar:'شدة الأثر', en:'Severity of the effect'}, {ar:'احتمال حدوث الأثر', en:'Probability of the effect'}],
          [{ar:'زمن الظهور', en:'Time of appearance'}, {ar:'أيام إلى أسابيع غالبًا', en:'Usually days to weeks'}, {ar:'قد يتأخر سنوات', en:'May be delayed by years'}],
          [{ar:'أمثلة', en:'Examples'}, {ar:'احمرار الجلد، تساقط الشعر، السادّ (cataract)', en:'Skin erythema, hair loss, cataract'}, {ar:'السرطان المستحث والطفرات الوراثية', en:'Induced cancer and hereditary mutations'}]
        ]},
      nums:[
        {v:'≈5% / Sv', ar:'احتمال إحداث سرطان قاتل لدى البالغين لكل سيفرت من effective dose', en:'Approximate fatal cancer risk for adults per sievert of effective dose'},
        {v:'1 in 20,000', ar:'خطر السرطان المستحث من فحص بجرعة فعّالة 1 mSv', en:'Induced-cancer risk from an examination with 1 mSv effective dose'}
      ]},
    { h:{ar:'عتبات عملية، والتعرض الحاد، والحمل', en:'Practical thresholds, acute exposure and pregnancy'},
      paras:[
        {ar:'لبعض الأنسجة عتبات حتمية منخفضة نسبيًا يجب أن يعرفها العاملون في الأقسام التداخلية: نخاع العظم يبدأ انخفاض إنتاج الدم فيه من نحو 0.5 Gy، والخصيتان قد تتوقفان مؤقتًا عن إنتاج الحيوانات المنوية من 0.15 Gy فقط، بينما يحتاج احمرار الجلد الأولي إلى نحو 2 Gy ويحتاج السادّ في عدسة العين إلى 3–5 Gy لكنه يتأخر سنوات. وفي التعرض الحاد لكامل الجسم تتحول الصورة بتدرج الجرعة: يهيمن فشل نخاع العظم حتى نحو 6 Gy، ثم الجهاز الهضمي والرئتان حتى 15 Gy، ثم الجهاز العصبي المركزي فوق ذلك وبقاء يُقاس بالأيام.',
         en:'Some tissues have relatively low deterministic thresholds that matter in interventional work: bone marrow blood production starts to fall from about 0.5 Gy, the testes may stop sperm production temporarily from only 0.15 Gy, whereas early skin erythema needs roughly 2 Gy and lens cataract needs 3–5 Gy but takes years to develop. In acute whole-body exposure the picture shifts with dose: bone marrow failure dominates up to about 6 Gy, then the gut and lungs up to 15 Gy, and above that the central nervous system, with survival measured in days.'},
        {ar:'في الحمل يعتمد الخطر على مرحلته وعلى الجرعة الممتصة، والفترة الجنينية المبكرة هي الأشد حساسية ثم الثلث الثاني ثم الثالث. إحداث تشوهات — خاصة في الجهاز العصبي المركزي — يتطلب عادة جرعة جنينية لا تقل عن 100–200 mGy، وهي مستويات نادرًا ما تبلغها فحوصات CT أو الأشعة التقليدية، لكنها ممكنة في الإجراءات التداخلية الموجَّهة بالتنظير في الحوض أو في العلاج الإشعاعي. ويجب قبل أي تعرض التحقق من احتمال الحمل لدى النساء في سن الإنجاب، إذ تُعامل الدورة الفائتة الواحدة لدى من تنتظم دورتها كاحتمال حمل حتى يثبت العكس.',
         en:'In pregnancy the risk depends on the stage and on the absorbed dose, with the early fetal period the most sensitive, then the second trimester, then the third. Causing malformations — mainly of the central nervous system — generally requires a fetal dose of at least 100–200 mGy, levels rarely reached by CT or plain radiography but possible with fluoroscopically guided pelvic interventions or radiotherapy. Before any exposure, possible pregnancy must be checked in women of child-bearing age: a single missed period in a woman whose cycle is regular is treated as pregnancy until shown otherwise.'}
      ],
      table:{head:[{ar:'النسيج', en:'Tissue'}, {ar:'الأثر الحتمي', en:'Deterministic effect'}, {ar:'عتبة تقريبية (Gy)', en:'Approximate threshold (Gy)'}],
        rows:[
          [{ar:'نخاع العظم', en:'Bone marrow'}, {ar:'انخفاض إنتاج خلايا الدم', en:'Depression of blood formation'}, {ar:'0.5', en:'0.5'}],
          [{ar:'الغدد التناسلية الذكرية', en:'Male gonads'}, {ar:'عقم مؤقت', en:'Temporary sterility'}, {ar:'0.15', en:'0.15'}],
          [{ar:'الجلد', en:'Skin'}, {ar:'احمرار أولي', en:'Initial erythema'}, {ar:'2', en:'2'}],
          [{ar:'الجلد', en:'Skin'}, {ar:'تساقط الشعر', en:'Hair loss'}, {ar:'3–4', en:'3–4'}],
          [{ar:'عدسة العين', en:'Lens of the eye'}, {ar:'سادّ (cataract)', en:'Cataract'}, {ar:'3–5', en:'3–5'}]
        ]},
      nums:[
        {v:'100–200 mGy', ar:'عتبة تقريبية لجرعة الجنين لإحداث تشوهات', en:'Approximate fetal dose threshold for malformations'},
        {v:'1 in 500', ar:'الخطر الطبيعي لسرطان الأطفال للمقارنة', en:'Natural childhood cancer risk, for comparison'}
      ]}
  ],
  quiz:[
    { q:{ar:'كيف تُحسب equivalent dose لعضو ما؟', en:'How is the equivalent dose to an organ calculated?'},
      opts:[
        {ar:'absorbed dose مضروبة في radiation weighting factor', en:'Absorbed dose multiplied by the radiation weighting factor'},
        {ar:'absorbed dose مقسومة على كتلة العضو', en:'Absorbed dose divided by the organ mass'},
        {ar:'absorbed dose مضروبة في tissue weighting factor', en:'Absorbed dose multiplied by the tissue weighting factor'},
        {ar:'absorbed dose مضروبة في زمن التعرض', en:'Absorbed dose multiplied by the exposure time'}
      ], a:0,
      why:{ar:'equivalent dose = absorbed dose × WR، فتأخذ في الحسبان اختلاف إتلاف أنواع الإشعاع. أما WT فيدخل في حساب effective dose لا equivalent dose.',
           en:'Equivalent dose = absorbed dose × WR, accounting for how damaging the radiation type is. WT enters the effective dose calculation, not the equivalent dose.'}},
    { q:{ar:'أي وصف ينطبق على الآثار العشوائية (stochastic)؟', en:'Which statement describes stochastic effects?'},
      opts:[
        {ar:'تشتدّ كلما زادت الجرعة فوق عتبة محددة', en:'They become more severe as dose rises above a threshold'},
        {ar:'يزيد احتمال حدوثها مع الجرعة دون عتبة مفترضة', en:'Their probability rises with dose, with no assumed threshold'},
        {ar:'تظهر خلال أيام من التعرض', en:'They appear within days of exposure'},
        {ar:'تشمل احمرار الجلد والسادّ', en:'They include skin erythema and cataract'}
      ], a:1,
      why:{ar:'في الآثار العشوائية يزيد الاحتمال لا الشدة، ولا توجد عتبة مفترضة، ومثالها السرطان المستحث. بقية الأوصاف تخص الآثار الحتمية.',
           en:'For stochastic effects it is the probability, not the severity, that rises, and no threshold is assumed; induced cancer is the example. The other statements describe deterministic effects.'}},
    { q:{ar:'فحص بجرعة فعّالة 2 mSv: ما خطر إحداث سرطان إضافي تقريبًا لدى بالغ؟', en:'An examination gives an effective dose of 2 mSv. Roughly what is the additional induced-cancer risk for an adult?'},
      opts:[
        {ar:'نحو 1 من 200', en:'About 1 in 200'},
        {ar:'نحو 1 من 2,000', en:'About 1 in 2,000'},
        {ar:'نحو 1 من 10,000', en:'About 1 in 10,000'},
        {ar:'نحو 1 من 100,000', en:'About 1 in 100,000'}
      ], a:2,
      why:{ar:'باستخدام خطر تقريبي 5% لكل Sv: عند 2 mSv يكون الخطر 0.002 × 5% = 0.01% أي نحو 1 من 10,000، قارن ذلك بخطر السرطان الطبيعي مدى الحياة (نحو 1 من 2 أو 3).',
           en:'Using the approximate risk of 5% per Sv: at 2 mSv the risk is 0.002 × 5% = 0.01%, about 1 in 10,000 — small beside the natural lifetime cancer risk of roughly 1 in 2 or 3.'}}
  ]
},
{
  slug:'patient-dosimetry',
  chapter:'dose',
  title:{ar:'قياس جرعة المريض عبر الطرق التصويرية', en:'Patient dosimetry across imaging modalities'},
  intro:{ar:'جرعة المريض ليست رقمًا ثابتًا للجهاز؛ فهي تتشكل من خصائص الحزمة وضبط الجهاز وبنية المريض نفسه، وتختلف محركاتها من طريقة إلى أخرى. يلخّص هذا الدرس العوامل التي ترفع الجرعة في التصوير العام والتنظير الفلوري وCT والطب النووي، لتعرف أين تتدخل عمليًا لتخفيضها.',
         en:'Patient dose is not a fixed property of the machine; it is shaped by beam settings, equipment factors and the patient build, and the drivers differ between modalities. This lesson summarises what pushes dose up in plain radiography, fluoroscopy, CT and nuclear medicine, so you know where you can intervene in practice to bring it down.'},
  sections:[
    { h:{ar:'التصوير العام: عوامل ترفع الجرعة', en:'Plain radiography: what raises dose'},
      paras:[
        {ar:'يُفيد التفكير في العوامل بثلاث مجموعات: الحزمة، والجهاز، والمريض. فأي تغيير يزيد عدد الفوتونات الواصلة إلى المريض أو طاقتها الصافية الممتصة سيرفع الجرعة، بينما يعمل تضييق الحقل على المنطقة المطلوبة بالضبط على خفض حجم الأنسجة المعرَّضة والإشعاع المتناثر معًا.',
         en:'It helps to group the factors into beam, equipment and patient. Anything that increases the number of photons reaching the patient, or the net energy they deposit, raises dose, whereas collimating tightly to the region of interest reduces both the irradiated tissue volume and the scatter produced.'}
      ],
      bullets:[
        {ar:'من جهة الحزمة: رفع tube current (mA) أو زمن التعرض، وتوسيع field of view، ورفع kVp عند ثبات mAs (فوتونات أكثر وأعلى طاقة، وإن عبر بعضها المريض دون تفاعل)', en:'Beam side: higher tube current (mA) or exposure time, a larger field of view, and higher kVp at fixed mAs (more photons at higher energy, although some pass straight through the patient)'},
        {ar:'من جهة الجهاز: غياب filtration، واستخدام grid، وانخفاض حساسية المستقبِل فيحتاج جرعة أعلى للصورة نفسها', en:'Equipment side: absent filtration, use of a grid, and a less sensitive receptor needing more dose for the same image'},
        {ar:'من جهة المريض: القرب من focal spot، وكبر بنية الجسم فيزيد سطح الجلد الممتص للجرعة القصوى', en:'Patient side: being closer to the focal spot, and a larger body habitus presenting more skin surface to absorb the maximum dose'}
      ]},
    { h:{ar:'التنظير الفلوري: زمن الحزمة على الجلد', en:'Fluoroscopy: beam-on time on the skin'},
      paras:[
        {ar:'في fluoroscopy تتراكم الجرعة مع الزمن، ويصبح توزيعها على الجلد قضية بحد ذاتها: بقاء الأنبوب فوق المنطقة التشريحية نفسها يركّز الجرعة الجلدية القصوى في بقعة واحدة، بينما تحريك اتجاه الحزمة بين الحين والآخر يوزّعها على مداخل مختلفة — ما يُعرف بفكرة dose spreading. كذلك يرفع وضع الاكتساب (acquisition/cine) الجرعة كثيرًا مقارنة بوضع التنظير المراقب وحده.',
         en:'In fluoroscopy dose accumulates with time, and its distribution over the skin becomes an issue in itself: keeping the tube over the same anatomical area concentrates the peak skin dose in one spot, while periodically changing the beam direction spreads it over different entry sites — the idea behind dose spreading. Acquisition (cine) mode also delivers far more dose than screening fluoroscopy alone.'}
      ],
      bullets:[
        {ar:'kVp منخفض: حزمة أقل نفاذًا فتُمتص نسبة أكبر منها في الجلد', en:'Lower kVp: a less penetrating beam, so a larger fraction is absorbed in the skin'},
        {ar:'التشغيل المستمر بدل النبضي (pulsed)، واختيار مستوى جرعة أعلى في الجهاز', en:'Continuous rather than pulsed operation, and selecting a higher dose-level setting'},
        {ar:'مجال collimation واسع ووقت تنظير أطول على المنطقة نفسها', en:'A wide collimation field and longer screening time over the same area'},
        {ar:'استخدام grid، والتكبير الكهربائي (zoom)، والتكبير الهندسي بتقريب المريض من المصدر', en:'Use of a grid, electronic magnification (zoom modes), and geometric magnification by moving the patient toward the source'},
        {ar:'قصر المسافة بين الأنبوب والكاشف، وكبر بنية المريض', en:'A shorter tube-to-detector distance, and a larger patient habitus'}
      ]},
    { h:{ar:'التصوير المقطعي CT: التيار و pitch', en:'CT: tube current and pitch'},
      paras:[
        {ar:'في CT تدور الجرعة حول mAs وkV و pitch. العلاقة الجوهرية أن خفض pitch يعني تداخلًا أكبر بين اللفات ومرورًا متكررًا للحزمة على الأنسجة نفسها، فيرفع الجرعة ما لم يعوّض الجهاز تلقائيًا؛ وبالمقابل تسمح تقنيات خفض الضجيج في إعادة البناء بالعمل بجرعة أدنى مع جودة مقبولة. ومن المفارقات أن المريض الأصغر قد يتلقى جرعة أعلى في العمق لأن الفوتونات تخترق إلى المركز بسهولة أكبر، وإن كان المريض الأكبر يتلقى عددًا إجماليًا أكبر من الفوتونات.',
         en:'In CT, dose revolves around mAs, kV and pitch. The key relationship is that lowering pitch means more overlap between rotations and repeated passes of the beam over the same tissue, raising dose unless the scanner compensates automatically; conversely, noise-reduction reconstruction methods allow lower-dose scanning at acceptable quality. Paradoxically, a smaller patient may receive a higher central dose because photons penetrate to the centre more easily, even though a larger patient is struck by more photons overall.'}
      ],
      bullets:[
        {ar:'رفع tube current (mA) أو kV أو زمن الدوران، وإيقاف mA modulation الذي يكيف التيار مع حجم المريض', en:'Higher tube current (mA), kV or rotation time, and switching off the mA modulation that adapts current to patient size'},
        {ar:'خفض pitch دون معايرة تعويضية من الجهاز', en:'Reducing pitch without compensating adjustment by the scanner'},
        {ar:'collimation واسع جدًا، أو ضيق جدًا لدرجة تدفع النظام لرفع mAs/kVp تعويضًا عن ضعف الإشارة', en:'Very wide collimation, or collimation so narrow that the system compensates for the lost signal by raising mAs/kVp'},
        {ar:'مدى مسح (scan length) أطول من اللازم', en:'A longer scan range than the clinical question requires'}
      ]},
    { h:{ar:'الطب النووي: النشاط المحقون والتخلص منه', en:'Nuclear medicine: injected activity and clearance'},
      paras:[
        {ar:'هنا لا تأتي الجرعة من جهاز خارجي بل من radiopharmaceutical داخل الجسم، فتحددها كمية النشاط المحقون وخصائص النظير وتوزيعه الحيوي. وبما أن جزءًا كبيرًا من التخلص يكون عبر البول، فإن قلة شرب الماء وتأخر التبول يطيلان بقاء النشاط في المثانة ويرفعان جرعة جدارها والأنسجة المجاورة — لذا تُنصح المرضى بالترطيب الجيد والإفراغ المتكرر بعد الفحص.',
         en:'Here the dose comes not from an external machine but from a radiopharmaceutical inside the body, so it is set by the amount of activity injected, the properties of the isotope and its biodistribution. Because much of the clearance is urinary, poor fluid intake and infrequent voiding keep activity in the bladder longer and raise the dose to its wall and neighbouring tissues — which is why patients are advised to hydrate well and void frequently after the examination.'}
      ],
      bullets:[
        {ar:'زيادة كمية النشاط الإشعاعي المحقون', en:'A larger amount of injected radioactivity'},
        {ar:'اختيار نظير بعمر نصف فعّال أطول أو انبعاثات أكثر إيداعًا للطاقة', en:'An isotope with a longer effective half-life or more energy-depositing emissions'},
        {ar:'قلة شرب السوائل وتأخر إفراغ المثانة فيبطؤ خروج النشاط من الجسم', en:'Low fluid intake and delayed bladder emptying slowing the loss of activity from the body'}
      ]}
  ],
  quiz:[
    { q:{ar:'أي تغيير يرفع جرعة المريض في تصوير عام (radiography)؟', en:'Which change raises patient dose in plain radiography?'},
      opts:[
        {ar:'تضييق collimation على المنطقة المطلوبة', en:'Tightening collimation to the region of interest'},
        {ar:'زيادة tube current (mA) وزمن التعرض', en:'Increasing tube current (mA) and exposure time'},
        {ar:'إضافة filtration للحزمة', en:'Adding filtration to the beam'},
        {ar:'استخدام مستقبِل أكثر حساسية', en:'Using a more sensitive receptor'}
      ], a:1,
      why:{ar:'عدد الفوتونات يتناسب مع mA والزمن، فزيادتهما ترفع الجرعة. أما تضييق الحقل والترشيح وحساسية المستقبِل الأعلى فكلها تخفض الجرعة.',
           en:'Photon number scales with mA and time, so increasing them raises dose. Tight collimation, filtration and a more sensitive receptor all reduce dose.'}},
    { q:{ar:'ما المقصود بفكرة dose spreading في التنظير الفلوري؟', en:'What is the idea behind dose spreading in fluoroscopy?'},
      opts:[
        {ar:'توزيع الجرعة الجلدية بتغيير اتجاه الحزمة ومدخلها بدل تركيزها على بقعة واحدة', en:'Spreading the skin dose by changing the beam angle and entry site instead of concentrating it on one spot'},
        {ar:'زيادة زمن التنظير لتوزيع الصور', en:'Lengthening screening time to spread out the images'},
        {ar:'رفع kVp لتوزيع الطاقة في العمق', en:'Raising kVp to distribute energy at depth'},
        {ar:'استخدام grid لتوزيع الإشعاع المتناثر', en:'Using a grid to spread the scattered radiation'}
      ], a:0,
      why:{ar:'تدوير الحزمة والدخول من زوايا مختلفة يمنعان تراكم الجرعة القصوى على رقعة جلد واحدة، فينخفض خطر الآثار الحتمية الجلدية.',
           en:'Rotating the beam and entering from different angles stops the peak dose accumulating on a single patch of skin, reducing the risk of deterministic skin effects.'}},
    { q:{ar:'عند خفض pitch في فحص CT (دون تعويض تلقائي من الجهاز) ماذا يحدث للجرعة؟', en:'When pitch is reduced in a CT scan (with no automatic compensation by the scanner), what happens to dose?'},
      opts:[
        {ar:'تنخفض لأن المسح ينتهي أسرع', en:'It falls because the scan finishes sooner'},
        {ar:'لا تتأثر إطلاقًا', en:'It is completely unaffected'},
        {ar:'ترتفع لأن الحزمة تمر على الأنسجة نفسها مرات أكثر', en:'It rises because the beam passes over the same tissue more times'},
        {ar:'ترتفع جرعة الجلد فقط وتنخفض جرعة العمق', en:'Skin dose rises but central dose falls'}
      ], a:2,
      why:{ar:'العلاقة عكسية: dose ∝ 1/pitch تقريبًا؛ فخفض pitch يزيد التداخل بين اللفات وتكرار التعرض للنسيج نفسه ما لم يعدّل الجهاز العوامل تلقائيًا.',
           en:'The relationship is roughly inverse, dose ∝ 1/pitch; lowering pitch increases overlap between rotations and repeats exposure of the same tissue unless the scanner adjusts the factors automatically.'}}
  ]
},
{
  slug:'dosimetry-badges',
  chapter:'dose',
  title:{ar:'شارات قياس الجرعة الشخصية', en:'Personal dosimetry badges'},
  intro:{ar:'من يعمل بالقرب من الإشعاع يحتاج دليلًا موضوعيًا على جرعته التراكمية، لا تقديرًا. يستعرض هذا الدرس العائلات الثلاث لأجهزة القياس الشخصية — film badge و thermoluminescent detector (TLD) و electronic dosimeter — وكيف يعمل كل منها، وأين يتفوق وأين يقصّر، لاختيار المناسب للمهمة.',
         en:'Anyone working near radiation needs objective evidence of their cumulative dose, not an estimate. This lesson reviews the three families of personal dosimeters — the film badge, the thermoluminescent detector (TLD) and the electronic dosimeter — how each one works, and where each excels or falls short, so the right device can be matched to the task.'},
  sections:[
    { h:{ar:'لماذا تُرتدى الشارات؟', en:'Why badges are worn'},
      paras:[
        {ar:'الغرض من personal dosimetry مزدوج: التحقق من بقاء جرعات الموظفين دون الحدود القانونية، وتوفير السجل الذي يُبنى عليه قرار تصنيف العامل (classified worker). وتنقسم الأجهزة عمليًا إلى ثلاث عائلات: شارات تعتمد على فيلم فوتوغرافي، وكواشف بلورية تُقرأ بالحرارة، وأجهزة إلكترونية تعطي قراءة فورية.',
         en:'Personal dosimetry serves two purposes: verifying that staff doses stay below legal limits, and providing the record on which worker classification decisions are based. In practice the devices fall into three families: badges based on photographic film, crystal detectors read out by heating, and electronic devices that give an immediate reading.'}
      ],
      bullets:[
        {ar:'Film badge — أقدم التقنيات، تراجعت أمام TLD', en:'Film badge — the oldest technology, largely superseded by TLDs'},
        {ar:'Thermoluminescent detector (TLD) — الأكثر استخدامًا اليوم', en:'Thermoluminescent detector (TLD) — the most widely used today'},
        {ar:'Electronic dosimeter — قراءة مباشرة ولحظية', en:'Electronic dosimeter — direct, real-time readout'}
      ]},
    { h:{ar:'شارة الفيلم Film badge', en:'The film badge'},
      paras:[
        {ar:'تعتمد على فيلم silver halide شبيه بفيلم التصوير التقليدي، يزداد اسوداده بقدر ما امتصّ من إشعاع، وتساعد مرشحات الحامل على التمييز بين طاقات الفوتونات وأنواع الإشعاع. لكن الفيلم يتأثر بمرور الوقت حتى دون تعرض إضافي (fogging)، لذا تُستبدل الشارة شهريًا وتحتاج إلى تحميض وقراءة خارجية تستغرق وقتًا.',
         en:'It relies on a silver halide film similar to traditional photographic film, which darkens in proportion to the radiation it absorbs, while filters in the holder help distinguish photon energies and radiation types. However, the film gradually fogs with time even without further exposure, so badges are exchanged monthly and need external processing and reading, which takes time.'}
      ],
      bullets:[
        {ar:'المزايا: رخيصة، تميّز بين طاقات الفوتونات، تقيس أنواعًا مختلفة من الإشعاع، وتترك سجلًا دائمًا، ودقيقة عمليًا فوق نحو 100 millirem', en:'Advantages: cheap, can distinguish photon energies, can measure different radiation types, leaves a permanent record, and is usefully accurate above about 100 millirem'},
        {ar:'العيوب: يتلفها fogging مع الوقت، غير دقيقة عند الجرعات المنخفضة (دون نحو 20 millirem)، وبطيئة لأنها تحتاج تحميضًا وقراءة', en:'Disadvantages: fogging degrades it over time, it is inaccurate at low doses (below about 20 millirem), and it is slow because it needs processing and reading'}
      ],
      nums:[
        {v:'1 month', ar:'فترة استبدال شارة الفيلم بسبب fogging', en:'Exchange interval of a film badge because of fogging'},
        {v:'>100 mrem', ar:'المدى الذي تكون فيه دقيقة عمليًا', en:'Range over which it is usefully accurate'}
      ]},
    { h:{ar:'كواشف الوميض الحراري TLD', en:'Thermoluminescent detectors (TLDs)'},
      paras:[
        {ar:'الفكرة أن بلورات مثل lithium fluoride و calcium fluoride تخزّن الطاقة الممتصة على هيئة إلكترونات محبوسة في مستويات طاقة داخل البلورة؛ فإذا سُخّن الكاشف تحررت هذه الطاقة وميضًا ضوئيًا تتناسب شدته مع الجرعة الممتصة، ويُقاس الضوء لحساب الجرعة. يُستخدم الكاشف داخل غلافه المزود بمرشحات تصحح اختلاف امتصاص الجلد سطحيًا وعميقًا، وتبقى معايرة بعد القراءة لازمة لضبط الفروق.',
         en:'The idea is that crystals such as lithium fluoride and calcium fluoride store absorbed energy as electrons trapped at energy levels within the crystal; when the detector is heated, this energy is released as visible light whose intensity is proportional to the absorbed dose, and measuring the light gives the dose. The detector is worn in a casing whose filters correct for superficial versus deep absorption in the skin, and post-readout calibration is still needed to correct for differential absorption.'}
      ],
      bullets:[
        {ar:'المزايا: يمكن تصغيرها جدًا لقياس جرعات الأصابع والعين، وقابلة لإعادة الاستخدام بعد القراءة', en:'Advantages: can be made very small for finger and eye doses, and can be reused after readout'},
        {ar:'العيوب: لا تميّز بين أنواع الإشعاع، أغلى من شارة الفيلم، والقراءة تمحو السجل فلا يبقى أثر دائم', en:'Disadvantages: cannot distinguish between radiation types, more expensive than a film badge, and readout erases the record so no permanent trace remains'},
        {ar:'ملاحظة عملية: تختلف فترة الاستبدال بين المؤسسات، وقد يُكتفى بمراقبة مناطق العمل (area monitoring) حيث الجرعات المتوقعة منخفضة', en:'Practical note: exchange intervals vary between institutions, and area monitoring may be used instead of individual monitoring where expected doses are low'}
      ]},
    { h:{ar:'مقياس الجرعة الإلكتروني', en:'The electronic dosimeter'},
      paras:[
        {ar:'النوع الأشهر يستخدم كاشف silicon diode، ويمنح قراءة إلكترونية مباشرة بل لحظية أثناء العمل، فيستطيع مرتديه رؤية جرعته المتراكمة لحظة بلحظة وتنبيه نفسه قبل تجاوز ما خطط له — ميزة لا توفرها أي شارة سلبية تحتاج معالجة لاحقة. حساسيته عالية جدًا تصل إلى قياس 1 µSv تقريبًا، مما يجعله مناسبًا لمراقبة جرعات الموظفات الحوامل بدقة، مقابل كلفة ابتدائية مرتفعة وحاجة إلى استبدال البطارية وفحص سنوي.',
         en:'The commonest type uses a silicon diode detector and gives a direct electronic readout — indeed a live one while working — so the wearer can watch their accumulating dose moment by moment and react before exceeding what was planned, something no passive badge needing later processing can offer. It is extremely sensitive, resolving about 1 µSv, which makes it well suited to monitoring doses to pregnant staff, at the price of a high initial cost and a need for yearly battery replacement and checks.'}
      ],
      nums:[
        {v:'≈1 µSv', ar:'أصغر جرعة يستطيع قياسها تقريبًا، بنحو مئة ضعف حساسية TLD', en:'Smallest dose it can resolve, roughly 100 times more sensitive than a TLD'},
        {v:'1 year', ar:'دورة استبدال البطارية والفحص', en:'Battery replacement and checking interval'}
      ]}
  ],
  quiz:[
    { q:{ar:'كيف تُقرأ جرعة كاشف TLD؟', en:'How is the dose recorded by a TLD read out?'},
      opts:[
        {ar:'بتحميضه كيميائيًا كفيلم فوتوغرافي', en:'By chemically developing it like a photographic film'},
        {ar:'بتسخينه فينبعث ضوء مرئي يتناسب مع الجرعة الممتصة', en:'By heating it so it emits visible light in proportion to the absorbed dose'},
        {ar:'بعرض قراءة إلكترونية فورية على شاشته', en:'By reading an instant electronic display on the device'},
        {ar:'بقياس اسوداد بلورته بالعين المجردة', en:'By judging the darkening of its crystal by eye'}
      ], a:1,
      why:{ar:'التسخين يحرر الطاقة المخزّنة في بلورات مثل LiF على هيئة وميض ضوئي يُقاس لحساب الجرعة، وهذه القراءة نفسها تمحو السجل المخزَّن.',
           en:'Heating releases the energy stored in crystals such as LiF as a flash of light, which is measured to give the dose; that same readout erases the stored record.'}},
    { q:{ar:'أي عيب يرتبط بشارة الفيلم؟', en:'Which drawback belongs to the film badge?'},
      opts:[
        {ar:'لا تترك أي سجل بعد القراءة', en:'It leaves no record after readout'},
        {ar:'تتدهور ب fogging مع الوقت فتُستبدل شهريًا وغير دقيقة عند الجرعات المنخفضة جدًا', en:'It degrades by fogging over time, needs monthly exchange, and is inaccurate at very low doses'},
        {ar:'تحتاج استبدال بطارية سنويًا', en:'It needs an annual battery change'},
        {ar:'لا يمكن تصغيرها لقياسات الأصابع', en:'It cannot be made small for finger measurements'}
      ], a:1,
      why:{ar:'الفيلم يسوَدّ تدريجيًا مع الزمن (fogging) حتى بلا تعرض، لذا عمر الشارة شهر واحد ودقتها ضعيفة دون نحو 20 millirem. امّحاء السجل عيب TLD، والبطارية عيب الجهاز الإلكتروني.',
           en:'Film gradually darkens with time (fogging) even without exposure, so the badge lasts one month and is unreliable below about 20 millirem. Losing the record is a TLD drawback, and batteries belong to electronic devices.'}},
    { q:{ar:'ما الميزة الأبرز لمقياس الجرعة الإلكتروني مقارنة بالشارات السلبية؟', en:'What is the key advantage of an electronic dosimeter over passive badges?'},
      opts:[
        {ar:'أرخص ثمنًا عند الشراء', en:'It is cheaper to buy'},
        {ar:'قراءة مباشرة لحظية وحساسية عالية تصل لنحو 1 µSv', en:'A direct real-time readout with high sensitivity down to about 1 µSv'},
        {ar:'يميّز بين جميع أنواع الإشعاع تلقائيًا', en:'It automatically distinguishes all radiation types'},
        {ar:'لا يحتاج أي صيانة إطلاقًا', en:'It needs no maintenance at all'}
      ], a:1,
      why:{ar:'كاشف silicon diode يعطي قراءة فورية أثناء العمل بحساسية تقارب مئة ضعف TLD، ما يجعله مناسبًا لمراقبة الحوامل — لكنه الأغلى ابتدائيًا ويحتاج بطارية وفحصًا سنويًا.',
           en:'The silicon diode detector gives an instant reading during work with sensitivity around 100 times that of a TLD, suiting pregnancy monitoring — but it has the highest initial cost and needs annual battery replacement and checks.'}}
  ]
},
{
  slug:'radiation-protection',
  chapter:'dose',
  title:{ar:'الحماية من الإشعاع عمليًا', en:'Radiation protection in practice'},
  intro:{ar:'الحماية اليومية في قسم الأشعة تقوم على فهم من أين تأتي جرعة الموظف فعلًا: ليست الحزمة الأولية عادة، بل الإشعاع المتناثر عن جسم المريض. يشرح الدرس أنواع الإشعاع الأولي والثانوي، ثم ثلاثية الوقت والمسافة والتدريع، وحدود معدات الوقاية، والأوضاع الهندسية للأنبوب، واعتبارات الموظفة الحامل.',
         en:'Day-to-day protection in a radiology department rests on understanding where staff dose actually comes from: usually not the primary beam, but radiation scattered from the patient body. This lesson explains primary and secondary radiation, then the trio of time, distance and shielding, the limits of protective equipment, tube geometry configurations, and considerations for pregnant staff.'},
  sections:[
    { h:{ar:'الحزمة الأولية والحزمة الخارجة', en:'Primary beam and exit beam'},
      paras:[
        {ar:'يُقصد بالحزمة الأولية شعاع X قبل أن يلمس أي شيء: قبل المريض والشبكة والطاولة ومكثّف الصورة. أما ما يصل فعليًا إلى الكاشف بعد عبور المريض فيُسمى exit beam؛ لقد ضعف كثيرًا بالتوهين، لكنه في المقابل تعرّض لترشيح شديد أثناء العبور فأصبحت فوتوناته المتبقية أعلى طاقة وأكثر نفاذًا (harder beam).',
         en:'The primary beam is the X-ray beam before it interacts with anything: patient, grid, table or image intensifier. What actually reaches the detector after crossing the patient is the exit beam; it has been heavily attenuated, but in exchange it has also been strongly filtered during its passage, so its surviving photons are of higher energy and more penetrating — a harder beam.'}
      ]},
    { h:{ar:'الإشعاع الثانوي: التسرب والتناثر', en:'Secondary radiation: leakage and scatter'},
      paras:[
        {ar:'للإشعاع الثانوي مصدران. الأول leakage radiation: ما يتسرب من غلاف أنبوب الأشعة نفسه، وهو محدود تنظيميًا بسقف صغير ولا يسهم عمليًا إلا بنصيب ضئيل من جرعة الموظفين. والثاني scattered radiation الناتج عن تفاعلات Compton داخل جسم المريض، وهو — وبفارق كبير — المساهم الأكبر في جرعة العاملين، ولذلك تتمحور الحماية العملية حول تقليله والابتعاد عنه والاحتماء منه.',
         en:'Secondary radiation has two sources. The first is leakage radiation escaping from the X-ray tube housing itself; it is capped by regulation at a low level and in practice contributes very little to staff dose. The second is scattered radiation produced by Compton interactions inside the patient, and it is — by a wide margin — the largest contributor to staff dose, which is why practical protection revolves around reducing it, keeping away from it and shielding against it.'}
      ],
      bullets:[
        {ar:'كمية المتناثر تزيد مع: حجم الحقل، وحجم أنسجة المريض المعرَّضة، وجودة الحزمة الأولية (طاقتها)', en:'Scatter quantity rises with field size, the volume of patient tissue irradiated, and the quality (energy) of the primary beam'},
        {ar:'يرفع kV عدد الفوتونات تقريبًا مع مربع الجهد، ويرفع mA العدد تناسبًا طرديًا مع التيار، ويطيل زمن التعرض عدد الفوتونات تناسبًا مع الزمن', en:'Raising kV increases photon number roughly with the square of the voltage, raising mA increases it in direct proportion to current, and longer exposure time increases it in proportion to time'},
        {ar:'الاتجاه مهم: المتناثر أقل في جهة خروج الحزمة (exit side) لأنه عبر المريض وتوهّن، وأعلى في جهة الأنبوب — أي إن للتناثر توزعًا زاويًا يجب مراعاته عند الوقوف', en:'Direction matters: scatter is lower on the exit side of the patient because it has crossed and been attenuated by the body, and higher on the tube side — scatter has an angular distribution that should guide where you stand'}
      ],
      nums:[
        {v:'1 mGy/h at 1 m', ar:'الحد الأقصى لإشعاع التسرب من غلاف الأنبوب على بعد متر من البؤرة', en:'Maximum leakage radiation from the tube housing at 1 metre from the focus'}
      ]},
    { h:{ar:'الوقت والمسافة والتدريع', en:'Time, distance and shielding'},
      paras:[
        {ar:'ثلاث وسائل بسيطة تخفض الجرعة قبل أي تقنية معقدة: تقليل زمن التعرض، والابتعاد عن المصدر — إذ تهبط الجرعة مع مربع المسافة وفق inverse square law — والاحتماء بحاجز ماص. وأثناء الاكتساب لا يبقى في الغرفة إلا من لا غنى عنه، وكلهم خلف حماية مناسبة.',
         en:'Three simple measures cut dose before any complex technology: minimising exposure time, stepping back from the source — dose falls with the square of the distance by the inverse square law — and sheltering behind an absorbing barrier. During acquisition only essential personnel remain in the room, and all of them are shielded.'},
        {ar:'تصميم الغرفة جزء من المنظومة: تُدرَّع الغرف المزدحمة عادة بجدران خرسانية بسماكة نحو 150 mm أو بألواح رصاص بنحو 2.0 mm مكافئ، بحيث لا يتجاوز ما يصل إلى أي شخص مارّ بالخارج 0.3 mSv. وتُبنى منطقة التحكم بحيث تكون الجرعات خلفها منخفضة لدرجة لا يحتاج معها الموظف حماية إضافية، وتُستخدم شاشات واقية معلقة بالسقف أو مثبتة بالطاولة أو متحركة بمكافئ رصاصي يقارب 0.5 mm Pb.',
         en:'Room design is part of the system: busy X-ray rooms are typically shielded with about 150 mm of concrete or roughly 2.0 mm lead-equivalent boarding, so that a member of the public passing outside receives no more than 0.3 mSv. The control area is built so that doses behind it are low enough that staff need no extra protective equipment, and ceiling-mounted, table-mounted or mobile protective screens of around 0.5 mm Pb equivalence are used at the table side.'}
      ],
      nums:[
        {v:'0.3 mSv', ar:'سقف ما قد يتلقاه شخص من الجمهور خارج غرفة أشعة مزدحمة', en:'Ceiling on what a member of the public outside a busy X-ray room should receive'},
        {v:'150 mm concrete / 2.0 mm Pb', ar:'تدريع نموذجي لجدران غرفة أشعة مزدحمة', en:'Typical wall shielding for a busy X-ray room'}
      ]},
    { h:{ar:'معدات الوقاية الشخصية وحدودها', en:'Personal protective equipment and its limits'},
      paras:[
        {ar:'صُممت معدات الرصاص لمواجهة الإشعاع المتناثر منخفض الطاقة نسبيًا، وهي لا تحمي من الحزمة الأولية — وهذه نقطة جوهرية. وللسبب نفسه تُثنى القفازات الرصاصية عن الاستخدام أحيانًا: دخول يد مرتدية قفازًا رصاصيًا في الحزمة الأولية قد يخدع نظام التحكم التلقائي بالتعرض فيرفع عوامل التعرض، فتزيد جرعة المريض والموظف معًا. وتحدد القواعد المحلية (local rules) المعدات المناسبة لكل مهمة.',
         en:'Lead equipment is designed against the relatively low-energy scattered radiation and gives no protection against the primary beam — a crucial point. For a related reason lead gloves are sometimes discouraged: a gloved hand entering the primary beam can fool the automatic exposure control into raising the exposure factors, increasing dose to both patient and staff. Local rules specify the appropriate equipment for each task.'},
        {ar:'هندسة الجهاز تفرق أيضًا: في وضع overcouch يكون الأنبوب فوق المريض والحزمة نازلة، فيتناثر الإشعاع صعودًا نحو جسد المشغّل العلوي فيتعرض أكثر. أما undercouch فيجلس الأنبوب تحت الطاولة ويقترب مكثّف الصورة من المريض من الأعلى فيعمل حاجبًا جزئيًا، فتنخفض جرعة الموظفين إلى نحو عُشر ما هي عليه في الوضع الأول — ومن هنا أهمية توجيه أنبوب C-arm بعيدًا عن المشغّل في المناظر المائلة.',
         en:'Equipment geometry also matters: in an overcouch configuration the tube sits above the patient with the beam pointing down, so scatter is thrown upward toward the operator upper body and exposure is higher. In an undercouch configuration the tube is below the table and the image intensifier sits close above the patient, acting as partial shielding, so staff dose drops to about a tenth of the overcouch value — hence the care needed to angle a C-arm tube away from the operator in oblique views.'}
      ],
      table:{head:[{ar:'وسيلة الحماية', en:'Protective item'}, {ar:'المكافئ الرصاصي المعتاد', en:'Usual lead equivalence'}],
        rows:[
          [{ar:'مئزر رصاصي', en:'Lead apron'}, {ar:'0.25 mm Pb عند 100 kV — و 0.35 mm عند 150 kV', en:'0.25 mm Pb at 100 kV — 0.35 mm at 150 kV'}],
          [{ar:'واقي الغدة الدرقية', en:'Thyroid shield'}, {ar:'0.5 mm Pb', en:'0.5 mm Pb'}],
          [{ar:'نظارات رصاصية', en:'Lead glasses'}, {ar:'نحو 0.25 mm Pb', en:'About 0.25 mm Pb'}],
          [{ar:'قفازات رصاصية', en:'Lead gloves'}, {ar:'0.25 mm، والحديثة 0.5–1.0 mm', en:'0.25 mm, with modern gloves at 0.5–1.0 mm'}]
        ]},
      nums:[
        {v:'×10', ar:'انخفاض جرعة الموظفين في وضع undercouch مقارنة بـ overcouch', en:'Reduction in staff dose for undercouch versus overcouch configuration'}
      ]},
    { h:{ar:'الموظفة الحامل والرضاعة', en:'Pregnant staff and breastfeeding'},
      paras:[
        {ar:'متى أُعلن الحمل يُجري صاحب العمل تقييم مخاطر للتأكد من احترام الحدود: لا تتجاوز جرعة الجنين 1 mSv طوال مدة الحمل المعلنة، وهو ما يقابله عمليًا سقف بنحو 2 mSv لجرعة بطن الموظفة الحامل. ولا تلزم احتياطات إضافية بسبب الرضاعة إلا عند العمل في أقسام الطب النووي حيث تتعامل الموظفة مع مواد مشعة قد تُفرز في الحليب.',
         en:'Once pregnancy is declared, the employer carries out a risk assessment to ensure the limits are respected: the fetal dose must not exceed 1 mSv over the declared pregnancy, which in practice corresponds to a ceiling of about 2 mSv to the abdomen of the pregnant employee. Breastfeeding needs no extra precautions except when working in nuclear medicine departments, where staff handle radioactive materials that can be excreted in milk.'}
      ],
      nums:[
        {v:'1 mSv', ar:'حد جرعة الجنين طوال الحمل المعلن', en:'Fetal dose limit over the declared pregnancy'},
        {v:'≈2 mSv', ar:'ما يقابله تقريبًا كحد لجرعة بطن الموظفة الحامل', en:'Practical equivalent ceiling for the dose to the pregnant employee abdomen'}
      ]}
  ],
  quiz:[
    { q:{ar:'ما المصدر الأكبر لجرعة الإشعاع التي يتلقاها الموظفون في غرفة الأشعة؟', en:'What is the largest source of radiation dose to staff in an X-ray room?'},
      opts:[
        {ar:'التسرب من غلاف الأنبوب (leakage)', en:'Leakage from the tube housing'},
        {ar:'الحزمة الأولية قبل وصولها للمريض', en:'The primary beam before it reaches the patient'},
        {ar:'الإشعاع المتناثر عن جسم المريض (scatter)', en:'Radiation scattered from the patient body'},
        {ar:'الحزمة الخارجة الواصلة للكاشف', en:'The exit beam reaching the detector'}
      ], a:2,
      why:{ar:'المتناثر الناتج عن Compton داخل المريض هو المساهم الأكبر بفارق واضح؛ فالتسرب محدود بنحو 1 mGy/h على بعد متر ولا يعتد به عمليًا، والموظفون لا يقفون في الحزمة الأولية.',
           en:'Scatter produced by Compton interactions inside the patient is by far the largest contributor; leakage is capped at about 1 mGy/h at 1 m and is practically negligible, and staff do not stand in the primary beam.'}},
    { q:{ar:'كيف تتغير جرعة الموظف بين وضعي overcouch و undercouch؟', en:'How does staff dose compare between overcouch and undercouch configurations?'},
      opts:[
        {ar:'متساوية في الوضعين', en:'Identical in both'},
        {ar:'في undercouch نحو عُشر جرعة overcouch', en:'Undercouch gives about a tenth of the overcouch dose'},
        {ar:'في undercouch عشرة أضعاف overcouch', en:'Undercouch gives ten times the overcouch dose'},
        {ar:'في overcouch تنعدم الجرعة تمامًا', en:'Overcouch gives no dose at all'}
      ], a:1,
      why:{ar:'عندما يكون الأنبوب تحت الطاولة والمكثّف قريبًا فوق المريض يعمل المكثّف حاجبًا جزئيًا ويبتعد التناثر عن جسد المشغّل، فتهبط جرعته إلى نحو العُشر.',
           en:'With the tube under the table and the intensifier close above the patient, the intensifier acts as partial shielding and scatter is directed away from the operator, cutting staff dose to roughly a tenth.'}},
    { q:{ar:'لماذا قد تكون القفازات الرصاصية ضارة أحيانًا رغم أنها «حماية»؟', en:'Why can lead gloves sometimes be harmful despite being protective equipment?'},
      opts:[
        {ar:'لأنها تزيد التناثر داخل المريض', en:'Because they increase scatter inside the patient'},
        {ar:'لأن دخولها في الحزمة الأولية قد يدفع نظام التعرض التلقائي لرفع العوامل فتزيد جرعة المريض والموظف', en:'Because entering the primary beam they can make the automatic exposure control raise the factors, increasing dose to patient and staff'},
        {ar:'لأنها تحجب صورة اليد عن الشاشة فقط', en:'Because they only hide the hand image on the screen'},
        {ar:'لأن مكافئها الرصاصي أعلى من المئزر', en:'Because their lead equivalence exceeds that of the apron'}
      ], a:1,
      why:{ar:'معدات الرصاص مصممة ضد المتناثر لا الحزمة الأولية؛ فإذا دخل قفاز في الحزمة ظنّ النظام أن المريض أكثر سماكة فرفع التعرض، فارتفعت الجرعة على الجميع.',
           en:'Lead equipment is designed against scatter, not the primary beam; if a glove enters the beam the system behaves as if the patient were thicker and raises the exposure, increasing dose to everyone.'}}
  ]
},
{
  slug:'legislation',
  chapter:'dose',
  title:{ar:'التشريعات وحدود الجرعة', en:'Legislation and dose limits'},
  intro:{ar:'تُدار السلامة الإشعاعية في المملكة المتحدة عبر إطارين متكاملين: أحدهما يحمي العاملين والجمهور في أماكن العمل، والآخر ينظم تعريض المرضى طبيًا. يقدّم هذا الدرس الخطوط العريضة لهذا الإطار البريطاني — كونه مرجع المنهج — مع حدود الجرعة السنوية وقواعد تصنيف العمال والمناطق، وهي أرقام ومبادئ تتشابه روحها في أغلب الأنظمة الوطنية.',
         en:'In the United Kingdom, radiation safety is governed by two complementary frameworks: one protecting employees and the public in workplaces, and another regulating medical exposures of patients. This lesson outlines that UK framework — the reference system for this curriculum — together with annual dose limits and the rules for classifying workers and areas, numbers and principles whose spirit is mirrored in most national systems.'},
  sections:[
    { h:{ar:'إطاران: حماية العاملين وحماية المرضى', en:'Two frameworks: protecting workers and protecting patients'},
      paras:[
        {ar:'لائحة الإشعاع المؤين IRR17 (الصادرة عام 2017 ضمن قانون الصحة والسلامة في العمل) معنية بتقليل تعرض الموظفين والجمهور في بيئة العمل، وتشرف على إنفاذها هيئة الصحة والسلامة HSE. أما لائحة التعرضات الطبية IR(ME)R 2017 فتنظم كل تعرض طبي للمرضى — تشخيصيًا كان أو علاجيًا — وتوزع المسؤوليات بين المحيل (referrer) والممارس المبرِّر (practitioner) والمشغّل (operator).',
         en:'The Ionising Radiations Regulations 2017 (IRR17), made under the Health and Safety at Work Act, aim to minimise exposure of employees and the public in the workplace and are enforced by the Health and Safety Executive (HSE). The Ionising Radiation (Medical Exposure) Regulations 2017, IR(ME)R, govern all medical exposures of patients — diagnostic or therapeutic — and split responsibilities between the referrer, the justifying practitioner and the operator.'}
      ],
      table:{head:[{ar:'الإطار', en:'Framework'}, {ar:'يحمي أساسًا', en:'Primarily protects'}, {ar:'مجاله', en:'Its scope'}],
        rows:[
          [{ar:'IRR17', en:'IRR17'}, {ar:'الموظفون والجمهور', en:'Employees and the public'}, {ar:'العمل مع الإشعاع في أي مكان عمل', en:'Work with radiation in any workplace'}],
          [{ar:'IR(ME)R 2017', en:'IR(ME)R 2017'}, {ar:'المرضى', en:'Patients'}, {ar:'التعرضات الطبية وغير الطبية للناس بقصد التصوير', en:'Medical exposures, and imaging exposures of people for non-medical purposes'}]
        ]}},
    { h:{ar:'مبادئ IR(ME)R: التبرير والتحسين', en:'IR(ME)R principles: justification and optimisation'},
      paras:[
        {ar:'يقوم تنظيم التعرض الطبي على ركيزتين: لا تعرض دون تبرير (justification) بأن تفوق فائدته المتوقعة ضرره المحتمل لدى هذا المريض بعينه، ثم التحسين (optimisation) بأن تُبقى الجرعة عند أدنى مستوى معقول عمليًا — روح مبدأ ALARP — مع الحفاظ على القيمة التشخيصية للفحص. ويضاف إليها توثيق الإجراءات وكفاءة العاملين وتقييم الجرعات مقارنة بالمستويات المرجعية.',
         en:'Medical exposure control rests on two pillars: no exposure without justification, meaning its expected benefit to this particular patient must outweigh its potential detriment, and then optimisation, meaning dose is kept as low as reasonably practicable — the spirit of ALARP — while preserving the diagnostic value of the examination. Documented procedures, trained entitled staff and dose evaluation against reference levels complete the picture.'}
      ],
      bullets:[
        {ar:'المحيل (referrer) يقدم المعلومات السريرية التي تبرر الفحص', en:'The referrer supplies the clinical information that justifies the examination'},
        {ar:'الممارس (practitioner) يقرر تبرير التعرض ويتحمل مسؤوليته', en:'The practitioner justifies the exposure and carries responsibility for it'},
        {ar:'المشغّل (operator) ينفذ التعرض عمليًا ويحسّن عوامل التصوير', en:'The operator carries out the practical aspects and optimises the exposure factors'},
        {ar:'مستويات الجرعة المرجعية التشخيصية (DRLs) أدوات مراجعة لا حدود فردية: تجاوزها الاعتيادي يستدعي التحقيق والتحسين', en:'Diagnostic reference levels (DRLs) are review tools, not individual limits: routinely exceeding them triggers investigation and optimisation'},
        {ar:'صاحب العمل (employer) مسؤول عن وضع الإجراءات المكتوبة والبروتوكولات وتفويض الأدوار وضمان التدريب', en:'The employer is responsible for written procedures and protocols, entitlement of duty holders, and ensuring training'},
        {ar:'خبير الفيزياء الطبية (Medical Physics Expert, MPE) يقدم المشورة في قياس الجرعات وتحسين التعرض وضمان جودة المعدات والامتثال', en:'The Medical Physics Expert (MPE) advises on dosimetry, optimisation of exposures, equipment quality assurance and compliance'}
      ]},
    { h:{ar:'حدود الجرعة السنوية', en:'Annual dose limits'},
      paras:[
        {ar:'تضع IRR17 سقوفًا ملزمة لا يجوز تجاوزها: للعامل البالغ حد سنوي للجرعة الفعّالة مع مرونة موزعة على خمس سنوات، وللجمهور حد أشد انخفاضًا بكثير لأنهم لا يختارون التعرض ولا يستفيدون منه مباشرة. وللأنسجة المعرضة موضعيًا — عدسة العين والجلد والأطراف — حدود للجرعة المكافئة تُراعى خاصة في العمل التداخلي حيث تقترب الأيدي والعيون من المتناثر.',
         en:'IRR17 sets binding ceilings that must not be exceeded: an annual effective dose limit for adult employees with some flexibility spread over five years, and a far lower limit for the public, who neither choose the exposure nor benefit from it directly. Locally exposed tissues — the lens of the eye, skin and extremities — have equivalent dose limits that matter particularly in interventional work, where hands and eyes come close to the scatter.'}
      ],
      table:{head:[{ar:'الحد السنوي', en:'Annual limit'}, {ar:'عامل بالغ', en:'Adult employee'}, {ar:'متدرب دون 18', en:'Trainee under 18'}, {ar:'شخص آخر / الجمهور', en:'Any other person / public'}],
        rows:[
          [{ar:'Effective dose', en:'Effective dose'}, {ar:'20 mSv (وبحد أقصى 100 mSv في خمس سنوات متتالية و 50 mSv في أي سنة واحدة)', en:'20 mSv (max 100 mSv in five consecutive years, 50 mSv in any single year)'}, {ar:'6 mSv', en:'6 mSv'}, {ar:'1 mSv', en:'1 mSv'}],
          [{ar:'عدسة العين (equivalent dose)', en:'Lens of the eye (equivalent dose)'}, {ar:'20 mSv', en:'20 mSv'}, {ar:'15 mSv', en:'15 mSv'}, {ar:'15 mSv', en:'15 mSv'}],
          [{ar:'الجلد والأطراف (equivalent dose)', en:'Skin and extremities (equivalent dose)'}, {ar:'500 mSv', en:'500 mSv'}, {ar:'150 mSv', en:'150 mSv'}, {ar:'50 mSv', en:'50 mSv'}]
        ]},
      nums:[
        {v:'20 mSv/yr', ar:'حد الجرعة الفعّالة السنوي للعاملين البالغين', en:'Annual effective dose limit for adult employees'},
        {v:'1 mSv/yr', ar:'حد الجرعة الفعّالة السنوي لأفراد الجمهور', en:'Annual effective dose limit for members of the public'},
        {v:'5 mSv', ar:'قيد جرعة لمرافقي المرضى ومعينيهم (comforters and carers) للتعرض الواحد عادة', en:'Dose constraint for comforters and carers, typically per exposure episode'}
      ]},
    { h:{ar:'العمال المصنّفون والمناطق المراقَبة', en:'Classified workers and designated areas'},
      paras:[
        {ar:'ليس كل عامل مراقبًا بالدرجة نفسها. فمن يرجح أن تتجاوز جرعته الفعّالة 6 mSv في السنة — أي ثلاثة أعشار الحد — أو أن تتجاوز جرعته المكافئة لعدسة العين أو الجلد أو الأطراف ثلاثة أعشار حدها، يُصنَّف عاملًا مصنّفًا (classified worker) فيخضع لمراقبة جرعات فردية منهجية وسجلات صحية. وبالمثل تُسمّى المناطق: فالمنطقة الخاضعة للرقابة (controlled area) هي التي قد تتجاوز فيها الجرعات هذه العتبات نفسها أو تتجاوز فيها معدلات الجرعة قيمًا محددة كمتوسط يوم العمل، فلا يدخلها إلا المصرح لهم ووفق قواعد مكتوبة؛ والمنطقة المراقَبة (supervised area) أخف درجة، لمن قد يتجاوز 1 mSv سنويًا أو عُشر أي حد مكافئ.',
         en:'Not every worker is monitored to the same degree. Anyone likely to receive an effective dose above 6 mSv in a year — three-tenths of the limit — or an equivalent dose to lens, skin or extremities above three-tenths of its limit, is designated a classified worker, subject to systematic individual dose monitoring and health records. Areas are designated in parallel: a controlled area is one where those same dose thresholds could be exceeded, or where dose rates averaged over the working day pass set values, so entry is restricted to authorised people working to written procedures; a supervised area is the lesser designation, for places where doses might exceed 1 mSv per year or one-tenth of an equivalent-dose limit.'}
      ],
      nums:[
        {v:'6 mSv/yr', ar:'عتبة تصنيف العامل (ثلاثة أعشار حد الجرعة الفعّالة)', en:'Classification threshold for a worker (three-tenths of the effective dose limit)'},
        {v:'1 mSv/yr', ar:'عتبة تسمية المنطقة المراقَبة (supervised area)', en:'Threshold for designating a supervised area'},
        {v:'1 mSv', ar:'حد جرعة الجنين لبقية الحمل بعد إعلانه', en:'Fetal dose limit for the remainder of a declared pregnancy'}
      ]},
    { h:{ar:'أدوار IRR17 والإبلاغ والطب النووي', en:'IRR17 roles, incident reporting and nuclear medicine rules'},
      paras:[
        {ar:'في إطار IRR17 يعيّن صاحب العمل مستشار حماية من الإشعاع (Radiation Protection Adviser, RPA) يقدم المشورة المتخصصة عن تقييم المخاطر وتصنيف المناطق وخطط الطوارئ، ومشرف حماية من الإشعاع (Radiation Protection Supervisor, RPS) في كل قسم يضمن الالتزام اليومي بالقواعد المحلية المكتوبة. ويسبق أي عمل إشعاعي تقييم مكتوب للمخاطر (risk assessment) يحدد الأخطار المتوقعة وإجراءات الحد منها، وعلى الموظفين واجب حماية أنفسهم والآخرين وارتداء مقاييس الجرعة والإبلاغ الفوري عن أي خلل أو حادثة.',
         en:'Under IRR17 the employer appoints a Radiation Protection Adviser (RPA), who gives expert advice on risk assessments, area designation and contingency plans, and a Radiation Protection Supervisor (RPS) in each department, who ensures day-to-day compliance with the written local rules. Any work with radiation is preceded by a written risk assessment identifying foreseeable hazards and the steps that control them, and employees must protect themselves and others, wear their dosemeters, and report defects or incidents promptly.'},
        {ar:'وتُلزم اللوائح بالإبلاغ عن التعرضات الزائدة والحوادث: فالتعرض العرضي (accidental) أو غير المقصود (unintended) للمريض — كأن يتعرض الشخص الخطأ أو بجرعة تفوق المقصودة بكثير — يُوثق ويُحقق فيه ويُبلَّغ للجهة المنفذة عند تجاوز عتبات محددة بحسب نوع الإجراء. ولأقسام الطب النووي قواعد إضافية: تراخيص خاصة لإعطاء المواد المشعة للأشخاص، وتصاريح بيئية لخزن المواد المشعة والتخلص منها مع تتبع كمياتها، وقواعد لنقل المواد المشعة برًا بوصفها بضائع خطرة.',
         en:'The regulations also require significant exposures and incidents to be reported: an accidental or unintended exposure of a patient — the wrong person exposed, or a dose much greater than intended — is documented, investigated and notified to the enforcing authority when set thresholds for the type of procedure are exceeded. Nuclear medicine departments follow additional rules: specific licences for administering radioactive substances to people, environmental permits covering storage and disposal of radioactive material with full accounting of quantities, and dangerous-goods rules for transporting radioactive material by road.'}
      ]}
  ],
  quiz:[
    { q:{ar:'ما حد الجرعة الفعّالة السنوي لأفراد الجمهور في الإطار البريطاني؟', en:'What is the annual effective dose limit for members of the public in the UK framework?'},
      opts:[
        {ar:'20 mSv', en:'20 mSv'},
        {ar:'6 mSv', en:'6 mSv'},
        {ar:'1 mSv', en:'1 mSv'},
        {ar:'0.3 mSv', en:'0.3 mSv'}
      ], a:2,
      why:{ar:'حد الجمهور 1 mSv سنويًا؛ أما 20 mSv فحد العاملين البالغين، و 6 mSv حد المتدربين دون الثامنة عشرة وهو أيضًا عتبة تصنيف العمال.',
           en:'The public limit is 1 mSv per year; 20 mSv is the adult employee limit, and 6 mSv is both the limit for trainees under 18 and the worker classification threshold.'}},
    { q:{ar:'متى يُصنَّف العامل على أنه classified worker؟', en:'When is a worker designated a classified worker?'},
      opts:[
        {ar:'عند أي تعرض مهما صغُر', en:'After any exposure, however small'},
        {ar:'إذا رجح أن تتجاوز جرعته الفعّالة 6 mSv سنويًا أو ثلاثة أعشار أي حد للجرعة المكافئة', en:'If their effective dose is likely to exceed 6 mSv per year, or three-tenths of any equivalent-dose limit'},
        {ar:'إذا عمل في الطب النووي حصرًا', en:'Only if they work in nuclear medicine'},
        {ar:'بعد عشر سنوات من العمل مع الإشعاع', en:'After ten years of working with radiation'}
      ], a:1,
      why:{ar:'عتبة التصنيف هي ثلاثة أعشار الحدود: 6 mSv جرعة فعّالة سنويًا، أو ما يقابلها من حدود العدسة والجلد والأطراف — ويترتب على التصنيف مراقبة فردية منهجية وسجل صحي.',
           en:'The classification threshold is three-tenths of the limits: 6 mSv effective dose per year, or the corresponding fractions of the lens, skin and extremity limits — classification brings systematic individual monitoring and a health record.'}},
    { q:{ar:'أي لائحة بريطانية تنظم تعريض المرضى للإشعاع طبيًا؟', en:'Which UK regulation governs medical exposures of patients to radiation?'},
      opts:[
        {ar:'IRR17', en:'IRR17'},
        {ar:'IR(ME)R 2017', en:'IR(ME)R 2017'},
        {ar:'قانون المصانع', en:'The Factories Act'},
        {ar:'لائحة سلامة MRI', en:'The MRI safety regulations'}
      ], a:1,
      why:{ar:'IR(ME)R 2017 خاصة بالتعرضات الطبية وتقوم على التبرير والتحسين وتوزيع أدوار المحيل والممارس والمشغّل؛ أما IRR17 فتحمي العاملين والجمهور في أماكن العمل.',
           en:'IR(ME)R 2017 covers medical exposures and is built on justification, optimisation and the referrer–practitioner–operator roles; IRR17 protects employees and the public in workplaces.'}}
  ]
}
];
