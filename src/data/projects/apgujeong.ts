import { ProjectData } from "@/types/project";

const apgujeong: ProjectData = {
  slug: "apgujeong",
  meta: {
    title: "압구정삼성",
    description: "과거의 압구정을 넘어서는 건 오직 압구정 삼성 입니다",
    ogImage: "/images/apgujeong/thumbs2.png",
  },
  theme: {
    primaryColor: "#AF8664",
    secondaryColor: "#009DAD",
  },
  sections: {
    hero: {
      location: { top: "대한민국", bottom: "압구정" },
      maskImages: [
        { src: "/images/apgujeong/s1_mask_1.png", duration: 1500, zoom: true },
        { src: "/images/apgujeong/s1_mask_2.png", duration: 1500, zoom: true },
        { src: "/images/apgujeong/s1_mask_3.png", duration: 1500, zoom: true },
        { src: "/images/apgujeong/s1_mask_5.png", duration: 3000, zoom: false },
      ],
      lastMaskImage: "/images/apgujeong/s1_mask_6.png",
      tagline: "Beyond Expectations",
      mainText: "과거의 압구정을 넘어서는 건\n오직 ",
      mainTextAccent: "압구정 삼성",
      title: "APGUJEONG / SAMSUNG",
      subtitle: { left: "압구정", right: "삼성" },
      bottomImage: "/images/apgujeong/s1_bot_txt.png",
      arrowImage: "/images/apgujeong/s1_arr.svg",
      scrollArrowImage: "/images/apgujeong/s1_arr.svg",
    },
    story: {
      title: ["권력과 여유,", "부와 풍류를 상징하는", "이름이 되다."],
      paintingImage: "/images/apgujeong/s2_paint_1.png",
      paintingBg: "/images/apgujeong/s2_paint_2.png",
      overlayBgImage: "/images/apgujeong/s2_paint_3.png",
      overlayTitle: "압구정.",
      overlayText: "'압구정'은 조선 초기 권력자였던 한명회가\n자신의 권세를 누리며 즐겨 찾았던\n정자에서 유래한 이름으로,\n명나라 사신 예겸이 '갈매기와 친하게 지내는\n정자'라는 뜻으로 지었다고 전해집니다.",
      scrollArrowImage: "/images/apgujeong/s2_arr.svg",
    },
    gallery: {
      images: [
        { src: "/images/apgujeong/s3_img_1.png", className: "w-[23rem] top-[20vh] left-[5.8%]", speed: 5.2 },
        { src: "/images/apgujeong/s3_img_2.png", className: "w-[20rem] top-[53vh] right-[-10%]", speed: 4.2 },
        { src: "/images/apgujeong/s3_img_3.png", className: "w-[27.5rem] top-[80vh] left-[-1%]", speed: 4.3 },
        { src: "/images/apgujeong/s3_img_4.png", className: "w-[17.2rem] top-[110vh] right-0", speed: 4.6 },
        { src: "/images/apgujeong/s3_img_5.png", className: "w-[16rem] top-[135vh] left-[5%]", speed: 4.4 },
        { src: "/images/apgujeong/s3_img_6.png", className: "w-[18rem] top-[170vh] right-0", speed: 5.4 },
        { src: "/images/apgujeong/s3_img_7.png", className: "w-[22.4rem] top-[200vh] left-0", speed: 4.2 },
        { src: "/images/apgujeong/s3_img_8.png", className: "w-[26.4rem] top-[220vh] right-[-18%]", speed: 5.4 },
        { src: "/images/apgujeong/s3_img_9.png", className: "w-[27.2rem] top-[280vh] left-[2%]", speed: 4.7 },
        { src: "/images/apgujeong/s3_img_10.png", className: "w-[15.2rem] top-[280vh] right-[-5%]", speed: 5.2 },
        { src: "/images/apgujeong/s3_img_11.png", className: "w-[18.6rem] top-[350vh] left-[10%]", speed: 4.6 },
        { src: "/images/apgujeong/s3_img_13.png", className: "w-[24rem] top-[360vh] right-0", speed: 5.4 },
        { src: "/images/apgujeong/s3_img_14.png", className: "w-[25.3rem] top-[390vh] left-[20%]", speed: 4.6 },
        { src: "/images/apgujeong/s3_img_15.png", className: "w-[25rem] top-[420vh] right-[4%]", speed: 4.3 },
      ],
      textPanels: [
        { cols: ["대한민국을 바꾼", "강남시대의 시작"] },
        { cols: ["최신 트렌드와", "소비 문화를 누리는"] },
        { cols: ["선망의 대상"] },
        { cols: ["대한민국을", "대표하는 부촌"] },
        { cols: ["대한민국 압구정"] },
      ],
    },
    plan: {
      backgroundImage: "/images/apgujeong/s4_bg.png",
      subtitle: "WORLD CLASS PLAN",
      title: "삼성, 압구정의 가치를 보다.",
      description: "삼성은 압구정의 현재를 통해\n더 큰 미래가치를 내다봅니다.",
      arrowImage: "/images/apgujeong/s4_arr.svg",
    },
    features: {
      sectionTitle: "압구정 입지 종합 분석",
      tabs: [
        {
          label: "KEY FEATURE 1",
          title: "자연 환경 프리미엄을 누리는\n한강과 서울숲 조망권",
          description: "한강뷰와 더불어 녹지 비율이 높은\n공원형 열린 단지로 계획되는 압구정",
          images: ["/images/apgujeong/s5_t1_1.jpg", "/images/apgujeong/s5_t1_2.jpg", "/images/apgujeong/s5_t1_3.jpg"],
        },
        {
          label: "KEY FEATURE 2",
          title: "강남 등\n광역 업무 지구 배후",
          description: "강남, 신사, 역삼, 삼성 등이 포함된\n강남업무지구(GBC)등 개발호재",
          images: ["/images/apgujeong/s5_t2_1.jpg", "/images/apgujeong/s5_t2_2.jpg", "/images/apgujeong/s5_t2_3.jpg"],
        },
        {
          label: "KEY FEATURE 3",
          title: "우수한 생활,\n상업 환경 인프라",
          description: "신사와 청담을 포함하는 강남 핵심 상권으로, 의료,\n쇼핑, 교육 등 소비력과 입지 경쟁력을 갖춘 인프라",
          images: ["/images/apgujeong/s5_t3_1.jpg", "/images/apgujeong/s5_t3_2.jpg", "/images/apgujeong/s5_t3_3.jpg"],
        },
      ],
      prevImage: "/images/apgujeong/s5_prev.svg",
      nextImage: "/images/apgujeong/s5_next.svg",
    },
    landmark: {
      backgroundImage: "/images/apgujeong/s6_img.png",
      accentText: "대한민국의 세계적 랜드마크 입지",
      title: "오직, 압구정뿐입니다.",
      description: "강남의 도시적 모습과 한강의 자연,\n다양한 생활 인프라가 어우러지는\n서울의 최고 프리미엄 지구.\n압구정은 이제 세계적 랜드마크가 됩니다.",
      marqueeImage: "/images/apgujeong/s6_marque.png",
    },
    cases: {
      panels: [
        {
          title: ["초고층 빌딩 숲 뉴욕,", "맨해튼의 주거 랜드마크를", "연구하다."],
          items: [
            {
              subtitle: "432 Park Avenue",
              name: "432 파크애비뉴",
              description: "맨해튼 중심부 미드타운 이스트 지역에 위치한 초고층 럭셔리 주상복합 건물로, 세계에서 가장 높은 주거용 빌딩 중 하나이며 뉴욕의 스카이라인을 상징하는 랜드마크입니다.",
              image: "/images/apgujeong/s7_img_1.png",
            },
            {
              subtitle: "35 Hudson Yards",
              name: "35 허드슨 야드",
              description: "뉴욕 맨해튼 허드슨 야드 개발지구에 위치한 92층 초고층 복합 프리미엄 건물로, 세계적인 건축가와 디자이너들이 참여한 이 건물은 뉴욕의 새로운 중심지에서 최고급 라이프스타일을 제공합니다.",
              image: "/images/apgujeong/s7_img_2.png",
            },
          ],
        },
        {
          title: ["자연과 접한", "런던 나이츠 브리지의", "고급 주거단지를 연구하다."],
          items: [
            {
              subtitle: "One Hyde Park",
              name: "원 하이드 파크",
              description: "하이드 파크의 자연과 나이츠 브리지의 도시적 세련미가 공존하는 세계 최고급 주거 단지 중 하나로, 런던의 부와 권력을 상징하는 주거 랜드마크입니다.",
              image: "/images/apgujeong/s7_img_3.png",
            },
          ],
        },
      ],
    },
    buildings: {
      title: ["삼성의 세계 최고 기술력으로", "더 안전하게, 더 빠르게"],
      accentTitle: "삼성이 건설한 세계적인 랜드마크",
      description: ["삼성은 세계 최고 높이의 빌딩을 비롯 다수의", "초고층 프로젝트 성공으로 기술력을 입증했습니다."],
      items: [
        { num: 828, image: "/images/apgujeong/s8_img_1.png", label: "세계 최고층", name: "부르즈 칼리파", floors: "163층" },
        { num: 678, image: "/images/apgujeong/s8_img_2.png", label: "동남아 최고층", name: "메르데카118", floors: "118층" },
        { num: 508, image: "/images/apgujeong/s8_img_3.png", label: "대만 최고층", name: "타이베이101", floors: "101층" },
        { num: 462, image: "/images/apgujeong/s8_img_4.png", label: "유럽 최고층", name: "라흐타 센터", floors: "87층" },
        { num: 452, image: "/images/apgujeong/s8_img_5.png", label: "세계 최고층 쌍둥이 타워", name: "페트로나스 타워", floors: "88층" },
        { num: 265, image: "/images/apgujeong/s8_img_6.png", label: "국내 최초 초고층 주상복합", name: "타워팰리스", floors: "69층" },
        { num: 202, image: "/images/apgujeong/s8_img_7.png", label: "한강변 최고층 아파트", name: "레미안 첼리투스", floors: "56층" },
      ],
      prevImage: "/images/apgujeong/s8_prev.png",
      nextImage: "/images/apgujeong/s8_next.png",
      skylineTitle: "WORLD LANDMARK SKYLINE",
      skylineDescription: [
        "랜드마크의 기준이 되는 스카이라인 설계",
        "다수의 초고층 프로젝트 성공으로 입증된",
        "70층 압구정 랜드마크 건설의 완벽한 파트너입니다.",
      ],
      skylineImage: "/images/apgujeong/s8_land_img.png",
    },
    technology: {
      title: ["삼성의 조망특화 설계로", "더 넓고 아름답게"],
      description: [
        "삼성의 혁신적인 생각과 축적된 설계 기술,",
        "첨단 시뮬레이션을 활용한 조망 특화 설계로 각",
        "세대에 최고의 조망을 선사합니다.",
      ],
      tabs: [
        {
          label: "조망특화 설계",
          techLabel: "TECH 01",
          title: "한남4구역 재개발 한강 조망 시뮬레이션",
          titleImage: "/images/apgujeong/s9_pop_txt_1.png",
          images: [
            { src: "/images/apgujeong/s9_pop_img_11.png" },
            { src: "/images/apgujeong/s9_pop_img_12.png" },
          ],
          detail: {
            title: "파라메트릭 자동배치 시스템",
            description: "조합 원안설계 대비 한강조망세대를 극대화한 한남4구역 재개발, 여의도대교 재건축과 같이 삼성은 주변의 자연환경을 최고의 프리미엄으로 바꾸는 특화 설계를 통해 조합원님의 재산가치를 극대화시켜드립니다",
          },
          detailImage: "/images/apgujeong/s9_box_1.png",
        },
        {
          label: "조망특화 설계",
          techLabel: "TECH 02",
          title: "여의도대교아파트 재건축 한강 조망 시뮬레이션",
          titleImage: "/images/apgujeong/s9_pop_txt_2.png",
          images: [
            { src: "/images/apgujeong/s9_pop_img_21.png", caption: "한강을 향해 열린 가로배치와 단지 레벨의 상향을 통해\n한강 조망 세대를 최대화" },
            { src: "/images/apgujeong/s9_pop_img_22.png", caption: "다각적인 분석과 시뮬레이션을 통한\n조망 간섭이 최소화된 최적의 시야각 확보" },
          ],
          detail: {
            title: "BIM 공종 통합설계",
            description: "설계부터 시공까지 기존 2차원 방식에서 벗어나 3차원 기반으로 프로젝트를 관리하여 설계~시공 리스크 제거 및 고품질을 확보하는 건설 기술입니다",
          },
          detailImage: "/images/apgujeong/s9_box_2.png",
        },
      ],
    },
    outro: {
      backgroundImage: "/images/apgujeong/s10_bg.png",
      tagline: "Beyond Expectations",
      mainText: "과거의 압구정을 넘어서는 건\n오직 ",
      mainTextAccent: "압구정 삼성",
    },
  },
};

export default apgujeong;
