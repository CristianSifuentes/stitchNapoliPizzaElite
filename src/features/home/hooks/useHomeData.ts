import { useQuery } from '@tanstack/react-query';
import { homeManager } from '../services/homeManager';

export function useHomeData() {
  return useQuery({ queryKey: ['home-data'], queryFn: homeManager.loadHomeData });
}
