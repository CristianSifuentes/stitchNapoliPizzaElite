import { Navigate, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';
import { useFeatureFlags } from '../../shared/hooks/useFeatureFlags';

export function BookingEnabledGuard({ children }: { children: ReactNode }) {
  const { bookingEnabled } = useFeatureFlags();
  const location = useLocation();

  if (!bookingEnabled) {
    return <Navigate to="/" replace state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
}
