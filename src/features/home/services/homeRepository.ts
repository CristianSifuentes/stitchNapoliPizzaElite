import { LearningItem, Testimonial } from '../types/homeTypes';

export const homeRepository = {
  async getLearningItems(): Promise<LearningItem[]> {
    return Promise.resolve([
      { icon: '🍕', title: 'Dough Perfection', description: 'Craft hydration-balanced dough with predictable fermentation.' },
      { icon: '👐', title: 'Traditional Techniques', description: 'Master hand stretching, sauce control and finishing ratios.' },
      { icon: '🔥', title: 'Baking Mastery', description: 'Dial in high-heat baking for leopard spots and airy cornicione.' },
    ]);
  },
  async getTestimonials(): Promise<Testimonial[]> {
    return Promise.resolve([
      { name: 'Sophia Rossi', year: 'Class of 2023', quote: 'The best class of my trip. Practical and deeply authentic.', stars: 5 },
      { name: 'Marco Bianchi', year: 'Class of 2023', quote: 'Now I can reproduce real Napoli pizza at home.', stars: 5 },
      { name: 'Isabella Conti', year: 'Class of 2023', quote: 'Chef-level guidance with a warm atmosphere.', stars: 4.5 },
    ]);
  },
};
