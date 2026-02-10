import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';

// GET - Statistiques du dashboard
export async function GET() {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  try {
    const [
      totalArticles,
      publishedArticles,
      totalMessages,
      unreadMessages,
      totalQuotes,
      pendingQuotes,
    ] = await Promise.all([
      prisma.article.count(),
      prisma.article.count({ where: { status: 'PUBLISHED' } }),
      prisma.contactMessage.count(),
      prisma.contactMessage.count({ where: { status: 'UNREAD' } }),
      prisma.quoteRequest.count(),
      prisma.quoteRequest.count({ where: { status: 'PENDING' } }),
    ]);

    return NextResponse.json({
      totalArticles,
      publishedArticles,
      totalMessages,
      unreadMessages,
      totalQuotes,
      pendingQuotes,
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
