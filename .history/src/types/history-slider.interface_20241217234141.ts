export interface IHistorySlider {
  className?: string;
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