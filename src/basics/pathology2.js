export const LESSONS = [
{
  slug:"bowel-pathology", chapter:"abdomen",
  title:{ar:"أمراض الأمعاء", en:"Bowel Pathology"},
  intro:{
    ar:"تُعد أمراض الأمعاء من أكثر ما يواجهه طالب الأشعة في فحص البطن، ويتصدرها الانسداد بنوعيه والالتهابات ثم نقص التروية. يعتمد التشخيص غالبًا على التصوير المقطعي (CT) مع الصبغة، مع دور مهم للأشعة العادية في إظهار التمدد ومستويات الهواء والسائل.",
    en:"Bowel disorders are among the commonest abdominal problems a radiology student will meet, headed by obstruction, inflammation and ischaemia. CT with contrast does most of the diagnostic work, while the plain radiograph still shows dilatation and air-fluid levels well."},
  sections:[
    { h:{ar:"انسداد الأمعاء الدقيقة", en:"Small bowel obstruction"},
      paras:[
        {ar:"يحدث انسداد الأمعاء الدقيقة (Small bowel obstruction) غالبًا بسبب الالتصاقات بعد العمليات الجراحية، أو الفتوق، أو حصوة مرارية تعلق داخل الأمعاء (Gallstone ileus). تتسع الحلقات الواقعة قبل مكان الانسداد بينما تنخمص الحلقات بعده، وتسمى نقطة الالتقاء بين الجزأين نقطة الانتقال (Transition point)، وهي التي تحدد موضع الانسداد بدقة.",
         en:"Small bowel obstruction is most often caused by post-surgical adhesions, herniae, or a gallstone impacted in the lumen (gallstone ileus). Loops before the blockage dilate while those beyond it collapse; the junction between the two is the transition point, and it pinpoints the site of obstruction."},
        {ar:"يظهر في التصوير تمدد الحلقات القريبة من الانسداد مع مستويات متعددة من الهواء والسائل (Air-fluid levels). ويجب تمييز الانسداد الحقيقي عن العِلّوص (Ileus) الذي ينتج عن اضطرابات الأملاح أو بعد العمليات، ففيه تتمدد الأمعاء دون وجود نقطة انتقال.",
         en:"Imaging shows dilated loops proximal to the blockage with multiple air-fluid levels. True obstruction must be separated from ileus, which follows metabolic disturbance or surgery and produces dilatation without any transition point."}
      ]},
    { h:{ar:"انسداد الأمعاء الغليظة وقاعدة 3-6-9", en:"Large bowel obstruction and the 3-6-9 rule"},
      paras:[
        {ar:"أهم أسباب انسداد الأمعاء الغليظة (Large bowel obstruction) هي سرطانات القولون، ومرض الرتوج، والالتواء (Volvulus). يتسع القولون قبل موضع الانسداد، أما الأمعاء الدقيقة فقد تتسع أو لا بحسب كفاءة الصمام اللفائفي الأعوري (Ileocaecal valve).",
         en:"The main causes of large bowel obstruction are colorectal cancers, diverticular disease and volvulus. The colon dilates upstream of the blockage, while the small bowel may or may not dilate depending on whether the ileocaecal valve is competent."},
        {ar:"الصمام كفء عند نحو 70% من الناس؛ وحينها يحبس محتويات القولون فلا تتسع الأمعاء الدقيقة، لكن القولون نفسه يتمدد بسرعة وبدرجة أكبر، فيرتفع خطر انثقابه. أما إذا كان الصمام غير كفء فرّغ القولون جزءًا من محتوياته رجوعًا إلى الأمعاء الدقيقة فتتسع هي أيضًا.",
         en:"The valve is competent in about 70% of people; when it is, colonic contents are trapped, the small bowel stays normal, but the colon distends faster and further, raising the risk of perforation. An incompetent valve decompresses the colon backwards, so the small bowel dilates as well."}
      ],
      nums:[
        {v:"> 3 cm", ar:"قطر يدل على تمدد الأمعاء الدقيقة", en:"Diameter indicating dilated small bowel"},
        {v:"> 6 cm", ar:"قطر يدل على تمدد الأمعاء الغليظة", en:"Diameter indicating dilated large bowel"},
        {v:"> 9 cm", ar:"قطر يدل على تمدد الأعور", en:"Diameter indicating a dilated caecum"}
      ]},
    { h:{ar:"التهابات الأمعاء", en:"Bowel inflammation"},
      paras:[
        {ar:"أشهر سبب لالتهاب الأمعاء الدقيقة هو داء كرون (Crohn disease) الذي يصيب مناطق متقطعة على طول الأمعاء، وأكثرها اللفائفي الانتهائي (Terminal ileum). ومن مضاعفاته الانثقاب مع هواء حر خارج الأمعاء، والخراجات، والنواسير إلى أعضاء مجاورة، والتضيقات التي تسد الأمعاء.",
         en:"The commonest cause of small bowel inflammation is Crohn disease, which involves patchy segments along the whole gut, most often the terminal ileum. Its complications include perforation with free gas outside the bowel, abscesses, fistulae to neighbouring structures, and strictures that obstruct."},
        {ar:"في التصوير المقطعي يظهر جدار الأمعاء الملتهب بما يشبه علامة الهدف (Target sign): تتعزز الطبقتان المصلية والمخاطية فتبدوان ساطعتين لكثرة تدفق الدم، بينما يبدو وسط الجدار داكنًا منخفض الكثافة بسبب الوذمة. وينطبق المظهر نفسه على التهاب القولون.",
         en:"On CT the inflamed bowel wall shows a target sign: the serosa and mucosa enhance brightly from increased blood flow, while the middle of the wall stays dark and low in attenuation because of oedema. The same appearance is seen in colitis."},
        {ar:"في الأمعاء الغليظة يكون الالتهاب الأشهر هو التهاب القولون التقرحي (Ulcerative colitis) الذي يصيب جزءًا متصلًا من القولون يبدأ غالبًا من المستقيم، إضافة إلى الأسباب المعدية مثل عدوى المطثية العسيرة (Clostridium difficile) التي قد يرافقها استسقاء. وإذا شمل الالتهاب القولون كله سمي التهاب القولون الشامل (Pancolitis)، وقد يتطور الحالان إلى تضخم القولون السام (Toxic megacolon) أي تمدد شديد في القولون.",
         en:"In the large bowel the classic inflammation is ulcerative colitis, which affects a continuous length of colon, usually starting in the rectum; infective causes such as Clostridium difficile are also common and may be accompanied by ascites. Disease involving the whole colon is pancolitis, and either condition can progress to toxic megacolon, a marked colonic dilatation."}
      ]},
    { h:{ar:"التهاب الزائدة ومرض الرتوج", en:"Appendicitis and diverticular disease"},
      paras:[
        {ar:"يظهر التهاب الزائدة الدودية (Appendicitis) في أي عمر؛ وفي الأطفال يجب التفكير في بديل شائع وحميد هو التهاب العقد المساريقية (Mesenteric adenitis)، بينما يُبحث عند كبار السن عن سرطان أعوري كامن. يمكن تأكيد التشخيص بالموجات فوق الصوتية (Ultrasound)، وإن كانت الزائدة كثيرًا ما لا تُرى بسبب غاز الأمعاء فوقها.",
         en:"Appendicitis can occur at any age. In children a common, harmless mimic to consider is mesenteric adenitis, while in older patients an underlying caecal cancer should be sought. Ultrasound can confirm the diagnosis, although the appendix is often hidden by overlying bowel gas."},
        {ar:"علامات الالتهاب في التصوير: زائدة متسعة ممتلئة بسائل، مع تغيّر مظهر الدهون حولها بما يسمى تختّل الدهون (Fat stranding)، وقد يوجد حصاة برازية عالية الكثافة عند قاعدتها أو كتلة نسيجية مرافقة. أما الرتج (Diverticulum) فهو جيب صغير منبثق من جدار الأمعاء، وتعدد الجيوب دون التهاب هو الرتاج (Diverticulosis)، فإذا التهب أحدها فهو التهاب الرتوج (Diverticulitis).",
         en:"Imaging features include a dilated, fluid-filled appendix with fat stranding around it, and sometimes a dense faecolith at its base or an associated soft tissue mass. A diverticulum is a single small outpouching of the bowel wall; many outpouchings without inflammation amount to diverticulosis, while inflammation of one is diverticulitis."},
        {ar:"يصيب التهاب الرتوج عادة من تجاوز الأربعين ويتركز في القولون السيني (Sigmoid colon)، ويُلقب أحيانًا بالتهاب الزائدة الأيسر لتشابه أعراضه. تظهر الرتوج في التصوير المقطعي جيوبًا صغيرة متعددة، فإذا التهبت رافقها تختّل دهون حولها مع احتمال انثقاب موضعي أو تجمعات صغيرة.",
         en:"Diverticulitis typically affects people over 40, on a background of diverticulosis, and centres on the sigmoid colon; it is sometimes nicknamed left-sided appendicitis because the presentation is so similar. CT shows the multiple small outpouchings, and when inflamed there is surrounding fat stranding with possible localised perforation or collections."}
      ]},
    { h:{ar:"نقص تروية الأمعاء واحتشاؤها", en:"Ischaemic and infarcted bowel"},
      paras:[
        {ar:"ينشأ نقص تروية الأمعاء (Bowel ischaemia) عن قصور شرياني كالخثار أو الصمة، أو عن انسداد وريدي، أو كمضاعفة لانسداد الأمعاء نفسه. وتتنوع مظاهره في التصوير بين تغير كثافة جدار الأمعاء ارتفاعًا أو انخفاضًا، وتمدد الأمعاء، واحتقان المساريقا، مع عيب امتلاء داخل الشريان المغذي.",
         en:"Bowel ischaemia results from arterial insufficiency such as thrombosis or embolism, from venous obstruction, or as a consequence of bowel obstruction itself. Appearances vary: the bowel wall may be of high or low density, the bowel distends, the mesentery becomes congested, and a filling defect may be seen in the feeding artery."},
        {ar:"حين يموت النسيج ويتغنغر يبدأ بإنتاج الغاز، فيظهر الغاز داخل جدار الأمعاء (Pneumatosis)، ثم يحمله الوريد البابي (Portal vein) الذي يصرف جدران الأمعاء إلى الكبد، فيظهر غاز الوريد البابي متفرعًا داخل الكبد، وهو علامة تنذر بخطر شديد. يجب تمييزه عن هواء القنوات الصفراوية (Pneumobilia) الذي يشبهه لكنه داخل القنوات الصفراوية الكبدية، كما في ناسور بين الأمعاء والمرارة.",
         en:"Dead, gangrenous bowel starts to produce gas, so gas appears within the bowel wall (pneumatosis) and is then carried by the portal vein, which drains the bowel wall, into the liver. Portal venous gas shows a branching pattern through the liver and is a grave, premorbid sign. It must not be confused with pneumobilia, gas inside the intrahepatic bile ducts, which looks similar but occurs with a fistula between bowel and gallbladder."}
      ]}
  ],
  quiz:[
    { q:{ar:"وفق قاعدة 3-6-9، أي قياس يدل على تمدد الأعور (Caecum)؟", en:"According to the 3-6-9 rule, which measurement indicates a dilated caecum?"},
      opts:[{ar:"أكثر من 3 cm", en:"More than 3 cm"},{ar:"أكثر من 6 cm", en:"More than 6 cm"},{ar:"أكثر من 9 cm", en:"More than 9 cm"},{ar:"أكثر من 12 cm", en:"More than 12 cm"}], a:2,
      why:{ar:"القاعدة تربط التمدد بالقطر: الأمعاء الدقيقة أكثر من 3 cm، والغليظة أكثر من 6 cm، والأعور أكثر من 9 cm.", en:"The rule links dilatation to diameter: small bowel over 3 cm, large bowel over 6 cm, and caecum over 9 cm."}},
    { q:{ar:"في انسداد القولون مع صمام لفائفي أعوري كفء، ماذا يُتوقع؟", en:"In large bowel obstruction with a competent ileocaecal valve, what is expected?"},
      opts:[{ar:"تتسع الأمعاء الدقيقة والقولون معًا بالتساوي", en:"Small bowel and colon dilate equally together"},{ar:"يبقى القولون طبيعيًا وتتسع الأمعاء الدقيقة فقط", en:"The colon stays normal and only the small bowel dilates"},{ar:"لا تتسع الأمعاء الدقيقة لكن القولون يتمدد أكثر وأسرع مع خطر انثقاب أعلى", en:"The small bowel does not dilate, but the colon distends more and faster with a higher perforation risk"},{ar:"لا يحدث أي تمدد", en:"No dilatation occurs at all"}], a:2,
      why:{ar:"الصمام الكفء (عند نحو 70% من الناس) يحبس محتويات القولون، فيتمدد القولون وحده بسرعة ويرتفع خطر انثقابه.", en:"A competent valve, present in about 70% of people, traps colonic contents, so the colon alone distends quickly with a greater perforation risk."}},
    { q:{ar:"ما الفرق الصحيح بين غاز الوريد البابي وهواء القنوات الصفراوية (Pneumobilia)؟", en:"What correctly distinguishes portal venous gas from pneumobilia?"},
      opts:[{ar:"لا فرق بينهما، فهما الاسمان نفسهما للظاهرة ذاتها", en:"There is no difference; they are two names for the same finding"},{ar:"غاز الوريد البابي داخل أوردة الكبد البابية ويدل على احتشاء الأمعاء، أما الآخر فداخل القنوات الصفراوية", en:"Portal venous gas lies in the portal venous system and signals bowel infarction, while pneumobilia lies in the bile ducts"},{ar:"هواء القنوات الصفراوية علامة أخطر دائمًا", en:"Pneumobilia is always the more dangerous sign"},{ar:"غاز الوريد البابي يظهر فقط في الموجات فوق الصوتية", en:"Portal venous gas is only seen on ultrasound"}], a:1,
      why:{ar:"غاز الوريد البابي يصل إلى الكبد عبر الوريد البابي من جدار أمعاء محتشٍ، بينما هواء القنوات الصفراوية داخل شجرة صفراوية كما في النواسير.", en:"Portal venous gas reaches the liver through the portal vein from infarcted bowel wall, whereas pneumobilia sits in the biliary tree, as with a fistula."}}
  ]
},
{
  slug:"hpb-pathology", chapter:"abdomen",
  title:{ar:"أمراض الكبد والمرارة والبنكرياس", en:"Liver, Gallbladder and Pancreas Pathology"},
  intro:{
    ar:"تغطي هذه المجموعة أهم آفات الكبد والقنوات الصفراوية والبنكرياس التي يراها طالب الأشعة: نقائل الكبد وخراجاته، وحصوات المرارة والتهابها، وسرطان البنكرياس والتهابه. تتقاسم الوسائط الأدوار هنا: الموجات فوق الصوتية أولًا للمرارة، والتصوير المقطعي للكبد والبنكرياس.",
    en:"This group covers the liver, biliary and pancreatic lesions a student meets most often: liver metastases and abscesses, gallstones and cholecystitis, and pancreatic cancer and pancreatitis. Modalities share the work: ultrasound leads for the gallbladder, CT for the liver and pancreas."},
  sections:[
    { h:{ar:"النقائل الثانوية إلى الكبد", en:"Secondary metastases to the liver"},
      paras:[
        {ar:"تنتقل سرطانات الجهاز الهضمي كثيرًا إلى الكبد، لأن الدم الوريدي العائد من الأمعاء يمر أولًا عبر الجهاز البابي الكبدي (Hepatic portal system) قبل عودته إلى الدورة العامة، فيعمل الكبد مرشحًا أول للخلايا السرطانية. وبحسب عدد النقائل ومواضعها قد يمكن استئصال الأجزاء المصابة من الكبد.",
         en:"Cancers of the gastrointestinal tract commonly spread to the liver because venous blood returning from the bowel passes first through the hepatic portal system before rejoining the general circulation, making the liver the first filter for tumour cells. Depending on their number and sites, resection of the involved liver segments may be possible."},
        {ar:"تظهر النقائل في التصوير مناطق غير منتظمة متغايرة منخفضة التوهين. وتشمل البدائل المشابهة لها الكيسات الكبدية البسيطة، والآفات الحميدة كالورم الوعائي (Haemangioma)، وخراجات الكبد؛ ويساعد قياس وحدات هاونسفيلد (HU) في التمييز بينها، إضافة إلى الصورة السريرية كوجود الحمى.",
         en:"Metastases appear as irregular, heterogeneous areas of low attenuation. The main look-alikes are simple liver cysts, benign lesions such as haemangioma, and liver abscesses. Measuring the Hounsfield unit (HU) value helps separate them, and clinical features such as fever are also very useful."}
      ]},
    { h:{ar:"خراج الكبد", en:"Liver abscess"},
      paras:[
        {ar:"تتنوع مسببات خراج الكبد: بكتيرية متعددة الميكروبات غالبًا مثل الإشريكية القولونية والكلبسيلة والمكورات العقدية والمكورات المعوية، أو فطرية كالمبيضات، أو أميبية من المتحولة الحالة للنسج، إضافة إلى الأكياس المائية (Hydatid cysts).",
         en:"Liver abscesses have varied causes: usually polymicrobial bacterial infection such as E. coli, Klebsiella, streptococci and enterococci; fungal infection such as Candida; amoebic infection with Entamoeba histolytica; and hydatid cysts."},
        {ar:"تظهر الخراجات البكتيرية والفطرية عادة آفات متعددة متجمعة في عناقيد، بينما يكون الخراج الأميبي غالبًا آفة واحدة كبيرة. وقد يظهر مع الخراج سببُه الأصلي في الفحص نفسه، كانسداد صفراوي أو التهاب رتوج أو التهاب زائدة.",
         en:"Bacterial and fungal abscesses usually appear as multiple clustered lesions, whereas an amoebic abscess is typically a single large lesion. The underlying cause, such as biliary obstruction, diverticulitis or appendicitis, may also be visible on the same study."}
      ]},
    { h:{ar:"حصوات المرارة", en:"Gallstones"},
      paras:[
        {ar:"الموجات فوق الصوتية (Ultrasound) هي الفحص المعياري الذهبي لحصوات المرارة؛ فقد تفوت التصويرَ المقطعي بعضُ الحصوات، ولا تظهر الأشعة العادية سوى نحو 10% منها. أما تصوير القنوات الصفراوية والبنكرياسية بالرنين (MRCP) فيفيد خاصة في حصوات القنوات. وتوجد الحصوات في المرارة أو القنوات الصفراوية، ونادرًا داخل الأمعاء الدقيقة.",
         en:"Ultrasound is the gold standard investigation for gallstones; CT may miss some stones, and plain X-ray shows only about 10% of them. MRCP is particularly useful for stones within the ducts. Stones are found in the gallbladder or bile ducts, and rarely in the small bowel."},
        {ar:"تظهر الحصوة في الموجات فوق الصوتية جسمًا مفرط الصدى (Hyperechoic) داخل المرارة يلقي ظلًا صوتيًا خلفه (Acoustic shadowing). وفي التصوير المقطعي تختلف كثافتها عن الصفراء: فالمتكلسة أعلى كثافة، والمختلطة مساوية لها فتسهل إفلاتها، والكولسترولية أخفض منها. وفي الرنين المغناطيسي تبدو الحصوة منطقة منخفضة الإشارة داكنة.",
         en:"On ultrasound a stone is a hyperechoic object within the gallbladder casting an acoustic shadow behind it. On CT its density relative to bile varies: calcified stones are hyperattenuating, mixed stones isoattenuating and easily missed, and cholesterol stones hypoattenuating. On MRI a stone is an area of low, dark signal."}
      ],
      nums:[
        {v:"10%", ar:"نسبة حصوات المرارة الظاهرة في الأشعة العادية فقط", en:"Proportion of gallstones visible on plain X-ray"}
      ]},
    { h:{ar:"التهاب المرارة وطيف الألم الصفراوي", en:"Cholecystitis and the biliary pain spectrum"},
      paras:[
        {ar:"ينشأ التهاب المرارة (Cholecystitis) غالبًا على خلفية حصوات المرارة. ويساعد التمييز السريري بين ثلاث صور متدرجة: المغص الصفراوي (Biliary colic) وهو ألم في الربع العلوي الأيمن فقط، فإذا أضيفت الحمى صار التهاب مرارة، فإذا أضيف اليرقان اكتملت ثلاثية شاركو (Charcot triad) الدالة على التهاب القنوات الصفراوية الصاعد (Ascending cholangitis).",
         en:"Cholecystitis is usually due to gallstone disease. Three escalating presentations are worth separating: biliary colic is right upper quadrant pain alone; add fever and it is cholecystitis; add jaundice and Charcot triad is complete, indicating ascending cholangitis."},
        {ar:"علامات الالتهاب في التصوير: مرارة متسعة ممتلئة بالسائل، وجدار سميك متعزز يبدو ساطعًا، وسائل حول المرارة، وتختّل في الدهون المحيطة بها (Fat stranding) من وذمة الدهون.",
         en:"Imaging features of cholecystitis are a distended, fluid-filled gallbladder, a thick and brightly enhancing gallbladder wall, fluid around the gallbladder, and fat stranding around it from oedema within the fat."}
      ],
      table:{
        head:[{ar:"الحالة", en:"Condition"}, {ar:"العلامات السريرية", en:"Clinical features"}],
        rows:[
          [{ar:"المغص الصفراوي", en:"Biliary colic"}, {ar:"ألم الربع العلوي الأيمن فقط", en:"Right upper quadrant pain only"}],
          [{ar:"التهاب المرارة", en:"Cholecystitis"}, {ar:"ألم الربع العلوي الأيمن + حمى", en:"Right upper quadrant pain + fever"}],
          [{ar:"التهاب القنوات الصاعد", en:"Ascending cholangitis"}, {ar:"ألم + حمى + يرقان (ثلاثية شاركو)", en:"Pain + fever + jaundice (Charcot triad)"}]
        ]}},
    { h:{ar:"سرطان البنكرياس", en:"Pancreatic cancer"},
      paras:[
        {ar:"ينشأ سرطان البنكرياس (Pancreatic cancer) غالبًا من رأسه، وتوقعاته سيئة جدًا لتأخر تشخيصه عادة. يظهر في التصوير كتلة نسيجية لينة قد تسد القناة الصفراوية وقناة البنكرياس فتتسعان معًا، وهو ما يعرف بعلامة القناة المزدوجة (Double-duct sign)، وقد تغزو الكتلة البنى المجاورة كالاثني عشر والأوعية الدموية.",
         en:"Pancreatic cancer most commonly arises in the head of the gland, and carries a very poor prognosis because it is usually diagnosed late. It appears as a soft tissue mass that may obstruct and dilate both the bile duct and the pancreatic duct, the double-duct sign, and it may invade neighbouring structures such as the duodenum and blood vessels."}
      ]},
    { h:{ar:"التهاب البنكرياس", en:"Pancreatitis"},
      paras:[
        {ar:"في التهاب البنكرياس (Pancreatitis) تنطلق إنزيمات البنكرياس فتهضم نسيج الغدة وقنواتها وما حولها من دهون وأوعية، وهي عملية هضم ذاتي (Autodigestion). وتشمل المضاعفات التجمعات السائلة حول البنكرياس، فإن تغلّفت سميت أكياسًا كاذبة (Pseudocysts)، إضافة إلى الخراجات، ونخر نسيج البنكرياس، وخثار الوريدين الطحالي والبابي، وأمهات الدم الكاذبة مع احتمال النزف.",
         en:"In pancreatitis, released pancreatic enzymes digest the gland, its ducts and surrounding fat and vessels, a process of autodigestion. Complications include peripancreatic fluid collections, which when encapsulated are called pseudocysts, abscesses, necrosis of pancreatic tissue, thrombosis of the splenic and portal veins, and pseudoaneurysms with possible haemorrhage."},
        {ar:"مظاهر الالتهاب في التصوير المقطعي: بنكرياس متضخم متوذم بحدود غير واضحة وضبابية، وسائل حوله، وتختّل دهون خلف الصفاق، أما مناطق عدم التعزيز داخل الغدة فتدل على النخر.",
         en:"CT features are an enlarged, oedematous pancreas with fuzzy, indistinct borders, fluid around the gland, and fat stranding in the retroperitoneum. Areas within the pancreas that fail to enhance indicate necrosis."}
      ]}
  ],
  quiz:[
    { q:{ar:"ما الفحص الأفضل والأول لحصوات المرارة؟", en:"What is the best first investigation for gallstones?"},
      opts:[{ar:"الأشعة العادية للبطن", en:"Plain abdominal X-ray"},{ar:"الموجات فوق الصوتية", en:"Ultrasound"},{ar:"التصوير المقطعي دون صبغة دائمًا", en:"CT, always without contrast"},{ar:"فحص العظام النووي", en:"Nuclear bone scan"}], a:1,
      why:{ar:"الموجات فوق الصوتية هي المعيار الذهبي للحصوات، بينما لا تظهر الأشعة العادية سوى نحو 10% منها وقد يفوت التصوير المقطعي الحصوات مساوية الكثافة.", en:"Ultrasound is the gold standard for stones; plain X-ray shows only about 10%, and CT can miss isoattenuating stones."}},
    { q:{ar:"ماذا تعني علامة القناة المزدوجة (Double-duct sign)؟", en:"What does the double-duct sign mean?"},
      opts:[{ar:"اتساع القناة الصفراوية وقناة البنكرياس معًا، غالبًا بسبب كتلة في رأس البنكرياس", en:"Dilatation of both the bile duct and the pancreatic duct, usually from a mass in the pancreatic head"},{ar:"وجود قناتين صفراويتين خلقيًا", en:"A congenital duplication of the bile duct"},{ar:"اتساع الوريد البابي والوريد الطحالي", en:"Dilatation of the portal and splenic veins"},{ar:"حصوتان داخل المرارة", en:"Two stones inside the gallbladder"}], a:0,
      why:{ar:"اتساع القناتين الصفراوية والبنكرياسية معًا علامة كلاسيكية على كتلة في رأس البنكرياس تسد مجريهما قرب المصب المشترك.", en:"Simultaneous dilatation of the bile and pancreatic ducts is the classic sign of a pancreatic head mass obstructing both near their shared outlet."}},
    { q:{ar:"أي مجموعة تكتمل بها ثلاثية شاركو لالتهاب القنوات الصفراوية الصاعد؟", en:"Which set completes Charcot triad for ascending cholangitis?"},
      opts:[{ar:"ألم بطني + إقياء + إسهال", en:"Abdominal pain + vomiting + diarrhoea"},{ar:"ألم الربع العلوي الأيمن + حمى + يرقان", en:"Right upper quadrant pain + fever + jaundice"},{ar:"حمى + يرقان + حكة فقط", en:"Fever + jaundice + itching only"},{ar:"ألم ظهر + حمى + فقدان وزن", en:"Back pain + fever + weight loss"}], a:1,
      why:{ar:"ثلاثية شاركو هي ألم الربع العلوي الأيمن مع الحمى واليرقان؛ وبالألم وحده يكون مغصًا صفراويًا، وبالألم والحمى التهاب مرارة.", en:"Charcot triad is right upper quadrant pain with fever and jaundice; pain alone is biliary colic, and pain with fever is cholecystitis."}}
  ]
},
{
  slug:"renal-pathology", chapter:"abdomen",
  title:{ar:"أمراض الكلى والمسالك البولية", en:"Renal Pathology"},
  intro:{
    ar:"تجمع أمراض الكلى بين أخطرها وأكثرها بساطة: فالكيس البسيط موجود عند نصف من تجاوز الخمسين تقريبًا ويعد طبيعيًا، بينما سرطان الخلية الكلوية قد يُكتشف صدفة أو بتتبع البيلة الدموية. والتصوير المقطعي هو عماد العمل هنا، خاصة بروتوكول KUB دون صبغة للحصوات.",
    en:"Renal pathology spans the trivial and the serious: a simple cyst is present in roughly half of people over 50 and counts as normal, while renal cell carcinoma may be found incidentally or during haematuria workup. CT does most of the work, especially the non-contrast CT KUB protocol for stones."},
  sections:[
    { h:{ar:"الكيسات الكلوية البسيطة", en:"Simple renal cysts"},
      paras:[
        {ar:"الكيسات البسيطة (Simple renal cysts) شائعة جدًا ويزداد انتشارها مع العمر حتى توجد عند نحو نصف من تجاوزوا الخمسين، وتعد جزءًا من الطبيعي ولا تتحول إلى خبيثة. تظهر آفات مستديرة محددة الحواف ممتلئة بسائل، تقع إما في محيط الكلية ضمن القشرة (Cortical) أو مركزيًا حول الجيب الكلوي (Parapelvic)، منفردة أو متعددة، وبأحجام من بضعة مليمترات إلى بضعة سنتيمترات.",
         en:"Simple renal cysts are extremely common and increase with age, being found in up to about 50% of people over 50; they are essentially normal and not premalignant. They appear as well-defined, round, fluid-filled lesions at the kidney periphery in the cortex or centrally as parapelvic cysts, solitary or multiple, ranging from a few millimetres to a few centimetres."},
        {ar:"يوصف الكيس بأنه معقد (Complex) إذا احتوى حجبًا فاصلة (Septa) أو مناطق عالية التوهين كالنسيج أو الدم أو البروتين، وهذه الكيسات المعقدة قد ترتبط بخباثة وتحتاج تقييمًا أعمق، بخلاف الكيس البسيط تمامًا.",
         en:"A cyst is called complex if it contains septa or areas of high attenuation such as soft tissue, blood or protein. Complex cysts can be associated with malignancy and need fuller assessment, unlike the purely simple cyst."}
      ],
      nums:[
        {v:"~50%", ar:"نسبة وجود الكيسات البسيطة عند من تجاوزوا الخمسين", en:"Prevalence of simple cysts in people over 50"}
      ]},
    { h:{ar:"سرطان الخلية الكلوية", en:"Renal cell carcinoma"},
      paras:[
        {ar:"ينشأ سرطان الخلية الكلوية (Renal cell carcinoma, RCC) من ظهارة الأنابيب الكلوية لا من الظهارة الانتقالية، ومن عوامل خطورته التدخين والسمنة، ولا علاقة له بالكيسات البسيطة. وغالبًا ما يُكتشف صغيرًا بالصدفة أثناء فحص مقطعي لسبب آخر، أو أثناء تتبع بيلة دموية. التصوير المقطعي هو أفضل فحص أول، وقد يساعد الرنين المغناطيسي في تحديد المرحلة.",
         en:"Renal cell carcinoma (RCC) arises from the renal tubular epithelium, not transitional epithelium, and its risk factors include smoking and obesity; it is not associated with simple cysts. Small tumours are often found incidentally on CT done for other reasons, or during investigation of haematuria. CT is the best first-line investigation, and MRI may help with staging."},
        {ar:"يظهر الورم كتلة متعززة ضعيفة التحديد، وقد تمتد إلى الوريد الكلوي والوريد الأجوف السفلي، مع عقد لمفية متضخمة خلف الصفاق. وتنتقل نقائله إلى العظام بشكل حالّ ومتوسع، وإلى الرئتين بشكل كرات مدفعية (Cannonball) أي عقد كبيرة مستديرة.",
         en:"The tumour appears as a poorly defined enhancing mass, which may extend into the renal vein and inferior vena cava, with enlarged retroperitoneal lymph nodes. Its bone metastases are classically lytic and expansile, and its lung metastases classically cannonball in shape, large and round."}
      ]},
    { h:{ar:"حصوات الكلى والحالب", en:"Renal and ureteric stones"},
      paras:[
        {ar:"يكشف فحص التصوير المقطعي باسم CT KUB، ويجرى دون صبغة، نحو 99% من الحصوات، ويحدد موقع التكلسات بدقة لمعرفة ما إذا كانت داخل السبيل الكلوي فعلًا، كما يظهر أي أثر انسدادي مرافق كموه الحالب أو موه الكلية، بل وحتى التهابات حول حالب مرت منه حصوة حديثًا.",
         en:"CT KUB, performed without contrast, shows about 99% of stones and localises calcifications precisely to confirm they lie within the renal tract. It also shows any obstructing effect such as hydroureter or hydronephrosis, and even inflammation around a ureter that a stone has recently passed through."},
        {ar:"تظهر الحصوة جسمًا صغيرًا جدًا عالي الكثافة، بحجم 2 إلى 10 mm غالبًا، داخل كؤوس الكلية أو حويضتها أو على مسار الحالب. وللبحث عنها يُتتبع الحالب في الصور من خروجه من الحويضة نازلًا بمحاذاة العضلة القطنية، أمام المفصل العجزي الحرقفي، ثم على الجدار الجانبي للحوض حتى الشوكة الوركية حيث ينعطف نحو المثانة.",
         en:"A stone appears as a very small hyperdense object, typically 2 to 10 mm, within the renal calyces, the renal pelvis, or along the course of the ureter. To find it, follow the ureter from the renal pelvis down along the psoas muscle, anterior to the sacroiliac joint, along the pelvic sidewall, to the ischial spine, where it turns medially towards the bladder."}
      ],
      nums:[
        {v:"99%", ar:"نسبة الحصوات الظاهرة في CT KUB دون صبغة", en:"Proportion of stones visible on non-contrast CT KUB"},
        {v:"2–10 mm", ar:"الحجم النموذجي لحصوات السبيل الكلوي", en:"Typical size range of renal tract stones"}
      ]},
    { h:{ar:"موه الكلية (استسقاء الكلية)", en:"Hydronephrosis"},
      paras:[
        {ar:"موه الكلية (Hydronephrosis) هو اتساع كؤوس الكلية وحويضتها بسبب عائق أسفل منها، كالحصوات والسرطانات وتضخم البروستات والحمل والأسباب الخلقية والخثرات الكبيرة والتليف خلف الصفاق، أو بسبب ارتداد بولي من المثانة (Vesicoureteric reflux). وكثيرًا ما تضعف وظيفة الكلية المصابة.",
         en:"Hydronephrosis is dilatation of the renal calyces and pelvis caused by obstruction downstream, for example stones, cancers, prostatic hypertrophy, pregnancy, congenital causes, a large blood clot or retroperitoneal fibrosis, or by backflow such as vesicoureteric reflux. The affected kidney frequently has impaired function."},
        {ar:"في التصوير تظهر الكؤوس والحويضة متسعة، ويُبحث دائمًا عن سبب الانسداد الظاهر. وعندما يلزم تقييم وظيفة الكلية تُستخدم فحوص مثل الطور المتأخر في التصوير المقطعي مع الصبغة، أو تصوير الحويضة الوريدي (Intravenous pyelogram)، أو فحوص الطب النووي.",
         en:"Imaging shows enlarged renal calyces and renal pelvis, and the cause of the obstruction should always be looked for. When renal function needs assessing, options include a delayed-phase contrast CT, an intravenous pyelogram, or nuclear medicine studies."}
      ]}
  ],
  quiz:[
    { q:{ar:"ما الفحص الذي يظهر نحو 99% من حصوات الكلى والحالب؟", en:"Which investigation shows about 99% of renal and ureteric stones?"},
      opts:[{ar:"الأشعة العادية KUB", en:"Plain KUB X-ray"},{ar:"التصوير المقطعي CT KUB دون صبغة", en:"Non-contrast CT KUB"},{ar:"الموجات فوق الصوتية دائمًا", en:"Ultrasound in all cases"},{ar:"الرنين المغناطيسي", en:"MRI"}], a:1,
      why:{ar:"فحص CT KUB دون صبغة يكشف نحو 99% من الحصوات ويحدد موقعها الدقيق وأثرها الانسدادي.", en:"Non-contrast CT KUB detects about 99% of stones and precisely shows their location and any obstructing effect."}},
    { q:{ar:"كيف توصف نقائل سرطان الخلية الكلوية إلى الرئتين كلاسيكيًا؟", en:"How are lung metastases of renal cell carcinoma classically described?"},
      opts:[{ar:"عقد صغيرة منتشرة كحبات الدخن", en:"Tiny miliary nodules"},{ar:"كرات مدفعية كبيرة ومستديرة (Cannonball)", en:"Large, round cannonball deposits"},{ar:"تكلسات رملية دقيقة", en:"Fine sandy calcifications"},{ar:"لا ينتقل سرطان الكلية إلى الرئة أبدًا", en:"RCC never spreads to the lungs"}], a:1,
      why:{ar:"نقائل RCC إلى الرئة كلاسيكيًا كبيرة ومستديرة ككرات المدفع، بينما نقائله العظمية حالّة ومتوسعة.", en:"RCC lung metastases are classically large and round, like cannonballs, while its bone metastases are lytic and expansile."}},
    { q:{ar:"أي صفة تجعل الكيس الكلوي معقدًا (Complex) وليس بسيطًا؟", en:"Which feature makes a renal cyst complex rather than simple?"},
      opts:[{ar:"وقوعه في قشرة الكلية", en:"A cortical location"},{ar:"احتواؤه حجبًا فاصلة أو مناطق عالية التوهين كالدم أو البروتين", en:"Septa, or high-attenuation content such as blood or protein"},{ar:"تجاوز حجمه سنتيمترًا واحدًا", en:"A size over one centimetre"},{ar:"وجوده في كلية واحدة فقط", en:"Being present in only one kidney"}], a:1,
      why:{ar:"الكيس يصبح معقدًا بوجود حجب أو محتويات عالية التوهين كالنسيج أو الدم أو البروتين، وهي صفات قد ترتبط بخباثة، أما الموقع والحجم وحدهما فلا يكفيان.", en:"Septa or high-attenuation content such as soft tissue, blood or protein make a cyst complex and potentially malignant; location and size alone do not."}}
  ]
},
{
  slug:"trauma-and-other-abdominal-pathology", chapter:"abdomen",
  title:{ar:"إصابات البطن وآفات أخرى", en:"Abdominal Trauma and Other Pathology"},
  intro:{
    ar:"يجمع هذا الدرس إصابات البطن الرضية والكلية، والهواء الحر داخل البطن، وتمدد الشريان الأورطي البطني، ثم آفات الحوض النسائية وداء الصفاق والاستسقاء. القاسم المشترك بينها أن التصوير المقطعي مع الصبغة يتصدر التشخيص، بينما تتصدر الموجات فوق الصوتية فحص الحوض وتمدد الأورطي وفحصه الدوري.",
    en:"This lesson brings together blunt and penetrating abdominal trauma, free intraperitoneal gas, abdominal aortic aneurysm, and then gynaecological, peritoneal and ascitic disease. The common thread is that CT with contrast leads the diagnosis, while ultrasound leads for the pelvis and for aneurysm diagnosis and screening."},
  sections:[
    { h:{ar:"الإصابة الرضية: كليلة ونافذة", en:"Traumatic injury: blunt and penetrating"},
      paras:[
        {ar:"تأتي إصابات البطن بنوعين: قوة كليلة (Blunt) كما في حوادث الطرق عالية السرعة والسقوط من ارتفاع والاعتداء، وإصابات نافذة حادة (Penetrating)، وكلا النوعين قد يصيب الأعضاء الصلبة والأمعاء والمساريقا. وفي الإصابات عالية الطاقة يجرى عادة فحص مقطعي شامل للجسم كله (رأس ورقبة وصدر وبطن وحوض) بطورين من الصبغة.",
         en:"Abdominal trauma is either blunt force, as in high-speed road traffic accidents, falls from height and assaults, or sharp penetrating injury; both types can damage solid organs, bowel and mesentery. In high-energy trauma a whole-body trauma CT series covering head, neck, chest, abdomen and pelvis is usually performed with two phases of contrast enhancement."},
        {ar:"ترتبط إصابات الكبد والكليتين والطحال غالبًا بكسور الأضلاع. وقد يوجد تمزق في العضو مع ورم دموي مرافق يمتد أحيانًا إلى أوعية السرة العضوية (Hilum). علامات الإصابة في التصوير انقطاع استمرارية قشرة العضو وإصابة الأنسجة الرخوة المجاورة والورم الدموي، وأهمها تسرب الصبغة خارج الأوعية دلالة على نزف نشط يستدعي جراحة عاجلة أو تدخلًا إشعاعيًا لسد الوعاء النازف بالانسداد الوعائي (Embolisation).",
         en:"Injuries to the liver, kidneys and spleen are associated with rib fractures. There may be a laceration with an accompanying haematoma, sometimes extending to the vessels at the organ hilum. CT signs are disruption of the organ cortex, associated soft tissue injury and haematoma; most importantly, contrast extravasation indicates active bleeding needing emergent surgery or interventional radiology to embolise the bleeding vessel."}
      ]},
    { h:{ar:"الهواء الحر: داخل الصفاق وداخل المثانة", en:"Free gas: pneumoperitoneum and gas in the bladder"},
      paras:[
        {ar:"الهواء داخل تجويف الصفاق (Pneumoperitoneum) سببه الرئيس انثقاب عضو أجوف، غالبًا الاثنا عشر أو القولون السيني، وقد يكون بقايا طبيعية من غاز ثاني أكسيد الكربون المنفوخ في جراحة منظارية حديثة. يعتمد موقع الهواء الحر على القطعة المنثقبة أكانت داخل الصفاق أو خلفه، وقد يمتد إلى فراغات أخرى كالمنصف، فانثقاب المستقيم مثلًا يظهر هواءً في مساريقه (Mesorectum).",
         en:"Gas within the peritoneal cavity (pneumoperitoneum) is mainly caused by perforation of a hollow viscus, usually the duodenum or sigmoid colon, or it may simply remain from CO2 insufflation after recent laparoscopic surgery. The location of free air depends on whether the perforated segment is intra- or retroperitoneal, and air can extend into other spaces such as the mediastinum; rectal perforation, for example, puts air in the mesorectum."},
        {ar:"أما الغاز داخل المثانة البولية فينشأ من قسطرة حديثة أو حالية، أو من ناسور بين المثانة والأمعاء، وهو ناسور يسهّل استعمار البكتيريا للمثانة فيسبب التهابات بولية متكررة والتهاب حويضة وكلية. يظهر الغاز في التصوير مشكلًا مستوى هواء وسائل مع البول داخل المثانة.",
         en:"Gas within the urinary bladder comes from recent or current catheterisation, or from a fistula between bladder and bowel; such a fistula lets organisms colonise the bladder easily, causing frequent urinary infections and pyelonephritis. On imaging the gas forms an air-fluid level with the urine inside the bladder."}
      ]},
    { h:{ar:"تمدد الشريان الأورطي البطني", en:"Abdominal aortic aneurysm"},
      paras:[
        {ar:"تمدد الشريان الأورطي البطني (Abdominal aortic aneurysm, AAA) هو اتساع بؤري في الأورطي البطني. خطورته عالية عند تمزقه: فثلثا المصابين بالتمزق يموتون قبل الوصول إلى المستشفى، ونصف من يصلون إلى الجراحة الطارئة يموتون أيضًا. تُستخدم الموجات فوق الصوتية للتشخيص والفحص الدوري، والتصوير المقطعي عند اشتباه تسرب أو تمزق، على ألا يؤخر ذلك الجراحة الطارئة.",
         en:"An abdominal aortic aneurysm (AAA) is a focal dilatation of the abdominal aorta. Rupture is often fatal: two-thirds of patients with a ruptured AAA die before reaching hospital, and half of those who reach emergency surgery die as well. Ultrasound is used for diagnosis and screening, and CT for suspected leak, which must never delay emergency surgery."},
        {ar:"يُعرض فحص التمدد على جميع الرجال عند بلوغ الخامسة والستين بقياس سريع للأورطي بالموجات فوق الصوتية. فإذا كان القطر أقل من 3 cm عدّت النتيجة سلبية ولا تُستدعى فحوص لاحقة، وإن تجاوز 3 cm اختلف الإجراء بحسب القطر: إعادة بعد سنة للأقطار 3.0 إلى 4.4 cm، وبعد ثلاثة أشهر لأقطار 4.5 إلى 5.4 cm، وإحالة فورية إلى جراحي الأوعية عند تجاوز 5.5 cm لتقدير الإصلاح الانتخابي.",
         en:"Screening is offered to all men when they turn 65, as a quick community ultrasound measurement of the aorta. Below 3 cm the test is negative with no further recall. Above 3 cm the action depends on diameter: 3.0 to 4.4 cm is rescanned in one year, 4.5 to 5.4 cm in three months, and over 5.5 cm prompts immediate referral to vascular surgeons to consider elective repair."},
        {ar:"يظهر جدار التمدد عادة متكلسًا، ويحيط بلمعة الوعاء خثار جداري (Mural thrombus) يبدو منطقة منخفضة الكثافة محيطية. وعند التمزق يوجد دم حر أعلى كثافة من السوائل العادية كمحتوى المعدة، مع احتمال تسرب الصبغة.",
         en:"The aneurysm wall is usually calcified, and mural thrombus is common, seen as a circumferential low-density area around the lumen. If ruptured, there is free blood, denser than simple fluid such as stomach contents, with possible contrast leak."}
      ],
      nums:[
        {v:"> 5.5 cm", ar:"قطر تمدد الأورطي الذي يستدعي إحالة فورية لجراحي الأوعية", en:"AAA diameter requiring immediate vascular surgery referral"},
        {v:"65", ar:"العمر الذي يعرض عنده فحص تمدد الأورطي على الرجال", en:"Age at which AAA screening is offered to men"}
      ]},
    { h:{ar:"أمراض الحوض النسائية", en:"Gynaecological pathology"},
      paras:[
        {ar:"الموجات فوق الصوتية عبر البطن أو عبر المهبل هي الوسيلة المفضلة للتشخيص الأول عند اشتباه مرض نسائي. فالأورام الليفية الرحمية (Uterine fibroids) قد تكبر كثيرًا وتسبب الألم إن تنكست، والانتباذ البطاني الرحمي (Endometriosis) قد يظهر ككتل مبيضية كيسية جزئيًا أو كبؤر منتشرة في تجويف البطن.",
         en:"Ultrasound, transabdominal or transvaginal, is the preferred modality for the initial diagnosis of suspected gynaecological pathology. Uterine fibroids can become very large and cause pain if they degenerate, while endometriosis may present as partly cystic ovarian masses or as deposits anywhere in the abdominal cavity."},
        {ar:"تُحدد مراحل الأورام النسائية الخبيثة بالرنين المغناطيسي والتصوير المقطعي. ويميل سرطان المبيض إلى الظهور متأخرًا وقد انتشر سلفًا إلى الصفاق والثرب. ويسمى الورم الكروكنبرغي (Krukenberg tumour) نقيلة في المبيض مصدرها ورم أولي آخر داخل تجويف الصفاق.",
         en:"Gynaecological malignancies are staged with MRI and CT. Ovarian cancer tends to present late, frequently already spread to the peritoneum and omentum by diagnosis. A Krukenberg tumour is a metastatic deposit in the ovary arising from a primary elsewhere within the peritoneal cavity."},
        {ar:"في التصوير قد تتكلس الأورام الليفية فتظهر كتلًا مستديرة بحواف متكلسة، ويظهر الرنين المغناطيسي الدم داخل بؤر الانتباذ البطاني في المبيضين والفراغ المستقيمي المهبلي.",
         en:"On imaging, fibroids can calcify and appear as rounded masses with calcific rims, and MRI can show the blood within endometriotic deposits on the ovaries and in the rectovaginal space."}
      ]},
    { h:{ar:"داء الصفاق والثرب، والاستسقاء", en:"Peritoneal and omental disease, and ascites"},
      paras:[
        {ar:"تظهر سماكة وعقد نسيجية في الثرب (Omentum) والصفاق في نمطين رئيسين: الانتشار الورمي، غالبًا من سرطانات المعدة والبنكرياس والقولون والمبيض، أو العدوى كالتدرن (Tuberculosis). وقد توجد عقد على سطح الأمعاء المصلي، وفي الانتشار الورمي خاصة قد تحاصر كتل سرطانية منتشرة الأمعاء. ويمكن أخذ خزعة من الثرب بتوجيه الموجات فوق الصوتية أو التصوير المقطعي لتحديد مصدر الورم.",
         en:"Soft tissue nodularity and thickening of the omentum and peritoneum occur in two main settings: metastatic disease, usually from gastric, pancreatic, colonic or ovarian cancers, and infections such as tuberculosis. There may be nodules on the bowel serosal surface, and in metastatic disease the bowel can become encased in widespread malignant tissue. Ultrasound- or CT-guided biopsy of the omentum can identify the primary source."},
        {ar:"يظهر الثرب المصاب متسمكًا بشكل عقدي أسفل جدار البطن بما يعرف بكعكة الثرب (Omental cake)، مع عقد صفاقية؛ ومن سمات التدرن موت مراكز العقد اللمفية (Necrotic lymph nodes). أما الاستسقاء (Ascites) فيظهر في أمراض الكبد المزمنة وفشل القلب وخباثات البطن والحوض، ويسبب انتفاخ البطن.",
         en:"Diseased omentum shows nodular thickening deep to the abdominal wall, the omental cake, together with peritoneal nodularity; necrotic lymph nodes are a feature of tuberculosis. Ascites occurs in chronic liver disease, heart failure and abdominopelvic malignancies, and presents as abdominal distension."},
        {ar:"يُرى الاستسقاء بسهولة في الموجات فوق الصوتية والتصوير المقطعي، ويمكن بزله أو تصريفه بتوجيه الموجات فوق الصوتية وأخذ عينة من سائله للفحص المخبري. ويتوزع السائل بحسب كميته حول الكبد والطحال وبين الأمعاء وفي الحوض، متجمعًا في المواضع المنخفضة كالميزابين جانب القولون (Paracolic gutters) خلفيًا.",
         en:"Ascites is seen easily on ultrasound and CT, and ultrasound-guided paracentesis or drainage can obtain a sample for laboratory testing. Depending on its volume, fluid collects around the liver and spleen, surrounding the bowel and in the pelvic cavity, settling in dependent locations such as the paracolic gutters posteriorly."}
      ]}
  ],
  quiz:[
    { q:{ar:"ما العلامة التي تدل على نزف نشط في تصوير إصابات البطن؟", en:"Which finding indicates active bleeding on trauma CT?"},
      opts:[{ar:"تكلس جدار الشريان الأورطي", en:"Calcification of the aortic wall"},{ar:"تسرب الصبغة خارج الأوعية (Contrast extravasation)", en:"Contrast extravasation outside the vessels"},{ar:"وجود هواء داخل المثانة", en:"Gas inside the bladder"},{ar:"اتساع كؤوس الكلية", en:"Dilated renal calyces"}], a:1,
      why:{ar:"تسرب الصبغة خارج الأوعية علامة النزف النشط، ويستدعي جراحة عاجلة أو انسدادًا وعائيًا تدخليًا للوعاء النازف.", en:"Contrast extravasation is the sign of active bleeding and calls for emergent surgery or interventional embolisation of the bleeding vessel."}},
    { q:{ar:"رجل في فحص التمدد الدوري وجد قطر أورطيه البطني 5.8 cm، فما الإجراء؟", en:"A screening ultrasound finds an aortic diameter of 5.8 cm. What is the action?"},
      opts:[{ar:"إعادة الفحص بعد سنة", en:"Rescan in one year"},{ar:"إعادة الفحص بعد ثلاثة أشهر", en:"Rescan in three months"},{ar:"إحالة فورية إلى جراحي الأوعية لتقدير الإصلاح الانتخابي", en:"Immediate referral to vascular surgeons to consider elective repair"},{ar:"لا إجراء، فالنتيجة سلبية", en:"No action; the test is negative"}], a:2,
      why:{ar:"تجاوز القطر 5.5 cm يستدعي إحالة فورية لجراحي الأوعية؛ أما 3.0–4.4 cm فيعاد بعد سنة، و4.5–5.4 cm بعد ثلاثة أشهر، ودون 3 cm نتيجة سلبية.", en:"A diameter over 5.5 cm needs immediate vascular referral; 3.0–4.4 cm is rescanned in a year, 4.5–5.4 cm in three months, and below 3 cm is negative."}},
    { q:{ar:"ما البديلان الرئيسان المتنافسان عند رؤية كعكة ثرب (Omental cake) وعقد صفاقية؟", en:"What are the two main competing causes of an omental cake with peritoneal nodularity?"},
      opts:[{ar:"التهاب البنكرياس والتهاب المرارة", en:"Pancreatitis and cholecystitis"},{ar:"الانتشار الورمي الخبيث والتدرن", en:"Metastatic malignancy and tuberculosis"},{ar:"حصوات الكلى وحصوات المرارة", en:"Renal stones and gallstones"},{ar:"التهاب الزائدة والتهاب الرتوج", en:"Appendicitis and diverticulitis"}], a:1,
      why:{ar:"تسمك الثرب العقدي يحدث في الانتشار الورمي من سرطانات كالمعدة والمبيض أو في عدوى كالتدرن الذي يتميز بعقد لمفية نخرية، والخزعة الموجهة تحسم المصدر.", en:"Nodular omental thickening arises from metastatic spread, for example gastric or ovarian cancer, or from infection such as tuberculosis with necrotic nodes; guided biopsy settles the source."}}
  ]
}
];
