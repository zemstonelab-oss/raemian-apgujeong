import { ProjectData } from "@/types/project";

const seongsu: ProjectData = {
  slug: "seongsu",
  meta: {
    title: "성수삼성",
    description: "서울의 내일을 만드는 곳, 오직 성수입니다",
    ogImage: "/images/seongsu/thumbs2.png",
  },
  theme: {
    primaryColor: "#2D5016",
    secondaryColor: "#4A7C2E",
  },
  sections: {
    hero: {
      location: { top: "대한민국", bottom: "성수" },
      maskImages: [
        { src: "/images/seongsu/s1_mask_1.png", duration: 1500, zoom: true },
        { src: "/images/seongsu/s1_mask_2.png", duration: 1500, zoom: true },
        { src: "/images/seongsu/s1_mask_3.png", duration: 1500, zoom: true },
        { src: "/images/seongsu/s1_mask_5.png", duration: 3000, zoom: false },
      ],
      lastMaskImage: "/images/seongsu/s1_mask_6.png",
      tagline: "Beyond Boundaries",
      mainText: "서울의 내일을 만드는 곳\n오직 ",
      mainTextAccent: "성수 삼성",
      title: "SEONGSU / SAMSUNG",
      subtitle: { left: "성수", right: "삼성" },
      bottomImage: "/images/seongsu/s1_bot_txt.png",
      arrowImage: "/images/seongsu/s1_arr.svg",
      scrollArrowImage: "/images/seongsu/s1_arr.svg",
    },
    story: {
      title: ["공장의 굴뚝이", "문화의 아이콘으로", "다시 태어나다."],
      paintingImage: "/images/seongsu/s2_paint_1.png",
      paintingBg: "/images/seongsu/s2_paint_2.png",
      overlayBgImage: "/images/seongsu/s2_paint_3.png",
      overlayTitle: "성수.",
      overlayText:
        "'성수'는 조선시대 왕이 사냥을 즐기던\n뚝섬 일대에서 비롯된 이름으로,\n일제강점기 공업지대를 거쳐,\n21세기 서울에서 가장 역동적인\n문화·상업 중심지로 변모했습니다.",
      scrollArrowImage: "/images/seongsu/s2_arr.svg",
    },
    gallery: {
      images: [
        { src: "/images/seongsu/s3_img_1.png", className: "w-[23rem] top-[20vh] left-[5.8%]", speed: 5.2 },
        { src: "/images/seongsu/s3_img_2.png", className: "w-[20rem] top-[53vh] right-[-10%]", speed: 4.2 },
        { src: "/images/seongsu/s3_img_3.png", className: "w-[27.5rem] top-[80vh] left-[-1%]", speed: 4.3 },
        { src: "/images/seongsu/s3_img_4.png", className: "w-[17.2rem] top-[110vh] right-0", speed: 4.6 },
        { src: "/images/seongsu/s3_img_5.png", className: "w-[16rem] top-[135vh] left-[5%]", speed: 4.4 },
        { src: "/images/seongsu/s3_img_6.png", className: "w-[18rem] top-[170vh] right-0", speed: 5.4 },
        { src: "/images/seongsu/s3_img_7.png", className: "w-[22.4rem] top-[200vh] left-0", speed: 4.2 },
        { src: "/images/seongsu/s3_img_8.png", className: "w-[26.4rem] top-[220vh] right-[-18%]", speed: 5.4 },
        { src: "/images/seongsu/s3_img_9.png", className: "w-[27.2rem] top-[280vh] left-[2%]", speed: 4.7 },
        { src: "/images/seongsu/s3_img_10.png", className: "w-[15.2rem] top-[280vh] right-[-5%]", speed: 5.2 },
        { src: "/images/seongsu/s3_img_11.png", className: "w-[18.6rem] top-[350vh] left-[10%]", speed: 4.6 },
        { src: "/images/seongsu/s3_img_13.png", className: "w-[24rem] top-[360vh] right-0", speed: 5.4 },
        { src: "/images/seongsu/s3_img_14.png", className: "w-[25.3rem] top-[390vh] left-[20%]", speed: 4.6 },
        { src: "/images/seongsu/s3_img_15.png", className: "w-[25rem] top-[420vh] right-[4%]", speed: 4.3 },
      ],
      textPanels: [
        { cols: ["서울의 브루클린"] },
        { cols: ["MZ세대가 선택한", "문화의 중심"] },
        { cols: ["글로벌 브랜드가", "모이는 거리"] },
        { cols: ["서울숲과 한강이", "만나는 자연"] },
        { cols: ["대한민국 성수"] },
      ],
    },
    plan: {
      backgroundImage: "/images/seongsu/s4_bg.png",
      subtitle: "PREMIUM LIVING ZONE",
      title: "삼성, 성수의 가치를 보다.",
      description: "삼성은 성수의 현재를 통해\n더 큰 미래가치를 내다봅니다.",
      arrowImage: "/images/seongsu/s4_arr.svg",
    },
    features: {
      sectionTitle: "성수 입지 종합 분석",
      tabs: [
        {
          label: "KEY FEATURE 1",
          title: "서울숲과 한강을 품은\n자연 프리미엄",
          description: "서울숲 35만평, 한강 조망, 응봉산 배후의\n트리플 자연환경",
          images: ["/images/seongsu/s5_t1_1.jpg", "/images/seongsu/s5_t1_2.jpg", "/images/seongsu/s5_t1_3.jpg"],
        },
        {
          label: "KEY FEATURE 2",
          title: "강남·CBD 더블\n업무지구 접근성",
          description: "2호선 성수역, 분당선 서울숲역,\n강남·을지로 15분대 교통",
          images: ["/images/seongsu/s5_t2_1.jpg", "/images/seongsu/s5_t2_2.jpg", "/images/seongsu/s5_t2_3.jpg"],
        },
        {
          label: "KEY FEATURE 3",
          title: "MZ세대가 만든\n프리미엄 상권",
          description: "글로벌 플래그십, 편집샵, F&B가 집결한\n대한민국 No.1 핫플레이스",
          images: ["/images/seongsu/s5_t3_1.jpg", "/images/seongsu/s5_t3_2.jpg", "/images/seongsu/s5_t3_3.jpg"],
        },
      ],
      prevImage: "/images/seongsu/s5_prev.svg",
      nextImage: "/images/seongsu/s5_next.svg",
    },
    landmark: {
      backgroundImage: "/images/seongsu/s6_img.png",
      accentText: "서울의 새로운 중심",
      title: "오직, 성수뿐입니다.",
      description:
        "자연과 도시, 전통과 혁신이 공존하는\n서울의 유일한 지역.\n성수는 이제 세계적\n라이프스타일 허브가 됩니다.",
      marqueeImage: "/images/seongsu/s6_marque.png",
    },
    cases: {
      panels: [
        {
          title: ["산업유산 위에 세운", "도시재생의 아이콘을", "연구하다."],
          items: [
            {
              subtitle: "DUMBO, Brooklyn",
              name: "브루클린 덤보",
              description:
                "뉴욕 맨해튼 브리지 아래 옛 공장지대가 예술가와 테크 기업이 모인 프리미엄 주거·상업 지구로 변모한 도시재생의 교과서입니다.",
              image: "/images/seongsu/s7_img_1.png",
            },
            {
              subtitle: "Shoreditch, London",
              name: "쇼디치",
              description:
                "런던 동부 산업지대에서 테크시티·스트리트아트·부티크 호텔이 공존하는 창조경제 허브로 탈바꿈한 지역입니다.",
              image: "/images/seongsu/s7_img_2.png",
            },
          ],
        },
        {
          title: ["자연과 도시가 공존하는", "워터프론트를", "연구하다."],
          items: [
            {
              subtitle: "Hudson Yards, NYC",
              name: "허드슨 야드",
              description:
                "뉴욕 맨해튼 서부 철도 차량기지 위에 건설된 미국 역사상 최대 민간 부동산 개발 프로젝트로, 주거·상업·문화가 융합된 미래형 복합도시입니다.",
              image: "/images/seongsu/s7_img_3.png",
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
        { num: 828, image: "/images/seongsu/s8_img_1.png", label: "세계 최고층", name: "부르즈 칼리파", floors: "163층" },
        { num: 678, image: "/images/seongsu/s8_img_2.png", label: "동남아 최고층", name: "메르데카118", floors: "118층" },
        { num: 508, image: "/images/seongsu/s8_img_3.png", label: "대만 최고층", name: "타이베이101", floors: "101층" },
        { num: 462, image: "/images/seongsu/s8_img_4.png", label: "유럽 최고층", name: "라흐타 센터", floors: "87층" },
        { num: 452, image: "/images/seongsu/s8_img_5.png", label: "세계 최고층 쌍둥이 타워", name: "페트로나스 타워", floors: "88층" },
        { num: 265, image: "/images/seongsu/s8_img_6.png", label: "국내 최초 초고층 주상복합", name: "타워팰리스", floors: "69층" },
        { num: 202, image: "/images/seongsu/s8_img_7.png", label: "한강변 최고층 아파트", name: "레미안 첼리투스", floors: "56층" },
      ],
      prevImage: "/images/seongsu/s8_prev.png",
      nextImage: "/images/seongsu/s8_next.png",
      skylineTitle: "WORLD LANDMARK SKYLINE",
      skylineDescription: [
        "랜드마크의 기준이 되는 스카이라인 설계",
        "다수의 초고층 프로젝트 성공으로 입증된",
        "성수 랜드마크 건설의 완벽한 파트너입니다.",
      ],
      skylineImage: "/images/seongsu/s8_land_img.png",
    },
    technology: {
      title: ["성수의 맥락을 잇는 설계로", "더 특별하게"],
      description: [
        "삼성의 혁신적인 생각과 축적된 설계 기술,",
        "첨단 시뮬레이션을 활용한 특화 설계로",
        "성수의 가치를 극대화합니다.",
      ],
      tabs: [
        {
          label: "도시재생 설계",
          techLabel: "TECH 01",
          title: "성수의 산업유산과 현대 건축의 조화",
          titleImage: "/images/seongsu/s9_pop_txt_1.png",
          images: [
            { src: "/images/seongsu/s9_pop_img_11.png" },
            { src: "/images/seongsu/s9_pop_img_12.png" },
          ],
          detail: {
            title: "헤리티지 디자인",
            description:
              "성수의 산업유산과 현대 건축이 조화를 이루는 헤리티지 디자인으로, 지역의 역사적 맥락을 존중하면서도 미래지향적인 공간을 창조합니다.",
          },
          detailImage: "/images/seongsu/s9_box_1.png",
        },
        {
          label: "서울숲 조망 설계",
          techLabel: "TECH 02",
          title: "서울숲과 한강을 동시에 조망하는 설계",
          titleImage: "/images/seongsu/s9_pop_txt_2.png",
          images: [
            { src: "/images/seongsu/s9_pop_img_21.png" },
            { src: "/images/seongsu/s9_pop_img_22.png" },
          ],
          detail: {
            title: "파노라마 뷰 극대화 설계",
            description:
              "서울숲과 한강을 동시에 조망하는 파노라마 뷰 극대화 설계로, 자연환경을 최고의 프리미엄으로 전환하여 입주민의 삶의 질을 높입니다.",
          },
          detailImage: "/images/seongsu/s9_box_2.png",
        },
      ],
    },
    outro: {
      backgroundImage: "/images/seongsu/s10_bg.png",
      tagline: "Beyond Boundaries",
      mainText: "서울의 내일을 만드는 곳\n오직 ",
      mainTextAccent: "성수 삼성입니다",
    },
  },
};

export default seongsu;
