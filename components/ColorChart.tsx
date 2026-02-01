'use client';

import { useState, useMemo } from 'react';

interface RALColor {
  code: string;
  name: string;
  hex: string;
  category: string;
}

const ralColors: RALColor[] = [
  // Blancs et Gris
  { code: 'RAL 9001', name: 'Blanc crème', hex: '#FDF4E3', category: 'Blancs' },
  { code: 'RAL 9002', name: 'Blanc gris', hex: '#E7EBDA', category: 'Blancs' },
  { code: 'RAL 9003', name: 'Blanc de sécurité', hex: '#F4F4F4', category: 'Blancs' },
  { code: 'RAL 9010', name: 'Blanc pur', hex: '#FFFFFF', category: 'Blancs' },
  { code: 'RAL 9016', name: 'Blanc signalisation', hex: '#F6F6F6', category: 'Blancs' },
  { code: 'RAL 7001', name: 'Gris argent', hex: '#8A9597', category: 'Gris' },
  { code: 'RAL 7004', name: 'Gris de sécurité', hex: '#9EA0A1', category: 'Gris' },
  { code: 'RAL 7005', name: 'Gris souris', hex: '#6C7059', category: 'Gris' },
  { code: 'RAL 7011', name: 'Gris fer', hex: '#555D61', category: 'Gris' },
  { code: 'RAL 7012', name: 'Gris basalte', hex: '#4E5754', category: 'Gris' },
  { code: 'RAL 7015', name: 'Gris ardoise', hex: '#51565C', category: 'Gris' },
  { code: 'RAL 7016', name: 'Gris anthracite', hex: '#373F43', category: 'Gris' },
  { code: 'RAL 7021', name: 'Gris noir', hex: '#2F3234', category: 'Gris' },
  { code: 'RAL 7022', name: 'Gris terre d\'ombre', hex: '#4B4D46', category: 'Gris' },
  { code: 'RAL 7024', name: 'Gris graphite', hex: '#474A50', category: 'Gris' },
  { code: 'RAL 7030', name: 'Gris pierre', hex: '#939388', category: 'Gris' },
  { code: 'RAL 7032', name: 'Gris silex', hex: '#B5B0A1', category: 'Gris' },
  { code: 'RAL 7035', name: 'Gris clair', hex: '#CBD0CC', category: 'Gris' },
  { code: 'RAL 7036', name: 'Gris platine', hex: '#9A9697', category: 'Gris' },
  { code: 'RAL 7037', name: 'Gris poussière', hex: '#7C7F7E', category: 'Gris' },
  { code: 'RAL 7038', name: 'Gris agate', hex: '#B4B8B0', category: 'Gris' },
  { code: 'RAL 7039', name: 'Gris quartz', hex: '#6B695F', category: 'Gris' },
  { code: 'RAL 7040', name: 'Gris fenêtre', hex: '#9DA3A6', category: 'Gris' },
  { code: 'RAL 7042', name: 'Gris signalisation A', hex: '#8D9291', category: 'Gris' },
  { code: 'RAL 7043', name: 'Gris signalisation B', hex: '#4E5451', category: 'Gris' },
  { code: 'RAL 7044', name: 'Gris soie', hex: '#BDBDB2', category: 'Gris' },
  { code: 'RAL 7045', name: 'Gris télu', hex: '#91969A', category: 'Gris' },
  { code: 'RAL 7046', name: 'Gris télu 2', hex: '#82898E', category: 'Gris' },
  { code: 'RAL 7047', name: 'Gris télu 4', hex: '#CFD0CF', category: 'Gris' },
  // Noirs
  { code: 'RAL 9004', name: 'Noir de sécurité', hex: '#2B2B2C', category: 'Noirs' },
  { code: 'RAL 9005', name: 'Noir foncé', hex: '#0A0A0D', category: 'Noirs' },
  { code: 'RAL 9011', name: 'Noir graphite', hex: '#27292B', category: 'Noirs' },
  { code: 'RAL 9017', name: 'Noir signalisation', hex: '#1E1F21', category: 'Noirs' },
  // Bleus
  { code: 'RAL 5000', name: 'Bleu violet', hex: '#384C70', category: 'Bleus' },
  { code: 'RAL 5001', name: 'Bleu vert', hex: '#1F4764', category: 'Bleus' },
  { code: 'RAL 5002', name: 'Bleu outremer', hex: '#2B2C7C', category: 'Bleus' },
  { code: 'RAL 5003', name: 'Bleu saphir', hex: '#2A3756', category: 'Bleus' },
  { code: 'RAL 5004', name: 'Bleu noir', hex: '#1D1F2A', category: 'Bleus' },
  { code: 'RAL 5005', name: 'Bleu de sécurité', hex: '#1E4B8E', category: 'Bleus' },
  { code: 'RAL 5007', name: 'Bleu brillant', hex: '#41678D', category: 'Bleus' },
  { code: 'RAL 5008', name: 'Bleu gris', hex: '#313C48', category: 'Bleus' },
  { code: 'RAL 5009', name: 'Bleu azur', hex: '#2E5978', category: 'Bleus' },
  { code: 'RAL 5010', name: 'Bleu gentiane', hex: '#13477B', category: 'Bleus' },
  { code: 'RAL 5011', name: 'Bleu acier', hex: '#252D3B', category: 'Bleus' },
  { code: 'RAL 5012', name: 'Bleu clair', hex: '#3481B8', category: 'Bleus' },
  { code: 'RAL 5013', name: 'Bleu cobalt', hex: '#232D53', category: 'Bleus' },
  { code: 'RAL 5014', name: 'Bleu pigeon', hex: '#637D96', category: 'Bleus' },
  { code: 'RAL 5015', name: 'Bleu ciel', hex: '#2874B2', category: 'Bleus' },
  { code: 'RAL 5017', name: 'Bleu signalisation', hex: '#0E518D', category: 'Bleus' },
  { code: 'RAL 5018', name: 'Bleu turquoise', hex: '#21888F', category: 'Bleus' },
  { code: 'RAL 5019', name: 'Bleu capri', hex: '#1A5784', category: 'Bleus' },
  { code: 'RAL 5020', name: 'Bleu océan', hex: '#0B4151', category: 'Bleus' },
  { code: 'RAL 5021', name: 'Bleu d\'eau', hex: '#07737A', category: 'Bleus' },
  { code: 'RAL 5022', name: 'Bleu nocturne', hex: '#2F2A5A', category: 'Bleus' },
  { code: 'RAL 5023', name: 'Bleu distant', hex: '#4D668E', category: 'Bleus' },
  { code: 'RAL 5024', name: 'Bleu pastel', hex: '#6A93B0', category: 'Bleus' },
  // Verts
  { code: 'RAL 6000', name: 'Vert patine', hex: '#327662', category: 'Verts' },
  { code: 'RAL 6001', name: 'Vert émeraude', hex: '#28713E', category: 'Verts' },
  { code: 'RAL 6002', name: 'Vert feuillage', hex: '#276230', category: 'Verts' },
  { code: 'RAL 6003', name: 'Vert olive', hex: '#4B573E', category: 'Verts' },
  { code: 'RAL 6004', name: 'Vert bleu', hex: '#0E4243', category: 'Verts' },
  { code: 'RAL 6005', name: 'Vert mousse', hex: '#0F4336', category: 'Verts' },
  { code: 'RAL 6006', name: 'Olive gris', hex: '#40433B', category: 'Verts' },
  { code: 'RAL 6007', name: 'Vert bouteille', hex: '#283424', category: 'Verts' },
  { code: 'RAL 6008', name: 'Vert brun', hex: '#353D2F', category: 'Verts' },
  { code: 'RAL 6009', name: 'Vert sapin', hex: '#27352A', category: 'Verts' },
  { code: 'RAL 6010', name: 'Vert herbe', hex: '#4D6F39', category: 'Verts' },
  { code: 'RAL 6011', name: 'Vert réséda', hex: '#6C7C59', category: 'Verts' },
  { code: 'RAL 6012', name: 'Vert noir', hex: '#303D3A', category: 'Verts' },
  { code: 'RAL 6013', name: 'Vert roseau', hex: '#7C765A', category: 'Verts' },
  { code: 'RAL 6014', name: 'Olive jaune', hex: '#474135', category: 'Verts' },
  { code: 'RAL 6015', name: 'Olive noir', hex: '#3D3D36', category: 'Verts' },
  { code: 'RAL 6016', name: 'Vert turquoise', hex: '#026A52', category: 'Verts' },
  { code: 'RAL 6017', name: 'Vert mai', hex: '#587F40', category: 'Verts' },
  { code: 'RAL 6018', name: 'Vert jaune', hex: '#61993B', category: 'Verts' },
  { code: 'RAL 6019', name: 'Vert blanc', hex: '#B9CEAC', category: 'Verts' },
  { code: 'RAL 6020', name: 'Vert oxyde chromique', hex: '#37422F', category: 'Verts' },
  { code: 'RAL 6021', name: 'Vert pâle', hex: '#8A9977', category: 'Verts' },
  { code: 'RAL 6022', name: 'Olive brun', hex: '#3E3C32', category: 'Verts' },
  { code: 'RAL 6024', name: 'Vert signalisation', hex: '#008754', category: 'Verts' },
  { code: 'RAL 6025', name: 'Vert fougère', hex: '#5E6E3B', category: 'Verts' },
  { code: 'RAL 6026', name: 'Vert opale', hex: '#005F4E', category: 'Verts' },
  { code: 'RAL 6027', name: 'Vert clair', hex: '#7EBAB5', category: 'Verts' },
  { code: 'RAL 6028', name: 'Vert pin', hex: '#315442', category: 'Verts' },
  { code: 'RAL 6029', name: 'Vert menthe', hex: '#006F3D', category: 'Verts' },
  { code: 'RAL 6032', name: 'Vert de sécurité', hex: '#0F8558', category: 'Verts' },
  { code: 'RAL 6033', name: 'Turquoise menthe', hex: '#478A84', category: 'Verts' },
  { code: 'RAL 6034', name: 'Turquoise pastel', hex: '#7FB0B2', category: 'Verts' },
  // Rouges et Oranges
  { code: 'RAL 2000', name: 'Orange jaune', hex: '#DD7907', category: 'Oranges' },
  { code: 'RAL 2001', name: 'Orange rouge', hex: '#BE4E20', category: 'Oranges' },
  { code: 'RAL 2002', name: 'Orange sang', hex: '#C63927', category: 'Oranges' },
  { code: 'RAL 2003', name: 'Orange pastel', hex: '#FA842B', category: 'Oranges' },
  { code: 'RAL 2004', name: 'Orange pur', hex: '#E75B12', category: 'Oranges' },
  { code: 'RAL 2008', name: 'Orange clair brillant', hex: '#F3752C', category: 'Oranges' },
  { code: 'RAL 2009', name: 'Orange signalisation', hex: '#E15501', category: 'Oranges' },
  { code: 'RAL 2010', name: 'Orange de sécurité', hex: '#D4652F', category: 'Oranges' },
  { code: 'RAL 2011', name: 'Orange profond', hex: '#EC7C25', category: 'Oranges' },
  { code: 'RAL 2012', name: 'Orange saumon', hex: '#DB6A50', category: 'Oranges' },
  { code: 'RAL 3000', name: 'Rouge feu', hex: '#A72920', category: 'Rouges' },
  { code: 'RAL 3001', name: 'Rouge de sécurité', hex: '#A02128', category: 'Rouges' },
  { code: 'RAL 3002', name: 'Rouge carmin', hex: '#A1232B', category: 'Rouges' },
  { code: 'RAL 3003', name: 'Rouge rubis', hex: '#8D1D2C', category: 'Rouges' },
  { code: 'RAL 3004', name: 'Rouge pourpre', hex: '#701F29', category: 'Rouges' },
  { code: 'RAL 3005', name: 'Rouge vin', hex: '#5E2028', category: 'Rouges' },
  { code: 'RAL 3007', name: 'Rouge noir', hex: '#402225', category: 'Rouges' },
  { code: 'RAL 3009', name: 'Rouge oxyde', hex: '#703731', category: 'Rouges' },
  { code: 'RAL 3011', name: 'Rouge brun', hex: '#7E292C', category: 'Rouges' },
  { code: 'RAL 3012', name: 'Rouge beige', hex: '#CB8D73', category: 'Rouges' },
  { code: 'RAL 3013', name: 'Rouge tomate', hex: '#9C322E', category: 'Rouges' },
  { code: 'RAL 3014', name: 'Vieux rose', hex: '#D47479', category: 'Rouges' },
  { code: 'RAL 3015', name: 'Rose clair', hex: '#E1A6AD', category: 'Rouges' },
  { code: 'RAL 3016', name: 'Rouge corail', hex: '#AC4034', category: 'Rouges' },
  { code: 'RAL 3017', name: 'Rosé', hex: '#D3545F', category: 'Rouges' },
  { code: 'RAL 3018', name: 'Rouge fraise', hex: '#D14152', category: 'Rouges' },
  { code: 'RAL 3020', name: 'Rouge signalisation', hex: '#C1121C', category: 'Rouges' },
  { code: 'RAL 3022', name: 'Rouge saumon', hex: '#D56D56', category: 'Rouges' },
  { code: 'RAL 3024', name: 'Rouge brillant', hex: '#F70000', category: 'Rouges' },
  { code: 'RAL 3027', name: 'Rouge framboise', hex: '#B42041', category: 'Rouges' },
  { code: 'RAL 3031', name: 'Rouge oriental', hex: '#AC323B', category: 'Rouges' },
  // Jaunes
  { code: 'RAL 1000', name: 'Beige vert', hex: '#CDBA88', category: 'Jaunes' },
  { code: 'RAL 1001', name: 'Beige', hex: '#D0B084', category: 'Jaunes' },
  { code: 'RAL 1002', name: 'Jaune sable', hex: '#D2AA6D', category: 'Jaunes' },
  { code: 'RAL 1003', name: 'Jaune de sécurité', hex: '#F9A800', category: 'Jaunes' },
  { code: 'RAL 1004', name: 'Jaune or', hex: '#E49E00', category: 'Jaunes' },
  { code: 'RAL 1005', name: 'Jaune miel', hex: '#CB8E00', category: 'Jaunes' },
  { code: 'RAL 1006', name: 'Jaune maïs', hex: '#E29000', category: 'Jaunes' },
  { code: 'RAL 1007', name: 'Jaune narcisse', hex: '#E88C00', category: 'Jaunes' },
  { code: 'RAL 1011', name: 'Beige brun', hex: '#AF8050', category: 'Jaunes' },
  { code: 'RAL 1012', name: 'Jaune citron', hex: '#D9C022', category: 'Jaunes' },
  { code: 'RAL 1013', name: 'Blanc perlé', hex: '#E9E5CE', category: 'Jaunes' },
  { code: 'RAL 1014', name: 'Ivoire', hex: '#DDC49A', category: 'Jaunes' },
  { code: 'RAL 1015', name: 'Ivoire clair', hex: '#E6D2B5', category: 'Jaunes' },
  { code: 'RAL 1016', name: 'Jaune soufre', hex: '#F1DD38', category: 'Jaunes' },
  { code: 'RAL 1017', name: 'Jaune safran', hex: '#F6A950', category: 'Jaunes' },
  { code: 'RAL 1018', name: 'Jaune zinc', hex: '#FACA30', category: 'Jaunes' },
  { code: 'RAL 1019', name: 'Beige gris', hex: '#A4957D', category: 'Jaunes' },
  { code: 'RAL 1020', name: 'Jaune olive', hex: '#9A9464', category: 'Jaunes' },
  { code: 'RAL 1021', name: 'Jaune colza', hex: '#EEC900', category: 'Jaunes' },
  { code: 'RAL 1023', name: 'Jaune signalisation', hex: '#F0CA00', category: 'Jaunes' },
  { code: 'RAL 1024', name: 'Jaune ocre', hex: '#B89C50', category: 'Jaunes' },
  { code: 'RAL 1026', name: 'Jaune brillant', hex: '#FFFF00', category: 'Jaunes' },
  { code: 'RAL 1027', name: 'Jaune curry', hex: '#A77F0E', category: 'Jaunes' },
  { code: 'RAL 1028', name: 'Jaune melon', hex: '#FF9B00', category: 'Jaunes' },
  { code: 'RAL 1032', name: 'Jaune genêt', hex: '#DDB20F', category: 'Jaunes' },
  { code: 'RAL 1033', name: 'Jaune dahlia', hex: '#FAAB21', category: 'Jaunes' },
  { code: 'RAL 1034', name: 'Jaune pastel', hex: '#EDAB56', category: 'Jaunes' },
  // Bruns
  { code: 'RAL 8000', name: 'Brun vert', hex: '#887142', category: 'Bruns' },
  { code: 'RAL 8001', name: 'Brun terre de Sienne', hex: '#9C6B30', category: 'Bruns' },
  { code: 'RAL 8002', name: 'Brun de sécurité', hex: '#7B5141', category: 'Bruns' },
  { code: 'RAL 8003', name: 'Brun argile', hex: '#80542F', category: 'Bruns' },
  { code: 'RAL 8004', name: 'Brun cuivré', hex: '#8F4E35', category: 'Bruns' },
  { code: 'RAL 8007', name: 'Brun fauve', hex: '#6F4A2F', category: 'Bruns' },
  { code: 'RAL 8008', name: 'Brun olive', hex: '#6F4F28', category: 'Bruns' },
  { code: 'RAL 8011', name: 'Brun noisette', hex: '#5A3A29', category: 'Bruns' },
  { code: 'RAL 8012', name: 'Brun rouge', hex: '#66332B', category: 'Bruns' },
  { code: 'RAL 8014', name: 'Brun sépia', hex: '#4A3526', category: 'Bruns' },
  { code: 'RAL 8015', name: 'Brun marron', hex: '#5E2F26', category: 'Bruns' },
  { code: 'RAL 8016', name: 'Brun acajou', hex: '#4C2F26', category: 'Bruns' },
  { code: 'RAL 8017', name: 'Brun chocolat', hex: '#44322D', category: 'Bruns' },
  { code: 'RAL 8019', name: 'Brun gris', hex: '#3D3635', category: 'Bruns' },
  { code: 'RAL 8022', name: 'Brun noir', hex: '#1A1718', category: 'Bruns' },
  { code: 'RAL 8023', name: 'Brun orangé', hex: '#A65E2F', category: 'Bruns' },
  { code: 'RAL 8024', name: 'Brun beige', hex: '#795038', category: 'Bruns' },
  { code: 'RAL 8025', name: 'Brun pâle', hex: '#755847', category: 'Bruns' },
  { code: 'RAL 8028', name: 'Brun terre', hex: '#4E3B31', category: 'Bruns' },
];

