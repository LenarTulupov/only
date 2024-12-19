export interface IHistorySlider {
  activeCategory: {
    id: number;
    category: string;
    events: {
      id: number;
      year: string;
      title: string;
    }[];
  };
}