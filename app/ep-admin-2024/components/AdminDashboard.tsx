'use client';

import { useState, useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';
import ArticleEditor from './ArticleEditor';

interface Article {
  id: string;
  title: string;
  slug: string;
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  views: number;
  createdAt: string;
  publishedAt: string | null;
  category?: { name: string } | null;
}

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  status: 'UNREAD' | 'READ' | 'REPLIED' | 'ARCHIVED';
  createdAt: string;
}

interface Stats {
  totalArticles: number;
  publishedArticles: number;
  totalMessages: number;
  unreadMessages: number;
  totalQuotes: number;
  pendingQuotes: number;
}

export default function AdminDashboard() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState<'blog' | 'messages' | 'stats'>('blog');
  const [articles, setArticles] = useState<Article[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showEditor, setShowEditor] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      if (activeTab === 'blog') {
        const res = await fetch('/api/admin/articles');
        if (res.ok) {
          const data = await res.json();
          setArticles(data);
        }
      } else if (activeTab === 'messages') {
        const res = await fetch('/api/admin/messages');
        if (res.ok) {
          const data = await res.json();
          setMessages(data);
        }
      } else if (activeTab === 'stats') {
        const res = await fetch('/api/admin/stats');
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setIsLoading(false);
  };

  const handleDeleteArticle = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) return;

    try {
      const res = await fetch(`/api/admin/articles/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setArticles(articles.filter(a => a.id !== id));
      }
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  const handleMarkAsRead = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/messages/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'READ' }),
      });
      if (res.ok) {
        setMessages(messages.map(m => m.id === id ? { ...m, status: 'READ' as const } : m));
      }
    } catch (error) {
      console.error('Error updating message:', error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-metal-900/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">EP</span>
              </div>
              <div>
                <h1 className="text-white font-bold">Europliage Admin</h1>
                <p className="text-xs text-metal-400">
                  Connecté en tant que {session?.user?.name || session?.user?.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="/"
                target="_blank"
                className="text-metal-400 hover:text-white text-sm flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Voir le site
              </a>
              <button
                onClick={() => signOut({ callbackUrl: '/ep-admin-2024' })}
                className="text-metal-400 hover:text-red-400 text-sm flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          {[
            { id: 'blog', label: 'Articles Blog', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
            { id: 'messages', label: 'Messages', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
            { id: 'stats', label: 'Statistiques', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-metal-800 text-metal-400 hover:bg-metal-700'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
              </svg>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full" />
          </div>
        )}

        {/* Blog Tab */}
        {!isLoading && activeTab === 'blog' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Articles du Blog</h2>
              <button
                onClick={() => {
                  setEditingArticle(null);
                  setShowEditor(true);
                }}
                className="btn-primary"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Nouvel Article
              </button>
            </div>

            {articles.length === 0 ? (
              <div className="glass rounded-xl p-12 text-center">
                <svg className="w-16 h-16 text-metal-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2" />
                </svg>
                <p className="text-metal-400 mb-4">Aucun article pour le moment</p>
                <button
                  onClick={() => setShowEditor(true)}
                  className="btn-primary"
                >
                  Créer votre premier article
                </button>
              </div>
            ) : (
              <div className="glass rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-metal-800/50">
                    <tr>
                      <th className="text-left text-metal-400 text-sm font-medium px-6 py-4">Titre</th>
                      <th className="text-left text-metal-400 text-sm font-medium px-6 py-4">Statut</th>
                      <th className="text-left text-metal-400 text-sm font-medium px-6 py-4">Date</th>
                      <th className="text-left text-metal-400 text-sm font-medium px-6 py-4">Vues</th>
                      <th className="text-right text-metal-400 text-sm font-medium px-6 py-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-metal-800">
                    {articles.map((article) => (
                      <tr key={article.id} className="hover:bg-metal-800/30">
                        <td className="px-6 py-4">
                          <div className="text-white font-medium">{article.title}</div>
                          <div className="text-metal-500 text-sm">/blog/{article.slug}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            article.status === 'PUBLISHED'
                              ? 'bg-green-500/20 text-green-400'
                              : article.status === 'DRAFT'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-metal-500/20 text-metal-400'
                          }`}>
                            {article.status === 'PUBLISHED' ? 'Publié' : article.status === 'DRAFT' ? 'Brouillon' : 'Archivé'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-metal-400">
                          {formatDate(article.publishedAt || article.createdAt)}
                        </td>
                        <td className="px-6 py-4 text-metal-400">{article.views}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => {
                                setEditingArticle(article);
                                setShowEditor(true);
                              }}
                              className="p-2 hover:bg-metal-700 rounded-lg text-metal-400 hover:text-white"
                              title="Modifier"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                            <a
                              href={`/blog/${article.slug}`}
                              target="_blank"
                              className="p-2 hover:bg-metal-700 rounded-lg text-metal-400 hover:text-white"
                              title="Voir"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </a>
                            <button
                              onClick={() => handleDeleteArticle(article.id)}
                              className="p-2 hover:bg-red-500/20 rounded-lg text-metal-400 hover:text-red-400"
                              title="Supprimer"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Messages Tab */}
        {!isLoading && activeTab === 'messages' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Messages de Contact</h2>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                {messages.filter(m => m.status === 'UNREAD').length} non lu(s)
              </span>
            </div>

            {messages.length === 0 ? (
              <div className="glass rounded-xl p-12 text-center">
                <svg className="w-16 h-16 text-metal-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-metal-400">Aucun message pour le moment</p>
              </div>
            ) : (
              <div className="space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`glass rounded-xl p-4 flex items-center justify-between cursor-pointer hover:border-blue-500/30 transition-all ${
                      message.status === 'UNREAD' ? 'border-l-4 border-l-blue-500' : ''
                    }`}
                    onClick={() => message.status === 'UNREAD' && handleMarkAsRead(message.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        message.status === 'UNREAD' ? 'bg-blue-500' : 'bg-metal-700'
                      }`}>
                        <span className="text-white font-medium">{message.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`font-medium ${message.status === 'UNREAD' ? 'text-white' : 'text-metal-300'}`}>
                            {message.name}
                          </span>
                          {message.status === 'UNREAD' && (
                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                          )}
                        </div>
                        <div className="text-metal-400 text-sm">{message.subject}</div>
                        <div className="text-metal-500 text-xs">{message.email}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-metal-500 text-sm">{formatDate(message.createdAt)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Stats Tab */}
        {!isLoading && activeTab === 'stats' && (
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Statistiques</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="glass rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7" />
                    </svg>
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stats?.totalArticles || 0}</div>
                <div className="text-metal-400 text-sm">Articles ({stats?.publishedArticles || 0} publiés)</div>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                    </svg>
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stats?.totalMessages || 0}</div>
                <div className="text-metal-400 text-sm">Messages ({stats?.unreadMessages || 0} non lus)</div>
              </div>

              <div className="glass rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stats?.totalQuotes || 0}</div>
                <div className="text-metal-400 text-sm">Demandes de devis ({stats?.pendingQuotes || 0} en attente)</div>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-3 text-metal-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>
                  Connectez Google Analytics pour des statistiques de trafic détaillées.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Article Editor Modal */}
      {showEditor && (
        <ArticleEditor
          article={editingArticle}
          onClose={() => {
            setShowEditor(false);
            setEditingArticle(null);
          }}
          onSave={() => {
            setShowEditor(false);
            setEditingArticle(null);
            fetchData();
          }}
        />
      )}
    </div>
  );
}
