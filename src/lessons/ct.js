export const LESSONS = [
{
  slug:'ct-equipment', chapter:'ct',
  title:{ar:'أجهزة التصوير المقطعي — CT Equipment', en:'CT Equipment'},
  intro:{ar:'تطوّرت أجهزة CT عبر أجيال متعاقبة اختلف فيها نمط حركة الأنبوب والكواشف، وكان الهدف الدائم هو تقليل زمن المسح. في هذا الدرس نستعرض الأجيال الخمسة، ثم المكوّنات الأساسية التي تشترك فيها الأجهزة الحديثة.',
         en:'CT scanners evolved through successive generations that differ in how the tube and detectors move, always aiming to cut scan time. This lesson reviews the five generations and then the core components shared by modern scanners.'},
  sections:[
    { h:{ar:'الجيلان الأول والثاني: حركة الانتقال والدوران', en:'Generations 1 and 2: translate–rotate'},
      paras:[
        {ar:'في الجيل الأول كانت الحزمة رفيعة كقلم الرصاص (pencil beam) وتلتقطها كاشفة واحدة فقط. يتحرّك الأنبوب والكاشفة معًا في خط مستقيم عبر المريض (translate)، ثم يدوران بزاوية صغيرة ويكرّران الحركة حتى تكتمل بيانات المقطع الواحد، ثم ينزل الجهاز إلى المقطع التالي.',
         en:'In the first generation a narrow pencil beam was picked up by a single detector. Tube and detector moved together in a straight line across the patient (translate), then rotated by a small angle and repeated the sweep until one slice was complete, before stepping down to the next slice.'},
        {ar:'احتفظ الجيل الثاني بنفس مبدأ translate–rotate، لكنه استخدم حزمة مروحية ضيّقة وصفًّا من الكواشف يصل إلى 30 كاشفًا، فالتقط عدة قياسات في كل انتقالة وقصّر زمن المسح كثيرًا مقارنة بالجيل الأول.',
         en:'The second generation kept the same translate–rotate principle but used a narrow fan beam and a row of up to 30 detectors, capturing several measurements per sweep and shortening scan time greatly compared with the first generation.'}
      ],
      nums:[
        {v:'5 min', ar:'زمن مسح المقطع الواحد في الجيل الأول', en:'Scan time per slice in the 1st generation'},
        {v:'30', ar:'أقصى عدد كواشف في الجيل الثاني', en:'Maximum detectors in the 2nd generation'},
        {v:'5–90 s', ar:'زمن مسح المقطع في الجيل الثاني', en:'Scan time per slice in the 2nd generation'}
      ]},
    { h:{ar:'الجيلان الثالث والرابع', en:'Generations 3 and 4'},
      paras:[
        {ar:'في الجيل الثالث أصبحت الحزمة المروحية واسعة بما يكفي لتغطية المقطع كاملًا، ويدور الأنبوب وصفّ الكواشف المنحني معًا حول المريض بحركة rotate–rotate دون أي انتقال خطّي. يمكن بعد كل دوران الانتقال إلى مقطع جديد (axial scanning) أو تحريك الطاولة باستمرار أثناء الدوران (spiral scanning)، وهذا الجيل هو الأكثر استخدامًا اليوم.',
         en:'In the third generation the fan beam became wide enough to cover the whole slice, and the tube rotates together with a curved detector row around the patient (rotate–rotate) with no linear translation. After each rotation the scanner can step to a new slice (axial scanning) or move the couch continuously during rotation (spiral scanning); this is the generation in widest use today.'},
        {ar:'أما الجيل الرابع فيعتمد على حلقة كاملة ثابتة من الكواشف تحيط بالمريض (rotate–fixed) بينما يدور مصدر الأشعة وحده داخلها. رغم أناقة الفكرة، لم ينتشر هذا التصميم واسعًا في الممارسة الحديثة.',
         en:'The fourth generation uses a complete fixed ring of detectors surrounding the patient (rotate–fixed) while the X-ray source alone rotates inside it. Despite the elegant concept, this design never became common in modern practice.'}
      ],
      table:{ head:[{ar:'الجيل',en:'Generation'},{ar:'نمط الحركة',en:'Geometry'},{ar:'الكاشف',en:'Detectors'},{ar:'زمن المقطع',en:'Time per slice'}],
        rows:[
          [{ar:'الأول',en:'1st'},{ar:'انتقال ثم دوران',en:'Translate–rotate'},{ar:'كاشف واحد',en:'Single'},{ar:'نحو 5 دقائق',en:'About 5 min'}],
          [{ar:'الثاني',en:'2nd'},{ar:'انتقال ثم دوران',en:'Translate–rotate'},{ar:'صفّ حتى 30',en:'Row of up to 30'},{ar:'5–90 ثانية',en:'5–90 s'}],
          [{ar:'الثالث',en:'3rd'},{ar:'دوران مشترك',en:'Rotate–rotate'},{ar:'صفّ منحني واسع',en:'Wide curved row'},{ar:'نحو 0.3 ثانية',en:'About 0.3 s'}],
          [{ar:'الرابع',en:'4th'},{ar:'أنبوب يدور وكواشف ثابتة',en:'Rotate–fixed'},{ar:'حلقة ثابتة كاملة',en:'Complete fixed ring'},{ar:'سريع لكنه غير شائع',en:'Fast but uncommon'}]
        ]},
      nums:[ {v:'0.3 s', ar:'زمن تصوير المقطع الواحد في الجيل الثالث', en:'Time to image one slice in the 3rd generation'} ]},
    { h:{ar:'ماسح الحزمة الإلكترونية', en:'Electron beam scanner'},
      paras:[
        {ar:'يُوصف ماسح الحزمة الإلكترونية أحيانًا بأنه الجيل الخامس. لا يوجد فيه أنبوب أشعة دوّار؛ بل تُحرَّف حزمة إلكترونات بمجال كهرومغناطيسي لتجوب هدفًا ثابتًا من التنغستن أسفل المريض، فتنطلق الأشعة عبر المريض إلى كواشف فوقه.',
         en:'The electron beam scanner is sometimes called the fifth generation. It has no rotating X-ray tube; instead an electron beam is steered by an electromagnetic field across a fixed tungsten target beneath the patient, firing X-rays through the patient to detectors above.'},
        {ar:'لغياب الأجزاء الدوّارة يصل زمن المسح إلى 50–250 ميلي ثانية، ما يجعله مناسبًا خصوصًا لتصوير القلب الذي لا يتوقف عن الحركة.',
         en:'With no rotating parts, scan times reach 50–250 ms, which suits it particularly to imaging the constantly moving heart.'}
      ],
      nums:[ {v:'50–250 ms', ar:'زمن مسح ماسح الحزمة الإلكترونية', en:'Electron beam scan time'} ]},
    { h:{ar:'المكوّنات الأساسية للماسح', en:'Core scanner components'},
      bullets:[
        {ar:'المرشّح (Filter): يوضع بين المصدر والمريض فيمتص الفوتونات منخفضة الطاقة ويجعل الحزمة أقرب إلى أحادية الطاقة؛ وقد يكون على شكل ربطة فراشية (bowtie) لمعادلة التوهين عبر سماكات الجسم المختلفة.',
         en:'Filter: sits between source and patient, absorbs low-energy photons and makes the beam more monochromatic; it may be bowtie-shaped to even out attenuation across the body profile.'},
        {ar:'الموجّه (Collimator): يضبط عرض الحزمة قبل وصولها إلى المريض، فيحدّد سماكة المقطع ويقلّل التشتّت الخارج عن المقطع ويخفض جرعة المريض.',
         en:'Collimator: shapes the beam before the patient, setting slice thickness, reducing out-of-slice scatter and lowering patient dose.'},
        {ar:'صفّ الكواشف (Detector array): النوع السائد اليوم هو الكاشف الصلب (solid state) الذي تحوّل فيه طبقة وامضة (scintillator) الأشعة إلى ضوء يُقاس إلكترونيًا؛ أما كواشف غرف التأيّن الغازية فقد خرجت من الاستخدام.',
         en:'Detector array: the dominant type today is the solid-state detector, where a scintillator layer converts X-rays into light that is measured electronically; gas ionisation chamber detectors are obsolete.'},
        {ar:'الهيكل الدوّار (Gantry): تتيح تقنية الحلقات المنزلقة (slip rings) دورانًا مستمرًا دون كابلات ملتوية، وهي أساس المسح الحلزوني الحديث.',
         en:'Gantry: slip-ring technology allows continuous rotation without trailing cables and underpins modern spiral scanning.'}
      ]}
  ],
  quiz:[
    { q:{ar:'ما المبدأ الحركي للجيل الثالث من أجهزة CT؟', en:'What is the motion principle of third-generation CT?'},
      opts:[{ar:'انتقال ثم دوران بكاشف واحد',en:'Translate–rotate with one detector'},{ar:'يدور الأنبوب وصفّ الكواشف معًا',en:'Tube and detector row rotate together'},{ar:'كواشف ثابتة وأنبوب دوّار فقط',en:'Fixed detectors with a rotating tube only'},{ar:'لا توجد أجزاء متحركة إطلاقًا',en:'No moving parts at all'}],
      a:1, why:{ar:'الجيل الثالث هو rotate–rotate: حزمة مروحية واسعة وصفّ كواشف منحني يدوران معًا، وهو الأكثر استخدامًا اليوم.', en:'The third generation is rotate–rotate: a wide fan beam and curved detector row rotate together, and it is the most widely used today.'} },
    { q:{ar:'ما الوظيفة الأساسية لمرشّح الحزمة قبل المريض؟', en:'What is the main role of the pre-patient filter?'},
      opts:[{ar:'زيادة عدد الفوتونات منخفضة الطاقة',en:'Increasing low-energy photons'},{ar:'امتصاص الفوتونات منخفضة الطاقة وتقريب الحزمة من أحادية الطاقة',en:'Absorbing low-energy photons so the beam is more monochromatic'},{ar:'تحديد سماكة المقطع',en:'Setting the slice thickness'},{ar:'تحويل الأشعة إلى ضوء',en:'Converting X-rays into light'}],
      a:1, why:{ar:'المرشّح يزيل الفوتونات الرخوة التي تزيد الجرعة دون أن تسهم في الصورة؛ أما سماكة المقطع فوظيفة الموجّه.', en:'The filter removes soft photons that add dose without contributing to the image; slice thickness is the collimator\u2019s job.'} },
    { q:{ar:'لماذا يُفضَّل ماسح الحزمة الإلكترونية لتصوير القلب؟', en:'Why is the electron beam scanner favoured for cardiac imaging?'},
      opts:[{ar:'لأنه الأرخص ثمنًا',en:'Because it is the cheapest'},{ar:'لأن زمن مسحه 50–250 ms لغياب الأجزاء الدوّارة',en:'Because its 50–250 ms scan time comes from having no rotating parts'},{ar:'لأنه يستخدم كواشف غازية',en:'Because it uses gas detectors'},{ar:'لأنه يعمل دون أشعة سينية',en:'Because it uses no X-rays'}],
      a:1, why:{ar:'تُحرَّف حزمة الإلكترونات كهرومغناطيسيًا على هدف تنغستن ثابت، فلا أجزاء دوّارة تبطئ المسح.', en:'The electron beam is swept electromagnetically over a fixed tungsten target, so no rotating hardware slows the scan.'} }
  ]
},
{
  slug:'acquiring-an-image-part-1', chapter:'ct',
  title:{ar:'اكتساب الصورة (1): المسح المحوري والحلزوني و Pitch', en:'Acquiring an Image Part 1: Axial & Spiral Scanning and Pitch'},
  intro:{ar:'يناقش هذا الدرس كيف تجمع العتاديات البيانات فعليًا: الفرق بين المسح المحوري والحلزوني، ومفهوم Pitch الذي يربط حركة الطاولة بعرض الحزمة، ثم المسح متعدد الشرائح وأنواع مصفوفات كواشفه.',
         en:'This lesson covers how the hardware actually gathers data: axial versus spiral scanning, the concept of pitch linking couch travel to beam width, and multislice scanning with its detector array designs.'},
  sections:[
    { h:{ar:'المسح المحوري مقابل الحلزوني', en:'Axial versus spiral scanning'},
      paras:[
        {ar:'في المسح المحوري (axial) يعمل الجهاز بأسلوب «توقّف وصوّر» (step and shoot): يدور الهيكل ليجمع بيانات مقطع واحد، تنطفئ الأشعة، تتحرّك الطاولة إلى الموضع التالي، ثم يتكرر الأمر. كل مقطع يُقتنى منفصلًا عن جيرانه.',
         en:'In axial scanning the scanner works in a "step and shoot" fashion: the gantry rotates to collect one slice, the beam switches off, the couch advances to the next position, and the cycle repeats. Each slice is acquired separately from its neighbours.'},
        {ar:'أما المسح الحلزوني (spiral/helical) فيدور فيه الهيكل بلا توقف أثناء تحرّك الطاولة، فترسم الحزمة مسارًا حلزونيًا متصلًا حول المريض ويُقتنى حجم كامل من البيانات دفعة واحدة، ومنه تُبنى المقاطع عند أي مستوى لاحقًا.',
         en:'In spiral (helical) scanning the gantry rotates without stopping while the couch moves, so the beam traces a continuous helix around the patient and a whole volume of data is acquired at once, from which slices are later reconstructed at any level.'}
      ],
      bullets:[
        {ar:'إتمام المسح في نفَس واحد يلغي أخطاء التسجيل الناتجة عن التنفس بين المقاطع.', en:'Completing the scan in a single breath-hold removes respiratory misregistration between slices.'},
        {ar:'السرعة تتيح التقاط عدّة أطوار تباين (شرياني، وريدي بابي، متأخر) من حقنة واحدة.', en:'The speed allows several contrast phases (arterial, portal venous, delayed) from one injection.'},
        {ar:'المقاطع المتداخلة تحسّن إعادة البناء وتُظهر الآفات الصغيرة بشكل أفضل.', en:'Overlapping slices improve reconstructions and show small lesions better.'},
        {ar:'رفع Pitch فوق 1 يختصر الزمن والجرعة مع تغطية الحجم نفسه، ولذلك صارت كل الفحوص الحديثة حلزونية.', en:'Pitch above 1 shortens time and dose for the same volume, which is why virtually all modern scanning is spiral.'}
      ]},
    { h:{ar:'مفهوم Pitch', en:'The concept of pitch'},
      paras:[
        {ar:'يقيس Pitch مدى تداخل الحزمة أثناء المسح الحلزوني، ويُعرَّف بأنه المسافة التي تقطعها الطاولة في دورة كاملة مقسومة على عرض الحزمة (سماكة المقطع في الماسح أحادي الشريحة). فإذا تحرّكت الطاولة 20 mm في الدورة وكان عرض الحزمة 10 mm فإن Pitch يساوي 2.',
         en:'Pitch quantifies how much the beam overlaps during spiral scanning: it is the couch travel per rotation divided by the beam width (the slice width in a single-slice scanner). If the couch moves 20 mm per rotation with a 10 mm beam, pitch equals 2.'},
        {ar:'عندما يكون Pitch أكبر من 1 تتحرّك الطاولة أكثر من عرض الحزمة فتوجد فجوات نسبية في التغطية وتقلّ الجرعة ويقصر الزمن، لكن البيانات تصبح أقل كثافة في العيّنات. وعندما يكون أصغر من 1 تتداخل الحزمة مع نفسها فيُعاد مسح أجزاء من الأنسجة أكثر من مرة.',
         en:'With pitch above 1 the couch travels further than the beam width, leaving relative gaps in coverage; dose falls and scanning is faster, but the data are more sparsely sampled. With pitch below 1 the beam overlaps itself and parts of the tissue are scanned more than once.'}
      ],
      table:{ head:[{ar:'قيمة Pitch',en:'Pitch value'},{ar:'حركة الطاولة في الدورة (حزمة 10 mm)',en:'Couch travel per rotation (10 mm beam)'},{ar:'المعنى',en:'Meaning'}],
        rows:[
          [{ar:'2',en:'2'},{ar:'20 mm',en:'20 mm'},{ar:'فجوات: تغطية أسرع وجرعة أقل',en:'Gaps: faster coverage, lower dose'}],
          [{ar:'1',en:'1'},{ar:'10 mm',en:'10 mm'},{ar:'تلاصق تام دون تداخل',en:'Exactly contiguous, no overlap'}],
          [{ar:'0.5',en:'0.5'},{ar:'5 mm',en:'5 mm'},{ar:'تداخل: كل منطقة تُمسح مرتين تقريبًا',en:'Overlap: each region scanned about twice'}]
        ]},
      nums:[ {v:'Pitch = couch travel ÷ beam width', ar:'تعريف Pitch', en:'Definition of pitch'} ]},
    { h:{ar:'المسح متعدد الشرائح', en:'Multislice scanning'},
      paras:[
        {ar:'بدل صفّ واحد من الكواشف تستخدم الأجهزة الحديثة عدة صفوف متوازية على امتداد محور المريض (z-axis)، فيُقتنى أكثر من مقطع في الدورة الواحدة. يُختار عدد الصفوف المفعّلة مع ضبط الموجّه لتغيير سماكة المقطع المطلوبة.',
         en:'Instead of a single detector row, modern scanners use several parallel rows along the patient (z-axis), acquiring more than one slice per rotation. The number of active rows is selected together with the collimation to set the required slice thickness.'}
      ],
      bullets:[
        {ar:'عرض كلي أكبر للكواشف النشطة يعني تغطية أسرع للحجوم الطويلة.', en:'A wider total active detector width means faster coverage of long volumes.'},
        {ar:'مقاطع أرقّ تتيح تصويرًا ثلاثي الأبعاد وإعادة بناء متعدد المستويات بجودة عالية.', en:'Thinner slices enable high-quality 3D imaging and multiplanar reconstruction.'},
        {ar:'اقتناء عدة مقاطع آنيًا يحسّن التصوير الديناميكي ودراسات التروية.', en:'Simultaneous acquisition of several slices improves dynamic and perfusion imaging.'}
      ]},
    { h:{ar:'أنواع مصفوفات الكواشف متعددة الصفوف', en:'Multislice detector array designs'},
      bullets:[
        {ar:'المصفوفة الخطّية (Linear): كل عناصر الصفوف بعرض متساوٍ تمامًا من المركز إلى الأطراف.', en:'Linear array: every detector element has exactly the same width from centre to edge.'},
        {ar:'المصفوفة التكيّفية (Adaptive): أرقّ العناصر في الصفوف المركزية وتتّسع تدريجيًا نحو الخارج؛ بذلك تتحقق سماكات متنوعة بعدد قليل من العناصر، ويقلّ عدد الفواصل (septa) بين الصفوف فتتحسّن كفاءة الجرعة، لكن ترقية عدد القنوات لاحقًا تفرض استبدال الكاشف بتكلفة عالية.',
         en:'Adaptive array: the central rows are thinnest and widen progressively outwards; many slice widths are achieved with few elements and fewer dividing septa, improving dose efficiency, but upgrading channel numbers later means an expensive detector replacement.'},
        {ar:'المصفوفة الهجينة (Hybrid): عناصر كل مجموعة بعرض موحّد كما في الخطّية، لكن المجموعة المركزية أضيق من المجموعات الطرفية؛ وهي التصميم السائد في أجهزة 16 شريحة فأكثر.', en:'Hybrid array: elements are uniform within each group as in the linear design, but the central group is narrower than the outer groups; this is the standard design in 16-slice and above scanners.'}
      ]},
    { h:{ar:'Pitch في الأجهزة متعددة الشرائح وسماكة المقطع', en:'Multislice pitch and slice thickness'},
      paras:[
        {ar:'تظهر للـ Pitch في الأجهزة متعددة الشرائح صورتان: الأولى (detector pitch) تقسم حركة الطاولة على عرض الحزمة الكلي، وهي مماثلة لتعريف الشريحة الواحدة. أما التعريف الأدق استخدامًا (beam pitch) فيقسم حركة الطاولة على العرض الكلي لجميع الشرائح المقتناة آنيًا، لأنه يمثّل التداخل الحقيقي للحزمة.',
         en:'Pitch has two forms in multislice scanners: detector pitch divides couch travel by the total beam width, mirroring the single-slice definition. The more representative beam pitch divides couch travel by the total width of all slices acquired simultaneously, because it reflects the true beam overlap.'},
        {ar:'تختلف سماكة المقطع أيضًا بين النظامين: في أحادي الشريحة تحدّدها المواءمة (collimation) ويقيّدها عرض صفّ الكاشف، بينما في متعدد الشرائح تحدّدها عروض صفوف الكواشف المفعّلة ومجموعاتها.',
         en:'Slice thickness also differs between the systems: in single-slice CT it is set by collimation and limited by detector row width, whereas in multislice CT it is determined by the widths and grouping of the active detector rows.'}
      ]}
  ],
  quiz:[
    { q:{ar:'إذا تحرّكت الطاولة 15 mm في الدورة وكان عرض الحزمة 10 mm، فما قيمة Pitch؟', en:'If the couch travels 15 mm per rotation and the beam is 10 mm wide, what is the pitch?'},
      opts:[{ar:'0.5',en:'0.5'},{ar:'1',en:'1'},{ar:'1.5',en:'1.5'},{ar:'15',en:'15'}],
      a:2, why:{ar:'Pitch يساوي حركة الطاولة مقسومة على عرض الحزمة: 15 ÷ 10 = 1.5.', en:'Pitch is couch travel divided by beam width: 15 / 10 = 1.5.'} },
    { q:{ar:'أي تصميم مصفوفة كواشف تسوده العناصر الضيّقة مركزيًا والأوسع طرفيًا وهو الشائع في أجهزة 16 شريحة فأكثر؟', en:'Which detector array has narrower central elements and wider outer ones and dominates 16-slice and above scanners?'},
      opts:[{ar:'المصفوفة الخطّية',en:'Linear array'},{ar:'المصفوفة التكيّفية',en:'Adaptive array'},{ar:'المصفوفة الهجينة',en:'Hybrid array'},{ar:'حلقة الكواشف الثابتة',en:'Fixed detector ring'}],
      a:2, why:{ar:'المصفوفة الهجينة تجمع عرضًا موحّدًا داخل كل مجموعة مع مجموعة مركزية أضيق من الطرفية، وهي تصميم أجهزة 16 شريحة فأكثر.', en:'The hybrid array combines uniform element widths within groups with a narrower central group, and is the design used in 16-slice and above scanners.'} },
    { q:{ar:'أي مما يلي من مزايا المسح الحلزوني مقارنة بالمحوري؟', en:'Which of the following is an advantage of spiral over axial scanning?'},
      opts:[{ar:'إتمام الفحص في نفَس واحد فيلغي أخطاء تسجيل التنفس',en:'A single breath-hold acquisition removes respiratory misregistration'},{ar:'الاستغناء التام عن مادة التباين',en:'No contrast agent is ever needed'},{ar:'إلغاء Pitch من الحساب',en:'Pitch no longer needs defining'},{ar:'تصوير مقطع واحد في كل نفَس',en:'Only one slice is imaged per breath'}],
      a:0, why:{ar:'استمرارية المسح الحلزوني تسمح بتغطية الحجم كاملًا أثناء حبس نفَس واحد، فلا تتبدّل مواضع الأعضاء بين المقاطع بفعل التنفس.', en:'Continuous spiral coverage acquires the whole volume during one breath-hold, so organs do not shift between slices due to breathing.'} }
  ]
},
{
  slug:'acquiring-an-image-part-2', chapter:'ct',
  title:{ar:'اكتساب الصورة (2): إعادة بناء الصورة', en:'Acquiring an Image Part 2: Image Reconstruction'},
  intro:{ar:'لا تُعرض قياسات الكواشف كما هي؛ بل تمرّ بمرحلة إعادة بناء (reconstruction) تحوّل آلاف القياسات الإسقاطية إلى صورة مقطعية. يشرح هذا الدرس الإسقاط الخلفي، والإسقاط الخلفي المرشّح، وإعادة البناء التكراري، ومشكلة الاستيفاء الخاصة بالمسح الحلزوني.',
         en:'Detector measurements are never displayed directly; a reconstruction stage converts thousands of projection measurements into a cross-sectional image. This lesson explains back projection, filtered back projection, iterative reconstruction, and the interpolation problem unique to spiral scanning.'},
  sections:[
    { h:{ar:'من الإسقاطات إلى الصورة: الإسقاط الخلفي', en:'From projections to image: back projection'},
      paras:[
        {ar:'كل قياس تجمعه الكواشف أثناء الدوران هو مجموع التوهين الذي واجهته الحزمة على امتداد مسارها عبر الجسم، ويُسمى إسقاطًا (projection). ومجموع الإسقاطات من كل الزوايا هو المادة الخام التي تُبنى منها الصورة.',
         en:'Every measurement collected during rotation is the total attenuation along the beam path through the body, called a projection. The complete set of projections from all angles is the raw material from which the image is built.'},
        {ar:'أبسط طريقة للبناء هي الإسقاط الخلفي (back projection): يُوزَّع كل قياس بالتساوي على جميع البكسلات الواقعة على مساره، ثم تُجمع مساهمات كل الزوايا. النتيجة صورة تحمل شكل الجسم الصحيح لكنها ضبابية الحواف؛ فالنقطة الواحدة تنتشر في الصورة كلها بدل أن تبقى في مكانها.',
         en:'The simplest method is back projection: each measurement is smeared back evenly over all pixels along its path, and the contributions from all angles are summed. The result has the correct overall shape but blurred edges, because a single point spreads across the whole image instead of staying in place.'}
      ]},
    { h:{ar:'الإسقاط الخلفي المرشّح', en:'Filtered back projection'},
      paras:[
        {ar:'لحلّ مشكلة الضبابية تُمرَّر كل إسقاطة عبر مرشّح رياضي (filter/kernel) قبل إسقاطها خلفيًا، فيعزّز المرشّح الحواف الحادة ويعاكس التمويه الطبيعي للإسقاط الخلفي. هذه الطريقة، filtered back projection، كانت لعقود الخوارزمية القياسية في أجهزة CT لسرعتها وموثوقيتها.',
         en:'To fix the blurring, each projection is first passed through a mathematical filter (kernel) that sharpens edges and cancels the natural smearing of back projection. This filtered back projection was the standard CT algorithm for decades because it is fast and reliable.'},
        {ar:'يختار المستخدم نواة البناء بحسب المهمة: النواة الناعمة (soft tissue kernel) تنعّم الصورة وتقلّل الضجيج لدراسة الأنسجة الرخوة، بينما النواة الحادة (bone/sharp kernel) تُبرز التفاصيل الدقيقة في العظام والرئتين لكنها تُبقي ضجيجًا أعلى.',
         en:'The user picks the reconstruction kernel for the task: a soft tissue kernel smooths the image and lowers noise for soft-tissue review, while a sharp bone kernel reveals fine detail in bone and lung at the cost of higher visible noise.'}
      ]},
    { h:{ar:'إعادة البناء التكراري', en:'Iterative reconstruction'},
      paras:[
        {ar:'في إعادة البناء التكراري (iterative reconstruction) تُبنى صورة أولية ثم تُحاكى إسقاطاتها رياضيًا وتُقارن بالإسقاطات المقاسة فعليًا، ويُصحَّح الفرق وتتكرر الحلقة مرات عديدة حتى تتقارب الصورة المحاكاة من الواقع.',
         en:'In iterative reconstruction an initial image is formed, its projections are simulated mathematically and compared with the actually measured projections, the differences are corrected, and the loop repeats many times until the simulated image converges on reality.'},
        {ar:'لأن النموذج الرياضي يصف ضجيج القياس وفيزياء الحزمة بدقة أكبر، تنتج صورًا أنظف عند نفس الجرعة، أو تحافظ على جودة الصورة مع خفض الجرعة — ثمن ذلك حاجة أكبر إلى قدرة حسابية وزمن معالجة.',
         en:'Because the model describes measurement noise and beam physics more accurately, it yields cleaner images at the same dose, or preserves image quality at a reduced dose — at the price of far more computing power and processing time.'}
      ]},
    { h:{ar:'الاستيفاء في المسح الحلزوني', en:'Interpolation in spiral scanning'},
      paras:[
        {ar:'في المسح الحلزوني لا تقع الإسقاطات المستخدمة لبناء مقطع واحد في مستوًى واحد، لأن الطاولة تحرّكت أثناء الدوران؛ لذا تُستوفى (interpolation) البيانات لتقدير ما كانت ستقيسه الكواشف لو وُجدت في مستوى المقطع المطلوب.',
         en:'In spiral scanning the projections used to build one slice do not lie in a single plane, because the couch moved during rotation; the data are therefore interpolated to estimate what the detectors would have measured in the desired slice plane.'},
        {ar:'يستخدم الاستيفاء الخطّي بزاوية 360° بيانات دورة كاملة، فيتّسع العرض الفعّال للمقطع (effective slice width) خاصة عند Pitch مرتفع. أما الاستيفاء بزاوية 180° فيستفيد من الأشعة المتقابلة المكملة فيحتاج نصف دورة تقريبًا، فيبقى العرض الفعّال أضيق وتتحسّن الدقة على محور z.',
         en:'Linear interpolation over 360 degrees uses a full rotation of data, which broadens the effective slice width, especially at high pitch. Interpolation over 180 degrees exploits complementary opposed rays and needs only about half a rotation, keeping the effective slice narrower and improving z-axis resolution.'}
      ]},
    { h:{ar:'أرقام هاونسفيلد والنوافذ', en:'Hounsfield units and windowing'},
      paras:[
        {ar:'تُعبَّر قيم التوهين في الصورة النهائية بوحدات هاونسفيلد (Hounsfield units, HU) على سُلّم مرجعه الماء: الماء صفر، والهواء −1000، والدهون حول −100، والأنسجة الرخوة عادة بين +20 و+40، والعظم الكثيف قد يتجاوز +1000.',
         en:'Attenuation values in the final image are expressed in Hounsfield units (HU) on a scale referenced to water: water is 0, air is −1000, fat is around −100, soft tissues typically lie between +20 and +40, and dense bone can exceed +1000.'},
        {ar:'لا تستطيع الشاشة ولا العين إظهار آلاف الدرجات الرمادية دفعة واحدة بتمييز مفيد، فيُختار مدى ضيّق من القيم يُسمى النافذة: عرض النافذة (window width) يحدّد مدى القيم المعروضة، ومستواها (window level) يحدّد مركزها، فيُبرز كلٌّ من نافذة الرئة ونافذة الأنسجة الرخوة ونافذة العظم تراكيب مختلفة من البيانات نفسها.',
         en:'Neither screen nor eye can usefully separate thousands of grey levels at once, so a narrow value range called a window is selected: the window width sets the displayed range and the window level sets its centre, letting lung, soft-tissue and bone windows each bring out different structures from the same data.'}
      ],
      nums:[
        {v:'0 HU', ar:'قيمة الماء على سُلّم هاونسفيلد', en:'Water on the Hounsfield scale'},
        {v:'−1000 HU', ar:'قيمة الهواء', en:'Air on the Hounsfield scale'}
      ],
      table:{
        head:[{ar:'النسيج / المادة', en:'Tissue / material'}, {ar:'قيمة HU تقريبية', en:'Typical HU'}],
        rows:[
          [{ar:'الهواء', en:'Air'}, {ar:'−1000', en:'−1000'}],
          [{ar:'الرئة', en:'Lung'}, {ar:'−500 إلى −900', en:'−500 to −900'}],
          [{ar:'الدهون', en:'Fat'}, {ar:'−50 إلى −100', en:'−50 to −100'}],
          [{ar:'الماء', en:'Water'}, {ar:'0', en:'0'}],
          [{ar:'الأنسجة الرخوة', en:'Soft tissue'}, {ar:'+20 إلى +40', en:'+20 to +40'}],
          [{ar:'الدم', en:'Blood'}, {ar:'+30 إلى +45', en:'+30 to +45'}],
          [{ar:'العظم', en:'Bone'}, {ar:'+400 إلى +1000 وأكثر', en:'+400 to +1000 and above'}]
        ]
      }}
  ],
  quiz:[
    { q:{ar:'لماذا تبدو الصورة الناتجة عن الإسقاط الخلفي وحده ضبابية؟', en:'Why is an image from simple back projection blurred?'},
      opts:[{ar:'لأن الكواشف لا تقيس بدقة',en:'Because detectors measure inaccurately'},{ar:'لأن كل قياس يُوزَّع على كامل مساره فتنتشر كل نقطة في الصورة',en:'Because each measurement is smeared along its whole path, spreading every point'},{ar:'بسبب حركة المريض دائمًا',en:'Always because of patient motion'},{ar:'لأن الجرعة منخفضة جدًا',en:'Because the dose is too low'}],
      a:1, why:{ar:'الإسقاط الخلفي يوزّع قيمة القياس بالتساوي على كل بكسلات المسار، فيتراكب انتشار النقاط ويطمس الحواف ما لم تُرشَّح الإسقاطات أولًا.', en:'Back projection spreads each measurement evenly over every pixel on its path, so points overlap and edges blur unless the projections are filtered first.'} },
    { q:{ar:'ما ميزة الاستيفاء بزاوية 180° على الاستيفاء بزاوية 360° في المسح الحلزوني؟', en:'What is the advantage of 180-degree over 360-degree interpolation in spiral CT?'},
      opts:[{ar:'يلغي الحاجة إلى الطاولة المتحركة',en:'It removes the need for a moving couch'},{ar:'يبقي العرض الفعّال للمقطع أضيق فيحسّن دقة محور z',en:'It keeps the effective slice width narrower, improving z-axis resolution'},{ar:'يخفض عدد الإسقاطات إلى النصف تمامًا دائمًا',en:'It always exactly halves the number of projections'},{ar:'يمنع تصليب الحزمة',en:'It prevents beam hardening'}],
      a:1, why:{ar:'استخدام الأشعة المتقابلة المكملة يقلّل مدى البيانات المستوفاة، فيتّسع المقطع الفعّال أقل مما يحدث مع بيانات دورة كاملة.', en:'Using complementary opposed rays shrinks the span of interpolated data, so the effective slice broadens less than with a full rotation of data.'} },
    { q:{ar:'ما الفائدة العملية الكبرى لإعادة البناء التكراري؟', en:'What is the main practical benefit of iterative reconstruction?'},
      opts:[{ar:'الاستغناء عن مادة التباين نهائيًا',en:'Contrast agents are never needed'},{ar:'صور أنظف عند الجرعة نفسها أو الحفاظ على الجودة بجرعة أقل',en:'Cleaner images at the same dose, or maintained quality at a lower dose'},{ar:'تسريع دوران الهيكل',en:'Faster gantry rotation'},{ar:'تكبير مجال الرؤية',en:'A larger field of view'}],
      a:1, why:{ar:'نمذجة الضجيج والفيزياء داخل حلقة التكرار تقلّل الضجيج الظاهر، فيُستثمر ذلك إما في جودة أعلى أو في خفض جرعة المريض.', en:'Modelling noise and physics inside the iteration loop lowers visible noise, which can be traded for higher quality or for a reduced patient dose.'} }
  ]
},
{
  slug:'ct-image-quality', chapter:'ct',
  title:{ar:'جودة صورة CT', en:'CT Image Quality'},
  intro:{ar:'تتحدد جودة صورة CT بثلاثة عوامل رئيسية: الدقّة (resolution)، والضجيج (noise)، والتباين (contrast). يفصّل هذا الدرس الدقة العرضية ودقة المحور z، وكيف يُقاس الضجيج ويُتحكّم به، والعوامل التي تصنع التباين.',
         en:'CT image quality rests on three main factors: resolution, noise and contrast. This lesson details in-plane and z-axis resolution, how noise is measured and controlled, and what creates contrast.'},
  sections:[
    { h:{ar:'الدقّة: عرضية وعلى محور z', en:'Resolution: in-plane and along z'},
      paras:[
        {ar:'الدقّة هي قدرة الصورة على إظهار جسمين متقاربين كتركيبين منفصلين، وتُقاس بأزواج الخطوط في السنتيمتر (lp/cm): كلما زاد العدد أمكن فصل تفاصيل أدقّ. تبلغ الدقة العرضية (transaxial) داخل مستوى المقطع نحو 7 lp/cm.',
         en:'Resolution is the ability of the image to show two close objects as separate structures, measured in line pairs per centimetre (lp/cm): the higher the value, the finer the detail resolved. In-plane (transaxial) resolution reaches about 7 lp/cm.'},
        {ar:'وللدقة وجه ثانٍ على امتداد المريض هو حساسية z (z-sensitivity)، أي العرض الفعّال للمقطع المصوَّر، وتتراوح عمليًا بين 0.5 و10 mm؛ فكلما ضاق المقطع الفعّال تحسّنت الدقة الطولية وقلّ خلط التراكيب المتجاورة على المحور الطولي.',
         en:'Resolution has a second face along the patient: z-sensitivity, the effective width of the imaged slice, which ranges practically between 0.5 and 10 mm. The narrower the effective slice, the better the longitudinal resolution and the less neighbouring structures are blended along z.'}
      ],
      nums:[
        {v:'7 lp/cm', ar:'الدقة العرضية التقريبية داخل المقطع', en:'Approximate transaxial resolution'},
        {v:'0.5–10 mm', ar:'مدى حساسية z (العرض الفعّال للمقطع)', en:'Range of z-sensitivity (effective slice width)'}
      ]},
    { h:{ar:'عوامل الدقة العرضية', en:'What sets transaxial resolution'},
      paras:[
        {ar:'تحدّد الدقةَ العرضية عوامل من العتاد: حجم البقعة البؤرية (focal spot)؛ إذ تمنح البقعة الأدقّ (نحو 0.7 mm) دقة أعلى من العريضة (نحو 1.2 mm) لكنها تحدّ من التيار الأقصى حمايةً للأنود، وتقنية البقعة البؤرية الطائرة (flying focal spot) التي تبدّل موضع البقعة بسرعة فتضاعف عدد العيّنات. ويضاف إليها حجم الكاشف وبُعدا البقعة عن الكاشف وعن مركز الدوران.',
         en:'Hardware factors set transaxial resolution: focal spot size, where the fine spot (about 0.7 mm) resolves better than the broad spot (about 1.2 mm) but caps the tube current to protect the anode; and the flying focal spot, which rapidly shifts spot position to multiply sampling. Detector size and the focus-to-detector and focus-to-isocentre distances also contribute.'},
        {ar:'من الحيل التصميمية إزاحة ربع الكاشف (quarter-ray offset): يُزاح مركز صفّ الكواشف عن مركز الدوران بمقدار ربع عرض الكاشف الواحد، فبعد نصف دورة تصبح العيّنات متداخلة بين الإسقاطات المتقابلة وتتضاعف كثافة العيّنة دون تغيير العتاد.',
         en:'A design trick is the quarter-ray detector offset: the detector array centre is shifted from the rotation centre by a quarter of one detector width, so after half a rotation the samples interleave with those of opposed projections, doubling sampling density with the same hardware.'},
        {ar:'ومن عوامل الاقتناء والبناء: عدد الإسقاطات، ونواة البناء؛ فالنواة الحادة تحسّن الدقة المكانية لكنها تُبقي ضجيجًا أكثر من الناعمة. أما حجم البكسل فيُحسب من المعادلة d = FOV/n حيث FOV مجال الرؤية وn حجم المصفوفة، وأعلى تردد مكاني يمكن تمثيله هو حد نايكويست fmax = 1/2d؛ فيتحسّن التردد الأقصى بتصغير مجال الرؤية أو تكبير المصفوفة. لاحظ أن التيار mA وجهد الأنبوب kV لا يؤثران في الدقة المكانية مباشرة.',
         en:'Acquisition and reconstruction factors include the number of projections and the reconstruction kernel; sharp kernels improve spatial resolution but retain more noise than smooth ones. Pixel size follows d = FOV/n, where FOV is the field of view and n the matrix size, and the highest representable spatial frequency is the Nyquist limit fmax = 1/2d; the limit rises by shrinking the field of view or enlarging the matrix. Note that tube current (mA) and voltage (kV) do not directly change spatial resolution.'}
      ],
      nums:[
        {v:'d = FOV ÷ n', ar:'حجم البكسل', en:'Pixel size'},
        {v:'fmax = 1 ÷ 2d', ar:'حد نايكويست لأعلى تردد مكاني', en:'Nyquist limit for spatial frequency'}
      ]},
    { h:{ar:'حساسية z وسماكة المقطع', en:'Z-sensitivity and slice thickness'},
      paras:[
        {ar:'تتحدد حساسية z بعرض صفّ الكاشف على محور z، وبمدى تداخل العيّنات؛ فاستخدام Pitch أصغر من 1 يجعل المقاطع متداخلة فيحسّن التحديد الطولي، كما تساعد البقعة البؤرية الأدقّ على إبقاء حواف المقطع حادة.',
         en:'Z-sensitivity is set by the detector row width along z and by how much samples overlap; using a pitch below 1 overlaps the slices and improves longitudinal definition, and a fine focal spot keeps slice edges sharp.'},
        {ar:'سماكة المقطع مفاضلة دائمة: المقطع الأرقّ يعطي دقة طولية أفضل وأثر حجم جزئي (partial volume) أقل، لكنه يجمع فوتونات أقل فيزداد الضجيج. وحين تتساوى أبعاد الفوكسل في المستوى وعلى محور z يصبح المسح متساوي الأبعاد (isotropic)، فتتحسّن إعادة البناء متعددة المستويات والعروض ثلاثية الأبعاد كما في تصوير القلب والأوعية والقولون.',
         en:'Slice thickness is a permanent trade-off: thinner slices give better longitudinal resolution and less partial volume effect, but collect fewer photons so noise rises. When voxel dimensions match in-plane and along z the scan is isotropic, improving multiplanar reformats and 3D displays such as cardiac, vascular and colonography work.'}
      ]},
    { h:{ar:'الضجيج', en:'Noise'},
      paras:[
        {ar:'حتى عند تصوير جسم متجانس تمامًا كالماء تتذبذب قيم HU حول متوسطها؛ هذا التذبذب هو الضجيج، ويُقاس عمليًا بالانحراف المعياري (standard deviation) لقيم HU داخل منطقة اهتمام في جسم متجانس أو مجسّم مائي. يفسد الضجيج دقة التباين المنخفض ويجعل قيم HU غير مؤكدة.',
         en:'Even imaging a perfectly uniform object such as water, HU values fluctuate around their mean; that fluctuation is noise, measured practically as the standard deviation of HU inside a region of interest in a uniform object or water phantom. Noise degrades low-contrast resolution and makes HU values uncertain.'},
        {ar:'مصادر الضجيج ثلاثة: الضجيج الكمّي (quantum noise) الناتج عن عشوائية وصول الفوتونات إلى الكواشف وهو الغالب، والضجيج الإلكتروني في سلسلة الكشف، وضجيج تضيفه عملية إعادة البناء ذاتها. يخضع الضجيج الكمّي لقانون إحصائي بسيط: يتناسب الضجيج عكسيًا مع الجذر التربيعي لعدد الفوتونات، فمضاعفة الفوتونات تخفض الضجيج بمعامل √2، ولكي ينخفض إلى النصف نحتاج أربعة أضعاف الفوتونات.',
         en:'Noise has three sources: quantum noise from the random arrival of photons at the detectors, which dominates; electronic noise in the detection chain; and noise added by reconstruction itself. Quantum noise obeys a simple statistical law: it is inversely proportional to the square root of the photon count, so doubling the photons cuts noise by a factor of root 2, and halving noise demands four times the photons.'},
        {ar:'تتحقق زيادة الفوتونات بمضاعفة التيار mA أو زمن الدوران أو سماكة المقطع، فلكلٍّ منها أثر مباشر متناسب. أما رفع الجهد kV فيزيد الفيض الفوتوني أيضًا لكن بعلاقة غير خطّية، إذ يتناسب الخرج تقريبًا مع مربع الجهد.',
         en:'More photons are obtained by doubling tube current, rotation time or slice thickness, each with a directly proportional effect. Raising tube voltage also increases photon flux, but non-linearly, since output rises roughly with the square of the voltage.'}
      ],
      nums:[
        {v:'Noise ∝ 1/√N', ar:'علاقة الضجيج بعدد الفوتونات', en:'Noise versus photon count'},
        {v:'×4 photons', ar:'ما يلزم لخفض الضجيج إلى النصف', en:'Photons needed to halve the noise'}
      ]},
    { h:{ar:'التباين', en:'Contrast'},
      paras:[
        {ar:'ينشأ التباين أصلًا من اختلاف معاملات التوهين الخطّي (linear attenuation coefficients) بين الأنسجة المتجاورة؛ فكلما تباعدت قيم التوهين ظهر الفرق أوضح في الصورة. ويعمل الضجيج ضد التباين دائمًا: ارتفاعه يحجب الفروق الدقيقة، ولذلك يحسّن رفع التيار mA التباين الظاهر عبر خفض الضجيج.',
         en:'Contrast originates in differences between the linear attenuation coefficients of neighbouring tissues; the further apart the attenuation values, the clearer the visible difference. Noise always works against contrast: higher noise masks subtle differences, so raising tube current improves apparent contrast by reducing noise.'},
        {ar:'يؤدي رفع جهد الحزمة kV عمومًا إلى تقليل التباين بين الأنسجة، لأن الفروق النسبية في التوهين تتقارب عند الطاقات الأعلى. وتظل مواد التباين الأداة المباشرة لرفع التباين، إذ تزيد توهين الأوعية والأنسجة المستهدفة فتفصلها عمّا حولها.',
         en:'Raising beam voltage generally reduces tissue contrast, because relative attenuation differences converge at higher energies. Contrast media remain the direct tool for boosting contrast, increasing attenuation of vessels and target tissues so they separate from their surroundings.'}
      ]}
  ],
  quiz:[
    { q:{ar:'مجال رؤية 250 mm ومصفوفة 512، فما حجم البكسل التقريبي؟', en:'With a 250 mm field of view and a 512 matrix, what is the approximate pixel size?'},
      opts:[{ar:'0.25 mm',en:'0.25 mm'},{ar:'0.5 mm',en:'0.5 mm'},{ar:'1 mm',en:'1 mm'},{ar:'2 mm',en:'2 mm'}],
      a:1, why:{ar:'حجم البكسل d = FOV/n = 250/512 ≈ 0.5 mm.', en:'Pixel size d = FOV/n = 250/512, which is about 0.5 mm.'} },
    { q:{ar:'نريد خفض ضجيج الصورة إلى النصف دون تغيير سماكة المقطع أو زمن الدوران؛ كم مرة يجب مضاعفة التيار mA تقريبًا؟', en:'To halve image noise without changing slice thickness or rotation time, roughly how many times must the tube current rise?'},
      opts:[{ar:'مرتان',en:'Twice'},{ar:'ثلاث مرات',en:'Three times'},{ar:'أربع مرات',en:'Four times'},{ar:'لا علاقة للتيار بالضجيج',en:'Current is unrelated to noise'}],
      a:2, why:{ar:'الضجيج يتناسب مع 1/√N؛ ولخفضه إلى النصف يلزم أربعة أضعاف الفوتونات، والفوتونات تتناسب طرديًا مع التيار.', en:'Noise follows 1 over root N; halving it needs four times the photons, and photons rise in direct proportion to tube current.'} },
    { q:{ar:'ما الغرض من إزاحة ربع الكاشف (quarter-ray offset)؟', en:'What is the purpose of the quarter-ray detector offset?'},
      opts:[{ar:'تقليل جرعة المريض إلى الربع',en:'Cutting patient dose to a quarter'},{ar:'تداخل العيّنات بين الإسقاطات المتقابلة فيتضاعف التحديد المكاني',en:'Interleaving samples from opposed projections to double spatial sampling'},{ar:'تبريد الكواشف',en:'Cooling the detectors'},{ar:'إلغاء أثر الحجم الجزئي',en:'Eliminating partial volume effect'}],
      a:1, why:{ar:'إزاحة مركز المصفوفة ربع عرض كاشف تجعل عيّنات نصف الدورة الثاني تقع بين عيّنات الأول، فتزداد كثافة العيّنة وتتحسن الدقة.', en:'Offsetting the array centre by a quarter detector width makes second-half-rotation samples fall between the first ones, increasing sampling density and resolution.'} }
  ]
},
{
  slug:'ct-dose', chapter:'ct',
  title:{ar:'جرعة CT', en:'CT Dose'},
  intro:{ar:'تُبنى مقادير جرعة CT كسلّم متدرّج: يبدأ من جرعة دورة واحدة في مجسّم، ثم يُصحَّح لتوزّع الجرعة داخل المقطع، ثم لأثر Pitch، ثم لطول المسح، وينتهي بالجرعة الفعّالة التي تقدّر الخطر البيولوجي. يشرح هذا الدرس كل درجة بمعادلتها ووحدتها.',
         en:'CT dose quantities form a ladder: starting from the dose of one rotation in a phantom, correcting for the dose distribution across the slice, then for pitch, then for scan length, and ending with effective dose as an estimate of biological risk. This lesson explains each rung with its equation and unit.'},
  sections:[
    { h:{ar:'مؤشر جرعة CT — CTDI', en:'CT dose index (CTDI)'},
      paras:[
        {ar:'نقطة البداية هي مؤشر جرعة CT (CTDI): جرعة الإشعاع التي يسلّمها دوران واحد للهيكل داخل مجسّم قياسي (phantom)، ويُقاس بوحدة mGy. ولأنه قياس في مجسّم لا في مريض، فهو مؤشر لخرج الجهاز وظروف الفحص لا جرعة مريض بعينه.',
         en:'The starting point is the CT dose index (CTDI): the radiation dose delivered by a single gantry rotation inside a standard phantom, measured in mGy. Because it is measured in a phantom rather than a patient, it indexes scanner output and exposure conditions rather than any individual dose.'},
        {ar:'يتأثر CTDI بعوامل مثل عرض المواءمة (collimation) والمسافة بين البقعة البؤرية ومركز الدوران (focus–isocentre distance)، لأنهما يغيّران هندسة الحزمة وتوزّعها في المجسّم.',
         en:'CTDI is influenced by factors such as collimation width and the focus-to-isocentre distance, because both alter beam geometry and its distribution in the phantom.'}
      ],
      nums:[ {v:'mGy', ar:'وحدة CTDI', en:'Unit of CTDI'} ]},
    { h:{ar:'المؤشر الموزون CTDIw', en:'Weighted CTDI (CTDIw)'},
      paras:[
        {ar:'الجرعة داخل المقطع ليست متساوية: فهي أعلى عند محيط الجسم منها عند مركزه. لذلك تُدمج قياسات المركز والمحيط في مؤشر موزون (CTDIw) يعطي المحيط وزنًا أكبر لأنه يمثّل حجمًا أكبر من النسيج.',
         en:'Dose across a slice is not uniform: it is higher at the body periphery than at the centre. Centre and periphery measurements are therefore combined into a weighted index (CTDIw) that weights the periphery more, since it represents a larger volume of tissue.'},
        {ar:'تُجرى القياسات في مجسّمين أسطوانيين: مجسّم رأس بقطر 16 cm ومجسّم جسم بقطر 32 cm، مع أجهزة قياس جرعة (dosimeters) عند المركز والمحيط، وتوجد حسابات منفصلة للأطفال.',
         en:'Measurements are made in cylindrical phantoms: a 16 cm head phantom and a 32 cm body phantom, with dosimeters placed centrally and peripherally, and separate calculations exist for paediatric patients.'}
      ],
      nums:[
        {v:'CTDIw = ⅓ centre + ⅔ periphery', ar:'معادلة المؤشر الموزون', en:'Weighted CTDI equation'},
        {v:'16 cm / 32 cm', ar:'قطرا مجسّمَي الرأس والجسم', en:'Head and body phantom diameters'}
      ]},
    { h:{ar:'المؤشر الحجمي CTDIvol وأثر Pitch', en:'Volume CTDI (CTDIvol) and the role of pitch'},
      paras:[
        {ar:'لا يفحص أحد مقطعًا وحيدًا؛ فتركيز الجرعة على امتداد المريض تحدّده درجة التداخل بين الدورات المتتالية، أي Pitch. يربط المؤشر الحجمي (CTDIvol) بين المؤشر الموزون وPitch بقسمة الأول على الثاني، فينخفض المؤشر كلما ارتفع Pitch لأن الفجوات بين الحزم تزيد.',
         en:'Nobody scans a single slice; how dose concentrates along the patient is governed by the overlap between successive rotations, that is, pitch. The volume CTDI (CTDIvol) divides the weighted index by pitch, so the value falls as pitch rises because the gaps between beam passes widen.'},
        {ar:'تنبيه عملي: كثير من المصنّعين يعوّضون تلقائيًا عن تغيّر Pitch برفع التيار mA أو خفضه (ما يعرف بالتيار الفعّال) لإبقاء الضجيج — وبالتالي الجرعة — ثابتًا تقريبًا، فلا تنخدع بأن رفع Pitch وحده يضمن جرعة أقل في كل جهاز.',
         en:'A practical caution: many manufacturers automatically compensate for pitch changes by adjusting tube current (effective mAs) to keep noise, and therefore dose, roughly constant, so raising pitch alone does not guarantee a lower dose on every scanner.'}
      ],
      nums:[ {v:'CTDIvol = CTDIw ÷ pitch', ar:'معادلة المؤشر الحجمي', en:'Volume CTDI equation'} ]},
    { h:{ar:'حاصل طول الجرعة DLP', en:'Dose length product (DLP)'},
      paras:[
        {ar:'لكي نأخذ طول المنطقة الممسوحة في الحسبان نضرب CTDIvol في طول المسح فنحصل على حاصل طول الجرعة (DLP) بوحدة mGy·cm. فحصان بنفس CTDIvol لكن أحدهما ضعف طول الآخر يعطيان DLP مضاعفًا.',
         en:'To account for how much of the patient is scanned, CTDIvol is multiplied by the scan length to give the dose length product (DLP), in mGy·cm. Two scans with equal CTDIvol but double the length produce double the DLP.'},
        {ar:'لأن DLP يجمع شدة الجرعة ومداها معًا، فهو يتناسب مع الخطر الإشعاعي الكلي للمريض، ويُستخدم مدخلًا لتقدير الجرعة الفعّالة عند ضرب عوامل تحويل خاصة بمنطقة الجسم المفحوصة.',
         en:'Because DLP combines dose intensity and extent, it is proportional to the overall radiation risk to the patient and is the input for estimating effective dose via conversion factors specific to the body region scanned.'}
      ],
      nums:[ {v:'DLP = CTDIvol × scan length', ar:'معادلة حاصل طول الجرعة', en:'Dose length product equation'} ]},
    { h:{ar:'الجرعة الفعّالة', en:'Effective dose'},
      paras:[
        {ar:'لا تتساوى الأعضاء في حساسيتها للإشعاع؛ فالجرعة الفعّالة (E) تزن جرعات الأعضاء بعوامل ترجيح نسيجية (tissue weighting factors) تعكس قابلية كل عضو للضرر، ثم تجمعها في رقم واحد بوحدة mSv يعبّر عن الخطر الكلي المكافئ لو تعرّض له الجسم كله بالتساوي.',
         en:'Organs differ in radiosensitivity, so effective dose (E) weights each organ dose by tissue weighting factors reflecting its susceptibility to harm, then sums them into a single figure in mSv expressing the overall risk as if the whole body had been irradiated uniformly.'},
        {ar:'صياغة ICRP 103 تجمع على كل الأنسجة T حاصل ضرب عامل الترجيح النسيجي wT في الجرعة المكافئة HT للعضو (وهي بدورها مجموع جرعات أنواع الإشعاع مرجّحة بعوامل إشعاعية wR): E = Σ wT × HT. الجرعة الفعّالة تقدير للخطر يصلح للمقارنة بين الفحوص والبروتوكولات، لا قياس مباشر لجرعة فرد بعينه.',
         en:'In the ICRP 103 formulation, E sums over all tissues T the product of the tissue weighting factor wT and the equivalent dose HT (itself a sum of radiation-type doses weighted by radiation factors wR): E = sum of wT × HT. Effective dose is a risk estimate suited to comparing examinations and protocols, not a direct measurement for an individual.'}
      ],
      table:{ head:[{ar:'المقدار',en:'Quantity'},{ar:'ماذا يضيف؟',en:'What it adds'},{ar:'الوحدة',en:'Unit'}],
        rows:[
          [{ar:'CTDI',en:'CTDI'},{ar:'جرعة دوران واحد في مجسّم',en:'One-rotation dose in a phantom'},{ar:'mGy',en:'mGy'}],
          [{ar:'CTDIw',en:'CTDIw'},{ar:'تصحيح تفاوت الجرعة بين المركز والمحيط',en:'Corrects centre–periphery dose variation'},{ar:'mGy',en:'mGy'}],
          [{ar:'CTDIvol',en:'CTDIvol'},{ar:'إدخال أثر Pitch والتداخل',en:'Adds the effect of pitch and overlap'},{ar:'mGy',en:'mGy'}],
          [{ar:'DLP',en:'DLP'},{ar:'إدخال طول المسح الكلي',en:'Adds the total scan length'},{ar:'mGy·cm',en:'mGy·cm'}],
          [{ar:'الجرعة الفعّالة E',en:'Effective dose E'},{ar:'ترجيح بحساسية الأعضاء للخطر',en:'Weights by organ risk sensitivity'},{ar:'mSv',en:'mSv'}]
        ]}}
  ],
  quiz:[
    { q:{ar:'إذا كان CTDI عند المركز 12 mGy وعند المحيط 24 mGy، فما CTDIw؟', en:'If CTDI is 12 mGy at the centre and 24 mGy at the periphery, what is CTDIw?'},
      opts:[{ar:'16 mGy',en:'16 mGy'},{ar:'18 mGy',en:'18 mGy'},{ar:'20 mGy',en:'20 mGy'},{ar:'36 mGy',en:'36 mGy'}],
      a:2, why:{ar:'CTDIw = ثلث المركز + ثلثا المحيط = 4 + 16 = 20 mGy.', en:'CTDIw is one third of centre plus two thirds of periphery: 4 + 16 = 20 mGy.'} },
    { q:{ar:'ما أثر مضاعفة Pitch على CTDIvol بثبات بقية العوامل؟', en:'With other factors fixed, what does doubling pitch do to CTDIvol?'},
      opts:[{ar:'يضاعفه',en:'Doubles it'},{ar:'يخفضه إلى النصف',en:'Halves it'},{ar:'لا يغيّره إطلاقًا',en:'Leaves it unchanged'},{ar:'يرفعه أربع مرات',en:'Quadruples it'}],
      a:1, why:{ar:'CTDIvol = CTDIw ÷ pitch، فمضاعفة المقام تخفض الناتج إلى النصف (ما لم يعوّض الجهاز بالتيار تلقائيًا).', en:'CTDIvol equals CTDIw divided by pitch, so doubling the denominator halves the result, unless the scanner auto-compensates with tube current.'} },
    { q:{ar:'ما وحدة حاصل طول الجرعة DLP؟', en:'What is the unit of the dose length product (DLP)?'},
      opts:[{ar:'mSv',en:'mSv'},{ar:'mGy',en:'mGy'},{ar:'mGy·cm',en:'mGy·cm'},{ar:'Gy·cm²',en:'Gy·cm²'}],
      a:2, why:{ar:'DLP حاصل ضرب جرعة (mGy) في طول (cm)، فوحدته mGy·cm.', en:'DLP is a dose (mGy) multiplied by a length (cm), giving mGy·cm.'} }
  ]
},
{
  slug:'ct-artefacts', chapter:'ct',
  title:{ar:'عيوب صورة CT — Artefacts', en:'CT Artefacts'},
  intro:{ar:'العيب (artefact) أي تركيب ظاهر في الصورة لا يمثّل المريض. تُصنَّف عيوب CT إلى أربع مجموعات: فيزيائية المنشأ، ومرتبطة بالمريض، وناشئة من الماسح، وخاصة بالمسح الحلزوني ومتعدد الشرائح — ولكل عيب آليته وعلاجه.',
         en:'An artefact is any feature in the image that does not represent the patient. CT artefacts fall into four groups: physics-based, patient-related, scanner-based, and those specific to helical and multislice scanning — each with its own mechanism and remedy.'},
  sections:[
    { h:{ar:'تصليب الحزمة والتقعّر', en:'Beam hardening and cupping'},
      paras:[
        {ar:'حزمة الأشعة متعددة الطاقات؛ وحين تعبر نسيجًا كثيفًا تُمتص الفوتونات منخفضة الطاقة بنسبة أكبر، فترتفع الطاقة المتوسطة لما تبقّى من الحزمة — أي تتصلّب (beam hardening). يفسّر النظام هذا النفاذ الأعلى على أنه مرور عبر مادة أقل توهينًا، فيمنح المنطقة قيم HU أخفض مما تستحق فتبدو أغمق، وهو مشهور في الحفرة الخلفية للدماغ بين العظمين الصخريين الكثيفين.',
         en:'The X-ray beam is polyenergetic; passing through dense tissue, its low-energy photons are absorbed preferentially, so the mean energy of the surviving beam rises — it hardens. The system reads this extra transmission as a less attenuating material and assigns falsely low HU values, making the region appear darker, classically in the posterior fossa between the dense petrous bones.'},
        {ar:'ومن التصليب يولد عيب التقعّر (cupping): مركز الجسم المتجانس هو أسمك أجزائه فتتصلّب الحزمة فيه أكثر من الأطراف، فيظهر المركز بقيم HU أخفض وكأنه مقعّر التوزيع؛ ويُعالج بخوارزميات تصحيح تصليب الحزمة المدمجة في إعادة البناء.',
         en:'Hardening also produces cupping: the centre of a uniform object is its thickest part, so the beam hardens most there and the centre is assigned lower HU values, as if the profile were cupped; built-in beam-hardening correction algorithms address it.'}
      ],
      bullets:[
        {ar:'مرشّح قبل المريض يمتص الفوتونات الرخوة ابتداءً فيقلّل مقدار التصليب اللاحق.', en:'A pre-patient filter absorbs soft photons up front, reducing subsequent hardening.'},
        {ar:'المرشّح الفراشي (bowtie) يصلّب الحزمة مسبقًا بشكل متفاوت يعادل اختلاف سماكات الجسم عبر مجاله.', en:'The bowtie filter pre-hardens the beam differentially to match the varying body thickness across the field.'}
      ]},
    { h:{ar:'الحجم الجزئي والإسقاط الناقص ونفاد الفوتونات', en:'Partial volume, incomplete projection and photon starvation'},
      paras:[
        {ar:'إذا لم يملأ جسمٌ كثيف كاملَ سماكة المقطع أو كامل بصمة الكاشف، خُلط توهينه بتوهين ما حوله داخل الفوكسل نفسه فظهر بقيمة وسطية؛ هذا هو أثر الحجم الجزئي (partial volume). وقاعدة ثابتة: الحجم الجزئي لا يمكن إلا أن يخفض التوهين الظاهر للجسم الكثيف، لا أن يرفعه أبدًا — وعلاجه مقاطع أرقّ.',
         en:'If a dense object fills only part of the slice thickness or of the detector footprint, its attenuation is averaged with its surroundings inside the voxel and it appears with an intermediate value: the partial volume effect. One rule is absolute: partial volume can only lower the apparent attenuation of a dense object, never raise it — and thinner slices are the remedy.'},
        {ar:'إذا ظهر جسم في بعض الإسقاطات وغاب عن متقابلاتها — كذراعي المريض بجانبيه عند حافة المجال حيث الشعاع أكثر تباعدًا — تناقضت البيانات فامتدّ الجسم خطوطًا عبر الصورة (incomplete projection streaks). ومن العائلة نفسها نفاد الفوتونات (photon starvation): عبر الأجزاء الأسمك كالكتفين يصل عدد ضئيل من الفوتونات إلى الكواشف فتطغى العشوائية وتظهر خطوط ضجيج باتجاه أوسع أبعاد الجسم.',
         en:'If an object appears in some projections but not their opposites — like the patient arms at the field edge where the beam diverges most — the data conflict and the object smears into streaks (incomplete projection). Related is photon starvation: through the thickest parts such as the shoulders so few photons reach the detectors that randomness dominates, producing noisy streaks along the widest dimension of the object.'}
      ],
      bullets:[
        {ar:'الترشيح التكيّفي (adaptive filtering) ينعّم قبل الإسقاط الخلفي المناطق التي يتجاوز توهينها حدًّا معينًا.', en:'Adaptive filtering smooths, before back projection, regions whose attenuation exceeds a threshold.'},
        {ar:'تعديل التيار (mA modulation) يرفع التيار في الزوايا الأكثر توهينًا ويخفضه في غيرها، وتُقدَّر الحاجة من صورة الاستكشاف أو من تغذية راجعة آنية من الكواشف.', en:'Tube current modulation raises mA for the most attenuating angles and lowers it elsewhere, planned from the scout view or driven by real-time detector feedback.'}
      ]},
    { h:{ar:'عيوب مصدرها المريض: المعدن والحركة', en:'Patient-based artefacts: metal and motion'},
      paras:[
        {ar:'المعادن داخل مجال الفحص — والحشوات السنية والمواد عالية التوهين كمادة التباين الوريدية المركّزة — تجمع بين تصليب الحزمة ونفاد الفوتونات معًا فتنتج خطوطًا نجميّة شديدة حولها؛ يخففها تجنّب المعدن في المنطقة إن أمكن وتقنيات تصحيح التصليب نفسها.',
         en:'Metal in the field — dental fillings, and other highly attenuating material such as concentrated IV contrast — combines beam hardening with photon starvation, producing intense starburst streaks; removing metal from the region where possible and hardening corrections mitigate it.'},
        {ar:'حركة المريض أو أعضائه أثناء الدوران — بلع، تنفس، نبض القلب والأوعية، أو تحرّك إرادي — تجعل التركيب يُرصد في مواضع متعددة فيظهر مكرّرًا أو مموّهًا. يقاومها تقصير زمن الفحص والمسح الحلزوني، وحبس النفس والوضعية المريحة والتعليمات الواضحة، وبوابات ECG التي تزامن الاقتناء أو إعادة البناء مع طور سكون القلب نسبيًا، استباقيًا (prospective) أو بأثَر رجعي (retrospective).',
         en:'Movement of the patient or organs during rotation — swallowing, breathing, cardiac and vessel pulsation, or voluntary motion — makes a structure register in several positions and appear duplicated or smeared. Countermeasures include shorter scan times and spiral scanning, breath-holding, comfortable positioning and clear instructions, and ECG gating that synchronises acquisition or reconstruction with the relatively still cardiac phase, either prospectively or retrospectively.'},
        {ar:'كذلك تخلق الأجسام الواقعة خارج مجال الرؤية خطوطًا داخل الصورة إذا دخلت بعض الإسقاطات وخرجت من أخرى، وأشهرها ذراعا المريض منزّلتين بجانب الجسم في فحوص الصدر والبطن.',
         en:'Objects lying outside the field of view likewise create in-image streaks if they enter some projections and not others, the classic example being the arms resting down by the sides during chest and abdomen scans.'}
      ]},
    { h:{ar:'عيب الماسح: الحلقة', en:'Scanner-based: ring artefact'},
      paras:[
        {ar:'في هندسة الجيل الثالث يدور كل كاشف على مسار دائري ثابت حول مركز الدوران؛ فإذا تعطّل عنصر كاشف أو اختلّ معايرته (gain) عن جيرانه، رسم خطؤه الثابت دائرة كاملة في الصورة: العيب الحلقي (ring artefact). علاجه خدمي بحت: إعادة معايرة الكواشف أو استبدال العنصر المعطّل.',
         en:'In third-generation geometry each detector travels a fixed circular path around the rotation centre; if one element fails or its gain is miscalibrated relative to its neighbours, its constant error traces a complete circle in the image: the ring artefact. The fix is purely a service task — recalibrate the detectors or replace the faulty element.'}
      ]},
    { h:{ar:'عيوب الحلزوني ومتعدد الشرائح', en:'Helical and multislice artefacts'},
      paras:[
        {ar:'العيب الحلزوني (helical artefact): لأن نقطة القياس تتحرك على محور z أثناء الدوران، فإن أي تركيب يتغيّر شكله أو موضعه على امتداد z يُبنى من إسقاطات غير متسقة فيتشوّه. يزداد سوءًا مع ارتفاع Pitch ومع ازدياد تباين الجسم عن محيطه، وقد صار نادرًا مع وفرة الصفوف واستخدام Pitch أقل من 1.',
         en:'The helical artefact arises because the measurement point travels along z during rotation, so any structure changing shape or position along z is reconstructed from inconsistent projections and becomes distorted. It worsens with higher pitch and with greater object-to-background contrast, and has become rare with many detector rows and pitch below 1.'},
        {ar:'وعيب الحزمة المخروطية (cone beam artefact): حين تتّسع المواءمة في أجهزة متعددة الشرائح تتحول الحزمة من مروحية إلى مخروطية، فلم تعد البيانات في مستوى واحد بل في حجم، وتتشوّه الأجسام البعيدة عن المركز تشوّهًا يشبه الحجم الجزئي ويبلغ أشدّه عند حواف الحزمة؛ تعالجه خوارزميات إعادة بناء مخصّصة للحزمة المخروطية في الأجهزة الحديثة.',
         en:'The cone beam artefact appears when wide collimation in multislice scanners turns the fan beam into a cone: data occupy a volume rather than a plane, and off-centre objects distort in a partial-volume-like fashion, worst at the beam edges; dedicated cone-beam reconstruction algorithms correct it in modern scanners.'}
      ]}
  ],
  quiz:[
    { q:{ar:'لماذا تظهر قيم HU في مركز جسم متجانس أخفض من قيمته الحقيقية (عيب التقعّر)؟', en:'Why do HU values at the centre of a uniform object appear falsely low (cupping)?'},
      opts:[{ar:'لأن الكواشف المركزية أقل حساسية',en:'Because central detectors are less sensitive'},{ar:'لأن الحزمة تتصلّب أكثر في أسمك أجزاء الجسم فيُقرأ نفاذها على أنه توهين أقل',en:'Because the beam hardens most through the thickest part and its transmission is read as lower attenuation'},{ar:'بسبب حركة المريض',en:'Because of patient motion'},{ar:'لأن المركز أبعد عن الأنبوب دائمًا',en:'Because the centre is always furthest from the tube'}],
      a:1, why:{ar:'التصليب أعظم حيث السماكة أعظم أي المركز، فتُسند إليه قيم توهين أخفض، ويصحّح ذلك بخوارزميات تصحيح التصليب.', en:'Hardening is greatest where thickness is greatest, at the centre, so it is assigned lower attenuation values; beam-hardening correction algorithms fix it.'} },
    { q:{ar:'مريض به حشوات أسنان معدنية كثيفة؛ ما الآليتان المسببتان للخطوط حولها؟', en:'A patient has dense metal dental fillings; which two mechanisms cause the surrounding streaks?'},
      opts:[{ar:'الحركة والعيب الحلقي',en:'Motion and ring artefact'},{ar:'تصليب الحزمة ونفاد الفوتونات',en:'Beam hardening and photon starvation'},{ar:'الحجم الجزئي والحزمة المخروطية',en:'Partial volume and cone beam'},{ar:'الحلزوني والإسقاط الناقص',en:'Helical and incomplete projection'}],
      a:1, why:{ar:'المعدن شديد التوهين فيصلّب الحزمة بشدة ويمنع الفوتونات من الوصول، فتجتمع الآليتان في خطوط نجمية.', en:'Metal attenuates so strongly that it both hardens the beam severely and starves the detectors of photons, combining into starburst streaks.'} },
    { q:{ar:'عيب حلقي كامل في الصورة؛ ما سببه الأرجح؟', en:'A complete ring appears in the image; what is the most likely cause?'},
      opts:[{ar:'تنفس المريض',en:'Patient breathing'},{ar:'عنصر كاشف معطّل أو مختلّ المعايرة في جهاز من الجيل الثالث',en:'A faulty or miscalibrated detector element in a third-generation scanner'},{ar:'ارتفاع Pitch',en:'High pitch'},{ar:'نقص مادة التباين',en:'Too little contrast agent'}],
      a:1, why:{ar:'كل كاشف يرسم دائرة حول مركز الدوران؛ فالثبات في خطأ عنصر واحد يحوّل خطأه إلى حلقة كاملة في الصورة.', en:'Each detector traces a circle about the rotation centre, so a constant error in one element is drawn as a complete ring in the image.'} }
  ]
}
];
