import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Créer les catégories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'conseils' },
      update: {},
      create: {
        name: 'Conseils',
        slug: 'conseils',
        description: 'Conseils et astuces pour vos projets métallerie',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'actualites' },
      update: {},
      create: {
        name: 'Actualités',
        slug: 'actualites',
        description: 'Les dernières nouvelles d\'Europliage',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'guides' },
      update: {},
      create: {
        name: 'Guides',
        slug: 'guides',
        description: 'Guides techniques détaillés',
      },
    }),
  ]);

  console.log('✅ Categories created:', categories.map(c => c.name).join(', '));

  // Créer les tags
  const tags = await Promise.all([
    prisma.tag.upsert({
      where: { slug: 'decoupe-laser' },
      update: {},
      create: { name: 'Découpe Laser', slug: 'decoupe-laser' },
    }),
    prisma.tag.upsert({
      where: { slug: 'pliage' },
      update: {},
      create: { name: 'Pliage', slug: 'pliage' },
    }),
    prisma.tag.upsert({
      where: { slug: 'thermolaquage' },
      update: {},
      create: { name: 'Thermolaquage', slug: 'thermolaquage' },
    }),
    prisma.tag.upsert({
      where: { slug: 'soudure' },
      update: {},
      create: { name: 'Soudure', slug: 'soudure' },
    }),
    prisma.tag.upsert({
      where: { slug: 'couvertines' },
      update: {},
      create: { name: 'Couvertines', slug: 'couvertines' },
    }),
    prisma.tag.upsert({
      where: { slug: 'precadres' },
      update: {},
      create: { name: 'Précadres', slug: 'precadres' },
    }),
  ]);

  console.log('✅ Tags created:', tags.map(t => t.name).join(', '));

  // Créer l'utilisateur admin
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@europliage.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'Europliage@2024!';
  const hashedPassword = await bcrypt.hash(adminPassword, 12);

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {
      password: hashedPassword,
    },
    create: {
      email: adminEmail,
      name: 'Administrateur',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  console.log('✅ Admin user created:', admin.email);

  // Créer quelques articles de démonstration
  const articles = [
    {
      title: 'Comment choisir le bon matériau pour votre projet métallerie',
      slug: 'comment-choisir-materiau-projet-metallerie',
      excerpt: 'Guide complet pour sélectionner le matériau idéal selon vos besoins : acier, inox, aluminium ou acier galvanisé.',
      content: `# Comment choisir le bon matériau pour votre projet métallerie

Le choix du matériau est une étape cruciale dans tout projet de métallerie. Chaque métal possède des caractéristiques spécifiques qui le rendent plus ou moins adapté selon l'usage prévu.

## L'Acier : Robuste et Économique

L'acier est le matériau le plus utilisé en métallerie industrielle. Ses avantages :
- Excellente résistance mécanique
- Coût compétitif
- Facilité de soudure
- Large gamme d'épaisseurs disponibles

## L'Inox : Durabilité et Esthétique

L'acier inoxydable (304L ou 316L) est idéal pour :
- Les environnements humides ou corrosifs
- Les applications alimentaires
- Les finitions haut de gamme

## L'Aluminium : Légèreté et Design

Parfait pour les applications architecturales :
- Poids réduit
- Excellente résistance à la corrosion
- Nombreuses possibilités de finition
- Idéal pour le thermolaquage

## Comment choisir ?

Posez-vous ces questions :
1. Quel est l'environnement d'utilisation ?
2. Quelles sont les contraintes mécaniques ?
3. Quel budget est disponible ?
4. Quelle finition est souhaitée ?

Contactez notre bureau d'études pour un conseil personnalisé !`,
      status: 'PUBLISHED',
      categorySlug: 'guides',
    },
    {
      title: 'Découpe laser vs découpe traditionnelle : comparatif',
      slug: 'decoupe-laser-vs-decoupe-traditionnelle',
      excerpt: 'Quels sont les avantages de la découpe laser par rapport aux méthodes traditionnelles ? Analyse détaillée.',
      content: `# Découpe laser vs découpe traditionnelle

La découpe laser a révolutionné l'industrie de la métallerie. Voici un comparatif détaillé avec les méthodes traditionnelles.

## Avantages de la découpe laser

### Précision inégalée
- Tolérance au dixième de millimètre
- Répétabilité parfaite
- Détails fins possibles

### Rapidité d'exécution
- Pas de temps de changement d'outil
- Vitesse de coupe élevée
- Programmation rapide

### Flexibilité
- Formes complexes réalisables
- Prototypage rapide
- Petites et grandes séries

## Quand choisir le laser ?

- Pièces de précision
- Formes complexes
- Séries répétitives
- Délais courts

Chez Europliage, nous disposons d'un laser dernière génération capable de découper jusqu'à 25mm d'acier.`,
      status: 'PUBLISHED',
      categorySlug: 'conseils',
    },
    {
      title: 'Le thermolaquage : avantages et entretien',
      slug: 'thermolaquage-avantages-entretien',
      excerpt: 'Tout savoir sur le thermolaquage : processus, avantages, durabilité et conseils d\'entretien.',
      content: `# Le thermolaquage : guide complet

Le thermolaquage est une technique de finition qui consiste à appliquer une poudre de peinture sur le métal, puis à la cuire pour obtenir une surface dure et durable.

## Le processus

1. **Préparation** : Dégraissage et traitement de surface
2. **Application** : Projection électrostatique de la poudre
3. **Cuisson** : Polymérisation au four à 180-200°C
4. **Refroidissement** : Durcissement de la couche

## Avantages

- Résistance aux UV et aux intempéries
- Durabilité exceptionnelle (10+ ans)
- Large choix de couleurs RAL
- Finition uniforme et esthétique
- Respect de l'environnement (sans solvant)

## Entretien

Le thermolaquage nécessite peu d'entretien :
- Nettoyage à l'eau savonneuse
- Éviter les produits abrasifs
- Rincer à l'eau claire

Chez Europliage, nous proposons plus de 150 teintes RAL avec garantie 10 ans.`,
      status: 'PUBLISHED',
      categorySlug: 'conseils',
    },
  ];

  for (const articleData of articles) {
    const category = categories.find(c => c.slug === articleData.categorySlug);

    await prisma.article.upsert({
      where: { slug: articleData.slug },
      update: {
        title: articleData.title,
        excerpt: articleData.excerpt,
        content: articleData.content,
        status: articleData.status as 'DRAFT' | 'PUBLISHED' | 'ARCHIVED',
      },
      create: {
        title: articleData.title,
        slug: articleData.slug,
        excerpt: articleData.excerpt,
        content: articleData.content,
        status: articleData.status as 'DRAFT' | 'PUBLISHED' | 'ARCHIVED',
        publishedAt: new Date(),
        authorId: admin.id,
        categoryId: category?.id,
      },
    });
  }

  console.log('✅ Articles created:', articles.length);

  console.log('🎉 Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
