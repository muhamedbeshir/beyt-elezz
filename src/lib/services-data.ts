export interface ServiceData {
  slug: string;
  title: string;
  description: string;
  content: string;
  keywords: string[];
  image: string;
}

export const servicesData: ServiceData[] = [
  // --- Services from Services.tsx ---
  {
    slug: 'furniture-moving',
    title: 'نقل الأثاث',
    description: 'أسطول شاحنات حديث ومجهز لنقل جميع أنواع الأثاث المنزلي والمكتبي بأمان تام داخل وخارج الرياض.',
    keywords: [
      'نقل عفش بالرياض', 'نقل اثاث', 'شركة نقل عفش', 'نقل عفش خارج الرياض', 
      'دينات نقل عفش', 'ارخص شركة نقل عفش', 'نقل عفش مع الفك والتركيب', 
      'نقل مكاتب', 'نقل غرف نوم', 'سيارات نقل مغلقة'
    ],
    image: "/images/naql/Screenshot 2026-02-21 233636.png",
    content: `
      <h2>أفضل شركة نقل أثاث في الرياض - خدمة احترافية وشاملة</h2>
      <p class="text-lg leading-relaxed">
        تعتبر عملية نقل الأثاث من أكثر المهام التي تسبب القلق والتوتر للأسر والشركات على حد سواء. البحث عن <strong>شركة نقل عفش موثوقة في الرياض</strong> تضمن سلامة المنقولات، وتوفر أسعاراً تنافسية، وتلتزم بالمواعيد، هو هدف الجميع. في "بيت العز"، نفتخر بأننا نقدم تجربة نقل استثنائية تجمع بين الخبرة الطويلة، والتقنيات الحديثة، والعمالة المدربة.
      </p>

      <div class="bg-blue-50/50 p-8 rounded-[2rem] my-10 border border-blue-100">
        <h3 class="!text-[#D4AF37] text-2xl font-black mb-6">لماذا تختار بيت العز لنقل عفشك؟</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
            <span class="text-[#1f70cc] font-black text-xl">✓</span>
            <div class="!text-black"><strong>أسطول سيارات حديث:</strong> شاحنات مغلقة ومبطنة لحماية الأثاث من الغبار، الأمطار، وأشعة الشمس.</div>
          </div>
          <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
            <span class="text-[#1f70cc] font-black text-xl">✓</span>
            <div class="!text-black"><strong>تغطية الرياض والمدن:</strong> نخدم جميع أحياء الرياض ونوفر خدمات النقل لجميع مدن المملكة.</div>
          </div>
          <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
            <span class="text-[#1f70cc] font-black text-xl">✓</span>
            <div class="!text-black"><strong>فريق فني متكامل:</strong> سائقون محترفون، نجارون، وفنيو تكييف وعمال تحميل وتنزيل.</div>
          </div>
          <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
            <span class="text-[#1f70cc] font-black text-xl">✓</span>
            <div class="!text-black"><strong>ضمان شامل:</strong> نقدم ضماناً يضمن سلامة كل قطعة من لحظة استلامها حتى تسليمها.</div>
          </div>
        </div>
      </div>

      <img src="/images/naql/Screenshot 2026-02-21 233646.png" alt="نقل عفش آمن بالرياض" class="w-full h-64 md:h-96 object-cover rounded-3xl my-10 shadow-2xl transition-transform duration-500 hover:scale-[1.01]" />

      <div class="bg-[#1f70cc] p-8 rounded-[2rem] my-10 shadow-xl">
        <h3 class="text-white text-2xl font-black mb-6">مراحل وخطوات عملية نقل الأثاث</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="flex gap-4">
            <span class="text-3xl font-black text-white/30">01</span>
            <div>
              <h4 class="text-white font-bold mb-1">المعاينة والتقييم</h4>
              <p class="text-sm text-white/80">زيارة مجانية لتقييم حجم العفش وتقديم عرض سعر نهائي شفاف.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <span class="text-3xl font-black text-white/30">02</span>
            <div>
              <h4 class="text-white font-bold mb-1">الفك والتحضير</h4>
              <p class="text-sm text-white/80">فك غرف النوم والمطابخ والمكيفات والستائر بترقيم احترافي.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <span class="text-3xl font-black text-white/30">03</span>
            <div>
              <h4 class="text-white font-bold mb-1">التغليف والتحميل</h4>
              <p class="text-sm text-white/80">استخدام مواد عالية الجودة وترتيب العفش داخل الشاحنات بنظام هندسي.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <span class="text-3xl font-black text-white/30">04</span>
            <div>
              <h4 class="text-white font-bold mb-1">التوصيل والتركيب</h4>
              <p class="text-sm text-white/80">نقل آمن للوجهة الجديدة مع إعادة تركيب وترتيب كل الأغراض.</p>
            </div>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black mb-6">نصائح هامة وأسعارنا</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div class="p-6 rounded-2xl bg-gray-50 border-r-4 border-[#D4AF37]">
          <h4 class="font-black text-[#1f70cc] mb-3">قبل النقل:</h4>
          <ul class="text-sm !text-black space-y-2">
            <li>• فرز المقتنيات الثمينة ونقلها بسيارتك الخاصة.</li>
            <li>• تفريغ الثلاجة والفريزر قبل النقل بيوم كامل.</li>
            <li>• تجهيز شنطة الطوارئ للملابس والأدوات الضرورية.</li>
          </ul>
        </div>
        <div class="p-6 rounded-2xl bg-gray-50 border-r-4 border-[#1f70cc]">
          <h4 class="font-black text-[#1f70cc] mb-3">أسعارنا:</h4>
          <p class="text-sm !text-black">
            نقدم <strong>أرخص أسعار نقل الأثاث في الرياض</strong> مع أعلى جودة. السعر المتفق عليه هو النهائي ولا توجد مصاريف خفية.
          </p>
          <div class="mt-4 font-bold text-[#1f70cc]">راحتك هي مهمتنا!</div>
        </div>
      </div>
    `
  },
  {
    slug: 'secure-packaging',
    title: 'خدمات التغليف الآمن',
    description: 'نستخدم أفضل مواد التغليف (كرتون، فقاعات، فلين) لحماية منقولاتك من الخدوش والكسر أثناء النقل.',
    keywords: [
      'تغليف اثاث', 'تغليف نقل عفش', 'كرتون نقل', 'رولات فقاعات', 
      'تغليف زجاج', 'حماية الاثاث من الخدش', 'تغليف تخزين', 
      'مواد تغليف عالية الجودة', 'تغليف صيني', 'تغليف مطابخ'
    ],
    image: "/images/ta8lef/Screenshot 2026-02-21 232235.png",
    content: `
      <h2>التغليف الآمن: الدرع الواقي لأثاث منزلك</h2>
      <p class="text-lg leading-relaxed">
        يعتبر التغليف (Packaging) هو العمود الفقري لعملية نقل الأثاث الناجحة. الكثير من الخدوش والكسور تحدث ليس بسبب النقل، بل بسبب التغليف السيء أو استخدام مواد رديئة. في "بيت العز"، نعتبر أن التغليف فن وعلم؛ فن في طريقة اللف والحماية، وعلم في اختيار المواد المناسبة لكل قطعة.
      </p>

      <div class="bg-blue-50/50 p-8 rounded-[2rem] my-10 border border-blue-100">
        <h3 class="!text-[#D4AF37] text-2xl font-black mb-6">لماذا يعتبر تغليف الأثاث ضرورياً؟</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
            <span class="text-[#1f70cc] font-black text-xl">✓</span>
            <div class="!text-black"><strong>الحماية من الخدوش:</strong> منع احتكاك القطع ببعضها أثناء الحمل أو داخل الشاحنة.</div>
          </div>
          <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
            <span class="text-[#1f70cc] font-black text-xl">✓</span>
            <div class="!text-black"><strong>الحماية من الكسر:</strong> تدعيم الزجاج وشاشات التلفزيون والتحف بمواد امتصاص الصدمات.</div>
          </div>
          <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
            <span class="text-[#1f70cc] font-black text-xl">✓</span>
            <div class="!text-black"><strong>النظافة التامة:</strong> منع وصول الغبار والأتربة للمفروشات والكنب والفرشات.</div>
          </div>
          <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
            <span class="text-[#1f70cc] font-black text-xl">✓</span>
            <div class="!text-black"><strong>سهولة التنظيم:</strong> تجميع القطع في كراتين مرقمة يسرع عملية التفريغ والتركيب.</div>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black mb-6">أنواع ومواد التغليف التي نستخدمها</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div class="p-6 rounded-2xl border-2 border-dashed border-blue-100 bg-white shadow-sm">
          <h4 class="font-black text-[#1f70cc] mb-2">التغليف الفقاعي (Bubbly Wrap)</h4>
          <p class="text-sm !text-black">لحماية الشاشات، المرايا، والقطع الزجاجية الحساسة من أي ارتطام.</p>
        </div>
        <div class="p-6 rounded-2xl border-2 border-dashed border-blue-100 bg-white shadow-sm">
          <h4 class="font-black text-[#1f70cc] mb-2">التغليف الكرتوني (Corrugated Boxes)</h4>
          <p class="text-sm !text-black">كراتين متينة بمقاسات مختلفة للكتب، أواني المطبخ، والملابس.</p>
        </div>
        <div class="p-6 rounded-2xl border-2 border-dashed border-blue-100 bg-white shadow-sm">
          <h4 class="font-black text-[#1f70cc] mb-2">الاسترتش فيلم (Stretch Film)</h4>
          <p class="text-sm !text-black">للف الكنب والمفروشات لحمايتها من الأوساخ وتثبيت قطع الأثاث.</p>
        </div>
        <div class="p-6 rounded-2xl border-2 border-dashed border-blue-100 bg-white shadow-sm">
          <h4 class="font-black text-[#1f70cc] mb-2">الفلين والزوايا (Foam Corners)</h4>
          <p class="text-sm !text-black">حماية زوايا الخشب والأجهزة الكهربائية من التجريح أثناء التحميل.</p>
        </div>
      </div>

      <img src="/images/ta8lef/Screenshot 2026-02-21 232331.png" alt="مواد تغليف عالية الجودة" class="w-full h-64 md:h-96 object-cover rounded-3xl my-10 shadow-2xl transition-transform duration-500 hover:scale-[1.01]" />

      <div class="bg-[#1f70cc] p-8 rounded-[2rem] my-10 shadow-xl">
        <h3 class="text-white text-2xl font-black mb-6">أنظمة التغليف حسب الحاجة</h3>
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <span class="text-[#D4AF37] font-black text-xl">★</span>
            <p class="text-white m-0 font-bold">التغليف العادي للنقل المحلي: تركيز على حماية الغبار والخدوش البسيطة.</p>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-[#D4AF37] font-black text-xl">★</span>
            <p class="text-white m-0 font-bold">التغليف المعزز للتخزين: مواد تمنع الرطوبة وتسمح بالتهوية والوقاية من الحشرات.</p>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-[#D4AF37] font-black text-xl">★</span>
            <p class="text-white m-0 font-bold">التغليف الخاص للشحن الدولي: صناعة صناديق خشبية مخصصة للأغراض الثمينة.</p>
          </div>
        </div>
      </div>

      <p class="text-center font-bold text-gray-600 italic bg-gray-50 p-6 rounded-2xl border-l-4 border-[#1f70cc]">
        "نصيحة بيت العز: لا تساوم على جودة التغليف، فهي الضمان الحقيقي لسلامة ذكرياتك المنقولة."
      </p>
    `
  },
  {
    slug: 'disassembly-assembly',
    title: 'خدمات فك وتركيب الأثاث',
    description: 'فريق فني متخصص لفك وتركيب غرف النوم، المطابخ، والمكيفات، والستائر لضمان سلامتها.',
    keywords: [
      'نجار فك وتركيب', 'فك وتركيب غرف نوم', 'فك وتركيب مطابخ', 
      'فني مكيفات سبليت', 'نقل وفك اثاث', 'نجار موبيليا بالرياض', 
      'تركيب ستائر', 'تركيب ايكيا', 'صيانة اثاث'
    ],
    image: "/images/tarkeb/ter.png",
    content: `
      <h2>فك وتركيب الأثاث: الخبرة والمهارة هما الأساس</h2>
      <p class="text-lg leading-relaxed">
        أكثر ما يميز شركة نقل عن أخرى هو جودة "الفك والتركيب". فالنقل بحد ذاته عملية عضلية، لكن الفك والتركيب عملية فنية بحتة تتطلب مهارة، دقة، وأدوات متخصصة. في "بيت العز"، نفخر بضم نخبة من أفضل النجارين وفنيي الكهرباء لضمان عودة أثاثك كما كان، بل وأفضل.
      </p>

      <div class="bg-blue-50/50 p-8 rounded-[2rem] my-10 border border-blue-100">
        <h3 class="!text-[#D4AF37] text-2xl font-black mb-6">ماذا تشمل خدمات الفك والتركيب؟</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h4 class="font-black text-[#1f70cc] mb-3 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
              غرف النوم
            </h4>
            <p class="text-sm !text-black">فك وتركيب غرف النوم بجميع أنواعها (وطني، صيني، تركي، وايكيا) مع ضمان وزن الأبواب والدرف بدقة.</p>
          </div>
          <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h4 class="font-black text-[#1f70cc] mb-3 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
              المطابخ
            </h4>
            <p class="text-sm !text-black">فك المطابخ الألومنيوم والخشب بحرص، وحماية الرخام والجرانيت، وإعادة التركيب بتناسق تام.</p>
          </div>
          <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h4 class="font-black text-[#1f70cc] mb-3 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
              المكيفات
            </h4>
            <p class="text-sm !text-black">فنيو تكييف لفك وتركيب مكيفات السبليت والشباك مع ضمان حبس الفريون وسلامة المواسير.</p>
          </div>
          <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h4 class="font-black text-[#1f70cc] mb-3 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
              الستائر واللوحات
            </h4>
            <p class="text-sm !text-black">فك وتركيب جميع أنواع الستائر والبراقع، وتعليق الشاشات واللوحات الديكورية والرفوف.</p>
          </div>
        </div>
      </div>

      <img src="/images/tarkeb/ter2.png" alt="فني فك وتركيب محترف" class="w-full h-64 md:h-96 object-cover rounded-3xl my-10 shadow-2xl transition-transform duration-500 hover:scale-[1.01]" />

      <div class="bg-[#1f70cc] p-8 rounded-[2rem] my-10 shadow-xl">
        <h3 class="text-white text-2xl font-black mb-6">لماذا تختار خبراء بيت العز؟</h3>
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <span class="text-[#D4AF37] font-black">✓</span>
            <p class="text-white m-0 font-bold">أدوات متخصصة: نستخدم أحدث الدريلات والمفكات لضمان عدم تلف الأخشاب.</p>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-[#D4AF37] font-black">✓</span>
            <p class="text-white m-0 font-bold">دقة متناهية: ترقيم القطع الصغيرة والبراغي لضمان عدم فقدان أي جزء.</p>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-[#D4AF37] font-black">✓</span>
            <p class="text-white m-0 font-bold">توفير الوقت: العمل المنظم يضمن سرعة الفك والتركيب دون تضحية بالجودة.</p>
          </div>
        </div>
      </div>

      <p class="text-center font-bold text-gray-600 italic bg-gray-50 p-6 rounded-2xl border-l-4 border-[#D4AF37]">
        "يتساءل الكثيرون: هل يشمل السعر فك وتركيب المكيفات؟ نعم، في بيت العز نقدم باقات شاملة لكل احتياجاتكم."
      </p>
    `
  },
  {
    slug: 'furniture-storage',
    title: 'تخزين الأثاث في مستودعات آمنة',
    description: 'مستودعات آمنة ونظيفة لتخزين عفشك لفترات طويلة أو قصيرة مع نظام حماية ومراقبة.',
    keywords: [
      'تخزين عفش', 'مستودعات تخزين اثاث', 'تخزين اثاث بالرياض', 
      'مخازن للايجار', 'شركات تخزين عفش', 'اسعار تخزين الاثاث', 
      'مستودعات مكيفة', 'تخزين بضائع'
    ],
    image: "/images/mst/mst.png",
    content: `
      <h2>حلول تخزين الأثاث الذكية والآمنة في الرياض</h2>
      <p class="text-lg leading-relaxed">
        هل تخطط للسفر لفترة طويلة؟ هل تقوم بترميم منزلك وتحتاج لإفراغه؟ هل انتقلت لمنزل أصغر ومساحته لا تكفي لكل عفشك؟ خدمة <strong>تخزين الأثاث</strong> من "بيت العز" هي الحل المثالي. نوفر لك مساحات تخزين خاصة، آمنة، ونظيفة للحفاظ على ممتلكاتك لأي فترة زمنية تحتاجها.
      </p>

      <div class="bg-blue-50/50 p-8 rounded-[2rem] my-10 border border-blue-100">
        <h3 class="!text-[#D4AF37] text-2xl font-black mb-6">مواصفات مستودعاتنا القياسية</h3>
        <p class="mb-6">
          نحن لا نخزن عفشك في أي مكان؛ مستودعاتنا مصممة خصيصاً لهذا الغرض ومهيئة بأعلى معايير السلامة والجودة:
        </p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li class="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <span class="text-[#1f70cc] font-black text-xl">✓</span>
            <div class="!text-black"><strong>الأمان والمراقبة:</strong> كاميرات CCTV 24/7 مع حراسة بشرية.</div>
          </li>
          <li class="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <span class="text-[#1f70cc] font-black text-xl">✓</span>
            <div class="!text-black"><strong>الحماية من الحرائق:</strong> كاشفات دخان ونظام سبرنكلر متطور.</div>
          </li>
          <li class="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <span class="text-[#1f70cc] font-black text-xl">✓</span>
            <div class="!text-black"><strong>النظافة والتعقيم:</strong> رش دوري للمبيدات لمنع الحشرات والقوارض.</div>
          </li>
          <li class="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <span class="text-[#1f70cc] font-black text-xl">✓</span>
            <div class="!text-black"><strong>العزل والتهوية:</strong> عزل حراري ومائي كامل لحماية العفش.</div>
          </li>
        </ul>
      </div>

      <h3 class="text-2xl font-black mb-6">آلية التخزين لدينا</h3>
      <div class="space-y-6">
        <p>نتبع خطوات صارمة لضمان سلامة القطع المخزنة:</p>
        <ol class="list-none space-y-4">
          <li class="flex gap-4">
            <span class="w-8 h-8 rounded-full bg-[#1f70cc] text-white flex items-center justify-center shrink-0 font-bold">1</span>
            <p><strong>التغليف الخاص:</strong> تغليف مقاوم للرطوبة والغبار باستخدام مواد مخصصة للتخزين طويل الأمد.</p>
          </li>
          <li class="flex gap-4">
            <span class="w-8 h-8 rounded-full bg-[#1f70cc] text-white flex items-center justify-center shrink-0 font-bold">2</span>
            <p><strong>الجرد والتوثيق:</strong> قائمة جرد مفصلة (Packing List) لكل قطعة مع تسليم العميل نسخة رسمية.</p>
          </li>
          <li class="flex gap-4">
            <span class="w-8 h-8 rounded-full bg-[#1f70cc] text-white flex items-center justify-center shrink-0 font-bold">3</span>
            <p><strong>التقسيم والتنظيم:</strong> مساحات مخصصة ومرقمة لكل عميل لمنع التداخل أو الفقدان.</p>
          </li>
        </ol>
      </div>

      <img src="/images/mst/mst2.png" alt="تخزين آمن للعفش" class="w-full h-64 md:h-96 object-cover rounded-3xl my-10 shadow-2xl" />

      <h3 class="text-2xl font-black mb-6">باقات وعقود مرنة</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div class="border-2 border-dashed border-gray-200 p-6 rounded-2xl">
          <h4 class="font-black text-[#1f70cc] mb-2">التخزين قصير المدى</h4>
          <p class="text-sm opacity-80 text-gray-500">مثالي لفترات صيانة المنزل أو انتظار جاهزية المسكن الجديد.</p>
        </div>
        <div class="border-2 border-dashed border-gray-200 p-6 rounded-2xl bg-[#D4AF37]/5">
          <h4 class="font-black text-[#1f70cc] mb-2">التخزين طويل المدى</h4>
          <p class="text-sm opacity-80 text-gray-500">للمسافرين، مع خصومات حصرية للدفعات السنوية ونصف السنوية.</p>
        </div>
      </div>
      
      <p class="text-center font-bold text-gray-600 italic">
        مع "بيت العز"، اعتبر عفشك في بيتك الثاني.. آمن، نظيف، وجاهز للاستلام في أي وقت.
      </p>
    `
  },

  // --- Features / Benefits ---
  {
    slug: 'comprehensive-warranty',
    title: 'ضمان شامل وحقيقي 100%',
    description: 'نضمن لك سلامة المنقولات من أي خدش أو كسر، ونتحمل المسؤولية الكاملة في حال حدوث أي ضرر.',
    keywords: ['شركة نقل مضمونة', 'نقل عفش مع الضمان', 'تعويض الاثاث المكسور', 'عقد نقل عفش', 'امان ونقل'],
    image: "/images/5dmat/aman.png",
    content: `
      <h2>التزامنا بسلامة منقولاتك: ضمان حقيقي وليس مجرد شعار</h2>
      <p class="text-lg leading-relaxed">
        في عالم الخدمات، "الثقة" هي العملة الأغلى. ونحن في "بيت العز" ندرك أنك عندما تسلمنا مفاتيح بيتك وأثاثك، فإنك تضع أمانة كبيرة بين أيدينا. لذلك، كسرنا حاجز الخوف والقلق من خلال تقديم <strong>ضمان شامل 100%</strong> على جميع خدماتنا.
      </p>

      <div class="bg-blue-50/50 p-8 rounded-[2rem] my-10 border border-blue-100">
        <h3 class="!text-[#D4AF37] text-2xl font-black mb-6">ماذا يعني "مشـــمول بالضمان"؟</h3>
        <p class="mb-6">
          الضمان لدينا هو عقد قانوني والتزام أخلاقي يغطي:
        </p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li class="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <span class="text-[#1f70cc] font-black text-xl">✓</span>
            <div class="!text-black"><strong>الكسر والتلف:</strong> إذا تعرضت أي قطعة للكسر أثناء الفك، النقل، أو التركيب بسببنا، نتحمل المسؤولية.</div>
          </li>
          <li class="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <span class="text-[#1f70cc] font-black text-xl">✓</span>
            <div class="!text-black"><strong>الخدوش العميقة:</strong> نضمن وصول الأثاث بدون خدوش تشوه منظره، مع تعويض أي ضرر.</div>
          </li>
          <li class="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <span class="text-[#1f70cc] font-black text-xl">✓</span>
            <div class="!text-black"><strong>الفقدان والضياع:</strong> بفضل نظام الجرد الدقيق، نضمن وصول كامل عدد القطع. تعويض فوري في حال الفقدان.</div>
          </li>
          <li class="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <span class="text-[#1f70cc] font-black text-xl">✓</span>
            <div class="!text-black"><strong>الأعطال التشغيلية:</strong> إذا قمنا بفك وتركيب جهاز وتوقف عن العمل بسبب سوء التركيب، نحن ملزمون بالإصلاح.</div>
          </li>
        </ul>
      </div>

      <div class="bg-[#1f70cc] p-8 rounded-[2rem] my-10 shadow-xl">
        <h3 class="text-white text-2xl font-black mb-6">كيف يتم تفعيل الضمان؟</h3>
        <ol class="space-y-4">
          <li class="flex items-start gap-4">
            <span class="w-8 h-8 rounded-full bg-[#D4AF37] text-white flex items-center justify-center shrink-0 font-bold">1</span>
            <p class="text-white m-0"><strong>الفحص المسبق:</strong> قبل النقل، يقوم مشرفنا بفحص الأثاث وتوثيق أي ملاحظات للحفاظ على الشفافية.</p>
          </li>
          <li class="flex items-start gap-4">
            <span class="w-8 h-8 rounded-full bg-[#D4AF37] text-white flex items-center justify-center shrink-0 font-bold">2</span>
            <p class="text-white m-0"><strong>أثناء العمل:</strong> يتم التعامل بحرص شديد، وفي حال حدوث خطأ غير مقصود، يتم إبلاغ العميل فوراً.</p>
          </li>
          <li class="flex items-start gap-4">
            <span class="w-8 h-8 rounded-full bg-[#D4AF37] text-white flex items-center justify-center shrink-0 font-bold">3</span>
            <p class="text-white m-0"><strong>بعد الانتهاء:</strong> لا يغادر فريقنا حتى يقوم العميل بجولة تفقدية ويوقع على استلام العفش سليمًا.</p>
          </li>
        </ol>
      </div>

      <h3 class="text-2xl font-black mb-6">سياسة التعويض</h3>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div class="p-6 rounded-2xl border-2 border-dashed border-blue-100 bg-white shadow-sm text-center">
          <h4 class="font-black text-[#1f70cc] mb-2">الإصلاح الفوري</h4>
          <p class="text-sm !text-black">إعادة القطعة لحالتها الأصلية عبر فنيين متخصصين.</p>
        </div>
        <div class="p-6 rounded-2xl border-2 border-dashed border-blue-100 bg-white shadow-sm text-center">
          <h4 class="font-black text-[#1f70cc] mb-2">التعويض المادي</h4>
          <p class="text-sm !text-black">دفع قيمة الضرر أو قيمة القطعة حسب سعر السوق العادل.</p>
        </div>
        <div class="p-6 rounded-2xl border-2 border-dashed border-blue-100 bg-white shadow-sm text-center">
          <h4 class="font-black text-[#1f70cc] mb-2">الاستبدال</h4>
          <p class="text-sm !text-black">استبدال القطعة المتضررة بأخرى جديدة في حالات التلف الكلي.</p>
        </div>
      </div>

      <p class="text-center font-bold text-gray-600 italic bg-gray-50 p-6 rounded-2xl border-r-4 border-[#D4AF37]">
        مع ضمان "بيت العز"، انتقل وأنت مطمئن.. حقك محفوظ وممتلكاتك في أمان.
      </p>
    `
  },
  {
    slug: 'punctuality',
    title: 'الالتزام بالمواعيد والدقة في التنفيذ',
    description: 'نقدر قيمة وقتك، لذا نلتزم بالوصول وإنجاز العمل في الوقت المتفق عليه بدقة متناهية.',
    keywords: ['نقل عفش سريع', 'دقة المواعيد', 'شركة نقل في الوقت', 'نقل عفش 24 ساعة', 'سرعة النقل'],
    image: "/images/5dmat/time.png",
    content: `
      <h2>الوقت من ذهب.. ونحن نحفظ وقتك</h2>
      <p class="text-lg leading-relaxed">
        نسمع دائماً قصصاً عن شركات نقل تأتي متأخرة لساعات، أو تستغرق أياماً في عملية نقل يمكن إنجازها في ساعات. في "بيت العز"، نؤمن أن <strong>احترام الموعد</strong> هو أول دليل على الاحترافية وجودة الخدمة.
      </p>

      <div class="bg-blue-50/50 p-8 rounded-[2rem] my-10 border border-blue-100">
        <h3 class="!text-[#D4AF37] text-2xl font-black mb-6">كيف نضمن الالتزام بالوقت؟</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
            <span class="text-[#1f70cc] font-black text-xl">✓</span>
            <div class="!text-black"><strong>جدولة دقيقة:</strong> حجز الفريق والشاحنة لك حصرياً في الموعد المحدد.</div>
          </div>
          <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
            <span class="text-[#1f70cc] font-black text-xl">✓</span>
            <div class="!text-black"><strong>الوصول المبكر:</strong> نصل قبل الموعد بـ 15 دقيقة لتجهيز المعدات.</div>
          </div>
          <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
            <span class="text-[#1f70cc] font-black text-xl">✓</span>
            <div class="!text-black"><strong>تقدير واقعي:</strong> نستطيع تقدير الوقت بدقة لترتب يومك دون مفاجآت.</div>
          </div>
          <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
            <span class="text-[#1f70cc] font-black text-xl">✓</span>
            <div class="!text-black"><strong>عدد عمالة كافٍ:</strong> نرسل العدد المناسب لإنجاز المهمة بسرعة.</div>
          </div>
        </div>
      </div>

      <div class="bg-[#1f70cc] p-8 rounded-[2rem] my-10 shadow-xl">
        <h3 class="text-white text-2xl font-black mb-4">السرعة لا تعني العجلة!</h3>
        <p class="text-white/90 leading-relaxed mb-0">
          هناك فرق كبير بين السرعة (الكفاءة) والعجلة. نحن نعمل بكفاءة عالية وبخطوات مدروسة تضمن إنجاز العمل بسرعة، دون التسرع في حمل الأثاث بشكل يهدد سلامة المنقولات. شعارنا: <strong>"سرعة الإنجاز مع دقة الأداء"</strong>.
        </p>
      </div>

      <div class="p-6 rounded-2xl bg-gray-50 border-r-4 border-[#D4AF37] mb-10">
        <h3 class="font-black text-xl text-[#1f70cc] mb-3">خدمات الطوارئ والنقل العاجل</h3>
        <p class="!text-black text-sm m-0">
          حدث طارئ واضطررت للنقل فجأة؟ لا تقلق. بفضل حجم أسطولنا الكبير، نستطيع تلبية طلبات النقل العاجلة للمساعدة الفورية.
        </p>
      </div>
    `
  },
  {
    slug: 'trained-technicians',
    title: 'عمالة فنية مدربة ومحترفة',
    description: 'فريقنا مكون من فنيين محترفين ذوي خبرة طويلة في فك وتركيب جميع أنواع الأثاث والمكيفات.',
    keywords: ['عمالة نقل عفش', 'فنيين فك وتركيب', 'عمالة فلبينية', 'عمالة مدربة', 'افضل عمال نقل', 'نجارين محترفين'],
    image: "/images/5dmat/eltzam.png",
    content: `
      <h2>رأس مالنا الحقيقي: فريق العمل المحترف</h2>
      <p class="text-lg leading-relaxed">
        قد تمتلك الشركة أحدث الشاحنات لكن إذا كان العامل سيئاً، فالنتيجة ستكون كارثية. في "بيت العز"، نعتبر الاستثمار في العنصر البشري هو أهم استثماراتنا. فريقنا ليس مجرد عمال، بل هم فنيون متخصصون ومدربون على أعلى مستوى.
      </p>

      <div class="bg-[#1f70cc] p-8 rounded-[2rem] my-10 shadow-xl text-white">
        <h3 class="!text-[#D4AF37] text-2xl font-black mb-6">مما يتكون فريق النقل لدينا؟</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
          <div class="flex gap-4">
            <span class="text-3xl font-black text-white/30">01</span>
            <div>
              <h4 class="font-bold mb-1">المشرف الميداني</h4>
              <p class="text-sm text-white/80">مسؤول التواصل وتوزيع المهام ومراقبة الجودة، وهو مرجعك المباشر.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <span class="text-3xl font-black text-white/30">02</span>
            <div>
              <h4 class="font-bold mb-1">النجارون المحترفون</h4>
              <p class="text-sm text-white/80">لفك غرف النوم الحديثة والمطابخ والتعامل مع جميع الماركات.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <span class="text-3xl font-black text-white/30">03</span>
            <div>
              <h4 class="font-bold mb-1">فنيو الكهرباء والتكييف</h4>
              <p class="text-sm text-white/80">لفك وتركيب المكيفات والأجهزة والنجف بأمان تام.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <span class="text-3xl font-black text-white/30">04</span>
            <div>
              <h4 class="font-bold mb-1">عمال التحميل والتغليف</h4>
              <p class="text-sm text-white/80">مدربون على طرق الرفع السليم والحرص الشديد أثناء التحميل.</p>
            </div>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black mb-6">معايير اختيار وتدريب العمالة</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div class="p-6 rounded-2xl bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-gray-100 text-center">
          <div class="w-12 h-12 bg-blue-50 text-[#1f70cc] rounded-xl flex items-center justify-center font-bold text-xl mb-4 mx-auto">🛡️</div>
          <h4 class="font-black text-[#1f70cc] mb-2">فحص أمني</h4>
          <p class="text-sm !text-black">للتأكد من الأمانة والسيرة الحسنة حفاظًا على خصوصية المنازل.</p>
        </div>
        <div class="p-6 rounded-2xl bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-gray-100 text-center">
          <div class="w-12 h-12 bg-blue-50 text-[#1f70cc] rounded-xl flex items-center justify-center font-bold text-xl mb-4 mx-auto">🔧</div>
          <h4 class="font-black text-[#1f70cc] mb-2">تدريب فني</h4>
          <p class="text-sm !text-black">ورش عمل مستمرة على أحدث طرق النقل والتغليف ومعدات الرفع.</p>
        </div>
        <div class="p-6 rounded-2xl bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-gray-100 text-center">
          <div class="w-12 h-12 bg-blue-50 text-[#1f70cc] rounded-xl flex items-center justify-center font-bold text-xl mb-4 mx-auto">🤝</div>
          <h4 class="font-black text-[#1f70cc] mb-2">تدريب سلوكي</h4>
          <p class="text-sm !text-black">التركيز على الابتسامة، التعامل الراقي، والهدوء التام أثناء العمل.</p>
        </div>
      </div>

      <p class="text-center font-bold text-[#1f70cc] text-lg bg-blue-50/50 p-6 rounded-2xl">
        عندما تطلب "بيت العز"، فأنت تتعامل مع محترفين يعرفون قيمة ما يحملون!
      </p>
    `
  },
  {
    slug: 'competitive-pricing',
    title: 'أسعار تنافسية وعروض مستمرة',
    description: 'نقدم لك أفضل قيمة مقابل سعر في الرياض، مع باقات مرنة تناسب ميزانيتك واحتياجاتك.',
    keywords: ['اسعار شركات نقل العفش', 'نقل عفش رخيص بالرياض', 'ارقام نقل عفش', 'تكلفة نقل الاثاث', 'خصومات نقل عفش'],
    image: "/images/5dmat/w5las.png",
    content: `
      <h2>الجودة العالية لا تعني سعراً باهظاً</h2>
      <p class="text-lg leading-relaxed">
        معادلة "السعر مقابل الجودة" هي ما نجحنا في تحقيقه. نحن نقدم خدمة احترافية بسعر يناسب ميزانية الأسرة. لا ندعي أننا الأرخص بشكل مطلق (فالرخيص جداً غالباً ما يكون سيئاً)، لكننا نعدك بأننا الأفضل قيمة والأكثر تنافسية.
      </p>

      <div class="bg-blue-50/50 p-8 rounded-[2rem] my-10 border border-blue-100">
        <h3 class="!text-[#D4AF37] text-2xl font-black mb-6">كيف نحدد الأسعار؟ بشفافية كاملة</h3>
        <p class="mb-4">السعر يعتمد على عوامل منطقية:</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li class="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <span class="text-[#1f70cc] font-black text-xl">✓</span>
            <div class="!text-black"><strong>كمية العفش:</strong> تحدد حجم الشاحنة وعدد العمال.</div>
          </li>
          <li class="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <span class="text-[#1f70cc] font-black text-xl">✓</span>
            <div class="!text-black"><strong>الخدمات المطلوبة:</strong> نقل فقط، أم إضافة التغليف والفك؟</div>
          </li>
          <li class="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <span class="text-[#1f70cc] font-black text-xl">✓</span>
            <div class="!text-black"><strong>صعوبة النقل:</strong> عدد الطوابق ووجود مصعد من عدمه.</div>
          </li>
          <li class="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <span class="text-[#1f70cc] font-black text-xl">✓</span>
            <div class="!text-black"><strong>المسافة:</strong> النقل داخل الحي أو لمدينة أخرى.</div>
          </li>
        </ul>
      </div>

      <h3 class="text-2xl font-black mb-6">باقات مرنة تناسب الجميع</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div class="p-6 rounded-2xl border-2 border-dashed border-gray-200 bg-white shadow-sm">
          <h4 class="font-black text-[#1f70cc] mb-2 text-xl">الباقة الاقتصادية</h4>
          <p class="text-sm !text-black">نقل، سيارة، وعمال (بدون تغليف)، مناسبة لمن يجهز بنفسه للتوفير.</p>
        </div>
        <div class="p-6 rounded-2xl border-2 border-solid border-[#D4AF37] bg-white relative overflow-hidden shadow-md">
          <div class="absolute -right-8 -top-8 bg-[#D4AF37] text-white py-1 w-32 text-center rotate-45 text-xs font-bold shadow-sm">VIP</div>
          <h4 class="font-black text-[#D4AF37] mb-2 text-xl">الباقة الشاملة</h4>
          <p class="text-sm !text-black">تغليف، فك، تركيب، ونقل. ريح بالك تماماً وتولى الاستلام فقط.</p>
        </div>
      </div>

      <div class="bg-[#1f70cc] p-8 rounded-[2rem] my-10 shadow-xl text-center">
        <h3 class="text-[#D4AF37] text-2xl font-black mb-4">عروض وخصومات حصــــرية</h3>
        <p class="text-white mb-6">خصومات للعملاء الجدد، لنقل عدة شقق معاً، وللجمعيات الخيرية.</p>
        <div class="inline-block bg-white text-[#1f70cc] px-8 py-3 rounded-full font-black text-lg">
          اتصل بنا لطلب معاينة مجانية (0540668896)
        </div>
      </div>
    `
  }
];
