---
import { getCollection } from 'astro:content';
const posts = (await getCollection('news')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
---
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width" />
  <title>REMEDY NEWS DROP</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
  <style>
    body { font-family: 'Inter', sans-serif; }
    @keyframes marquee { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
    .animate-marquee { animation: marquee 25s linear infinite; }
  </style>
</head>
<body class="bg-white text-gray-900">

  <!-- HEADER -->
  <header class="sticky top-0 z-50 bg-black text-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
      <a href="/" class="font-black text-xl">REMEDY <span class="text-green-600">NEWS</span> <span class="text-red-600">DROP</span></a>
      <nav class="hidden md:flex gap-4 text-sm font-bold uppercase">
        <a href="/category/politics" class="hover:text-green-500">Politics</a>
        <a href="/category/crime" class="hover:text-green-500">Crime</a>
        <a href="/category/health" class="hover:text-green-500">Health</a>
      </nav>
    </div>
  </header>

  <!-- BREAKING TICKER -->
  {posts.filter(p => p.data.breaking).length > 0 && (
    <div class="bg-red-600 text-white py-2 overflow-hidden whitespace-nowrap">
      <div class="inline-block animate-marquee">
        <span class="font-black mr-3">🚨 BREAKING:</span>
        {posts.filter(p => p.data.breaking).map(p => (
          <a href={`/news/${p.slug}`} class="mx-4 hover:underline">{p.data.title}</a>
        ))}
      </div>
    </div>
  )}

  <main class="max-w-7xl mx-auto px-4 py-8">

    <!-- HERO -->
    {posts[0] && (
      <a href={`/news/${posts[0].slug}`} class="block mb-10 group">
        <div class="grid md:grid-cols-2 gap-6 items-center">
          <img src={posts[0].data.image} alt={posts[0].data.title} class="w-full aspect-[4/5] md:aspect-video object-cover rounded-xl group-hover:scale-105 transition-transform" />
          <div>
            <span class="bg-red-600 text-white text-xs font-black uppercase px-3 py-1 rounded-full">{posts[0].data.category}</span>
            <h1 class="font-black text-3xl md:text-5xl mt-4 uppercase leading-tight group-hover:text-green-600 transition">{posts[0].data.title}</h1>
            <p class="mt-4 text-gray-600">{posts[0].data.excerpt}</p>
            <p class="mt-4 text-sm text-gray-400">By {posts[0].data.author} · {posts[0].data.date.toLocaleDateString()}</p>
          </div>
        </div>
      </a>
    )}

    <!-- LATEST NEWS -->
    <h2 class="font-black text-2xl border-l-4 border-green-600 pl-3 mb-6 uppercase">Latest News</h2>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {posts.slice(1, 9).map(post => (
        <a href={`/news/${post.slug}`} class="group block">
          <img src={post.data.image} alt={post.data.title} class="w-full aspect-[4/5] object-cover rounded-xl group-hover:scale-105 transition-transform" loading="lazy" />
          <span class="text-xs font-black text-red-600 uppercase mt-2 block">{post.data.category}</span>
          <h3 class="font-bold text-sm mt-1 uppercase leading-snug group-hover:text-green-600 transition line-clamp-3">{post.data.title}</h3>
        </a>
      ))}
    </div>

  </main>

  <footer class="bg-black text-white py-8 mt-12 text-center">
    <p class="font-black text-xl">REMEDY <span class="text-green-600">NEWS</span> <span class="text-red-600">DROP</span></p>
    <p class="text-gray-400 text-sm mt-2">&copy; 2026 RND. Nigeria's Breaking News.</p>
  </footer>

</body>
</html>
