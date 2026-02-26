import { featureFlagsService } from '../services/featureFlagsService';

export function useFeatureFlags() {
  return featureFlagsService;
}
