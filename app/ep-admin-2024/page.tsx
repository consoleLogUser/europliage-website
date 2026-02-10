'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Mot de passe admin - À changer en production !
// Idéalement, utiliser une variable d'environnement
const ADMIN_PASSWORD = 'Europliage@2024!';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Vérifier si déjà authentifié
    const authToken = sessionStorage.getItem('ep_admin_auth');
    if (authToken === 'authenticated') {
      setIsAuthenticated(true);
    }
    setIsCheckingAuth(false);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simuler un délai pour éviter le brute force
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('ep_admin_auth', 'authenticated');
      setIsAuthenticated(true);
    } else {
      setError('Mot de passe incorrect');
      setPassword('');
    }
    setIsLoading(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('ep_admin_auth');
    setIsAuthenticated(false);
  };

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="glass rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-white">Administration</h1>
              <p className="text-metal-400 mt-2">Accès restreint</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm text-metal-400 mb-2">Mot de passe</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-metal-800 border border-metal-700 rounded-xl text-white focus:border-blue-500 focus:outline-none"
                  placeholder="••••••••••••"
                  autoFocus
                />
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading || !password}
                className="w-full btn-primary justify-center disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Connexion...
                  </>
                ) : (
                  'Se connecter'
                )}
              </button>
            </form>
          </div>

          <p className="text-center text-metal-600 text-xs mt-6">
            Zone sécurisée - Accès non autorisé interdit
          </p>
        </div>
      </div>
    );
  }

  // Dashboard Admin
  return <AdminDashboard onLogout={handleLogout} />;
}

// Composant Dashboard Admin
function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState<'blog' | 'messages' | 'stats'>('blog');

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
                <p className="text-xs text-metal-400">Panneau d'administration</p>
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
                onClick={onLogout}
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

        {/* Content */}
        {activeTab === 'blog' && <BlogManager />}
        {activeTab === 'messages' && <MessagesManager />}
        {activeTab === 'stats' && <StatsPanel />}
      </div>
    </div>
  );
}

// Gestionnaire de Blog
function BlogManager() {
  const [articles, setArticles] = useState([
    { id: 1, title: 'Comment choisir le bon matériau pour votre projet métallerie', slug: 'comment-choisir-materiau-projet-metallerie', status: 'published', date: '2024-01-15', views: 234 },
    { id: 2, title: 'Découpe laser vs découpe traditionnelle', slug: 'decoupe-laser-vs-decoupe-traditionnelle', status: 'published', date: '2024-01-10', views: 189 },
    { id: 3, title: 'Le thermolaquage : avantages et entretien', slug: 'thermolaquage-avantages-entretien', status: 'published', date: '2024-01-05', views: 156 },
    { id: 4, title: 'Couvertines aluminium : guide complet', slug: 'couvertines-aluminium-guide', status: 'draft', date: '2024-01-20', views: 0 },
    { id: 5, title: 'Les tendances métallerie 2024', slug: 'tendances-metallerie-2024', status: 'published', date: '2023-12-28', views: 312 },
    { id: 6, title: 'Précadres ITE : tout savoir', slug: 'precadres-ite-guide', status: 'published', date: '2023-12-20', views: 278 },
  ]);

  const [showEditor, setShowEditor] = useState(false);
  const [editingArticle, setEditingArticle] = useState<typeof articles[0] | null>(null);

  return (
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

      {/* Articles Table */}
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
                    article.status === 'published'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {article.status === 'published' ? 'Publié' : 'Brouillon'}
                  </span>
                </td>
                <td className="px-6 py-4 text-metal-400">{article.date}</td>
                <td className="px-6 py-4 text-metal-400">{article.views}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => {
                        setEditingArticle(article);
                        setShowEditor(true);
                      }}
                      className="p-2 hover:bg-metal-700 rounded-lg text-metal-400 hover:text-white"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <a
                      href={`/blog/${article.slug}`}
                      target="_blank"
                      className="p-2 hover:bg-metal-700 rounded-lg text-metal-400 hover:text-white"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </a>
                    <button className="p-2 hover:bg-red-500/20 rounded-lg text-metal-400 hover:text-red-400">
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

      {/* Editor Modal */}
      {showEditor && (
        <ArticleEditor
          article={editingArticle}
          onClose={() => setShowEditor(false)}
          onSave={(article) => {
            // Logique de sauvegarde
            setShowEditor(false);
          }}
        />
      )}
    </div>
  );
}

