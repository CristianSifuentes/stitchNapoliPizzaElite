import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from '../layout/RootLayout';
import { BookingEnabledGuard } from '../guards/BookingEnabledGuard';
import { PageLoader } from '../../shared/components/PageLoader';

const HomePage = lazy(() => import('../../features/home/views/HomePage').then((m) => ({ default: m.HomePage })));
const GalleryPage = lazy(() => import('../../features/gallery/views/GalleryPage').then((m) => ({ default: m.GalleryPage })));
const BookingPage = lazy(() => import('../../features/booking/views/BookingPage').then((m) => ({ default: m.BookingPage })));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'gallery', element: <GalleryPage /> },
      { path: 'book', element: <BookingEnabledGuard><BookingPage /></BookingEnabledGuard> },
    ],
  },
]);

export function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
