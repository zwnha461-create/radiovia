export const LESSONS = [
{
  slug:'frequency-encoding', chapter:'mr',
  title:{ar:'ترميز التردد', en:'Frequency Encoding'},
  intro:{ar:'بعد اختيار الشريحة على المحور z، نحتاج إلى معرفة موضع كل إشارة على المحور x داخل الشريحة. يتحقق ذلك بجعل تردد Larmor مميّزًا لكل موضع أثناء قراءة الإشارة، ولهذا يُسمّى تدرّج القراءة (read-out gradient) تدرّجَ ترميز التردد.',
        en:'Once a slice has been selected along z, the signal still has to be located along x within that slice. This is done by making the Larmor frequency unique to each position while the signal is being read out, which is why the read-out gradient is also called the frequency-encoding gradient.'},
  sections:[
    { h:{ar:'المشكلة قبل تطبيق التدرّج', en:'The problem before the gradient'},
      paras:[
        {ar:'تخيّل عمودًا واحدًا داخل الشريحة على امتداد المحور x: جميع الأنوية فيه لها السعة نفسها تقريبًا (أي شدة الإشارة) والتردد نفسه والطور نفسه. وعندما نجمع إشاراتها نحصل على موجة واحدة كبيرة بتردد واحد، لا تخبرنا أيّ جزء من العمود جاءت منه الإشارة، فتضيع المعلومة الموضعية تمامًا.',
         en:'Imagine one column running along x inside the slice: every nucleus in it shares roughly the same amplitude, the same frequency and the same phase. Adding their signals produces a single large wave at one frequency, which carries no information about where along the column the signal came from.'}
      ]},
    { h:{ar:'تدرّج القراءة وإعادة الطور', en:'The read-out gradient and rephasing'},
      paras:[
        {ar:'عند تشغيل تدرّج مغناطيسي على المحور x أثناء القراءة، يختلف المجال المغناطيسي الكلي من موضع إلى آخر، فتدور الأنوية عند كل موضع بتردد Larmor مختلف بحسب مكانها. وهكذا تصبح الإشارة المستقبلة خليطًا من ترددات متعددة، كل تردد منها يوقّع على موضعه على المحور.',
         en:'Switching on a magnetic gradient along x during readout makes the total field differ from point to point, so nuclei precess at a different Larmor frequency according to their position. The received signal is therefore a mixture of frequencies, each frequency labelling one position along the axis.'},
        {ar:'لكن التدرّج نفسه يشتّت الأطوار بسرعة فتتناقص الإشارة الكلية قبل أن نتمكّن من قياسها. لحلّ ذلك يُطبَّق أولًا تدرّج إزالة طور (dephase gradient) باتجاه معاكس، ثم يعمل تدرّج القراءة على إعادة تجميع الأطوار فتبلغ الإشارة ذروتها في منتصف فترة جمع البيانات، وهذا التجمّع هو صدى التدرّج (gradient echo).',
         en:'The gradient itself, however, spreads the phases apart so quickly that the combined signal decays before it can be measured usefully. A dephase gradient is therefore applied first in the opposite sense; the read-out gradient then brings the phases back together so the signal peaks in the middle of the sampling window, forming the gradient echo.'}
      ],
      bullets:[
        {ar:'تسلسل العمل: اختيار الشريحة على z، ثم تدرّج إزالة الطور على x، ثم تدرّج القراءة على x، ثم استقبال صدى التدرّج.',
         en:'Working order: slice selection on z, then the dephase gradient on x, then the read-out gradient on x, then reception of the gradient echo.'}
      ]},
    { h:{ar:'فكّ الإشارة بتحويل Fourier', en:'Decoding the signal with the Fourier transform'},
      paras:[
        {ar:'الإشارة المستقبلة موجة مركّبة من ترددات كثيرة مدموجة، ويأتي دور تحويل Fourier (Fourier transformation) ليفكّكها رياضيًا إلى مكوّناتها. بعد الفكّ نعرف تردد كل مكوّن فنضعه في موضعه الصحيح على المحور x، ونعرف سعته فنحوّلها إلى درجة سطوع (brightness) ذلك الموضع في الصورة.',
         en:'The received wave is a composite of many merged frequencies, and the Fourier transformation separates it mathematically into its components. Each component frequency is then assigned to its position along x, and its amplitude is converted into the brightness of that position in the image.'}
      ]},
    { h:{ar:'الالتفاف وحدّ Nyquist', en:'Aliasing and the Nyquist limit'},
      paras:[
        {ar:'قبل تحويل Fourier يجب تحويل الموجة إلى صورة رقمية عبر أخذ العيّنات (sampling). إذا كانت العيّنات متباعدة أكثر من اللازم، تُقدَّر الترددات العالية بأقلّ من قيمتها الحقيقية وتظهر كأنها ترددات منخفضة، فتُسجَّل في موضع خاطئ على أطراف الصورة، وهذا هو الالتفاف (aliasing) بشكله المعروف بالالتفاف حول الحواف (wrap-around).',
         en:'Before the Fourier transform can be applied, the wave must be digitised by sampling. If sampling is too infrequent, high frequencies are underestimated and masquerade as low frequencies, so they are placed at the wrong position at the image edge — the wrap-around form of aliasing.'},
        {ar:'يحدّد حدّ Nyquist أعلى تردد يمكن أخذ عيّناته بدقة، ويساوي نصف تردد أخذ العيّنات. ولمنع تجاوز هذا الحدّ تُصفّى الإشارة قبل الرقمنة بمرشّح نطاق (band-pass filter) لا يمرّر إلا مدى الترددات المطلوب، ويُسمّى هذا المدى عرضَ نطاق المستقبِل (receiver bandwidth)، وتقابل حافتا مجال الرؤية (FOV) في اتجاه ترميز التردد حدَّي هذا النطاق.',
         en:'The Nyquist limit sets the highest frequency that can be sampled faithfully and equals half the sampling frequency. To keep signals within it, a band-pass filter restricts the incoming frequencies to the required range — the receiver bandwidth — before digitisation, and the two edges of the field of view in the frequency-encoding direction correspond to the limits of that bandwidth.'}
      ],
      nums:[
        {v:'fs / 2', ar:'حدّ Nyquist = تردد أخذ العيّنات ÷ 2', en:'Nyquist limit = sampling frequency ÷ 2'}
      ],
      bullets:[
        {ar:'وسائل التغلّب على الالتفاف في هذا الاتجاه: تكبير مجال الرؤية FOV، أو أشرطة تشبّع (pre-saturation bands) لإلغاء إشارة الأنسجة خارج المجال، أو برمجيات مضادة للالتفاف، أو تبديل اتجاهي الطور والتردد، أو استعمال ملف سطحي (surface coil) لا يلتقط إلا منطقة المجال.',
         en:'Ways to overcome aliasing in this direction: enlarge the FOV, use pre-saturation bands to null tissue outside the FOV, apply anti-aliasing software, swap the phase and frequency directions, or use a surface coil that only detects signal from within the FOV.'}
      ]},
    { h:{ar:'الانزياح الكيميائي', en:'Chemical shift'},
      paras:[
        {ar:'يفترض ترميز التردد أن كل الأنوية تدور بالتردد نفسه عند الموضع نفسه، لكن بروتونات الدهون والماء تختلف قليلًا في ترددها بسبب اختلاف بيئتها المغناطيسية المحلية. هذا الفرق الترددي يُفسَّر خطأً على أنه اختلاف في الموضع، فتنزاح حدود الدهون عن مكانها الحقيقي، ويحدث ذلك في اتجاه ترميز التردد فقط.',
         en:'Frequency encoding assumes every nucleus at a given position precesses at the same frequency, yet fat and water protons differ slightly in frequency because of their different local magnetic environments. That frequency difference is misread as a difference in position, displacing fat boundaries from their true location, and it happens only in the frequency-encoding direction.'}
      ],
      bullets:[
        {ar:'يزداد الانزياح الكيميائي كلما اشتدّ المجال المغناطيسي الرئيسي، لأن الفرق بين ترددي الدهون والماء يكبر معه.',
         en:'Chemical shift grows with main field strength, because the frequency gap between fat and water widens.'},
        {ar:'يزداد كلما ضعُف تدرّج القراءة أو ضاق عرض نطاق المستقبِل، لأن فرقًا تردديًا صغيرًا يصبح حينها موزّعًا على مدى موضعي أوسع وأوضح.',
         en:'It grows with a weaker read-out gradient or a narrower receiver bandwidth, because a small frequency difference then maps onto a larger, more obvious positional shift.'}
      ]}
  ],
  quiz:[
    { q:{ar:'بعد تطبيق تحويل Fourier على إشارة القراءة، ماذا تمثّل سعة كل مكوّن ترددي؟', en:'After the Fourier transform is applied to the read-out signal, what does the amplitude of each frequency component represent?'},
      opts:[
        {ar:'موضع الإشارة على المحور y', en:'The position of the signal along y'},
        {ar:'سطوع الإشارة في موضعها على المحور x', en:'The brightness of the signal at its position along x'},
        {ar:'سماكة الشريحة المختارة', en:'The thickness of the selected slice'},
        {ar:'زمن الاسترخاء T1 للنسيج', en:'The T1 relaxation time of the tissue'}
      ],
      a:1,
      why:{ar:'التردد يحدّد الموضع على المحور x، أما السعة فتتحوّل إلى شدة/سطوع ذلك الموضع في الصورة.', en:'Frequency fixes the position along x, while amplitude is converted into the brightness of that position in the image.'}},
    { q:{ar:'إذا كان تردد أخذ العيّنات 40 kHz، فما حدّ Nyquist؟', en:'If the sampling frequency is 40 kHz, what is the Nyquist limit?'},
      opts:[
        {ar:'40 kHz', en:'40 kHz'},
        {ar:'80 kHz', en:'80 kHz'},
        {ar:'20 kHz', en:'20 kHz'},
        {ar:'10 kHz', en:'10 kHz'}
      ],
      a:2,
      why:{ar:'حدّ Nyquist يساوي نصف تردد أخذ العيّنات: 40 ÷ 2 = 20 kHz، وهو أعلى تردد يمكن قياسه بدقة.', en:'The Nyquist limit is half the sampling frequency: 40 ÷ 2 = 20 kHz, the highest frequency that can be sampled accurately.'}},
    { q:{ar:'في أي اتجاه يظهر خطأ الانزياح الكيميائي (chemical shift)؟', en:'In which direction does the chemical shift artefact appear?'},
      opts:[
        {ar:'اتجاه ترميز الطور فقط', en:'The phase-encoding direction only'},
        {ar:'اتجاه اختيار الشريحة فقط', en:'The slice-select direction only'},
        {ar:'الاتجاهات الثلاثة بالتساوي', en:'All three directions equally'},
        {ar:'اتجاه ترميز التردد فقط', en:'The frequency-encoding direction only'}
      ],
      a:3,
      why:{ar:'لأن الموضع في هذا الاتجاه يُستنتج من التردد، وأي فرق ترددي بين الدهون والماء يُترجم إلى انزياح موضعي؛ أما اتجاه الطور فلا يتأثر بهذه الطريقة.', en:'Position in this direction is read from frequency, so the fat–water frequency difference is translated into a positional shift; the phase direction is not affected in this way.'}}
  ]
},
{
  slug:'phase-encoding', chapter:'mr',
  title:{ar:'ترميز الطور', en:'Phase Encoding'},
  intro:{ar:'اختيرت الشريحة وعُزل عمود داخلها بترميز التردد، ويبقى تحديد الموضع على امتداد العمود نفسه أي على المحور y. يتم ذلك بخدعة ذكية: لا نغيّر تردد الأنوية بصورة دائمة، بل نترك في كل موضع بصمة طور (phase shift) تتوقف على مكانه.',
        en:'With the slice chosen and one column isolated by frequency encoding, position along that column — the y direction — still needs to be found. Instead of changing frequencies permanently, the trick is to leave each position with a phase shift that depends on where it lies.'},
  sections:[
    { h:{ar:'تطبيق تدرّج ترميز الطور', en:'Applying the phase-encoding gradient'},
      paras:[
        {ar:'نأخذ عمودًا واحدًا حدّده ترميز التردد ونقسّمه ذهنيًا إلى مقاطع على المحور y، كل مقطع فيها له التردد والطور نفسيهما عند البداية. يُشغَّل تدرّج على المحور y لفترة قصيرة قبل تدرّج القراءة، فتدور المقاطع القريبة من أحد طرفيه بسرعة أكبر والمقاطع عند الطرف الآخر بسرعة أقل، بحسب شدة المجال المحلي لحظتئذ.',
         en:'Take the single column defined by frequency encoding and divide it into segments along y, all initially sharing the same frequency and phase. A gradient along y is switched on briefly before the read-out gradient; segments toward one end precess faster and segments toward the other end slower, according to the local field at that moment.'},
        {ar:'عند إطفاء التدرّج تعود كل المقاطع إلى الدوران بالتردد نفسه الذي يفرضه تدرّج القراءة، لكنها لم تعد متطابقة: فقد احتفظ كل مقطع بإزاحة طور (phase shift) مقدارها دالة في موضعه على العمود. هكذا صار الطور هو بطاقة الهوية الموضعية في هذا الاتجاه.',
         en:'When the gradient is switched off, every segment returns to the frequency imposed by the read-out gradient, but they no longer line up: each segment keeps a phase shift whose size is a function of its position along the column. Phase has become the positional label in this direction.'}
      ]},
    { h:{ar:'تكرار الدورة بشدّات مختلفة', en:'Repeating the cycle at different strengths'},
      paras:[
        {ar:'لقطة واحدة من الطور لا تكفي لبناء الصورة، لذلك تُعاد الدورة مرات كثيرة وفي كل مرة تُغيَّر شدة تدرّج الطور قليلًا. عند نقطة زمنية ثابتة من كل دورة نرسم سعة الموجة المقاسة، فنحصل عبر الدورات على موجة جديدة تتغير سعتها من دورة إلى أخرى، وتردد هذه الموجة المركّبة يختلف باختلاف موضع المقطع.',
         en:'A single phase measurement cannot build an image, so the cycle is repeated many times, slightly changing the phase-encoding gradient strength each time. Plotting the measured signal amplitude at a fixed point of every cycle traces out a new wave whose amplitude varies from cycle to cycle, and the frequency of this composite wave differs for each segment position.'},
        {ar:'المقاطع القريبة من طرفي التدرّج تتراكم فيها إزاحات طور كبيرة فتكون موجتها سريعة التغير عبر الدورات، أما المقطع الواقع في منتصف التدرّج تمامًا — نقطة التساوي (isopoint) — فلا يتغير تردده ولا طوره أبدًا مهما تغيرت شدة التدرّج، فتبقى موجته ثابتة.',
         en:'Segments near the ends of the gradient accumulate large phase shifts, so their plotted wave changes rapidly from cycle to cycle. The segment exactly at the middle of the gradient — the isopoint — never changes frequency or phase whatever the gradient strength, so its plotted wave stays constant.'}
      ]},
    { h:{ar:'فكّ الترميز واستخراج السطوع', en:'Decoding and extracting brightness'},
      paras:[
        {ar:'يُطبَّق تحويل Fourier مرة أخرى، لكن هذه المرة على الموجات المرسومة عبر الدورات، فيفصل كل موجة بحسب ترددها ويضعها في موضعها الصحيح على المحور y. أما سطوع كل موضع فيُستمَد من أقصى سعة بلغتها موجته، لأن هذه السعة القصوى تقابل سعة الإشارة الأصلية الصادرة من ذلك الموضع.',
         en:'The Fourier transform is applied again, this time to the waves plotted across cycles, separating each wave by its frequency and slotting it into its correct position along y. Brightness at each position comes from the maximum amplitude of its wave, because that peak corresponds to the amplitude of the original signal from that position.'}
      ]},
    { h:{ar:'الثمن: زمن الفحص', en:'The price: scan time'},
      paras:[
        {ar:'كل خطوة طور تستهلك دورة كاملة (TR واحدًا) وتملأ سطرًا واحدًا من بيانات الصورة، لذلك يتناسب زمن الفحص طرديًا مع عدد خطوات ترميز الطور. زيادة دقة الصورة في اتجاه الطور تعني دورات أكثر وزمنًا أطول، وهذا هو السبب في أن اتجاه الطور — لا اتجاه التردد — هو العامل الحاسم في طول الفحص وفي ظهور أخطاء الحركة على امتداده.',
         en:'Each phase-encoding step consumes a full cycle (one TR) and fills one line of image data, so scan time rises in direct proportion to the number of phase-encoding steps. Finer resolution in the phase direction means more cycles and a longer scan, which is why the phase direction — not the frequency direction — dominates scan duration and carries motion artefacts.'}
      ]}
  ],
  quiz:[
    { q:{ar:'بعد إطفاء تدرّج ترميز الطور، ما الذي يميّز المقاطع المختلفة على المحور y عن بعضها؟', en:'After the phase-encoding gradient is switched off, what distinguishes segments at different y positions?'},
      opts:[
        {ar:'ترددات Larmor مختلفة بصورة دائمة', en:'Permanently different Larmor frequencies'},
        {ar:'إزاحات طور مختلفة مع تردد واحد مشترك', en:'Different phase shifts with one shared frequency'},
        {ar:'سعات إشارة مختلفة فقط', en:'Different signal amplitudes only'},
        {ar:'قيم T2 مختلفة', en:'Different T2 values'}
      ],
      a:1,
      why:{ar:'بمجرد إطفاء التدرّج تعود كل المقاطع إلى التردد نفسه، وتبقى إزاحة الطور هي العلامة الوحيدة على الموضع.', en:'Once the gradient is off, all segments share the same frequency again; the phase shift is the only remaining marker of position.'}},
    { q:{ar:'ماذا يحدث لطور المقطع الواقع عند منتصف التدرّج (isopoint) مهما تغيّرت شدة تدرّج الطور؟', en:'What happens to the phase of the segment at the centre of the gradient (the isopoint), however the gradient strength changes?'},
      opts:[
        {ar:'يتغير بأكبر مقدار ممكن', en:'It changes by the largest amount'},
        {ar:'ينعكس اتجاهه كل دورة', en:'It reverses every cycle'},
        {ar:'لا يتغير أبدًا', en:'It never changes'},
        {ar:'يختفي تمامًا من الصورة', en:'It disappears from the image'}
      ],
      a:2,
      why:{ar:'نقطة المنتصف لا تشعر بتغير المجال عند تغيير شدة التدرّج، فلا يتراكم فيها أي إزاحة طور.', en:'The central point experiences no field change as gradient strength varies, so no phase shift ever accumulates there.'}},
    { q:{ar:'من أين يُستمَد سطوع كل موضع في اتجاه ترميز الطور؟', en:'From what is the brightness of each position in the phase-encoding direction derived?'},
      opts:[
        {ar:'من أقصى سعة بلغتها موجة تغيّر الإشارة عبر الدورات', en:'From the maximum amplitude of the wave traced across cycles'},
        {ar:'من تردد الموجة عبر الدورات', en:'From the frequency of the wave across cycles'},
        {ar:'من عدد الدورات المستخدمة', en:'From the number of cycles used'},
        {ar:'من زمن الصدى TE للتسلسل', en:'From the echo time TE of the sequence'}
      ],
      a:0,
      why:{ar:'تردد الموجة عبر الدورات يحدّد الموضع على y، بينما أقصى سعتها تقابل سعة الإشارة الأصلية أي سطوع ذلك الموضع.', en:'The frequency of the cross-cycle wave fixes the y position, while its maximum amplitude matches the original signal amplitude — the brightness of that position.'}}
  ]
},
{
  slug:'k-space', chapter:'mr',
  title:{ar:'فضاء K', en:'K-space'},
  intro:{ar:'البيانات التي يجمعها جهاز الرنين لا تُحفظ على هيئة صورة جاهزة، بل تُخزَّن أولًا في مصفوفة وسيطة تُسمّى فضاء K (k-space) أو فضاء Fourier. فهم هذه المصفوفة يفسّر كثيرًا من سلوك الصورة وأخطائها، من حدة الحواف إلى أثر اقتطاع البيانات.',
        en:'The data an MR scanner collects are not stored as a finished image but in an intermediate matrix called k-space, or Fourier space. Understanding this matrix explains much of image behaviour — from edge sharpness to the effect of missing data.'},
  sections:[
    { h:{ar:'ما الذي يُخزَّن في فضاء K؟', en:'What is stored in k-space?'},
      paras:[
        {ar:'أثناء الاكتساب نجمع موجات كثيرة تختلف في ترددها المكاني (spatial frequency) واتجاهها، وتراكب هذه الموجات فوق بعضها هو ما يبني الصورة المرئية في النهاية. كل بيانات موجة مقاسة تُودَع في خلية من مصفوفة فضاء K وفق إحداثيات تحدّد ترددها واتجاهها.',
         en:'During acquisition we collect many waves differing in spatial frequency and direction, and superimposing these waves is what ultimately builds the visible image. The data from each measured wave are placed in a cell of the k-space matrix at coordinates that record its frequency and direction.'},
        {ar:'عمليًا، كل عمود في فضاء K يحمل بيانات خطوة قراءة واحدة (frequency encoding step)، بينما تُملأ الصفوف بتكرار خطوات ترميز الطور (phase-encoding steps) بشدّات متدرجة. فإذا غيّرت عدد خطوات الطور غيّرت عدد صفوف المصفوفة، وإذا غيّرت نقاط القراءة غيّرت أعمدتها.',
         en:'In practice, each column of k-space holds the data from one read-out (frequency-encoding step), while the rows are filled by repeating the phase-encoding steps at stepped strengths. Changing the number of phase steps changes the number of rows, and changing the read-out samples changes the columns.'}
      ]},
    { h:{ar:'خصائص جوهرية', en:'Essential properties'},
      bullets:[
        {ar:'كل نقطة في فضاء K تساهم في الصورة كلها، فلا توجد خلية مسؤولة عن بقعة واحدة من الصورة.',
         en:'Every point in k-space contributes to the whole image; no single cell is responsible for one patch of the picture.'},
        {ar:'بالمقابل، كل بكسل في الصورة النهائية مشتقّ من فضاء K بأكمله، ولهذا فإن فقدان أي جزء من البيانات يؤثر في الصورة كلها بدرجة ما.',
         en:'Conversely, every pixel of the final image is derived from the whole of k-space, so losing any portion of the data affects the entire image to some degree.'},
        {ar:'المصفوفة متماثلة (symmetrical)، إذ تحمل الجهتان المتقابلتان منها معلومات مترابطة، وهي خاصية تُستغل أحيانًا لتسريع الاكتساب بملء جزء من المصفوفة واستنتاج الباقي.',
         en:'The matrix is symmetrical, with opposite halves carrying related information — a property sometimes exploited to speed acquisition by filling only part of k-space and inferring the rest.'},
        {ar:'محورا الإحداثيات في فضاء K يحدّدان اتجاه الموجات المخزّنة وطولها الموجي، لا مواضع تشريحية مباشرة.',
         en:'The coordinate axes of k-space set the direction and wavelength of the stored waves, not direct anatomical positions.'}
      ]},
    { h:{ar:'المركز مقابل الأطراف: التباين والحواف', en:'Centre versus periphery: contrast and edges'},
      paras:[
        {ar:'تتوزع المعلومات في فضاء K بحسب التردد المكاني: الإشارات منخفضة التردد المكاني — الموجات العريضة البطيئة التغير — تسكن قرب المركز، بينما تسكن الإشارات عالية التردد المكاني في الأطراف. والموجات العريضة هي التي تحمل التباين العام (contrast) وسطوع المناطق الكبيرة، أما الموجات الدقيقة فهي التي ترسم الحواف (edges) والتفاصيل الصغيرة.',
         en:'Information is distributed by spatial frequency: low-spatial-frequency signals — broad, slowly varying waves — live near the centre, while high-spatial-frequency signals occupy the periphery. The broad waves carry the overall contrast and brightness of large regions, whereas the fine waves draw the edges and small details.'}
      ],
      nums:[
        {v:'Centre', ar:'ترددات مكانية منخفضة = تباين الصورة العام', en:'Low spatial frequencies = overall image contrast'},
        {v:'Periphery', ar:'ترددات مكانية عالية = حواف وتفاصيل دقيقة', en:'High spatial frequencies = edges and fine detail'}
      ]},
    { h:{ar:'ماذا يحدث عند ترشيح فضاء K؟', en:'Filtering k-space'},
      paras:[
        {ar:'إذا أعدنا بناء الصورة من مركز فضاء K فقط (مرشّح تمرير منخفض low-pass filter) حصلنا على صورة ناعمة تحمل التباين العام لكنها تفتقد الحواف والتفاصيل. وإذا استخدمنا الأطراف فقط (مرشّح تمرير عالٍ high-pass filter) ظهرت الحواف والتفاصيل بوضوح لكن غابت ملامح التباين المنخفض فبدت الصورة فارغة الوسط.',
         en:'Reconstructing from only the centre of k-space (a low-pass filter) yields a smooth image that keeps overall contrast but lacks edges and detail. Using only the periphery (a high-pass filter) shows edges and detail crisply but loses low-contrast features, leaving the image hollow.'},
        {ar:'تفسّر هذه الفكرة ظواهر عملية كثيرة: فاكتساب مركز فضاء K أولًا في بعض التسلسلات السريعة يعطي معلومة التباين مبكرًا، وتلف نقطة بيانات واحدة شاذة في المصفوفة ينتشر أثره عبر الصورة بأكملها بدل أن يبقى موضعيًا.',
         en:'This idea explains many practical phenomena: acquiring the centre of k-space first in some fast sequences delivers contrast information early, and a single corrupted data point spreads its effect across the whole image rather than staying local.'}
      ]}
  ],
  quiz:[
    { q:{ar:'أين تُخزَّن الإشارات عالية التردد المكاني في فضاء K؟', en:'Where are high-spatial-frequency signals stored in k-space?'},
      opts:[
        {ar:'في المركز', en:'In the centre'},
        {ar:'في الصف الأول فقط', en:'In the first row only'},
        {ar:'في الأطراف', en:'In the periphery'},
        {ar:'لا تُخزَّن في فضاء K أصلًا', en:'They are not stored in k-space'}
      ],
      a:2,
      why:{ar:'الأطراف تحمل الموجات الدقيقة المسؤولة عن الحواف والتفاصيل، بينما يحمل المركز الترددات المنخفضة المسؤولة عن التباين.', en:'The periphery holds the fine waves responsible for edges and detail, while the centre holds low frequencies responsible for contrast.'}},
    { q:{ar:'صورة أُعيد بناؤها من مركز فضاء K فقط ستكون غالبًا:', en:'An image reconstructed from only the centre of k-space would most likely be:'},
      opts:[
        {ar:'حادة الحواف بلا أي تباين', en:'Sharp-edged with no contrast at all'},
        {ar:'ناعمة تحتفظ بالتباين لكن بلا تفاصيل دقيقة', en:'Smooth, keeping contrast but lacking fine detail'},
        {ar:'مطابقة للصورة الكاملة تمامًا', en:'Identical to the full image'},
        {ar:'خالية من أي إشارة', en:'Completely signal-free'}
      ],
      a:1,
      why:{ar:'مرشّح التمرير المنخفض يحتفظ بالموجات العريضة الحاملة للتباين ويستبعد الموجات الدقيقة الحاملة للحواف والتفاصيل.', en:'A low-pass reconstruction keeps the broad contrast-carrying waves and discards the fine waves that carry edges and detail.'}},
    { q:{ar:'أي عبارة صحيحة عن العلاقة بين فضاء K والصورة؟', en:'Which statement about k-space and the image is correct?'},
      opts:[
        {ar:'كل خلية في فضاء K تقابل بكسلًا واحدًا في الصورة', en:'Each k-space cell corresponds to one image pixel'},
        {ar:'كل نقطة في فضاء K تساهم في الصورة كلها، وكل بكسل مشتق من فضاء K بأكمله', en:'Each k-space point contributes to the whole image, and each pixel is derived from all of k-space'},
        {ar:'النصف الأيمن من فضاء K يبني النصف الأيمن من الصورة فقط', en:'The right half of k-space builds only the right half of the image'},
        {ar:'فضاء K هو الصورة نفسها قبل عرضها على الشاشة', en:'K-space is simply the image before it is displayed'}
      ],
      a:1,
      why:{ar:'فضاء K مجال ترددات لا خريطة مواضع؛ بياناته موزعة على الصورة كلها، وكل بكسل نتيجة تراكب جميع الموجات المخزّنة.', en:'K-space is a frequency domain, not a position map; its data are spread over the entire image, and each pixel results from superimposing all the stored waves.'}}
  ]
},
{
  slug:'mr-image-quality', chapter:'mr',
  title:{ar:'جودة صورة الرنين', en:'MR Image Quality'},
  intro:{ar:'تتحدد جودة صورة الرنين بثلاثة عناصر رئيسة: الدقة (resolution)، ونسبة الإشارة إلى الضوضاء (SNR)، والتباين (contrast)، إضافة إلى غياب الأخطاء (artefacts). والدقة والـ SNR خصمان متلازمان: كل تحسين في أحدهما يُدفع ثمنه غالبًا من الآخر أو من زمن الفحص.',
        en:'MR image quality rests on three main elements: resolution, signal-to-noise ratio (SNR) and contrast, together with the absence of artefacts. Resolution and SNR are permanent rivals — improving one is usually paid for from the other, or from scan time.'},
  sections:[
    { h:{ar:'الدقة وحجم الفوكسل', en:'Resolution and voxel size'},
      paras:[
        {ar:'الدقة هي حجم أصغر وحدة في الصورة: البكسل (pixel) في العرض الثنائي الأبعاد، والفوكسل (voxel) عند احتساب سماكة الشريحة. كلما صغُر الفوكسل ازدادت التفاصيل المكانية، وكلما كبُر ازدادت الإشارة القادمة منه لكن ضاعت التفاصيل.',
         en:'Resolution is the size of the smallest unit of the image: the pixel in two dimensions, or the voxel once slice thickness is included. The smaller the voxel, the finer the spatial detail; the larger the voxel, the more signal it yields but the more detail is lost.'}
      ],
      nums:[
        {v:'FOV / matrix', ar:'حجم البكسل = مجال الرؤية ÷ المصفوفة', en:'Pixel size = field of view / matrix'},
        {v:'(FOV/matrix) × thickness', ar:'حجم الفوكسل = حجم البكسل × سماكة الشريحة', en:'Voxel volume = pixel size × slice thickness'}
      ]},
    { h:{ar:'المقايضات: المصفوفة والمجال والسماكة', en:'Trade-offs: matrix, FOV and slice thickness'},
      paras:[
        {ar:'المصفوفة (matrix) هي عدد البكسلات في الصورة، ومجال الرؤية (FOV) هو مساحة المنطقة المصوَّرة، وسماكة الشريحة هي البعد الثالث للفوكسل. تغيير أي منها يحرّك الدقة والإشارة وزمن الفحص والتداخل الحجمي (partial volume) بنسب مختلفة، كما يلخّص الجدول التالي بصورة مرتّبة من جديد.',
         en:'The matrix is the number of pixels in the image, the field of view (FOV) is the size of the imaged area, and slice thickness is the third dimension of the voxel. Changing any of them moves resolution, signal, scan time and partial volume effects in different proportions, summarised in the restructured table below.'}
      ],
      table:{
        head:[{ar:'زيادة العامل', en:'Increasing'}, {ar:'الدقة المكانية', en:'Spatial resolution'}, {ar:'الإشارة / SNR', en:'Signal / SNR'}, {ar:'آثار أخرى', en:'Other effects'}],
        rows:[
          [{ar:'المصفوفة Matrix', en:'Matrix size'}, {ar:'تتحسن (بكسلات أصغر)', en:'Improves (smaller pixels)'}, {ar:'تنخفض', en:'Falls'}, {ar:'زمن الفحص يطول (في اتجاه الطور)', en:'Longer scan time (phase direction)'}],
          [{ar:'مجال الرؤية FOV', en:'Field of view'}, {ar:'تنخفض (فوكسل أكبر)', en:'Falls (larger voxels)'}, {ar:'ترتفع', en:'Rises'}, {ar:'تغطية تشريحية أوسع', en:'Larger anatomical coverage'}],
          [{ar:'سماكة الشريحة', en:'Slice thickness'}, {ar:'تنخفض', en:'Falls'}, {ar:'ترتفع', en:'Rises'}, {ar:'يزداد أثر الحجم الجزئي وتكبر التغطية', en:'More partial volume effect, more coverage'}]
        ]
      }},
    { h:{ar:'فجوة الشريحة والتداخل الكلامي', en:'Slice gap and cross-talk'},
      paras:[
        {ar:'فجوة الشريحة (slice gap) هي الفراغ بين شريحة وأخرى وتُقاس كنسبة من سماكتها، وتوجد لأن الشريحة الحقيقية ليست حادة الحواف بل تأخذ مقطعها شكلًا قريبًا من الجرس. تضييق الفجوة يمنع تفويت أي منطقة، لكن تداخل حافتي شريحتين متجاورتين يخلق منطقة تداخل كلامي (cross-talk) تتشارك فيها الشريحتان الإشارة فتتشبع البروتونات وتضيع الإشارة؛ لذلك تُستخدم عادة فجوة بين 10 و20٪.',
         en:'The slice gap is the space between slices, expressed as a percentage of slice thickness, and it exists because a real slice profile is bell-shaped rather than sharp-edged. A tiny gap avoids missing tissue, but overlap between neighbouring slice edges creates cross-talk, where shared excitation saturates protons and signal is lost; a gap of about 10–20% is therefore typical.'},
        {ar:'حلّ بديل للتداخل الكلامي هو الاكتساب المتداخل الترتيب: تصوير الشرائح الفردية أولًا (1، 3، 5) ثم الشرائح الزوجية (2، 4، 6)، فيفصل زمنٌ كافٍ بين إثارة كل شريحتين متجاورتين.',
         en:'An alternative remedy for cross-talk is interleaved acquisition: imaging the odd slices first (1, 3, 5) and then the even ones (2, 4, 6), so enough time separates the excitation of any two adjacent slices.'}
      ],
      bullets:[
        {ar:'فجوة أكبر تعني تداخلًا كلاميًا أقل وتغطية أوسع، مقابل خطر تفويت مناطق صغيرة بين الشرائح.',
         en:'A larger gap means less cross-talk and wider coverage, at the risk of skipping small regions between slices.'}
      ]},
    { h:{ar:'نسبة الإشارة إلى الضوضاء وعدد مرات التجميع', en:'SNR and the number of acquisitions'},
      paras:[
        {ar:'الضوضاء خلفية حاضرة في كل وسائل التصوير، والصورة المفيدة هي التي تتغلب فيها إشارة النسيج على الضوضاء. القاعدة الحاكمة: الفوكسل الأكبر يعطي إشارة أكثر وSNR أعلى، لكنه يعني دقة أقل — فالدقة العالية والـ SNR العالي لا يجتمعان مجانًا.',
         en:'Noise is a background present in every imaging modality, and a useful image is one where tissue signal outweighs it. The governing rule: a bigger voxel returns more signal and higher SNR, but it means lower resolution — high resolution and high SNR never come free together.'},
        {ar:'وسيلة أخرى لرفع الإشارة هي تكرار اكتساب المنطقة نفسها ومتوسّط النتائج، وهو عدد مرات التجميع NEX (أو NSA). لكن العائد يخضع لقانون الجذر التربيعي: مضاعفة NEX لا ترفع SNR إلا بمعامل √2 (نحو 1.4 مرة)، بينما يتضاعف زمن الفحص كاملًا، كما أن التجميع المتكرر يخفف بعض أخطاء الحركة العشوائية.',
         en:'Another way to raise signal is to acquire the same region repeatedly and average the results — the number of excitations, NEX (or NSA). The return follows a square-root law: doubling NEX raises SNR only by √2 (about 1.4 times), while scan time doubles in full; repeated averaging also dilutes random motion artefacts.'}
      ],
      nums:[
        {v:'√NEX', ar:'ازدياد SNR يتناسب مع الجذر التربيعي لعدد مرات التجميع', en:'SNR gain is proportional to the square root of NEX'},
        {v:'10–20%', ar:'فجوة الشريحة المعتادة من سماكتها', en:'Usual slice gap as a percentage of thickness'}
      ],
      bullets:[
        {ar:'لرفع SNR: زيادة NEX، أو تكبير FOV، أو شرائح أسمك، أو دقة أقل، أو ملفات سطحية قريبة من المنطقة.',
         en:'To raise SNR: increase NEX, enlarge the FOV, use thicker slices, accept lower resolution, or use surface coils close to the region.'},
        {ar:'لرفع الدقة: مصفوفة أكبر، أو FOV أصغر، أو شرائح أرقّ — وكلها على حساب SNR أو الزمن.',
         en:'To raise resolution: a larger matrix, a smaller FOV, or thinner slices — each at the cost of SNR or time.'}
      ]}
  ],
  quiz:[
    { q:{ar:'مجال رؤية 256 mm ومصفوفة 256، فما حجم البكسل؟', en:'With an FOV of 256 mm and a matrix of 256, what is the pixel size?'},
      opts:[
        {ar:'0.5 mm', en:'0.5 mm'},
        {ar:'1 mm', en:'1 mm'},
        {ar:'2 mm', en:'2 mm'},
        {ar:'4 mm', en:'4 mm'}
      ],
      a:1,
      why:{ar:'حجم البكسل = FOV ÷ المصفوفة = 256 ÷ 256 = 1 mm.', en:'Pixel size = FOV / matrix = 256 / 256 = 1 mm.'}},
    { q:{ar:'مضاعفة عدد مرات التجميع NEX ترفع SNR بمقدار:', en:'Doubling the number of acquisitions (NEX) increases SNR by a factor of:'},
      opts:[
        {ar:'مرتين', en:'Two times'},
        {ar:'أربع مرات', en:'Four times'},
        {ar:'√2 أي نحو 1.4 مرة', en:'√2, about 1.4 times'},
        {ar:'لا ترفعه إطلاقًا', en:'It does not increase it at all'}
      ],
      a:2,
      why:{ar:'SNR يتناسب مع الجذر التربيعي لـ NEX، فمضاعفته تعطي √2 فقط، بينما يتضاعف زمن الفحص.', en:'SNR is proportional to the square root of NEX, so doubling it yields only √2, whereas scan time fully doubles.'}},
    { q:{ar:'زيادة سماكة الشريحة تؤدي إلى:', en:'Increasing slice thickness leads to:'},
      opts:[
        {ar:'إشارة أقل وأثر حجم جزئي أقل', en:'Less signal and less partial volume effect'},
        {ar:'إشارة أكثر ودقة أعلى', en:'More signal and higher resolution'},
        {ar:'إشارة أكثر ودقة أقل وأثر حجم جزئي أكبر', en:'More signal, lower resolution and more partial volume effect'},
        {ar:'زمن فحص أقصر دائمًا', en:'Always a shorter scan time'}
      ],
      a:2,
      why:{ar:'الشريحة الأسمك تعني فوكسلًا أكبر: إشارة أكثر، لكن دقة أقل في اتجاه الشريحة وتداخلًا حجميًا أكبر.', en:'A thicker slice means a larger voxel: more signal, but poorer through-plane resolution and a greater partial volume effect.'}}
  ]
},
{
  slug:'mr-angiography', chapter:'mr',
  title:{ar:'تصوير الأوعية بالرنين المغناطيسي', en:'MR Angiography'},
  intro:{ar:'يستطيع الرنين تصوير الأوعية بلا صبغة أصلًا، مستغلًا خصائص الدم المتدفق نفسه، أو بصبغة الغادولينيوم عند الحاجة. ويختلف جوهريًا عن تصوير الأوعية بالأشعة السينية وCT في مصدر الإشارة وفي كونه غير انتقائي، وتبدأ كل تقنياته من فهم أخطاء التدفق وتحويلها إلى أدوات.',
        en:'MRI can image vessels with no contrast agent at all, exploiting the properties of flowing blood itself, or with gadolinium when needed. It differs fundamentally from x-ray and CT angiography in where its signal comes from and in being non-selective, and all of its techniques grow out of flow phenomena that are artefacts elsewhere.'},
  sections:[
    { h:{ar:'مقارنة وسائل تصوير الأوعية', en:'Comparing the angiography modalities'},
      paras:[
        {ar:'الفرق الجوهري بين الوسائل الثلاث هو ما تصنع منه الإشارة وكيف تصل الصبغة إلى الوعاء وطبيعة البيانات الناتجة. يرتّب الجدول التالي هذه الفروق بصورة مبسّطة:',
         en:'The essential difference between the three modalities is what the signal is made from, how contrast reaches the vessel, and the nature of the resulting data. The table below arranges these differences in simplified form:'}
      ],
      table:{
        head:[{ar:'وجه المقارنة', en:'Aspect'}, {ar:'الأشعة السينية', en:'X-ray'}, {ar:'CT', en:'CT'}, {ar:'الرنين MRI', en:'MRI'}],
        rows:[
          [{ar:'مصدر إشارة الوعاء', en:'Source of vessel signal'}, {ar:'كثافة مادة التباين داخل التجويف', en:'Density of contrast inside the lumen'}, {ar:'مادة تباين تُحقن وريديًا', en:'Intravenously injected contrast'}, {ar:'خصائص الدم والتدفق ذاتها، أو أثر الصبغة في الماء المحيط', en:'Intrinsic blood and flow properties, or the effect of contrast on surrounding water'}],
          [{ar:'الانتقائية', en:'Selectivity'}, {ar:'انتقائي: حقن في أوعية محددة', en:'Selective: injection into chosen vessels'}, {ar:'توقيت المراحل يحدّد الأوعية المصوَّرة', en:'Phase timing selects the vessels imaged'}, {ar:'غير انتقائي', en:'Non-selective'}],
          [{ar:'أبعاد البيانات', en:'Data set'}, {ar:'ثنائية الأبعاد', en:'2D'}, {ar:'يمكن أن تكون ثلاثية الأبعاد', en:'Can be a 3D data set'}, {ar:'يمكن أن تكون ثلاثية الأبعاد', en:'Can be a 3D data set'}]
        ]
      },
      bullets:[
        {ar:'نقطة دقيقة مهمة في الرنين: الصبغة نفسها لا تُصوَّر، بل يُصوَّر أثرها في بروتونات الماء المحيطة بها (تقصير T1).',
         en:'A key subtlety in MRI: the contrast agent itself is not imaged — its effect on the surrounding water protons (T1 shortening) is.'}
      ]},
    { h:{ar:'تعزيز التدفق وفراغ التدفق', en:'Flow-related enhancement and flow void'},
      paras:[
        {ar:'في تسلسلات صدى التدرّج (gradient echo) تُختصر الفواصل بين النبضات (TR قصير) فتتعرض الأنسجة الثابتة لنبضات متكررة وتتشبع فتنخفض إشارتها. أما الدم المتدفق فيدخل الشريحة طازجًا لم يتعرّض لتلك النبضات، فيحتفظ بمغنطة عرضية كبيرة ويعيد إشارة قوية ساطعة — وهذه هي ظاهرة تعزيز الإشارة المرتبط بالتدفق (flow-related enhancement) وأساس تقنية زمن الطيران.',
         en:'In gradient-echo sequences the gaps between pulses are short (short TR), so stationary tissue is pulsed repeatedly, becomes saturated and loses signal. Blood flowing into the slice arrives fresh, never having experienced those pulses, so it keeps a large transverse magnetisation and returns a strong bright signal — flow-related enhancement, the basis of time-of-flight imaging.'},
        {ar:'المقابل المظلم لهذه الظاهرة هو فراغ التدفق (flow void): في تسلسلات صدى السبين، الدم سريع الجريان قد يغادر الشريحة بين نبضة الإثارة ونبضة إعادة التركيز فلا ينتج صدى، فيبدو تجويف الوعاء أسود. سطوع الدم أو سواده إذن ليس خاصية ثابتة، بل نتيجة لسرعته ونوع التسلسل.',
         en:'The dark counterpart is the flow void: in spin-echo sequences, fast-moving blood may leave the slice between the excitation and refocusing pulses and produce no echo, so the vessel lumen appears black. Whether blood looks bright or dark is therefore not a fixed property but a result of its speed and the sequence type.'}
      ]},
    { h:{ar:'زمن الطيران Time-of-Flight', en:'Time-of-flight (TOF) angiography'},
      paras:[
        {ar:'تبني تقنية TOF صورتها كاملة على تعزيز التدفق: نبضات متكررة سريعة تُشبع الأنسجة الثابتة حتى تكاد تصمت، بينما يلمع أي دم جديد يدخل حجم التصوير. يمكن تنفيذها بشرائح متتابعة ثنائية الأبعاد أو بحجم ثلاثي الأبعاد واحد، وهي ممتازة للأوعية ذات التدفق الجيد نحو منطقة التصوير.',
         en:'TOF builds its entire image on flow-related enhancement: rapid repeated pulses saturate stationary tissue into near-silence, while any fresh blood entering the imaging volume shines. It can be run as sequential 2D slices or as a single 3D volume, and it excels where flow into the imaged region is brisk.'},
        {ar:'للفصل بين الشرايين والأوردة تُستخدم أشرطة تشبّع (saturation bands) توضع على جهة مجيء الجريان غير المرغوب: شريط فوق منطقة الرقبة مثلًا يُسكت الدم الوريدي الصاعد من الأسفل أو النازل بحسب الاتجاه المطلوب قمعه، فيبقى في الصورة الجريان الشرياني وحده.',
         en:'To separate arteries from veins, saturation bands are placed on the side the unwanted flow comes from: a band positioned appropriately silences venous blood while leaving the arterial inflow bright, so only the desired circulation remains in the image.'}
      ],
      bullets:[
        {ar:'حدود التقنية: الجريان البطيء أو الموازي لمستوى الشريحة يتشبع بدوره فيختفي، والجريان المضطرب يفقد إشارته بفقدان تماسك الطور.',
         en:'Limitations: slow flow, or flow running within the plane of the slice, also becomes saturated and vanishes, and turbulent flow loses signal through phase incoherence.'}
      ]},
    { h:{ar:'تصوير تباين الطور Phase Contrast', en:'Phase-contrast angiography'},
      paras:[
        {ar:'السبين المتحرك على امتداد تدرّج يكتسب إزاحة طور إضافية لا يكتسبها السبين الثابت. مقدار هذه الإزاحة يتناسب مع سرعة السبين ومع شدة التدرّج ومدة تطبيقه؛ وبما أن الشدة والمدة معلومتان لدينا، يمكن عكس الحساب لاستخراج السرعة نفسها، فينتج تصوير تباين الطور (phase contrast) صورًا تشريحية للأوعية وقياسات كمية للجريان في آن واحد.',
         en:'A spin moving along a gradient accumulates an extra phase shift that a stationary spin does not. The size of that shift is proportional to the spin velocity and to the strength and duration of the gradient; since strength and duration are known, the calculation can be reversed to extract velocity itself, so phase-contrast imaging yields both vessel anatomy and quantitative flow measurements.'},
        {ar:'قبل الفحص يُضبط حدّ السرعة المشفّرة (velocity encoding, VENC) ليوافق السرعات المتوقعة: ضبطه منخفضًا أكثر من اللازم يطوي السرعات العالية على نفسها (aliasing)، وضبطه عاليًا يفقد الحساسية للجريان البطيء.',
         en:'Before the scan, the velocity-encoding value (VENC) is set to match the expected velocities: set it too low and fast flow wraps onto itself (aliasing); set it too high and sensitivity to slow flow is lost.'}
      ]},
    { h:{ar:'تصوير الأوعية المعزّز بالصبغة', en:'Contrast-enhanced MRA'},
      paras:[
        {ar:'عندما لا تكفي تقنيات الجريان، يُحقن الغادولينيوم فيختصر T1 الدم اختصارًا شديدًا فيلمع الدم في تسلسلات صدى التدرّج المرجّحة بـ T1 بغضّ النظر تقريبًا عن سرعة جريانه. تُقتنص الصور بحجم ثلاثي الأبعاد في ذروة المرحلة الشريانية أثناء مرور الصبغة، فتُعطي خرائط وعائية واسعة سريعة تشبه في روحها تصوير CT الوعائي لكن بلا إشعاع مؤيّن.',
         en:'When flow-based techniques are not enough, injected gadolinium shortens blood T1 so strongly that blood shines on T1-weighted gradient-echo sequences almost regardless of flow speed. A 3D volume is captured at the peak of the arterial phase as the bolus passes, giving fast, wide-coverage vessel maps similar in spirit to CT angiography but without ionising radiation.'}
      ]}
  ],
  quiz:[
    { q:{ar:'لماذا يظهر الدم المتدفق ساطعًا في تقنية زمن الطيران TOF؟', en:'Why does flowing blood appear bright in time-of-flight (TOF) MRA?'},
      opts:[
        {ar:'لأن الدم يحتوي على الحديد بتركيز عالٍ', en:'Because blood contains a high concentration of iron'},
        {ar:'لأن الدم الداخل إلى الشريحة لم يتعرّض للنبضات المتكررة فلم يتشبع', en:'Because blood entering the slice has not experienced the repeated pulses and is not saturated'},
        {ar:'لأن T2 الدم أقصر من T2 العضلات', en:'Because blood T2 is shorter than muscle T2'},
        {ar:'لأن الصبغة تتراكم داخل الأوعية', en:'Because contrast accumulates inside the vessels'}
      ],
      a:1,
      why:{ar:'النبضات السريعة المتكررة تُشبع الأنسجة الثابتة، أما الدم الطازج الوافد فيدخل بمغنطة كاملة فيعطي إشارة أقوى من محيطه.', en:'Rapid repeated pulses saturate stationary tissue, whereas inflowing fresh blood arrives with full magnetisation and returns a stronger signal than its surroundings.'}},
    { q:{ar:'في تصوير تباين الطور، إزاحة طور السبين المتحرك تتناسب طرديًا مع:', en:'In phase-contrast MRA, the phase shift of a moving spin is directly proportional to:'},
      opts:[
        {ar:'درجة حرارة النسيج', en:'Tissue temperature'},
        {ar:'سرعته وشدة التدرّج ومدة تطبيقه', en:'Its velocity, the gradient strength and the application time'},
        {ar:'حجم الفوكسل', en:'Voxel size'},
        {ar:'عدد مرات التجميع NEX', en:'The number of acquisitions NEX'}
      ],
      a:1,
      why:{ar:'الإزاحة ناتجة عن حركته داخل التدرّج، وبمعرفة الشدة والمدة يمكن حساب السرعة — وهذا أساس قياس الجريان بهذه التقنية.', en:'The shift arises from motion within the gradient, and knowing strength and duration lets velocity be calculated — the basis of flow quantification with this technique.'}},
    { q:{ar:'في تصوير الأوعية المعزّز بالصبغة بالرنين، ما الذي يُصوَّر فعليًا لتكوين لمعان الدم؟', en:'In contrast-enhanced MRA, what is actually imaged to make blood bright?'},
      opts:[
        {ar:'ذرات الغادولينيوم نفسها مباشرة', en:'The gadolinium atoms themselves, directly'},
        {ar:'أثر الصبغة في بروتونات الماء المحيطة (تقصير T1 الدم)', en:'The effect of the agent on surrounding water protons (T1 shortening of blood)'},
        {ar:'أيونات الكالسيوم في جدار الوعاء', en:'Calcium ions in the vessel wall'},
        {ar:'حرارة الدم المرتفعة', en:'The elevated temperature of blood'}
      ],
      a:1,
      why:{ar:'الرنين لا يرصد الصبغة ذاتها، بل يرصد ما تفعله في الماء حولها: اختصار T1 فيلمع الدم في التسلسلات المرجّحة بـ T1.', en:'MRI does not detect the agent itself but what it does to nearby water: shortening T1 so blood appears bright on T1-weighted sequences.'}}
  ]
},
{
  slug:'mr-contrast-agents', chapter:'mr',
  title:{ar:'عوامل التباين في الرنين', en:'MR Contrast Agents'},
  intro:{ar:'عوامل تباين الرنين لا تلوّن الأنسجة بنفسها كما تفعل صبغات الأشعة، بل تغيّر البيئة المغناطيسية حول بروتونات الماء فتعدّل استرخاءها. ولأن أثرها يبدأ من نوع مغناطيسية المادة، يبدأ فهمها من تصنيف المواد بحسب سلوكها في المجال المغناطيسي.',
        en:'MR contrast agents do not stain tissue directly as x-ray dyes do; they alter the magnetic environment around water protons and thereby modify relaxation. Because their effect starts from the magnetic behaviour of the material, understanding them starts with classifying substances by how they behave in a magnetic field.'},
  sections:[
    { h:{ar:'أنواع المغناطيسية في المواد', en:'Types of magnetism'},
      paras:[
        {ar:'تستجيب المواد للمجال المغناطيسي الخارجي بدرجات متباينة جدًا، من التجاوب العنيف إلى التنافر الخفيف. يرتّب الجدول التالي الأنواع الأربعة من حيث سلوكها وأمثلتها المألوفة:',
         en:'Materials respond to an external magnetic field to wildly different degrees, from violent attraction to faint repulsion. The table below arranges the four types by behaviour and familiar examples:'}
      ],
      table:{
        head:[{ar:'النوع', en:'Type'}, {ar:'السلوك في المجال', en:'Behaviour in a field'}, {ar:'أمثلة', en:'Examples'}],
        rows:[
          [{ar:'حديدية المغناطيسية Ferromagnetic', en:'Ferromagnetic'}, {ar:'قابلية مغناطيسية ضخمة: المجال داخلها أقوى بكثير منه خارجها، وتبقى ممغنطة بعد إزالة المجال', en:'Huge susceptibility: the field inside is far stronger than outside, and magnetisation persists after the field is removed'}, {ar:'الحديد، النيكل، الكوبالت', en:'Iron, nickel, cobalt'}],
          [{ar:'فائقة البارامغناطيسية Superparamagnetic', en:'Superparamagnetic'}, {ar:'قابلية متوسطة بين الحديدية والبارامغناطيسية، من مكوّنات حديدية دقيقة', en:'Susceptibility between ferromagnetic and paramagnetic, from fine ferromagnetic particles'}, {ar:'جسيمات أكسيد الحديد', en:'Iron oxide particles'}],
          [{ar:'بارامغناطيسية Paramagnetic', en:'Paramagnetic'}, {ar:'انجذاب ضعيف للمجال وتأثير خفيف فيه، وتختصر زمني T1 وT2', en:'Weak attraction and weak influence on the field; shortens both T1 and T2'}, {ar:'الأكسجين، المغنيسيوم، الغادولينيوم', en:'Oxygen, magnesium, gadolinium'}],
          [{ar:'ديامغناطيسية Diamagnetic', en:'Diamagnetic'}, {ar:'تنافر ضعيف من المجال؛ كبريتات الباريوم مثلًا تُفقد الإشارة في الأمعاء', en:'Weak repulsion from the field; barium sulphate, for example, causes signal loss in bowel'}, {ar:'الماء، النحاس، النيتروجين، كبريتات الباريوم', en:'Water, copper, nitrogen, barium sulphate'}]
        ]
      }},
    { h:{ar:'عوامل T1 البارامغناطيسية وآلية عملها', en:'Paramagnetic T1 agents and how they work'},
      paras:[
        {ar:'تخلق هذه العوامل تشوّهات موضعية صغيرة في المجال المغناطيسي تسرّع استرخاء البروتونات القريبة: تقصُر T1 فترتفع إشارة T1، ويقصُر T2 فتنخفض إشارة T2. قوة أثر T1 لا تعتمد على التركيز وحده، بل على جملة عوامل متداخلة:',
         en:'These agents create small local distortions of the magnetic field that speed up relaxation of nearby protons: T1 shortens, raising T1 signal, and T2 shortens, lowering T2 signal. The strength of the T1 effect depends on more than concentration alone — on a set of interlocking factors:'}
      ],
      bullets:[
        {ar:'تركيز الغادولينيوم في النسيج، ومدى قرب جزيئات الماء منه.',
         en:'The gadolinium concentration in tissue, and how closely water molecules approach it.'},
        {ar:'الحركة الدورانية لجزيء العامل، وعدد جزيئات الماء المرتبطة به، ومدة بقائها بقربه قبل تبادلها.',
         en:'The rotational motion of the agent molecule, the number of water molecules associated with it, and how long they stay before exchanging.'}
      ]},
    { h:{ar:'منحنى التركيز: متى يظلم الغادولينيوم؟', en:'The concentration curve: when gadolinium goes dark'},
      paras:[
        {ar:'يرتفع أثر T1 المُسطّع مع زيادة التركيز حتى تركيز أمثل، ثم تنقلب الآية: عند التراكيز العالية جدًا يغلب أثر تقصير T2 فينخفض حتى إشارة T1. هذا يفسّر مشهدًا مألوفًا: البول المجمّع في المثانة بعد حقن الغادولينيوم قد يبدو منخفض الإشارة رغم امتلائه بالصبغة، لأن الصبغة تراكمت هناك بتركيز تجاوز الأمثل.',
         en:'The brightening T1 effect rises with concentration only up to an optimum; beyond it the balance flips, and at very high concentrations T2 shortening dominates so that even the T1 signal falls. This explains a familiar sight: urine pooled in the bladder after gadolinium injection can look low in signal despite being full of contrast, because the agent has collected there beyond the optimal concentration.'}
      ]},
    { h:{ar:'الغادولينيوم والعوامل الكبدية', en:'Gadolinium and hepatobiliary agents'},
      bullets:[
        {ar:'الغادولينيوم الحر سام، لذلك يُقدَّم دائمًا محبوسًا داخل جزيء مخلّب (chelate) مثل Gd-DTPA، وتختلف العوامل التجارية باختلاف مخلّباتها.',
         en:'Free gadolinium is toxic, so it is always delivered locked inside a chelate molecule such as Gd-DTPA; commercial agents differ mainly in their chelates.'},
        {ar:'عوامل الغادولينيوم القياسية بارامغناطيسية، مرجّحة لـ T1، وتتوزع خارج الخلايا (extracellular)، فتسمح بالتصوير الديناميكي بمراحله: الشريانية والوريدية والتوازنية.',
         en:'Standard gadolinium agents are paramagnetic, T1-weighted in effect and extracellular in distribution, allowing dynamic imaging in arterial, venous and equilibrium phases.'},
        {ar:'العوامل الكبدية الصفراوية تحتوي عادة على المنغنيز، وهي بارامغناطيسية مرجّحة لـ T1 لكنها داخل خلوية: تلتقطها الخلايا الكبدية العاملة في النسيج السليم ببطء، فيمكن التصوير حتى بعد 24 ساعة، وبالمقابل لا تصلح للتصوير الديناميكي.',
         en:'Hepatobiliary agents usually contain manganese; they are paramagnetic T1 agents but intracellular — functioning hepatocytes in healthy liver take them up slowly, so imaging can be delayed up to 24 hours, and correspondingly they cannot be used for dynamic imaging.'}
      ]},
    { h:{ar:'عوامل T2 فائقة البارامغناطيسية: أكسيد الحديد', en:'Superparamagnetic T2 agents: iron oxide'},
      paras:[
        {ar:'تقوم عوامل أكسيد الحديد — SPIO وجسيماتها الأصغر USPIO — على مبدأ معاكس: الاضطراب الموضعي الذي تحدثه في المجال يغيّر تردد البروتونات المارة بقربها، فإذا ابتعد البروتون عاد تردده لكن بطور منزاح، وهذا فقدان تماسك الطور (spin dephasing) يسرّع اضمحلال T2 فتخسر الأنسجة الملتقِطة إشارتها على صور T2، وكلما زاد التركيز ازداد الإظلام.',
         en:'Iron oxide agents — SPIO and its smaller USPIO particles — work on the opposite principle: the local field disturbance they create alters the frequency of protons passing nearby, and when a proton moves away its frequency recovers but with a shifted phase. This spin dephasing accelerates T2 decay, so tissues that take up the agent lose signal on T2 images, darkening further as concentration rises.'},
        {ar:'لا تتسرب هذه الجسيمات إلى النسيج الخلالي، بل تبقى داخل الأوعية حتى يلتقطها الجهاز الشبكي البطاني (reticuloendothelial system)، وتُغلَّف بمواد تعزّز هذا الالتقاط. عمليًا تُحقن قبل التصوير بنحو ساعة لتتاح فرصة الالتقاط، فتظهر الأنسجة الغنية بخلايا هذا الجهاز داكنة على T2.',
         en:'These particles do not leak into the interstitium; they remain intravascular until cleared by the reticuloendothelial system, and they are coated with substances that promote that uptake. In practice they are injected about an hour before imaging to allow uptake, after which reticuloendothelial-rich tissues appear dark on T2.'}
      ]}
  ],
  quiz:[
    { q:{ar:'إلى أي نوع مغناطيسي ينتمي الغادولينيوم؟', en:'To which magnetic type does gadolinium belong?'},
      opts:[
        {ar:'حديدي المغناطيسية Ferromagnetic', en:'Ferromagnetic'},
        {ar:'ديامغناطيسي Diamagnetic', en:'Diamagnetic'},
        {ar:'بارامغناطيسي Paramagnetic', en:'Paramagnetic'},
        {ar:'فائق البارامغناطيسية Superparamagnetic', en:'Superparamagnetic'}
      ],
      a:2,
      why:{ar:'الغادولينيوم بارامغناطيسي: انجذاب ضعيف للمجال، ويختصر T1 وT2 فيرفع إشارة T1 ويخفض إشارة T2.', en:'Gadolinium is paramagnetic: weakly attracted to the field, it shortens T1 and T2, raising T1 signal and lowering T2 signal.'}},
    { q:{ar:'لماذا قد يبدو البول في المثانة منخفض الإشارة على صور T1 بعد حقن الغادولينيوم؟', en:'Why can urine in the bladder appear low in signal on T1 images after gadolinium injection?'},
      opts:[
        {ar:'لأن الغادولينيوم لا يصل إلى المثانة أبدًا', en:'Because gadolinium never reaches the bladder'},
        {ar:'لأن تركيزه هناك تجاوز الأمثل فغلب أثر تقصير T2', en:'Because its concentration there exceeds the optimum and the T2-shortening effect dominates'},
        {ar:'لأن المثانة بعيدة عن ملف الاستقبال', en:'Because the bladder is far from the receiver coil'},
        {ar:'لأن البول Diamagnetic دائمًا', en:'Because urine is always diamagnetic'}
      ],
      a:1,
      why:{ar:'أثر T1 يرتفع مع التركيز حتى حد أمثل، ثم تغلب تأثيرات T2 عند التراكيز العالية جدًا فتُظلم الإشارة رغم وفرة الصبغة.', en:'The T1 effect rises with concentration only to an optimum; at very high concentrations T2 effects take over and the signal darkens despite abundant agent.'}},
    { q:{ar:'كيف تُحدِث عوامل أكسيد الحديد SPIO أثرها في الصورة؟', en:'How do SPIO iron oxide agents produce their image effect?'},
      opts:[
        {ar:'باختصار T1 الدم فيبدو ساطعًا', en:'By shortening blood T1 so it appears bright'},
        {ar:'بإحداث فقدان تماسك طور يسرّع اضمحلال T2 فتُظلم الأنسجة الملتقِطة', en:'By causing spin dephasing that accelerates T2 decay, darkening tissues that take them up'},
        {ar:'بحجب الأشعة عن الكاشف', en:'By blocking radiation from the detector'},
        {ar:'برفع درجة حرارة النسيج', en:'By raising tissue temperature'}
      ],
      a:1,
      why:{ar:'جسيمات أكسيد الحديد فائقة البارامغناطيسية تضطرب بها أطوار البروتونات المجاورة، فيتسارع فقدان إشارة T2 في الأنسجة التي يلتقطها الجهاز الشبكي البطاني.', en:'Superparamagnetic iron oxide particles dephase neighbouring protons, accelerating T2 signal loss in tissues taken up by the reticuloendothelial system.'}}
  ]
},
{
  slug:'diffusion-weighted-imaging', chapter:'mr',
  title:{ar:'التصوير المرجّح بالانتشار', en:'Diffusion Weighted Imaging'},
  intro:{ar:'يقيس التصوير المرجّح بالانتشار (DWI) حركة جزيئات الماء المجهرية نفسها لا مواضعها فقط. فحيث تُقيَّد الحركة — كما في الخلايا المتورمة بعد الجلطة الحادة — تبقى الإشارة عالية، وحيث تنطلق الجزيئات بحرية تتلاشى الإشارة، وهذا ما جعل التسلسل حجر الأساس في تصوير السكتات المبكر.',
        en:'Diffusion weighted imaging (DWI) measures the microscopic motion of water molecules rather than merely their positions. Where motion is restricted — as in the swollen cells of an acute infarct — signal stays high; where molecules move freely it fades, which made this sequence the cornerstone of early stroke imaging.'},
  sections:[
    { h:{ar:'الانتشار ومعامل الانتشار', en:'Diffusion and the diffusion coefficient'},
      paras:[
        {ar:'تتحرك جزيئات الماء عشوائيًا بحركة براونية (Brownian motion)، ويصف معامل الانتشار (diffusion coefficient) مدى حرية هذه الحركة: كلما قطع الجزيء مسافة أكبر في الزمن نفسه كان معامله أعلى. في الماء النقي والهلام تنتشر الجزيئات بلا عوائق تقريبًا، أما داخل الأنسجة الرخوة فتصطدم حركتها بالأغشية الخلوية والعضيات داخل الخلية فتُعاق.',
         en:'Water molecules wander randomly by Brownian motion, and the diffusion coefficient describes how free that motion is: the further a molecule travels in a given time, the higher its coefficient. In pure water and gel, molecules diffuse almost unhindered; inside soft tissue their path is impeded by cell membranes and intracellular organelles.'}
      ]},
    { h:{ar:'التسلسل وتدرّجا الانتشار', en:'The sequence and the diffusion gradients'},
      paras:[
        {ar:'يُبنى DWI غالبًا على تسلسل صدى سبين بتنفيذ تصوير الصدى المستوي (echo-planar imaging, EPI) فائق السرعة، والسرعة هنا ضرورة لا ترف: فالحركة المقاسة مجهرية، وأي حركة جسمانية من المريض ستطغى عليها وتشوّشها. يُضاف تدرّجا انتشار متماثلان على جانبي نبضة 180 درجة: الأول يشتّت أطوار السبينات، والثاني يعيد تجميعها.',
         en:'DWI is usually built on a spin-echo sequence implemented as ultra-fast echo-planar imaging (EPI), and speed here is a necessity, not a luxury: the motion being measured is microscopic, and any gross patient movement would swamp it. Two matching diffusion gradients are placed either side of the 180 degree pulse: the first dephases the spins, the second rephases them.'},
        {ar:'السبين الثابت في مكانه يتلقى التدرّجين بالمقدار نفسه فيعود طوره كاملًا ويعيد إشارة قوية. أما السبين الذي انتقل من موضعه بين التدرّجين فيتلقى أثرًا مختلفًا من التدرّج الثاني فلا يكتمل تجميع طوره وتضيع إشارته. تُطبَّق التدرّجات في ثلاثة اتجاهات متعامدة على الأقل (x وy وz) وغالبًا في 6 إلى 20 اتجاهًا، وتُحسب إشارة الفوكسل متوسطًا لكل الاتجاهات.',
         en:'A spin that stays in place receives both gradients equally, so its phase is fully restored and it returns a strong signal. A spin that has moved between the two gradients experiences a different effect from the second, so its phase is incompletely restored and its signal is lost. The gradients are applied in at least three orthogonal directions (x, y and z), commonly 6 to 20, and the voxel signal is averaged over all directions.'}
      ]},
    { h:{ar:'قيمة b', en:'The b-value'},
      paras:[
        {ar:'تُختصر قوة الترجيح الانتشاري في رقم واحد هو قيمة b: كلما ارتفعت ازدادت حساسية التسلسل لحركة الجزيئات. لكن الحساسية ليست مجانية — فمع ارتفاع b تنقص الإشارة الكلية وترتفع الضوضاء النسبية.',
         en:'The strength of diffusion weighting is summarised in a single number, the b-value: the higher it rises, the more sensitive the sequence becomes to molecular motion. Sensitivity is not free, though — as b rises, overall signal falls and relative noise increases.'},
        {ar:'يمكن رفع قيمة b بثلاث طرق: زيادة سعة تدرّج الانتشار، أو إطالة مدته، أو إطالة الفاصل الزمني بين تدرّج الإزالة وتدرّج إعادة التجميع. وعند b = 0 تكون التدرّجات مطفأة فتنتج صورة مرجّحة بـ T2 تُستخدم لاحقًا أساسًا لحساب الخرائط المشتقة.',
         en:'The b-value can be raised in three ways: increasing the diffusion gradient amplitude, lengthening its duration, or lengthening the interval between the dephasing and rephasing gradients. At b = 0 the gradients are off, producing a T2-weighted image that later serves as the basis for calculated maps.'}
      ],
      nums:[
        {v:'b = 0', ar:'بدون تدرّجات انتشار: صورة T2 أساسية للحسابات', en:'Gradients off: the T2-weighted basis for calculations'},
        {v:'b 600–700', ar:'مفيد في تصوير أدمغة حديثي الولادة وتصوير الجسم', en:'Useful in neonatal brain and body imaging'},
        {v:'b 1000', ar:'ترجيح انتشاري قوي يُستخدم للبحث عن الجلطات الدماغية', en:'Strong diffusion weighting used to look for cerebral infarcts'}
      ]},
    { h:{ar:'خريطة معامل الانتشار الظاهري ADC', en:'The apparent diffusion coefficient (ADC) map'},
      paras:[
        {ar:'صور DWI تحمل ترجيح T2 ضمنيًا، فقد يلمع نسيج ما لأنه مقيّد الانتشار فعلًا أو لمجرد أن إشارته الأصلية على T2 عالية. خريطة ADC صورة محسوبة تزيل أثر T2 هذا: تتناقص إشارة النسيج أسيًا مع ارتفاع b، فإذا رسمنا لوغاريتم الإشارة مقابل قيم b كان ميل الخط المستقيم هو ADC. الأنسجة حرة الانتشار يتغير إشارتها كثيرًا بين قيم b فتميل بشدة ويكون ADC لديها عاليًا وتظهر فاتحة على الخريطة، بينما الآفات المقيّدة تتغير قليلًا فتظهر داكنة على خريطة ADC — وهي العلامة الحاسمة للتقييد الحقيقي.',
         en:'DWI images carry implicit T2 weighting, so a tissue may shine because its diffusion is truly restricted or simply because its native T2 signal is high. The ADC map is a calculated image that strips out this T2 contribution: tissue signal falls exponentially as b rises, and plotting the logarithm of signal against b gives a straight line whose slope is the ADC. Freely diffusing tissue changes signal a lot between b values, giving a steep slope, a high ADC and a bright appearance on the map, whereas restricted lesions change little and appear dark on the ADC map — the decisive sign of true restriction.'}
      ]},
    { h:{ar:'تصوير الموتّر الانتشاري والأخطاء الشائعة', en:'Diffusion tensor imaging and common artefacts'},
      paras:[
        {ar:'إذا كان احتمال الانتشار متساويًا في كل الاتجاهات سُمّي انتشارًا متماثلًا (isotropic) كما في السائل الدماغي الشوكي، أما إذا فضّل الانتشار اتجاهًا على آخر — كما على امتداد الحزم العصبية ومسارات المادة البيضاء — فهو انتشار غير متماثل (anisotropic). DWI القياسي يلغي هذا الأثر بالمتوسط الاتجاهي، بينما يستثمره تصوير الموتّر الانتشاري (DTI) عبر خرائط منها خريطة الكسر غير المتماثل FA التي تقيس درجة اللاتماثل من 0 (متماثل تمامًا) إلى 1، وخرائط اتجاه الانتشار الرئيس الملوّنة، وخرائط تتبّع الألياف (fibre tracking) التي ترسم المسارات العصبية بدءًا من فوكسل بذرة يختاره المستخدم.',
         en:'If diffusion probability is equal in every direction it is isotropic, as in CSF; if diffusion favours one direction — along nerve bundles and white-matter tracts — it is anisotropic. Standard DWI removes this effect by directional averaging, whereas diffusion tensor imaging (DTI) exploits it through maps such as fractional anisotropy (FA), which grades asymmetry from 0 (perfectly isotropic) to 1, colour-coded principal-direction maps, and fibre-tracking maps that trace neural pathways from a user-chosen seed voxel.'}
      ],
      bullets:[
        {ar:'لمعان T2 المخترق (T2 shine-through): لمعان على DWI سببه إشارة T2 أصلية عالية لا تقييد حقيقي، وتفضحه خريطة ADC فاتحة اللون.',
         en:'T2 shine-through: brightness on DWI caused by high native T2 signal rather than true restriction, exposed by a bright ADC map.'},
        {ar:'إظلام T2 المخترق (T2 dark-through): آفة منخفضة الإشارة أصلًا على T2 تظهر منخفضة على DWI رغم أنها ليست حرة الانتشار بالضرورة.',
         en:'T2 dark-through: a lesion with low native T2 signal appears dark on DWI even though its diffusion is not necessarily free.'},
        {ar:'خطأ المعادن ونواتج الدم: تدرّجات الانتشار حساسة جدًا لأي اضطراب في المجال المحلي بسبب الترجيح T2*، فينشأ فقدان إشارة واسع حول المعدن وتسلوك إشارة غير متوقع عند النزف.',
         en:'Metal and blood-product artefact: the T2* weighting makes DWI very susceptible to local field disruption, producing large signal loss around metal and unpredictable signal in haemorrhage.'}
      ]}
  ],
  quiz:[
    { q:{ar:'ماذا يحدث لإشارة سبين انتقل من موضعه بين تدرّجي الانتشار في DWI؟', en:'What happens to the signal of a spin that moves position between the two diffusion gradients in DWI?'},
      opts:[
        {ar:'تتضاعف إشارته', en:'Its signal doubles'},
        {ar:'لا يكتمل تجميع طوره فتضيع إشارته', en:'Its phase is incompletely rephased and its signal is lost'},
        {ar:'ينعكس لونها على خريطة ADC فقط', en:'Only its colour on the ADC map changes'},
        {ar:'تتحول إلى إشارة دهون', en:'It converts to fat signal'}
      ],
      a:1,
      why:{ar:'التدرّج الثاني يعيد تجميع طور السبينات الثابتة فقط؛ من تحرّك يتلقى أثرًا مختلفًا فيبقى مشتّت الطور ولا يعيد إشارة.', en:'The second gradient fully rephases only stationary spins; a spin that moved receives a mismatched effect, stays dephased and returns no signal.'}},
    { q:{ar:'قيمة b = 1000 تُستخدم نموذجيًا من أجل:', en:'A b-value of 1000 is typically used for:'},
      opts:[
        {ar:'حساب خريطة ADC وحدها', en:'Calculating the ADC map alone'},
        {ar:'تصوير أدمغة حديثي الولادة', en:'Neonatal brain imaging'},
        {ar:'البحث عن الجلطات الدماغية بترجيح انتشاري قوي', en:'Looking for cerebral infarcts with strong diffusion weighting'},
        {ar:'إنتاج الصورة الأساسية المرجّحة بـ T2', en:'Producing the T2-weighted baseline image'}
      ],
      a:2,
      why:{ar:'b العالية تعني حساسية كبيرة للانتشار مع إشارة أقل وضوضاء أكثر، وتُستخدم بقيمة 1000 لكشف احتشاء الدماغ، أما b = 0 فهي صورة الأساس.', en:'High b means strong diffusion sensitivity with less signal and more noise; b 1000 is used for cerebral infarct detection, while b = 0 is the baseline image.'}},
    { q:{ar:'آفة لامعة على DWI ولامعة أيضًا على خريطة ADC، فأغلب الظن أنها:', en:'A lesion that is bright on DWI and also bright on the ADC map most likely represents:'},
      opts:[
        {ar:'تقييد انتشار حقيقي كجلطة حادة', en:'True restricted diffusion, such as an acute infarct'},
        {ar:'لمعان T2 مخترق (T2 shine-through) بلا تقييد حقيقي', en:'T2 shine-through without true restriction'},
        {ar:'خطأ معدن مؤكد', en:'Definite metal artefact'},
        {ar:'نسيجًا ميتًا مظلمًا', en:'Dark necrotic tissue'}
      ],
      a:1,
      why:{ar:'التقييد الحقيقي يُظلم على خريطة ADC؛ فإذا بقيت الآفة فاتحة على الخريطة فلمعانها على DWI مصدره إشارة T2 الأصلية العالية.', en:'True restriction is dark on the ADC map; if the lesion stays bright on the map, its DWI brightness comes from high native T2 signal instead.'}}
  ]
},
{
  slug:'mr-spectroscopy', chapter:'mr',
  title:{ar:'المطيافية بالرنين المغناطيسي', en:'MR Spectroscopy'},
  intro:{ar:'المطيافية بالرنين (MRS) تقنية تصوير جزيئي بامتياز: بدل أن تسأل أين يقع النسيج، تسأل ما الذي يحتويه، إذ تقيس تراكيز مستقلَبات معينة داخل المنطقة المصوَّرة. تستفيد من أن لكل مستقلَب تردد Larmor يخصّه قليلًا، فتفصل قممها على طيف واحد كما تُفصل المكونات في التحليل الكيميائي.',
        en:'MR spectroscopy (MRS) is a molecular imaging technique par excellence: instead of asking where tissue is, it asks what it contains, measuring the concentrations of specific metabolites within the imaged region. It exploits the fact that each metabolite has its own slightly different Larmor frequency, separating their peaks along one spectrum much like components in a chemical analysis.'},
  sections:[
    { h:{ar:'المبدأ واختيار النواة', en:'Principle and choice of nucleus'},
      paras:[
        {ar:'يُرسَم الطيف بوضع قوة الإشارة (أي تركيز المستقلَب) مقابل تردده بوحدات الجزء في المليون (ppm). ويمكن استهداف أنوية أخرى مثل الكربون-13 والفوسفور-31، لكن بروتون الهيدروجين-1 هو الأشيع لأسباب ثلاثة: حساسيته العالية، ووفرة نظيره الكاملة تقريبًا (100٪)، وغزارة البروتونات في معظم المستقلَبات، فتكون الإشارة أكبر.',
         en:'The spectrum plots signal strength (that is, metabolite concentration) against frequency in parts per million (ppm). Other nuclei such as carbon-13 and phosphorus-31 can be targeted, but the hydrogen-1 proton is by far the most common for three reasons: its high sensitivity, the roughly 100% natural abundance of the isotope, and the plentiful protons in most metabolites, giving a larger signal.'},
        {ar:'ثمن هذه القدرة معلوم سلفًا: الدقة المكانية منخفضة، والمنطقة القابلة للفحص محدودة، والتقنية شديدة الحساسية لعدم تجانس المجال المحلي — وتسوء الصورة قرب العظم والكالسيوم ونواتج الدم — ويمكن تحسينها بموازنة المجال (shimming) لجعله أكثر تجانسًا قبل الفحص.',
         en:'The price of this capability is known in advance: spatial resolution is low, only a limited area can be examined, and the technique is very sensitive to local field inhomogeneity — worst near bone, calcium and blood products — though shimming the field to homogenise it beforehand can improve matters.'}
      ]},
    { h:{ar:'المستقلَبات الرئيسة ودلالاتها', en:'The main metabolites and what they mean'},
      paras:[
        {ar:'لكل مستقلَب موقع ثابت على محور ppm ودور حيوي يفسّر دلالته السريرية. يرتّب الجدول التالي أهمها باختصار:',
         en:'Each metabolite has a fixed position on the ppm axis and a biological role that explains its clinical meaning. The table below arranges the key ones briefly:'}
      ],
      table:{
        head:[{ar:'المستقلَب', en:'Metabolite'}, {ar:'الموضع (ppm)', en:'Position (ppm)'}, {ar:'دلالته', en:'Significance'}],
        rows:[
          [{ar:'NAA — ن-أسيتيل أسبارتات', en:'NAA (N-acetylaspartate)'}, {ar:'2.0', en:'2.0'}, {ar:'علامة العصبونات السليمة: ينقص مع أي فقد عصبي، ويرتفع في داء كانافان', en:'Healthy neuronal marker: falls with any neuronal loss, rises in Canavan disease'}],
          [{ar:'Cho — الكولين', en:'Choline (Cho)'}, {ar:'3.2', en:'3.2'}, {ar:'علامة أغشية الخلايا واستقلابها: يرتفع في الأورام ونزع الميالين', en:'Cell membrane and turnover marker: rises in tumours and demyelination'}],
          [{ar:'Cr — الكرياتين', en:'Creatine (Cr)'}, {ar:'3.0', en:'3.0'}, {ar:'علامة استقلاب الطاقة، وقمته شبه ثابتة فيُستخدم مرجعًا للمقارنة', en:'Energy metabolism marker; its peak is nearly constant, so it serves as a reference'}],
          [{ar:'mI — الميوإنوسيتول', en:'Myoinositol (mI)'}, {ar:'3.6', en:'3.6'}, {ar:'علامة الخلايا الدبقية: يرتفع في الأورام الدبقية والتصلب المتعدد، وينقص في التهاب الدماغ الهربسي', en:'Glial marker: rises in gliomas and multiple sclerosis, falls in herpetic encephalitis'}],
          [{ar:'Lac — اللاكتات', en:'Lactate (Lac)'}, {ar:'1.3 (قمة مزدوجة)', en:'1.3 (doublet)'}, {ar:'ناتج التنفس اللاهوائي: يرتفع في نقص التروية والنوبات والأورام واضطرابات الميتوكوندريا', en:'Product of anaerobic respiration: rises in ischaemia, seizures, tumours and mitochondrial disorders'}],
          [{ar:'Lip — الدهون', en:'Lipids (Lip)'}, {ar:'0.9 و1.4', en:'0.9 and 1.4'}, {ar:'ترتفع في الأورام النخرية', en:'Rise in necrotic tumours'}],
          [{ar:'Glx — الغلوتامات والغلوتامين وGABA', en:'Glx (glutamate, glutamine, GABA)'}, {ar:'2.1–2.5', en:'2.1–2.5'}, {ar:'نواقل عصبية داخل خلوية: ترتفع في الاعتلال الدماغي الكبدي', en:'Intracellular neurotransmitters: rise in hepatic encephalopathy'}]
        ]
      }},
    { h:{ar:'فوكسل واحد أم فوكسلات متعددة؟', en:'Single voxel or multivoxel?'},
      table:{
        head:[{ar:'وجه المقارنة', en:'Aspect'}, {ar:'الفوكسل الأحادي SVS', en:'Single-voxel (SVS)'}, {ar:'تعدد الفوكسلات CSI', en:'Multivoxel (CSI)'}],
        rows:[
          [{ar:'التغطية', en:'Coverage'}, {ar:'فوكسل واحد مختار: تغطية صغيرة جدًا', en:'One chosen voxel: very small coverage'}, {ar:'شبكة فوكسلات ثنائية أو ثلاثية الأبعاد: تغطية أوسع', en:'A 2D or 3D array of voxels: wider coverage'}],
          [{ar:'SNR والتلوث الطيفي', en:'SNR and contamination'}, {ar:'SNR أعلى وبلا تلوث طيفي من الجيران', en:'Higher SNR and no spectral contamination'}, {ar:'SNR أقل واحتمال تلوث من الفوكسلات المجاورة', en:'Lower SNR and possible contamination from neighbouring voxels'}],
          [{ar:'الزمن والدقة', en:'Time and resolution'}, {ar:'أسرع لكن بدقة مكانية أقل', en:'Faster but lower spatial resolution'}, {ar:'أطول زمنًا ودقة أعلى، وحساسية أكبر لعدم تجانس المجال', en:'Longer, higher resolution, more vulnerable to field inhomogeneity'}]
        ]
      }},
    { h:{ar:'خطوات إجراء الفحص', en:'Performing the examination'},
      bullets:[
        {ar:'أولًا كبح إشارة الماء: بروتونات الماء وفيرة جدًا وقمتها العملاقة ستحجب قمم المستقلَبات الصغيرة، فتُشبَّع انتقائيًا بتسلسل CHESS (الانتقاء الكيميائي) قبل القياس.',
         en:'First, suppress the water signal: water protons are so abundant that their giant peak would bury the small metabolite peaks, so it is selectively saturated beforehand with a CHESS (chemical shift selective) sequence.'},
        {ar:'ثانيًا اختيار الفوكسل أو الفوكسلات: في SVS بتقاطع نبضات في ثلاثة مستويات متعامدة عند الفوكسل المطلوب، وفي CSI بخطوات ترميز طور توزّع الشبكة.',
         en:'Second, select the voxel or voxels: in SVS by intersecting pulses in three orthogonal planes at the target voxel, in CSI by phase-encoding steps that lay out the grid.'},
        {ar:'ثالثًا اكتساب الطيف بتسلسلات موضعية أشهرها PRESS وSTEAM، ثم قراءة القمم ومواضعها على محور ppm.',
         en:'Third, acquire the spectrum with localised sequences, most commonly PRESS and STEAM, then read the peaks and their positions along the ppm axis.'}
      ]}
  ],
  quiz:[
    { q:{ar:'مستقلَب NAA عند 2.0 ppm علامة على:', en:'NAA at 2.0 ppm is a marker of:'},
      opts:[
        {ar:'أغشية الخلايا المتحللة', en:'Breaking-down cell membranes'},
        {ar:'العصبونات السليمة: ينقص عند فقدها', en:'Healthy neurons: it falls when they are lost'},
        {ar:'التنفس اللاهوائي', en:'Anaerobic respiration'},
        {ar:'الخلايا الدبقية', en:'Glial cells'}
      ],
      a:1,
      why:{ar:'NAA علامة العصبون الصحي، فينخفض في أي حالة تدمّر العصبونات (ويرتفع استثنائيًا في داء كانافان).', en:'NAA marks healthy neurons, so it falls in any condition that destroys neurons (rising exceptionally in Canavan disease).'}},
    { q:{ar:'لماذا تُكبح إشارة الماء بتسلسل CHESS قبل قياس الطيف؟', en:'Why is the water signal suppressed with CHESS before measuring the spectrum?'},
      opts:[
        {ar:'لأن الماء يسبب حركة مزعجة', en:'Because water causes troublesome motion'},
        {ar:'لأن قمة الماء الهائلة ستحجب قمم المستقلَبات الضعيفة', en:'Because the huge water peak would mask the weak metabolite peaks'},
        {ar:'لأن الماء يرفع حرارة النسيج', en:'Because water heats the tissue'},
        {ar:'لأن الماء يلغي تدرّجات الانتشار', en:'Because water cancels the diffusion gradients'}
      ],
      a:1,
      why:{ar:'بروتونات الماء أكثر وفرة من بروتونات المستقلَبات بمراحل، وبدون تشبيع انتقائي لإشارتها لن تُرى القمم الصغيرة أصلًا.', en:'Water protons vastly outnumber metabolite protons; without selective saturation of their signal, the small peaks would never be seen at all.'}},
    { q:{ar:'ارتفاع قمة الكولين Cho عند 3.2 ppm يشير نموذجيًا إلى:', en:'A raised choline (Cho) peak at 3.2 ppm typically indicates:'},
      opts:[
        {ar:'نسيج طبيعي تمامًا', en:'Completely normal tissue'},
        {ar:'زيادة دوران أغشية الخلايا كما في الأورام ونزع الميالين', en:'Increased cell membrane turnover, as in tumours and demyelination'},
        {ar:'احتشاء قديم متكلس دائمًا', en:'Always an old calcified infarct'},
        {ar:'نقص تروية لحظي فقط', en:'Momentary ischaemia only'}
      ],
      a:1,
      why:{ar:'الكولين مرتبط ببناء أغشية الخلايا وتفكيكها، فيرتفع حيث يتسارع دوران الأغشية: نمو الأورام وتفكك الميالين.', en:'Choline is tied to cell membrane synthesis and breakdown, so it rises where membrane turnover accelerates: tumour growth and myelin breakdown.'}}
  ]
},
{
  slug:'mr-artefacts', chapter:'mr',
  title:{ar:'أخطاء صور الرنين', en:'MR Artefacts'},
  intro:{ar:'أخطاء الرنين ليست عشوائية؛ كل خطأ يحمل بصمة آليته: اتجاه ظهوره وموضعه وشكله يدلّون على مصدره. تُرتَّب الأخطاء عمليًا في عائلات: الحركة، والتشوّه وعدم تجانس المجال، والترددات الراديوية، وجمع البيانات، وأخطاء خاصة بتسلسلات بعينها — ومن يتقن قراءة البصمة يصلح السبب بدل مطاردة العرَض.',
        en:'MR artefacts are not random; each carries the fingerprint of its mechanism, with its direction, position and shape pointing to its source. In practice they fall into families: motion, distortion and field inhomogeneity, radiofrequency, data collection, and sequence-specific artefacts — and whoever reads the fingerprint can fix the cause instead of chasing the symptom.'},
  sections:[
    { h:{ar:'أخطاء الحركة والتدفق', en:'Motion and flow artefacts'},
      paras:[
        {ar:'حركة المريض الطوعية وحركة القلب والتنفس كلها تُنتج الشيء نفسه: نسخًا باهتة مكررة من الصورة تُسمّى الظلال (ghosting) منزاحة على امتداد اتجاه ترميز الطور، لأن الخطأ يُكتب صفًا بعد صف في بيانات الطور. ويعالج كل مصدر بأداته: تسلسلات اللقطة الواحدة فائقة السرعة، أو البوابة القلبية ECG gating لحركة القلب، أو حبس النفس، أو صدى الملاح (navigator echo) الذي لا يسمح بالاكتساب إلا عندما تكون حدود الرئة والكبد داخل نافذة قبول محددة، أو تبديل اتجاهي الطور والتردد لنقل الظلال بعيدًا عن المنطقة المهمة.',
         en:'Voluntary patient movement, cardiac motion and breathing all produce the same thing: faint repeated copies of the image — ghosting — displaced along the phase-encoding direction, because the error is written line by line into the phase data. Each source has its remedy: ultra-fast single-shot sequences, ECG gating for cardiac motion, breath-holding, or a navigator echo that only permits acquisition when the lung–liver boundary sits within an acceptance window, or swapping phase and frequency directions to move the ghosts away from the region of interest.'}
      ]},
    { h:{ar:'التشوّه وعدم تجانس المجال', en:'Distortion and field inhomogeneity'},
      paras:[
        {ar:'المعادن داخل الجسم هي أشهر ملوّثات المجال المحلي، وتفسد الصورة بطريقتين: فقدان تماسك طور المغنطة العرضية بسرعة فلا يعود صدى (فقدان إشارة)، وتشوّه هندسي لأن اضطراب المجال يغيّر تردد Larmor فيُرمَّز الموضع خطأً. فواصل الهواء والسوائل تحدث أثرًا مشابهًا بدرجة أخف.',
         en:'Metal within the body is the commonest disturber of the local field and corrupts the image in two ways: transverse magnetisation dephases so fast that no echo returns (signal loss), and geometric distortion, because the disturbed field changes the Larmor frequency and position is encoded wrongly. Air–fluid interfaces produce a similar, milder effect.'},
        {ar:'مصدر تشوّه آخر هو لاخطية التدرّجات: التدرّجات المصممة لتكون خطية تنحني فعليًا قرب حواف مجال الرؤية، فيحدث التشوّه في اتجاهي التردد والطور معًا؛ ولأن هذا الانحناء معروف مسبقًا تصحّحه البرمجيات تلقائيًا في العادة. وتبقى حدود الأنسجة مختلفة القابلية المغناطيسية مصدرًا دائمًا لاضطرابات موضعية صغيرة.',
         en:'Another source of distortion is gradient non-linearity: gradients designed to be linear actually roll off near the edges of the field of view, distorting the image in both frequency and phase directions; because this roll-off is known in advance, software usually corrects it automatically. Boundaries between tissues of differing magnetic susceptibility remain a constant source of small local disturbances.'}
      ]},
    { h:{ar:'الدهون والماء: الانزياح والإلغاء وفشل التشبع', en:'Fat and water: shift, cancellation and failed saturation'},
      bullets:[
        {ar:'الانزياح الكيميائي (chemical shift): بروتونات الدهون والماء عند الموضع نفسه تختلف ترددًا، فيُسجَّل أحدهما منزاحًا في اتجاه ترميز التردد — وهو أثر حدودي بين نسجين (macroscopic).',
         en:'Chemical shift: fat and water protons at the same location differ in frequency, so one is registered displaced in the frequency-encoding direction — a boundary effect between two tissues (macroscopic).'},
        {ar:'إلغاء الدهون والماء (fat/water cancellation): داخل الفوكسل الواحد تدور إشارتا الدهون والماء داخل الطور وخارجه دوريًا، فإذا اختير TE معيّن (2.24 ms عند 1.5 T) تعاكس الطوران فألغت الإشارتان بعضهما ورسما خطًا أسود على حدود الأنسجة الحاوية لكليهما — وهو أثر دهون مجهرية (microscopic) يُستغل إيجابيًا في تصوير الكبد خارج الطور لكشف التسلل الدهني.',
         en:'Fat/water cancellation: within a single voxel, fat and water signals cycle in and out of phase, and at a chosen TE (2.24 ms at 1.5 T) they oppose and cancel, drawing a black line at boundaries of mixed tissue — an effect of microscopic fat, exploited positively in opposed-phase liver imaging to reveal fatty infiltration.'},
        {ar:'تشبع الدهون (fat saturation) يقمع إشارة الدهون العيانية بنبضة RF ضيقة مركّزة على قمة الدهون، ويفشل عندما تنزاح قمة الدهون عن موضعها المتوقع — كما قرب محيطات تشريحية سريعة التغير (الكاحل والقدم) أو عند لاخطية المجال في أطراف الصورة — فلا تصيب النبضة هدفها وتبقى الدهون ساطعة.',
         en:'Fat saturation suppresses macroscopic fat with a narrow RF pulse centred on the fat peak; it fails when the fat peak shifts from its expected position — near rapidly changing anatomical contours (ankle and foot) or with field non-linearity at the image periphery — so the pulse misses its target and fat stays bright.'}
      ]},
    { h:{ar:'أخطاء الترددات الراديوية وجمع البيانات', en:'RF and data-collection artefacts'},
      bullets:[
        {ar:'اختيار الملفات الخاطئ: عنصر ملف مطفأ داخل مجال الرؤية يعني منطقة بلا إشارة، وعنصر مشغّل خارج المجال قد يلتقط حركة من بعيد ويلفّها أشباحًا على الصورة.',
         en:'Improper coil selection: a coil element switched off inside the FOV means a signal-free region, while an element left on outside the FOV can pick up distant motion and wrap it onto the image as ghosts.'},
        {ar:'الإشارات الراديوية الدخيلة: إشعاعات RF من خارج غرفة غير محجّبة جيدًا أو من معدات معيبة داخلها تنضاف إلى البيانات فتظهر شريط ضوضاء في اتجاه ترميز الطور تردده يحدّد موضعه.',
         en:'Spurious RF signals: RF leaking from outside an inadequately shielded room, or from faulty equipment inside it, adds to the data as a band of noise in the phase-encoding direction, its position set by its frequency.'},
        {ar:'التفاف الطور (phase wrap): بنية واقعة خارج مجال الرؤية في اتجاه الطور تُلَفّ وتظهر داخله، وعلاجه مجال رؤية كافٍ أو أخذ عيّنات زائدة (over-sampling) في ذلك الاتجاه عند الحاجة إلى مجال صغير.',
         en:'Phase wrap: a structure lying outside the FOV in the phase direction is folded back into the image; the cure is an adequate phase-direction FOV, or over-sampling in that direction when a small FOV is required.'},
        {ar:'البيانات الشاذة وفضاء K: أي نقطة بيانات دخيلة تُكتب موجة في فضاء K فتتحول في الصورة إلى خطأ عظم السمكة (herringbone) من أشرطة فاتحة وداكنة متناوبة، ومصادره معدات معيبة أو شحنات ساكنة على الملابس.',
         en:'Spurious data and k-space: any stray data point is written into k-space as a wave and emerges in the image as a herringbone artefact of alternating light and dark bands; sources include malfunctioning equipment and static build-up on clothing.'},
        {ar:'رنين الحواف (Gibbs artefact): عند حدود حادة بين نسيجين تظهر خطوط متموجة موازية للحد، وتقل كلما زادت نقاط البيانات؛ وأخطر مواضعه العمود الفقري حيث قد يصنع تموّج الحد بين الحبل الشوكي والسائل الدماغي آفات زائفة داخل الحبل.',
         en:'Gibbs (edge ringing) artefact: wavy lines parallel to a sharp boundary between two tissues, diminishing as more data points are acquired; its most dangerous site is the spine, where ringing at the cord–CSF boundary can manufacture pseudo-lesions inside the cord.'}
      ]},
    { h:{ar:'أخطاء خاصة بتسلسلات بعينها', en:'Sequence-specific artefacts'},
      bullets:[
        {ar:'التصوير بالصدى المستوي EPI: يُكتسب فضاء K كله بإثارة واحدة، لكن اتجاهًا يُقرأ بسرعة وآخر ببطء، فتتشوه الصورة قرب أي عدم تجانس موضعي — حول الجيوب الأنفية والمحاجر نموذجًا — ويخفف ذلك بالاكتساب المتوازي أو متعدد اللقطات. كما قد يظهر شبح N/2: نسخة باهتة منزاحة بمقدار نصف مجال الرؤية في اتجاه الطور من عدم اصطفاف الأصداء ذهابًا وإيابًا، وعلاجه معايرة دقيقة للتدرّجات.',
         en:'Echo-planar imaging (EPI): all of k-space is acquired in one excitation, but one direction is read fast and the other slowly, so the image distorts near any local inhomogeneity — around the sinuses and orbits, typically — eased by parallel or multi-shot acquisition. An N/2 ghost may also appear: a faint copy shifted by half the FOV in the phase direction from misaligned back-and-forth echoes, cured by careful gradient calibration.'},
        {ar:'الصدى السبين السريع FSE: كلما طال قطار الأصداء (echo-train length) زاد ترجيح T2 المتأخر فتتموّه الصورة في اتجاه الطور، وهو ثمن السرعة في هذا التسلسل.',
         en:'Fast spin echo (FSE): the longer the echo-train length, the more late echoes are T2-decayed, blurring the image in the phase direction — the price of speed in this sequence.'},
        {ar:'السبق الحر المستقر SSFP: عدم تجانس المجال المحلي ينتج أشرطة (banding) من فراغات إشارة وتداخلات بنّاءة وهدّامة لأصداء محفّزة، فيرسم نمطًا مخططًا مميزًا.',
         en:'Steady-state free precession (SSFP): local field inhomogeneity produces banding — stripes of signal void where stimulated echoes interfere destructively between regions of constructive interference.'}
      ]}
  ],
  quiz:[
    { q:{ar:'أشباح الحركة (ghosting) تظهر منزاحة على امتداد أي اتجاه؟', en:'Motion ghosting appears displaced along which direction?'},
      opts:[
        {ar:'اتجاه ترميز التردد', en:'The frequency-encoding direction'},
        {ar:'اتجاه ترميز الطور', en:'The phase-encoding direction'},
        {ar:'اتجاه اختيار الشريحة حصرًا', en:'The slice-select direction exclusively'},
        {ar:'لا علاقة لها بالاتجاهات', en:'It has no relation to direction'}
      ],
      a:1,
      why:{ar:'الحركة تفسد بيانات الطور سطرًا بعد سطر أثناء الاكتساب المتكرر، فتتوزع النسخ الشبحية على اتجاه ترميز الطور.', en:'Motion corrupts the phase data line by line during repeated acquisition, so the ghost copies spread along the phase-encoding direction.'}},
    { q:{ar:'عند قوة مجال 1.5 T، قيمة TE التي تلغي فيها إشارتا الدهون والماء بعضهما داخل الفوكسل تساوي تقريبًا:', en:'At 1.5 T, the TE at which fat and water signals cancel within a voxel is approximately:'},
      opts:[
        {ar:'0.5 ms', en:'0.5 ms'},
        {ar:'2.24 ms', en:'2.24 ms'},
        {ar:'10 ms', en:'10 ms'},
        {ar:'100 ms', en:'100 ms'}
      ],
      a:1,
      why:{ar:'عند 2.24 ms تكون إشارتا الدهون والماء متعاكستي الطور تمامًا فتلغيان بعضهما، وهو أساس التصوير خارج الطور ورسم الحد الأسود.', en:'At 2.24 ms the fat and water signals are exactly opposed in phase and cancel — the basis of opposed-phase imaging and the India-ink boundary.'}},
    { q:{ar:'خطأ عظم السمكة (herringbone) من أشرطة فاتحة وداكنة متناوبة ينتج عن:', en:'The herringbone artefact of alternating light and dark bands results from:'},
      opts:[
        {ar:'حركة تنفس المريض', en:'Patient breathing motion'},
        {ar:'نقطة بيانات شاذة واحدة دخلت فضاء K كشحنة ساكنة أو عطل معدات', en:'A single spurious data point entering k-space, such as static discharge or faulty equipment'},
        {ar:'سماكة شريحة كبيرة', en:'Excessive slice thickness'},
        {ar:'ارتفاع قيمة b', en:'A high b-value'}
      ],
      a:1,
      why:{ar:'أي بيانات دخيلة تُرمَّز في فضاء K كموجة وتنتشر على الصورة كلها بنمط متموّج متناوب — نمط عظم السمكة.', en:'Any spurious data are encoded in k-space as a wave and spread across the whole image in an alternating wavy pattern — the herringbone.'}}
  ]
},
{
  slug:'mr-safety', chapter:'mr',
  title:{ar:'سلامة الرنين المغناطيسي', en:'MR Safety'},
  intro:{ar:'مخاطر الرنين لا تأتي من إشعاع مؤيّن، بل من ثلاث قوى صامتة: المجال الساكن القوي دائم الحضور، وموجات التردد الراديوي المسخّنة، والتدرّجات المتغيرة زمنيًا وضجيجها. السلامة هنا منظومة حدود مرقّمة ومناطق محكومة، من خط الخمسة غاوس إلى حدود SAR المعيارية.',
        en:'The hazards of MRI come not from ionising radiation but from three silent forces: the powerful, ever-present static field, heating radiofrequency waves, and time-varying gradients with their noise. Safety here is a system of numbered limits and controlled zones, from the 5 Gauss line to standardised SAR limits.'},
  sections:[
    { h:{ar:'المجال المغناطيسي الساكن وحدود التعرض', en:'The static magnetic field and exposure limits'},
      paras:[
        {ar:'المغناطيس مشغّل دائمًا حتى خارج أوقات الفحص، ولهذا تُدار السلامة بالمناطق والحدود. ترسم إرشادات MHRA البريطانية سقوفًا لتعرض الجسم كله تتدرج بحسب نمط التشغيل: فالوضع العادي للمرضى حتى 4 T، والوضع المحكوم حتى 8 T، أما الحوامل فيُفضَّل بقاؤهن دون 2.5 T. العاملون حدودهم أضيق: أقل من 2 T للجسم كله و5 T للأطراف، وألا يتجاوز متوسط التعرض خلال 24 ساعة 0.2 T.',
         en:'The magnet is always on, even outside scanning hours, so safety is managed by zones and limits. UK MHRA guidance sets whole-body exposure ceilings that rise with operating mode: for patients, up to 4 T in normal mode and 8 T in controlled mode, while pregnant patients should preferably stay below 2.5 T. Staff limits are tighter: under 2 T whole-body and 5 T for limbs, with the 24-hour average exposure not exceeding 0.2 T.'},
        {ar:'يُرسَم حول الغرفة خط الخمسة غاوس (5 Gauss line) حيث تبلغ شدة المجال الشارد 0.5 mT، وداخل هذا الحد منطقة محكومة لا يجوز أن يدخلها من يحمل موانع للرنين كمنظّمات ضربات القلب دون تقييم، لأن المجال عند هذا المستوى قد يعبث بعمل الأجهزة المزروعة. والقوة نفسها تتحول إلى خطر مقذوفي (projectile effect) إذا دخل جسم حديدي المغناطيسية مجالَ جذب المغناطيس، ولذلك يبقى الفرز والفحص قبل الدخول خط الدفاع الأول.',
         en:'Around the room runs the 5 Gauss line, where the fringe field reaches 0.5 mT; inside it lies a controlled area that people with MR contraindications — such as pacemaker carriers — must not enter without assessment, because at this level the field can disturb implanted devices. The same force becomes a projectile hazard if a ferromagnetic object enters the magnet attraction zone, which is why screening before entry remains the first line of defence.'}
      ],
      table:{
        head:[{ar:'نمط التشغيل (مرضى، جسم كامل)', en:'Operating mode (patients, whole body)'}, {ar:'حد المجال', en:'Field limit'}],
        rows:[
          [{ar:'عادي Normal', en:'Normal'}, {ar:'4.0 T', en:'4.0 T'}],
          [{ar:'محكوم Controlled', en:'Controlled'}, {ar:'8.0 T', en:'8.0 T'}],
          [{ar:'بحثي Research', en:'Research'}, {ar:'بلا حد مقرّر', en:'No set limit'}],
          [{ar:'الحوامل', en:'Pregnancy'}, {ar:'أقل من 2.5 T', en:'Less than 2.5 T'}]
        ]
      },
      nums:[
        {v:'0.5 mT', ar:'شدة المجال عند خط الخمسة غاوس (5 Gauss)', en:'Field strength at the 5 Gauss line'},
        {v:'0.2 T', ar:'أقصى متوسط تعرض للعاملين خلال 24 ساعة', en:'Maximum 24-hour average staff exposure'}
      ]},
    { h:{ar:'التسخين بالترددات الراديوية ومعدل SAR', en:'RF heating and SAR'},
      paras:[
        {ar:'نبضات RF موجات كهرومغناطيسية متذبذبة تولّد تيارات داخل أنسجة المريض فتنتج حرارة على نحو يشبه التسخين بالميكروويف. يُقاس هذا الترسيب الطاقي بمعدل الامتصاص النوعي SAR بوحدة واط لكل كيلوغرام من النسيج، وتقابل كل وحدة SAR واحدة ارتفاعًا تقريبيًا في حرارة الجسم كله مقداره نصف درجة مئوية. وتضبط توصيات ICNIRP أنماط التشغيل بسقوف مزدوجة: ارتفاع حرارة الجسم المركزية وحدود حرارة موضعية (الرأس 38° والجذع 39° والأطراف 40° في الوضعين العادي والمحكوم).',
         en:'RF pulses are oscillating electromagnetic waves that induce currents in patient tissues and generate heat, much like microwave heating. This energy deposition is measured as the specific absorption rate, SAR, in watts per kilogram of tissue, and each unit of SAR corresponds to roughly a 0.5 degree rise in whole-body temperature. ICNIRP recommendations cap the operating modes with dual limits: core temperature rise and local temperature ceilings (head 38, trunk 39 and extremities 40 degrees in both normal and controlled modes).'}
      ],
      table:{
        head:[{ar:'النمط', en:'Mode'}, {ar:'ارتفاع حرارة الجسم المركزية', en:'Core temperature rise'}, {ar:'SAR للجسم كله (W/kg)', en:'Whole-body SAR (W/kg)'}],
        rows:[
          [{ar:'عادي Normal', en:'Normal'}, {ar:'0.5 °C', en:'0.5 °C'}, {ar:'2', en:'2'}],
          [{ar:'محكوم Controlled', en:'Controlled'}, {ar:'1 °C', en:'1 °C'}, {ar:'4', en:'4'}],
          [{ar:'مقيّد Restricted', en:'Restricted'}, {ar:'2 °C', en:'2 °C'}, {ar:'أكثر من 4', en:'More than 4'}]
        ]
      }},
    { h:{ar:'ما الذي يرفع SAR؟', en:'What raises SAR?'},
      bullets:[
        {ar:'قوة المجال الساكن: SAR يتناسب مع مربع شدة المجال، فمضاعفة المجال من 1.5 T إلى 3 T ترفع SAR أربع مرات.',
         en:'Static field strength: SAR scales with the square of field strength, so doubling the field from 1.5 T to 3 T quadruples SAR.'},
        {ar:'زاوية القلب: نبضة 180° ترسّب طاقة أكثر بكثير من نبضة 90°، ولذلك تسلسلات صدى السبين بنبضاتها الكبيرة السريعة أعلى SAR من صدى التدرّج بنبضاته الأصغر — وإن كانت تقنية زمن الطيران استثناءً بارتفاع SAR رغم كونها صدى تدرّج لأن نبضاتها تُطلق بسرعة فائقة.',
         en:'Flip angle: a 180 degree pulse deposits far more energy than a 90 degree pulse, so spin-echo sequences with their large rapid pulses carry higher SAR than gradient-echo sequences with smaller pulses — time-of-flight MRA being an exception, with high SAR despite being gradient echo because its pulses are applied extremely rapidly.'},
        {ar:'حجم الجزء المصوَّر وموصليته: الأجزاء الكبيرة والأنسجة عالية الموصلية (الدم والدماغ والكبد والسائل الدماغي) تسخن أكثر من الأجزاء الصغيرة والأنسجة ضعيفة الموصلية (العظم والنخاع والدهون).',
         en:'Size and conductivity of the imaged part: large body parts and highly conductive tissues (blood, brain, liver, CSF) heat more than small parts and poorly conductive tissues (bone, marrow, fat).'},
        {ar:'مرضى معرّضون أكثر: من لا ينظّمون حرارة أجسامهم جيدًا (فشل القلب، الحمى، الحمل لخطر تسخين الجنين، وأدوية كالموسّعات الوعائية والمهدّئات ومدرّات البول)، ومن هم داخل جبيرة، ومن لا يستطيعون الإبلاغ عن إحساسهم بالحرارة.',
         en:'Patients at greater risk: those who thermoregulate poorly (heart failure, fever, pregnancy because of fetal heating, and drugs such as vasodilators, tranquillisers and diuretics), patients in a cast, and patients unable to communicate heat sensations.'}
      ]},
    { h:{ar:'تقليل SAR عمليًا', en:'Reducing SAR in practice'},
      bullets:[
        {ar:'إطالة TR بحيث تُطلق نبضات RF على فترات أبعد.', en:'Lengthen TR so RF pulses are applied less rapidly.'},
        {ar:'تقليل زاوية القلب (flip angle) وعدد الشرائح في الاكتساب الواحد وعدد الأصداء في التسلسلات متعددة الأصداء.', en:'Reduce the flip angle, the number of slices per acquisition, and the number of echoes in multi-echo sequences.'},
        {ar:'التناوب بين تسلسلات عالية ومنخفضة SAR، وتبريد الغرفة، وتلبيس المريض ملابس خفيفة.', en:'Alternate high- and low-SAR sequences, cool the room, and dress the patient in light clothing.'}
      ]},
    { h:{ar:'التدرّجات والضوضاء والحروق وإخماد المغناطيس', en:'Gradients, noise, burns and quench'},
      paras:[
        {ar:'التدرّجات المتغيرة زمنيًا تحفّز الأعصاب الطرفية إذا اشتدّت وتباطأ ضبطها، وهي مصدر الضجيج العالي المميز للفحص بسبب اهتزاز ملفات التدرّج تحت قوى المجال، ولذلك تُعدّ حماية السمع للمريض والمرافقين جزءًا من السلامة لا رفاهية. أما الحروق فتنشأ عندما تشكل الأسلاك أو حلقات الجلد المتلامسة هوائيات رنينية (resonant antenna effect) تركز تيارات RF في نقطة صغيرة، ويُتجنّب ذلك بمنع تلامس الجلد بالجلد وعزل الكابلات وعدم لفّها.',
         en:'Time-varying gradients can stimulate peripheral nerves if driven too hard, and they are the source of the characteristic loud noise, from gradient coils vibrating under field forces, so hearing protection for patient and companions is part of safety, not a luxury. Burns arise when leads or skin-to-skin loops form resonant antennae that concentrate RF currents at one point; they are avoided by preventing skin-to-skin contact, padding cables and never coiling them.'},
        {ar:'أخيرًا يبقى إخماد المغناطيس (quench): فقدان مفاجئ للفرط موصلية يغلي معه الهيليوم السائل ويتمدّد هائلًا، فيطرد الأكسجين من الغرفة ويهدّد بالاختناق وبقضمة الصقيع، ويُفقد المغناطيس وقته طويلًا؛ ولذلك تُصمَّم أنابيب تهوية للإخماد وتُعامل زرّ الإخماد الطارئ كخيار أخير لحالات الطوارئ الحقيقية كاحتجاز شخص بجسم معدني.',
         en:'Finally there is quench: a sudden loss of superconductivity boils off the liquid helium, which expands enormously, displacing oxygen from the room and threatening asphyxiation and cold burns, while the magnet is lost for a long period. Quench vent pipes are therefore engineered in, and the emergency quench button is a last resort for genuine emergencies such as a person pinned by a metal object.'}
      ]}
  ],
  quiz:[
    { q:{ar:'خط الخمسة غاوس يقابل شدة مجال قدرها:', en:'The 5 Gauss line corresponds to a field strength of:'},
      opts:[
        {ar:'5 T', en:'5 T'},
        {ar:'0.5 mT', en:'0.5 mT'},
        {ar:'50 mT', en:'50 mT'},
        {ar:'0.2 T', en:'0.2 T'}
      ],
      a:1,
      why:{ar:'خمسة غاوس تساوي 0.5 mT، وهو حد المنطقة المحكومة التي لا يدخلها حاملو موانع الرنين دون تقييم.', en:'Five Gauss equals 0.5 mT, the boundary of the controlled area that people with MR contraindications must not enter unassessed.'}},
    { q:{ar:'عند الانتقال من جهاز 1.5 T إلى 3 T مع بقاء التسلسل كما هو، يتغير SAR بمقدار:', en:'Moving from a 1.5 T to a 3 T scanner with the same sequence changes SAR by:'},
      opts:[
        {ar:'لا يتغير', en:'No change'},
        {ar:'يتضاعف مرتين', en:'It doubles'},
        {ar:'يزيد أربع مرات', en:'It increases fourfold'},
        {ar:'ينقص إلى النصف', en:'It halves'}
      ],
      a:2,
      why:{ar:'SAR يتناسب مع مربع شدة المجال الساكن، فمضاعفة المجال تربّع الأثر: 2² = 4 أضعاف.', en:'SAR is proportional to the square of static field strength, so doubling the field squares the effect: 2 squared = 4 times.'}},
    { q:{ar:'حدّ SAR للجسم كله في نمط التشغيل العادي يساوي:', en:'The whole-body SAR limit in normal operating mode is:'},
      opts:[
        {ar:'0.5 W/kg', en:'0.5 W/kg'},
        {ar:'2 W/kg', en:'2 W/kg'},
        {ar:'4 W/kg', en:'4 W/kg'},
        {ar:'8 W/kg', en:'8 W/kg'}
      ],
      a:1,
      why:{ar:'في النمط العادي سقف SAR للجسم كله 2 W/kg مع ارتفاع حرارة مركزية لا يتجاوز 0.5 درجة، ويرتفع السقف إلى 4 في النمط المحكوم.', en:'In normal mode the whole-body SAR ceiling is 2 W/kg with core temperature rise capped at 0.5 degrees, rising to 4 W/kg in controlled mode.'}}
  ]
},
{
  slug:'dual-energy-ct', chapter:'mr',
  title:{ar:'الأشعة المقطعية ثنائية الطاقة', en:'Dual Energy CT'},
  intro:{ar:'صورة CT التقليدية تخبرنا بمقدار التوهين الكلي داخل كل فوكسل، لكنها لا تستطيع أن تجزم بماهية المادة المسبّبة له. التصوير ثنائي الطاقة (DECT) يلتقط البيانات عند طاقتي شعاع مختلفتين فيستطيع — بفضل اختلاف سلوك التأثير الكهروضوئي مع الطاقة والعدد الذري — أن يفكّك الفوكسل إلى مواده المكوّنة.',
        en:'A conventional CT image reports the total attenuation within each voxel but cannot say which material caused it. Dual-energy CT (DECT) acquires data at two different beam energies and — thanks to how photoelectric absorption varies with energy and atomic number — can decompose a voxel into its constituent materials.'},
  sections:[
    { h:{ar:'لماذا طاقتان لا طاقة واحدة؟', en:'Why two energies, not one?'},
      paras:[
        {ar:'عند طاقة واحدة قد تعطي مادتان مختلفتان التوهين نفسه فتندمجان في الصورة بلا تمييز، كاليود والكالسيوم مثلًا. لكن توهين كل مادة يتغير مع طاقة الشعاع بإيقاع يخصّها، فإذا قسنا التوهين عند طاقتين منخفضة وعالية أمكن حلّ معادلتين بمجهولين وتحديد نسبة كل مادة أساسية داخل الفوكسل، وهذا هو التحليل المادي (material decomposition).',
         en:'At a single energy, two different materials can attenuate identically and merge indistinguishably in the image — iodine and calcium, for example. But each material attenuation changes with beam energy in its own characteristic way, so measuring attenuation at a low and a high energy lets us solve two equations in two unknowns and determine the proportion of each basis material in the voxel: material decomposition.'},
        {ar:'المحرك الفيزيائي لهذا الاختلاف هو التأثير الكهروضوئي (photoelectric effect) تحديدًا، لأنه — بخلاف تشتت كومبتون — حساس بشدة للعدد الذري ولطاقة الفوتون، فتتضخم فروق المواد عند الطاقات المنخفضة حيث يهيمن هذا التأثير.',
         en:'The physical engine of this difference is specifically the photoelectric effect, because — unlike Compton scatter — it is exquisitely sensitive to atomic number and photon energy, so material differences are magnified at low energies where this interaction dominates.'}
      ]},
    { h:{ar:'التأثير الكهروضوئي وحافة K', en:'The photoelectric effect and the K-edge'},
      paras:[
        {ar:'في التأثير الكهروضوئي يقذف الفوتون الوارد إلكترونًا من الغلاف الداخلي الأعمق K في الذرة، بشرط أن تفوق طاقة الفوتون طاقة ارتباط (binding energy) ذلك الإلكترون، ثم يهبط إلكترون من غلاف أبعد لملء الفراغ. فإذا تجاوزت طاقة الفوتون طاقة ارتباط الغلاف K بقليل فقط قفز احتمال الامتصاص فجأة — وهذه القفزة هي حافة K (K-edge) — وموقعها على سلم الطاقة يرتفع بازدياد العدد الذري للعنصر، فيصير بصمة تعريف للمادة.',
         en:'In the photoelectric effect, an incoming photon ejects an electron from the innermost K shell of an atom, provided the photon energy exceeds that electron binding energy; an electron from a farther shell then drops in to fill the vacancy. If the photon energy rises just above the K-shell binding energy, the probability of absorption jumps suddenly — the K-edge — and its position on the energy scale climbs with the element atomic number, making it a fingerprint of the material.'}
      ],
      table:{
        head:[{ar:'المادة', en:'Substance'}, {ar:'حافة K (keV)', en:'K-edge (keV)'}, {ar:'العدد الذري Z', en:'Atomic number Z'}],
        rows:[
          [{ar:'الأكسجين', en:'Oxygen'}, {ar:'0.53', en:'0.53'}, {ar:'8', en:'8'}],
          [{ar:'الكالسيوم', en:'Calcium'}, {ar:'4.0', en:'4.0'}, {ar:'20', en:'20'}],
          [{ar:'اليود', en:'Iodine'}, {ar:'33.2', en:'33.2'}, {ar:'53', en:'53'}],
          [{ar:'الباريوم', en:'Barium'}, {ar:'37.45', en:'37.45'}, {ar:'56', en:'56'}],
          [{ar:'الغادولينيوم', en:'Gadolinium'}, {ar:'50.2', en:'50.2'}, {ar:'64', en:'64'}]
        ]
      },
      bullets:[
        {ar:'حافتا اليود (33.2 keV) والباريوم (37.45 keV) تقعان داخل مدى طاقات أشعة التشخيص، وهذا ما يجعلهما صبغتين قويتين وما يجعل فصلهما ممكنًا بالطاقتين.',
         en:'The K-edges of iodine (33.2 keV) and barium (37.45 keV) fall within the diagnostic x-ray energy range, which is what makes them strong contrast agents and what makes dual-energy separation of them possible.'}
      ]},
    { h:{ar:'طرق الحصول على الطاقتين', en:'Ways of acquiring two energies'},
      bullets:[
        {ar:'مصدران مزدوجان (dual source): أنبوبان وكاشفان بزوايا متعامدة تقريبًا يعملان بجهدين مختلفين في وقت واحد.',
         en:'Dual source: two tubes and two detectors mounted roughly at right angles, running simultaneously at different voltages.'},
        {ar:'التبديل السريع للجهد (rapid kVp switching): أنبوب واحد يقفز جهده بين منخفض وعالٍ مئات المرات في الدورة الواحدة.',
         en:'Rapid kVp switching: a single tube flicking its voltage between low and high hundreds of times per rotation.'},
        {ar:'كاشف مزدوج الطبقة (dual-layer detector): طبقتان تمتص العليا الطاقات المنخفضة والسفلى ما تبقى من العالية، بحزمة واحدة وجهد واحد.',
         en:'Dual-layer detector: two stacked layers, the upper absorbing low energies and the lower the remaining high energies, from a single beam at one voltage.'},
        {ar:'طرق متتابعة أقدم: فحصان متتاليان بجهدين مختلفين، أو مرشّح منقسم (split filter) يقسم الحزمة طوليًا إلى نصفين بطاقتين.',
         en:'Older sequential approaches: two successive scans at different voltages, or a split filter dividing the beam lengthwise into two halves at different energies.'}
      ]},
    { h:{ar:'الصور المشتقة والتطبيقات', en:'Derived images and applications'},
      bullets:[
        {ar:'خرائط اليود (iodine maps): تعرض توزيع اليود وحده وكمّه، فتكشف التروية ونقصها داخل الأعضاء.',
         en:'Iodine maps: display the distribution and quantity of iodine alone, revealing perfusion and its defects within organs.'},
        {ar:'صور افتراضية بلا صبغة (virtual non-contrast): حذف مكوّن اليود حسابيًا من فحص مصبوغ لتعطي صورة تحاكي الفحص قبل الحقن، فتُوفَّر جرعة فحص إضافي.',
         en:'Virtual non-contrast images: computationally removing the iodine component from a contrast scan to mimic a pre-contrast image, sparing the dose of an extra acquisition.'},
        {ar:'صور أحادية الطاقة الافتراضية (virtual monoenergetic): إعادة بناء البيانات كما لو التُقطت بطاقة واحدة مختارة؛ الطاقات المنخفضة ترفع تباين اليود، والعالية تخفف أخطاء تصلب الحزمة والأخطاء المعدنية.',
         en:'Virtual monoenergetic images: reconstructing the data as if acquired at one chosen energy; low energies boost iodine contrast, while high energies reduce beam-hardening and metal artefacts.'},
        {ar:'تمييز المواد سريريًا: فصل حمض اليوريك عن الكالسيوم في حصوات الكلى والنقرس، وإزالة العظم آليًا في تصوير الأوعية، وقياس دهون الكبد والحديد كمّيًا.',
         en:'Clinical material separation: distinguishing uric acid from calcium in renal stones and gout, automatic bone removal in angiography, and quantitative liver fat and iron measurement.'}
      ]}
  ],
  quiz:[
    { q:{ar:'يفصل التصوير ثنائي الطاقة بين المواد داخل الفوكسل بالاعتماد أساسًا على اختلاف:', en:'Dual-energy CT separates materials within a voxel mainly by exploiting differences in:'},
      opts:[
        {ar:'تشتت كومبتون عند طاقة واحدة', en:'Compton scatter at one energy'},
        {ar:'الامتصاص الكهروضوئي عند طاقتين مختلفتين', en:'Photoelectric absorption at two different energies'},
        {ar:'أزمنة استرخاء T1 للأنسجة', en:'Tissue T1 relaxation times'},
        {ar:'سرعة دوران الجانتري', en:'Gantry rotation speed'}
      ],
      a:1,
      why:{ar:'التأثير الكهروضوئي حساس للعدد الذري والطاقة معًا، فقياس التوهين عند طاقتين يكشف بصمة كل مادة ويتيح التحليل المادي.', en:'The photoelectric effect is sensitive to both atomic number and energy, so measuring attenuation at two energies reveals each material fingerprint and enables decomposition.'}},
    { q:{ar:'حافة K لعنصر اليود تساوي تقريبًا:', en:'The K-edge of iodine is approximately:'},
      opts:[
        {ar:'4.0 keV', en:'4.0 keV'},
        {ar:'33.2 keV', en:'33.2 keV'},
        {ar:'50.2 keV', en:'50.2 keV'},
        {ar:'140 keV', en:'140 keV'}
      ],
      a:1,
      why:{ar:'حافة K لليود عند 33.2 keV (Z = 53)، وهي داخل مدى طاقات التشخيص، فتقفز عندها امتصاصيته قفزة تجعله صبغة قوية وقابلًا للفصل بالطاقتين.', en:'The iodine K-edge lies at 33.2 keV (Z = 53), inside the diagnostic energy range, where its absorption jumps — making it a strong contrast agent and separable at two energies.'}},
    { q:{ar:'كيف تُنتج الصور الافتراضية بلا صبغة (virtual non-contrast)؟', en:'How are virtual non-contrast images produced?'},
      opts:[
        {ar:'بإعادة فحص المريض قبل الحقن بيوم', en:'By rescanning the patient the day before injection'},
        {ar:'بحذف مكوّن اليود حسابيًا من بيانات الفحص المصبوغ عبر التحليل المادي', en:'By computationally removing the iodine component from contrast-enhanced data via material decomposition'},
        {ar:'بتقليل جهد الأنبوب إلى النصف', en:'By halving the tube voltage'},
        {ar:'باستخدام مرشّح نحاسي سميك', en:'By using a thick copper filter'}
      ],
      a:1,
      why:{ar:'بعد فصل المواد بمكوّناتها، يُستبعد مكوّن اليود ويُعاد بناء الباقي فيعطي صورة تحاكي ما قبل الصبغة بلا جرعة إضافية.', en:'Once materials are decomposed, the iodine component is excluded and the remainder reconstructed, mimicking a pre-contrast image with no extra dose.'}}
  ]
}
];
