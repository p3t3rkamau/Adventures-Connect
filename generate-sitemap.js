import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Base URL of your website
const BASE_URL = process.env.SITE_URL || 'https://adventures-connect.co.ke';

// Static routes
const staticRoutes = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about', priority: '0.9', changefreq: 'monthly' },
  { url: '/destinations', priority: '0.9', changefreq: 'weekly' },
  { url: '/safaris', priority: '0.9', changefreq: 'weekly' },
  { url: '/gallery', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
];

// Get all destination countries
function loadDestinations() {
  const destinationsPath = path.join(__dirname, 'src/app/data/destinations');
  const files = fs.readdirSync(destinationsPath).filter(f => f.endsWith('.json'));
  
  return files.map(file => {
    const filePath = path.join(destinationsPath, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(content);
    
    // Extract country name from filename (e.g., kenya.json -> kenya)
    const country = file.replace('.json', '');
    
    return {
      url: `/destinations/${country}`,
      priority: '0.8',
      changefreq: 'weekly',
      country
    };
  });
}

// Get all safaris
function loadSafaris() {
  const safariBasePath = path.join(__dirname, 'src/app/data/json');
  const safaris = [];
  
  // Recursively find all JSON files in subdirectories
  function walkDir(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.json')) {
        try {
          const content = fs.readFileSync(filePath, 'utf-8');
          const data = JSON.parse(content);
          
          if (data.id) {
            safaris.push({
              url: `/safari/${data.id}`,
              priority: '0.8',
              changefreq: 'monthly',
              id: data.id
            });
          }
        } catch (error) {
          console.warn(`Warning: Could not parse ${filePath}`);
        }
      }
    });
  }
  
  walkDir(safariBasePath);
  return safaris;
}

// Generate sitemap XML
function generateSitemap() {
  const allRoutes = [
    ...staticRoutes,
    ...loadDestinations(),
    ...loadSafaris()
  ];
  
  // Remove duplicates
  const uniqueRoutes = Array.from(
    new Map(allRoutes.map(route => [route.url, route])).values()
  );
  
  const xmlLines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ];
  
  uniqueRoutes.forEach(route => {
    xmlLines.push('  <url>');
    xmlLines.push(`    <loc>${BASE_URL}${route.url}</loc>`);
    xmlLines.push(`    <changefreq>${route.changefreq}</changefreq>`);
    xmlLines.push(`    <priority>${route.priority}</priority>`);
    xmlLines.push('  </url>');
  });
  
  xmlLines.push('</urlset>');
  
  return xmlLines.join('\n');
}

// Write sitemap to public folder
function writeSitemap() {
  const sitemapContent = generateSitemap();
  const outputPath = path.join(__dirname, 'public/sitemap.xml');
  
  // Ensure public directory exists
  if (!fs.existsSync(path.dirname(outputPath))) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  }
  
  fs.writeFileSync(outputPath, sitemapContent, 'utf-8');
  
  console.log(`✅ Sitemap generated successfully at ${outputPath}`);
  console.log(`📍 Base URL: ${BASE_URL}`);
}

// Run the generator
writeSitemap();
