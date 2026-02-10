import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Administration | Europliage',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-metal-950">
      {children}
    </div>
  );
}
