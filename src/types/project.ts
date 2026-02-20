export interface ProjectData {
  slug: string;
  meta: {
    title: string;
    description: string;
    ogImage: string;
  };
  theme: {
    primaryColor: string;
    secondaryColor: string;
  };
  sections: {
    hero: {
      location: { top: string; bottom: string };
      maskImages: { src: string; duration: number; zoom: boolean }[];
      lastMaskImage: string;
      tagline: string;
      mainText: string;
      mainTextAccent: string;
      title: string;
      subtitle: { left: string; right: string };
      bottomImage: string;
      arrowImage: string;
      scrollArrowImage: string;
    };
    story: {
      title: string[];
      paintingImage: string;
      paintingBg: string;
      overlayBgImage: string;
      overlayTitle: string;
      overlayText: string;
      scrollArrowImage: string;
    };
    gallery: {
      images: { src: string; className: string; speed: number }[];
      textPanels: { cols: string[] }[];
    };
    plan: {
      backgroundImage: string;
      subtitle: string;
      title: string;
      description: string;
      arrowImage: string;
    };
    features: {
      sectionTitle: string;
      tabs: {
        label: string;
        title: string;
        description: string;
        images: string[];
      }[];
      prevImage: string;
      nextImage: string;
    };
    landmark: {
      backgroundImage: string;
      accentText: string;
      title: string;
      description: string;
      marqueeImage: string;
    };
    cases: {
      panels: {
        title: string[];
        items: {
          subtitle: string;
          name: string;
          description: string;
          image: string;
        }[];
      }[];
    };
    buildings: {
      title: string[];
      accentTitle: string;
      description: string[];
      items: {
        num: number;
        image: string;
        label: string;
        name: string;
        floors: string;
      }[];
      prevImage: string;
      nextImage: string;
      skylineTitle: string;
      skylineDescription: string[];
      skylineImage: string;
    };
    technology: {
      title: string[];
      description: string[];
      tabs: {
        label: string;
        techLabel: string;
        title: string;
        titleImage: string;
        images: { src: string; caption?: string }[];
        detail: {
          title: string;
          description: string;
        };
        detailImage: string;
      }[];
    };
    outro: {
      backgroundImage: string;
      tagline: string;
      mainText: string;
      mainTextAccent: string;
    };
  };
}
