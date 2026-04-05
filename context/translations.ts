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

  // About Overview Section
  "about_overview.hero_overline": { en: "About Us", ar: "من نحن" },
  "about_overview.hero_title_part1": { en: "Building Strong Foundations", ar: "بناء أسس قوية" },
  "about_overview.hero_title_part2": { en: "for Sustainable Growth", ar: "من أجل نمو مستدام" },
  "about_overview.hero_desc": { 
    en: "A diversified Saudi holding group focused on acquiring, developing, and scaling businesses across strategic sectors to create long-term value and economic impact.", 
    ar: "مجموعة قابضة سعودية متنوعة تركز على الاستحواذ على الأعمال وتطويرها وتوسيع نطاقها عبر القطاعات الاستراتيجية لخلق قيمة طويلة الأجل وتأثير اقتصادي." 
  },
  
  "about_overview.watermark": { en: "GROWTH", ar: "نمو" },
  
  "about_overview.overview_overline": { en: "Overview", ar: "نظرة عامة" },
  "about_overview.overview_title": { en: "A Diversified Investment Group", ar: "مجموعة استثمارية متنوعة" },
  "about_overview.overview_desc": { 
    en: "We are a Saudi-based investment holding group focused on acquiring, developing, and managing businesses across key strategic sectors. Our approach combines strong governance, operational excellence, and innovation to build sustainable growth. By enhancing company performance and unlocking new opportunities, we create long-term value for stakeholders. We aim to contribute to economic development by building a diversified portfolio that supports resilience, scalability, and continuous expansion in a dynamic market environment.", 
    ar: "نحن مجموعة استثمارية قابضة مقرها المملكة العربية السعودية تركز على الاستحواذ وتطوير وإدارة الأعمال عبر القطاعات الاستراتيجية الرئيسية. يجمع نهجنا بين الحوكمة القوية والتميز التشغيلي والابتكار لبناء نمو مستدام. من خلال تعزيز أداء الشركة وفتح فرص جديدة، نخلق قيمة طويلة الأجل لأصحاب المصلحة. نهدف إلى المساهمة في التنمية الاقتصادية من خلال بناء محفظة متنوعة تدعم المرونة وقابلية التوسع والتوسع المستمر في بيئة سوق ديناميكية." 
  },

  "about_overview.feat1_title": { en: "Integrated Strategy", ar: "استراتيجية متكاملة" },
  "about_overview.feat1_desc": { en: "Combining investment, operations, and innovation to build scalable businesses.", ar: "الجمع بين الاستثمار والعمليات والابتكار لبناء أعمال قابلة للتوسع." },
  
  "about_overview.feat2_title": { en: "Sustainable Growth", ar: "نمو مستدام" },
  "about_overview.feat2_desc": { en: "Focusing on long-term value creation across all sectors consistently.", ar: "التركيز على خلق القيمة على المدى الطويل عبر جميع القطاعات باستمرار." },
  // Direction & Values - Section 1 (Our Direction)
  "direction.overline": { en: "Our Direction", ar: "توجهنا" },
  "direction.title": { en: "Driven by Purpose and Vision", ar: "مدفوعون بالهدف والرؤية" },
  
  "direction.mission_title": { en: "Our Mission", ar: "مهمتنا" },
  "direction.mission_desc": { en: "To develop and manage high-performing businesses that deliver value, innovation, and sustainable growth across key industries and evolving market opportunities.", ar: "تطوير وإدارة أعمال عالية الأداء تقدم قيمة وابتكاراً ونمواً مستداماً عبر الصناعات الرئيسية وفرص السوق المتطورة." },
  
  "direction.vision_title": { en: "Our Vision", ar: "رؤيتنا" },
  "direction.vision_desc": { en: "To become a leading investment group recognized for building strong companies, driving diversification, and contributing to long-term economic growth.", ar: "أن نصبح مجموعة استثمارية رائدة ومعترف بها في بناء شركات قوية، ودفع عجلة التنوع، والمساهمة في النمو الاقتصادي طويل الأجل." },
  
  "direction.goals_title": { en: "Our Goals", ar: "أهدافنا" },
  "direction.goals_desc": { en: "To expand into high-potential sectors, diversify our portfolio, and build strategic partnerships that drive growth, innovation, and long-term business resilience.", ar: "التوسع في القطاعات ذات الإمكانات العالية، وتنويع محفظتنا، وبناء شراكات استراتيجية تدفع عجلة النمو والابتكار ومرونة الأعمال على المدى الطويل." },

  // Direction & Values - Section 2 (Our Values)
  "values.overline": { en: "Our Values", ar: "قيمنا" },
  "values.title": { en: "The Principles That Guide Us", ar: "المبادئ التي توجهنا" },
  
  "values.val1_title": { en: "Integrity", ar: "النزاهة" },
  "values.val1_desc": { en: "We operate with transparency, accountability, and strong ethical standards across all business activities, ensuring trust and long-term relationships.", ar: "نعمل بشفافية ومساءلة ومعايير أخلاقية قوية في جميع الأنشطة التجارية، مما يضمن الثقة والعلاقات طويلة الأجل." },
  "values.val1_tag": { en: "Built on trust and responsibility", ar: "مبنية على الثقة والمسؤولية" },
  
  "values.val2_title": { en: "Excellence", ar: "التميز" },
  "values.val2_desc": { en: "We strive for high performance, quality, and continuous improvement in every aspect of our operations and decision-making processes across all sectors.", ar: "نسعى جاهدين لتحقيق أداء عالٍ وجودة وتحسين مستمر في كل جانب من جوانب عملياتنا وعمليات صنع القرار عبر جميع القطاعات." },
  "values.val2_tag": { en: "Committed to high standards", ar: "ملتزمون بمعايير عالية" },
  
  "values.val3_title": { en: "Innovation", ar: "الابتكار" },
  "values.val3_desc": { en: "We embrace new ideas, technologies, and strategies to enhance efficiency, unlock opportunities, and remain competitive in evolving business environments.", ar: "نتبنى أفكاراً وتقنيات واستراتيجيات جديدة لتعزيز الكفاءة وفتح الفرص والبقاء في دائرة المنافسة في بيئات الأعمال المتطورة." },
  "values.val3_tag": { en: "Driven by forward thinking", ar: "مدفوعون بالتفكير المستقبلي" },
  
  "values.val4_title": { en: "Partnerships", ar: "الشراكات" },
  "values.val4_desc": { en: "We build strong collaborations that create mutual value, expand capabilities, and support sustainable growth across our network of companies.", ar: "نبني تعاونات قوية تخلق قيمة متبادلة وتوسع القدرات وتدعم النمو المستدام عبر شبكتنا من الشركات." },
  "values.val4_tag": { en: "Stronger together", ar: "أقوى معاً" },
  
  "values.val5_title": { en: "Teamwork", ar: "العمل الجماعي" },
  "values.val5_desc": { en: "We foster collaboration, shared responsibility, and collective success by empowering our teams and encouraging open communication.", ar: "نعزز التعاون والمسؤولية المشتركة والنجاح الجماعي من خلال تمكين فرقنا وتشجيع التواصل المفتوح." },
  "values.val5_tag": { en: "Empowering our people", ar: "تمكين أفرادنا" },
  
  "values.val6_title": { en: "Sustainability", ar: "الاستدامة" },
  "values.val6_desc": { en: "We focus on long-term financial stability, responsible growth, and creating lasting value that supports both business success and economic development.", ar: "نركز على الاستقرار المالي طويل الأجل، والنمو المسؤول، وخلق قيمة دائمة تدعم نجاح الأعمال والتنمية الاقتصادية." },
  "values.val6_tag": { en: "Growth with responsibility", ar: "النمو بمسؤولية" },

  // Impact & Partnership Section
  "impact.overline": { en: "Our Impact", ar: "تأثيرنا" },
  "impact.title_part1": { en: "Delivering Measurable", ar: "تحقيق نتائج قابلة للقياس" },
  "impact.title_part2": { en: "Results that Shine", ar: "ومبهرة" },
  "impact.desc": { 
    en: "Our performance is driven by consistent growth, operational strength, and a commitment to delivering measurable value across our investment portfolio.", 
    ar: "يُدفع أداؤنا بنمو مستمر وقوة تشغيلية والتزام بتقديم قيمة ملموسة عبر محفظتنا الاستثمارية." 
  },
  "impact.stat1_label": { en: "Active Sectors", ar: "قطاعات نشطة" },
  "impact.stat2_label": { en: "Companies Managed", ar: "شركات مدارة" },
  
  "partnership.title_part1": { en: "Build Strategic", ar: "بناء شراكات" },
  "partnership.title_part2": { en: "Partnerships", ar: "استراتيجية" },
  "partnership.desc": { 
    en: "Collaborate with us to explore new opportunities, expand capabilities, and create long-term value through strong and mutually beneficial partnerships.", 
    ar: "تعاون معنا لاستكشاف فرص جديدة، وتوسيع القدرات، وخلق قيمة طويلة الأجل من خلال شراكات قوية ومتبادلة المنفعة." 
  },
  "partnership.btn_explore": { en: "Explore Sectors", ar: "استكشف القطاعات" },
  "partnership.btn_contact": { en: "Contact Our Team", ar: "تواصل مع فريقنا" },

  // Approach Section
  "approach.overline": { en: "OUR APPROACH", ar: "نهجنا" },
  "approach.title_part1": { en: "Delivering More Than", ar: "تقديم ما هو أكثر" },
  "approach.title_part2": { en: "Investment", ar: "من مجرد استثمار" },
  "approach.desc": { 
    en: "We go beyond capital by actively supporting our companies, strengthening operations, and enabling long-term growth through strategic direction and expertise.", 
    ar: "نحن نذهب إلى ما هو أبعد من توفير رأس المال من خلال الدعم النشط لشركاتنا، وتعزيز العمليات، وتمكين النمو طويل الأجل من خلال التوجيه الاستراتيجي والخبرات." 
  },
  
  "approach.card1_num": { en: "01. Active Management", ar: "01. الإدارة النشطة" },
  "approach.card1_title": { en: "HANDS-ON INVOLVEMENT", ar: "المشاركة العملية" },
  "approach.card1_desc": { en: "We actively support our companies by guiding operations, improving structures, and ensuring alignment with long-term strategic objectives.", ar: "نحن ندعم شركاتنا بفعالية من خلال توجيه العمليات، وتحسين الهياكل، وضمان التوافق مع الأهداف الاستراتيجية طويلة الأجل." },

  "approach.card2_num": { en: "02. Strategic Growth", ar: "02. النمو الاستراتيجي" },
  "approach.card2_title": { en: "OPERATIONAL EXCELLENCE", ar: "التميز التشغيلي" },
  "approach.card2_desc": { en: "We prioritize sustainable expansion by identifying opportunities, optimizing performance, and building strong foundations that support continuous and scalable business growth.", ar: "نعطي الأولوية للتوسع المستدام من خلال تحديد الفرص، وتحسين الأداء، وبناء أسس قوية تدعم نمو الأعمال بشكل مستمر وقابل للتوسع." },

  "approach.card3_num": { en: "03. Market Adaptability", ar: "03. القدرة على التكيف مع السوق" },
  "approach.card3_title": { en: "FLEXIBLE APPROACH", ar: "نهج مرن" },
  "approach.card3_desc": { en: "We adapt to changing market conditions by evolving strategies, exploring new sectors, and maintaining flexibility to ensure resilience and ongoing success.", ar: "نتكيف مع ظروف السوق المتغيرة من خلال تطوير الاستراتيجيات، واستكشاف قطاعات جديدة، والحفاظ على المرونة لضمان القدرة على الصمود والنجاح المستمر." },

  // Commitment Section
  "commitment.overline": { en: "OUR COMMITMENT", ar: "التزامنا" },
  "commitment.title": { en: "Focused on Long-Term Success", ar: "التركيز على النجاح طويل الأجل" },
  "commitment.desc": { 
    en: "We are committed to building strong, sustainable businesses that deliver long-term value. Through disciplined investment strategies, operational excellence, and continuous innovation, we support our companies in achieving consistent growth and performance. Our focus remains on creating a balanced portfolio that adapts to market changes while maintaining stability. By aligning our goals with economic development, we contribute to building a stronger and more resilient business environment.", 
    ar: "نحن ملتزمون ببناء أعمال قوية ومستدامة تقدم قيمة طويلة الأجل. من خلال استراتيجيات الاستثمار المنضبطة، والتميز التشغيلي، والابتكار المستمر، ندعم شركاتنا في تحقيق نمو وأداء متسقين. يظل تركيزنا منصباً على بناء محفظة متوازنة تتكيف مع تغيرات السوق مع الحفاظ على الاستقرار. من خلال مواءمة أهدافنا مع التنمية الاقتصادية، نساهم في بناء بيئة أعمال أقوى وأكثر مرونة." 
  },

  "commitment.point1_title": { en: "Sustainable Value", ar: "قيمة مستدامة" },
  "commitment.point1_desc": { en: "Focused on long-term growth and consistent value creation across sectors.", ar: "التركيز على النمو طويل الأجل وخلق القيمة بشكل مستمر عبر القطاعات." },

  "commitment.point2_title": { en: "Strong Foundations", ar: "أسس قوية" },
  "commitment.point2_desc": { en: "Building resilient businesses with structured operations and clear strategic direction.", ar: "بناء أعمال مرنة تعتمد على عمليات منظمة وتوجه استراتيجي واضح." },

  // Explore Companies CTA Section
  "explore_cta.title": { en: "Explore Our Companies", ar: "استكشف شركاتنا" },
  "explore_cta.desc": { 
    en: "Learn more about our group of companies and how each contributes to building a strong, diversified, and high-performing investment portfolio.", 
    ar: "تعرف أكثر على مجموعة شركاتنا وكيف تساهم كل منها في بناء محفظة استثمارية قوية ومتنوعة وعالية الأداء." 
  },
  "explore_cta.btn_explore": { en: "Explore Sectors", ar: "استكشف القطاعات" },
  "explore_cta.btn_contact": { en: "Contact Our Team", ar: "تواصل مع فريقنا" },

  // How We Deliver Value Section
  "deliver.overline": { en: "OUR ADVANTAGE", ar: "ميزتنا" },
  "deliver.title": { en: "How We Deliver Value", ar: "كيف نقدم القيمة" },
  "deliver.watermark": { en: "INNOVAT", ar: "ابتكار" },

  "deliver.step1_num": { en: "01", ar: "٠١" },
  "deliver.step1_title": { en: "IDENTIFY", ar: "تحديد" },
  "deliver.step1_desc": { en: "We identify high-potential opportunities aligned with market demand, long-term growth, and strategic investment value.", ar: "نحدد الفرص ذات الإمكانات العالية التي تتماشى مع طلب السوق، والنمو طويل الأجل، وقيمة الاستثمار الاستراتيجي." },

  "deliver.step2_num": { en: "02", ar: "٠٢" },
  "deliver.step2_title": { en: "DEVELOP", ar: "تطوير" },
  "deliver.step2_desc": { en: "We enhance operations, improve performance, and build strong foundations for scalable and sustainable business growth.", ar: "نعمل على تعزيز العمليات وتحسين الأداء وبناء أسس قوية لنمو أعمال قابل للتوسع ومستدام." },

  "deliver.step3_num": { en: "03", ar: "٠٣" },
  "deliver.step3_title": { en: "EXPAND", ar: "توسيع" },
  "deliver.step3_desc": { en: "We scale businesses into new markets and sectors to maximize reach, impact, and long-term value.", ar: "نقوم بتوسيع نطاق الأعمال في أسواق وقطاعات جديدة لزيادة الوصول والتأثير والقيمة طويلة الأجل." },

  // Why Choose Us Section
  "choose.overline": { en: "OUR STRENGTHS", ar: "نقاط قوتنا" },
  "choose.title": { en: "Why Choose Us", ar: "لماذا تختارنا" },
  "choose.footer": { en: "STRATEGIC BUSINESS UNIT", ar: "وحدة أعمال استراتيجية" },

  "choose.card1_title": { en: "Diversification", ar: "التنوع" },
  "choose.card1_desc": { 
    en: "We operate across multiple sectors to reduce risk, enhance stability, and ensure consistent growth through a well-balanced investment portfolio.", 
    ar: "نحن نعمل عبر قطاعات متعددة لتقليل المخاطر وتعزيز الاستقرار وضمان النمو المستمر من خلال محفظة استثمارية متوازنة." 
  },

  "choose.card2_title": { en: "Expertise", ar: "الخبرة" },
  "choose.card2_desc": { 
    en: "Strong experience in managing, developing, and scaling businesses across industries with a focus on performance and long-term value creation.", 
    ar: "خبرة قوية في إدارة وتطوير وتوسيع نطاق الأعمال عبر الصناعات مع التركيز على الأداء وخلق القيمة طويلة الأجل." 
  },

  "choose.card3_title": { en: "Innovation", ar: "الابتكار" },
  "choose.card3_desc": { 
    en: "We embrace innovation and digital transformation to improve efficiency, create opportunities, and stay competitive in evolving market environments.", 
    ar: "نتبنى الابتكار والتحول الرقمي لتحسين الكفاءة وخلق الفرص والبقاء في دائرة المنافسة في بيئات السوق المتطورة." 
  },

  "choose.card4_title": { en: "Partnerships", ar: "الشراكات" },
  "choose.card4_desc": { 
    en: "We build strong partnerships to expand capabilities, access new markets, and create mutually beneficial long-term business relationships.", 
    ar: "نبني شراكات قوية لتوسيع القدرات والوصول إلى أسواق جديدة وخلق علاقات عمل طويلة الأجل متبادلة المنفعة." 
  },

  // Trusted Partner Section
  "trusted.overline": { en: "WHY CHOOSE US", ar: "لماذا تختارنا" },
  "trusted.title_part1": { en: "A Trusted Partner for", ar: "شريك موثوق" },
  "trusted.title_part2": { en: "Sustainable Growth", ar: "لنمو مستدام" },
  "trusted.desc": { 
    en: "We combine expertise, strategy, and innovation to deliver consistent value, strong performance, and long-term business growth across sectors.", 
    ar: "نحن نجمع بين الخبرة والاستراتيجية والابتكار لتقديم قيمة متسقة، وأداء قوي، ونمو أعمال طويل الأجل عبر القطاعات." 
  },

};