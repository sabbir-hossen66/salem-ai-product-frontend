export type Language = "en" | "ar";

export const translations: Record<string, Record<Language, string>> = {
  // Navbar
  "nav.home":         { en: "HOME",         ar: "الرئيسية" },
  "nav.about":        { en: "ABOUT",        ar: "من نحن" },
  "nav.sectors":      { en: "SECTORS",      ar: "القطاعات" },
  "nav.whychooseus":  { en: "WHY CHOOSE US", ar: "لماذا نحن" },
  "nav.contact":      { en: "Contact Us",   ar: "تواصل معنا" },

 
  // ── Hero Top ──
  "hero.subtitle":    { en: "Strategic Investment Group",  ar: "مجموعة الاستثمار الاستراتيجي" },
  "hero.title":       { en: "Building Sustainable Business Growth", ar: "بناء نمو تجاري مستدام" },
  "hero.description": {
    en: "A diversified Saudi holding group focused on acquiring, developing, and scaling businesses across strategic sectors to create long-term value and economic impact.",
    ar: "مجموعة قابضة سعودية متنوعة تركز على الاستحواذ وتطوير وتوسيع الأعمال عبر القطاعات الاستراتيجية لخلق قيمة طويلة الأمد وأثر اقتصادي.",
  },
  "hero.btn1":        { en: "Explore Our Business", ar: "استكشف أعمالنا" },
  "hero.btn2":        { en: "Our Vision",            ar: "رؤيتنا" },
 
  // ── Hero Cards ──
  "hero.card1.title": { en: "Growth Focus",      ar: "التركيز على النمو" },
  "hero.card1.desc":  {
    en: "We identify high-potential opportunities and scale them through structured strategies and operational improvements.",
    ar: "نحدد الفرص عالية الإمكانات ونوسعها من خلال استراتيجيات منظمة وتحسينات تشغيلية.",
  },
  "hero.card2.title": { en: "Diverse Sectors",   ar: "قطاعات متنوعة" },
  "hero.card2.desc":  {
    en: "Operating across multiple industries, we build resilience through diversification, ensuring stability and adaptability.",
    ar: "نعمل عبر صناعات متعددة، ونبني المرونة من خلال التنويع لضمان الاستقرار والقدرة على التكيف.",
  },
  "hero.card3.title": { en: "Strategic Vision",  ar: "الرؤية الاستراتيجية" },
  "hero.card3.desc":  {
    en: "Guided by clear direction and innovation, we align our investments with future opportunities to maximize value.",
    ar: "بتوجيه واضح وابتكار مستمر، نوائم استثماراتنا مع الفرص المستقبلية لتعظيم القيمة.",
  },
 
  // ── Hero Stats ──
  "hero.stat1.title": { en: "Active Sectors",      ar: "قطاعات نشطة" },
  "hero.stat1.desc":  {
    en: "Operating across diverse industries to ensure growth, resilience, and strong market positioning through strategic diversification.",
    ar: "نعمل عبر صناعات متنوعة لضمان النمو والمرونة والتموضع القوي في السوق من خلال التنويع الاستراتيجي.",
  },
  "hero.stat2.title": { en: "Companies Managed",   ar: "شركات مُدارة" },
  "hero.stat2.desc":  {
    en: "A growing portfolio of businesses developed and optimized to deliver performance, efficiency, and long-term value.",
    ar: "محفظة متنامية من الأعمال التي تم تطويرها وتحسينها لتحقيق الأداء والكفاءة والقيمة على المدى البعيد.",
  },
  "hero.stat3.title": { en: "Strategic Sectors",   ar: "قطاعات استراتيجية" },
  "hero.stat3.desc":  {
    en: "Dedicated to excellence, innovation, and operational efficiency in every project, partnership, and investment we undertake.",
    ar: "ملتزمون بالتميز والابتكار والكفاءة التشغيلية في كل مشروع وشراكة واستثمار نقوم به.",
  },

  // About
  "about.title":      { en: "About Us", ar: "من نحن" },

  // Sectors
  "sectors.title":    { en: "Our Sectors", ar: "قطاعاتنا" },

  // Footer - Brand & About
  "footer.brand":     { en: "SALEM -AL GROUP", ar: "مجموعة سالم" },
  "footer.desc":      { 
    en: "Salem Al-Subaie Group Holding is a Saudi-based investment company focused on building, developing, and managing businesses across multiple sectors. Through a structured approach to investment and operations, the group delivers sustainable growth, long-term value, and meaningful economic impact.", 
    ar: "مجموعة سالم آل سبيع القابضة هي شركة استثمارية مقرها المملكة العربية السعودية تركز على بناء وتطوير وإدارة الأعمال عبر قطاعات متعددة. من خلال نهج منظم للاستثمار والعمليات، تحقق المجموعة نمواً مستداماً، وقيمة طويلة الأجل، وتأثيراً اقتصادياً هادفاً." 
  },

  // Footer - Links Columns
  "footer.col_home":  { en: "Home", ar: "الرئيسية" },
  "footer.overview":  { en: "Overview", ar: "نظرة عامة" },
  "footer.directions":{ en: "Directions", ar: "الاتجاهات" },
  "footer.values":    { en: "Values", ar: "القيم" },

  "footer.col_explore":{ en: "Explore", ar: "استكشف" },
  "footer.about":     { en: "About", ar: "من نحن" },
  "footer.sectors":   { en: "Sectors", ar: "القطاعات" },

  "footer.col_social":{ en: "Social", ar: "التواصل الاجتماعي" },
  "footer.facebook":  { en: "Facebook", ar: "فيسبوك" },
  "footer.linkedin":  { en: "LinkedIn", ar: "لينكد إن" },
  "footer.instagram": { en: "Instagram", ar: "إنستغرام" },

  // Footer - Copyright
  "footer.copyright": { 
    en: "© 2024 Salem Al-Subaie Group. All Rights Reserved", 
    ar: "© 2024 مجموعة سالم آل سبيع. جميع الحقوق محفوظة" 
  },
  // Call To Action (CTA)
  "cta.title_part1":  { en: "Partner With Us to Build", ar: "شراكة معنا لبناء" },
  "cta.title_part2":  { en: "Long-Term Value", ar: "قيمة طويلة الأجل" },
  "cta.desc":         { 
    en: "We collaborate with investors, entrepreneurs, and organizations to identify strategic opportunities and develop high-performing businesses across key sectors.", 
    ar: "نحن نتعاون مع المستثمرين ورواد الأعمال والمنظمات لتحديد الفرص الاستراتيجية وتطوير أعمال عالية الأداء عبر القطاعات الرئيسية." 
  },
  "cta.portfolio":    { en: "Explore Our Portfolio", ar: "استكشف محفظتنا" },
  "cta.contact":      { en: "Contact Our Team", ar: "تواصل مع فريقنا" },

  // Portfolio & Strategy - Section 1
  "portfolio.overline":       { en: "Our Companies", ar: "شركاتنا" },
  "portfolio.title_part1":    { en: "A Portfolio Built for", ar: "محفظة مبنية من أجل" },
  "portfolio.title_part2":    { en: "Growth", ar: "النمو" },
  "portfolio.desc":           { 
    en: "A diverse group of companies working together to deliver value, innovation, and sustainable business growth.", 
    ar: "مجموعة متنوعة من الشركات تعمل معاً لتقديم القيمة والابتكار ونمو الأعمال المستدام." 
  },
  "portfolio.card1_num":      { en: "01. Diverse Operations", ar: "01. عمليات متنوعة" },
  "portfolio.card1_title":    { en: "Multi-Industry Presence", ar: "تواجد في صناعات متعددة" },
  "portfolio.card1_desc":     { en: "Companies operating across sectors including technology, services, and infrastructure.", ar: "شركات تعمل عبر قطاعات تشمل التكنولوجيا والخدمات والبنية التحتية." },
  
  "portfolio.card2_num":      { en: "02. Operational Excellence", ar: "02. التميز التشغيلي" },
  "portfolio.card2_title":    { en: "Operational Excellence", ar: "التميز التشغيلي" },
  "portfolio.card2_desc":     { en: "Each company is structured to achieve efficiency, performance, and long-term success.", ar: "تمت هيكلة كل شركة لتحقيق الكفاءة والأداء والنجاح على المدى الطويل." },
  
  "portfolio.card3_num":      { en: "03. Growth Driven", ar: "03. مدفوعة بالنمو" },
  "portfolio.card3_title":    { en: "Growth Driven", ar: "مدفوعة بالنمو" },
  "portfolio.card3_desc":     { en: "Focused on scaling operations and expanding into new opportunities and markets.", ar: "تركز على توسيع نطاق العمليات والتوسع في فرص وأسواق جديدة." },

  // Portfolio & Strategy - Section 2
  "strategy.overline":        { en: "Strategic Direction", ar: "التوجه الاستراتيجي" },
  "strategy.title":           { en: "Driving Sustainable Growth Through Structured Investment", ar: "دفع النمو المستدام من خلال الاستثمار المنظم" },
  "strategy.desc":            { 
    en: "We adopt a disciplined investment approach focused on identifying high-potential opportunities, strengthening operational performance, and scaling businesses across strategic sectors.", 
    ar: "نعتمد نهجاً استثمارياً منضبطاً يركز على تحديد الفرص ذات الإمكانات العالية، وتعزيز الأداء التشغيلي، وتوسيع نطاق الأعمال عبر القطاعات الاستراتيجية." 
  },
  "strategy.feature_title":   { en: "Integrated Investment Model", ar: "نموذج استثمار متكامل" },
  "strategy.feature_desc":    { en: "Combining acquisition, development, and operational excellence to maximize long-term business value.", ar: "الجمع بين الاستحواذ والتطوير والتميز التشغيلي لتعظيم قيمة الأعمال على المدى الطويل." },

  // Value & Strengths - Section 1 (How We Create Value)
  "value.overline":           { en: "Our Approach", ar: "نهجنا" },
  "value.title":              { en: "How We Create Value", ar: "كيف نخلق القيمة" },
  
  "value.step1_title":        { en: "Acquire", ar: "الاستحواذ" },
  "value.step1_desc":         { en: "We identify promising businesses and opportunities with strong potential for growth, sustainability, and long-term strategic value creation across key sectors.", ar: "نحدد الأعمال والفرص الواعدة ذات الإمكانات القوية للنمو والاستدامة وخلق القيمة الاستراتيجية طويلة الأجل عبر القطاعات الرئيسية." },
  
  "value.step2_title":        { en: "Develop", ar: "التطوير" },
  "value.step2_desc":         { en: "We enhance operational efficiency, restructure processes, and strengthen capabilities to improve performance and position businesses for scalable growth.", ar: "نعمل على تعزيز الكفاءة التشغيلية، وإعادة هيكلة العمليات، وتقوية القدرات لتحسين الأداء ووضع الأعمال على طريق النمو القابل للتوسع." },
  
  "value.step3_title":        { en: "Optimize", ar: "التحسين" },
  "value.step3_desc":         { en: "We refine systems, improve management practices, and implement innovations to maximize efficiency, profitability, and long-term operational stability.", ar: "نقوم بتنقيح الأنظمة، وتحسين الممارسات الإدارية، وتنفيذ الابتكارات لتعظيم الكفاءة والربحية والاستقرار التشغيلي على المدى الطويل." },
  
  "value.step4_title":        { en: "Expand", ar: "التوسع" },
  "value.step4_desc":         { en: "We scale businesses into new markets, sectors, and opportunities to increase impact, reach, and overall investment value.", ar: "نوسع نطاق الأعمال في أسواق وقطاعات وفرص جديدة لزيادة التأثير والوصول وقيمة الاستثمار الإجمالية." },

  // Value & Strengths - Section 2 (Why Choose Us)
  "strengths.overline":       { en: "Our Strengths", ar: "نقاط قوتنا" },
  "strengths.title":          { en: "Why Choose Us", ar: "لماذا تختارنا" },
  "strengths.learn_more":     { en: "Learn More", ar: "اعرف المزيد" },
  "strengths.card_tag":       { en: "Strategic Business Unit", ar: "وحدة أعمال استراتيجية" },

  "strengths.card1_title":    { en: "Diversification", ar: "التنوع" },
  "strengths.card1_desc":     { en: "We operate across multiple sectors to reduce risk, enhance stability, and ensure consistent growth through a well-balanced investment portfolio.", ar: "نعمل عبر قطاعات متعددة للحد من المخاطر، وتعزيز الاستقرار، وضمان النمو المستمر من خلال محفظة استثمارية متوازنة." },
  
  "strengths.card2_title":    { en: "Expertise", ar: "الخبرة" },
  "strengths.card2_desc":     { en: "Strong experience in managing, developing, and scaling businesses across industries with a focus on performance and long-term value creation.", ar: "خبرة قوية في إدارة وتطوير وتوسيع نطاق الأعمال عبر الصناعات مع التركيز على الأداء وخلق القيمة على المدى الطويل." },
  
  "strengths.card3_title":    { en: "Innovation", ar: "الابتكار" },
  "strengths.card3_desc":     { en: "We embrace innovation and digital transformation to improve efficiency, create opportunities, and stay competitive in evolving market environments.", ar: "نتبنى الابتكار والتحول الرقمي لتحسين الكفاءة، وخلق الفرص، والبقاء في دائرة المنافسة في بيئات السوق المتطورة." },
  
  "strengths.card4_title":    { en: "Partnerships", ar: "الشراكات" },
  "strengths.card4_desc":     { en: "We build strong partnerships to expand capabilities, access new markets, and create mutually beneficial long-term business relationships.", ar: "نبني شراكات قوية لتوسيع القدرات، والوصول إلى أسواق جديدة، وخلق علاقات عمل طويلة الأجل متبادلة المنفعة." },

  // Who We Are Section
  "whoare.overline": { en: "Who We Are", ar: "من نحن" },
  "whoare.title": { en: "A Strong Foundation for Sustainable Growth", ar: "أساس قوي للنمو المستدام" },
  "whoare.quote": { 
    en: '"We build value-driven businesses through innovation, strategic investment, and a long-term vision focused on growth and economic impact."', 
    ar: '"نبني أعمالاً قائمة على القيمة من خلال الابتكار والاستثمار الاستراتيجي ورؤية طويلة الأجل تركز على النمو والتأثير الاقتصادي."' 
  },
  "whoare.feature1_title": { en: "Integrated Approach", ar: "نهج متكامل" },
  "whoare.feature1_desc": { en: "We combine strategy, operations, and innovation to build scalable businesses.", ar: "نجمع بين الاستراتيجية والعمليات والابتكار لبناء أعمال قابلة للتوسع." },
  "whoare.feature2_title": { en: "Long-Term Focus", ar: "تركيز طويل الأجل" },
  "whoare.feature2_desc": { en: "We prioritize sustainable growth and lasting value over short-term gains.", ar: "نعطي الأولوية للنمو المستدام والقيمة الدائمة على المكاسب قصيرة الأجل." },
  "whoare.alt_img1": { en: "Salem Al-Subaie Holding Group Logo on Wall", ar: "شعار مجموعة سالم آل سبيع القابضة على الحائط" },
  "whoare.alt_img2": { en: "Arabic Calligraphy on Wall", ar: "تخطيط عربي على الحائط" },


};