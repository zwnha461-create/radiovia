// Ultrasound Imaging — original lesson content for Radiovia (facts re-expressed, not copied)
export const LESSONS = [
{
  slug:'properties-of-sound', chapter:'us',
  title:{ar:'خصائص الصوت', en:'Properties of Sound'},
  intro:{
    ar:'تعتمد الموجات فوق الصوتية على الصوت نفسه، لكن بترددات أعلى من حدود السمع البشري. لفهم الصورة لاحقًا، لا بد من إتقان طبيعة الموجة الصوتية: كيف تنتقل، وما سرعتها في الأنسجة، وكيف تضعف كلما تعمّقت.',
    en:'Ultrasound is ordinary sound used at frequencies above the range of human hearing. To understand the image later, you first need the nature of a sound wave: how it travels, how fast it moves through tissue, and how it weakens with depth.'},
  sections:[
    { h:{ar:'موجة ميكانيكية تحتاج إلى وسط', en:'A mechanical wave that needs a medium'},
      paras:[{
        ar:'الصوت طاقة ميكانيكية، وليس إشعاعًا كهرومغناطيسيًا كالأشعة السينية. لذلك لا يستطيع الانتقال في الفراغ، بل يحتاج إلى وسط مادي كالهواء أو الماء أو النسيج، وينتقل فيه على صورة تضاغطات وتخلخلات متعاقبة.',
        en:'Sound is mechanical energy, not electromagnetic radiation like X-rays. It therefore cannot travel through a vacuum; it needs a physical medium such as air, water or tissue, and moves through it as a repeating pattern of compressions and rarefactions.'},
      {
        ar:'الموجة الصوتية موجة طولية (Longitudinal): تهتز جزيئات الوسط ذهابًا وإيابًا في الاتجاه نفسه الذي تسير فيه الموجة. وهذا يختلف عن الموجات الكهرومغناطيسية المستعرضة، وسرعة الصوت ليست ثابتة بل تتغير بتغير الوسط، بينما سرعة الإشعاع الكهرومغناطيسي ثابتة.',
        en:'A sound wave is longitudinal: the particles of the medium vibrate back and forth parallel to the direction of travel. This contrasts with transverse electromagnetic waves, and the speed of sound is not fixed — it varies from one material to another, whereas electromagnetic radiation travels at a constant speed.'}],
      bullets:[
        {ar:'الصوت: طاقة ميكانيكية، يحتاج إلى وسط، موجة طولية، سرعة متغيرة', en:'Sound: mechanical energy, needs a medium, longitudinal wave, variable speed'},
        {ar:'الأشعة السينية: إشعاع كهرومغناطيسي، تنتقل في الفراغ، موجة مستعرضة، سرعة ثابتة', en:'X-rays: electromagnetic radiation, travels in a vacuum, transverse wave, constant speed'}]},
    { h:{ar:'تشريح الموجة: التردد والطول الموجي والسرعة', en:'Anatomy of the wave: frequency, wavelength and speed'},
      paras:[{
        ar:'يوصف أي صوت بتردده (Frequency) وهو عدد الدورات في الثانية ويُقاس بالهرتز (Hz)، وبزمن الدورة الواحدة (Period)، وبسعته (Amplitude) التي تعبّر عن شدة الموجة. أما الطول الموجي (Wavelength, λ) فهو المسافة بين نقطتين متماثلتين في دورتين متتاليتين، كالمسافة بين قمتي تضاغط متجاورتين.',
        en:'Any sound is described by its frequency — the number of cycles per second, measured in hertz (Hz) — by the period of one cycle, and by its amplitude, which reflects how strong the wave is. The wavelength (λ) is the distance between two identical points on consecutive cycles, such as two neighbouring peaks of compression.'},
      {
        ar:'تربط العلاقة c = f × λ بين السرعة والتردد والطول الموجي؛ فالطول الموجي يتناسب طرديًا مع السرعة وعكسيًا مع التردد. وفي التصوير بالموجات فوق الصوتية يحدد المسبار (Transducer) التردد مسبقًا، لذا يكون العامل المؤثر عمليًا في الطول الموجي هو سرعة الصوت في الوسط.',
        en:'The relation c = f × λ links speed, frequency and wavelength: wavelength rises with speed and falls as frequency rises. In ultrasound imaging the transducer fixes the frequency in advance, so in practice it is the speed of sound in the medium that determines the wavelength.'},
      {
        ar:'تزداد سرعة الصوت بزيادة صلابة المادة وتنقص بزيادة كثافتها. وأبطأ سرعاته في الهواء لأن جزيئاته متباعدة وقابلة للانضغاط فتضيع الطاقة بينها. والرقم الأهم سريريًا: سرعة الصوت في الأنسجة الرخوة نحو 1540 m/s، وأجهزة الموجات فوق الصوتية مُعايَرة على هذه القيمة لحساب أعماق التراكيب بدقة.',
        en:'The speed of sound increases with the stiffness of a material and decreases as its density rises. It is slowest in air, whose particles are far apart and highly compressible, so energy is lost between them. The key clinical number is the speed in soft tissue, about 1540 m/s — ultrasound machines are calibrated to this value so that structure depths are calculated correctly.'}],
      table:{ head:[{ar:'المادة',en:'Material'},{ar:'سرعة الصوت (m/s)',en:'Speed of sound (m/s)'}],
        rows:[
          [{ar:'الهواء',en:'Air'},{ar:'330',en:'330'}],
          [{ar:'الماء',en:'Water'},{ar:'1480',en:'1480'}],
          [{ar:'الأنسجة الرخوة',en:'Soft tissue'},{ar:'1540',en:'1540'}],
          [{ar:'العظم',en:'Bone'},{ar:'4080',en:'4080'}]]},
      nums:[
        {v:'1540 m/s', ar:'سرعة الصوت في الأنسجة الرخوة — قيمة معايرة الأجهزة', en:'Speed of sound in soft tissue — the machine calibration value'},
        {v:'330 m/s', ar:'سرعة الصوت في الهواء — الأبطأ', en:'Speed of sound in air — the slowest'},
        {v:'4080 m/s', ar:'سرعة الصوت في العظم', en:'Speed of sound in bone'}]},
    { h:{ar:'التوهين والديسبل', en:'Attenuation and the decibel'},
      paras:[{
        ar:'كلما اخترقت الموجة النسيج فقدت جزءًا من شدتها؛ هذا هو التوهين (Attenuation). ويُقاس مقدار الفقد بوحدة الديسبل (dB)، ويُعبَّر عن معدل الفقد لكل وحدة مسافة بمعامل التوهين (Attenuation coefficient) بوحدة dB/cm، وهو يزداد عادةً مع ارتفاع التردد.',
        en:'As the wave penetrates tissue it steadily loses intensity; this loss is attenuation. The loss is measured in decibels (dB), and the loss per unit distance is the attenuation coefficient, in dB/cm, which generally increases as frequency rises.'},
      {
        ar:'النظام لوغاريتمي: فإذا كان معامل التوهين 1 dB/cm، فإن عبور 10 cm من النسيج يفقد الحزمة 10 dB، أي تنخفض شدتها إلى عُشر قيمتها. وبعد 20 cm يكون الفقد 20 dB، أي تنخفض الشدة إلى 1/100 من قيمتها الأصلية. لهذا السبب تُستخدم ترددات أخفض لتصوير التراكيب العميقة.',
        en:'The scale is logarithmic: with an attenuation coefficient of 1 dB/cm, crossing 10 cm of tissue costs the beam 10 dB, reducing its intensity to one tenth. After 20 cm the loss is 20 dB and the intensity falls to 1/100 of its starting value. This is why lower frequencies are chosen for deep structures.'}],
      nums:[
        {v:'×10', ar:'انخفاض الشدة بعد فقد 10 dB', en:'Intensity reduction after a 10 dB loss'},
        {v:'×100', ar:'انخفاض الشدة بعد فقد 20 dB', en:'Intensity reduction after a 20 dB loss'}]}
  ],
  quiz:[
    { q:{ar:'ما سرعة الصوت التي تُعايَر عليها أجهزة الموجات فوق الصوتية للأنسجة الرخوة؟', en:'To which speed of sound are ultrasound machines calibrated for soft tissue?'},
      opts:[{ar:'330 m/s',en:'330 m/s'},{ar:'1480 m/s',en:'1480 m/s'},{ar:'1540 m/s',en:'1540 m/s'},{ar:'4080 m/s',en:'4080 m/s'}], a:2,
      why:{ar:'الأجهزة مُعايَرة على 1540 m/s لأنه متوسط سرعة الصوت في الأنسجة الرخوة، وبه تُحسب أعماق التراكيب من زمن عودة الصدى.', en:'Machines assume 1540 m/s, the average speed in soft tissue, and use it to convert echo return times into depths.'}},
    { q:{ar:'إذا ضاعفنا تردد الموجة مع ثبات سرعتها، فماذا يحدث للطول الموجي λ؟', en:'If the frequency is doubled while the speed stays constant, what happens to the wavelength λ?'},
      opts:[{ar:'يتضاعف',en:'It doubles'},{ar:'ينخفض إلى النصف',en:'It halves'},{ar:'يبقى كما هو',en:'It stays the same'},{ar:'يزيد أربع مرات',en:'It increases fourfold'}], a:1,
      why:{ar:'من العلاقة λ = c/f: الطول الموجي يتناسب عكسيًا مع التردد، فمضاعفة التردد تُنقص الطول الموجي إلى النصف.', en:'From λ = c/f, wavelength is inversely proportional to frequency, so doubling the frequency halves the wavelength.'}},
    { q:{ar:'معامل توهين نسيج ما يساوي 1 dB/cm. كم تنخفض شدة الحزمة بعد عبور 20 cm منه؟', en:'A tissue has an attenuation coefficient of 1 dB/cm. By how much does the beam intensity fall after travelling 20 cm through it?'},
      opts:[{ar:'إلى النصف',en:'To one half'},{ar:'20 مرة (20 dB)',en:'By a factor of 20 (20 dB)'},{ar:'100 مرة، أي فقد 20 dB',en:'By a factor of 100, i.e. a 20 dB loss'},{ar:'لا تنخفض',en:'It does not fall'}], a:2,
      why:{ar:'الفقد الكلي = 1 × 20 = 20 dB، وكل 10 dB تعني انخفاضًا بعامل 10، لذا 20 dB تعني انخفاض الشدة إلى 1/100.', en:'Total loss = 1 × 20 = 20 dB, and every 10 dB means a tenfold drop, so 20 dB leaves 1/100 of the original intensity.'}}
  ]
},
{
  slug:'ultrasound-machine', chapter:'us',
  title:{ar:'جهاز الموجات فوق الصوتية والمسبار', en:'The Ultrasound Machine and Transducer'},
  intro:{
    ar:'قلب الجهاز هو المسبار (Transducer): يحوّل الطاقة الكهربائية إلى اهتزاز ميكانيكي والعكس، فيعمل مرسِلًا ومستقبِلًا في آن واحد. وفي هذا الدرس نتعرّف على مكوّناته، وأوضاع العرض، وحدود السلامة التي يجب مراقبتها أثناء الفحص.',
    en:'The heart of the machine is the transducer: it converts electrical energy into mechanical vibration and back again, acting as both transmitter and receiver. This lesson covers its components, the display modes, and the safety indices that must be watched during scanning.'},
  sections:[
    { h:{ar:'مكوّنات المسبار', en:'Inside the transducer'},
      paras:[{
        ar:'العنصر الفعّال في المسبار هو المادة الكهروضغطية (Piezoelectric material)، وهي التي تولّد الموجات وتستقبل الأصداء. تُقطع هذه المادة بسماكة تساوي نصف الطول الموجي (½λ) حتى تهتز بترددها الرنيني بكفاءة، وتتكون الصفوف الحديثة عادةً من مئات العناصر البلورية (نحو 256 عنصرًا في التصاميم الشائعة).',
        en:'The working element is the piezoelectric material, which generates the waves and receives the echoes. It is cut to a thickness of half a wavelength (½λ) so that it vibrates efficiently at its resonant frequency, and modern arrays typically contain hundreds of crystal elements (around 256 in common designs).'},
      {
        ar:'أمام البلورات توجد طبقة المطابقة (Matching layer) وسماكتها ربع الطول الموجي (¼λ) دائمًا؛ مهمتها تقليل الفرق في المقاومة الصوتية بين البلورة والجلد ليمرّ أكبر قدر من الطاقة إلى الجسم بدل انعكاسه. وخلف البلورات توجد مادة التخميد (Backing material) التي تمتص الاهتزازات المرتدة وتقصّر النبضة، ويتحكم مقدار تخميدها في طول النبضة عبر قيمة Q.',
        en:'In front of the crystals sits the matching layer, always a quarter of a wavelength thick (¼λ); it bridges the acoustic impedance gap between crystal and skin so that more energy enters the body instead of reflecting. Behind the crystals, the backing material absorbs backward vibrations and shortens the pulse — the amount of damping it provides, expressed through the Q value, sets the pulse length.'},
      {
        ar:'أخيرًا يغلّف المسبار عازل صوتي (Acoustic insulator) يمنع انتقال الاهتزاز إلى يد الفاحص ويحصر الصوت في الاتجاه المطلوب.',
        en:'Finally, an acoustic insulator in the housing stops vibration from reaching the operator\u2019s hand and confines the sound to the intended direction.'}],
      nums:[
        {v:'½ λ', ar:'سماكة المادة الكهروضغطية', en:'Thickness of the piezoelectric element'},
        {v:'¼ λ', ar:'سماكة طبقة المطابقة', en:'Thickness of the matching layer'},
        {v:'~256', ar:'عدد العناصر البلورية النموذجي في صف المسبار', en:'Typical number of crystal elements in a transducer array'}]},
    { h:{ar:'أوضاع العرض: A و B و M', en:'Display modes: A, B and M'},
      paras:[{
        ar:'في الوضع A (A-mode, Amplitude) تظهر الأصداء قممًا على خط أساسي، ويتناسب ارتفاع كل قمة مع سعة الصدى العائد من عمق معين، وهو أبسط الأوضاع ويُستخدم في قياسات دقيقة كطول العين. أما الوضع B (B-mode, Brightness) فيحوّل سعة كل صدى إلى نقطة تتدرج إضاءتها، وبجمع خطوط المسح تتكون الصورة المقطعية ثنائية الأبعاد المألوفة.',
        en:'In A-mode (Amplitude), echoes appear as spikes on a baseline, each spike height proportional to the echo amplitude from a given depth; it is the simplest mode and survives in precise measurements such as eye length. In B-mode (Brightness), each echo amplitude becomes a dot of corresponding brightness, and assembling many scan lines builds the familiar two-dimensional cross-sectional image.'},
      {
        ar:'أما الوضع M (M-mode, Motion) فيعرض حركة تركيب ما عبر الزمن على هيئة أثر متعرج، وهو مثالي لدراسة حركة صمامات القلب وجدرانه لأن دقته الزمنية عالية جدًا.',
        en:'M-mode (Motion) plots the movement of a structure over time as a trace, which makes it ideal for studying heart valves and walls because its temporal resolution is extremely high.'}]},
    { h:{ar:'المزايا والحدود', en:'Advantages and limitations'},
      paras:[{
        ar:'تجمع الموجات فوق الصوتية بين الأمان والعملية، لكنها في المقابل عاجزة أمام العظم والغاز وشديدة الاعتماد على مهارة الفاحص.',
        en:'Ultrasound combines safety with practicality, but it is defeated by bone and gas and depends heavily on operator skill.'}],
      bullets:[
        {ar:'المزايا: لا تعرّض للإشعاع المؤين، غير باضعة، سريعة، منخفضة التكلفة، تصوير لحظي (Real-time)، تقيس سرعة التدفق كسرعة الدم، وتعطي مقاطع عرضية', en:'Advantages: no ionising radiation, non-invasive, fast, inexpensive, real-time imaging, can measure velocities such as blood flow, and gives cross-sectional images'},
        {ar:'العيوب: لا تخترق العظم أو الغاز، وتعتمد اعتمادًا كبيرًا على خبرة المشغّل', en:'Disadvantages: cannot image through bone or gas, and is very operator-dependent'}]},
    { h:{ar:'السلامة: المؤشر الحراري TI والمؤشر الميكانيكي MI', en:'Safety: thermal index (TI) and mechanical index (MI)'},
      paras:[{
        ar:'رغم عدم وجود دليل مؤكد على ضرر من الموجات التشخيصية، توجد مخاطر نظرية تُلزمنا بمراقبة شدة الخرج: تُبقى الشدة المتوسطة زمنيًا عادةً دون 100 mW/cm²، والطاقة الصوتية الكلية دون 50 J/cm²، مع متابعة مؤشرين يعرضهما الجهاز باستمرار أثناء الفحص.',
        en:'Although no harm from diagnostic ultrasound has been confirmed, theoretical risks mean output must be monitored: time-averaged intensity is generally kept below 100 mW/cm² and total sound energy below 50 J/cm², while two indices are displayed continuously during the examination.'},
      {
        ar:'المؤشر الحراري (Thermal index, TI) يقدّر قدرة الشعاع على تسخين النسيج: TI = القدرة المنبعثة ÷ القدرة اللازمة لرفع الحرارة درجة مئوية واحدة. قيمة TI دون 0.5 تُعد دون عتبة أي تأثير بيولوجي. وكلما ارتفع TI وجب تقصير زمن الفحص تناسبيًا؛ فعند TI = 3 مثلًا يُفحص المريض نحو 10 دقائق كحد أقصى، وتنخفض العتبة أكثر إذا كان المريض محمومًا. وأكثر الأنسجة حساسية للحرارة: الجنين قبل الأسبوع الثامن، ورأس الجنين أو الوليد ودماغه وعموده الفقري، والعين في أي عمر.',
        en:'The thermal index (TI) estimates the beam\u2019s potential to heat tissue: TI = emitted power ÷ the power needed to raise the temperature by 1 °C. A TI below 0.5 is below the threshold for any effect. As TI rises, scanning time must fall in proportion — at TI = 3, scanning is limited to about 10 minutes — and the threshold drops further if the patient has a fever. The tissues most sensitive to heating are the embryo under eight weeks, the head, brain and spine of any fetus or neonate, and the eye at any age.'},
      {
        ar:'المؤشر الميكانيكي (Mechanical index, MI) يقيس سعة ذروة الضغط السالب للنبضة ويعبّر عن احتمال حدوث التجويف (Cavitation): MI = ذروة الضغط السالب ÷ الجذر التربيعي لتردد الموجات. وتوصي الجمعية البريطانية للموجات فوق الصوتية الطبية (BMUS) بأن يبقى MI دون 0.7 في الفحوص العامة والتوليد — خاصة مع مواد التباين التي ترفع خطر التجويف — ودون 0.5 في تصوير حديثي الولادة.',
        en:'The mechanical index (MI) reflects the peak negative pressure amplitude of the pulse and indicates the likelihood of cavitation: MI = peak negative pressure ÷ √(ultrasound frequency). The British Medical Ultrasound Society (BMUS) recommends keeping MI below 0.7 for general and obstetric scanning — especially with contrast agents, which raise cavitation risk — and below 0.5 for neonatal imaging.'}],
      nums:[
        {v:'<100 mW/cm²', ar:'حد الشدة المتوسطة زمنيًا', en:'Time-averaged intensity limit'},
        {v:'TI < 0.5', ar:'دون عتبة أي تأثير حراري', en:'Below the threshold for any thermal effect'},
        {v:'MI < 0.7', ar:'حد BMUS للفحوص العامة والتوليد', en:'BMUS limit for general and obstetric scanning'},
        {v:'MI < 0.5', ar:'حد BMUS لتصوير حديثي الولادة', en:'BMUS limit for neonatal imaging'}]},
    { h:{ar:'الآثار البيولوجية المحتملة', en:'Potential bioeffects'},
      paras:[{
        ar:'الأثر الأول هو التسخين الموضعي (Local heating) نتيجة امتصاص النسيج لطاقة الموجات. والثاني هو التجويف: إذ تدفع تغيرات الضغط الفقاعات الدقيقة في السوائل إلى التمدد ثم الانهيار العنيف. ويزداد خطر التجويف مع وجود تراكيب حاوية للغاز كالأمعاء والرئة، ومع الترددات المنخفضة (أطوال موجية أطول)، ومع قدرة أو شدة نبضات أعلى، ومع استخدام مواد تباين الموجات فوق الصوتية. وقد يترتب على هذه الآثار أيضًا أذية ميكانيكية لأغشية الخلايا. والقاعدة العملية هي مبدأ ALARA: أقل قدرة وأقصر زمن فحص يحقق الهدف التشخيصي.',
        en:'The first effect is local heating as tissue absorbs the wave energy. The second is cavitation: pressure swings make microbubbles in fluids expand and then collapse violently. Cavitation risk is greater in gas-containing structures such as bowel and lung, with low-frequency pulses (longer wavelengths), with higher pulse power or intensity, and when ultrasound contrast agents are used. Mechanical damage to cell membranes can also result. The practical rule is ALARA: the lowest output and shortest scan time that still answer the clinical question.'}],
      bullets:[
        {ar:'يزداد خطر التجويف مع: الغاز، التردد المنخفض، القدرة العالية، مواد التباين', en:'Cavitation risk rises with: gas, low frequency, high power, contrast agents'},
        {ar:'الأنسجة الحساسة حراريًا: الجنين المبكر، دماغ الجنين والوليد وعموده الفقري، العين', en:'Heat-sensitive tissues: early embryo, fetal/neonatal brain and spine, the eye'}]}
  ],
  quiz:[
    { q:{ar:'ما سماكة طبقة المطابقة (Matching layer) في المسبار، ولماذا؟', en:'How thick is the matching layer in a transducer, and why?'},
      opts:[{ar:'½λ — لزيادة التخميد',en:'½λ — to increase damping'},{ar:'¼λ — لتقليل فرق المقاومة الصوتية بين البلورة والجلد',en:'¼λ — to reduce the acoustic impedance mismatch between crystal and skin'},{ar:'λ كاملة — لعزل يد الفاحص',en:'One full λ — to insulate the operator\u2019s hand'},{ar:'لا سماكة ثابتة لها',en:'It has no fixed thickness'}], a:1,
      why:{ar:'طبقة المطابقة ربع طول موجي دائمًا؛ وظيفتها تدرّج المقاومة الصوتية بين البلورة والجلد فينفذ الصوت إلى الجسم بدل انعكاسه.', en:'The matching layer is always a quarter wavelength thick; it grades the acoustic impedance between crystal and skin so sound passes into the body instead of reflecting.'}},
    { q:{ar:'ماذا يقيس المؤشر الميكانيكي MI، وما حده الموصى به في فحوص التوليد العامة؟', en:'What does the mechanical index (MI) indicate, and what limit is recommended for general obstetric scanning?'},
      opts:[{ar:'احتمال التسخين — دون 0.5',en:'Heating potential — below 0.5'},{ar:'احتمال التجويف — دون 0.7',en:'Cavitation likelihood — below 0.7'},{ar:'احتمال التجويف — دون 3',en:'Cavitation likelihood — below 3'},{ar:'جودة الصورة — فوق 0.7',en:'Image quality — above 0.7'}], a:1,
      why:{ar:'MI يعبّر عن خطر التجويف لأنه يتناسب مع ذروة الضغط السالب، وتوصي BMUS بإبقائه دون 0.7 في الفحوص العامة والتوليد ودون 0.5 لحديثي الولادة.', en:'MI expresses cavitation risk because it scales with peak negative pressure; BMUS recommends below 0.7 for general and obstetric work and below 0.5 for neonates.'}},
    { q:{ar:'أي مما يلي يزيد خطر التجويف (Cavitation)؟', en:'Which of the following increases the risk of cavitation?'},
      opts:[{ar:'تردد مرتفع وقدرة منخفضة',en:'High frequency and low power'},{ar:'وجود غاز في الأمعاء مع مادة تباين للموجات',en:'Gas in the bowel together with an ultrasound contrast agent'},{ar:'تقصير زمن الفحص',en:'Shortening the scan time'},{ar:'طبقة مطابقة سميكة',en:'A thick matching layer'}], a:1,
      why:{ar:'التراكيب الحاوية للغاز ومواد التباين الغازية الفقاعات ترفع خطر التجويف، وكذلك التردد المنخفض والقدرة العالية.', en:'Gas-containing structures and microbubble contrast agents raise cavitation risk, as do low frequencies and high power.'}}
  ]
},
{
  slug:'producing-an-ultrasound-beam', chapter:'us',
  title:{ar:'إنتاج حزمة الموجات فوق الصوتية', en:'Producing an Ultrasound Beam'},
  intro:{
    ar:'كيف يحوّل المسبار نبضة كهربائية إلى حزمة صوتية ثم إلى صورة؟ يبدأ الأمر بالتأثير الكهروضغطي، ويمر بضبط التردد الرنيني وطول النبضة ومعدل تكرارها، وينتهي بحساب العمق من زمن رحلة الصدى ذهابًا وإيابًا.',
    en:'How does the transducer turn an electrical pulse into a sound beam and then into an image? It starts with the piezoelectric effect, runs through resonant frequency, pulse length and pulse repetition, and ends with depth calculated from the go-and-return travel time of the echo.'},
  sections:[
    { h:{ar:'التأثير الكهروضغطي: إرسال واستقبال بمادة واحدة', en:'The piezoelectric effect: one material sends and receives'},
      paras:[{
        ar:'الكهروضغطية (Piezoelectricity) خاصية لبعض البلورات تجعلها قابلة للتحويل بين صورتين من الطاقة: فإذا مرّرنا فيها جهدًا كهربائيًا اهتزت وأصدرت موجة صوتية، وإذا ضربتها موجة صوتية عائدة اهتزت وولّدت جهدًا كهربائيًا قابلًا للقياس. بهذه الخاصية الواحدة يعمل العنصر نفسه مرسِلًا ومستقبِلًا بالتناوب.',
        en:'Piezoelectricity is a property of certain crystals that lets them convert between two forms of energy: apply a voltage and the crystal vibrates, emitting a sound wave; strike it with a returning sound wave and it vibrates, generating a measurable voltage. Through this single property the same element alternates between transmitter and receiver.'},
      {
        ar:'تتناسب شدة الموجة الصادرة — أي مقدار تغير الضغط — مع الجهد المطبق، وبالمقابل يتناسب جهد الصدى العائد مع شدته. ولهذا يستطيع الجهاز تمثيل قوة كل صدى بدرجة إضاءة نقطة في الصورة، وهو أساس التصوير بالوضع B.',
        en:'The strength of the emitted wave — its pressure change — is proportional to the applied voltage, and, in reverse, the voltage from a returning echo is proportional to its strength. The machine therefore maps each echo strength to the brightness of a dot in the image, which is the basis of B-mode imaging.'}]},
    { h:{ar:'التردد الرنيني وسماكة البلورة', en:'Resonant frequency and crystal thickness'},
      paras:[{
        ar:'حين تلتقي موجتان بالطول الموجي نفسه وفي الطور نفسه تتعززان (تداخل بنّاء، Constructive interference)، وحين تلتقيان بطورين متعاكسين تلغي إحداهما الأخرى (تداخل هدّام، Destructive interference). ويستغل المسبار التداخل البنّاء: يكون خرجه أعظم ما يمكن عندما يولّد ترددًا طوله الموجي يساوي ضعف سماكة القرص الكهروضغطي، لأن الاهتزازات داخل القرص تتعزز بطور واحد.',
        en:'When two waves of the same wavelength meet in phase they reinforce each other (constructive interference); when they meet out of phase they cancel (destructive interference). The transducer exploits constructive interference: its output is greatest at the frequency whose wavelength equals twice the thickness of the piezoelectric disc, because the vibrations inside the disc reinforce in phase.'},
      {
        ar:'والنتيجة العملية معلومة تصميمية ثابتة: تُقطع البلورة بسماكة تساوي نصف الطول الموجي المطلوب (½λ). فكلما أردنا ترددًا أعلى (طول موجي أقصر) احتجنا بلورة أرقّ.',
        en:'The practical design rule follows directly: the crystal is cut to a thickness of half the desired wavelength (½λ). The higher the frequency wanted — the shorter the wavelength — the thinner the crystal must be.'}],
      nums:[
        {v:'½ λ', ar:'سماكة البلورة للحصول على التردد الرنيني المطلوب', en:'Crystal thickness for the desired resonant frequency'}]},
    { h:{ar:'النبضة: التخميد وقيمة Q وتكرار النبضات PRF', en:'The pulse: damping, Q value and PRF'},
      paras:[{
        ar:'لا تتوقف البلورة فورًا بعد دفعها، بل تستمر في الاهتزاز زمنًا قصيرًا بسعة تتناقص تدريجيًا؛ هذا هو التخميد (Damping). ويعبّر المعامل الميكانيكي Q عن سرعة هذا التخميد: المادة ذات Q المرتفع تخميدها خفيف فتهتز طويلًا وتمتد نبضتها، بينما ذات Q المنخفض تخمد بسرعة فتكون نبضتها قصيرة — وهو ما نريده للتصوير لأن النبضة القصيرة تعني دقة محورية أفضل.',
        en:'Once struck, the crystal does not stop instantly; it keeps vibrating briefly with exponentially decreasing amplitude — this is damping. The mechanical Q value describes how fast the vibration dies away: a high-Q material is lightly damped, rings for a long time and gives a long pulse, whereas a low-Q material damps quickly and gives a short pulse — which is what imaging wants, because a short pulse means better axial resolution.'},
      {
        ar:'تتكون كل إطار (Frame) من خطوط مسح، وكثافة الخطوط النموذجية نحو 100 خط في الإطار. ويرتبط معدل الإطارات بتردد تكرار النبضات (Pulse repetition frequency, PRF) بالعلاقة: PRF = معدل الإطارات × عدد الخطوط في الإطار. فمثلًا 30 إطارًا في الثانية × 100 خط يعطي PRF يساوي 3 kHz.',
        en:'Each frame is built from scan lines, with a typical line density of about 100 lines per frame. Frame rate and pulse repetition frequency (PRF) are linked by: PRF = frame rate × lines per frame. For example, 30 frames per second with 100 lines per frame requires a PRF of 3 kHz.'},
      {
        ar:'لا يستطيع الجهاز إرسال النبضة التالية قبل عودة صدى أعمق تركيب، لذا يطول زمن الانتظار كلما زاد العمق المطلوب تصويره، فينخفض PRF الأقصى الممكن. كذلك كلما زاد عدد الخطوط في الإطار احتجنا PRF أعلى لتحقيق المعدل نفسه.',
        en:'The machine cannot fire the next pulse until the echo from the deepest structure has returned, so the deeper the imaging depth, the longer the listening wait and the lower the maximum achievable PRF. Equally, more lines per frame demand a higher PRF for the same frame rate.'}],
      nums:[
        {v:'~100', ar:'عدد خطوط المسح النموذجي في الإطار الواحد', en:'Typical scan lines per frame'},
        {v:'3 kHz', ar:'PRF مثال: 30 إطارًا/ثانية × 100 خط', en:'Example PRF: 30 frames/s × 100 lines'}]},
    { h:{ar:'من زمن الصدى إلى العمق', en:'From echo time to depth'},
      paras:[{
        ar:'يقيس الجهاز المسافة إلى أي تركيب من زمن رحلة النبضة إليه وعودتها: المسافة = الزمن × السرعة × 0.5. وعامل 0.5 موجود لأن الزمن المقاس يغطي رحلتي الذهاب والإياب معًا، فنأخذ نصفه للمسافة باتجاه واحد.',
        en:'The machine finds the distance to a structure from the pulse travel time out and back: distance = time × velocity × 0.5. The factor 0.5 appears because the measured time covers both legs of the journey, so only half of it belongs to the one-way distance.'},
      {
        ar:'ومن العلاقة نفسها يُشتق أقصى عمق يمكن تصويره عند PRF معين: عمق الرؤية = 0.5 × سرعة الصوت ÷ PRF. فكلما ارتفع PRF قلّ العمق الأقصى، ولهذا يتعادل العمق ومعدل الإطارات دائمًا في حسابات الجهاز.',
        en:'The same relationship gives the deepest viewable depth for a given PRF: depth of view = 0.5 × speed of sound ÷ PRF. The higher the PRF, the shallower the maximum depth — depth and frame rate are always traded against each other in the machine\u2019s design.'}],
      nums:[
        {v:'× 0.5', ar:'عامل تصحيح رحلة الذهاب والإياب في معادلة المسافة', en:'Go-and-return correction factor in the distance equation'}]}
  ],
  quiz:[
    { q:{ar:'بأي سماكة تُقطع البلورة الكهروضغطية للحصول على تردد رنيني معين؟', en:'To what thickness is a piezoelectric crystal cut for a given resonant frequency?'},
      opts:[{ar:'ربع الطول الموجي',en:'A quarter of the wavelength'},{ar:'نصف الطول الموجي',en:'Half the wavelength'},{ar:'طول موجي كامل',en:'One full wavelength'},{ar:'ضعف الطول الموجي',en:'Twice the wavelength'}], a:1,
      why:{ar:'أعظم خرج يتحقق عندما يساوي الطول الموجي ضعف سماكة القرص، أي إن سماكة البلورة = ½λ.', en:'Maximum output occurs when the wavelength equals twice the disc thickness, so the crystal thickness is ½λ.'}},
    { q:{ar:'لماذا تُضرب معادلة المسافة (الزمن × السرعة) في 0.5؟', en:'Why is the distance equation (time × velocity) multiplied by 0.5?'},
      opts:[{ar:'لتحويل الوحدات إلى سنتيمتر',en:'To convert the units to centimetres'},{ar:'لأن الزمن المقاس يشمل رحلة الذهاب والعودة معًا',en:'Because the measured time covers the journey out and back'},{ar:'لأن سرعة الصوت تنخفض إلى النصف في النسيج',en:'Because the speed of sound halves in tissue'},{ar:'لتعويض التوهين',en:'To compensate for attenuation'}], a:1,
      why:{ar:'الزمن بين إرسال النبضة وعودة الصدى هو زمن رحلتين؛ نصف المسافة المحسوبة منه هو العمق الحقيقي للتركيب.', en:'The time between pulse transmission and echo return spans two journeys; half the calculated distance is the true one-way depth.'}},
    { q:{ar:'جهاز يعرض 25 إطارًا في الثانية وكل إطار 120 خطًا. ما قيمة PRF؟', en:'A machine displays 25 frames per second with 120 lines per frame. What is the PRF?'},
      opts:[{ar:'145 Hz',en:'145 Hz'},{ar:'300 Hz',en:'300 Hz'},{ar:'3000 Hz',en:'3000 Hz'},{ar:'4.8 Hz',en:'4.8 Hz'}], a:2,
      why:{ar:'PRF = معدل الإطارات × الخطوط في الإطار = 25 × 120 = 3000 نبضة في الثانية = 3 kHz.', en:'PRF = frame rate × lines per frame = 25 × 120 = 3000 pulses per second = 3 kHz.'}}
  ]
},
{
  slug:'image-properties', chapter:'us',
  title:{ar:'خصائص الصورة: الدقة والتوافقيات', en:'Image Properties: Resolution and Harmonics'},
  intro:{
    ar:'جودة صورة الموجات فوق الصوتية تُختصر في ثلاث دقات: محورية على امتداد الحزمة، وجانبية عمودية عليها، وزمنية بين الإطارات. ويضيف الدرس تقنيتين لتحسين الصورة: التوافقيات (Harmonics) والتصوير المركب (Compound imaging).',
    en:'Ultrasound image quality reduces to three resolutions: axial along the beam, lateral across it, and temporal between frames. This lesson adds two image-improving techniques: tissue harmonics and compound imaging.'},
  sections:[
    { h:{ar:'الدقة المحورية Axial resolution', en:'Axial resolution'},
      paras:[{
        ar:'الدقة المحورية هي قدرة الجهاز على إظهار جسمين متقاربين على امتداد مسار الحزمة ككيانين منفصلين. وتتوقف على عاملين: طول النبضة الصوتية والطول الموجي؛ فكلما قصُرت النبضة وقصُر الطول الموجي ازدادت القدرة على الفصل بين الأجسام المتقاربة في العمق.',
        en:'Axial resolution is the ability to show two closely spaced objects lying along the beam path as separate entities. It depends on two factors: the length of the ultrasound pulse and the wavelength — the shorter the pulse and the shorter the wavelength, the better the separation of objects at slightly different depths.'}],
      bullets:[
        {ar:'تتحسن الدقة المحورية بـ: قيمة Q منخفضة لمادة التخميد (نبضة أقصر)', en:'Improved by: a low Q value of the backing material (shorter pulse)'},
        {ar:'تتحسن أيضًا بـ: طول موجي أقصر، أي تردد أعلى', en:'Also improved by: a shorter wavelength, i.e. a higher frequency'}]},
    { h:{ar:'الدقة الجانبية وسماكة الشريحة', en:'Lateral resolution and slice thickness'},
      paras:[{
        ar:'الدقة الجانبية تُقاس عموديًا على اتجاه الحزمة، وتتوقف على عرض الحزمة (Beam width) الذي تحدده بدوره قطر بلورات PZT ودرجة التركيز. وللفصل بين جسمين جانبيًا لا بد أن تساهم ثلاث حزم على الأقل: واحدة على كل جسم وواحدة في الفراغ بينهما. وتحسب العلاقة التقريبية عرض الحزمة هكذا: عرض الحزمة = البعد البؤري × λ ÷ قطر المسبار (D).',
        en:'Lateral resolution is measured perpendicular to the beam and depends on the beam width, which in turn depends on the diameter of the PZT crystals and on focusing. To separate two side-by-side objects, at least three beams must contribute: one striking each object and one passing through the gap between them. Beam width is approximated by: beam width = focal length × λ ÷ transducer diameter (D).'},
      {
        ar:'قاعدة ثابتة: الدقة الجانبية أسوأ دائمًا من الدقة المحورية، وتقارب ثلث قطر المسبار. أما سماكة الشريحة (Slice thickness) — سماكة المستوى المُصوَّر في الاتجاه الثالث — فتتناقص مع ارتفاع التردد، وهي عادة أكبر من عرض الحزمة، وتبقى ثابتة في المسابير ثنائية الأبعاد التقليدية.',
        en:'A fixed rule: lateral resolution is always worse than axial resolution, and is roughly a third of the transducer diameter. Slice thickness — the thickness of the imaged plane in the third dimension — decreases as frequency rises; it is usually larger than the beam width and is fixed in standard 2D transducers.'}],
      nums:[
        {v:'~⅓ D', ar:'الدقة الجانبية التقريبية نسبة إلى قطر المسبار', en:'Approximate lateral resolution relative to transducer diameter'},
        {v:'3', ar:'الحد الأدنى من الحزم اللازمة للفصل بين جسمين جانبيًا', en:'Minimum beams needed to resolve two objects laterally'}]},
    { h:{ar:'الدقة الزمنية Temporal resolution', en:'Temporal resolution'},
      paras:[{
        ar:'الدقة الزمنية هي قدرة النظام على عرض الأحداث المتتابعة زمنيًا كصور منفصلة، وتُقاس بعدد الإطارات في الثانية (fps). وهي محكومة بسرعة بناء كل إطار: فالجهاز لا يرسل النبضة التالية قبل انتهاء مرحلتي الإرسال والاستماع (استماع الصدى) للنبضة السابقة.',
        en:'Temporal resolution is the ability to display events occurring at different times as separate images, measured in frames per second (fps). It is governed by how quickly each frame can be assembled: the machine cannot send the next pulse until the transmit and listen (receive) phases of the previous pulse are complete.'},
      {
        ar:'يرتبط ذلك مباشرة بـ PRF: كلما زاد عمق التركيب طال زمن ذهاب الصدى وعودته فانخفض PRF وانخفض معه معدل الإطارات. وتتدهور الدقة الزمنية أيضًا مع زيادة عدد المناطق البؤرية (Focal zones)، وتشغيل دوبلر، واتساع قطاع المسح (لأنه يتطلب خطوطًا أكثر).',
        en:'This ties directly to PRF: the deeper the tissue, the longer the echo round trip, so PRF falls and frame rate falls with it. Temporal resolution also worsens with more focal zones, with Doppler switched on, and with a wider sector, which needs more lines per frame.'}],
      bullets:[
        {ar:'يُضعف الدقة الزمنية: مناطق بؤرية أكثر، تشغيل دوبلر، أجسام أعمق، قطاع مسح أوسع، PRF أخفض', en:'Worsened by: more focal zones, Doppler on, deeper structures, wider sector, lower PRF'}]},
    { h:{ar:'التوافقيات Harmonics', en:'Tissue harmonics'},
      paras:[{
        ar:'عند الشدات العالية لا تبقى الموجة جيبية نقية: فسرعة الصوت في أجزاء التضاغط (الضغط العالي) أسرع قليلًا منها في أجزاء التخلخل، فيتشوه شكل الموجة كلما تعمقت أكثر، ويتدهور بذلك تأثير الصورة عند العمق إذا استخدمنا التردد الأساسي وحده.',
        en:'At higher intensities the wave does not stay a pure sinusoid: sound travels slightly faster in the high-pressure compression parts than in the low-pressure rarefaction parts, so the waveform becomes skewed, increasingly with depth, and image quality at depth suffers if only the fundamental frequency is used.'},
      {
        ar:'بتحليل فورييه (Fourier analysis) للموجة العائدة نجد أنها تحتوي التردد الأساسي مضافًا إليه توافقيات هي مضاعفات صحيحة له: فإذا أرسلنا نبضة 2 MHz عادت إلينا مكونات عند 4 و 6 و 8 MHz. وعند تفعيل وضع التوافقيات يحجب الجهاز التردد الأساسي — بمرشح إلكتروني أو بتقنية قلب النبضة (Pulse inversion) — ويبني الصورة من التوافقيات وحدها.',
        en:'Fourier analysis of the returning wave shows it contains the fundamental frequency plus harmonics that are whole-number multiples: transmit a 2 MHz pulse and components return at 4, 6 and 8 MHz. With harmonics switched on, the machine suppresses the fundamental — using an electronic filter or pulse inversion — and builds the image from the harmonic frequencies alone.'},
      {
        ar:'لماذا هي أفضل؟ لأن التوافقيات تتولد عند التراكيب العميقة نفسها فتقطع مسافة العودة فقط (اتجاه واحد) بدل رحلة ذهاب وعودة كاملة، ولأن عيوب الترديد (Reverberation) تأتي من تراكيب سطحية بينما تتشكل التوافقيات المفيدة عند العمق، فتحتوي الصورة التوافقية على عيوب أقل ودقة أفضل في العمق.',
        en:'Why is this better? Harmonics are generated at the deep structures themselves, so they travel only the return journey (one way) instead of a full round trip; and because reverberation artefacts arise from shallow structures while useful harmonics form at depth, the harmonic image contains fewer artefacts and resolves deep structures better.'}],
      bullets:[
        {ar:'أنسب الاستخدامات: فحوص القلب (تقلّ عيوب الترديد من الأضلاع وحركة التنفس وسرعة القلب)، التراكيب المملوءة بالسائل (تباين أفضل)، المرضى البدناء، الشرايين السباتية لقياس سماكة الجدار واللويحات، وتحسين حواف التراكيب', en:'Best uses: cardiac work (less rib reverberation and motion artefact), fluid-filled structures (better contrast), obese patients, carotid wall and plaque measurement, and edge enhancement'},
        {ar:'الحدود: فائدتها قليلة في التراكيب السطحية، وتأثيرها يضيع في الأعماق الكبيرة جدًا، وتحتاج إلى قدرة خرج عالية مما يستدعي انتباهًا للسلامة', en:'Limitations: little use in superficial structures, the effect is lost at extreme depth, and it requires high output power, which raises the safety stakes'}],
      nums:[
        {v:'4, 6, 8 MHz', ar:'توافقيات نبضة أساسية بتردد 2 MHz', en:'Harmonics returned from a 2 MHz fundamental pulse'}]},
    { h:{ar:'التصوير المركب Compound imaging', en:'Compound imaging'},
      paras:[{
        ar:'يعتمد التصوير المركب على توجيه الحزمة (Beam steering): تُرسل الحزمة في كل مسح بزوايا مختلفة تصل إلى 9 زوايا، فيُصوَّر الجسم نفسه من اتجاهات متعددة، وتصل بعض الحزم إلى ما خلف الأجسام وتعيد أصداء كانت ستفقد. النتيجة صورة أنعم وحدود أوضح، وهو مفيد خاصة في الأجزاء الصغيرة والتراكيب السطحية.',
        en:'Compound imaging relies on beam steering: within each sweep the beam is transmitted at up to 9 different angles, so the same object is imaged from several directions and some beams reach behind objects and return echoes that would otherwise be lost. The result is a smoother image with clearer borders, especially useful for small parts and superficial structures.'},
      {
        ar:'الثمن: هذه التقنية تمحو عيبًا تشخيصيًا مفيدًا هو الظل الصوتي (Acoustic shadowing) الذي نعتمد عليه مثلًا في كشف الحصوات، كما تخفض معدل الإطارات لأن كل إطار يتطلب مسوحات متعددة الزوايا.',
        en:'The price: the technique removes a diagnostically useful artefact — the acoustic shadow relied on, for example, to identify gallstones — and it reduces frame rate because every frame needs several angled sweeps.'}],
      nums:[
        {v:'9', ar:'أقصى عدد لزوايا إرسال الحزمة في المسح المركب الواحد', en:'Maximum beam angles per compound sweep'}]}
  ],
  quiz:[
    { q:{ar:'أي مما يلي يحسّن الدقة المحورية (Axial resolution)؟', en:'Which of the following improves axial resolution?'},
      opts:[{ar:'نبضة أطول وقيمة Q أعلى',en:'A longer pulse and higher Q'},{ar:'تردد أعلى ونبضة أقصر (Q منخفض)',en:'Higher frequency and a shorter pulse (low Q)'},{ar:'قطر مسبار أصغر',en:'A smaller transducer diameter'},{ar:'قطاع مسح أوسع',en:'A wider scan sector'}], a:1,
      why:{ar:'الدقة المحورية تعتمد على طول النبضة والطول الموجي: نبضة أقصر (بفضل تخميد بقيمة Q منخفضة) وتردد أعلى (λ أقصر) يفصلان الأجسام المتقاربة في العمق.', en:'Axial resolution depends on pulse length and wavelength: a shorter pulse (low-Q damping) and higher frequency (shorter λ) separate objects close together in depth.'}},
    { q:{ar:'أُرسلت نبضة أساسية بتردد 3 MHz. ما تردد أول توافقية (Harmonic) تعود في الصدى؟', en:'A fundamental pulse of 3 MHz is transmitted. What is the frequency of the first harmonic in the returning echo?'},
      opts:[{ar:'1.5 MHz',en:'1.5 MHz'},{ar:'3 MHz',en:'3 MHz'},{ar:'6 MHz',en:'6 MHz'},{ar:'9 MHz',en:'9 MHz'}], a:2,
      why:{ar:'التوافقيات مضاعفات صحيحة للتردد الأساسي: الأولى ضعف الأساسي، فتكون 6 MHz عند أساسي 3 MHz.', en:'Harmonics are whole-number multiples of the fundamental: the first is twice the fundamental, so 6 MHz for a 3 MHz fundamental.'}},
    { q:{ar:'أي مما يلي يُضعف الدقة الزمنية (معدل الإطارات)؟', en:'Which of the following worsens temporal resolution (frame rate)?'},
      opts:[{ar:'تقليل عدد المناطق البؤرية',en:'Reducing the number of focal zones'},{ar:'تشغيل دوبلر وزيادة العمق وقطاع المسح',en:'Switching Doppler on, with greater depth and a wider sector'},{ar:'رفع PRF',en:'Raising the PRF'},{ar:'استخدام التوافقيات',en:'Using harmonics'}], a:1,
      why:{ar:'بناء الإطار يبطأ مع خطوط أكثر (قطاع أوسع)، ومناطق بؤرية متعددة، وتشغيل دوبلر، وعمق أكبر يفرض PRF أخفض.', en:'Frame building slows with more lines (wider sector), multiple focal zones, Doppler switched on, and greater depth forcing a lower PRF.'}}
  ]
}

,
{
  slug:'doppler', chapter:'us',
  title:{ar:'دوبلر', en:'Doppler Ultrasound'},
  intro:{
    ar:'حين تنعكس الموجات عن جسم متحرك كخلايا الدم، يعود الصدى بتردد مختلف عن التردد المرسل، وحجم هذا الاختلاف يخبرنا بسرعة الحركة واتجاهها. هذا الدرس يشرح مبدأ دوبلر وأنماطه (المستمر والنبضي والملون والقوي والطيفي) وأشهر عيوبه.',
    en:'When sound reflects off a moving target such as blood cells, the echo returns at a different frequency from the one transmitted, and the size of that difference reveals the speed and direction of movement. This lesson covers the Doppler principle, its modes (continuous, pulsed, colour, power and spectral) and its classic artefacts.'},
  sections:[
    { h:{ar:'مبدأ دوبلر وزاوية التسميع', en:'The Doppler principle and the insonation angle'},
      paras:[{
        ar:'إزاحة دوبلر (Doppler shift) هي الفرق بين تردد الصدى العائد والتردد المرسل، وتتناسب طرديًا مع سرعة السطح المتحرك. فإذا تحرك الهدف مقتربًا من المسبار ارتفع تردد الصدى، وإذا ابتعد عنه انخفض التردد؛ وبذلك يميّز الجهاز الاتجاه والسرعة معًا من علامة الإزاحة وحجمها.',
        en:'The Doppler shift is the difference between the frequency of the returning echo and the transmitted frequency, and it is proportional to the velocity of the moving reflector. If the target moves towards the transducer the echo frequency rises; if it moves away, the frequency falls — so the sign and size of the shift give direction and speed together.'},
      {
        ar:'لكن الإزاحة المقاسة تعتمد على زاوية التسميع (Insonation angle) بين الحزمة واتجاه الجريان: كلما اقتربت الزاوية من 90° صار الجريان عموديًا على الحزمة وضعُفت الإزاحة وانهارت دقة تقدير السرعة. لذلك تُبقى الزاوية عمليًا دون 60° دائمًا للحصول على قياسات سرعة موثوقة.',
        en:'The measured shift, however, depends on the insonation angle between the beam and the direction of flow: as the angle approaches 90°, flow becomes perpendicular to the beam, the shift shrinks towards zero and velocity estimation becomes unreliable. In practice the angle is kept below 60° at all times for accurate velocity measurement.'}],
      nums:[
        {v:'< 60°', ar:'زاوية التسميع المقبولة لقياس سرعة دقيق', en:'Insonation angle required for accurate velocity estimates'}]},
    { h:{ar:'دوبلر الموجة المستمرة CW', en:'Continuous wave (CW) Doppler'},
      paras:[{
        ar:'في دوبلر الموجة المستمرة يُبث الصوت ويُستقبل بلا توقف، ولذلك يحتاج المسبار عنصرين منفصلين: واحدًا للإرسال وآخر للاستقبال. تُستخدم فيه عادة مجسات يدوية مخصصة مثل أجهزة قياس ضغط الكاحل-العضد (ABPI) وأجهزة مراقبة قلب الجنين، وتُقدَّم الإزاحة للمستخدم صوتًا مسموعًا لأن إزاحة دوبلر تقع في نطاق السمع: كلما ارتفعت حدة الصوت زادت السرعة، وكلما خشن دلّ على جريان مضطرب.',
        en:'In continuous wave Doppler, sound is transmitted and received without pause, so the probe needs two separate elements: one that only transmits and one that only receives. It is usually found in dedicated handheld devices such as ankle-brachial pressure index (ABPI) probes and fetal heart monitors, and the shift is presented as audible sound because Doppler shifts lie in the audible range: the higher the pitch, the greater the velocity, and a harsher sound suggests turbulent flow.'},
      {
        ar:'مقابل بساطته ورخصه وحساسيته العالية للجريان، يعجز هذا النمط عن تحديد العمق الذي جاءت منه الإشارة، إذ يلتقط كل وعاء على مسار الحزمة حتى تتوهن، فتختلط إشارتا الشريان والوريد المتجاورين غالبًا، ولا يعطي قياسًا كميًا منفصلًا لسرعة كل منهما.',
        en:'In exchange for being cheap, simple and very sensitive to flow, this mode cannot tell which depth a signal came from: it insonates every vessel along the beam path until the beam attenuates, so neighbouring artery and vein signals are usually combined, with no separate quantitative velocity for each.'}]},
    { h:{ar:'دوبلر الموجة النبضية: ملون وقوي وطيفي', en:'Pulsed wave Doppler: colour, power and spectral'},
      paras:[{
        ar:'في دوبلر الموجة النبضية (Pulsed wave) تُستخدم العناصر نفسها للإرسال والاستقبال على شكل نبضات قصيرة، وتُفتح بوابة مدى (Range gate) لا تقبل إلا الأصداء العائدة من عمق محدد يختاره الفاحص، فنعرف بالضبط من أين جاءت الإشارة. وحين يُعرض دوبلر فوق صورة B-mode في الوقت نفسه يسمى الفحص دوبلكس (Duplex).',
        en:'In pulsed wave Doppler the same elements transmit and receive short pulses, and a range gate accepts only echoes returning from one selected depth, so the source of the signal is known exactly. When Doppler is displayed over a live B-mode image the study is called duplex.'},
      {
        ar:'الدوبلر الملون (Colour Doppler) يحسب متوسط سرعة التراكيب المتحركة داخل صندوق أخذ عينات ويعرضها على سلّم ألوان متفق عليه: قيم موجبة للجريان المقترب من المسبار وسالبة للمبتعد وصفر لانعدام الحركة المحسوبة. وكلما كبر صندوق العينة احتاج نبضات أكثر فانخفض معدل الإطارات وظهرت الحركة متقطعة.',
        en:'Colour Doppler calculates the mean velocity of moving structures within a sampling box and displays it on an arbitrary colour scale: positive values for flow towards the transducer, negative for flow away, and zero for no detected motion. The bigger the colour box, the more pulses it needs, so frame rate falls and the display becomes jerky.'},
      {
        ar:'دوبلر القوة (Power Doppler) يعرض سعة (Amplitude) إشارة دوبلر فقط، دون سرعة أو اتجاه؛ إذ تساهم كل حركة في السعة مهما كانت طورها، فيبرز كمية الدم المتدفق. مزاياه: اعتماد أقل على زاوية التسميع، وقدرة على إظهار الجريان البطيء جدًا، وعدم تأثره بالالتفاف (Aliasing). وعيوبه: لا يدل على اتجاه الجريان، وحركة الأنسجة تولّد فيه عيوبًا.',
        en:'Power Doppler maps only the amplitude of the Doppler signal, with no velocity or direction; every motion contributes to the amplitude regardless of phase, so it emphasises the quantity of flowing blood. Its advantages are less dependence on the insonation angle, the ability to show very low flow, and immunity to aliasing. Its disadvantages are that it gives no flow direction and tissue motion creates artefacts.'},
      {
        ar:'الدوبلر الطيفي (Spectral Doppler) يعرض مدى ترددات دوبلر عبر الزمن في مخطط يسمى السونوغرام (Sonogram). ومن شكله تُستخرج مؤشرات رقمية لوصف مقاومة جدار الوعاء: مؤشر المقاومة RI = (ذروة تردد الانقباض − تردد نهاية الانبساط) ÷ ذروة تردد الانقباض، ومؤشر النبضية PI = (ذروة تردد الانقباض − أدنى تردد) ÷ المتوسط الزمني لأقصى تردد.',
        en:'Spectral Doppler displays the range of Doppler frequencies over time in a trace called a sonogram. Its shape yields numerical descriptors of downstream resistance: the resistive index, RI = (peak systolic frequency − end diastolic frequency) ÷ peak systolic frequency, and the pulsatility index, PI = (peak systolic frequency − minimum frequency) ÷ time-averaged maximum frequency.'}],
      bullets:[
        {ar:'الأوعية عالية المقاومة: نبضية حادة بصعود سريع ومدى سرعات ضيق، كالشريان الفخذي والأبهر', en:'High-resistance vessels: strongly pulsatile, sharp upstroke, narrow velocity range — e.g. femoral artery and aorta'},
        {ar:'الشرايين منخفضة المقاومة: نبضية منخفضة ومدى سرعات واسع مع جريان مستمر في الانبساط، كالشريان الكلوي والسباتي الباطن المغذيين لأعضاء حيوية', en:'Low-resistance arteries: low pulsatility, wide velocity range, flow maintained in diastole — e.g. renal and internal carotid arteries'},
        {ar:'RI الطبيعي نحو 0.6–0.7، وغير الطبيعي 0.8–1.0', en:'Normal RI is about 0.6–0.7; abnormal RI is 0.8–1.0'}],
      nums:[
        {v:'0.6–0.7', ar:'القيمة الطبيعية لمؤشر المقاومة RI', en:'Normal resistive index (RI) range'},
        {v:'0.8–1.0', ar:'قيم RI غير الطبيعية (مقاومة عالية)', en:'Abnormal RI range (high resistance)'}]},
    { h:{ar:'عيوب دوبلر الشائعة', en:'Common Doppler artefacts'},
      paras:[{
        ar:'الالتفاف (Aliasing): ينص حد نايكويست (Nyquist limit = PRF ÷ 2) على أن تردد أخذ العينات يجب أن يتجاوز ضعف أعلى تردد في الإشارة لتمثيلها بدقة. فإذا تجاوزت سرعة الجريان حد نايكويست فاقت إزاحة دوبلر مدى السلّم و«التفّت» الإشارة إلى الطرف الآخر من العرض، فيظهر الجريان السريع بلون أو اتجاه مضلل. والحل عمليًا رفع PRF أو خفض التردد الأساسي أو إزاحة خط الأساس.',
        en:'Aliasing: the Nyquist limit (= PRF ÷ 2) states that the sampling rate must exceed twice the highest signal frequency for it to be represented accurately. If flow velocity exceeds the Nyquist limit, the Doppler shift overflows the scale and wraps around to the opposite end of the display, making fast flow appear in a misleading colour or direction. Practical remedies are raising the PRF, lowering the transmitted frequency, or shifting the baseline.'},
      {
        ar:'الاتساع الطيفي (Spectral broadening): الدم القريب من جدار الوعاء أبطأ من الدم في مركزه، فيوجد في اللحظة الواحدة مدى واسع من السرعات يوسّع أثر المخطط الطيفي ويعدد الألوان في الدوبلر الملون. ويزداد الاتساع مع الجريان المضطرب كما في الأوعية المتضيقة.',
        en:'Spectral broadening: blood near the vessel wall moves more slowly than blood in the centre, so a wide range of velocities exists at any instant, widening the spectral trace and multiplying colours in colour Doppler. Broadening also increases with turbulent flow, as in stenotic vessels.'},
      {
        ar:'مرشحات الجدار (Wall filters): مرشح إلكتروني يحذف الإشارات منخفضة التردد لأنها غالبًا من تراكيب بطيئة كجدران الأوعية. لكن ضبطه أعلى من اللازم يحذف معها إشارات الجريان الدموي البطيء الحقيقية، فيبدو الوعاء بلا جريان وهو يجري ببطء.',
        en:'Wall filters: an electronic filter removes low-frequency signals because they usually come from slow-moving structures such as vessel walls. Set too high, however, it also deletes genuine low-velocity blood flow signals, making a slowly perfused vessel look empty.'}],
      table:{ head:[{ar:'الوجه',en:'Feature'},{ar:'الموجة المستمرة CW',en:'Continuous wave'},{ar:'الموجة النبضية PW',en:'Pulsed wave'}],
        rows:[
          [{ar:'العناصر',en:'Elements'},{ar:'عنصران منفصلان للإرسال والاستقبال',en:'Two separate transmit and receive elements'},{ar:'العناصر نفسها للإرسال والاستقبال',en:'Same elements transmit and receive'}],
          [{ar:'تحديد العمق',en:'Depth localisation'},{ar:'لا يستطيع تحديد العمق',en:'Cannot determine depth'},{ar:'بوابة مدى تختار عمقًا واحدًا',en:'Range gate selects one depth'}],
          [{ar:'الإخراج',en:'Output'},{ar:'صوت مسموع غالبًا (مجسات يدوية)',en:'Usually audible sound (handheld probes)'},{ar:'ملون أو قوي أو طيفي فوق صورة B-mode',en:'Colour, power or spectral display over B-mode'}],
          [{ar:'أبرز قيد',en:'Main limitation'},{ar:'تختلط إشارات كل الأوعية في المسار',en:'Signals from all vessels in the path are combined'},{ar:'معرّض للالتفاف عند السرعات العالية',en:'Subject to aliasing at high velocities'}]]}
    }
  ],
  quiz:[
    { q:{ar:'ما أكبر زاوية تسميع (Insonation angle) مقبولة لقياس سرعة جريان موثوق بدوبلر؟', en:'What is the largest insonation angle acceptable for reliable Doppler velocity measurement?'},
      opts:[{ar:'30°',en:'30°'},{ar:'60°',en:'60°'},{ar:'90°',en:'90°'},{ar:'لا أهمية للزاوية',en:'The angle does not matter'}], a:1,
      why:{ar:'كلما اقتربت الزاوية من 90° انهارت دقة تقدير السرعة، فيُبقى هامش الأمان عند 60° أو أقل.', en:'Accuracy collapses as the angle nears 90°, so measurements are kept at 60° or less.'}},
    { q:{ar:'إذا كان PRF يساوي 6 kHz، فما حد نايكويست، وماذا يحدث للجريان الأسرع منه؟', en:'If the PRF is 6 kHz, what is the Nyquist limit, and what happens to faster flow?'},
      opts:[{ar:'12 kHz — يختفي الجريان',en:'12 kHz — the flow disappears'},{ar:'3 kHz — يحدث الالتفاف (Aliasing)',en:'3 kHz — aliasing (wrap-around) occurs'},{ar:'6 kHz — يتضاعف لونه',en:'6 kHz — its colour doubles'},{ar:'لا يوجد حد',en:'There is no limit'}], a:1,
      why:{ar:'حد نايكويست = PRF ÷ 2 = 3 kHz؛ والإزاحات الأعلى منه تلتف إلى الطرف المقابل من السلّم.', en:'The Nyquist limit is PRF ÷ 2 = 3 kHz; shifts above it wrap around to the opposite end of the scale.'}},
    { q:{ar:'ما الذي يعرضه دوبلر القوة (Power Doppler) أساسًا، وما أبرز ميزة له؟', en:'What does power Doppler fundamentally display, and what is its key advantage?'},
      opts:[{ar:'اتجاه الجريان — لا يتأثر بالحركة',en:'Flow direction — immune to motion'},{ar:'سعة الإشارة فقط — يكشف الجريان البطيء جدًا ولا يلتف',en:'Signal amplitude only — detects very low flow and does not alias'},{ar:'السرعة القصوى — يقيس RI بدقة',en:'Peak velocity — measures RI accurately'},{ar:'عمق الوعاء — يغني عن بوابة المدى',en:'Vessel depth — replaces the range gate'}], a:1,
      why:{ar:'دوبلر القوة يرسم سعة إشارة دوبلر دون اتجاه أو سرعة؛ ولأنه يجمع كل حركة فهو حساس للجريان البطيء ولا يعاني الالتفاف.', en:'Power Doppler maps Doppler signal amplitude without direction or velocity; because all motion contributes, it is sensitive to very low flow and never aliases.'}}
  ]
},
{
  slug:'us-artefacts', chapter:'us',
  title:{ar:'عيوب الموجات فوق الصوتية', en:'Ultrasound Artefacts'},
  intro:{
    ar:'العيب (Artefact) هو أي مظهر في الصورة لا يطابق التركيب الحقيقي، وينشأ حين يخالف الصدى افتراضات الجهاز في تكوين الصورة. فهم هذه العيوب ليس ترفًا: بعضها مضلل، وبعضها الآخر أداة تشخيصية بحد ذاته كالظل والتعزيز.',
    en:'An artefact is any feature in the image that does not correspond to real anatomy, arising when echoes break the assumptions the machine uses to build the image. Understanding artefacts matters: some mislead, but others — shadowing and enhancement — are diagnostic tools in themselves.'},
  sections:[
    { h:{ar:'الافتراضات التي تنكسر', en:'The assumptions that get broken'},
      paras:[{
        ar:'يبني الجهاز صورته على أربعة افتراضات مبسّطة عن سلوك الصوت في الجسم. فإذا سلك الصدى سلوكًا مخالفًا لأي منها، وضع الجهاز الصدى في مكان أو سطوع خاطئ وظهر العيب.',
        en:'The machine builds its image on four simplifying assumptions about how sound behaves in the body. When an echo violates any of them, the machine places it at the wrong position or brightness and an artefact appears.'}],
      bullets:[
        {ar:'يسير الصوت في خطوط مستقيمة', en:'Sound travels in straight lines'},
        {ar:'يسير الصوت بسرعة ثابتة في كل الأنسجة', en:'Sound travels at one constant velocity'},
        {ar:'يتوهن الصوت بمعدل منتظم في كل مكان', en:'Sound attenuates uniformly everywhere'},
        {ar:'ينعكس الصوت مرة واحدة فقط من كل سطح فاصل', en:'Sound reflects only once from each interface'}]},
    { h:{ar:'التعزيز والتظليل الصوتيان: وجهان متقابلان', en:'Acoustic enhancement and shadowing: two opposites'},
      paras:[{
        ar:'التعزيز الصوتي (Acoustic enhancement): السوائل ضعيفة التوهين، فتمر بها الحزمة فاقدة قدرًا ضئيلًا من طاقتها مقارنة بالأنسجة حولها، فيصل إلى التراكيب الواقعة خلف التركيب السائل شعاع أقوى وأصداء أعلى سعة. يفسّر الجهاز هذه الأصداء القوية على أنها انعكاس أكبر، فيرسم المنطقة خلف السائل أكثر إضاءة مما هي عليه فعلًا. تراه كلاسيكيًا خلف المثانة والكيسات والمرارة، وهو علامة مفيدة تدل على أن التركيب سائل.',
        en:'Acoustic enhancement: fluid attenuates weakly, so the beam passes through it losing far less energy than in the surrounding tissues, and structures behind a fluid-filled structure receive a stronger beam and return higher-amplitude echoes. The machine reads these strong echoes as greater reflectivity and paints the region behind the fluid brighter than it really is. It is seen classically behind the bladder, cysts and gallbladder, and usefully signals that a structure is fluid.'},
      {
        ar:'التظليل الصوتي (Acoustic shadowing) هو النقيض تمامًا: المواد المتكلسة الصلبة والسطوح الفاصلة بين النسيج الرخو والهواء تعكس تقريبًا كل الموجات الصوتية أو تمتصها، فلا يصل شيء يُذكر إلى ما خلفها ولا تعود منه معلومات. تظهر النتيجة منطقة داكنة (ظلًا) خلف التركيب تخفي ما وراءه. والظل خلف حصوة مرارة أو كلى علامة تشخيصية قيّمة، لكنه أيضًا ما يمنع تصوير ما خلف العظم والغاز.',
        en:'Acoustic shadowing is the exact opposite: hard calcified material and soft tissue–air interfaces reflect or absorb almost all of the sound, so virtually nothing reaches the tissue behind them and no information returns. The result is a dark shadow behind the structure that hides whatever lies beyond. A shadow behind a gallstone or kidney stone is a valuable diagnostic sign, but shadowing is also what blocks imaging beyond bone and gas.'}]},
    { h:{ar:'الترديد Reverberation ونوعاه', en:'Reverberation and its two forms'},
      paras:[{
        ar:'حين يرتد الصوت مرارًا ذهابًا وإيابًا بين وجه المسبار وسطح فاصل قوي الانعكاس قريب من السطح، تتولد أصداء متأخرة متكررة. يضعها الجهاز على أعماق متزايدة بافتراض أنها انعكست مرة واحدة، فتظهر خطوط أو نطاقات متكررة داخل التراكيب المملوءة بالسائل.',
        en:'When sound bounces repeatedly back and forth between the transducer face and a strongly reflecting interface near the surface, a train of delayed echoes is produced. The machine plots them at increasing depths, assuming each reflected only once, so they appear as repeated stripes or bands within fluid-filled structures.'}],
      bullets:[
        {ar:'ذيل المذنّب (Comet tail): ترديد ضيق قصير خلف أجسام معدنية أو متكلسة', en:'Comet tail: a short, tight reverberation behind metal or calcified objects'},
        {ar:'الرنين النازل (Ring down): ترديد طويل خلف تجمعات من فقاعات الغاز', en:'Ring down: a long reverberation behind collections of gas bubbles'}]},
    { h:{ar:'عيب الانعكاس / المرآة Mirror artefact', en:'Reflection / mirror artefact'},
      paras:[{
        ar:'إذا اصطدمت الحزمة بسطح عاكس قوي يعمل كمرآة، تنعكس النبضة منه إلى سطح نسيجي آخر ثم تعود الأصداء بالطريق الطويل نفسه. يحسب الجهاز العمق من زمن الرحلة كاملًا بافتراض مسار مستقيم، فيضع صورة التركيب الثاني أبعد من السطح العاكس — نسخة مرآتية وهمية. أشهر مواضعه الحجاب الحاجز، حيث تُرى صورة الكبد مكررة داخل تجويف الصدر.',
        en:'If the beam strikes a strong reflector that behaves like a mirror, the pulse bounces from it to a second tissue interface and the echoes return along the same long path. The machine calculates depth from the full travel time assuming a straight path, so it plots the second structure beyond the reflecting surface — a phantom mirror copy. The classic site is the diaphragm, where the liver appears duplicated inside the chest cavity.'}]},
    { h:{ar:'ملخص العيوب الأربعة', en:'The four artefacts at a glance'},
      paras:[{
        ar:'يجمع الجدول التالي العيوب الأربعة الأساسية بأسبابها ومظاهرها؛ ولاحظ أنها كلها تعود إلى كسر افتراض أو أكثر من افتراضات تكوين الصورة.',
        en:'The table below gathers the four core artefacts with their causes and appearances; note that every one of them traces back to breaking one or more of the image-formation assumptions.'}],
      table:{ head:[{ar:'العيب',en:'Artefact'},{ar:'السبب الفيزيائي',en:'Physical cause'},{ar:'المظهر في الصورة',en:'Appearance'}],
        rows:[
          [{ar:'التعزيز الصوتي',en:'Acoustic enhancement'},{ar:'توهين ضعيف في السائل',en:'Weak attenuation in fluid'},{ar:'إضاءة زائدة خلف التركيب السائل',en:'Increased brightness behind a fluid structure'}],
          [{ar:'التظليل الصوتي',en:'Acoustic shadowing'},{ar:'انعكاس أو امتصاص شبه كامل عند التكلس أو الغاز',en:'Near-total reflection or absorption at calcification or gas'},{ar:'نطاق داكن بلا معلومات خلف التركيب',en:'A dark, information-free band behind the structure'}],
          [{ar:'الترديد',en:'Reverberation'},{ar:'انعكاسات متكررة بين المسبار وسطح قوي قريب',en:'Repeated reflections between transducer and a strong near interface'},{ar:'خطوط متكررة، أو ذيل مذنّب، أو رنين نازل',en:'Repeated stripes, comet tail, or ring down'}],
          [{ar:'المرآة',en:'Mirror artefact'},{ar:'سطح قوي يعكس الحزمة كمرآة إلى تركيب آخر',en:'A strong surface reflects the beam like a mirror to another structure'},{ar:'نسخة وهمية من التركيب خلف السطح العاكس',en:'A phantom duplicate beyond the reflecting surface'}]]}
    }
  ],
  quiz:[
    { q:{ar:'ظهرت التراكيب الواقعة خلف كيسة بسيطة أكثر إضاءة من محيطها. ما هذا العيب وما سببه؟', en:'Structures behind a simple cyst appear brighter than their surroundings. What is this artefact and its cause?'},
      opts:[{ar:'التظليل الصوتي — امتصاص عالٍ في السائل',en:'Acoustic shadowing — high absorption in fluid'},{ar:'التعزيز الصوتي — توهين السائل أضعف من النسيج حوله',en:'Acoustic enhancement — fluid attenuates less than surrounding tissue'},{ar:'عيب المرآة — انعكاس عند جدار الكيسة',en:'Mirror artefact — reflection at the cyst wall'},{ar:'الترديد — انعكاسات متكررة في الكيسة',en:'Reverberation — repeated reflections in the cyst'}], a:1,
      why:{ar:'السائل يوهن الموجة قليلًا، فتصل حزمة أقوى إلى ما خلفه وتعود أصداء أعلى سعة يرسمها الجهاز أكثر إضاءة: هذا هو التعزيز الصوتي.', en:'Fluid attenuates the beam only slightly, so a stronger beam reaches the tissues beyond it and stronger echoes are painted brighter: acoustic enhancement.'}},
    { q:{ar:'ما الفرق بين شكلي الترديد: ذيل المذنّب (Comet tail) والرنين النازل (Ring down)؟', en:'What distinguishes the two reverberation forms, comet tail and ring down?'},
      opts:[{ar:'ذيل المذنّب خلف معدن أو تكلس، والرنين النازل خلف تجمع فقاعات غاز',en:'Comet tail arises behind metal or calcification; ring down behind a collection of gas bubbles'},{ar:'ذيل المذنّب خلف غاز، والرنين النازل خلف معدن',en:'Comet tail arises behind gas; ring down behind metal'},{ar:'كلاهما خلف السوائل فقط',en:'Both arise only behind fluids'},{ar:'لا فرق بينهما',en:'There is no difference'}], a:0,
      why:{ar:'ذيل المذنّب ترديد ضيق قصير من أجسام معدنية أو متكلسة، بينما يولّد تجمع الفقاعات الغازية رنينًا نازلًا طويلًا.', en:'A comet tail is a short tight reverberation from metal or calcified objects, while a cluster of gas bubbles produces long ring down.'}},
    { q:{ar:'بدا الكبد مكررًا داخل تجويف الصدر فوق الحجاب الحاجز. ما العيب الأرجح؟', en:'The liver appears duplicated inside the chest above the diaphragm. Which artefact is most likely?'},
      opts:[{ar:'التعزيز الصوتي',en:'Acoustic enhancement'},{ar:'التظليل الصوتي',en:'Acoustic shadowing'},{ar:'عيب المرآة عند الحجاب الحاجز',en:'Mirror artefact at the diaphragm'},{ar:'ذيل المذنّب',en:'Comet tail'}], a:2,
      why:{ar:'الحجاب الحاجز سطح عاكس قوي يعمل كمرآة، فيضع الجهاز صورة الكبد مرة ثانية في الجانب الآخر منه داخل الصدر.', en:'The diaphragm is a strong reflector acting as a mirror, so the machine plots a second copy of the liver on its far side, inside the chest.'}}
  ]
}
];
