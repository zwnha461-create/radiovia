export const LESSONS = [
{
  slug:'mr-machine', chapter:'mr',
  title:{ar:'جهاز الرنين المغناطيسي', en:'The MR Machine'},
  intro:{ar:'يتكوّن جهاز الرنين من أربعة عناصر رئيسية تعمل معًا: مغناطيس رئيسي قوي يولّد المجال B0، وملفات تحسين تجعل المجال متجانسًا، وملفات تدرج تسمح بترميز المواضع، وملفات تردد راديوي ترسل النبضات وتستقبل الإشارة. فهم وظيفة كل عنصر هو المدخل لفهم فيزياء الرنين كلها.',
         en:'An MR scanner is built from four main elements working together: a powerful main magnet producing the B0 field, shim coils that make the field uniform, gradient coils that allow spatial encoding, and radiofrequency coils that transmit pulses and receive the signal. Understanding each element is the gateway to all MR physics.'},
  sections:[
    { h:{ar:'المغناطيس الرئيسي وفائق التوصيل', en:'The main superconducting magnet'},
      paras:[
        {ar:'يولّد المجال المغناطيسي الرئيسي B0 مغناطيسٌ كهربائي فائق التوصيل (superconducting electromagnet)، لأن صنع مغناطيس دائم عادي بقوة كافية سيتطلب كتلة هائلة غير عملية. يمر تيار كهربائي ثابت عبر ملفات فيولّد مجالًا ثابتًا باتجاه Z، ويبلغ وزن المغناطيس نحو 6 أطنان، وهو يعمل باستمرار ولا يُطفأ أبدًا.',
         en:'The main magnetic field B0 is produced by a superconducting electromagnet, because an ordinary permanent magnet strong enough would need an impractically enormous mass. A constant electric current flows through coils and generates a steady field in the Z direction; the magnet weighs about 6 tonnes and is always switched on.'},
        {ar:'يولّد التيار المستمر حرارة كبيرة، لذا تُبرَّد الملفات بالهيليوم السائل (liquid helium) عند درجة حرارة تقارب −269°C، والتبريد الشديد هو نفسه ما يجعل مقاومة الملفات للتيار تنخفض إلى الصفر تقريبًا، فيستمر التيار دون فقد للطاقة.',
         en:'The constant current generates a great deal of heat, so the coils are cooled with liquid helium at about −269°C. This extreme cooling is also what drops the electrical resistance of the coils to virtually zero, letting the current persist without energy loss.'}
      ],
      nums:[
        {v:'1.5–3 T', ar:'شدة المجال في أغلب الأجهزة الإكلينيكية', en:'Field strength of most clinical scanners'},
        {v:'7 T', ar:'شدة تصل إليها بعض الأجهزة الحديثة', en:'Field strength reached by some newer systems'},
        {v:'−269°C', ar:'درجة حرارة الهيليوم السائل المستخدم للتبريد', en:'Temperature of the liquid helium coolant'},
        {v:'~6 tonnes', ar:'الوزن التقريبي للمغناطيس الرئيسي', en:'Approximate weight of the main magnet'}
      ]},
    { h:{ar:'وحدات القياس وقوة المجال', en:'Units and field strength'},
      paras:[
        {ar:'تقاس شدة المجال المغناطيسي بوحدة Tesla، حيث 1 Tesla يساوي 10,000 gauss. وللمقارنة، تبلغ شدة المجال المغناطيسي للأرض نحو 0.5 gauss فقط، ما يعني أن جهازًا بشدة 3T أقوى من مجال الأرض بنحو 60,000 مرة.',
         en:'Magnetic field strength is measured in Tesla, where 1 Tesla equals 10,000 gauss. For comparison, the Earth has a magnetic field of roughly 0.5 gauss, so a 3T scanner is about 60,000 times stronger than the field of the Earth.'}
      ],
      nums:[
        {v:'1 T = 10,000 gauss', ar:'معامل التحويل بين الوحدتين', en:'Conversion between the two units'},
        {v:'~0.5 gauss', ar:'شدة المجال المغناطيسي للأرض', en:'Strength of the Earth magnetic field'}
      ]},
    { h:{ar:'ملفات التحسين Shim coils', en:'Shim coils'},
      paras:[
        {ar:'تقع ملفات التحسين (shim coils) داخل المغناطيس الرئيسي مباشرة، ومهمتها ضبط المجال الرئيسي بدقة وإزالة ما فيه من عدم تجانس، لأن تجانس المجال شرط أساسي لجودة الإشارة والصورة. وتسمى عملية الضبط هذه shimming.',
         en:'Shim coils sit just inside the main magnet and fine-tune the main field, removing inhomogeneities, because a uniform field is essential for signal and image quality. This adjustment process is called shimming.'}
      ]},
    { h:{ar:'ملفات التدرج Gradient coils', en:'Gradient coils'},
      paras:[
        {ar:'توجد ثلاث مجموعات من ملفات التدرج (gradient coils) موجهة على المحاور x وy وz، وتعمل على تغيير شدة المجال المغناطيسي تدريجيًا عبر الجسم، وهو الأساس الذي يقوم عليه ترميز مواضع الإشارة (spatial encoding). تُشغَّل هذه الملفات وتُطفأ بسرعة كبيرة، خلال 1 ms أو أقل، وهذا التبديل السريع هو مصدر الضجيج العالي المسموع أثناء الفحص.',
         en:'Three sets of gradient coils are oriented along the x, y and z axes and alter the magnetic field strength gradually across the body, which is the basis of spatial encoding of the signal. The coils switch on and off very rapidly, in 1 ms or less, and this rapid switching is what creates the loud noise heard during scanning.'}
      ],
      nums:[
        {v:'≤1 ms', ar:'زمن تشغيل ملفات التدرج وإطفائها', en:'Switching time of the gradient coils'}
      ]},
    { h:{ar:'ملفات التردد الراديوي RF coils', en:'Radiofrequency coils'},
      paras:[
        {ar:'تُضبط ملفات التردد الراديوي (RF coils) على تردد محدد، فتولّد مجالًا مغناطيسيًا متذبذبًا عموديًا على المجال الرئيسي (في المستوى XY) لإثارة الأنوية، كما تستقبل إشارات الرنين الصادرة من الجسم. وكلما كان الملف أقرب إلى الجزء المراد تصويره كانت الإشارة أقوى، لذا تُصمم ملفات خاصة لكل منطقة.',
         en:'RF coils are tuned to a specific frequency. They generate an oscillating magnetic field at right angles to the main field (in the XY plane) to excite the nuclei, and they also receive the MR signals produced by the body. The closer a coil sits to the part being imaged, the stronger the signal, so dedicated coils are designed for each body region.'}
      ],
      table:{
        head:[{ar:'نوع الملف', en:'Coil type'},{ar:'الإرسال والاستقبال', en:'Transmit / receive'},{ar:'الاستخدام', en:'Use'}],
        rows:[
          [{ar:'ملف الجسم القياسي', en:'Standard body coil'},{ar:'يرسل ويستقبل', en:'Transmit and receive'},{ar:'جزء دائم من الجهاز، لتصوير مناطق الجسم الكبيرة', en:'Built into the scanner, for large body areas'}],
          [{ar:'ملف الرأس', en:'Head coil'},{ar:'يرسل ويستقبل', en:'Transmit and receive'},{ar:'على شكل خوذة، لفحوص الرأس', en:'Helmet-shaped, for head examinations'}],
          [{ar:'الملفات السطحية (المحلية)', en:'Surface (local) coils'},{ar:'تستقبل فقط', en:'Receive only'},{ar:'ملفات صغيرة تُوضع ملاصقة للمنطقة مثل الذراع والساق ومحجر العين والعمود الفقري القطني', en:'Small coils placed against the region, e.g. arm, leg, orbits, lumbar spine'}],
          [{ar:'ملفات المصفوفة الطورية', en:'Phased array coils'},{ar:'تستقبل (توجد أنواع ترسل أيضًا)', en:'Receive (transmit versions exist)'},{ar:'ملفات استقبال متعددة تستقبل كل منها على حدة ثم تُدمج الإشارات لتحسين نسبة الإشارة إلى الضجيج SNR', en:'Multiple receivers whose signals are combined to improve the signal-to-noise ratio'}]
        ]
      }}
  ],
  quiz:[
    { q:{ar:'ما وظيفة الهيليوم السائل في جهاز الرنين؟', en:'What is the role of liquid helium in an MR scanner?'},
      opts:[{ar:'توليد المجال المغناطيسي الرئيسي', en:'Generating the main magnetic field'},{ar:'تبريد ملفات المغناطيس فائق التوصيل حتى تنعدم مقاومتها تقريبًا', en:'Cooling the superconducting magnet coils so their resistance falls to near zero'},{ar:'تبريد المريض أثناء الفحص', en:'Cooling the patient during the scan'},{ar:'تشغيل ملفات التدرج', en:'Powering the gradient coils'}],
      a:1,
      why:{ar:'يبرّد الهيليوم السائل (−269°C) ملفات المغناطيس فائق التوصيل، وهذا التبريد الشديد هو ما يجعل مقاومة الملفات صفرًا تقريبًا فيستمر التيار دون فقد.', en:'Liquid helium (−269°C) cools the superconducting magnet coils; this extreme cooling is what brings their resistance to virtually zero so the current persists without loss.'}},
    { q:{ar:'ما مصدر الضجيج العالي أثناء فحص الرنين؟', en:'What causes the loud noise during an MR examination?'},
      opts:[{ar:'دوران المغناطيس الرئيسي', en:'Rotation of the main magnet'},{ar:'التبديل السريع لملفات التدرج خلال 1 ms أو أقل', en:'Rapid switching of the gradient coils in 1 ms or less'},{ar:'ضخ الهيليوم السائل', en:'Pumping of the liquid helium'},{ar:'اهتزاز ملفات RF', en:'Vibration of the RF coils'}],
      a:1,
      why:{ar:'تُشغَّل ملفات التدرج وتُطفأ بسرعة فائقة (≤1 ms)، وهذا التبديل السريع داخل المجال المغناطيسي القوي هو ما يولّد الضجيج المميز للفحص.', en:'Gradient coils switch on and off extremely fast (≤1 ms), and this rapid switching within the strong magnetic field generates the characteristic scanner noise.'}},
    { q:{ar:'أي أنواع ملفات RF التالية تستقبل الإشارة فقط ولا ترسل؟', en:'Which of the following RF coil types is receive-only?'},
      opts:[{ar:'ملف الجسم القياسي', en:'Standard body coil'},{ar:'ملف الرأس', en:'Head coil'},{ar:'الملفات السطحية (المحلية)', en:'Surface (local) coils'},{ar:'ملف الإرسال بالمصفوفة الطورية', en:'Transmit phased array coil'}],
      a:2,
      why:{ar:'الملفات السطحية ملفات استقبال فقط تُوضع ملاصقة للمنطقة المراد تصويرها لتقوية الإشارة، بينما ملفا الجسم والرأس يرسلان ويستقبلان معًا.', en:'Surface coils are receive-only coils placed as close as possible to the imaged region to maximise signal, whereas the body and head coils both transmit and receive.'}}
  ]
},
{
  slug:'introduction-to-mri', chapter:'mr',
  title:{ar:'مقدمة في الرنين المغناطيسي', en:'Introduction to MRI'},
  intro:{ar:'يعتمد الرنين المغناطيسي على أنوية الهيدروجين التي تتصرف كمغناطيسات دقيقة داخل الجسم. عند وضعها في المجال B0 تبدأ في البدارية (precession) بتردد لارمور، ويمكن قلب مغنطتها بنبضة RF رنانة إلى المستوى المستعرض لتوليد إشارة قابلة للقياس، ثم تسترخي عائدة إلى حالتها الأصلية.',
         en:'MRI relies on hydrogen nuclei behaving as tiny magnets within the body. Placed in the B0 field they precess at the Larmor frequency; a resonant RF pulse can flip their magnetisation into the transverse plane to produce a measurable signal, after which they relax back to their resting state.'},
  sections:[
    { h:{ar:'أنوية الهيدروجين كمغناطيسات صغيرة', en:'Hydrogen nuclei as tiny magnets'},
      paras:[
        {ar:'تحتوي نواة الهيدروجين على بروتون واحد يحمل شحنة +1، وتمتلك النواة خاصية اللف الذاتي (spin). اجتماع الشحنة مع الحركة يولّد تيارًا كهربائيًا، والتيار بدوره يولّد مجالًا مغناطيسيًا، فتتصرف النواة كمغناطيس صغير يتأثر بأي مجال مغناطيسي خارجي. وبالمقابل، فإن المجال المغناطيسي الصادر من الأنسجة يولّد تيارًا كهربائيًا في ملفات الاستقبال، وهكذا تُقاس الإشارة.',
         en:'A hydrogen nucleus contains a single proton with a charge of +1 and possesses intrinsic spin. Charge plus motion creates an electric current, and a current creates a magnetic field, so the nucleus behaves as a tiny magnet affected by any applied magnetic field. Conversely, the magnetic field from tissue induces an electric current in the receiver coils, and that is how the signal is measured.'},
        {ar:'الهيدروجين هو الأنسب للتصوير لأنه أكثر العناصر وفرة في الجسم، وعمومًا تصلح أي نواة عدد بروتوناتها فردي، إذ يلزم بروتون غير مقترن ليمنح النواة عزمًا مغناطيسيًا (magnetic moment).',
         en:'Hydrogen is the most useful nucleus for imaging because it is the most abundant atom in the body. In general, any nucleus with an odd number of protons can be used, since an unpaired proton is needed to give the nucleus a magnetic moment.'}
      ]},
    { h:{ar:'البدارية ومعادلة لارمور', en:'Precession and the Larmor equation'},
      paras:[
        {ar:'إضافة إلى لفّ الأنوية حول محورها، فإنها عند تطبيق مجال مغناطيسي تدور حول محور هذا المجال بحركة تسمى البدارية (precession)، وتشبه حركة الجيروسكوب أو البلبل الذي يميل ويدور حول محور الجاذبية أثناء لفّه حول محوره. في جهاز الرنين يُطبَّق المجال الرئيسي B0 على المحور Z، أي بمحاذاة المحور الطولي للمريض، وهو مجال دائم التشغيل.',
         en:'As well as spinning on their own axis, nuclei placed in a magnetic field also rotate around the axis of that field, a motion called precession, like a gyroscope or spinning top leaning and rotating under gravity. In the scanner the main field B0 is applied along the Z axis, the long axis of the patient, and is permanently switched on.'},
        {ar:'تُحسب سرعة البدارية بمعادلة لارمور (Larmor equation): التردد يساوي النسبة الجيرومغناطيسية (gyromagnetic ratio) مضروبة في شدة المجال B0، والنسبة الجيرومغناطيسية ثابت يختلف من نواة لأخرى. فعند مجال شدته 1 Tesla يكون تردد لارمور للهيدروجين 42 MHz، ويرتفع إلى 63 MHz عند 1.5 Tesla.',
         en:'The precession speed is given by the Larmor equation: frequency equals the gyromagnetic ratio multiplied by the field strength B0, where the gyromagnetic ratio is a constant that differs between nuclei. At 1 Tesla the Larmor frequency of hydrogen is 42 MHz, rising to 63 MHz at 1.5 Tesla.'},
        {ar:'عند تطبيق B0 تتوزع الأنوية على حالتين: أغلبها يتماشى مع اتجاه المجال وهي حالة الطاقة المنخفضة، وأقلية تعاكسه وهي حالة الطاقة العالية. تفوّق الحالة الأولى ينتج مغنطة صافية طولية (net longitudinal magnetisation) رمزها Mz باتجاه محور Z.',
         en:'With B0 applied, nuclei occupy two states: most align with the field (the low-energy state) and a minority align against it (the high-energy state). The excess in the low-energy state produces a net longitudinal magnetisation, Mz, along the Z axis.'}
      ],
      nums:[
        {v:'42 MHz', ar:'تردد لارمور للهيدروجين عند مجال 1 Tesla', en:'Larmor frequency of hydrogen at 1 Tesla'},
        {v:'63 MHz', ar:'تردد لارمور للهيدروجين عند مجال 1.5 Tesla', en:'Larmor frequency of hydrogen at 1.5 Tesla'},
        {v:'F = γ × B0', ar:'معادلة لارمور: التردد = النسبة الجيرومغناطيسية × شدة المجال', en:'Larmor equation: frequency = gyromagnetic ratio × field strength'}
      ]},
    { h:{ar:'المغنطة المستعرضة ونبضة التردد الراديوي', en:'Transverse magnetisation and the RF pulse'},
      paras:[
        {ar:'لا يمكن قياس المغنطة الطولية Mz مباشرة، لأن متجهها صغير جدًا مقارنة بالمجال الرئيسي الضخم الذي يتماشى معه. لذا يجب قلب المغنطة، عادة بزاوية 90°، لتصبح بزاوية مع المجال وتدور بالبدارية فيتولد منها تيار قابل للقياس في الملفات.',
         en:'Longitudinal magnetisation Mz cannot be measured directly, because its vector is far too small compared with the huge main field it is aligned with. The magnetisation must therefore be flipped, usually by 90°, so that it sits at an angle to the main field and precesses, inducing a measurable current in the coils.'},
        {ar:'يتم القلب بتطبيق مجال مغناطيسي متذبذب بسرعة وعمودي على B0 يسمى B1 أو نبضة التردد الراديوي (RF pulse)، فتنتقل المغنطة الصافية إلى المستوى المستعرض (transverse plane) ورمزها Mxy. ولكي تنتقل الطاقة إلى الأنوية بأعلى كفاءة يجب أن يتذبذب B1 بنفس تردد بدارية الأنوية، وهو ما يسمى تردد الرنين (resonant frequency) — أي 63 MHz في جهاز 1.5T، وهو تردد يقع ضمن نطاق موجات الراديو، ومن هنا جاء اسم النبضة.',
         en:'The flip is produced by a rapidly oscillating magnetic field applied at 90° to B0, called B1 or the radiofrequency (RF) pulse, which moves the net magnetisation into the transverse plane, Mxy. For energy transfer to be maximally efficient, B1 must oscillate at exactly the precession frequency of the nuclei, the resonant frequency — 63 MHz in a 1.5T scanner, which lies in the radiowave range, hence the name.'}
      ]},
    { h:{ar:'الاسترخاء بعد إيقاف النبضة', en:'Relaxation after the pulse'},
      paras:[
        {ar:'طالما استمرت نبضة RF تدور الأنوية في المستوى المستعرض وهي متفقة الطور (in phase)، فتتكوّن مغنطة مستعرضة كبيرة Mxy. وبمجرد إيقاف النبضة تبدأ المغنطة المستعرضة بالاختفاء وتعود الأنوية تدريجيًا إلى حالتها المستقرة بمغنطة طولية كبيرة Mz. يحدث هذا الاسترخاء بآليتين مستقلتين هما أساس إشارتي T1 وT2: استرخاء Spin-Lattice المسؤول عن استعادة T1، واسترخاء Spin-Spin المسؤول عن اضمحلال T2.',
         en:'While the RF pulse is applied, the nuclei keep precessing in the transverse plane in phase, producing a large transverse magnetisation Mxy. As soon as the pulse stops, the transverse magnetisation begins to disappear and the nuclei relax back towards their resting state of large longitudinal magnetisation Mz. This relaxation occurs through two independent mechanisms that form the basis of the T1 and T2 signals: spin-lattice relaxation (T1 recovery) and spin-spin relaxation (T2 decay).'}
      ]}
  ],
  quiz:[
    { q:{ar:'ما تردد لارمور لأنوية الهيدروجين في جهاز شدته 1.5 Tesla؟', en:'What is the Larmor frequency of hydrogen in a 1.5 Tesla scanner?'},
      opts:[{ar:'21 MHz', en:'21 MHz'},{ar:'42 MHz', en:'42 MHz'},{ar:'63 MHz', en:'63 MHz'},{ar:'84 MHz', en:'84 MHz'}],
      a:2,
      why:{ar:'وفق معادلة لارمور F = γ × B0، وتردد الهيدروجين 42 MHz عند 1 Tesla، فيصبح عند 1.5 Tesla مساويًا 42 × 1.5 = 63 MHz.', en:'By the Larmor equation F = γ × B0, hydrogen resonates at 42 MHz at 1 Tesla, so at 1.5 Tesla it is 42 × 1.5 = 63 MHz.'}},
    { q:{ar:'لماذا تُقلب المغنطة الصافية إلى المستوى المستعرض قبل قياس الإشارة؟', en:'Why must the net magnetisation be flipped into the transverse plane before the signal can be measured?'},
      opts:[{ar:'لأن المغنطة الطولية تختفي داخل الجهاز', en:'Because longitudinal magnetisation disappears inside the scanner'},{ar:'لأن المغنطة الطولية صغيرة جدًا مقارنة بالمجال الرئيسي فلا يمكن قياسها وهي بمحاذاته، أما عند قلبها فتدور بالبدارية وتولّد تيارًا قابلًا للقياس', en:'Because longitudinal magnetisation is too small to measure against the main field, whereas once flipped it precesses and induces a measurable current'},{ar:'لزيادة شدة المجال B0', en:'To increase the strength of B0'},{ar:'لتبريد الأنوية', en:'To cool the nuclei'}],
      a:1,
      why:{ar:'Mz ضئيلة أمام B0 الضخم فلا يمكن تمييزها، بينما المغنطة المستعرضة تدور بالبدارية عموديًا على المجال فتحدث تيارًا في ملفات الاستقبال يمكن قياسه.', en:'Mz is negligible next to the huge B0 and cannot be distinguished, while transverse magnetisation precesses at right angles to the field and induces a measurable current in the receiver coils.'}},
    { q:{ar:'لماذا يُستخدم الهيدروجين في التصوير بالرنين أكثر من غيره؟', en:'Why is hydrogen used for MR imaging more than other nuclei?'},
      opts:[{ar:'لأنه العنصر الوحيد الذي يملك spin', en:'It is the only element with spin'},{ar:'لأنه أكثر العناصر وفرة في الجسم وبروتونه غير مقترن فيمنح النواة عزمًا مغناطيسيًا', en:'It is the most abundant element in the body and its unpaired proton gives the nucleus a magnetic moment'},{ar:'لأن تردده هو الأعلى بين العناصر', en:'Its frequency is the highest of all elements'},{ar:'لأنه لا يتأثر بالمجال المغناطيسي', en:'It is unaffected by magnetic fields'}],
      a:1,
      why:{ar:'الهيدروجين أكثر عناصر الجسم وفرة، وبروتونه الوحيد غير مقترن، فتمتلك نواته عزمًا مغناطيسيًا يجعلها تتصرف كمغناطيس صغير يستجيب للمجال.', en:'Hydrogen is the most abundant element in the body, and its single unpaired proton gives its nucleus a magnetic moment, so it acts as a tiny magnet that responds to the field.'}}
  ]
},
{
  slug:'t1-and-t2-signal', chapter:'mr',
  title:{ar:'إشارتا T1 وT2', en:'T1 and T2 Signal'},
  intro:{ar:'بعد نبضة 90° تتطور الإشارة بعمليتين متزامنتين ومستقلتين تمامًا: استعادة المغنطة الطولية Mz عبر استرخاء Spin-Lattice بثابت الزمن T1، واضمحلال المغنطة المستعرضة Mxy عبر استرخاء Spin-Spin بثابت الزمن T2. اختلاف هذين الثابتين بين الأنسجة هو مصدر التباين في صور الرنين.',
         en:'After a 90° pulse the signal evolves through two simultaneous but completely independent processes: recovery of longitudinal magnetisation Mz by spin-lattice relaxation with time constant T1, and decay of transverse magnetisation Mxy by spin-spin relaxation with time constant T2. Differences in these constants between tissues are the source of MR image contrast.'},
  sections:[
    { h:{ar:'نشوء الإشارة واضمحلال الحث الحر', en:'Signal creation and free induction decay'},
      paras:[
        {ar:'تتولد إشارة الرنين من بدارية الأنوية المتفقة الطور في المستوى XY، إذ تُحدث المغنطة الصافية الدوّارة جهدًا كهربائيًا في ملفات الاستقبال على هيئة موجة جيبية بنفس تردد البدارية. تكون الإشارة في ذروتها أثناء نبضة 90° وبعد إيقافها مباشرة، ثم تبدأ بالتناقص.',
         en:'The MR signal arises from nuclei precessing in phase in the XY plane: the rotating net magnetisation induces an electric voltage in the receiving coils, a sinusoidal wave at the same frequency as the precession. The signal is greatest during and immediately after the brief 90° RF pulse, then begins to fall.'},
        {ar:'يتناقص مركّب الإشارة المستعرض أسيًا في ما يسمى اضمحلال الحث الحر (free induction decay, FID)، بينما تستعيد المغنطة الطولية قيمتها كاملة. وهاتان العمليتان تحدثان في الوقت نفسه لكنهما مستقلتان، فلكل منهما مسارها الزمني الخاص.',
         en:'The transverse component of the signal falls exponentially in the free induction decay (FID), while the longitudinal magnetisation recovers to its full value. The two processes happen at the same time but are completely independent, each following its own time course.'}
      ]},
    { h:{ar:'استرخاء Spin-Lattice وثابت T1', en:'Spin-lattice relaxation and the T1 constant'},
      paras:[
        {ar:'أثناء البدارية في المستوى المستعرض تحتك الأنوية بالجزيئات المحيطة بها، أي الشبكة (lattice)، وتنقل إليها طاقتها، فتعود تدريجيًا إلى المغنطة الطولية Mz بشكل أسي. يسمى هذا استرخاء Spin-Lattice أو الاسترخاء الطولي، ويحكمه ثابت الزمن T1، وهو الزمن اللازم لاستعادة Mz نسبة 63% من قيمتها القصوى. ويعتمد T1 على طبيعة الجزيئات والشبكة المحيطة.',
         en:'While precessing in the transverse plane, the nuclei are jostled by surrounding molecules — the lattice — and hand over their energy to them, returning exponentially to longitudinal magnetisation Mz. This is spin-lattice, or longitudinal, relaxation, governed by the time constant T1: the time taken for Mz to recover to 63% of its maximum value. T1 depends on the surrounding molecules and lattice.'},
        {ar:'الدهون والبروتينات لها T1 قصير، لأن جزيئاتها كبيرة ومنخفضة الطاقة الذاتية فتمتص طاقة الأنوية بكفاءة، فتفقد Mxy بسرعة وتستعيد Mz بسرعة. أما الماء فله T1 طويل لأن جزيئاته صغيرة وسريعة الحركة فلا تمتص الطاقة بكفاءة. وللعظم والكالسيوم والمعادن T1 طويل جدًا لأن جزيئاتها الضخمة ثابتة وصلبة وهي الأقل كفاءة في سحب الطاقة. والقاعدة العامة أن T1 أطول دائمًا من T2، باستثناء الماء حيث يتساويان.',
         en:'Fat and protein have a short T1: their molecules are large with low innate energy, so they absorb energy from the nuclei very effectively, giving rapid loss of Mxy and rapid recovery of Mz. Water has a long T1 because its small, fast-moving molecules are inefficient at absorbing energy. Bone, calcium and metal have a very long T1, as their rigid macromolecules are least effective at removing energy. As a rule, T1 is always longer than T2 — except in water, where T1 equals T2.'}
      ],
      nums:[
        {v:'63%', ar:'نسبة استعادة Mz بعد زمن T1 واحد', en:'Percentage of Mz recovered after one T1'}
      ]},
    { h:{ar:'استرخاء Spin-Spin وثابت T2', en:'Spin-spin relaxation and the T2 constant'},
      paras:[
        {ar:'بعد إيقاف نبضة RF يغيّر كل نواة خصائصها المغناطيسية المجالَ المحلي قليلًا، فتبدأ بعض الأنوية بالبدارية أسرع وبعضها أبطأ، ويفقد الجمع اتفاق الطور تدريجيًا حتى تتلاشى المغنطة المستعرضة. هذا التفاعل المغناطيسي بين الأنوية نفسها هو استرخاء Spin-Spin أو الاضمحلال المستعرض، وثابت زمنه T2، وهو الزمن اللازم لانخفاض Mxy إلى 37% من قيمتها، أي فقدان 63% من الإشارة. ويعتمد T2 على المجال المغناطيسي المحلي.',
         en:'Once the RF pulse stops, the magnetic properties of each nucleus alter the local magnetic field, so some nuclei precess faster and others slower; the spins gradually lose coherence and the net transverse magnetisation falls to zero. This magnetic interaction between the spins themselves is spin-spin, or transverse, relaxation, with time constant T2: the time for Mxy to decay to 37% of its value, i.e. losing 63% of the signal. T2 depends on the local magnetic field.'},
        {ar:'للعظم والكالسيوم والمعادن T2 قصير لأن تغير المجال المحلي فيها أكبر ما يكون في المواد الصلبة ذات الجزيئات الضخمة الثابتة، وللدهون T2 قصير أيضًا. أما الماء فله T2 طويل جدًا لأن حركة جزيئاته الخفيفة الحرارية السريعة تُنعّم المجال المحلي وتقلل اختلافاته.',
         en:'Bone, calcium and metal have a short T2 because local field variation is greatest in rigid solids and macromolecules, and fat also has a short T2. Water has a very long T2 because the rapid thermal motion of its light molecules smoothes out the local field.'}
      ],
      nums:[
        {v:'37%', ar:'نسبة Mxy المتبقية بعد زمن T2 واحد', en:'Percentage of Mxy remaining after one T2'}
      ]},
    { h:{ar:'اضمحلال T2* وعدم تجانس المجال', en:'T2* decay and field inhomogeneity'},
      paras:[
        {ar:'المنحنى الأسي المثالي لاضمحلال T2 لا يتحقق في الواقع، إذ نجد عند القياس أن الإشارة المستعرضة تتلاشى أسرع بكثير من المتوقع، وهو ما يسمى منحنى T2*. سبب ذلك عدم تجانس المجال المغناطيسي المحلي والخارجي: فمجال B0 ليس متجانسًا تمامًا رغم ضخامته، وتؤثر أنسجة الجسم ومواده أيضًا في المجال، فيتسارع فقدان اتفاق الطور.',
         en:'The ideal exponential T2 decay curve is not what is measured in reality: the transverse signal is found to vanish much faster than expected, following the T2* curve. This is caused by local and external magnetic field inhomogeneities — B0 is not perfectly homogeneous, and tissues and other materials within the field perturb it further — so the nuclei dephase more quickly.'},
        {ar:'يستطيع تسلسل Spin Echo حذف تأثير عدم تجانس المجال، بحيث لا يُسجَّل إلا تأثير T2 الحقيقي الخاص بالنسيج نفسه، كما سيأتي في دروس التسلسلات.',
         en:'The spin echo sequence can remove the effect of these field inhomogeneities, so that only the true tissue-specific T2 effect is recorded, as covered in the sequence lessons.'}
      ]},
    { h:{ar:'قيم T1 وT2 في الأنسجة', en:'T1 and T2 values of tissues'},
      paras:[
        {ar:'تختلف أزمنة الاسترخاء اختلافًا كبيرًا بين الأنسجة عند مجال 1 Tesla، من مئات المللي ثانية في الدهون إلى ثوانٍ في الماء الحر، وهذا التباين هو ما يبني عليه الطبيب تشخيصه من الصور.',
         en:'Relaxation times vary widely between tissues at 1 Tesla, from hundreds of milliseconds in fat to seconds in free water, and this variation is the foundation of image interpretation.'}
      ],
      table:{
        head:[{ar:'النسيج', en:'Tissue'},{ar:'T1 (ms)', en:'T1 (ms)'},{ar:'T2 (ms)', en:'T2 (ms)'}],
        rows:[
          [{ar:'الماء', en:'Water'},{ar:'3000', en:'3000'},{ar:'3000', en:'3000'}],
          [{ar:'السائل الدماغي الشوكي CSF', en:'CSF'},{ar:'2000', en:'2000'},{ar:'150', en:'150'}],
          [{ar:'المادة الرمادية', en:'Grey matter'},{ar:'800', en:'800'},{ar:'100', en:'100'}],
          [{ar:'المادة البيضاء', en:'White matter'},{ar:'650', en:'650'},{ar:'90', en:'90'}],
          [{ar:'الكلية', en:'Kidney'},{ar:'550', en:'550'},{ar:'60', en:'60'}],
          [{ar:'الدهون', en:'Fat'},{ar:'250', en:'250'},{ar:'80', en:'80'}],
          [{ar:'العظم والأسنان', en:'Bone and teeth'},{ar:'طويل جدًا', en:'Very long'},{ar:'قصير جدًا', en:'Very short'}]
        ]
      }}
  ],
  quiz:[
    { q:{ar:'ما تعريف ثابت الزمن T1؟', en:'How is the time constant T1 defined?'},
      opts:[{ar:'الزمن اللازم لانخفاض Mxy إلى 37% من قيمتها', en:'The time for Mxy to decay to 37% of its value'},{ar:'الزمن اللازم لاستعادة Mz نسبة 63% من قيمتها القصوى', en:'The time for Mz to recover to 63% of its maximum value'},{ar:'الزمن بين نبضتي RF متتاليتين', en:'The time between two successive RF pulses'},{ar:'الزمن اللازم لاختفاء الإشارة تمامًا', en:'The time for the signal to disappear completely'}],
      a:1,
      why:{ar:'T1 هو ثابت زمن استرخاء Spin-Lattice، ويُعرَّف بأنه الزمن الذي تستعيد فيه المغنطة الطولية Mz نسبة 63% من قيمتها القصوى.', en:'T1 is the spin-lattice relaxation time constant, defined as the time for longitudinal magnetisation Mz to recover to 63% of its maximum value.'}},
    { q:{ar:'لماذا يكون اضمحلال T2* أسرع من اضمحلال T2 الحقيقي؟', en:'Why is T2* decay faster than true T2 decay?'},
      opts:[{ar:'بسبب ارتفاع حرارة الأنسجة', en:'Because of tissue heating'},{ar:'بسبب عدم تجانس المجال المغناطيسي المحلي والخارجي الذي يسرّع فقدان اتفاق الطور', en:'Because local and external magnetic field inhomogeneities speed up dephasing'},{ar:'بسبب حركة المريض فقط', en:'Because of patient motion only'},{ar:'بسبب قوة ملفات التدرج', en:'Because of gradient coil strength'}],
      a:1,
      why:{ar:'يضيف عدم تجانس B0 وتأثيرات الأنسجة في المجال المحلي فقدانًا إضافيًا لاتفاق الطور فوق تأثير Spin-Spin وحده، فتتلاشى الإشارة أسرع، وهذا هو T2*.', en:'Inhomogeneity of B0 and tissue effects on the local field add extra dephasing on top of the spin-spin effect alone, so the signal vanishes faster — this is T2*.'}},
    { q:{ar:'أي الأنسجة التالية لها أقصر T2 عند مجال 1 Tesla؟', en:'Which of the following tissues has the shortest T2 at 1 Tesla?'},
      opts:[{ar:'الماء', en:'Water'},{ar:'السائل الدماغي الشوكي CSF', en:'CSF'},{ar:'الدهون', en:'Fat'},{ar:'العظم', en:'Bone'}],
      a:3,
      why:{ar:'للعظم والأسنان T2 قصير جدًا لأن تغير المجال المحلي أعظم ما يكون في المواد الصلبة ذات الجزيئات الثابتة، بينما للماء أطول T2 ويساوي T1 لديه.', en:'Bone and teeth have a very short T2 because local field variation is greatest in rigid solids, whereas water has the longest T2, equal to its T1.'}}
  ]
},
{
  slug:'t1-t2-and-pd-weighted-imaging', chapter:'mr',
  title:{ar:'التصوير المرجح بـ T1 وT2 وكثافة البروتون', en:'T1, T2 and Proton Density Weighted Imaging'},
  intro:{ar:'بعكس التصوير الإشعاعي الذي يعتمد تباينه على اختلاف توهين الأشعة، يعتمد تباين صور الرنين على الخصائص المغناطيسية للأنسجة وعدد أنوية الهيدروجين فيها. وباختيار قيم TR وTE المناسبة يمكن إنتاج صور مرجحة بـ T1 أو T2 أو كثافة البروتون PD من الجهاز نفسه.',
         en:'Unlike radiographic imaging, where contrast depends on differing attenuation, MR contrast depends on the magnetic properties of tissues and the number of hydrogen nuclei within them. By choosing suitable TR and TE values, the same scanner can produce T1-weighted, T2-weighted or proton density (PD) weighted images.'},
  sections:[
    { h:{ar:'مبدأ الترجيح: دور TR وTE', en:'The principle of weighting: TR and TE'},
      paras:[
        {ar:'تُبنى الصور المرجحة على ثلاث خصائص للأنسجة: زمن استرخاء T1، وزمن اضمحلال T2، وعدد بروتونات الهيدروجين في المنطقة (proton density). ويتحكم زمن التكرار TR، وهو الزمن بين نبضتي 90° متتاليتين، في مقدار استعادة Mz قبل النبضة التالية: فكلما طال TR زاد ما استعادته الأنسجة من Mz وكبرت الإشارة المستعرضة عند القلب. لذلك فإن TR هو ما يحدد إسهام تباين T1 في الصورة.',
         en:'Weighted images are built on three tissue properties: the T1 relaxation time, the T2 decay time, and the number of hydrogen protons present (proton density). The repetition time TR, the interval between successive 90° pulses, controls how much Mz recovers before the next pulse: the longer the TR, the more Mz has recovered and the greater the transverse signal produced on flipping. TR therefore determines the T1 contribution to image contrast.'},
        {ar:'أما زمن الصدى TE، وهو الزمن من نبضة 90° حتى قياس الصدى، فيحدد مقدار اضمحلال Mxy قبل القياس: فكلما طال TE زاد اضمحلال الإشارة المستعرضة وصغرت. لذلك فإن TE هو ما يحدد إسهام تباين T2 في الصورة.',
         en:'The echo time TE, the interval from the 90° pulse to echo measurement, determines how much Mxy decay occurs before measurement: the longer the TE, the more the transverse signal decays and the smaller it becomes. TE therefore determines the T2 contribution to image contrast.'}
      ]},
    { h:{ar:'الترجيح بـ T1', en:'T1 weighting'},
      paras:[
        {ar:'لتعظيم التباين بين خصائص T1 للأنسجة نختار TR قصيرًا، لأن الفرق بين منحنيات استعادة الأنسجة يكون أعظم في الجزء المبكر من الاستعادة: فالأنسجة قصيرة T1 كالدهون تستعيد معظم Mz حتى مع TR قصير فتظهر ساطعة، بينما الأنسجة طويلة T1 كالماء لا تستعيد إلا القليل فتظهر داكنة. وفي الوقت نفسه نستخدم TE قصيرًا لتقليل إسهام T2 إلى أدنى حد.',
         en:'To maximise contrast between the T1 properties of tissues we use a short TR, because the separation between tissue recovery curves is greatest early in recovery: short-T1 tissues such as fat recover most of their Mz even with a short TR and appear bright, while long-T1 tissues such as water recover little and appear dark. A short TE is used at the same time to minimise the T2 contribution.'}
      ],
      nums:[
        {v:'TR 300–600 ms', ar:'زمن التكرار القصير في الترجيح T1', en:'Short TR used for T1 weighting'},
        {v:'TE 10–30 ms', ar:'زمن الصدى القصير في الترجيح T1', en:'Short TE used for T1 weighting'}
      ]},
    { h:{ar:'الترجيح بـ T2', en:'T2 weighting'},
      paras:[
        {ar:'لتعظيم تباين T2 نستخدم TE طويلًا حتى تتباعد إشارات الأنسجة بحسب أزمنة اضمحلالها: فالماء طويل T2 يحتفظ بإشارة عالية فيظهر ساطعًا، بينما الدهون قصيرة T2 تكون إشارتها قد اضمحلت فتظهر أقل سطوعًا من الماء. ولا يُطال TE أكثر من اللازم حتى لا تصبح الإشارة ضئيلة غير صالحة.',
         en:'To maximise T2 contrast we use a long TE so that tissue signals separate according to their decay times: long-T2 water retains a high signal and appears bright, while short-T2 fat has decayed and appears less bright than water. The TE is not made so long that the signal becomes negligible.'},
        {ar:'ولتقليل إسهام T1 في الوقت نفسه نستخدم TR طويلًا، لأن تباين T1 يكون أصغر ما يمكن عند TR الطويل أو القصير جدًا، لكن عند TR القصير جدًا تكون الإشارة الكلية أصغر من أن تنفع، فيقع الاختيار على TR الطويل.',
         en:'To minimise the T1 contribution at the same time we use a long TR, because T1 contrast is smallest at very long or very short TR; at very short TR the overall signal is too small to be useful, so the long TR is chosen.'}
      ],
      nums:[
        {v:'TR ~2000 ms', ar:'زمن التكرار الطويل في الترجيح T2', en:'Long TR used for T2 weighting'},
        {v:'TE 90–140 ms', ar:'زمن الصدى الطويل في الترجيح T2', en:'Long TE used for T2 weighting'}
      ]},
    { h:{ar:'ترجيح كثافة البروتون PD', en:'Proton density weighting'},
      paras:[
        {ar:'لا يعرض ترجيح PD الخصائص المغناطيسية للأنوية بل عددها في المنطقة المصورة. وللحصول عليه يجب تقليل إسهامَي T1 وT2 معًا: يُقلَّل إسهام T1 بزمن TR طويل يعطي إشارة كبيرة وتباين T1 صغيرًا، ويُقلَّل إسهام T2 بزمن TE قصير يعطي إشارة كبيرة وتباين T2 صغيرًا. والنتيجة أن سطوع الصورة يعكس كثافة البروتونات، فتظهر الدهون ساطعة والماء بإشارة متوسطة.',
         en:'PD weighting displays not the magnetic characteristics of the nuclei but their number in the imaged area. It requires minimising both T1 and T2 contributions: T1 is minimised with a long TR (large signal, small T1 contrast) and T2 with a short TE (large signal, small T2 contrast). The resulting brightness reflects proton density, with fat bright and water intermediate.'}
      ],
      nums:[
        {v:'TR 1000–3000 ms', ar:'زمن التكرار في ترجيح PD', en:'TR used for PD weighting'},
        {v:'TE ~15 ms', ar:'زمن الصدى القصير في ترجيح PD', en:'Short TE used for PD weighting'}
      ]},
    { h:{ar:'ملخص المقارنة بين الترجيحات', en:'Summary comparison of the weightings'},
      paras:[
        {ar:'يلخص الجدول التالي الترجيحات الثلاثة جنبًا إلى جنب: إعدادات TR وTE النموذجية لكل منها، وكيف تظهر الدهون والماء في كل صورة نتيجة اختلاف أزمنة استرخائهما.',
         en:'The table below summarises the three weightings side by side: the typical TR and TE settings for each, and how fat and water appear in each image as a result of their different relaxation times.'}
      ],
      table:{
        head:[{ar:'الترجيح', en:'Weighting'},{ar:'TR', en:'TR'},{ar:'TE', en:'TE'},{ar:'الدهون', en:'Fat'},{ar:'الماء', en:'Water'}],
        rows:[
          [{ar:'T1', en:'T1'},{ar:'قصير', en:'Short'},{ar:'قصير', en:'Short'},{ar:'ساطعة (T1 قصير فتستعيد Mz بسرعة)', en:'Bright (short T1, rapid Mz recovery)'},{ar:'داكن (T1 طويل فلا يلحق بالاستعادة مع TR القصير)', en:'Dark (long T1, little recovery at short TR)'}],
          [{ar:'T2', en:'T2'},{ar:'طويل', en:'Long'},{ar:'طويل', en:'Long'},{ar:'أقل سطوعًا من الماء (T2 قصير)', en:'Less bright than water (short T2)'},{ar:'ساطع (T2 طويل فيحتفظ بالإشارة)', en:'Bright (long T2, signal retained)'}],
          [{ar:'PD', en:'PD'},{ar:'طويل', en:'Long'},{ar:'قصير', en:'Short'},{ar:'ساطعة', en:'Bright'},{ar:'إشارة متوسطة', en:'Intermediate signal'}]
        ]
      }}
  ],
  quiz:[
    { q:{ar:'أي مجموعة معايير تنتج صورة مرجحة بكثافة البروتون PD؟', en:'Which parameter combination produces a proton density weighted image?'},
      opts:[{ar:'TR قصير وTE قصير', en:'Short TR and short TE'},{ar:'TR طويل وTE طويل', en:'Long TR and long TE'},{ar:'TR طويل وTE قصير', en:'Long TR and short TE'},{ar:'TR قصير وTE طويل', en:'Short TR and long TE'}],
      a:2,
      why:{ar:'يُقلَّل إسهام T1 بزمن TR طويل وإسهام T2 بزمن TE قصير، فيتبقى تباين يعكس عدد بروتونات الهيدروجين فقط، وهو ترجيح PD.', en:'A long TR minimises T1 contribution and a short TE minimises T2 contribution, leaving contrast that reflects only the number of hydrogen protons — PD weighting.'}},
    { q:{ar:'لماذا يظهر الماء داكنًا في الصور المرجحة بـ T1؟', en:'Why does water appear dark on T1-weighted images?'},
      opts:[{ar:'لأن كثافة بروتوناته منخفضة', en:'Because its proton density is low'},{ar:'لأن له T1 طويلًا، فمع TR القصير لا يستعيد إلا جزءًا صغيرًا من Mz قبل النبضة التالية فتكون إشارته منخفضة', en:'Because its long T1 means that at a short TR it recovers only a small fraction of Mz before the next pulse, giving a low signal'},{ar:'لأن له T2 قصيرًا جدًا', en:'Because its T2 is very short'},{ar:'لأنه لا يحتوي على هيدروجين', en:'Because it contains no hydrogen'}],
      a:1,
      why:{ar:'الماء طويل T1، والترجيح T1 يستخدم TR قصيرًا، فلا يلحق الماء باستعادة مغنطته الطولية، فينتج عند القلب إشارة مستعرضة ضعيفة ويظهر داكنًا، عكس الدهون قصيرة T1.', en:'Water has a long T1, and T1 weighting uses a short TR, so water cannot recover its longitudinal magnetisation in time and yields only a weak transverse signal — dark — unlike short-T1 fat.'}},
    { q:{ar:'ما المعايير التي تحدد إسهام تباين T2 في الصورة أساسًا؟', en:'Which parameter primarily determines the T2 contribution to image contrast?'},
      opts:[{ar:'TR', en:'TR'},{ar:'TE', en:'TE'},{ar:'زاوية الانقلاب', en:'Flip angle'},{ar:'شدة مجال B0', en:'B0 field strength'}],
      a:1,
      why:{ar:'يحدد TE مقدار الزمن المتاح لاضمحلال Mxy قبل قياس الصدى، فهو الذي يتحكم في إسهام T2، بينما يتحكم TR في إسهام T1.', en:'TE sets how long Mxy is allowed to decay before the echo is measured, so it controls the T2 contribution, while TR controls the T1 contribution.'}}
  ]
},
{
  slug:'spin-echo-sequence', chapter:'mr',
  title:{ar:'تسلسل صدى اللف Spin Echo', en:'Spin Echo Sequence'},
  intro:{ar:'تسلسل Spin Echo هو التسلسل الأساسي في الرنين، وهدفه إزالة تأثير المجال الساكن غير المتجانس (T2*) مع الإبقاء على تأثير T2 الحقيقي الخاص بالنسيج. يتم ذلك بنبضة 180° تُطبق في منتصف الزمن بين نبضة الإثارة والصدى فتعيد تجميع أطوار الأنوية.',
         en:'The spin echo is the fundamental MR sequence. Its aim is to remove the effect of static field inhomogeneity (T2*) while preserving the true tissue T2 effect, using a 180° pulse applied halfway between excitation and the echo to bring the spins back into phase.'},
  sections:[
    { h:{ar:'خطوات التسلسل', en:'Steps of the sequence'},
      paras:[
        {ar:'يبدأ التسلسل بنبضة RF بزاوية 90° تقلب المغنطة إلى المستوى المستعرض، فتدور جميع متجهات البروتونات متفقة الطور وتكون إشارة Mxy في ذروتها. بعد ذلك تضمحل الإشارة بسرعة وفق T2* (اضمحلال الحث الحر)، إذ تتقدم بعض المتجهات وتتأخر أخرى ويفقد الجمع اتفاق الطور.',
         en:'The sequence begins with a 90° RF pulse that flips the magnetisation into the transverse plane: all proton vectors precess in phase and the Mxy signal is at its maximum. The signal then decays rapidly according to T2* (the free induction decay), as some vectors run ahead and others lag behind, losing phase coherence.'},
        {ar:'بعد زمن t تُطبق نبضة RF بزاوية 180° (وهي ببساطة نبضة بضعف مدة نبضة 90°)، فتنقلب جميع المتجهات 180°، ويصبح المتأخرون في المقدمة والمتقدمون في الخلف. وبعد زمن مماثل t يلحق المتأخرون الأصليون بالباقين فيتفق الجميع في الطور من جديد وتبلغ Mxy ذروتها؛ هذه الذروة هي الصدى (echo) وهي الإشارة التي تُقاس فعليًا.',
         en:'After a time t, a 180° RF pulse is applied (simply a pulse of twice the duration of the 90° pulse), rotating all vectors through 180° so the laggers become leaders and vice versa. After a further equal time t, the vectors come back into phase and Mxy peaks again; this peak is the echo, and it is the signal actually measured.'}
      ],
      nums:[
        {v:'TE/2', ar:'توقيت نبضة 180° بعد نبضة 90°', en:'Timing of the 180° pulse after the 90° pulse'},
        {v:'TE = 2t', ar:'زمن الصدى: يظهر الصدى عند ضعف زمن نبضة 180°', en:'Echo time: the echo forms at twice the 180° pulse timing'}
      ]},
    { h:{ar:'لماذا يلغي التسلسل تأثير T2*؟', en:'Why the sequence cancels T2* effects'},
      paras:[
        {ar:'فقدان اتفاق الطور الناتج عن عدم تجانس المجال الساكن ثابت الاتجاه والمقدار، فعندما تقلب نبضة 180° ترتيب المتجهات تنعكس عملية فقدان الطور على نفسها ويلغي أثرُ عدم التجانس نفسه بنفسه عند لحظة الصدى. أما الاضمحلال الناتج عن تفاعلات Spin-Spin العشوائية داخل النسيج فلا يمكن عكسه، لذا يكون الانخفاض المتبقي في إشارة الصدى راجعًا إلى تأثير T2 الحقيقي للنسيج مع تقليل أثر عدم تجانس المجال إلى أدنى حد.',
         en:'Dephasing caused by static field inhomogeneity is constant in direction and size, so when the 180° pulse reverses the order of the vectors, that dephasing unwinds itself and the inhomogeneity effect cancels at the echo. Decay from random spin-spin interactions within the tissue cannot be reversed, so the remaining fall in echo signal reflects true tissue T2, with inhomogeneity effects minimised.'}
      ]},
    { h:{ar:'التكرار: TR ودورة التسلسل', en:'Repetition: TR and the sequence cycle'},
      paras:[
        {ar:'بهذا تكتمل دورة واحدة من التسلسل، وتتكرر الدورة مئات المرات لبناء الصورة. ويسمى الزمن حتى بداية الدورة التالية زمن التكرار TR (time to repetition)، ويُقاس من نبضة 90° الأولى إلى نبضة 90° التالية.',
         en:'One cycle of the sequence is now complete, and the cycle is repeated hundreds of times to build the image. The time to the next cycle is the repetition time TR, measured from one 90° pulse to the next.'}
      ]},
    { h:{ar:'المزايا والعيوب', en:'Advantages and disadvantages'},
      paras:[
        {ar:'يوازن Spin Echo بين جودة إشارة عالية وترجيح T2 صادق من جهة، وبين زمن فحص طويل واستهلاك أعلى لقدرة RF من جهة أخرى، كما يبين الجدول التالي.',
         en:'Spin echo balances high signal quality and honest T2 weighting against long scan times and higher RF power consumption, as summarised below.'}
      ],
      table:{
        head:[{ar:'المزايا', en:'Advantages'},{ar:'العيوب', en:'Disadvantages'}],
        rows:[
          [{ar:'نسبة إشارة إلى ضجيج SNR عالية', en:'High signal-to-noise ratio'},{ar:'أزمنة فحص طويلة', en:'Long scan times'}],
          [{ar:'ترجيح T2 حقيقي', en:'True T2 weighting'},{ar:'يستهلك قدرة RF أعلى من تسلسلات Gradient Echo', en:'Uses more RF power than gradient echo sequences'}],
          [{ar:'يقلل تأثيرات القابلية المغناطيسية susceptibility', en:'Minimises susceptibility effects'},{ar:'', en:''}]
        ]
      }}
  ],
  quiz:[
    { q:{ar:'متى تُطبق نبضة 180° في تسلسل Spin Echo؟', en:'When is the 180° pulse applied in a spin echo sequence?'},
      opts:[{ar:'عند زمن TE كاملًا', en:'At the full TE'},{ar:'عند TE/2، أي منتصف الزمن بين نبضة 90° والصدى', en:'At TE/2, halfway between the 90° pulse and the echo'},{ar:'قبل نبضة 90°', en:'Before the 90° pulse'},{ar:'عند زمن TR', en:'At TR'}],
      a:1,
      why:{ar:'تُطبق نبضة 180° عند t = TE/2 فتعكس ترتيب المتجهات، وبعد زمن مماثل تتجمع الأطوار فيظهر الصدى عند TE = 2t.', en:'The 180° pulse is applied at t = TE/2 and reverses the vector order; after an equal interval the phases reconverge and the echo appears at TE = 2t.'}},
    { q:{ar:'ما الذي يزيله تسلسل Spin Echo من اضمحلال الإشارة؟', en:'What does the spin echo sequence remove from the signal decay?'},
      opts:[{ar:'تأثير T2 الحقيقي للنسيج', en:'The true tissue T2 effect'},{ar:'تأثير عدم تجانس المجال الساكن (مكوّن T2*) مع الإبقاء على T2 النسيجي', en:'The effect of static field inhomogeneity (the T2* component), keeping tissue T2'},{ar:'تأثير كثافة البروتون', en:'The proton density effect'},{ar:'تأثير استرخاء T1', en:'The T1 relaxation effect'}],
      a:1,
      why:{ar:'تعكس نبضة 180° فقدان الطور الناجم عن عدم تجانس المجال الثابت فيلغي نفسه، بينما يبقى اضمحلال Spin-Spin العشوائي، فتعكس إشارة الصدى T2 الحقيقي للنسيج.', en:'The 180° pulse reverses dephasing from static field inhomogeneity so it cancels itself, while random spin-spin decay remains, so the echo reflects true tissue T2.'}},
    { q:{ar:'ما أبرز عيب لتسلسل Spin Echo التقليدي؟', en:'What is the main disadvantage of the conventional spin echo sequence?'},
      opts:[{ar:'انخفاض SNR', en:'Low SNR'},{ar:'أزمنة فحص طويلة', en:'Long scan times'},{ar:'عدم القدرة على ترجيح T2', en:'Inability to produce T2 weighting'},{ar:'حساسية عالية لعدم تجانس المجال', en:'High sensitivity to field inhomogeneity'}],
      a:1,
      why:{ar:'رغم مزاياه من SNR عالية وترجيح T2 حقيقي وتقليل تأثيرات susceptibility، يعيب Spin Echo التقليدي طول زمن الفحص واستهلاكه قدرة RF أعلى من Gradient Echo.', en:'Despite high SNR, true T2 weighting and reduced susceptibility effects, conventional spin echo suffers from long scan times and higher RF power use than gradient echo.'}}
  ]
},
{
  slug:'spin-echo-sequences-detailed', chapter:'mr',
  title:{ar:'تسلسلات Spin Echo بالتفصيل: متعدد الشرائح والأصداء وTurbo', en:'Spin Echo Sequences in Detail: Multi-slice, Multi-echo, Turbo and HASTE'},
  intro:{ar:'يبني هذا الدرس على تسلسل Spin Echo الأساسي ويعرض صوره المتطورة: التسلسل متعدد الشرائح الذي يستغل زمن الانتظار، ومتعدد الأصداء الذي يلتقط صورتين بتباينين في فحص واحد، وتسلسل Turbo Spin Echo الذي يملأ عدة أسطر من فضاء k في دورة واحدة، وصولًا إلى HASTE الذي يملأ فضاء k كاملًا في دورة واحدة.',
         en:'This lesson builds on the basic spin echo and presents its developed forms: the multi-slice sequence that exploits dead time, the multi-echo sequence that captures two contrasts in one scan, turbo spin echo filling several k-space lines per cycle, and HASTE, which fills a whole k-space in a single cycle.'},
  sections:[
    { h:{ar:'نقطتا اختلاف عن الصورة الأولية', en:'Two refinements of the basic sequence'},
      paras:[
        {ar:'الإضافة الجوهرية في الصورة المفصلة هي نبضة 180° عند TE/2 التي تحافظ على الإشارة مدة أطول، لأن فقدان الطور فيها لا يخضع لاضمحلال T2* السريع كما في التسلسلات التي تفتقر إلى نبضة إعادة التجميع. والاختلاف الثاني يتعلق بتدرج ترميز التردد (frequency-encoding gradient): إذ يُطبق تدرج موجب قبل نبضة 180°، ولهذا نفس أثر تطبيق تدرج سالب الاتجاه بعد النبضة.',
         en:'The key addition in the detailed sequence is the 180° pulse at TE/2, which preserves the signal for longer because dephasing is no longer governed by the rapid T2* decay seen in sequences lacking a refocusing pulse. The second refinement concerns the frequency-encoding gradient: a positive gradient applied before the 180° pulse has the same effect as a negative frequency-encoding gradient applied after it.'}
      ]},
    { h:{ar:'التسلسل متعدد الشرائح Multi-slice', en:'The multi-slice sequence'},
      paras:[
        {ar:'يجب أن يكون TR طويلًا بما يكفي لاكتمال استرخاء T1 بحيث تتكون Mz كافية عند قلبها بالنبضة التالية، لكن زمن الصدى TE قصير جدًا مقارنة بـ TR، فيوجد في كل دورة زمن ميت طويل لا تتولد فيه إشارة. فلو صوّرنا 18 شريحة واحدة تلو الأخرى بزمن TR مقداره 540 ms ومصفوفة تتطلب 256 خطوة ترميز طور لكل شريحة، لبلغ زمن الفحص 540 × 256 × 18 ÷ 60,000 = 41.4 دقيقة.',
         en:'TR must be long enough for T1 relaxation to complete so that sufficient Mz exists when the next pulse flips it, yet TE is very short compared with TR, leaving long dead time in each cycle during which no signal is produced. Imaging 18 slices one after another with TR 540 ms and 256 phase-encoding steps per slice would take 540 × 256 × 18 / 60,000 = 41.4 minutes.'},
        {ar:'الحل هو استغلال الزمن الميت: أثناء انتظار الشريحة الأولى اكتمال TR نختار شريحة ثانية ونبدأ دورتها، ثم ثالثة وهكذا، ففي 540 ms يمكن مسح سطر واحد من 18 فضاء k مختلفًا. يصبح زمن الفحص 540 × 256 ÷ 60,000 = 2.3 دقيقة فقط، وتُستخدم هذه الطريقة في كل فحص تقريبًا لتقصير الأزمنة.',
         en:'The solution is to use the dead time: while the first slice completes its TR, a second slice is selected and its cycle started, then a third, and so on, so that within 540 ms one line of 18 different k-spaces is scanned. The scan time becomes 540 × 256 / 60,000 = 2.3 minutes only, and this technique is used in almost every scan to shorten times.'}
      ],
      nums:[
        {v:'41.4 min', ar:'زمن فحص 18 شريحة دون تعدد الشرائح (مثال محسوب)', en:'Scan time for 18 slices without multi-slice (worked example)'},
        {v:'2.3 min', ar:'الزمن نفسه مع التسلسل متعدد الشرائح', en:'The same scan time with multi-slice imaging'}
      ]},
    { h:{ar:'التسلسل متعدد الأصداء Multi-echo', en:'The multi-echo sequence'},
      paras:[
        {ar:'بدلًا من صدى واحد في الدورة، يمكن توليد أصداء متعددة بتطبيق نبضات 180° إضافية، فيُقاس صديان عند زمني TE مختلفين لنفس السطر من نفس فضاء k. فباختيار صدًى مبكر قصير TE نحصل على صورة مرجحة بكثافة البروتون PD، وبصدًى متأخر طويل TE نحصل على صورة مرجحة بـ T2، وكل ذلك في الزمن نفسه اللازم لصورة واحدة.',
         en:'Instead of a single echo per cycle, several echoes can be generated by applying additional 180° pulses, measuring two echoes at different TEs for the same row of the same k-space. An early echo with short TE gives a PD-weighted image and a late echo with long TE gives a T2-weighted image, both within the time of a single acquisition.'}
      ]},
    { h:{ar:'تسلسل Turbo Spin Echo', en:'Turbo spin echo (TSE)'},
      paras:[
        {ar:'يأخذ Turbo Spin Echo فكرة تعدد الأصداء إلى أقصى حد: تُكرر نبضات 180° مرات كثيرة داخل الدورة الواحدة فتتولد أصداء كثيرة، ويُسمى عددها طول قطار الأصداء (echo train length, ETL). وباستخدام تدرج ترميز طور GPE مختلف مع كل صدى تملأ الأصداء أسطرًا مختلفة من فضاء k، فيُختصر زمن الفحص بقسمة زمن Spin Echo العادي على ETL. وتجدر الإشارة إلى أن تدرج ترميز الطور يُعكس قبل نبضة 180° التالية لإعادة تجميع أطوار الأنوية.',
         en:'Turbo spin echo takes the multi-echo idea to its limit: many 180° pulses are repeated within one cycle, generating many echoes whose number is the echo train length (ETL). With a different phase-encoding gradient GPE for each echo, the echoes fill different lines of k-space, so the scan time equals the conventional spin echo time divided by the ETL. The phase-encoding gradient is reversed before the next 180° pulse to rephase the spins.'},
        {ar:'زمن الصدى المعتمد في TSE هو زمن الصدى الذي يكون عنده GPE صفرًا، ويسمى زمن الصدى الفعّال (effective TE, Teff). ومن صور TSE الخاصة التسلسل مزدوج الصدى: فبقطار أصداء طوله 14 مثلًا يمكن تخصيص الأصداء السبعة الأولى لصورة PD والسبعة الأخيرة لصورة T2 في فحص واحد.',
         en:'The quoted TE in TSE is the echo time at which the GPE is zero, called the effective TE (Teff). A special form is the double-echo TSE: with an ETL of 14, for example, the first seven echoes can fill a PD k-space and the last seven a T2 k-space in a single scan.'},
        {ar:'مزايا TSE سرعته الكبيرة التي تنفع في تصوير الأوعية بالرنين (MR angiography) حيث تلزم أزمنة فحص قصيرة جدًا، وقدرته على إنتاج صورتين مختلفتي التباين. أما عيوبه فأهمها اقتصاره عمليًا على الترجيح الثقيل بـ T2، واختلاط التباينات لأن كل صدى يملأ سطرًا من فضاء k يقع في زمن مختلف وبالتالي بتباين مختلف.',
         en:'TSE advantages include its great speed, valuable in MR angiography where very fast scans are needed, and the ability to create two images of different contrast. Its disadvantages are that it realistically achieves only heavily T2-weighted images, and that contrast is mixed because each echo filling a different k-space line occurs at a different time and therefore a different contrast.'}
      ],
      nums:[
        {v:'ETL', ar:'طول قطار الأصداء: عدد الأصداء في الدورة الواحدة، وزمن الفحص ينقسم عليه', en:'Echo train length: echoes per cycle; scan time is divided by it'},
        {v:'Teff', ar:'زمن الصدى الفعّال: زمن الصدى عند GPE صفر', en:'Effective TE: the echo time at which GPE is zero'}
      ]},
    { h:{ar:'تسلسل HASTE', en:'HASTE (fast advanced spin echo)'},
      paras:[
        {ar:'يخطو HASTE خطوة أبعد من TSE، إذ يملأ فضاء k بكامله خلال دورة واحدة (single shot)، بقطارات أصداء طويلة جدًا قد تتجاوز 200 صدى. وفي الواقع يكفي ملء ما يزيد قليلًا على نصف فضاء k (نحو 212 سطرًا مثلًا) ثم استكمال الباقي بتقنية نصف فورييه (half Fourier imaging) التي تستنتج الأسطر الناقصة.',
         en:'HASTE takes TSE one step further, filling an entire k-space within a single cycle (single shot) using very long echo trains that can exceed 200 echoes. In practice only just over half of k-space needs to be filled (about 212 rows, for example), with half Fourier imaging extrapolating the rest.'},
        {ar:'توضع الأصداء المتأخرة جدًا في مركز فضاء k، فيكون الترجيح ثقيلًا بـ T2 إلى درجة أن الصورة لا تُظهر عمليًا إلا الماء الحر، ولهذا يُستخدم هذا التسلسل في فحص القنوات الصفراوية والبنكرياسية MRCP.',
         en:'The very late echoes are placed in the centre of k-space, producing such heavy T2 weighting that the image effectively shows only free water. This is the sequence used for MRCP studies of the biliary and pancreatic ducts.'}
      ]}
  ],
  quiz:[
    { q:{ar:'ما فائدة التسلسل متعدد الشرائح Multi-slice؟', en:'What is the benefit of the multi-slice sequence?'},
      opts:[{ar:'زيادة شدة المجال أثناء الفحص', en:'Increasing field strength during the scan'},{ar:'استغلال الزمن الميت الطويل داخل TR لبدء دورات شرائح أخرى، فينخفض زمن الفحص كثيرًا', en:'Using the long dead time within TR to run cycles of other slices, greatly reducing scan time'},{ar:'إلغاء الحاجة إلى نبضة 180°', en:'Removing the need for a 180° pulse'},{ar:'رفع كثافة البروتون في الأنسجة', en:'Raising tissue proton density'}],
      a:1,
      why:{ar:'لأن TE قصير مقارنة بـ TR، تُستغل فترات الانتظار في تصوير شرائح أخرى بالتوازي، ففي المثال المحسوب انخفض الزمن من 41.4 دقيقة إلى 2.3 دقيقة.', en:'Because TE is short compared with TR, the waiting periods are used to image other slices in parallel; in the worked example the time fell from 41.4 minutes to 2.3 minutes.'}},
    { q:{ar:'ما المقصود بطول قطار الأصداء ETL في Turbo Spin Echo؟', en:'What is the echo train length (ETL) in turbo spin echo?'},
      opts:[{ar:'عدد الشرائح في الفحص', en:'The number of slices in the scan'},{ar:'عدد الأصداء المتولدة داخل دورة TR واحدة، وكل صدى يملأ سطرًا مختلفًا من فضاء k', en:'The number of echoes generated within one TR cycle, each filling a different k-space line'},{ar:'الزمن بين أول صدى وآخر صدى بالميللي ثانية', en:'The time in milliseconds between the first and last echo'},{ar:'عدد مرات تكرار التسلسل', en:'The number of sequence repetitions'}],
      a:1,
      why:{ar:'ETL هو عدد نبضات 180° والأصداء الناتجة عنها في الدورة الواحدة، وبما أن كل صدى يملأ سطرًا مختلفًا من فضاء k فإن زمن الفحص ينقسم على ETL.', en:'ETL is the number of 180° pulses and resulting echoes in a single cycle; since each echo fills a different k-space line, the scan time is divided by the ETL.'}},
    { q:{ar:'لماذا يصلح تسلسل HASTE لفحص MRCP؟', en:'Why is HASTE suitable for MRCP?'},
      opts:[{ar:'لأنه مرجح بـ T1 بقوة', en:'Because it is strongly T1 weighted'},{ar:'لأن أصداءه المتأخرة جدًا في مركز فضاء k تجعله ثقيل الترجيح بـ T2 فلا يظهر إلا الماء الحر في القنوات', en:'Because its very late echoes in the centre of k-space make it so heavily T2 weighted that only free water in the ducts is shown'},{ar:'لأنه لا يحتاج إلى نبضات RF', en:'Because it needs no RF pulses'},{ar:'لأنه الأعلى في SNR بين التسلسلات', en:'Because it has the highest SNR of all sequences'}],
      a:1,
      why:{ar:'يملأ HASTE فضاء k في دورة واحدة وتوضع الأصداء المتأخرة في مركزه، فيكون الترجيح ثقيلًا بـ T2 بحيث تبرز السوائل الساكنة كالصفراء في القنوات بينما تختفي الأنسجة الأخرى.', en:'HASTE fills k-space in one cycle with the latest echoes at its centre, giving such heavy T2 weighting that static fluid such as bile in the ducts stands out while other tissues vanish.'}}
  ]
},
{
  slug:'gradient-recalled-echo-sequence', chapter:'mr',
  title:{ar:'تسلسل صدى التدرج Gradient Echo', en:'Gradient (Recalled) Echo Sequence'},
  intro:{ar:'في تسلسل Gradient Echo لا توجد نبضة 180° لإعادة تجميع الأطوار، بل يقوم تدرج مغناطيسي معكوس بهذه المهمة: يُطبق التدرج فيشتت الأطوار ثم يُعكس اتجاهه فيعيد تجميعها مولّدًا صدى التدرج. النتيجة تسلسل سريع حساس لعدم تجانس المجال، بزاوية انقلاب متغيرة بدل 90° الثابتة.',
         en:'In the gradient echo sequence there is no 180° pulse to refocus the spins; instead a reversed magnetic gradient does the job — the gradient is applied to dephase the spins, then reversed to rephase them and form a gradient echo. The result is a fast sequence, sensitive to field inhomogeneity, using a variable flip angle instead of a fixed 90°.'},
  sections:[
    { h:{ar:'آلية تكوين صدى التدرج', en:'How the gradient echo is formed'},
      paras:[
        {ar:'بعد نبضة الإثارة تبدأ الأنوية بفقدان اتفاق الطور وفق T2* كما في أي تسلسل. لكن بدلًا من قلبها بنبضة 180°، يُستخدم تدرج ترميز التردد نفسه أداةً للتحكم في الطور: إذ يجعل التدرج الأنوية تدور بسرعات مختلفة بحسب مواضعها فيفقد الجمع اتفاقه بسرعة، ثم عند عكس اتجاه التدرج تنعكس حركة الأطوار فيعود الجميع إلى اتفاق الطور لحظةً واحدة يتكون عندها الصدى الذي يُقاس.',
         en:'After the excitation pulse the spins begin to dephase according to T2*, as in any sequence. Instead of flipping them with a 180° pulse, the frequency-encoding gradient itself is used to manipulate phase: the gradient makes spins precess at position-dependent rates so coherence is lost quickly, then reversing the gradient unwinds the phases until they momentarily realign, forming the echo that is measured.'},
        {ar:'وبما أن إعادة التجميع بالتدرج لا تلغي أثر عدم تجانس المجال الساكن ولا تأثيرات القابلية المغناطيسية للأنسجة، فإن اضمحلال الإشارة في هذا التسلسل يتبع T2* وليس T2 الحقيقي، ويكون التسلسل حساسًا جدًا لعدم تجانس المجال.',
         en:'Because gradient rephasing does not cancel the effects of static field inhomogeneity or tissue susceptibility, signal decay in this sequence follows T2* rather than true T2, and the sequence is highly sensitive to field inhomogeneity.'}
      ]},
    { h:{ar:'زاوية الانقلاب المتغيرة', en:'The variable flip angle'},
      paras:[
        {ar:'لا يلزم أن تكون نبضة الإثارة في Gradient Echo بزاوية 90°، بل يمكن استخدام أي زاوية انقلاب (flip angle). فإذا استُخدمت زاوية صغيرة قُلب جزء صغير فقط من Mz إلى المستوى المستعرض، فتكون الإشارة المستعرضة أصغر مما لو كانت الزاوية 90°، لكن في المقابل تبقى معظم المغنطة قريبة من الاتجاه الطولي فتستعيد الأنوية كامل Mz في زمن أقصر. وهذا يسمح بزمن TR قصير جدًا وتسلسلات سريعة.',
         en:'The excitation pulse in gradient echo does not have to be 90°; any flip angle can be used. A small flip angle tips only a small part of Mz into the transverse plane, so the transverse signal is smaller than with a 90° pulse, but most magnetisation stays near the longitudinal direction and the spins regain their full Mz much sooner. This permits very short TR values and fast sequences.'}
      ]},
    { h:{ar:'الترجيح باستخدام Gradient Echo', en:'Weighting with gradient echo sequences'},
      paras:[
        {ar:'يتحقق الترجيح في Gradient Echo بالتحكم المشترك في زاوية الانقلاب وTR وTE، لكن الترجيح الحقيقي بـ T2 مستحيل لعدم وجود نبضة 180° تلغي تأثير T2*، فأقصى ما يمكن هو ترجيح T2*.',
         en:'Weighting in gradient echo is achieved by jointly controlling flip angle, TR and TE, but true T2 weighting is impossible because there is no 180° pulse to cancel T2* effects; the most that can be achieved is T2* weighting.'}
      ],
      table:{
        head:[{ar:'الترجيح المطلوب', en:'Desired weighting'},{ar:'زاوية الانقلاب', en:'Flip angle'},{ar:'TE', en:'TE'},{ar:'TR', en:'TR'}],
        rows:[
          [{ar:'PD', en:'PD'},{ar:'صغيرة', en:'Small'},{ar:'قصير', en:'Short'},{ar:'طويل', en:'Long'}],
          [{ar:'T1', en:'T1'},{ar:'كبيرة', en:'Large'},{ar:'قصير', en:'Short'},{ar:'قصير', en:'Short'}],
          [{ar:'T2*', en:'T2*'},{ar:'صغيرة (لتقليل ترجيح T1)', en:'Small (to minimise T1 weighting)'},{ar:'طويل', en:'Long'},{ar:'قصير', en:'Short'}],
          [{ar:'T2 حقيقي', en:'True T2'},{ar:'غير ممكن: لا توجد نبضة 180° لإلغاء T2*', en:'Not achievable: no 180° pulse to cancel T2*'},{ar:'—', en:'—'},{ar:'—', en:'—'}]
        ]
      }},
    { h:{ar:'المقارنة مع Spin Echo', en:'Comparison with spin echo'},
      paras:[
        {ar:'تتلاقى أوجه الاختلاف الجوهرية بين التسلسلين في أربعة أبعاد: وسيلة إعادة تجميع الأطوار، وزاوية الانقلاب، والسرعة، وطبيعة الترجيح، كما في الجدول التالي.',
         en:'The essential differences between the two sequences fall under four headings: the rephasing method, the flip angle, speed, and the character of the weighting, as compared below.'}
      ],
      table:{
        head:[{ar:'وجه المقارنة', en:'Feature'},{ar:'Spin Echo', en:'Spin echo'},{ar:'Gradient Echo', en:'Gradient echo'}],
        rows:[
          [{ar:'وسيلة إعادة تجميع الأطوار', en:'Rephasing method'},{ar:'نبضة RF بزاوية 180°', en:'A 180° RF pulse'},{ar:'تدرج مغناطيسي معكوس الاتجاه', en:'A reversed magnetic gradient'}],
          [{ar:'زاوية الانقلاب', en:'Flip angle'},{ar:'90° ثابتة', en:'Fixed at 90°'},{ar:'متغيرة بحسب الحاجة', en:'Variable'}],
          [{ar:'سرعة التسلسل', en:'Speed'},{ar:'بطيء', en:'Slow'},{ar:'سريع', en:'Fast'}],
          [{ar:'طبيعة الترجيح', en:'Weighting character'},{ar:'ترجيح T2 حقيقي', en:'True T2 weighting'},{ar:'ترجيح T2* حساس لعدم تجانس المجال', en:'T2* weighting, sensitive to field inhomogeneity'}]
        ]
      }}
  ],
  quiz:[
    { q:{ar:'كيف يُعاد تجميع أطوار الأنوية في تسلسل Gradient Echo؟', en:'How are the spins rephased in a gradient echo sequence?'},
      opts:[{ar:'بنبضة RF بزاوية 180°', en:'With a 180° RF pulse'},{ar:'بعكس اتجاه تدرج مغناطيسي بعد استخدامه في تشتيت الأطوار', en:'By reversing a magnetic gradient after using it to dephase the spins'},{ar:'بإيقاف المجال الرئيسي B0 لحظيًا', en:'By briefly switching off B0'},{ar:'بزيادة زمن TR', en:'By lengthening TR'}],
      a:1,
      why:{ar:'لا توجد نبضة 180° في Gradient Echo؛ يُشتت التدرج الأطوار أولًا ثم يُعكس اتجاهه فيعيد تجميعها مكونًا الصدى، ولذلك يبقى التسلسل خاضعًا لاضمحلال T2*.', en:'There is no 180° pulse in gradient echo; the gradient first dephases the spins and is then reversed to rephase them into an echo, which is why the sequence remains governed by T2* decay.'}},
    { q:{ar:'لماذا لا يمكن تحقيق ترجيح T2 حقيقي بتسلسل Gradient Echo؟', en:'Why can true T2 weighting not be achieved with gradient echo?'},
      opts:[{ar:'لأن زاوية الانقلاب فيه صغيرة دائمًا', en:'Because its flip angle is always small'},{ar:'لأنه يفتقر إلى نبضة 180° التي تلغي تأثير عدم تجانس المجال (T2*)', en:'Because it lacks the 180° pulse that cancels field inhomogeneity (T2*) effects'},{ar:'لأن زمن TE فيه قصير دائمًا', en:'Because its TE is always short'},{ar:'لأنه لا يستخدم ملفات تدرج', en:'Because it uses no gradient coils'}],
      a:1,
      why:{ar:'إلغاء أثر عدم تجانس المجال الساكن يتطلب نبضة 180° كما في Spin Echo، وبدونها يبقى الاضمحلال T2*، فأقصى ترجيح ممكن هو T2*.', en:'Cancelling static field inhomogeneity requires a 180° pulse as in spin echo; without it, decay remains T2*, so T2* weighting is the maximum achievable.'}},
    { q:{ar:'ما أثر استخدام زاوية انقلاب صغيرة في Gradient Echo؟', en:'What is the effect of using a small flip angle in gradient echo?'},
      opts:[{ar:'إشارة مستعرضة أكبر واستعادة أبطأ لـ Mz', en:'A larger transverse signal and slower Mz recovery'},{ar:'إشارة مستعرضة أصغر لكن استعادة أسرع لـ Mz تسمح بزمن TR قصير وتسلسل سريع', en:'A smaller transverse signal but faster Mz recovery, allowing short TR and a fast sequence'},{ar:'إلغاء اضمحلال T2*', en:'Cancellation of T2* decay'},{ar:'زيادة زمن الفحص', en:'Longer scan time'}],
      a:1,
      why:{ar:'الزاوية الصغيرة تقلب جزءًا صغيرًا من Mz فتقل الإشارة، لكن الأنوية تبقى قريبة من الاتجاه الطولي فتستعيد Mz بسرعة، ما يتيح TR قصيرًا وفحصًا سريعًا.', en:'A small flip angle tips only a small fraction of Mz, reducing signal, but the spins stay close to the longitudinal direction and recover Mz quickly, permitting a short TR and fast imaging.'}}
  ]
},
{
  slug:'inversion-recovery-sequences', chapter:'mr',
  title:{ar:'تسلسلات استرداد الانعكاس Inversion Recovery', en:'Inversion Recovery Sequences'},
  intro:{ar:'تسلسلات Inversion Recovery صورة معدلة من Spin Echo تُستخدم لإعدام إشارة أنسجة بعينها — كالدهون في STIR والسوائل في FLAIR — وذلك بتقديم نبضة انقلاب 180° قبل بدء الدورة المعتادة، واختيار توقيت دقيق يجعل مغنطة النسيج المستهدف صفرًا لحظة الإثارة.',
         en:'Inversion recovery sequences are a variant of spin echo used to null the signal from specific tissues — fat in STIR and fluid in FLAIR — by placing an inverting 180° pulse before the usual cycle and timing the excitation to the moment the target tissue has zero magnetisation.'},
  sections:[
    { h:{ar:'مبدأ التسلسل', en:'Principle of the sequence'},
      paras:[
        {ar:'يبدأ التسلسل بنبضة RF بزاوية 180° تقلب المغنطة الطولية Mz إلى قيمة سالبة مساوية في المقدار. بعد إيقاف النبضة تبدأ Mz بالاستعادة وفق T1 الخاص بكل نسيج، فتصعد من القيمة السالبة مارّة بالصفر ثم موجبة حتى تعود إلى قيمتها الأصلية. ولكل نسيج لحظة خاصة يمر فيها بالصفر تبعًا لزمن T1 الخاص به.',
         en:'The sequence starts with a 180° RF pulse that inverts the longitudinal magnetisation Mz to an equal negative value. The pulse ends and Mz recovers according to each tissue T1, rising from negative through zero to its original positive value. Each tissue crosses zero at its own characteristic moment, set by its T1.'},
        {ar:'إذا طُبقت نبضة الإثارة 90° الخاصة بالدورة في اللحظة التي تكون فيها Mz لنسيج معين مساوية للصفر، فلن توجد مغنطة يمكن قلبها إلى المستوى المستعرض، فلا ينتج ذلك النسيج أي إشارة: لقد أُعدمت إشارته (nulled).',
         en:'If the 90° excitation pulse of the cycle is applied at the exact moment when the Mz of a chosen tissue passes through zero, there is no magnetisation to flip into the transverse plane, so that tissue produces no signal at all: its signal has been nulled.'}
      ]},
    { h:{ar:'زمن الانعكاس TI', en:'The inversion time TI'},
      paras:[
        {ar:'يُسمى الزمن من نبضة الانقلاب 180° الأولى إلى نبضة 90° اللاحقة زمن الانعكاس (time to inversion, TI). ويُضبط TI تبعًا للمادة المراد إعدام إشارتها: فالأنسجة قصيرة T1 تصل إلى الصفر مبكرًا فتحتاج TI قصيرًا، والأنسجة طويلة T1 تصل متأخرًا فتحتاج TI طويلًا. ورياضيًا يقع زمن الإعدام عند TI يساوي تقريبًا 0.69 × T1 الخاص بالنسيج المستهدف، أي T1 مضروبًا في ln 2.',
         en:'The time from the initial inverting 180° pulse to the subsequent 90° pulse is the inversion time (TI). TI is set according to the material whose signal is to be nulled: short-T1 tissues cross zero early and need a short TI, while long-T1 tissues cross late and need a long TI. Mathematically, the null point occurs at TI approximately equal to 0.69 × T1 of the target tissue, that is, T1 multiplied by ln 2.'}
      ],
      nums:[
        {v:'TI ≈ 0.69 × T1', ar:'علاقة زمن الإعدام بزمن استرخاء النسيج المستهدف', en:'Relation of the null time to the T1 of the target tissue'}
      ]},
    { h:{ar:'التطبيقان الشهيران: STIR وFLAIR', en:'The two famous applications: STIR and FLAIR'},
      paras:[
        {ar:'تسلسل STIR، أي استرداد الانعكاس بزمن انقلاب قصير (short tau inversion recovery)، يستخدم TI قصيرًا مضبوطًا على نقطة صفر الدهون، لأن الدهون قصيرة T1، فيُعدم إشارة الدهون وتبرز الآفات الغنية بالماء. وتبلغ قيمة TI النموذجية للدهون نحو 150 ms عند مجال 1.5T.',
         en:'STIR (short tau inversion recovery) uses a short TI matched to the null point of fat, because fat has a short T1, suppressing fat signal so that water-rich lesions stand out. A typical fat-nulling TI at 1.5T is about 150 ms.'},
        {ar:'تسلسل FLAIR، أي استرداد الانعكاس المخفف للسوائل (fluid attenuated inversion recovery)، يستخدم TI طويلًا جدًا مضبوطًا على نقطة صفر السوائل الحرة كالسائل الدماغي الشوكي CSF، لأن T1 للماء الحر طويل جدًا، فتختفي إشارة CSF وتبرز الآفات المجاورة للبطينات وحولها. وتبلغ قيمة TI النموذجية لإعدام CSF نحو 2000 ms أو أكثر عند 1.5T.',
         en:'FLAIR (fluid attenuated inversion recovery) uses a very long TI matched to the null point of free fluid such as CSF, because free water has a very long T1, removing CSF signal so that periventricular and juxtaventricular lesions become conspicuous. A typical CSF-nulling TI at 1.5T is about 2000 ms or more.'}
      ],
      nums:[
        {v:'~150 ms', ar:'TI النموذجي لإعدام الدهون في STIR عند 1.5T', en:'Typical TI for fat nulling in STIR at 1.5T'},
        {v:'~2000 ms+', ar:'TI النموذجي لإعدام CSF في FLAIR عند 1.5T', en:'Typical TI for CSF nulling in FLAIR at 1.5T'}
      ]},
    { h:{ar:'علاقته بـ Spin Echo', en:'Relation to spin echo'},
      paras:[
        {ar:'بعد نبضة 90° تجري دورة القياس نفسها كما في Spin Echo بنبضة 180° عند TE/2 لتكوين الصدى، فتسلسل Inversion Recovery ليس تسلسلًا مستقلًا تمامًا بل مقدمة انقلاب تُضاف إلى هيكل Spin Echo بهدف واحد: اختيار نسيج وإسكات إشارته قبل بدء التصوير.',
         en:'After the 90° pulse, the measurement cycle proceeds exactly as in spin echo, with a 180° pulse at TE/2 forming the echo. Inversion recovery is therefore not a wholly separate sequence but an inverting preparation added to the spin echo framework with a single aim: silencing one chosen tissue before imaging begins.'}
      ]}
  ],
  quiz:[
    { q:{ar:'ما الغرض من نبضة 180° الأولى في تسلسل Inversion Recovery؟', en:'What is the purpose of the initial 180° pulse in inversion recovery?'},
      opts:[{ar:'إعادة تجميع أطوار الأنوية لتكوين الصدى', en:'Refocusing the spins to form the echo'},{ar:'قلب Mz إلى قيمة سالبة بحيث تمر بالصفر أثناء استعادتها، فيمكن توقيت الإثارة عند لحظة الصفر لإعدام إشارة نسيج معين', en:'Inverting Mz to a negative value so it passes through zero during recovery, letting excitation be timed to that null point to silence one tissue'},{ar:'ترميز مواضع الإشارة في الشريحة', en:'Encoding signal position within the slice'},{ar:'زيادة كثافة البروتون', en:'Increasing proton density'}],
      a:1,
      why:{ar:'نبضة الانقلاب تجعل Mz سالبة، وأثناء استعادتها وفق T1 تمر بكل نسيج لحظة صفر خاصة به؛ تطبيق 90° عند تلك اللحظة يعني عدم وجود مغنطة للقلب فتُعدم إشارة ذلك النسيج.', en:'The inverting pulse makes Mz negative; during its T1 recovery each tissue passes through zero at its own moment, and applying the 90° pulse then means there is no magnetisation to flip, so that tissue gives no signal.'}},
    { q:{ar:'ما المقصود بزمن الانعكاس TI؟', en:'What is the inversion time TI?'},
      opts:[{ar:'الزمن بين نبضة 90° والصدى', en:'The time between the 90° pulse and the echo'},{ar:'الزمن بين نبضتي 90° متتاليتين', en:'The time between two successive 90° pulses'},{ar:'الزمن من نبضة الانقلاب 180° الأولى إلى نبضة 90° اللاحقة', en:'The time from the initial inverting 180° pulse to the subsequent 90° pulse'},{ar:'الزمن اللازم لاستعادة Mz كاملة', en:'The time for complete Mz recovery'}],
      a:2,
      why:{ar:'TI هو الفاصل بين نبضة الانقلاب الابتدائية ونبضة الإثارة 90°، ويُضبط قيمته على زمن وصول النسيج المستهدف إلى نقطة الصفر، تقريبًا 0.69 × T1 لذلك النسيج.', en:'TI is the interval between the initial inverting pulse and the 90° excitation pulse, set to the moment the target tissue reaches its null point, approximately 0.69 × T1 of that tissue.'}},
    { q:{ar:'أي تسلسل يُستخدم لإعدام إشارة السائل الدماغي الشوكي CSF؟', en:'Which sequence is used to null the signal from CSF?'},
      opts:[{ar:'STIR', en:'STIR'},{ar:'FLAIR', en:'FLAIR'},{ar:'HASTE', en:'HASTE'},{ar:'Gradient Echo', en:'Gradient echo'}],
      a:1,
      why:{ar:'FLAIR يستخدم TI طويلًا جدًا يناسب T1 الطويل للماء الحر فيُعدم إشارة CSF، بينما STIR يستخدم TI قصيرًا لإعدام الدهون قصيرة T1.', en:'FLAIR uses a very long TI matched to the long T1 of free water, nulling CSF, whereas STIR uses a short TI to null short-T1 fat.'}}
  ]
},
{
  slug:'sequences', chapter:'mr',
  title:{ar:'بنية التسلسل النبضي خطوة بخطوة', en:'Anatomy of a Pulse Sequence, Step by Step'},
  intro:{ar:'يجمع مخطط التسلسل النبضي كل العناصر التي درسناها في تسلسل زمني واحد: نبضة RF للإثارة، وتدرج اختيار الشريحة، وتدرج ترميز الطور، وتدرج ترميز التردد الذي تُقرأ خلاله الإشارة، ثم تكرار الدورة كلها بعد زمن TR. فهم ترتيب هذه الخطوات وشروط مساحات فصوص التدرجات أساس قراءة أي مخطط تسلسل.',
         en:'A pulse sequence diagram assembles everything studied so far into one timeline: an RF pulse for excitation, the slice-select gradient, the phase-encoding gradient, the frequency-encoding gradient during which the signal is read, then repetition of the whole cycle after TR. Understanding the order of these steps and the gradient lobe area rules is the key to reading any sequence diagram.'},
  sections:[
    { h:{ar:'الخطوة 1: نبضة التردد الراديوي', en:'Step 1: the RF pulse'},
      paras:[
        {ar:'يبدأ التسلسل بنبضة RF تقلب المغنطة إلى المستوى المستعرض. وتُمثَّل النبضة في مخططات التسلسلات عادة بشكل يشبه دالة sinc، وهو شكل غلاف النبضة الذي يعطي مقطع إثارة حاد الحواف للشريحة المختارة.',
         en:'The sequence begins with an RF pulse that flips the magnetisation into the transverse plane. In sequence diagrams the pulse is usually drawn with a sinc-like shape, representing the pulse envelope that produces a sharply defined excitation profile for the selected slice.'}
      ]},
    { h:{ar:'الخطوة 2: تدرج اختيار الشريحة GSS', en:'Step 2: slice selection (GSS)'},
      paras:[
        {ar:'لكي تثير النبضة بروتونات شريحة بعينها يجب تطبيقها في الوقت نفسه مع تدرج اختيار الشريحة (slice-select gradient, GSS)، فلا تستجيب إلا الأنوية الواقعة ضمن الشريحة التي يطابق ترددها تردد النبضة. ويلاحظ في المخطط أن للفص السالب من التدرج مساحة تساوي نصف مساحة الفص الموجب، وذلك شرط للحفاظ على اتفاق أطوار الأنوية داخل الشريحة بعد انتهاء التدرج، لأن التدرج نفسه يشتت الأطوار أثناء تطبيقه.',
         en:'For the pulse to excite the protons of one particular slice, it must be applied at the same time as the slice-select gradient (GSS), so that only nuclei within the slice whose frequency matches the pulse respond. On the diagram, the negative lobe of the gradient has an area equal to half the area of the positive lobe; this is required to restore phase coherence of the spins within the slice after the gradient ends, because the gradient itself dephases the spins while it is on.'}
      ],
      nums:[
        {v:'½', ar:'مساحة الفص السالب من GSS تساوي نصف مساحة الفص الموجب', en:'Area of the negative GSS lobe relative to the positive lobe'}
      ]},
    { h:{ar:'الخطوة 3: تدرج ترميز الطور GPE', en:'Step 3: phase encoding (GPE)'},
      paras:[
        {ar:'يُطبق تدرج ترميز الطور (phase-encoding gradient, GPE) مباشرة بعد انتهاء الإثارة واختيار الشريحة. ويجب تكرار الدورة بعدد يساوي عدد أسطر فضاء k، وفي كل تكرار يُستخدم تدرج ترميز طور بقوة مختلفة فيُملأ سطر مختلف من فضاء k. ويظهر هذا في المخطط على شكل درجات سلم متصاعدة تمثل القوى المختلفة للتدرج؛ ورغم أن المخططات التبسيطية ترسم 5 درجات فقط، فإن العدد الحقيقي يكون عادة 256 أو 512 درجة تبعًا لحجم المصفوفة.',
         en:'The phase-encoding gradient (GPE) is applied straight after excitation and slice selection are complete. The cycle must be repeated as many times as there are rows in k-space, and on each repetition a different strength of phase-encoding gradient is used, filling a different k-space row. On the diagram this appears as a staircase of steps representing the different gradient strengths; simplified diagrams show only 5 steps, whereas in reality there are typically 256 or 512, depending on the matrix size.'}
      ],
      nums:[
        {v:'256 or 512', ar:'عدد خطوات ترميز الطور النموذجي تبعًا للمصفوفة', en:'Typical number of phase-encoding steps, by matrix size'}
      ]},
    { h:{ar:'الخطوة 4: تدرج ترميز التردد GFE والقراءة', en:'Step 4: frequency encoding (GFE) and readout'},
      paras:[
        {ar:'بعد كل خطوة ترميز طور يُطبق تدرج ترميز التردد (frequency-encoding gradient, GFE)، وأثناء تطبيقه تُقرأ الإشارة فعلًا، ولذلك يسمى أيضًا تدرج القراءة (readout gradient). وقبل فص القراءة يُطبق فص سالب مشتت للأطوار في الاتجاه المعاكس، مساحته نصف مساحة فص إعادة التجميع، بحيث يبلغ اتفاق الطور ذروته عند المركز الدقيق لفترة ترميز التردد فتكون الإشارة المقروءة أعظم ما يمكن ويتكون الصدى في منتصف فترة القراءة.',
         en:'After each phase-encoding step, the frequency-encoding gradient (GFE) is applied, and it is during this gradient that the signal is actually read, hence its alternative name, the readout gradient. Before the readout lobe, an opposite dephasing lobe is applied whose area is half that of the rephasing lobe, ensuring that phase coherence is maximal at the exact centre of the frequency-encoding period, so the acquired signal is at its largest and the echo forms at the middle of the readout.'}
      ],
      nums:[
        {v:'½', ar:'مساحة فص التشتيت السالب تساوي نصف مساحة فص القراءة في GFE', en:'Area of the negative dephasing lobe relative to the GFE readout lobe'}
      ]},
    { h:{ar:'الخطوة 5: تكرار التسلسل', en:'Step 5: sequence repetition'},
      paras:[
        {ar:'بعد انقضاء زمن TR يتكرر التسلسل كاملًا بنبضة RF جديدة وخطوة ترميز طور جديدة. ويتحدد عدد مرات التكرار بدقة الصورة المطلوبة وعدد خطوات ترميز الطور اللازمة لملء فضاء k، فكلما زادت الخطوات طال الفحص وتحسنت الدقة في اتجاه الطور. ويرتبط زمن الفحص الكلي أيضًا بعدد مرات التكرار الإضافية للإشارة (NEX) المستخدمة لتحسين نسبة الإشارة إلى الضجيج.',
         en:'After TR has elapsed, the whole sequence repeats with a new RF pulse and a new phase-encoding step. The number of repetitions is set by the required image resolution and the number of phase-encoding steps needed to fill k-space: more steps lengthen the scan but improve resolution in the phase direction. Total scan time also depends on the number of signal averages (NEX) used to improve the signal-to-noise ratio.'}
      ]}
  ],
  quiz:[
    { q:{ar:'أثناء أي تدرج تُقرأ إشارة الرنين في التسلسل؟', en:'During which gradient is the MR signal read out?'},
      opts:[{ar:'تدرج اختيار الشريحة GSS', en:'The slice-select gradient GSS'},{ar:'تدرج ترميز الطور GPE', en:'The phase-encoding gradient GPE'},{ar:'تدرج ترميز التردد GFE، ويسمى تدرج القراءة', en:'The frequency-encoding gradient GFE, the readout gradient'},{ar:'تدرج التحسين Shim', en:'The shim gradient'}],
      a:2,
      why:{ar:'يُطبق تدرج ترميز التردد بعد كل خطوة ترميز طور، وأثناءه تُقرأ الإشارة ويتكون الصدى في منتصف فترة القراءة، ولذلك يسمى readout gradient.', en:'The frequency-encoding gradient is applied after each phase-encoding step and the signal is read during it, with the echo forming at the centre of the readout — hence the name readout gradient.'}},
    { q:{ar:'لماذا تكون مساحة الفص السالب في تدرج اختيار الشريحة نصف مساحة الفص الموجب؟', en:'Why is the negative lobe of the slice-select gradient half the area of the positive lobe?'},
      opts:[{ar:'لتقليل استهلاك قدرة الجهاز', en:'To reduce power consumption'},{ar:'لتعويض تشتت الأطوار الذي يحدثه التدرج أثناء الإثارة، فيُستعاد اتفاق الطور داخل الشريحة', en:'To compensate for the dephasing caused by the gradient during excitation, restoring phase coherence within the slice'},{ar:'لزيادة سماكة الشريحة', en:'To increase slice thickness'},{ar:'لإلغاء ضجيج الجهاز', en:'To cancel scanner noise'}],
      a:1,
      why:{ar:'يشتت تدرج اختيار الشريحة أطوار الأنوية أثناء تطبيقه، والفص السالب بنصف المساحة يعيد تجميع نصف التشتت المتراكم بحيث تستعيد الأنوية داخل الشريحة اتفاق طورها بعد انتهاء التدرج.', en:'The slice-select gradient dephases the spins while it is applied; a negative lobe of half the area rewinds that dephasing so the spins within the slice regain phase coherence once the gradient ends.'}},
    { q:{ar:'على ماذا يعتمد عدد مرات تكرار دورة التسلسل؟', en:'What determines how many times the sequence cycle is repeated?'},
      opts:[{ar:'على عدد الأسطر المطلوب ملؤها في فضاء k، أي عدد خطوات ترميز الطور', en:'On the number of k-space rows to be filled, i.e. the number of phase-encoding steps'},{ar:'على وزن المريض', en:'On the weight of the patient'},{ar:'على درجة حرارة الهيليوم', en:'On the helium temperature'},{ar:'على نوع ملف الاستقبال فقط', en:'Only on the receiver coil type'}],
      a:0,
      why:{ar:'في كل تكرار يُستخدم تدرج ترميز طور بقوة مختلفة لملء سطر جديد من فضاء k، فيساوي عدد التكرارات عدد خطوات ترميز الطور (عادة 256 أو 512) مضافًا إليه أثر عدد الشرائح وNEX في الزمن الكلي.', en:'Each repetition uses a different phase-encoding gradient strength to fill a new row of k-space, so the number of repetitions equals the number of phase-encoding steps (typically 256 or 512), with slice count and NEX affecting total time.'}}
  ]
},
{
  slug:'slice-selection', chapter:'mr',
  title:{ar:'اختيار الشريحة', en:'Slice Selection'},
  intro:{ar:'أول خطوات تحديد موضع الإشارة في الرنين هو اختيار الشريحة: تحديد أي مستوى من الجسم ستصدر عنه الإشارة. يتم ذلك بتطبيق تدرج مغناطيسي يجعل تردد لارمور دالة في الموضع، ثم إطلاق نبضة RF بتردد لا يثير إلا أنوية الشريحة المطلوبة، وتتحكم عوامل مثل عرض نطاق النبضة وقوة التدرج في سماكة الشريحة.',
         en:'The first step in localising the MR signal is slice selection: deciding which plane of the body will contribute signal. A magnetic field gradient makes the Larmor frequency a function of position, and an RF pulse is then played whose frequency excites only the nuclei of the chosen slice; factors such as pulse bandwidth and gradient strength control the slice thickness.'},
  sections:[
    { h:{ar:'الخطوة 1: تطبيق التدرج', en:'Step 1: applying the gradient'},
      paras:[
        {ar:'يُطبق تدرج مجال مغناطيسي على المحور Z متراكبًا فوق المجال الرئيسي المنتظم. ووفق معادلة لارمور يعتمد تردد البدارية على شدة المجال التي تراها النواة، فيصبح للأنوية على امتداد المحور Z ترددات مختلفة: كل موضع له تردد لارمور خاص به، وهذا هو مفتاح اختيار الشريحة.',
         en:'A magnetic field gradient is applied along the Z axis, superimposed on the uniform background field. By the Larmor equation, precession frequency depends on the field strength experienced by the nucleus, so nuclei along the Z axis now have different frequencies: every position has its own Larmor frequency, and this is the key to slice selection.'}
      ]},
    { h:{ar:'الخطوة 2: اختيار الشريحة بنبضة RF', en:'Step 2: selecting the slice with the RF pulse'},
      paras:[
        {ar:'تُطبق بعد ذلك نبضة RF لقلب مغنطة الأنوية إلى المستوى المستعرض. ولأن القلب لا يحدث إلا عند الرنين، أي عندما يساوي تردد النبضة تردد لارمور للأنوية، فإن ضبط تردد النبضة على تردد موضع معين من المحور لا يثير إلا أنوية الشريحة الواقعة عند ذلك الموضع، فتصدر وحدها الإشارة. وبتغيير التردد المركزي للنبضة تنتقل الشريحة المختارة صعودًا ونزولًا على امتداد المحور Z، ما يقابل شرائح محورية متتابعة من جسم المريض.',
         en:'An RF pulse is then applied to flip the magnetisation of the nuclei into the transverse plane. Because flipping occurs only at resonance, when the pulse frequency equals the Larmor frequency of the nuclei, tuning the pulse to the frequency of one position along the axis excites only the nuclei in the slice at that position, and they alone return a signal. Changing the centre frequency of the pulse moves the selected slice up and down the Z axis, corresponding to successive axial slices of the patient.'}
      ]},
    { h:{ar:'الخطوة 3: إعادة ضبط الأطوار', en:'Step 3: resetting the phases'},
      paras:[
        {ar:'أثناء تطبيق التدرج تدور الأنوية بسرعات مختلفة بحسب تردداتها الموضعية، فتبدأ أطوارها بالتباعد داخل الشريحة. قبل الانتقال إلى الشريحة التالية يجب إعادة ضبط هذه الأطوار، ويتم ذلك بعكس اتجاه التدرج مؤقتًا (تدرج إعادة اللف rewinder) فينعكس تباعد الأطوار وتتجمع الأنوية متفقة الطور من جديد.',
         en:'While the gradient is applied, nuclei precess at their position-dependent rates and their phases begin to spread within the slice. Before the next slice is selected, these phases must be reset; this is done by briefly reversing the gradient (a rewinder gradient), which unwinds the phase spread and brings the nuclei back into phase.'}
      ]},
    { h:{ar:'العوامل المؤثرة في سماكة الشريحة وموضعها', en:'Factors affecting slice thickness and position'},
      paras:[
        {ar:'لأن النبضة العملية ليست أحادية التردد بل حزمة من الترددات، فإن سماكة الشريحة هي مدى المواضع التي تقع تردداتها ضمن هذه الحزمة. ومن هنا تحكم علاقتان متقابلتان في السماكة: فزيادة عرض نطاق النبضة تعني مدى ترددات أوسع ومن ثم شريحة أسمك، بينما زيادة قوة التدرج تجعل التردد يتغير بسرعة أكبر عبر المسافة فيقابل نفس عرض النطاق مدى مواضع أضيق ومن ثم شريحة أرقّ. أما موضع الشريحة فيتحدد بالتردد المركزي للنبضة وحده.',
         en:'Because a real pulse is not a single frequency but a band of frequencies, slice thickness is the range of positions whose frequencies fall within that band. Two opposing relationships govern thickness: a larger pulse bandwidth spans a wider frequency range and therefore a thicker slice, while a stronger gradient makes frequency change more rapidly with distance, so the same bandwidth covers a narrower range of positions and a thinner slice. Slice position is set by the centre frequency of the pulse alone.'}
      ],
      table:{
        head:[{ar:'العامل', en:'Factor'},{ar:'عند زيادته', en:'When increased'},{ar:'الأثر على الشريحة', en:'Effect on the slice'}],
        rows:[
          [{ar:'عرض نطاق نبضة RF', en:'RF pulse bandwidth'},{ar:'مدى أوسع من الترددات', en:'A wider range of frequencies'},{ar:'شريحة أسمك', en:'Thicker slice'}],
          [{ar:'قوة التدرج', en:'Gradient strength'},{ar:'ميل أشد للمجال عبر الموضع', en:'A steeper field slope across position'},{ar:'شريحة أرقّ', en:'Thinner slice'}],
          [{ar:'التردد المركزي لنبضة RF', en:'RF pulse centre frequency'},{ar:'إزاحة التردد المختار', en:'Shifting the selected frequency'},{ar:'ينتقل موضع الشريحة على المحور دون تغير سماكتها', en:'Slice position moves along the axis, thickness unchanged'}]
        ]
      }}
  ],
  quiz:[
    { q:{ar:'ما أثر زيادة قوة تدرج اختيار الشريحة على سماكة الشريحة؟', en:'What happens to slice thickness when the slice-select gradient strength is increased?'},
      opts:[{ar:'تزداد السماكة', en:'The slice becomes thicker'},{ar:'تقل السماكة فتصبح الشريحة أرقّ', en:'The slice becomes thinner'},{ar:'لا تتأثر السماكة إطلاقًا', en:'Thickness is completely unaffected'},{ar:'تنتقل الشريحة إلى طرف المحور', en:'The slice moves to the end of the axis'}],
      a:1,
      why:{ar:'التدرج الأقوى يجعل تردد لارمور يتغير بسرعة أكبر عبر المسافة، فيقابل عرض نطاق النبضة نفسه مدى مواضع أضيق، أي شريحة أرقّ.', en:'A stronger gradient makes the Larmor frequency change more rapidly with distance, so the same pulse bandwidth matches a narrower range of positions — a thinner slice.'}},
    { q:{ar:'كيف يُغيَّر موضع الشريحة المختارة على امتداد المحور Z؟', en:'How is the position of the selected slice along the Z axis changed?'},
      opts:[{ar:'بتغيير قوة التدرج', en:'By changing the gradient strength'},{ar:'بتغيير التردد المركزي لنبضة RF ليطابق تردد لارمور للموضع الجديد', en:'By changing the centre frequency of the RF pulse to match the Larmor frequency of the new position'},{ar:'بتغيير زمن TR', en:'By changing TR'},{ar:'بتغيير زاوية الانقلاب', en:'By changing the flip angle'}],
      a:1,
      why:{ar:'التدرج يجعل لكل موضع تردد لارمور خاصًا به، فاختيار تردد نبضة مختلف يثير الشريحة الواقعة عند الموضع صاحب ذلك التردد، دون تغيير السماكة.', en:'The gradient gives every position its own Larmor frequency, so choosing a different pulse frequency excites the slice at the position owning that frequency, without altering thickness.'}},
    { q:{ar:'لماذا يُطبق تدرج معكوس الاتجاه بعد اختيار الشريحة؟', en:'Why is a reversed gradient applied after slice selection?'},
      opts:[{ar:'لاختيار شريحة ثانية فورًا', en:'To select a second slice immediately'},{ar:'لإعادة تجميع أطوار الأنوية التي تباعدت بسبب اختلاف تردداتها أثناء التدرج', en:'To rephase the nuclei whose phases spread because of their different frequencies during the gradient'},{ar:'لزيادة شدة المجال B0', en:'To increase B0'},{ar:'لإطفاء إشارة الشريحة', en:'To switch off the slice signal'}],
      a:1,
      why:{ar:'أثناء التدرج تدور الأنوية بسرعات موضعية مختلفة فتتباعد أطوارها؛ عكس التدرج مؤقتًا يعكس اتجاه التباعد فتستعيد الأنوية اتفاق الطور قبل الخطوات التالية.', en:'During the gradient, nuclei precess at position-dependent rates and their phases spread; briefly reversing the gradient unwinds that spread and restores phase coherence before the next steps.'}}
  ]
},
{
  slug:'spatial-encoding', chapter:'mr',
  title:{ar:'الترميز المكاني', en:'Spatial Encoding'},
  intro:{ar:'في الأشعة السينية والتصوير المقطعي CT يتحدد موضع الإشارة هندسيًا من مسار الشعاع وموضع ارتطامه بالمستقبل، أما في الرنين فالإشارة قادمة من الجسم كله دفعة واحدة ويجب فك شيفرتها. الترميز المكاني هو الحل: استخدام التدرجات المغناطيسية لجعل الأنوية تحمل بصمة تردد وطور تدل على موضعها ثلاثي الأبعاد.',
         en:'In radiography and CT, signal position is fixed geometrically by the beam path and where it strikes the receptor. In MRI the signal arrives from the whole body at once and must be decoded. Spatial encoding is the solution: using magnetic field gradients so that nuclei carry a frequency and phase signature identifying their three-dimensional position.'},
  sections:[
    { h:{ar:'لماذا يحتاج الرنين إلى الترميز المكاني؟', en:'Why MRI needs spatial encoding'},
      paras:[
        {ar:'في التصوير بالأشعة والمقطعي يكون تحديد موضع الإشارة بسيطًا، لأن حزمة الأشعة تعبر المادة وموضع وصولها إلى المستقبل هو نفسه الموضع الفيزيائي لما مرت به. أما في الرنين فالأمر أعقد بكثير: فالإشارة المستقبلة خليط من إشارات كل الأنوية المثارة، ولا سبيل لمعرفة مصدر كل جزء منها إلا بمعالجة الخصائص المغناطيسية للأنوية بطريقة يمكن التنبؤ بها.',
         en:'In radiography and CT, localising the signal is simple because the X-ray beam passes through the material and where it reaches the receptor is the physical location of what it traversed. In MRI it is far more complicated: the received signal is a mixture from all excited nuclei, and the origin of each part can only be known by manipulating the magnetic properties of the nuclei in a predictable way.'},
        {ar:'الفكرة المحورية هي التدرجات (gradients): مجالات صغيرة متغيرة خطيًا تضيف إلى المجال الرئيسي بحيث تصبح شدة المجال، ومن ثم تردد البدارية وطورها، دالة معروفة في الموضع. تعود الإشارة بعد ذلك حاملة ترددًا وطورًا محددين فيمكن إسنادها إلى موضعها الصحيح، وتكون سعة الإشارة العائدة هي ما يحدد سطوع البكسل في الصورة.',
         en:'The key concept is the use of gradients: small, linearly varying fields added to the main field so that field strength, and with it precession frequency and phase, become a known function of position. The signal then returns with a particular frequency and phase and can be slotted into its correct location; the amplitude of the returned signal determines the brightness of the pixel.'}
      ]},
    { h:{ar:'الخطوات الثلاث لتحديد الموضع', en:'The three steps of localisation'},
      paras:[
        {ar:'يُحدَّد موضع أي إشارة في الفضاء ثلاثي الأبعاد بثلاث خطوات متتابعة، لكل خطوة تدرجها ومحورها: أولًا اختيار الشريحة على المحور Z بتدرج اختيار الشريحة مع نبضة RF، ثم تقسيم الشريحة على المحور X بترميز التردد أثناء القراءة، وأخيرًا تقسيم كل قطاع على المحور Y بترميز الطور قبل القراءة. باجتماع البصمات الثلاث يتحدد موضع كل عنصر حجمي voxel بدقة.',
         en:'The position of any signal in three-dimensional space is identified by three successive steps, each with its own gradient and axis: first the slice is selected along the Z axis by the slice-select gradient with the RF pulse; then the slice is divided along the X axis by frequency encoding during readout; finally each strip is divided along the Y axis by phase encoding before readout. The three signatures together pinpoint every voxel.'}
      ],
      table:{
        head:[{ar:'الخطوة', en:'Step'},{ar:'المحور', en:'Axis'},{ar:'الوسيلة', en:'Method'},{ar:'ما تحدده', en:'What it identifies'}],
        rows:[
          [{ar:'1', en:'1'},{ar:'Z', en:'Z'},{ar:'اختيار الشريحة: تدرج مع نبضة RF', en:'Slice selection: gradient with RF pulse'},{ar:'أي شريحة صدرت منها الإشارة', en:'Which slice the signal came from'}],
          [{ar:'2', en:'2'},{ar:'X', en:'X'},{ar:'ترميز التردد أثناء قراءة الإشارة', en:'Frequency encoding during signal readout'},{ar:'القطاع داخل الشريحة بحسب تردد الإشارة', en:'The strip within the slice, by signal frequency'}],
          [{ar:'3', en:'3'},{ar:'Y', en:'Y'},{ar:'ترميز الطور قبل القراءة', en:'Phase encoding before readout'},{ar:'الموضع داخل القطاع بحسب طور الإشارة', en:'The position within the strip, by signal phase'}]
        ]
      }},
    { h:{ar:'من البصمة إلى الصورة', en:'From signature to image'},
      paras:[
        {ar:'يستقبل الجهاز في كل دورة إشارة مركبة تحمل ترددات وأطوارًا من كل عناصر الشريحة معًا، وبفضل الترميز يمكن فصل مكوناتها وإسناد كل مكون إلى عنصره الحجمي، فتُبنى مصفوفة الصورة بكسلًا بكسلًا. ويمثل سطوع كل بكسل سعة الإشارة العائدة من موضعه، وهي بدورها محصلة كثافة البروتون وخصائص T1 وT2 لذلك الموضع بحسب ترجيح التسلسل المستخدم.',
         en:'In each cycle the scanner receives a composite signal carrying the frequencies and phases of every element of the slice together; thanks to the encoding, its components can be separated and assigned to their voxels, building the image matrix pixel by pixel. The brightness of each pixel represents the amplitude of the signal returned from its location, itself the product of proton density and the T1 and T2 properties of that location under the weighting of the sequence used.'}
      ]}
  ],
  quiz:[
    { q:{ar:'ما الترتيب الصحيح لخطوات تحديد موضع الإشارة في الرنين؟', en:'What is the correct order of the three localisation steps in MRI?'},
      opts:[{ar:'ترميز الطور، ثم ترميز التردد، ثم اختيار الشريحة', en:'Phase encoding, then frequency encoding, then slice selection'},{ar:'اختيار الشريحة على Z، ثم ترميز التردد على X، ثم ترميز الطور على Y', en:'Slice selection along Z, then frequency encoding along X, then phase encoding along Y'},{ar:'ترميز التردد، ثم اختيار الشريحة، ثم ترميز الطور', en:'Frequency encoding, then slice selection, then phase encoding'},{ar:'اختيار الشريحة، ثم ترميز الطور، ثم إيقاف التدرجات', en:'Slice selection, then phase encoding, then switching off the gradients'}],
      a:1,
      why:{ar:'يبدأ الترميز المكاني باختيار الشريحة على المحور Z، ثم يُقسم قطاعها بترميز التردد على المحور X، ثم يُحدَّد الموضع داخل القطاع بترميز الطور على المحور Y.', en:'Spatial encoding starts by selecting the slice along Z, then divides it by frequency encoding along X, and finally fixes position within the strip by phase encoding along Y.'}},
    { q:{ar:'ما الذي يحدد سطوع البكسل في صورة الرنين؟', en:'What determines the brightness of a pixel in an MR image?'},
      opts:[{ar:'سعة الإشارة العائدة من موضع ذلك البكسل', en:'The amplitude of the signal returned from the location of that pixel'},{ar:'قوة تدرج اختيار الشريحة', en:'The slice-select gradient strength'},{ar:'عدد خطوات ترميز الطور', en:'The number of phase-encoding steps'},{ar:'زمن تشغيل ملفات التدرج', en:'Gradient switching time'}],
      a:0,
      why:{ar:'يحدد الترميز موضع كل مكون من مكونات الإشارة، أما سطوع البكسل فيعكس سعة الإشارة الصادرة من ذلك الموضع، وهي محصلة كثافة البروتون وT1 وT2 بحسب الترجيح.', en:'Encoding assigns each signal component to its location, while pixel brightness reflects the amplitude of the signal from that location — the product of proton density and T1/T2 behaviour under the chosen weighting.'}},
    { q:{ar:'ما الفكرة المحورية التي يقوم عليها الترميز المكاني؟', en:'What is the key concept underlying spatial encoding?'},
      opts:[{ar:'تدوير المريض داخل الجهاز', en:'Rotating the patient inside the scanner'},{ar:'استخدام التدرجات المغناطيسية لجعل تردد البدارية وطورها دالتين معروفتين في الموضع', en:'Using magnetic field gradients to make precession frequency and phase known functions of position'},{ar:'زيادة شدة B0 تدريجيًا أثناء الفحص', en:'Gradually increasing B0 during the scan'},{ar:'تصوير الجسم شريحة فيزيائية تلو الأخرى', en:'Imaging the body one physical slice at a time'}],
      a:1,
      why:{ar:'بإضافة تدرجات خطية إلى المجال الرئيسي تصبح شدة المجال وتردد البدارية والطور دوال يمكن التنبؤ بها من الموضع، فتعود الإشارة حاملة بصمة تردد وطور تدل على مصدرها.', en:'Adding linear gradients to the main field makes field strength, precession frequency and phase predictable functions of position, so the returning signal carries a frequency and phase signature revealing its origin.'}}
  ]
}
];
