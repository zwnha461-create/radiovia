export const LESSONS = [
{
  slug:'interaction-with-matter', chapter:'xray',
  title:{ar:'تفاعل الأشعة مع المادة', en:'Interaction with Matter'},
  intro:{
    ar:'عندما تعبر حزمة الأشعة السينية جسم المريض فإن شدتها تتناقص تدريجيًا بسبب امتصاص الفوتونات وتشتتها داخل الأنسجة. هذا التناقص، المسمى التوهين (Attenuation)، هو الأساس الفيزيائي الذي تتكون منه تباينات الصورة، ويحكمه تفاعلان رئيسيان هما التأثير الكهروضوئي (Photoelectric effect) وتأثير كومبتون (Compton effect).',
    en:'As an X-ray beam passes through the patient its intensity falls progressively because photons are absorbed and scattered within the tissues. This reduction, called attenuation, is the physical basis of image contrast, and it is governed mainly by two interactions: the photoelectric effect and the Compton effect.'},
  sections:[
    { h:{ar:'التوهين والاضمحلال الأسي', en:'Attenuation and the exponential law'},
      paras:[
        {ar:'يتناقص عدد الفوتونات في الحزمة كلما اخترقت عمقًا أكبر من المادة، ويتبع هذا التناقص قانونًا أسيًا: فكل طبقة متساوية السماكة تمتص النسبة نفسها من الفوتونات الواصلة إليها، وليس العدد نفسه. ونتيجة لذلك تقترب شدة الحزمة من الصفر لكنها لا تصل إليه أبدًا مهما زادت السماكة.',
         en:'The number of photons in the beam falls as it penetrates deeper into matter, following an exponential law: each successive layer of equal thickness removes the same fraction of the photons reaching it, not the same number. As a result the beam intensity approaches zero but never actually reaches it, however thick the material becomes.'},
        {ar:'تصف المعادلة I = I₀ e^(−μx) هذا السلوك، حيث I₀ هي الشدة الابتدائية وx هي السماكة وμ هو معامل التوهين الخطي (Linear attenuation coefficient) الذي يعتمد على نوع المادة وطاقة الفوتون. وكلما كبرت قيمة μ كان التوهين أسرع واختراق الحزمة أضعف.',
         en:'The equation I = I₀ e^(−μx) describes this behaviour, where I₀ is the initial intensity, x is the thickness and μ is the linear attenuation coefficient, which depends on the material and the photon energy. The larger μ is, the faster the attenuation and the less penetrating the beam.'}
      ]},
    { h:{ar:'طبقة نصف القيمة ومعاملات التوهين', en:'Half value layer and attenuation coefficients'},
      paras:[
        {ar:'تُقاس قدرة الحزمة على الاختراق عمليًا بطبقة نصف القيمة (Half Value Layer, HVL)، وهي سماكة المادة التي تخفض شدة الحزمة إلى النصف. وبعد مرور الحزمة بعدد n من طبقات نصف القيمة تصبح شدتها أصغر بمعامل 2^n، فبعد طبقتين تبقى ربع الشدة وبعد ثلاث طبقات يبقى ثمنها فقط.',
         en:'Penetrating power is measured practically by the half value layer (HVL), the thickness of material that reduces the beam intensity to one half. After passing through n half value layers the intensity is reduced by a factor of 2^n, so two HVLs leave one quarter of the intensity and three leave only one eighth.'},
        {ar:'أما معامل التوهين الكتلي (Mass attenuation coefficient) فهو μ مقسومًا على كثافة المادة، وهو لا يعتمد على الحالة الفيزيائية للمادة ولا على كثافتها، بل يعتمد فقط على عددها الذري وطاقة الفوتونات. وهناك محذوران عند قياس HVL: فالحزمة العريضة تزيد القيمة المقاسة بسبب الفوتونات المتشتتة التي تصل إلى الكاشف، والحزمة غير المتجانسة تتصلب (Beam hardening) أثناء عبورها لأن فوتوناتها المنخفضة الطاقة تُمتَص أولًا، فتزداد HVL كلما توغلت الحزمة أكثر.',
         en:'The mass attenuation coefficient is μ divided by the density of the material; it does not depend on the physical state or density of the material, only on its atomic number and the photon energy. Two effects distort HVL measurements: a wide beam raises the measured HVL because scattered photons also reach the detector, and a heterogeneous beam hardens as it travels because its low-energy photons are absorbed first, so the HVL increases with depth.'}
      ],
      nums:[
        {v:'50%', ar:'نسبة الشدة المتبقية بعد طبقة نصف قيمة واحدة', en:'Intensity remaining after one HVL'},
        {v:'2^n', ar:'معامل خفض الشدة بعد n من طبقات نصف القيمة', en:'Reduction factor after n half value layers'}
      ]},
    { h:{ar:'التأثير الكهروضوئي', en:'The photoelectric effect'},
      paras:[
        {ar:'في التأثير الكهروضوئي يصطدم الفوتون بإلكترون في غلاف داخلي من أغلفة الذرة وينقل إليه طاقته كاملة، فيختفي الفوتون تمامًا وينطلق الإلكترون من الذرة. ثم يمتلئ الفراغ الناتج بإلكترون من غلاف خارجي، وتنطلق الطاقة الفائضة على شكل إشعاع مميز (Characteristic radiation).',
         en:'In the photoelectric effect the photon strikes an electron in an inner shell of the atom and transfers all of its energy to it, so the photon disappears completely and the electron is ejected. The resulting vacancy is filled by an electron from an outer shell, and the excess energy is released as characteristic radiation.'},
        {ar:'يزداد احتمال هذا التفاعل بقوة مع زيادة العدد الذري للمادة (تقريبًا مع مكعب العدد الذري Z³) ويتناقص بسرعة مع زيادة طاقة الفوتون، ولذلك يهيمن عند الطاقات المنخفضة وفي المواد عالية العدد الذري مثل اليود والرصاص والعظم. وهو المسؤول الرئيسي عن التباين الجيد في الصور وعن فائدة مواد التباين، لكنه يرفع أيضًا جرعة المريض لأنه امتصاص كامل للطاقة. وعندما تتجاوز طاقة الفوتون طاقة ربط الغلاف K يحدث قفز مفاجئ في الاحتمال يسمى حافة الامتصاص (Absorption edge).',
         en:'The probability of this interaction rises steeply with the atomic number of the material (roughly with Z cubed) and falls rapidly as photon energy increases, so it dominates at low energies and in high-Z materials such as iodine, lead and bone. It is largely responsible for good image contrast and for the usefulness of contrast media, but it also raises patient dose because the energy is fully absorbed. When the photon energy just exceeds the binding energy of the K shell, the probability jumps abruptly at the absorption edge.'}
      ]},
    { h:{ar:'تأثير كومبتون', en:'The Compton effect'},
      paras:[
        {ar:'في تأثير كومبتون يصطدم الفوتون بإلكترون حر أو بإلكترون في غلاف خارجي ضعيف الارتباط، فينقل إليه جزءًا فقط من طاقته ويتشتت هو نفسه في اتجاه جديد بطاقة أقل. ولأن الإلكترونات الخارجية موجودة بأعداد متقاربة في معظم المواد، يعتمد احتمال هذا التفاعل على كثافة الإلكترونات والكثافة الفيزيائية للمادة، ولا يعتمد عمليًا على العدد الذري.',
         en:'In the Compton effect the photon collides with a free or loosely bound outer-shell electron, transfers only part of its energy to it, and is itself scattered in a new direction with reduced energy. Because outer electrons are present in similar numbers in most materials, the probability of this interaction depends on electron density and the physical density of the material, and is practically independent of atomic number.'},
        {ar:'يهيمن تأثير كومبتون عند الطاقات العالية وفي المواد منخفضة الكثافة مثل الهواء والماء والأنسجة الرخوة، وهو المصدر الرئيسي للإشعاع المتشتت (Scatter) الذي يصل إلى الكاشف فيقلل تباين الصورة ويعرض العاملين للإشعاع. ويتساوى احتمال التفاعلين عند طاقات محددة تختلف باختلاف المادة: فنحو 30 keV للهواء والماء والأنسجة، ونحو 50 keV للألمنيوم والعظم، ونحو 300 keV لليود والباريوم، ونحو 500 keV للرصاص.',
         en:'The Compton effect dominates at high energies and in low-density materials such as air, water and soft tissues, and it is the main source of scattered radiation, which reaches the detector, degrades image contrast and contributes to staff dose. The two effects are equally likely at specific energies that vary with the material: about 30 keV for air, water and tissue, about 50 keV for aluminium and bone, about 300 keV for iodine and barium, and about 500 keV for lead.'}
      ],
      table:{
        head:[{ar:'وجه المقارنة',en:'Feature'},{ar:'التأثير الكهروضوئي',en:'Photoelectric effect'},{ar:'تأثير كومبتون',en:'Compton effect'}],
        rows:[
          [{ar:'الإلكترون المستهدف',en:'Target electron'},{ar:'إلكترون غلاف داخلي',en:'Inner-shell electron'},{ar:'إلكترون حر أو خارجي',en:'Free or outer-shell electron'}],
          [{ar:'انتقال الطاقة',en:'Energy transfer'},{ar:'طاقة الفوتون كاملة',en:'All of the photon energy'},{ar:'جزء من طاقة الفوتون',en:'Part of the photon energy'}],
          [{ar:'الاعتماد على العدد الذري',en:'Dependence on atomic number'},{ar:'قوي جدًا (نحو Z³)',en:'Very strong (about Z cubed)'},{ar:'لا يعتمد عليه عمليًا',en:'Practically independent'}],
          [{ar:'يهيمن في',en:'Dominates in'},{ar:'طاقات منخفضة ومواد عالية Z',en:'Low energies and high-Z materials'},{ar:'طاقات عالية وأنسجة رخوة',en:'High energies and soft tissues'}]
        ]},
      nums:[
        {v:'30 keV', ar:'طاقة تساوي التفاعلين في الماء والأنسجة', en:'Equal-probability energy in water and tissue'},
        {v:'300 keV', ar:'طاقة تساوي التفاعلين في اليود والباريوم', en:'Equal-probability energy in iodine and barium'},
        {v:'500 keV', ar:'طاقة تساوي التفاعلين في الرصاص', en:'Equal-probability energy in lead'}
      ]}
  ],
  quiz:[
    { q:{ar:'حزمة أشعة مرت عبر ثلاث طبقات نصف قيمة من مادة ما. كم تبقى من شدتها الابتدائية؟', en:'A beam passes through three half value layers of a material. What fraction of its initial intensity remains?'},
      opts:[{ar:'النصف',en:'One half'},{ar:'الربع',en:'One quarter'},{ar:'الثمن',en:'One eighth'},{ar:'العُشر',en:'One tenth'}], a:2,
      why:{ar:'كل طبقة نصف قيمة تخفض الشدة إلى النصف، وبعد ثلاث طبقات يصبح المعامل 2³ = 8 فتتبقى ثمن الشدة.', en:'Each HVL halves the intensity, so after three layers the reduction factor is 2 cubed = 8, leaving one eighth.'}},
    { q:{ar:'أي التفاعلين لا يعتمد احتماله عمليًا على العدد الذري للمادة؟', en:'The probability of which interaction is practically independent of the atomic number of the material?'},
      opts:[{ar:'التأثير الكهروضوئي',en:'Photoelectric effect'},{ar:'تأثير كومبتون',en:'Compton effect'},{ar:'إنتاج الأزواج',en:'Pair production'},{ar:'الإشعاع المميز',en:'Characteristic radiation'}], a:1,
      why:{ar:'تأثير كومبتون يحدث مع الإلكترونات الخارجية، ويعتمد على كثافة الإلكترونات لا على العدد الذري، بعكس التأثير الكهروضوئي الذي يعتمد بقوة على Z.', en:'Compton interactions involve outer electrons and depend on electron density rather than atomic number, unlike the photoelectric effect, which depends strongly on Z.'}},
    { q:{ar:'معامل التوهين الكتلي للمادة يعتمد على:', en:'The mass attenuation coefficient of a material depends on:'},
      opts:[{ar:'كثافة المادة وحالتها الفيزيائية فقط',en:'Only its density and physical state'},{ar:'العدد الذري وطاقة الفوتون',en:'Atomic number and photon energy'},{ar:'سماكة المادة فقط',en:'Only its thickness'},{ar:'شدة الحزمة الابتدائية',en:'The initial beam intensity'}], a:1,
      why:{ar:'معامل التوهين الكتلي هو μ مقسومًا على الكثافة، لذا يتحرر من أثر الكثافة والحالة الفيزيائية ويبقى تابعًا للعدد الذري وطاقة الفوتون.', en:'The mass attenuation coefficient is μ divided by density, so it is freed from density and physical state and depends only on atomic number and photon energy.'}}
  ]
},
{
  slug:'digital-radiography', chapter:'xray',
  title:{ar:'التصوير الرقمي بالأشعة', en:'Digital Radiography'},
  intro:{
    ar:'استبدل التصوير الرقمي الفيلم التقليدي بنوعين رئيسيين: التصوير المحوسب (Computed Radiography, CR) الذي يخزن الصورة مؤقتًا في لوحة فوسفورية، والتصوير الرقمي المباشر (Digital Radiography, DR) الذي يحوّل طاقة الأشعة إلى إشارة إلكترونية فورًا داخل كاشف مسطح. ويعتمد النظامان على فصل الاستقبال عن العرض، مما يمنح مدى ديناميكيًا واسعًا وإمكانات كبيرة لمعالجة الصورة بعد التعريض.',
    en:'Digital imaging has replaced conventional film with two main approaches: computed radiography (CR), which stores the image temporarily in a phosphor plate, and digital radiography (DR), which converts X-ray energy into an electronic signal immediately inside a flat-panel detector. Both separate image acquisition from display, giving a wide dynamic range and powerful post-processing options.'},
  sections:[
    { h:{ar:'الضيائية بالأشعة: الوميض والتفسفر', en:'X-ray luminescence: fluorescence and phosphorescence'},
      paras:[
        {ar:'عندما تمتص مادة فوسفورية طاقة الأشعة فإنها تعيد إطلاق جزء منها على شكل ضوء، وهذه الظاهرة تسمى الضيائية (Luminescence). ويحدث الإطلاق بإحدى صورتين تختلفان في التوقيت: فالوميض (Fluorescence) انبعاث ضوئي فوري يتزامن مع التعريض، وهو الآلية الغالبة في أنظمة الفيلم والشاشة التقليدية.',
         en:'When a phosphor absorbs X-ray energy it re-emits part of that energy as light, a phenomenon called luminescence. The emission takes one of two forms differing in timing: fluorescence is the immediate emission of light at the moment of exposure, and it is the mechanism that predominates in conventional screen-film systems.'},
        {ar:'أما التفسفر (Phosphorescence) فهو انبعاث مؤجل يستمر دقائق أو ساعات أو أيامًا، ويمكن تسريعه بتسليط ضوء بلون محدد على الفوسفور. وهذه القدرة على تخزين الطاقة ثم إطلاقها عند الطلب هي بالضبط ما يستغله التصوير المحوسب CR لتأجيل قراءة الصورة إلى وقت لاحق بعد التعريض.',
         en:'Phosphorescence, in contrast, is a delayed emission lasting minutes, hours or days, and it can be accelerated by shining light of a specific colour onto the phosphor. This ability to store energy and release it on demand is exactly what computed radiography exploits, allowing the image to be read out some time after the exposure.'}
      ]},
    { h:{ar:'لوحة التصوير في CR', en:'The CR image plate'},
      paras:[
        {ar:'تتكون لوحة التصوير (Image plate) من طبقة من بلورات فلوروهاليد الباريوم المنشطة بأيونات اليوروبيوم ثنائية التكافؤ (BaFX:Eu) مدمجة في رابط بوليمري، ويغطي سطحها طبقة بلاستيكية مقواة للحماية، ويبلغ سمك اللوحة نحو 0.3 mm. عند التعريض تحتجز الإلكترونات المثارة في مصائد داخل البلورات، فتتكون صورة كامنة (Latent image) غير مرئية تحمل معلومات التعريض.',
         en:'The image plate consists of a layer of barium fluorohalide crystals activated with divalent europium ions (BaFX:Eu) embedded in a polymer binder, protected on its surface by a layer of toughened plastic, and is typically about 0.3 mm thick. During exposure, excited electrons are held in traps within the crystals, forming an invisible latent image that stores the exposure information.'},
        {ar:'وفي جهاز القراءة يمسح شعاع ليزر اللوحة نقطة نقطة، فيحرر الضوء المخزن بما يتناسب مع الجرعة التي استقبلتها كل منطقة، ويلتقط أنبوب مضاعف ضوئي هذا الضوء ويحوّله إلى إشارة رقمية. وبعد القراءة تُمحى اللوحة بضوء ساطع لتصبح جاهزة لإعادة الاستخدام مرات كثيرة.',
         en:'In the reader, a laser beam scans the plate point by point and releases the stored light in proportion to the dose each area received; a photomultiplier tube collects this light and converts it into a digital signal. After readout the plate is erased with bright light, ready to be reused many times.'}
      ],
      table:{
        head:[{ar:'وجه المقارنة',en:'Feature'},{ar:'لوحة قياسية',en:'Standard image plate'},{ar:'لوحة عالية الدقة',en:'High-resolution image plate'}],
        rows:[
          [{ar:'سماكة طبقة الفوسفور',en:'Phosphor layer'},{ar:'أسمك',en:'Thicker'},{ar:'أرقّ',en:'Thinner'}],
          [{ar:'حجم البلورات',en:'Crystal size'},{ar:'أكبر',en:'Larger'},{ar:'أصغر',en:'Smaller'}],
          [{ar:'طبقة انعكاس الضوء',en:'Light reflection layer'},{ar:'موجودة',en:'Present'},{ar:'غير موجودة',en:'Absent'}],
          [{ar:'كفاءة امتصاص الأشعة',en:'X-ray absorption efficiency'},{ar:'نحو 40% (جيدة)',en:'About 40% (good)'},{ar:'أقل، فتحتاج جرعة أكبر',en:'Lower, so a larger dose is needed'}],
          [{ar:'الاستخدام النموذجي',en:'Typical use'},{ar:'فحوصات الأشعة العامة',en:'General radiographic examinations'},{ar:'دقة مكانية عالية',en:'High spatial resolution work'}]
        ]}},
    { h:{ar:'التصوير الرقمي المباشر DR', en:'Direct digital radiography (DR)'},
      paras:[
        {ar:'في أنظمة DR لا توجد كاسيتات ولا مرحلة قراءة منفصلة، إذ يحمل الكاشف المسطح مصفوفة من عناصر الكشف تقرأ الإشارة إلكترونيًا فور انتهاء التعريض. ويوجد أسلوبان للتحويل: التحويل غير المباشر (Indirect) حيث تحوّل طبقة وميضية مثل CsI:Tl الأشعة إلى ضوء تلتقطه ثنائيات ضوئية من السيليكون غير المتبلور (a-Si)، والتحويل المباشر (Direct) حيث تحوّل طبقة من السيلينيوم غير المتبلور (a-Se) الأشعة مباشرة إلى شحنات كهربائية دون مرحلة ضوئية.',
         en:'DR systems have no cassettes and no separate readout stage: the flat-panel detector contains a matrix of detector elements that read the signal electronically as soon as the exposure ends. Conversion is either indirect, where a scintillator layer such as CsI:Tl converts X-rays to light detected by amorphous silicon (a-Si) photodiodes, or direct, where a layer of amorphous selenium (a-Se) converts X-rays straight into electric charge with no light stage.'},
        {ar:'تمنح أنظمة DR صورًا فورية تقريبًا وكفاءة كشف كمومية (DQE) أعلى عادة من CR، مما يسمح بجرعات أقل عند جودة صورة مماثلة، لكن كواشفها أغلى ثمنًا وأكثر حساسية للصدمات من لوحات CR المرنة القابلة للمشاركة بين أجهزة محمولة متنوعة.',
         en:'DR offers almost instant images and a detective quantum efficiency (DQE) that is generally higher than CR, allowing lower doses for comparable image quality. Its detectors are, however, more expensive and more fragile than CR plates, which are flexible and can be shared between several mobile units.'}
      ]},
    { h:{ar:'معالجة الصورة الرقمية', en:'Digital image processing'},
      paras:[
        {ar:'لأن الاستقبال والعرض منفصلان في الأنظمة الرقمية، تستطيع الخوارزميات إعادة تشكيل الصورة بعد التعريض: فيضبط جدول البحث (Look-up table, LUT) التباين والسطوع، وتغيّر النافذة (Windowing) مستوى ونطاق الدرجات المعروضة، وتُستخدم مرشحات تحسين الحواف (Edge enhancement) لإبراز التفاصيل الدقيقة.',
         en:'Because acquisition and display are separate in digital systems, algorithms can reshape the image after exposure: a look-up table (LUT) sets contrast and brightness, windowing adjusts the level and range of displayed grey levels, and edge enhancement filters bring out fine detail.'},
        {ar:'يمنح المدى الديناميكي الواسع للكواشف الرقمية تسامحًا كبيرًا مع أخطاء عوامل التعريض، لكن له ثمنًا خفيًا: فالتعريض الزائد لا ينتج صورة سوداء فاضحة كما في الفيلم، بل صورة جيدة المظهر، مما قد يؤدي إلى انجراف الجرعة (Dose creep) إذا لم تُراقب مؤشرات التعريض (Exposure index) بانتظام.',
         en:'The wide dynamic range of digital receptors tolerates large errors in exposure factors, but this carries a hidden cost: overexposure does not produce an obviously black image as with film, only a good-looking one, so doses can drift upwards (dose creep) unless the exposure index is monitored regularly.'}
      ],
      nums:[
        {v:'0.3 mm', ar:'سماكة لوحة التصوير النموذجية في CR', en:'Typical CR image plate thickness'},
        {v:'40%', ar:'كفاءة الامتصاص الكسرية للوحة القياسية', en:'Fractional absorption efficiency of a standard plate'}
      ]},
    { h:{ar:'عيوب الصور الرقمية وتصحيحها', en:'Digital artefacts and correction'},
      paras:[
        {ar:'للأنظمة الرقمية عيوبها الخاصة: ففي CR يظهر نمط مواريه (Moiré) عند استخدام شبكة مضادة للتشتت ثابتة تتداخل خطوطها مع خطوط مسح الليزر، وتظهر صورة شبحية (Ghost image) إذا بقي أثر تعريض سابق لأن مسح اللوحة لم يكتمل، إضافة إلى خدوش اللوحة وتلفها مع كثرة الاستخدام.',
         en:'Digital systems have their own artefacts: in CR a moiré pattern can appear when a stationary anti-scatter grid is used and its lines interfere with the laser scanning lines; a ghost image remains if a previous exposure was not fully erased; and plates accumulate scratches and damage with repeated use.'},
        {ar:'وفي DR تعالج برمجيات الكاشف تفاوت استجابة العناصر بمعايرات دورية: معايرة الإزاحة والكسب (Offset/Gain calibration) بتعريض منتظم دون مريض لتصحيح عدم انتظام الإشارة، واستبدال قيم البكسلات المعطوبة بمتوسط جيرانها. كما تحلّل خاصية الضبط التلقائي للمدى (Auto-ranging) المدرج التكراري لقيم الصورة لاستبعاد القيم غير التشريحية كحواف التحزيم قبل تطبيق جدول العرض.',
         en:'In DR, detector software corrects uneven element response with periodic calibrations: offset and gain (flat-field) calibration uses a uniform exposure with no patient to correct signal non-uniformity, and defective pixels are replaced by the average of their neighbours. Auto-ranging analyses the image value histogram to exclude non-anatomical values such as collimation borders before the display look-up table is applied.'}
      ],
      bullets:[
        {ar:'المدى الديناميكي (Latitude) في CR وDR واسع جدًا: استجابة شبه خطية عبر مدى كبير من التعريضات، وهو سر التسامح مع أخطاء العوامل وسر خطر انجراف الجرعة في آن واحد', en:'Latitude in CR and DR is very wide: a near-linear response across a large range of exposures — the reason these systems forgive factor errors, and also the reason dose creep is a risk'}
      ]}
  ],
  quiz:[
    { q:{ar:'ما المادة الفوسفورية المستخدمة في لوحة التصوير في CR؟', en:'Which phosphor is used in a CR image plate?'},
      opts:[{ar:'يوديد السيزيوم المنشط بالصوديوم CsI:Na',en:'Sodium-activated caesium iodide, CsI:Na'},{ar:'فلوروهاليد الباريوم المنشط باليوروبيوم BaFX:Eu',en:'Barium fluorohalide activated with europium, BaFX:Eu'},{ar:'كبريتيد الزنك والكادميوم المنشط بالفضة',en:'Silver-activated zinc cadmium sulphide'},{ar:'السيلينيوم غير المتبلور a-Se',en:'Amorphous selenium, a-Se'}], a:1,
      why:{ar:'لوحة CR مصنوعة من بلورات BaFX:Eu التي تخزن طاقة الأشعة على شكل صورة كامنة حتى تُقرأ بالليزر.', en:'The CR plate is made of BaFX:Eu crystals, which store X-ray energy as a latent image until laser readout.'}},
    { q:{ar:'مقارنة باللوحة القياسية، اللوحة عالية الدقة في CR تتميز بـ:', en:'Compared with a standard CR plate, a high-resolution plate has:'},
      opts:[{ar:'طبقة فوسفور أسمك وبلورات أكبر',en:'A thicker phosphor layer and larger crystals'},{ar:'طبقة فوسفور أرق وبلورات أصغر وكفاءة امتصاص أقل',en:'A thinner phosphor layer, smaller crystals and lower absorption efficiency'},{ar:'طبقة انعكاس ضوء إضافية',en:'An additional light reflection layer'},{ar:'كفاءة امتصاص أعلى فجرعة أقل',en:'Higher absorption efficiency and therefore a lower dose'}], a:1,
      why:{ar:'الدقة الأعلى تتطلب طبقة أرق وبلورات أصغر لتقليل انتشار الضوء، وثمن ذلك امتصاص أقل للأشعة فيحتاج جرعة أكبر.', en:'Higher resolution needs a thinner layer and smaller crystals to limit light spread; the price is lower X-ray absorption, so a larger dose is required.'}},
    { q:{ar:'في كواشف DR ذات التحويل المباشر، المادة التي تحوّل الأشعة مباشرة إلى شحنة كهربائية هي:', en:'In direct-conversion DR detectors, X-rays are converted straight into electric charge by:'},
      opts:[{ar:'يوديد السيزيوم CsI:Tl',en:'Caesium iodide, CsI:Tl'},{ar:'السيليكون غير المتبلور a-Si',en:'Amorphous silicon, a-Si'},{ar:'السيلينيوم غير المتبلور a-Se',en:'Amorphous selenium, a-Se'},{ar:'فلوروهاليد الباريوم',en:'Barium fluorohalide'}], a:2,
      why:{ar:'السيلينيوم غير المتبلور موصل ضوئي يحول طاقة الأشعة مباشرة إلى شحنات دون مرحلة ضوئية وسيطة، بينما CsI:Tl يستخدم في التحويل غير المباشر.', en:'Amorphous selenium is a photoconductor that converts X-ray energy directly into charge with no intermediate light stage; CsI:Tl belongs to indirect conversion.'}}
  ]
},
{
  slug:'image-quality', chapter:'xray',
  title:{ar:'جودة الصورة', en:'Image Quality'},
  intro:{
    ar:'توصف جودة الصورة الشعاعية بقدرة الصورة على إظهار التفاصيل التشريحية بأمانة، وتتحدد بعدة عوامل متداخلة: التباين (Contrast)، والدقة المكانية (Spatial resolution)، والضجيج (Noise)، إضافة إلى التكبير والتشوه. فهم هذه العوامل منفصلة ومتفاعلة هو ما يتيح ضبط عوامل التعريض بوعي بدل التجربة والخطأ.',
    en:'The quality of a radiographic image describes how faithfully it shows anatomical detail, and it is governed by several interacting factors: contrast, spatial resolution and noise, together with magnification and distortion. Understanding each factor, and how they trade off against one another, is what allows exposure factors to be chosen deliberately rather than by trial and error.'},
  sections:[
    { h:{ar:'التباين', en:'Contrast'},
      paras:[
        {ar:'التباين هو الفرق في الكثافة البصرية أو السطوع بين منطقتين متجاورتين من الصورة. ويبدأ من المريض نفسه فيما يسمى تباين الموضوع (Subject contrast)، إذ تختلف درجة توهين الأشعة بين الأنسجة تبعًا لاختلاف أعدادها الذرية وكثافاتها وسماكاتها، فتصل إلى الكاشف حزمة مختلفة الشدة من مكان لآخر.',
         en:'Contrast is the difference in optical density or brightness between neighbouring regions of the image. It originates in the patient as subject contrast: tissues attenuate the beam by different amounts according to their atomic numbers, densities and thicknesses, so the beam reaching the detector varies in intensity from place to place.'},
        {ar:'تنخفض طاقة الحزمة (بانخفاض kVp) فيقوى التأثير الكهروضوئي وتزداد فروق التوهين بين الأنسجة فيرتفع تباين الموضوع، لكن بثمن جرعة أعلى للمريض. أما في الأنظمة الرقمية فيمكن تعديل تباين العرض (Image contrast) لاحقًا بمعالجة الصورة والنافذة، غير أن ذلك لا يخلق معلومات لم تسجلها الحزمة أصلًا، والإشعاع المتشتت يظل العدو الأول للتباين لأنه يضيف إشارة ضبابية شبه منتظمة فوق الصورة كلها.',
         en:'Lowering the beam energy (lower kVp) strengthens the photoelectric effect and increases attenuation differences between tissues, raising subject contrast at the cost of a higher patient dose. In digital systems the displayed image contrast can be altered afterwards by processing and windowing, but this cannot create information the beam never recorded, and scattered radiation remains the chief enemy of contrast because it lays a fairly uniform fog of extra signal over the whole image.'}
      ]},
    { h:{ar:'الدقة المكانية وعدم الحدة', en:'Spatial resolution and unsharpness'},
      paras:[
        {ar:'الدقة المكانية هي قدرة نظام التصوير على إظهار بنيتين صغيرتين متقاربتين كعنصرين منفصلين، وتقاس عادة بأزواج الخطوط في المليمتر (lp/mm). وكل عامل يطمس الحدود بين التفاصيل يوصف بأنه عدم حدة (Unsharpness)، وكلما زاد عدم الحدة الكلي انخفضت الدقة.',
         en:'Spatial resolution is the ability of the imaging system to show two small, close structures as separate objects, usually measured in line pairs per millimetre (lp/mm). Any factor that blurs the boundary between details is described as unsharpness, and as total unsharpness rises, resolution falls.'},
        {ar:'لعدم الحدة مصادر ثلاثة: عدم حدة الكاشف الناتج عن انتشار الإشارة داخل مستقبل الصورة وحجم عناصره، وعدم الحدة الحركي (Motion unsharpness) الناتج عن حركة المريض أو الأنبوب أثناء التعريض، وعدم الحدة الهندسي الناتج عن كون البقعة البؤرية (Focal spot) ليست نقطة مثالية بل مساحة محدودة، فينشأ حول كل حافة ظل جزئي (Penumbra) يتسع كلما كبرت البقعة البؤرية أو زادت المسافة بين الجسم والكاشف أو قصرت المسافة بين المصدر والجسم.',
         en:'Unsharpness has three sources: detector unsharpness from signal spread within the receptor and the size of its elements; motion unsharpness from movement of the patient or tube during the exposure; and geometric unsharpness, which arises because the focal spot is a finite area rather than a perfect point, casting a partial shadow (penumbra) around every edge that widens with a larger focal spot, a larger object-to-detector distance, or a shorter source-to-object distance.'},
        {ar:'تُقاس الدقة عمليًا بتصوير حافة حادة أو شق ضيق، فتنتشر صورته بفعل النظام فيما يسمى دالة انتشار الخط (Line spread function, LSF)، وتحويلها الرياضي هو دالة نقل التضمين (Modulation transfer function, MTF) التي تخبرنا عن نسبة التباين المنقولة فعليًا عند كل تردد مكاني (Spatial frequency): فإذا كانت MTF قريبة من 1 نُقل التباين كاملًا تقريبًا، وتهبط نحو الصفر عند حد الدقة حيث تختفي التفاصيل.',
         en:'Resolution is measured in practice by imaging a sharp edge or narrow slit: the system spreads its image into a line spread function (LSF), whose mathematical transform is the modulation transfer function (MTF), stating what fraction of the contrast is actually transferred at each spatial frequency. An MTF near 1 means almost full contrast transfer; it falls towards zero at the limiting resolution, where detail disappears.'},
        {ar:'وفي الكواشف الرقمية تحدد هندسة العناصر حد الدقة: فكل عنصر كشف يجمع الإشارة متوسطًا فوق مساحته (Detector aperture) مما يطمس التفاصيل الأصغر منه، والمسافة بين مراكز العناصر (Sampling pitch) تحدد أعلى تردد قابل للتمثيل دون تشويش وفق حد نايكويست: f = 1 ÷ (‏2 × ‏pitch)، فإذا تجاوزت تفاصيل الجسم هذا التردد ظهرت مشوهة (Aliasing) كما في نمط مواريه.',
         en:'In digital detectors the element geometry sets the resolution limit: each detector element averages the signal over its own area (the detector aperture), blurring detail smaller than itself, and the spacing between element centres (the sampling pitch) sets the highest frequency that can be represented faithfully, the Nyquist limit f = 1 / (2 × pitch). Detail finer than this is reproduced distorted (aliasing), as in a moiré pattern.'}
      ],
      bullets:[
        {ar:'بقعة بؤرية أصغر تعني عدم حدة هندسيًا أقل ودقة أعلى، لكن بحدود تحمل حراري أقل للأنبوب', en:'Smaller focal spot: less geometric unsharpness and better resolution, but lower heat loading capacity'},
        {ar:'تقليل المسافة بين الجسم والكاشف (OID) يحسّن الحدة ويقلل التكبير معًا', en:'Reducing the object-to-image distance (OID) improves sharpness and reduces magnification together'},
        {ar:'تثبيت المريض وتقصير زمن التعريض يقللان عدم الحدة الحركي', en:'Immobilisation and short exposure times reduce motion unsharpness'}
      ]},
    { h:{ar:'الضجيج الكمومي ونسبة الإشارة إلى الضجيج', en:'Quantum noise and signal-to-noise ratio'},
      paras:[
        {ar:'حتى مع ثبات عوامل التعريض، يتغير عدد الفوتونات الواصلة إلى كل عنصر كاشف تغيرًا عشوائيًا من صورة لأخرى ومن بكسل لآخر، وهذا التذبذب العشوائي هو الضجيج (Noise)، وأهم صوره الضجيج الكمومي (Quantum noise). يتبع عدد الفوتونات إحصاء بواسون، فيساوي الضجيج الجذر التربيعي لمتوسط عدد الفوتونات N، أي أن الضجيج المطلق يزداد بازدياد العدد.',
         en:'Even with fixed exposure factors, the number of photons reaching each detector element varies randomly from image to image and pixel to pixel; this random fluctuation is noise, its most important form being quantum noise. Photon numbers follow Poisson statistics, so the noise equals the square root of the mean photon number N: the absolute noise grows as the count rises.'},
        {ar:'لكن ما يهم الصورة هو الضجيج النسبي، أي الضجيج مقسومًا على الإشارة، وهو يتناسب مع 1/√N فيتناقص كلما زاد عدد الفوتونات. وبالمثل تساوي نسبة الإشارة إلى الضجيج (SNR) القيمة √N، فإذا استقبل كل عنصر 100 فوتون كان الضجيج 10 فوتونات أي 10% من الإشارة وكانت SNR تساوي 10، أما عند 1000 فوتون فيصبح الضجيج نحو 31.6 فوتونًا أي 3% فقط وترتفع SNR إلى نحو 31.',
         en:'What matters for the image, however, is the relative noise, the noise divided by the signal, which is proportional to 1/√N and so falls as more photons are used. The signal-to-noise ratio (SNR) likewise equals √N: if each element receives 100 photons, the noise is 10 photons, 10 percent of the signal, and the SNR is 10; at 1000 photons the noise is about 31.6 photons, only 3 percent, and the SNR rises to about 31.'},
        {ar:'ولخفض الضجيج النسبي يجب زيادة عدد الفوتونات المساهمة فعليًا في تكوين الصورة: برفع التيار (mA) أي الجرعة، أو باستخدام مستقبل أعلى معامل توهين أو أسمك فيمتص فوتونات أكثر، أو بتكبير عناصر الكاشف فتزداد مساحة جمع الفوتونات لكل بكسل وإن كان ذلك على حساب الدقة المكانية. ولاحظ أن التضخيم (Amplification) لا يقلل الضجيج لأنه يكبر الإشارة والضجيج معًا، وكذلك تضييق النافذة لرفع التباين لا يغير عدد الفوتونات المسجلة.',
         en:'To reduce relative noise, more photons must actually contribute to forming the image: by raising the tube current (mA), and hence the dose; by using a receptor with a higher attenuation coefficient or greater thickness so it absorbs more photons; or by enlarging the detector elements so each pixel collects photons over a bigger area, though that costs spatial resolution. Note that amplification does not reduce noise, because it magnifies the noise along with the signal, and neither does narrowing the display window to raise contrast, since the recorded photon count is unchanged.'}
      ],
      nums:[
        {v:'√N', ar:'يساوي الضجيج الكمومي عدديًا ونسبة الإشارة إلى الضجيج SNR', en:'Value of the quantum noise, and equally of the SNR'},
        {v:'10%', ar:'الضجيج النسبي عند 100 فوتون لكل عنصر', en:'Relative noise at 100 photons per element'},
        {v:'3%', ar:'الضجيج النسبي عند 1000 فوتون لكل عنصر', en:'Relative noise at 1000 photons per element'}
      ]},
    { h:{ar:'التكبير والتشوه', en:'Magnification and distortion'},
      paras:[
        {ar:'لأن حزمة الأشعة متباعدة (Divergent) فإن الصورة تكون دائمًا أكبر من الجسم، ويُعطى معامل التكبير بالنسبة M = SID/SOD حيث SID هي المسافة من المصدر إلى الكاشف وSOD هي المسافة من المصدر إلى الجسم. ويزداد التكبير كلما ابتعد الجسم عن الكاشف، وهو أحيانًا مرغوب كما في تصوير الثدي المكبر، لكنه يزيد عدم الحدة الهندسي عمومًا.',
         en:'Because the X-ray beam diverges, the image is always larger than the object, with a magnification factor M = SID/SOD, where SID is the source-to-image distance and SOD the source-to-object distance. Magnification increases as the object moves away from the detector; it is sometimes desirable, as in magnification mammography, but it generally worsens geometric unsharpness.'},
        {ar:'أما التشوه (Distortion) فهو تكبير غير متساوٍ لأجزاء الجسم المختلفة فيبدو شكل الجسم مختلفًا عن حقيقته، كأن يظهر ممدودًا أو مقصرًا. وينشأ عندما لا يكون الجسم موازيًا لمستوى الكاشف أو عندما لا يسقط الشعاع المركزي عموديًا عليه، ويقل ضبطه بالتموضع الصحيح للمريض وبتوسيط الحزمة على المنطقة المهمة.',
         en:'Distortion is unequal magnification of different parts of the object, so its shape appears altered, elongated or foreshortened. It arises when the object is not parallel to the detector plane or when the central ray is not perpendicular to it, and it is minimised by correct patient positioning and by centring the beam on the region of interest.'}
      ]},
    { h:{ar:'العيوب التصويرية', en:'Artefacts'},
      paras:[
        {ar:'العيب التصويري (Artefact) أي بنية تظهر في الصورة ولا وجود لها في الجسم المصوَّر، وقد يخفي آفة حقيقية أو يحاكي مرضًا غير موجود. ومصادره متعددة: المريض (حركة، أجسام معدنية كالمجوهرات والسحّابات)، والنظام (عيوب الشبكات المضادة للتشتت، أعطال الكاشف)، والمعالجة الرقمية نفسها عند المبالغة في تحسين الحواف مثلًا.',
         en:'An artefact is any structure visible in the image that does not exist in the object imaged, and it can hide a real lesion or mimic disease that is not there. Sources include the patient (movement, metal objects such as jewellery and zips), the system (anti-scatter grid faults, detector defects), and digital processing itself when, for example, edge enhancement is over-applied.'},
        {ar:'والقاعدة العملية أن أي بنية مشبوهة لا تتفق مع التشريح المتوقع يجب التحقق منها قبل اعتمادها: بإعادة التصوير بعد إزالة السبب المحتمل أو بتغيير الإسقاط، لا بتفسيرها كمرض.',
         en:'The practical rule is that any suspicious structure that does not fit the expected anatomy must be verified before it is believed: repeat the image after removing the likely cause, or change the projection, rather than interpreting it as disease.'}
      ]}
  ],
  quiz:[
    { q:{ar:'إذا تضاعف عدد الفوتونات الواصلة إلى كل عنصر كاشف أربع مرات، فإن الضجيج النسبي:', en:'If the number of photons per detector element increases fourfold, the relative noise:'},
      opts:[{ar:'ينخفض إلى الربع',en:'Falls to one quarter'},{ar:'ينخفض إلى النصف',en:'Falls to one half'},{ar:'يبقى ثابتًا',en:'Stays the same'},{ar:'يزداد إلى الضعف',en:'Doubles'}], a:1,
      why:{ar:'الضجيج النسبي يتناسب مع 1/√N، فمضاعفة N أربع مرات تخفضه بمعامل √4 = 2 أي إلى النصف، وترفع SNR إلى الضعف.', en:'Relative noise is proportional to 1/√N, so quadrupling N reduces it by a factor of √4 = 2, to one half, and doubles the SNR.'}},
    { q:{ar:'أي الإجراءات التالية لا يقلل الضجيج الكمومي في الصورة؟', en:'Which of the following does NOT reduce quantum noise in the image?'},
      opts:[{ar:'زيادة التيار mA',en:'Increasing the tube current (mA)'},{ar:'استخدام مستقبل أسمك',en:'Using a thicker receptor'},{ar:'تضخيم الإشارة بكسب أعلى',en:'Amplifying the signal with higher gain'},{ar:'تكبير عناصر الكاشف',en:'Enlarging the detector elements'}], a:2,
      why:{ar:'التضخيم يكبر الإشارة والضجيج بنسبة واحدة فلا تتغير نسبتهما، بينما الإجراءات الأخرى تزيد عدد الفوتونات المسجلة فعلًا فتخفض الضجيج النسبي.', en:'Amplification scales signal and noise together, leaving their ratio unchanged; the other options increase the number of photons actually recorded, lowering relative noise.'}},
    { q:{ar:'إذا استقبل كل عنصر كاشف 100 فوتون في المتوسط، فإن نسبة الإشارة إلى الضجيج SNR تساوي:', en:'If each detector element receives an average of 100 photons, the signal-to-noise ratio (SNR) is:'},
      opts:[{ar:'100',en:'100'},{ar:'31.6',en:'31.6'},{ar:'10',en:'10'},{ar:'1',en:'1'}], a:2,
      why:{ar:'تساوي SNR الجذر التربيعي لعدد الفوتونات، و√100 = 10، ويقابلها ضجيج نسبي قدره 10%.', en:'SNR equals the square root of the photon number, and √100 = 10, corresponding to a relative noise of 10 percent.'}}
  ]
},
{
  slug:'fluoroscopy', chapter:'xray',
  title:{ar:'التنظير الفلوري', en:'Fluoroscopy'},
  intro:{
    ar:'التنظير الفلوري (Fluoroscopy) هو التصوير بالأشعة في الزمن الحقيقي، يُعرض حيًا على شاشة أثناء الفحص لمتابعة الحركة وتوجيه الإجراءات التداخلية. وقد اعتمد تاريخيًا على مضخم الصورة (Image intensifier) مع كاميرا تلفزيونية، بينما تستخدم الأنظمة الحديثة كواشف مسطحة رقمية. ويقابله التصوير الفلوروغرافي (Fluorography) الذي يسجل صورًا ثابتة أعلى جودة لكن بجرعة أعلى.',
    en:'Fluoroscopy is real-time X-ray imaging, displayed live on a monitor during the examination to follow movement and guide interventional procedures. It traditionally relied on an image intensifier coupled to a TV camera, whereas modern systems use digital flat-panel detectors. Its counterpart, fluorography, records static images of higher quality but at a higher dose.'},
  sections:[
    { h:{ar:'التنظير مقابل التصوير الفلوروغرافي', en:'Fluoroscopy versus fluorography'},
      paras:[
        {ar:'في التنظير تُعرض الصورة لحظيًا أثناء التشعيع، والأولوية فيها للدقة الزمانية (Temporal resolution) أي سلاسة متابعة الحركة، لا للدقة المكانية؛ لذلك تكفي مصفوفة صغيرة نسبيًا نحو 512 × 512 بكسل وعمق رمادي 8 bit فقط. ويمكن أن يعمل التنظير بشكل مستمر أو نبضي (Pulsed) لتقليل الجرعة.',
         en:'In fluoroscopy the image is displayed live during irradiation, and the priority is temporal resolution, the smoothness with which movement is followed, rather than spatial resolution; a modest matrix of about 512 by 512 pixels and only 8-bit grey scale are therefore sufficient. Fluoroscopy can run continuously or in pulses to reduce dose.'},
        {ar:'أما في الفلوروغرافيا فتُلتقط الصور وتُعرض بعد انتهاء التعريض، بجودة أعلى من صورة التنظير الحية لكن بجرعة أعلى بكثير لكل إطار. وتستخدم عادة مصفوفة 1024 × 1024 بكسل بعمق 10 bit، وتشمل أمثلتها التصوير الرقمي الموضعي (Digital spot imaging) وتصوير الأوعية. وينقسم التصوير الرقمي عمومًا إلى نمط رمادي يشبه صورة الأشعة العادية، ونمط طرحي (Subtractive) كما في تصوير الأوعية حيث تُطرح صورة قبل الحقن من صورة بعده فلا يبقى سوى الوعاء المملوء بمادة التباين.',
         en:'In fluorography the images are acquired and viewed after the exposure, with better quality than the live fluoroscopic image but a much higher dose per frame. A matrix of 1024 by 1024 pixels with 10-bit depth is typical, and examples include digital spot imaging and angiography. Digital imaging modes divide broadly into greyscale modes resembling a plain radiograph, and subtractive modes such as angiography, where a pre-contrast image is subtracted from a post-contrast one so that only the contrast-filled vessel remains.'}
      ],
      nums:[
        {v:'512 × 512', ar:'مصفوفة التنظير النموذجية بعمق 8 bit', en:'Typical fluoroscopy matrix, at 8-bit depth'},
        {v:'1024 × 1024', ar:'مصفوفة الفلوروغرافيا النموذجية بعمق 10 bit', en:'Typical fluorography matrix, at 10-bit depth'}
      ]},
    { h:{ar:'مضخم الصورة: سلسلة التحويل', en:'The image intensifier: conversion chain'},
      paras:[
        {ar:'مضخم الصورة أنبوب مفرغ يحول نمط الأشعة الخافت إلى صورة ضوئية ساطعة عبر مراحل متتابعة. تدخل الأشعة من نافذة مدخل معدنية رقيقة من الألمنيوم أو التيتانيوم منخفض العدد الذري، ثم تسقط على فوسفور المدخل المصنوع من يوديد السيزيوم المنشط بالصوديوم (CsI:Na) بسماكة 400-500 µm على هيئة بلورات إبرية قطرها نحو 5 µm تعمل كقنوات توجه الضوء وتمنع انتشاره الجانبي. يمتص هذا الفوسفور 70-90% من الأشعة ويطلق مقابل كل فوتون أشعة نحو 3000 فوتون ضوئي أزرق.',
         en:'The image intensifier is a vacuum tube that converts the faint X-ray pattern into a bright light image through a chain of stages. X-rays enter through a thin input window of low-Z aluminium or titanium, then strike the input phosphor of sodium-activated caesium iodide (CsI:Na), 400 to 500 µm thick, formed of needle-like crystals about 5 µm across that channel the light and limit its lateral spread. This phosphor absorbs 70 to 90 percent of the X-rays and emits roughly 3000 blue light photons for every X-ray photon.'},
        {ar:'يمتص الكاثود الضوئي (Photocathode) المصنوع من سبيكة الأنتيمون والسيزيوم (SbCs₃) هذا الضوء الأزرق الذي يتوافق جيدًا مع حساسيته الطيفية، فيطلق نمطًا من الإلكترونات يقابل نحو 200 إلكترون لكل فوتون أشعة ممتص. ثم تُسرع الإلكترونات وتُركز عبر فرق جهد نحو 25 kV بفعل أقطاب تركيز موجبة، فتسقط على شاشة المخرج المصنوعة من كبريتيد الزنك والكادميوم المنشط بالفضة (ZnCdS:Ag) بقطر 25-35 mm فقط، فتتولد صورة ضوئية مصغرة ومقلوبة تغادر عبر نافذة المخرج إلى الكاميرا أو مستشعر CCD.',
         en:'The photocathode, a layer of antimony-caesium alloy (SbCs3) whose spectral sensitivity matches the blue emission well, absorbs this light and releases a pattern of electrons, about 200 electrons per absorbed X-ray photon. The electrons are then accelerated and focused across a potential difference of about 25 kV by positively charged focusing electrodes, and land on the output screen of silver-activated zinc cadmium sulphide (ZnCdS:Ag), only 25 to 35 mm in diameter, producing a minified, inverted light image that leaves through the output window to the camera or CCD sensor.'}
      ],
      nums:[
        {v:'~3000', ar:'فوتون ضوئي ينتج عن كل فوتون أشعة في فوسفور المدخل', en:'Light photons produced per X-ray photon in the input phosphor'},
        {v:'~200', ar:'إلكترون يتحرر مقابل كل فوتون أشعة ممتص', en:'Electrons released per absorbed X-ray photon'},
        {v:'25 kV', ar:'فرق الجهد المسرع داخل مضخم الصورة', en:'Accelerating potential across the intensifier tube'}
      ]},
    { h:{ar:'كسب السطوع وعامل التحويل', en:'Brightness gain and conversion factor'},
      paras:[
        {ar:'يوصف تضخيم مضخم الصورة بكسب السطوع (Brightness gain) وهو حاصل ضرب عاملين: كسب التصغير (Minification gain) الناتج عن ضغط الصورة من قطر المدخل الكبير إلى قطر المخرج الصغير ويساوي (Dinput/Doutput)²، وكسب التدفق (Flux gain) الناتج عن تسريع الإلكترونات بطاقة عالية. فإذا كان قطر المدخل عشرة أضعاف قطر المخرج بلغ كسب التصغير وحده نحو 100.',
         en:'Intensification is described by the brightness gain, the product of two factors: the minification gain, produced by squeezing the image from the large input diameter onto the small output diameter and equal to (Dinput/Doutput) squared, and the flux gain, produced by accelerating the electrons to high energy. If the input diameter is ten times the output diameter, the minification gain alone is about 100.'},
        {ar:'ولأن سطوع شاشة المدخل لا يمكن قياسه مباشرة، يُستخدم عمليًا عامل التحويل (Conversion factor, Gx) وهو نسبة إضاءة شاشة المخرج بوحدة الكانديلا لكل متر مربع إلى معدل جرعة الدخول بوحدة µGy/s، وتتراوح قيمه النموذجية بين 10 و30. وعند التبديل إلى وضع التكبير (Zoom) تُستخدم منطقة أصغر من شاشة المدخل، فينخفض Gx بما يتناسب مع نقص المساحة، وتصبح الصورة أخفت فيعوّض النظام برفع الجرعة، مقابل دقة مكانية أفضل.',
         en:'Because the brightness of the input screen cannot be measured directly, the conversion factor Gx is used in practice: the luminance of the output screen in candela per square metre divided by the entrance dose rate in µGy per second, with typical values of 10 to 30. Switching to a magnification (zoom) field uses a smaller area of the input screen, so Gx falls in proportion to the area reduction and the image becomes dimmer; the system compensates with a higher dose rate, in exchange for better spatial resolution.'}
      ]},
    { h:{ar:'الكواشف المسطحة والمعالجة وتصوير الأوعية بالطرح', en:'Flat panels, processing and DSA'},
      paras:[
        {ar:'تستخدم أنظمة التنظير الحديثة كواشف مسطحة رقمية، غالبًا من النوع غير المباشر بطبقة وميضية CsI:Tl فوق مصفوفة سيليكون غير متبلور عالية الدقة تصل إلى 2048 × 2048 بكسل وبعمق 12 أو 14 bit. وتتفوق على مضخم الصورة بحقل مربع أو مستطيل يغطي الزوايا، وبغياب التشوه الهندسي والتظليل الطرفي (Vignetting)، وبكفاءة كشف كمومية أعلى بنحو 10-20% تتيح خفض جرعة المريض، كما أن إشارة الفيديو تخرج رقمية من الأصل فتقل الضوضاء الإلكترونية.',
         en:'Modern fluoroscopy systems use digital flat-panel detectors, most commonly of the indirect type, with a CsI:Tl scintillator over a high-resolution amorphous silicon matrix of up to 2048 by 2048 pixels and 12 or 14 bits per pixel. They outperform the image intensifier with a square or rectangular field that covers the corners, no geometric distortion or vignetting, and a detective quantum efficiency some 10 to 20 percent higher, permitting lower patient dose; the video signal is digital from the outset, reducing electronic noise.'},
        {ar:'يحافظ التحكم التلقائي في السطوع (Automatic Brightness Control, ABC) على ظروف مشاهدة ثابتة مهما اختلف سمك الجزء المفحوص، وذلك بضبط mA وkVp تلقائيًا استجابة لقياس إضاءة المخرج أو لعينة من إشارة الفيديو، وهو يقابل في عمله التحكم التلقائي في التعريض (AEC) المستخدم في التصوير الثابت. وتساعد المعالجة الرقمية بثلاث أدوات: معالجة التدرج الرمادي بجداول البحث لموازنة التباين، والترشيح المكاني (Spatial filtering) لتحسين الحواف، والترشيح الزماني (Temporal filtering) الذي يوسط الإطار الحالي مع إطارات سابقة فيقلل الضجيج ويناسب البنى شبه الثابتة.',
         en:'Automatic brightness control (ABC) keeps viewing conditions constant whatever the thickness of the part examined, adjusting mA and kVp automatically in response to a measurement of the output light or a sample of the video signal; it is the fluoroscopic counterpart of the automatic exposure control (AEC) used in static imaging. Digital processing helps in three ways: greyscale processing with look-up tables to balance contrast, spatial filtering for edge enhancement, and temporal filtering, which averages the current frame with previous frames to reduce noise and suits quasi-static structures.'},
        {ar:'وفي تصوير الأوعية بالطرح الرقمي (Digital Subtraction Angiography, DSA) تُلتقط أولًا صورة قناع (Mask) للخلفية التشريحية، ثم تُحقن مادة التباين وتُلتقط سلسلة صور، فيطرح الحاسوب القناع من كل صورة فتختفي البنى المشتركة وتبقى الأوعية المملوءة بالتباين فقط، ثم يُضخم إشارة التباين لتعزيز وضوحها. وأكثر العيوب تميزًا لهذه التقنية هو سوء التسجيل (Misregistration) الذي تسببه أي حركة ولو بمقدار 1 mm بين القناع وصور التباين، ويعالج بإزاحة البكسلات (Pixel shifting) أو بإعادة اختيار قناع لاحق (Remasking).',
         en:'In digital subtraction angiography (DSA) a mask image of the anatomical background is acquired first, contrast medium is then injected and a series of images is taken; the computer subtracts the mask from each image so that shared structures vanish and only the contrast-filled vessels remain, and the contrast signal is then amplified. The artefact most characteristic of DSA is misregistration, caused by movement of as little as 1 mm between the mask and the contrast images, and it is corrected by pixel shifting or by remasking to a later image in the run.'}
      ]},
    { h:{ar:'الجرعة للمريض والعاملين', en:'Dose to patient and staff'},
      paras:[
        {ar:'لأن زمن التشعيع في التنظير ممتد ومتغير، توصف جرعة المريض بمعدل جرعة الجلد عند الدخول (Entrance skin dose rate) بدل الجرعة الكلية، وحدها الأقصى النظامي 100 mGy في الدقيقة. وتبلغ المعدلات النموذجية مع مضخم الصورة نحو 3-10 mGy/min للمريض المتوسط وترتفع إلى 10-30 mGy/min مع المرضى الأكبر حجمًا، بينما تقاس جرعة كل إطار في التنظير الرقمي عند مدخل المضخم بنحو 10-40 nGy فقط. غير أن أوضاع الالتقاط الثابت تتدرج صعودًا بقفزات كبيرة: فتصوير القلب الرقمي أعلى بنحو 10 مرات لكل إطار، والتصوير الموضعي بنحو 100 مرة، وتصوير الأوعية الطرحي بنحو 1000 مرة من جرعة إطار التنظير.',
         en:'Because fluoroscopy times are long and variable, patient dose is expressed as the entrance skin dose rate rather than a total dose, with a regulatory maximum of 100 mGy per minute. Typical rates with an image intensifier are about 3 to 10 mGy per minute for an average patient, rising to 10 to 30 mGy per minute for larger patients, while digital fluoroscopy delivers only about 10 to 40 nGy per frame at the intensifier entrance. Acquisition modes, however, climb steeply per frame: digital cardiac imaging is about 10 times fluoroscopy, digital spot imaging about 100 times, and subtractive angiography about 1000 times the dose of a fluoroscopy frame.'},
        {ar:'تُخفض جرعة المريض بتضييق الحزمة (Collimation)، وتقريب الكاشف من المريض وإبعاد الأنبوب عنه، وإزالة شبكة منع التشتت عند الإمكان، واستخدام التنظير النبضي بأقل معدل نبضات مقبول وتجنب وضع التكبير، وتقصير زمن التشعيع وعدم البقاء على الزاوية نفسها طويلًا، والاستفادة من تجميد آخر صورة (Last image hold) وخريطة الطريق (Road mapping). أما جرعة العاملين فيغلب عليها الإشعاع المتشتت من المريض نفسه، بنحو 0.1% من جرعة المريض على بعد متر واحد، بينما يجب أن يبقى التسرب من غلاف الأنبوب دون 1 mGy في الساعة على بعد متر؛ وتُخفض بالمآزر والحواجز الرصاصية وبالمسافة وبمراقبة الجرعات الشخصية.',
         en:'Patient dose is reduced by tight collimation, bringing the detector close to the patient and the tube farther away, removing the anti-scatter grid where possible, using pulsed fluoroscopy at the lowest acceptable pulse rate, avoiding zoom fields, keeping beam-on time short and not dwelling at one projection angle, and exploiting last-image-hold and road mapping. Staff dose is dominated by scatter from the patient, about 0.1 percent of the patient dose at a distance of one metre, while leakage from the tube housing must stay below 1 mGy per hour at one metre; it is controlled with lead aprons and shields, distance, and personal dose monitoring.'}
      ],
      nums:[
        {v:'100 mGy/min', ar:'الحد الأقصى لمعدل جرعة جلد المريض عند الدخول', en:'Maximum entrance skin dose rate for the patient'},
        {v:'0.1%', ar:'نسبة التشتت من جرعة المريض على بعد متر واحد', en:'Scatter as a fraction of patient dose at one metre'}
      ]}
  ],
  quiz:[
    { q:{ar:'قطر شاشة مدخل مضخم صورة 30 cm وقطر شاشة المخرج 3 cm. كم يبلغ كسب التصغير؟', en:'An image intensifier has an input screen diameter of 30 cm and an output diameter of 3 cm. What is the minification gain?'},
      opts:[{ar:'10',en:'10'},{ar:'33',en:'33'},{ar:'100',en:'100'},{ar:'900',en:'900'}], a:2,
      why:{ar:'كسب التصغير يساوي مربع نسبة القطرين: (30/3)² = 10² = 100.', en:'Minification gain is the square of the diameter ratio: (30/3) squared = 100.'}},
    { q:{ar:'ما مادة فوسفور مدخل مضخم الصورة؟', en:'What is the input phosphor of an image intensifier made of?'},
      opts:[{ar:'يوديد السيزيوم المنشط بالصوديوم CsI:Na',en:'Sodium-activated caesium iodide, CsI:Na'},{ar:'كبريتيد الزنك والكادميوم المنشط بالفضة ZnCdS:Ag',en:'Silver-activated zinc cadmium sulphide, ZnCdS:Ag'},{ar:'فلوروهاليد الباريوم BaFX:Eu',en:'Barium fluorohalide, BaFX:Eu'},{ar:'تنغستات الكالسيوم',en:'Calcium tungstate'}], a:0,
      why:{ar:'فوسفور المدخل CsI:Na ذو كفاءة امتصاص عالية وبلورات إبرية توجه الضوء، بينما ZnCdS:Ag هو فوسفور شاشة المخرج.', en:'The input phosphor is CsI:Na, with high absorption efficiency and needle crystals that channel light; ZnCdS:Ag is the output screen phosphor.'}},
    { q:{ar:'العيب الأكثر تميزًا لتصوير الأوعية بالطرح الرقمي DSA هو:', en:'The artefact most characteristic of digital subtraction angiography (DSA) is:'},
      opts:[{ar:'تشوه هندسي',en:'Geometric distortion'},{ar:'سوء التسجيل بسبب الحركة',en:'Misregistration due to movement'},{ar:'تظليل طرفي Vignetting',en:'Vignetting'},{ar:'ضجيج كمومي',en:'Quantum noise'}], a:1,
      why:{ar:'أي حركة ولو 1 mm بين صورة القناع وصور التباين تُبقي بقايا من الخلفية في الصورة المطروحة، ويعالج ذلك بإزاحة البكسلات أو إعادة القناع.', en:'Movement of even 1 mm between the mask and contrast images leaves background remnants in the subtracted image; pixel shifting or remasking corrects it.'}}
  ]
},
{
  slug:'mammography', chapter:'xray',
  title:{ar:'تصوير الثدي الشعاعي', en:'Mammography'},
  intro:{
    ar:'تصوير الثدي (Mammography) تقنية متخصصة تستخدم حزمة أشعة منخفضة الطاقة جدًا، لأن أنسجة الثدي متقاربة الأعداد الذرية والكثافة فيصعب تمييز الأورام عن النسيج الغدي بطاقات الأشعة المعتادة. ويحتاج في الوقت نفسه إلى دقة مكانية فائقة لرؤية التكلسات الدقيقة (Microcalcifications)، فيجمع بذلك مطلبين متشددين: تباين عالٍ للأنسجة الرخوة وحدة قصوى للتفاصيل.',
    en:'Mammography is a specialised technique that uses a very low-energy X-ray beam, because breast tissues have very similar atomic numbers and densities, making tumours hard to distinguish from glandular tissue at ordinary radiographic energies. At the same time it demands extremely high spatial resolution to show microcalcifications, combining two exacting requirements: high soft-tissue contrast and maximal detail sharpness.'},
  sections:[
    { h:{ar:'لماذا الطاقات المنخفضة؟', en:'Why such low energies?'},
      paras:[
        {ar:'عند الطاقات المنخفضة يهيمن التأثير الكهروضوئي، واحتماله يعتمد بقوة على العدد الذري، فتظهر الفروق الصغيرة بين الدهن والنسيج الغدي والورم على شكل فروق توهين قابلة للرؤية. لذلك تُصمم حزمة تصوير الثدي بحيث تتركز طاقات فوتوناتها المفيدة حول 17-20 keV للثدي المتوسط، وترتفع إلى 20-30 keV مع الأثداء الأكبر والأكثف كي تخترقها الحزمة أصلًا.',
         en:'At low energies the photoelectric effect dominates, and because its probability depends strongly on atomic number, the small differences between fat, glandular tissue and tumour appear as visible attenuation differences. The mammography beam is therefore designed so that its useful photon energies cluster around 17 to 20 keV for an average breast, rising to 20 to 30 keV for larger, denser breasts so that the beam can penetrate them at all.'},
        {ar:'هذا الاعتماد على الطاقات المنخفضة يفرض معادلة دقيقة: فكلما انخفضت الطاقة تحسن التباين، لكن ازداد الامتصاص داخل الثدي وارتفعت الجرعة الممتصة في النسيج الغدي. ويُدار هذا التوازن باختيار مادة الهدف والمرشح المناسبين لكل ثدي، مع وسائل مساندة كالضغط (Compression) الذي يقلل السماكة والتشتت، وشبكات منع التشتت، والبقعة البؤرية الصغيرة جدًا لرفع الدقة.',
         en:'Relying on low energies imposes a delicate balance: the lower the energy, the better the contrast, but the more absorption within the breast and the higher the dose absorbed by glandular tissue. The balance is managed by choosing the target and filter combination for each breast, supported by compression, which reduces thickness and scatter, anti-scatter grids, and a very small focal spot for resolution.'}
      ]},
    { h:{ar:'مادة الهدف: الموليبدينوم والبدائل', en:'Target material: molybdenum and alternatives'},
      paras:[
        {ar:'المادة القياسية لهدف أنبوب تصوير الثدي هي الموليبدينوم (Molybdenum)، لأن إشعاعه المميز يقع بالضبط في النطاق المطلوب عند 17.5 keV و19.6 keV. فمعظم فوتونات الحزمة المفيدة تأتي من هاتين القمتين المميزتين بدل الطيف المستمر العريض، فتحمل الحزمة طاقة شبه مثالية لتباين أنسجة الثدي.',
         en:'The standard target material for a mammography tube is molybdenum, because its characteristic radiation falls exactly in the required range, at 17.5 keV and 19.6 keV. Most of the useful beam photons come from these two characteristic peaks rather than a broad continuous spectrum, giving the beam a near-ideal energy for breast tissue contrast.'},
        {ar:'يرفع هدف الروديوم (Rhodium) متوسط طاقة الحزمة، إذ يقع إشعاعه المميز بين 20.2 و22.7 keV، فيناسب الأثداء الأكبر والأكثف. أما هدف التنغستن (Tungsten) فلا ينتج إشعاعًا مميزًا في هذا النطاق المنخفض، فينخفض خرج الأنبوب وتطول أزمنة التعريض، لكنه أرخص بكثير ويُستخدم غالبًا مع الأثداء الكبيرة الكثيفة التي تحمل غرسات أو عولجت بالإشعاع.',
         en:'A rhodium target raises the mean beam energy, its characteristic radiation lying between 20.2 and 22.7 keV, suiting larger and denser breasts. A tungsten target produces no characteristic radiation in this low range, so tube output falls and exposure times lengthen, but tungsten is far cheaper and is used mainly for large, dense breasts containing implants or previously treated with radiotherapy.'}
      ],
      nums:[
        {v:'17.5 / 19.6 keV', ar:'طاقتا الإشعاع المميز للموليبدينوم', en:'Molybdenum characteristic radiation energies'},
        {v:'20.2–22.7 keV', ar:'نطاق الإشعاع المميز للروديوم', en:'Rhodium characteristic radiation range'}
      ]},
    { h:{ar:'المرشح وحافة الامتصاص K', en:'The filter and the K-absorption edge'},
      paras:[
        {ar:'حتى مع هدف الموليبدينوم تحتوي الحزمة على فوتونات انكباح (Bremsstrahlung) أعلى طاقة تخترق الثدي دون أن تضيف تباينًا مفيدًا، وفوتونات منخفضة جدًا تُمتص سطحيًا فترفع الجرعة دون فائدة. ويزيل المرشح (Filter) الطرف الأعلى خاصة، إذا اختيرت مادة حافة امتصاصها K-edge أعلى بقليل من طاقات الإشعاع المميز: فعند حافة الامتصاص يقفز توهين المرشح فجأة، فتُحجب الفوتونات الأعلى من الحافة بقوة بينما تمر القمم المميزة الواقعة أسفلها مباشرة، وتصبح الحزمة شبه أحادية الطاقة.',
         en:'Even with a molybdenum target the beam contains higher-energy bremsstrahlung photons that penetrate the breast without adding useful contrast, and very low-energy photons absorbed superficially that raise dose to no benefit. The filter removes mainly the upper tail, if its material is chosen with a K-absorption edge just above the characteristic energies: at the edge the filter attenuation jumps abruptly, so photons above the edge are strongly blocked while the characteristic peaks just below it pass through, making the beam nearly monoenergetic.'},
        {ar:'تقع حافة K للموليبدينوم عند 20 keV، أي أعلى بقليل من قمتيه المميزتين 17.5 و19.6 keV، فيصلح مرشحًا لنفسه في تركيبة Mo/Mo القياسية. أما الروديوم فحافته عند 23.3 keV، فتركيبة Mo/Rh تسمح بمرور فوتونات حتى 23.3 keV فترفع متوسط الطاقة قليلًا وتناسب الأثداء الأكثف دون التضحية الكاملة بالتباين.',
         en:'The K-edge of molybdenum lies at 20 keV, just above its own characteristic peaks at 17.5 and 19.6 keV, so it filters itself in the standard Mo/Mo combination. Rhodium has its K-edge at 23.3 keV, so a Mo/Rh combination passes photons up to 23.3 keV, raising the mean energy slightly and suiting denser breasts without sacrificing all of the contrast.'}
      ],
      nums:[
        {v:'20 keV', ar:'حافة K للموليبدينوم', en:'K-edge of molybdenum'},
        {v:'23.3 keV', ar:'حافة K للروديوم', en:'K-edge of rhodium'}
      ]},
    { h:{ar:'اختيار تركيبة الهدف والمرشح', en:'Choosing the target/filter combination'},
      paras:[
        {ar:'تترتب التركيبات الأربع الشائعة ترتيبًا واحدًا في التباين والجرعة معًا: فتركيبة Mo/Mo تعطي أعلى تباين وأعلى جرعة، تليها Mo/Rh ثم Rh/Rh، بينما تعطي W/Rh أقل تباين وأقل جرعة لأن متوسط طاقة طيفها هو الأعلى. وبالمقابل ينخفض متوسط الطاقة تدريجيًا من W/Rh باتجاه Mo/Mo، وكلما انخفضت الطاقة قويت التفاعلات مع المادة فزاد التباين وزاد الامتصاص والجرعة معًا.',
         en:'The four common combinations rank in the same order for both contrast and dose: Mo/Mo gives the highest contrast and the highest dose, followed by Mo/Rh and then Rh/Rh, while W/Rh gives the lowest contrast and the lowest dose because its spectrum has the highest mean energy. Conversely, mean energy falls steadily from W/Rh towards Mo/Mo, and the lower the energy the stronger the interactions with matter, so contrast, absorption and dose all rise together.'},
        {ar:'وعمليًا: الاستخدام العام بتركيبة Mo/Mo، وللأثداء الكثيفة أو الكبيرة يُنتقل إلى Mo/Rh أو Rh/Rh لنفاذية أفضل وجرعة أقل نسبيًا، وتُحفظ W/Rh للحالات الخاصة كالغرسات والأثداء المعالجة إشعاعيًا حيث تكون السماكة والكثافة في أقصاهما.',
         en:'In practice, Mo/Mo is the general-purpose choice; for dense or large breasts the system moves to Mo/Rh or Rh/Rh for better penetration and a relatively lower dose; and W/Rh is reserved for special cases such as implants and post-radiotherapy breasts, where thickness and density are at their greatest.'}
      ],
      table:{
        head:[{ar:'التركيبة (هدف/مرشح)',en:'Combination (target/filter)'},{ar:'التباين',en:'Contrast'},{ar:'الجرعة',en:'Dose'},{ar:'الاستخدام النموذجي',en:'Typical use'}],
        rows:[
          [{ar:'Mo/Mo',en:'Mo/Mo'},{ar:'الأعلى',en:'Highest'},{ar:'الأعلى',en:'Highest'},{ar:'الاستخدام العام',en:'General use'}],
          [{ar:'Mo/Rh',en:'Mo/Rh'},{ar:'مرتفع',en:'High'},{ar:'مرتفعة',en:'High'},{ar:'أثداء أكثف',en:'Denser breasts'}],
          [{ar:'Rh/Rh',en:'Rh/Rh'},{ar:'متوسط',en:'Moderate'},{ar:'متوسطة',en:'Moderate'},{ar:'أثداء كبيرة كثيفة',en:'Large, dense breasts'}],
          [{ar:'W/Rh',en:'W/Rh'},{ar:'الأقل',en:'Lowest'},{ar:'الأقل',en:'Lowest'},{ar:'غرسات أو علاج إشعاعي سابق',en:'Implants or previous radiotherapy'}]
        ]}}
  ],
  quiz:[
    { q:{ar:'ما طاقتا الإشعاع المميز لهدف الموليبدينوم في تصوير الثدي؟', en:'What are the characteristic radiation energies of a molybdenum target in mammography?'},
      opts:[{ar:'17.5 و19.6 keV',en:'17.5 and 19.6 keV'},{ar:'20.2 و22.7 keV',en:'20.2 and 22.7 keV'},{ar:'59.3 و67.2 keV',en:'59.3 and 67.2 keV'},{ar:'8 و10 keV',en:'8 and 10 keV'}], a:0,
      why:{ar:'قمتا الموليبدينوم المميزتان عند 17.5 و19.6 keV تقعان في قلب النطاق المثالي لتباين أنسجة الثدي، بينما 20.2-22.7 keV هي قمتا الروديوم.', en:'The molybdenum characteristic peaks at 17.5 and 19.6 keV sit in the heart of the ideal range for breast tissue contrast; 20.2 to 22.7 keV are the rhodium peaks.'}},
    { q:{ar:'لماذا يُستخدم مرشح الموليبدينوم (حافة K عند 20 keV) مع هدف الموليبدينوم؟', en:'Why is a molybdenum filter (K-edge 20 keV) used with a molybdenum target?'},
      opts:[{ar:'لأنه يرفع طاقة الحزمة إلى 40 keV',en:'It raises the beam energy to 40 keV'},{ar:'لأن حافته أعلى بقليل من القمم المميزة فتحجب الفوتونات الأعلى طاقة وتمرر القمم',en:'Its edge sits just above the characteristic peaks, blocking higher-energy photons while passing the peaks'},{ar:'لأنه يزيد خرج الأنبوب',en:'It increases tube output'},{ar:'لأنه يلغي الحاجة إلى الضغط',en:'It removes the need for compression'}], a:1,
      why:{ar:'عند حافة K يقفز توهين المرشح فجأة، فكل فوتون أعلى من 20 keV يُمتص بقوة بينما تمر قمتا 17.5 و19.6 keV الواقعتان أسفل الحافة، فتقترب الحزمة من أحادية الطاقة.', en:'At the K-edge the filter attenuation jumps abruptly: photons above 20 keV are strongly absorbed while the 17.5 and 19.6 keV peaks just below the edge pass through, making the beam nearly monoenergetic.'}},
    { q:{ar:'مريضة بثدي كبير وكثيف. أي تركيبة هدف/مرشح هي الأنسب غالبًا؟', en:'For a patient with a large, dense breast, which target/filter combination is generally most suitable?'},
      opts:[{ar:'Mo/Mo',en:'Mo/Mo'},{ar:'Mo/Rh أو Rh/Rh',en:'Mo/Rh or Rh/Rh'},{ar:'تنغستن دون مرشح',en:'Tungsten with no filter'},{ar:'Mo/Mo مع kVp منخفض جدًا',en:'Mo/Mo at very low kVp'}], a:1,
      why:{ar:'الأثداء الكبيرة الكثيفة تحتاج فوتونات أعلى طاقة (20-30 keV) للاختراق، وترفع تركيبات الروديوم متوسط الطاقة فتقل الجرعة النسبية مع بقاء تباين مقبول.', en:'Large, dense breasts need higher-energy photons (20 to 30 keV) for penetration; rhodium combinations raise the mean energy, reducing relative dose while keeping acceptable contrast.'}}
  ]
},
{
  slug:'quality-assurance', chapter:'xray',
  title:{ar:'ضمان الجودة في أقسام الأشعة', en:'Quality Assurance in X-ray Departments'},
  intro:{
    ar:'ضمان الجودة (Quality Assurance, QA) برنامج منظم من الاختبارات الدورية على أجهزة الأشعة وكواشفها للتأكد من بقاء أدائها مطابقًا لما كان عليه عند القبول، حتى لا تتدهور جودة الصورة أو ترتفع الجرعة بصمت. يقارن كل اختبار قيمة حالية بخط أساس (Baseline) معروف، ولكل اختبار حدان: مستوى علاجي يستوجب الإصلاح، ومستوى إيقاف يمنع استخدام الجهاز حتى يُصلح.',
    en:'Quality assurance (QA) is an organised programme of periodic tests on X-ray equipment and receptors, confirming that performance still matches what it was at acceptance, so that image quality does not silently deteriorate and doses do not silently rise. Each test compares a current value against a known baseline, and each has two action thresholds: a remedial level, requiring correction, and a suspension level, at which the equipment must not be used until fixed.'},
  sections:[
    { h:{ar:'الإطار والمستويات', en:'Framework and action levels'},
      paras:[
        {ar:'في بريطانيا يُعد ضمان الجودة متطلبًا قانونيًا بموجب لوائح الإشعاع المؤين IRR 1999، لكن اللوائح لا تفرض جدولًا زمنيًا ولا قائمة اختبارات محددة، فيُترك التفصيل لكل مستشفى. وتوفر وثيقة IPEM Report 91 الإرشاد العملي الأشهر لبناء برنامج الاختبارات وحدود القبول.',
         en:'In the UK, quality assurance is a legal requirement under the Ionising Radiations Regulations, IRR 1999, but the regulations do not prescribe an exact schedule or test list, leaving the detail to each hospital. IPEM Report 91 provides the best-known practical guidance for building the test programme and its tolerance levels.'},
        {ar:'عندما تتجاوز نتيجة اختبار المستوى العلاجي (Remedial level) يصبح التدخل مطلوبًا لتحسين أداء الجهاز وجدولة الإصلاح، أما تجاوز مستوى الإيقاف (Suspension level) فيعني أن الجهاز غير آمن أو غير صالح ويجب إخراجه من الخدمة فورًا. وليس لكل اختبار مستوى إيقاف، فبعض الاختبارات لها مستوى علاجي فقط. وتبدأ المقارنات كلها من قياسات خط الأساس التي تُسجل عند استلام الجهاز أو بعد أي إصلاح جوهري.',
         en:'When a test result passes the remedial level, action is required to improve performance and schedule repair; passing the suspension level means the equipment is unsafe or unfit and must be taken out of service immediately. Not every test has a suspension level; some have only a remedial threshold. All comparisons start from baseline measurements recorded when the equipment is accepted, or after any major repair.'}
      ]},
    { h:{ar:'اختبارات الأنبوب والإخراج والجهد', en:'Tube, output and kilovoltage tests'},
      paras:[
        {ar:'يُقاس خرج الأنبوب بغرفة تأين (Ionisation chamber) على مسافة معروفة وعند عوامل تعريض متنوعة، كل شهر إلى شهرين. ويُحكم على النتيجة بمعيارين: التكرارية (Repeatability) بين تعريضات متتالية متماثلة، حدها العلاجي ±10% والإيقافي ±20%، والاتساق (Consistency) مع القيم المرجعية عبر الزمن، حده العلاجي ±20% والإيقافي ±50%.',
         en:'Tube output is measured with an ionisation chamber at a known distance across a range of exposure settings, every one to two months. Two criteria are judged: repeatability between identical successive exposures, with remedial and suspension levels of plus or minus 10 percent and 20 percent, and consistency with reference values over time, at plus or minus 20 percent remedial and 50 percent suspension.'},
        {ar:'يُفحص جهد الأنبوب الفعلي بمقياس kV إلكتروني كل سنة إلى سنتين عبر مدى الإعدادات، بحد علاجي ±5% أو ±5 kV من خط الأساس وإيقافي ±10% أو ±10 kV. وتُقدر الترشيح الكلي (Filtration) سنويًا بقياس طبقة نصف القيمة ومقارنتها بالبيانات المرجعية، ويجب أن يعادل ما لا يقل عن 2.5 mm من الألمنيوم. كما يُفحص حجم البقعة البؤرية وشكلها سنويًا بثقب دقيق (Pinhole) أو بجسم اختبار نجمي (Star pattern) تُقاس منه منطقة الضبابية المركزية.',
         en:'Actual tube kilovoltage is checked with an electronic kV meter every one to two years across the range of settings, with a remedial level of plus or minus 5 percent or 5 kV from baseline and a suspension level of plus or minus 10 percent or 10 kV. Total filtration is assessed annually from a half-value-layer measurement compared with reference data, and should be equivalent to at least 2.5 mm of aluminium. The focal spot size and shape are also examined annually, using a pinhole or a star test pattern from whose central blurred region the spot size is calculated.'}
      ],
      nums:[
        {v:'±10% / ±20%', ar:'حدا التكرارية العلاجي والإيقافي لخرج الأنبوب', en:'Remedial / suspension levels for output repeatability'},
        {v:'2.5 mm Al', ar:'الحد الأدنى المكافئ لترشيح الحزمة', en:'Minimum equivalent total filtration of the beam'}
      ]},
    { h:{ar:'المحاذاة والتحكم التلقائي في التعريض', en:'Alignment and automatic exposure control'},
      paras:[
        {ar:'تُقارن حزمة الضوء المرئية بالحزمة الإشعاعية الفعلية على فيلم أو كاشف كل شهر إلى شهرين، ويُسمح بانحراف علاجي قدره 1 cm على أي جانب عند مسافة متر واحد من البقعة البؤرية، بينما يبلغ مستوى الإيقاف 3 cm، لأن سوء المحاذاة قد يقطع تشريحًا مهمًا من الصورة أو يعرض مناطق خارج الحقل المقصود.',
         en:'The visible light field is compared with the actual radiation field on film or a detector every one to two months; the remedial level is a misalignment of 1 cm on any side at one metre from the focal spot, and the suspension level is 3 cm, because misalignment can cut important anatomy from the image or irradiate tissue outside the intended field.'},
        {ar:'يُختبر نظام التحكم التلقائي في التعريض (AEC) بتصوير صفيحة نحاس بسماكة 1 mm تحت تحكمه وتسجيل mAs ومؤشر جرعة الكاشف (DDI)، كل شهر إلى ثلاثة أشهر لاختبار الحساسية بحد علاجي ±25% من خط الأساس وإيقافي ±50%. وتُستكمل الصورة سنويًا باختبارات اتساق غرف التأين فيما بينها (علاجي ±30% للغرفة الواحدة و±20% للمتوسط)، وتكرارية AEC بحد ±20% حول المتوسط، وقابلية إعادة الإنتاج عبر مدى أوسع من الجهد والسماكات بحد علاجي ±30% وإيقافي ±60%. ويُختبر مؤشر جرعة الكاشف نفسه سنويًا من حيث التكرارية وإعادة الإنتاج بحدين ±10% و±20%.',
         en:'The automatic exposure control (AEC) is tested by imaging a 1 mm copper plate under its control and recording the mAs and detector dose indicator (DDI), every one to three months for sensitivity, with a remedial level of plus or minus 25 percent of baseline and a suspension level of plus or minus 50 percent. The picture is completed annually by consistency tests between the (usually three) ionisation chambers, at plus or minus 30 percent per chamber and 20 percent for the mean, AEC repeatability at plus or minus 20 percent of the mean, and reproducibility over a wider range of kV and phantom thicknesses, at plus or minus 30 percent remedial and 60 percent suspension. The detector dose indicator itself is tested annually for repeatability and reproducibility, with levels of plus or minus 10 and 20 percent.'}
      ],
      table:{
        head:[{ar:'الاختبار',en:'Test'},{ar:'الدورية',en:'Frequency'},{ar:'المستوى العلاجي',en:'Remedial level'},{ar:'مستوى الإيقاف',en:'Suspension level'}],
        rows:[
          [{ar:'خرج الأنبوب (التكرارية)',en:'Tube output (repeatability)'},{ar:'كل 1-2 شهر',en:'Every 1-2 months'},{ar:'±10%',en:'±10%'},{ar:'±20%',en:'±20%'}],
          [{ar:'محاذاة حزمة الضوء عند 1 m',en:'Light beam alignment at 1 m'},{ar:'كل 1-2 شهر',en:'Every 1-2 months'},{ar:'انحراف 1 cm',en:'1 cm misalignment'},{ar:'انحراف 3 cm',en:'3 cm misalignment'}],
          [{ar:'حساسية AEC',en:'AEC sensitivity'},{ar:'كل 1-3 أشهر',en:'Every 1-3 months'},{ar:'خط الأساس ±25%',en:'Baseline ±25%'},{ar:'خط الأساس ±50%',en:'Baseline ±50%'}],
          [{ar:'حساسية التباين المنخفض',en:'Low contrast sensitivity'},{ar:'كل 4-6 أشهر',en:'Every 4-6 months'},{ar:'خط الأساس ± مجموعتين',en:'Baseline ± 2 groups'},{ar:'—',en:'—'}],
          [{ar:'الدقة المكانية الحدية DR/CR',en:'DR/CR limiting spatial resolution'},{ar:'كل 4-6 أشهر',en:'Every 4-6 months'},{ar:'خط الأساس ناقص 25%',en:'Baseline minus 25%'},{ar:'—',en:'—'}],
          [{ar:'جهد الأنبوب kV',en:'Tube kV'},{ar:'كل 1-2 سنة',en:'Every 1-2 years'},{ar:'±5% أو ±5 kV',en:'±5% or ±5 kV'},{ar:'±10% أو ±10 kV',en:'±10% or ±10 kV'}]
        ]}},
    { h:{ar:'اختبارات الكاشف وجودة الصورة', en:'Detector and image-quality tests'},
      paras:[
        {ar:'تُختبر حساسية التباين المنخفض كل أربعة إلى ستة أشهر بجسم اختبار قياسي (مثل أجسام Leeds)، ويُعد الانحراف بمقدار مجموعتين عن خط الأساس حدًا علاجيًا. وبنفس الدورية تُقاس الدقة المكانية الحدية لأنظمة DR وCR بنمط قضبان رصاصية متدرجة، وحدها العلاجي انخفاض قدره 25% عن خط الأساس، بينما تُفحص قابلية كشف التباين عند العتبة (Threshold contrast detail detectability) سنويًا بجسم اختبار مناسب مع ترشيح وجهد ملائمين.',
         en:'Low contrast sensitivity is tested every four to six months with a standard test object (such as the Leeds test objects), where a change of two groups from baseline is the remedial threshold. At the same interval, the limiting spatial resolution of DR and CR systems is measured with a lead bar pattern, with a remedial level of a 25 percent fall from baseline, while threshold contrast detail detectability is assessed annually with an appropriate test object at suitable filtration and kV.'},
        {ar:'وتشمل اختبارات الكاشف السنوية: ضجيج الظلام (Dark noise) عند غياب التعريض أو تعريض منخفض جدًا بحد علاجي ±50% من خط الأساس، وانتظام الاستجابة المقاس (Measured uniformity) من صورة دون جسم تُحلل فيها مناطق اهتمام في الأركان والمركز بحد علاجي ±5% للمتوسط، وانتظام الدقة بتصوير شبكة أسلاك دقيقة بحثًا عن أي زيادة في الضبابية، وأخطاء المقياس (Scaling errors) بتصوير شبكة مع جسم معلوم الطول ويُعد الانحراف فوق 2% حدًا علاجيًا.',
         en:'Annual detector tests include dark noise, measured with no exposure or a very low exposure, with a remedial level of plus or minus 50 percent of baseline; measured uniformity, from an image taken with no object, analysing regions of interest over the quadrants and centre, with a remedial level of plus or minus 5 percent of the mean; uniformity of resolution, by imaging a fine wire mesh and looking for any increase in blurring; and scaling errors, by imaging a grid together with an object of known length, where a deviation above 2 percent is the remedial level.'}
      ],
      bullets:[
        {ar:'تُسجل كل النتائج وتُقارن بخط الأساس لا بالقيم المطلقة وحدها، فالانحراف عن الأداء الأصلي هو إشارة الخطر', en:'Results are recorded and compared with the baseline, not just with absolute values: drift away from original performance is the warning sign'},
        {ar:'تجاوز المستوى العلاجي يعني جدولة إصلاح، وتجاوز مستوى الإيقاف يعني إخراج الجهاز من الخدمة فورًا', en:'Passing the remedial level means scheduling repair; passing the suspension level means removing the equipment from service at once'}
      ]}
  ],
  quiz:[
    { q:{ar:'ماذا يعني تجاوز أحد اختبارات الجهاز لمستوى الإيقاف (Suspension level)؟', en:'What does it mean if an equipment test exceeds its suspension level?'},
      opts:[{ar:'يُستخدم الجهاز بحذر حتى نهاية الشهر',en:'Use the equipment carefully until the end of the month'},{ar:'يجب إيقاف استخدام الجهاز حتى يُصلح',en:'The equipment must not be used until it is repaired'},{ar:'تُعاد معايرة شاشة العرض فقط',en:'Only the display monitor needs recalibration'},{ar:'لا يلزم أي إجراء',en:'No action is needed'}], a:1,
      why:{ar:'مستوى الإيقاف هو حد السلامة الأقصى: تجاوزه يعني أن الأداء غير مقبول ويخرج الجهاز من الخدمة فورًا، خلافًا للمستوى العلاجي الذي يستوجب إصلاحًا مجدولًا.', en:'The suspension level is the ultimate safety threshold: beyond it performance is unacceptable and the equipment leaves service immediately, unlike the remedial level, which requires scheduled corrective action.'}},
    { q:{ar:'الترشيح الكلي لحزمة الأشعة يجب أن يعادل على الأقل:', en:'The total filtration of the X-ray beam should be equivalent to at least:'},
      opts:[{ar:'0.5 mm ألمنيوم',en:'0.5 mm aluminium'},{ar:'1 mm ألمنيوم',en:'1 mm aluminium'},{ar:'2.5 mm ألمنيوم',en:'2.5 mm aluminium'},{ar:'5 mm ألمنيوم',en:'5 mm aluminium'}], a:2,
      why:{ar:'يُتحقق من الترشيح سنويًا عبر قياس طبقة نصف القيمة ومقارنتها بالبيانات المرجعية، والمعيار أن يعادل الترشيح الكلي 2.5 mm من الألمنيوم على الأقل.', en:'Filtration is verified annually from a half-value-layer measurement compared with reference data, and the standard is a total filtration equivalent to at least 2.5 mm of aluminium.'}},
    { q:{ar:'في اختبار محاذاة حزمة الضوء على بعد متر واحد من البقعة البؤرية، مستوى الإيقاف هو انحراف قدره:', en:'In the light-beam alignment test at one metre from the focal spot, the suspension level is a misalignment of:'},
      opts:[{ar:'0.5 cm',en:'0.5 cm'},{ar:'1 cm',en:'1 cm'},{ar:'2 cm',en:'2 cm'},{ar:'3 cm',en:'3 cm'}], a:3,
      why:{ar:'الحد العلاجي لمحاذاة حزمة الضوء هو 1 cm على أي جانب عند متر واحد، أما 3 cm فهو مستوى الإيقاف الذي يمنع استخدام الجهاز.', en:'The remedial level for light-beam alignment is 1 cm on any side at one metre, while 3 cm is the suspension level at which the equipment must not be used.'}}
  ]
}
];