// Éditeur d'article
function ArticleEditor({ article, onClose, onSave }: {
  article: { id: number; title: string; slug: string; status: string; date: string; views: number } | null;
  onClose: () => void;
  onSave: (article: unknown) => void;
}) {
  const [title, setTitle] = useState(article?.title || '');
  const [slug, setSlug] = useState(article?.slug || '');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState(article?.status || 'draft');

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div className="bg-metal-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-metal-800">
          <h3 className="text-xl font-bold text-white">
            {article ? 'Modifier l\'article' : 'Nouvel article'}
          </h3>
          <button onClick={onClose} className="text-metal-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-metal-400 mb-2">Titre</label>
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  if (!article) setSlug(generateSlug(e.target.value));
                }}
                className="w-full px-4 py-3 bg-metal-800 border border-metal-700 rounded-xl text-white focus:border-blue-500 focus:outline-none"
                placeholder="Titre de l'article"
              />
            </div>
            <div>
              <label className="block text-sm text-metal-400 mb-2">Slug (URL)</label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(generateSlug(e.target.value))}
                className="w-full px-4 py-3 bg-metal-800 border border-metal-700 rounded-xl text-white focus:border-blue-500 focus:outline-none"
                placeholder="url-de-l-article"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-metal-400 mb-2">Contenu</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={15}
              className="w-full px-4 py-3 bg-metal-800 border border-metal-700 rounded-xl text-white focus:border-blue-500 focus:outline-none resize-none font-mono text-sm"
              placeholder="Contenu de l'article en Markdown..."
            />
          </div>

          <div>
            <label className="block text-sm text-metal-400 mb-2">Statut</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="draft"
                  checked={status === 'draft'}
                  onChange={() => setStatus('draft')}
                  className="w-4 h-4 text-blue-500"
                />
                <span className="text-white">Brouillon</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="published"
                  checked={status === 'published'}
                  onChange={() => setStatus('published')}
                  className="w-4 h-4 text-blue-500"
                />
                <span className="text-white">Publié</span>
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-4 p-6 border-t border-metal-800">
          <button onClick={onClose} className="btn-secondary">
            Annuler
          </button>
          <button onClick={() => onSave({ title, slug, content, status })} className="btn-primary">
            {article ? 'Mettre à jour' : 'Créer l\'article'}
          </button>
        </div>
      </div>
    </div>
  );
}

// Gestionnaire de Messages
function MessagesManager() {
  const [messages] = useState([
    { id: 1, name: 'Pierre Martin', email: 'pierre@exemple.com', subject: 'Demande de devis couvertines', date: '2024-01-22', read: false },
    { id: 2, name: 'Sophie Durand', email: 'sophie.d@archi.fr', subject: 'Projet habillage façade', date: '2024-01-21', read: true },
    { id: 3, name: 'Marc Leblanc', email: 'marc.lb@ferronnerie.com', subject: 'Partenariat découpe laser', date: '2024-01-20', read: true },
    { id: 4, name: 'Jean Petit', email: 'jpetit@gmail.com', subject: 'Question sur les délais', date: '2024-01-19', read: false },
  ]);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Messages de Contact</h2>
        <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">
          {messages.filter(m => !m.read).length} non lu(s)
        </span>
      </div>

      <div className="space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`glass rounded-xl p-4 flex items-center justify-between cursor-pointer hover:border-blue-500/30 transition-all ${
              !message.read ? 'border-l-4 border-l-blue-500' : ''
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                !message.read ? 'bg-blue-500' : 'bg-metal-700'
              }`}>
                <span className="text-white font-medium">{message.name.charAt(0)}</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className={`font-medium ${!message.read ? 'text-white' : 'text-metal-300'}`}>
                    {message.name}
                  </span>
                  {!message.read && (
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                  )}
                </div>
                <div className="text-metal-400 text-sm">{message.subject}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-metal-500 text-sm">{message.date}</span>
              <button className="p-2 hover:bg-metal-700 rounded-lg text-metal-400 hover:text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Panneau de Statistiques
function StatsPanel() {
  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-6">Statistiques</h2>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Visiteurs ce mois', value: '2,847', change: '+12%', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
          { label: 'Pages vues', value: '12,453', change: '+8%', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
          { label: 'Demandes de devis', value: '47', change: '+23%', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
          { label: 'Taux de conversion', value: '3.2%', change: '+0.5%', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
        ].map((stat, idx) => (
          <div key={idx} className="glass rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
              <span className="text-green-400 text-sm font-medium">{stat.change}</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-metal-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="glass rounded-xl p-6">
        <div className="flex items-center gap-3 text-metal-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p>
            Pour des statistiques détaillées, connectez Google Analytics ou un autre outil d'analyse.
            Ces données sont des exemples de démonstration.
          </p>
        </div>
      </div>
    </div>
  );
}