const categories = ['Tous', 'Blancs', 'Gris', 'Noirs', 'Bleus', 'Verts', 'Oranges', 'Rouges', 'Jaunes', 'Bruns'];

const popularColors = ['RAL 7016', 'RAL 9010', 'RAL 9005', 'RAL 7035', 'RAL 9016', 'RAL 7021', 'RAL 3020', 'RAL 5015'];

export default function ColorChart() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColor, setSelectedColor] = useState<RALColor | null>(null);
  const [showOnlyPopular, setShowOnlyPopular] = useState(false);

  const filteredColors = useMemo(() => {
    return ralColors.filter((color) => {
      const matchesCategory = selectedCategory === 'Tous' || color.category === selectedCategory;
      const matchesSearch =
        color.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        color.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPopular = !showOnlyPopular || popularColors.includes(color.code);
      return matchesCategory && matchesSearch && matchesPopular;
    });
  }, [selectedCategory, searchTerm, showOnlyPopular]);

  const isLightColor = (hex: string): boolean => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5;
  };

  return (
    <div>
      {/* Filters */}
      <div className="glass rounded-2xl p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Search */}
          <div className="relative w-full lg:w-80">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher (ex: RAL 7016, anthracite...)"
              className="w-full px-4 py-3 pl-10 bg-metal-800 border border-metal-700 rounded-xl text-white placeholder-metal-500 focus:border-blue-500 focus:outline-none"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-metal-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-500 text-white'
                    : 'bg-metal-800 text-metal-400 hover:bg-metal-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Popular Toggle */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showOnlyPopular}
              onChange={(e) => setShowOnlyPopular(e.target.checked)}
              className="w-4 h-4 rounded border-metal-700 bg-metal-800 text-blue-500 focus:ring-blue-500"
            />
            <span className="text-sm text-metal-400">Couleurs populaires</span>
          </label>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-metal-400 mb-4">
        {filteredColors.length} couleur{filteredColors.length > 1 ? 's' : ''} trouvée{filteredColors.length > 1 ? 's' : ''}
      </div>

      {/* Color Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {filteredColors.map((color) => (
          <button
            key={color.code}
            onClick={() => setSelectedColor(color)}
            className={`group relative aspect-square rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-lg ${
              selectedColor?.code === color.code ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-metal-900' : ''
            }`}
            style={{ backgroundColor: color.hex }}
            title={`${color.code} - ${color.name}`}
          >
            {/* Popular Badge */}
            {popularColors.includes(color.code) && (
              <div className="absolute top-1 right-1">
                <span className="text-xs">⭐</span>
              </div>
            )}

            {/* Hover Overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${
                isLightColor(color.hex) ? 'bg-black/50' : 'bg-white/20'
              }`}
            >
              <span className={`text-xs font-medium ${isLightColor(color.hex) ? 'text-white' : 'text-white'}`}>
                {color.code.replace('RAL ', '')}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Selected Color Details */}
      {selectedColor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={() => setSelectedColor(null)}>
          <div
            className="glass rounded-2xl p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{selectedColor.code}</h3>
                <p className="text-metal-400">{selectedColor.name}</p>
              </div>
              <button
                onClick={() => setSelectedColor(null)}
                className="w-8 h-8 rounded-lg bg-metal-800 flex items-center justify-center text-metal-400 hover:text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Color Preview */}
            <div
              className="h-40 rounded-xl mb-4 border border-metal-700"
              style={{ backgroundColor: selectedColor.hex }}
            />

            {/* Color Info */}
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-metal-400">Code RAL</span>
                <span className="text-white font-mono">{selectedColor.code}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-metal-400">Code HEX</span>
                <span className="text-white font-mono">{selectedColor.hex}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-metal-400">Catégorie</span>
                <span className="text-white">{selectedColor.category}</span>
              </div>
              {popularColors.includes(selectedColor.code) && (
                <div className="flex items-center gap-2 text-yellow-400 text-sm">
                  <span>⭐</span>
                  <span>Couleur très demandée</span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-3">
              <a
                href={`/devis?color=${encodeURIComponent(selectedColor.code)}`}
                className="flex-1 btn-primary text-center"
              >
                Utiliser cette couleur
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(selectedColor.code);
                }}
                className="btn-secondary px-4"
                title="Copier le code"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
