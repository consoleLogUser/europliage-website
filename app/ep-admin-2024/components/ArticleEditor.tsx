'use client';

import { useState, useEffect } from 'react';

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  categoryId?: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface ArticleEditorProps {
  article: Article | null;
  onClose: () => void;
  onSave: () => void;
}

export default function ArticleEditor({ article, onClose, onSave }: ArticleEditorProps) {
  const [title, setTitle] = useState(article?.title || '');
  const [slug, setSlug] = useState(article?.slug || '');
  const [excerpt, setExcerpt] = useState(article?.excerpt || '');
  const [content, setContent] = useState(article?.content || '');
  const [status, setStatus] = useState<'DRAFT' | 'PUBLISHED'>(
    article?.status === 'PUBLISHED' ? 'PUBLISHED' : 'DRAFT'
  );
  const [categoryId, setCategoryId] = useState(article?.categoryId || '');
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCategories();
    if (article?.id) {
      fetchArticleContent();
    }
  }, [article]);

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/admin/categories');
      if (res.ok) {
        const data = await res.json();
        setCategories(data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchArticleContent = async () => {
    try {
      const res = await fetch(`/api/admin/articles/${article?.id}`);
      if (res.ok) {
        const data = await res.json();
        setContent(data.content || '');
        setExcerpt(data.excerpt || '');
        setCategoryId(data.categoryId || '');
      }
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  };

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      setError('Le titre et le contenu sont requis');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const url = article?.id
        ? `/api/admin/articles/${article.id}`
        : '/api/admin/articles';

      const method = article?.id ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          slug: slug || generateSlug(title),
          excerpt,
          content,
          status,
          categoryId: categoryId || null,
        }),
      });

      if (res.ok) {
        onSave();
      } else {
        const data = await res.json();
        setError(data.error || 'Une erreur est survenue');
      }
    } catch {
      setError('Une erreur est survenue');
    }

    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 overflow-y-auto">
      <div className="bg-metal-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-metal-800 flex-shrink-0">
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
          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-metal-400 mb-2">Titre *</label>
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

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-metal-400 mb-2">Catégorie</label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full px-4 py-3 bg-metal-800 border border-metal-700 rounded-xl text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="">Sans catégorie</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-metal-400 mb-2">Statut</label>
              <div className="flex gap-4 h-[50px] items-center">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="status"
                    value="DRAFT"
                    checked={status === 'DRAFT'}
                    onChange={() => setStatus('DRAFT')}
                    className="w-4 h-4 text-blue-500"
                  />
                  <span className="text-white">Brouillon</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="status"
                    value="PUBLISHED"
                    checked={status === 'PUBLISHED'}
                    onChange={() => setStatus('PUBLISHED')}
                    className="w-4 h-4 text-blue-500"
                  />
                  <span className="text-white">Publié</span>
                </label>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm text-metal-400 mb-2">Extrait (résumé)</label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={2}
              className="w-full px-4 py-3 bg-metal-800 border border-metal-700 rounded-xl text-white focus:border-blue-500 focus:outline-none resize-none"
              placeholder="Court résumé de l'article pour les listes et le SEO..."
            />
          </div>

          <div>
            <label className="block text-sm text-metal-400 mb-2">Contenu * (Markdown supporté)</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={15}
              className="w-full px-4 py-3 bg-metal-800 border border-metal-700 rounded-xl text-white focus:border-blue-500 focus:outline-none resize-none font-mono text-sm"
              placeholder="# Titre

Contenu de l'article en Markdown...

## Sous-titre

- Liste à puces
- Autre élément

**Texte en gras** et *texte en italique*"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-4 p-6 border-t border-metal-800 flex-shrink-0">
          <button onClick={onClose} className="btn-secondary">
            Annuler
          </button>
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="btn-primary disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Enregistrement...
              </>
            ) : (
              article ? 'Mettre à jour' : 'Créer l\'article'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
