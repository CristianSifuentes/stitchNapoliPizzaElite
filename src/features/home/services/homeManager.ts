import { homeRepository } from './homeRepository';

export const homeManager = {
  async loadHomeData() {
    const [learningItems, testimonials] = await Promise.all([
      homeRepository.getLearningItems(),
      homeRepository.getTestimonials(),
    ]);
    return { learningItems, testimonials };
  },
};
