/* ============================================================
   AURELLE STUDIO — Blog Details System
   Dynamic Article Loader & Centralized Blog Data
   ============================================================ */

'use strict';

const blogData = {
  'studio-lighting': {
    title: 'The Science of Perfect Studio Lighting',
    category: 'Studio Tips',
    date: 'December 12, 2024',
    readingTime: '8 min read',
    author: {
      name: 'Sophia Laurent',
      bio: 'Founder & Lead Photographer at AURELLE Studio. Award-winning portrait artist with 12+ years of experience. Speaker at PPA, WPPI, and PhotoPlus.',
      image: 'assets/images/about_photographer_1784526634105.png',
      link: 'about.html'
    },
    heroImage: 'assets/images/blog_cover_1_1784526648219.png',
    description: 'How we achieve those signature cinematic shadows and dramatic highlights that define the AURELLE aesthetic — and the principles behind every great portrait.',
    content: `
      <p>Light is the language of photography. Before the subject, before the composition, before the edit — light determines everything. At AURELLE Studio, we have spent over a decade obsessively studying, experimenting with, and mastering studio light in all its forms. This article shares the core principles that underpin every single portrait we create.</p>

      <h2>Understanding Light Quality: Hard vs. Soft</h2>
      <p>The most fundamental distinction in studio lighting is the difference between hard and soft light. Hard light — produced by small, direct sources like an uncovered strobe — creates sharp, well-defined shadows and a dramatic, high-contrast look. Think of the classic Hollywood glamour portrait: chiseled cheekbones, bold shadows, graphic lines. This is hard light at its finest.</p>
      <p>Soft light, on the other hand, is produced by larger, diffused sources — large softboxes, octaboxes, or reflectors bounced off large white surfaces. Soft light wraps around the subject, minimizing texture and creating gradual transitions from highlight to shadow. For skin tones, particularly in newborn and family photography, soft light is almost always the preferred choice.</p>

      <div class="pull-quote">"Light is the language of photography. Every great portrait begins with an understanding of how light sculpts the human face."</div>

      <h2>The Five Classic Portrait Lighting Patterns</h2>
      <p>Professional portrait photographers work with a relatively small set of foundational lighting patterns, each producing a distinctly different mood and character:</p>
      <ul>
        <li><strong>Rembrandt Lighting</strong> — Named after the master painter, this setup creates a small triangle of light on the shadow side of the face. It's dramatic, dimensional, and timeless.</li>
        <li><strong>Loop Lighting</strong> — The most flattering all-purpose pattern. The main light is positioned slightly above and 30–45° to the side of the subject, creating a small shadow loop beneath the nose.</li>
        <li><strong>Broad Lighting</strong> — The lit side of the face is turned toward the camera. This pattern widens the perceived size of the face and works well for narrower face shapes.</li>
        <li><strong>Short Lighting</strong> — The opposite of broad lighting. The shadow side faces the camera, creating a slimming, more dramatic effect ideal for round or wider faces.</li>
        <li><strong>Split Lighting</strong> — The light source is positioned exactly 90° to the side, splitting the face perfectly in half. Bold, graphic, and intensely dramatic.</li>
      </ul>

      <h2>Our Signature AURELLE Setup</h2>
      <p>For our signature editorial portrait look, we use a modified Rembrandt setup with a large 7-foot silver parabolic reflector as the main light, positioned at approximately 45° above and to the side of the subject at a distance of 6–8 feet. This creates beautiful specular highlights in the eyes while maintaining dramatic shadow falloff.</p>
      <p>We then add a subtle fill card — a large white foam board — on the opposite side to control the shadow-to-highlight ratio, keeping it at approximately 3:1 for our standard portrait look. A rim light (a gridded strip light behind and above the subject) adds separation from the background and a subtle luminous halo to the hair.</p>
    `,
    galleryCaption: 'Left to right: Rembrandt lighting, split lighting example, studio setup overview',
    gallery: [
      {
        src: 'assets/images/portfolio_portrait_1_1784526541387.png',
        caption: 'Example of Rembrandt lighting — sharp shadows, dramatic depth',
        aspectRatio: '4/3'
      },
      {
        src: 'assets/images/portfolio_portrait_2_1784526622013.png',
        caption: 'Split lighting — bold and graphic portrait',
        aspectRatio: '3/4'
      },
      {
        src: 'assets/images/blog_cover_1_1784526648219.png',
        caption: 'Studio lighting equipment setup',
        aspectRatio: '3/4'
      }
    ],
    relatedArticles: ['lens-guide', 'newborn-session', 'directing-clients'],
    metaDescription: 'Learn how we achieve our signature cinematic shadows and dramatic highlights. Complete guide to studio portrait lighting patterns.',
    tags: 'lighting, studio, portraits, photography tips',
    seoTitle: 'The Science of Perfect Studio Lighting — AURELLE Studio'
  },

  'lens-guide': {
    title: 'Choosing the Right Lens for Portrait Photography',
    category: 'Gear Guide',
    date: 'November 28, 2024',
    readingTime: '6 min read',
    author: {
      name: 'Sophia Laurent',
      bio: 'Founder & Lead Photographer at AURELLE Studio. Award-winning portrait artist with 12+ years of experience. Speaker at PPA, WPPI, and PhotoPlus.',
      image: 'assets/images/about_photographer_1784526634105.png',
      link: 'about.html'
    },
    heroImage: 'assets/images/blog_cover_2_1784526668707.png',
    description: 'Focal lengths, aperture, and bokeh — why your lens matters more than your camera body for portraits.',
    content: `
      <p>A camera body captures light, but the lens shapes the story. Choosing the right focal length and aperture is one of the most critical decisions a portrait photographer makes. In this guide, we break down the classic portrait focal lengths and how they impact your images.</p>

      <h2>The Holy Trinity of Portrait Lenses</h2>
      <p>There are three focal lengths that have defined portrait photography for decades: 50mm, 85mm, and 135mm. The 50mm is the closest to the human eye, offering a natural perspective that is excellent for environmental portraits. The 85mm is widely considered the gold standard, offering the perfect balance of compression and working distance. The 135mm is the king of compression, completely separating the subject from a creamy, dreamlike background.</p>

      <div class="pull-quote">"The lens is the brush of the photographer. It defines the character, depth, and soul of the image before it even hits the sensor."</div>

      <h2>Aperture and Depth of Field</h2>
      <p>For that signature AURELLE look, we frequently shoot wide open at f/1.2 or f/1.4. This creates a razor-thin depth of field where the subject's eyes are in pin-sharp focus while the ears and background melt away. However, shooting wide open requires absolute precision. A fraction of an inch of movement can misalign your focus point entirely.</p>

      <h2>Prime Lenses vs. Zoom Lenses</h2>
      <p>While high-end zoom lenses like a 70-200mm f/2.8 offer incredible flexibility, we prefer fast prime lenses for our studio portraits. Primes generally offer wider maximum apertures, less optical distortion, and a character/rendering style that zooms simply cannot replicate. For us, the minor inconvenience of physical movement is a small price to pay for ultimate image quality.</p>
    `,
    galleryCaption: 'Left to right: 85mm bokeh test, 50mm natural perspective, studio prime collection',
    gallery: [
      {
        src: 'assets/images/portfolio_portrait_2_1784526622013.png',
        caption: 'Shot with 85mm f/1.2 prime lens — buttery smooth bokeh',
        aspectRatio: '4/3'
      },
      {
        src: 'assets/images/portfolio_portrait_1_1784526541387.png',
        caption: 'Shot with 50mm prime lens — natural perspective and distortion-free proportions',
        aspectRatio: '3/4'
      },
      {
        src: 'assets/images/blog_cover_2_1784526668707.png',
        caption: 'Assortment of professional prime lenses in our studio',
        aspectRatio: '3/4'
      }
    ],
    relatedArticles: ['studio-lighting', 'medium-format', 'directing-clients'],
    metaDescription: 'Focal lengths, aperture, and bokeh — learn why your choice of lens is the single most important factor for professional portrait photography.',
    tags: 'lenses, gear guide, portrait tips, prime lenses',
    seoTitle: 'Choosing the Right Lens for Portrait Photography — AURELLE Studio'
  },

  'newborn-session': {
    title: 'Behind the Scene: A Newborn Session Day',
    category: 'Newborn',
    date: 'November 5, 2024',
    readingTime: '5 min read',
    author: {
      name: 'Sophia Laurent',
      bio: 'Founder & Lead Photographer at AURELLE Studio. Award-winning portrait artist with 12+ years of experience. Speaker at PPA, WPPI, and PhotoPlus.',
      image: 'assets/images/about_photographer_1784526634105.png',
      link: 'about.html'
    },
    heroImage: 'assets/images/blog_cover_3_1784526681799.png',
    description: 'Walk through a typical newborn session — from studio setup to the final heartwarming posed shots.',
    content: `
      <p>Photographing a brand-new baby is a beautiful responsibility. Unlike older children or adults, newborns cannot be posed or directed with words. A successful session requires preparation, a warm studio environment, and a deep understanding of baby safety.</p>

      <h2>Preparing the Warm and Cozy Sanctuary</h2>
      <p>Long before the family arrives, we heat the studio to a warm 78°F (25°C). Newborns cannot regulate their body temperature easily, and because they are often wrapped in light fabrics or unclothed for poses, a warm room is essential to keep them comfortable and sleeping soundly. We also play soft white noise in the background to mimic the sounds of the womb.</p>

      <div class="pull-quote">"Newborn photography requires infinite patience, absolute safety, and a warmth that makes the new family feel completely at home."</div>

      <h2>Patience is Our Greatest Modifier</h2>
      <p>A typical newborn session lasts up to three hours. However, actual shooting only takes a fraction of that time. The rest is dedicated to feeding, diaper changes, soothing, and waiting. We never rush. If a baby needs to nurse or be rocked to sleep for an hour, we wait. The secret to those peaceful, sleeping poses is a completely calm and unhurried atmosphere.</p>

      <h2>Safety First, Always</h2>
      <p>Every single pose is executed with baby safety as the absolute priority. We use secure posing pillows, clean and sanitized props, and always have an assistant or parent acting as a spotter just inches from the baby. Some of the classic newborn shots, like the head-in-hands pose, are actually composites created in Photoshop for safety.</p>
    `,
    galleryCaption: 'Left to right: Baby wrapped in organic cotton, family portrait details, newborn prop shelf',
    gallery: [
      {
        src: 'assets/images/portfolio_newborn_1_1784526570062.png',
        caption: 'Sleeping newborn gently wrapped in soft organic cotton knit',
        aspectRatio: '4/3'
      },
      {
        src: 'assets/images/portfolio_family_1_1784526553475.png',
        caption: 'Newborn posing comfortably with proud parents',
        aspectRatio: '3/4'
      },
      {
        src: 'assets/images/blog_cover_3_1784526681799.png',
        caption: 'Our specialized newborn prop styling shelf and soft blankets',
        aspectRatio: '3/4'
      }
    ],
    relatedArticles: ['golden-hour', 'directing-clients', 'studio-lighting'],
    metaDescription: 'Go behind the scenes of a professional newborn photography session. Learn about studio preparation, safety protocols, and parent tips.',
    tags: 'newborn, family, behind the scenes, photography safety',
    seoTitle: 'Behind the Scene: A Newborn Session Day — AURELLE Studio'
  },

  'golden-hour': {
    title: '5 Tips for Amazing Golden Hour Family Photos',
    category: 'Family',
    date: 'October 20, 2024',
    readingTime: '7 min read',
    author: {
      name: 'Sophia Laurent',
      bio: 'Founder & Lead Photographer at AURELLE Studio. Award-winning portrait artist with 12+ years of experience. Speaker at PPA, WPPI, and PhotoPlus.',
      image: 'assets/images/about_photographer_1784526634105.png',
      link: 'about.html'
    },
    heroImage: 'assets/images/blog_cover_4.jpg',
    description: 'Everything you need to know to prepare your family for a magical outdoor golden hour photo session.',
    content: `
      <p>There is a reason why photographers obsess over the hour just before sunset. Known as the golden hour, this time of day provides a soft, warm, directional light that creates long, dramatic shadows and a gorgeous golden haze. Here are five tips to make the most of this magical window for your family portraits.</p>

      <h2>1. Timing is Everything</h2>
      <p>The golden hour is short, often lasting only 45 minutes in practice. Because the sun sets quickly, we plan our arrival and setup at least an hour beforehand. This ensures we are ready to shoot the moment the light hits its peak color and warmth, maximizing our shooting time with your family.</p>

      <div class="pull-quote">"Golden hour light is nature's gift to photographers — a warm, glowing embrace that adds instant magic and emotion to family stories."</div>

      <h2>2. Embrace the Backlighting</h2>
      <p>Positioning the sun directly behind your family creates a stunning rim light or halo effect around their hair and shoulders. This separates the subjects from the background and gives the entire photo a dreamlike, ethereal quality. Emphasize light flare by shooting slightly toward the sun.</p>

      <h2>3. Coordinate (Don't Match) Outfits</h2>
      <p>For warm, golden light, earthy tones and neutrals work best. Cream, beige, rust, olive, and mustard harmonize beautifully with the natural sunset colors. Avoid matching exactly (e.g. everyone in white shirts and jeans) — instead, choose a cohesive color palette and let each family member's personality shine.</p>

      <h2>4. Keep the Children Moving</h2>
      <p>Rather than forcing stiff, posed smiles, we encourage active play. Walking hand-in-hand, running through open fields, or throwing a child in the air makes for authentic, joyful expressions. The golden hour light catchers movement beautifully, creating authentic visual stories.</p>
    `,
    galleryCaption: 'Left to right: Meadow sunset walk, candid interaction and laughter, sun setting behind trees',
    gallery: [
      {
        src: 'assets/images/portfolio_outdoor_1_1784526611432.png',
        caption: 'Golden hour sunset backlit family walk in the meadow',
        aspectRatio: '4/3'
      },
      {
        src: 'assets/images/portfolio_family_1_1784526553475.png',
        caption: 'Warm golden light highlighting candid interactions and laughter',
        aspectRatio: '3/4'
      },
      {
        src: 'assets/images/blog_cover_4.jpg',
        caption: 'Golden hour sun setting behind outdoor park landscape',
        aspectRatio: '3/4'
      }
    ],
    relatedArticles: ['newborn-session', 'directing-clients', 'lens-guide'],
    metaDescription: 'Prepare for your outdoor sunset photo shoot with these five tips for capturing golden hour light, styling family outfits, and securing candid moments.',
    tags: 'golden hour, family photography, outdoor shooting, styling tips',
    seoTitle: '5 Tips for Amazing Golden Hour Family Photos — AURELLE Studio'
  },

  'directing-clients': {
    title: 'The Art of Directing Your Photography Clients',
    category: 'Studio Tips',
    date: 'October 8, 2024',
    readingTime: '10 min read',
    author: {
      name: 'Sophia Laurent',
      bio: 'Founder & Lead Photographer at AURELLE Studio. Award-winning portrait artist with 12+ years of experience. Speaker at PPA, WPPI, and PhotoPlus.',
      image: 'assets/images/about_photographer_1784526634105.png',
      link: 'about.html'
    },
    heroImage: 'assets/images/blog_cover_5_new.png',
    description: 'Our approach to creating a relaxed, confident, and photogenic experience for every single client.',
    content: `
      <p>Most people who walk into our studio are not professional models. They feel nervous, self-conscious, and unsure of what to do with their hands. As a portrait photographer, your job is to direct them into comfortable, natural positions that capture their best self.</p>

      <h2>Building Trust from the Handshake</h2>
      <p>The directing process starts the minute a client enters. We spend the first fifteen minutes sitting down, having a coffee or glass of water, and chatting — not about the photo shoot, but about their life, work, and family. This breaks the ice and helps them view the camera as a friend rather than a judge.</p>

      <div class="pull-quote">"Direction is not about dictating poses; it is about creating an environment of trust where authentic character can naturally emerge."</div>

      <h2>Action-Based Prompts Over Stiff Posing</h2>
      <p>Instead of telling a client to 'stand here and look happy,' we give them action-based prompts. We ask them to adjust their jacket, look down at their watch, turn slowly toward the light, or think of someone who makes them laugh. Movement creates natural body lines and eliminates stiffness.</p>

      <h2>The Power of Encouragement</h2>
      <p>Silence is the enemy of a photo shoot. When the studio goes quiet, the client immediately assumes they are doing something wrong. We maintain constant verbal feedback, calling out what looks great, sharing the back-of-camera screen to build their confidence, and keeping the energy high.</p>
    `,
    galleryCaption: 'Left to right: Relaxed headshot posture, editorial directed posture, Sophia directing client',
    gallery: [
      {
        src: 'assets/images/portfolio_portrait_1_1784526541387.png',
        caption: 'Candid headshot featuring relaxed, natural shoulder alignment',
        aspectRatio: '4/3'
      },
      {
        src: 'assets/images/portfolio_portrait_2_1784526622013.png',
        caption: 'Confident, elegant editorial posture directed in studio',
        aspectRatio: '3/4'
      },
      {
        src: 'assets/images/blog_cover_5_new.png',
        caption: 'Sophia Laurent directing a client posture during studio session',
        aspectRatio: '3/4'
      }
    ],
    relatedArticles: ['studio-lighting', 'lens-guide', 'medium-format'],
    metaDescription: 'Learn our professional methods for posing, directing, and building confidence in clients during studio portrait photography sessions.',
    tags: 'posing, client relations, studio tips, direction',
    seoTitle: 'The Art of Directing Your Photography Clients — AURELLE Studio'
  },

  'medium-format': {
    title: 'Why We Shoot Medium Format at AURELLE',
    category: 'Gear Guide',
    date: 'September 15, 2024',
    readingTime: '9 min read',
    author: {
      name: 'Sophia Laurent',
      bio: 'Founder & Lead Photographer at AURELLE Studio. Award-winning portrait artist with 12+ years of experience. Speaker at PPA, WPPI, and PhotoPlus.',
      image: 'assets/images/about_photographer_1784526634105.png',
      link: 'about.html'
    },
    heroImage: 'assets/images/blog_cover_6.jpg',
    description: 'The Phase One IQ4 delivers an image quality that 35mm simply cannot match — here\'s why it matters.',
    content: `
      <p>In an era where smartphone cameras are incredibly capable, professional studios must offer something truly extraordinary. That is why we shoot exclusively on the Phase One IQ4 medium format camera system. It represents the pinnacle of digital photography gear.</p>

      <h2>What is Medium Format?</h2>
      <p>A standard professional camera is 'full-frame,' meaning its sensor matches the size of a traditional 35mm film frame. A medium-format sensor is significantly larger — up to 2.5 times larger. This massive surface area captures more light, more details, and offers a unique perspective depth that smaller sensors cannot match.</p>

      <div class="pull-quote">"Medium format is not just about pixel count; it is about the physics of light, the rendering of tones, and an unmatched level of realism."</div>

      <h2>Dynamic Range and Tonal Transition</h2>
      <p>The primary advantage of our 150-megapixel Phase One system is its 15 stops of dynamic range. This means it can capture extreme highlights and deep shadows in the same frame without losing detail. In skin tone rendering, the transitions from light to shadow are incredibly smooth, giving portraits a lifelike, three-dimensional look.</p>

      <h2>The Slow, Deliberate Craft</h2>
      <p>Shooting medium format changes how we work. The camera is heavier, the depth of field is thinner, and the focus must be precise. It forces us to slow down, compose each frame with intention, and craft the portrait rather than just snapping snapshots. It is a return to deliberate, high-end photography craftsmanship.</p>
    `,
    galleryCaption: 'Left to right: 100% crop texture detail, smooth skin tone highlights, Phase One camera system',
    gallery: [
      {
        src: 'assets/images/portfolio_portrait_1_1784526541387.png',
        caption: '100% crop detail showing unmatched texture definition',
        aspectRatio: '4/3'
      },
      {
        src: 'assets/images/portfolio_portrait_2_1784526622013.png',
        caption: 'Smooth tonal transition on portrait skin highlights',
        aspectRatio: '3/4'
      },
      {
        src: 'assets/images/blog_cover_6.jpg',
        caption: 'Our Phase One IQ4 medium format camera setup in studio',
        aspectRatio: '3/4'
      }
    ],
    relatedArticles: ['lens-guide', 'studio-lighting', 'directing-clients'],
    metaDescription: 'Learn why our Phase One IQ4 medium-format system provides superior dynamic range, resolution, and tone depth for portrait photography.',
    tags: 'medium format, gear guide, phase one, image quality',
    seoTitle: 'Why We Shoot Medium Format at AURELLE — AURELLE Studio'
  }
};

(function init() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  // Fallback: If no ID or invalid ID, redirect back to blog.html
  if (!id || !blogData[id]) {
    window.location.href = 'blog.html';
    return;
  }

  const article = blogData[id];

  // Update SEO Tags
  document.title = article.seoTitle;
  document.querySelector('meta[name="description"]')?.setAttribute('content', article.metaDescription);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', article.seoTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', article.description);

  // Update Hero elements
  const heroBg = document.getElementById('article-hero-bg');
  if (heroBg) {
    heroBg.style.backgroundImage = `url('${article.heroImage}')`;
  }
  
  const breadcrumbTitle = document.getElementById('breadcrumb-article-title');
  if (breadcrumbTitle) {
    breadcrumbTitle.textContent = article.title;
  }

  const badge = document.getElementById('article-badge');
  if (badge) {
    badge.textContent = article.category;
  }

  const date = document.getElementById('article-date');
  if (date) {
    date.textContent = article.date;
  }

  const readTime = document.getElementById('article-read-time');
  if (readTime) {
    readTime.textContent = article.readingTime;
  }

  const title = document.getElementById('article-title');
  if (title) {
    // Format title to place emphasis on the last two words or a custom styling if applicable
    const words = article.title.split(' ');
    if (words.length > 2) {
      const mainText = words.slice(0, -2).join(' ');
      const emText = words.slice(-2).join(' ');
      title.innerHTML = `${mainText}<br/><em style="color:var(--gold);">${emText}</em>`;
    } else {
      title.innerHTML = `<em style="color:var(--gold);">${article.title}</em>`;
    }
  }

  const desc = document.getElementById('article-description');
  if (desc) {
    desc.textContent = article.description;
  }

  // Update Body Content
  const contentContainer = document.getElementById('article-content');
  if (contentContainer) {
    contentContainer.innerHTML = article.content;
  }

  // Update Gallery
  const galleryGrid = document.getElementById('article-gallery-grid');
  if (galleryGrid) {
    const galleryHtml = article.gallery.map(img => `
      <div class="img-overlay-wrap" style="border-radius:var(--radius-lg);aspect-ratio:${img.aspectRatio || '3/4'};" data-lightbox="${img.src}" data-caption="${img.caption}">
        <img src="${img.src}" alt="${img.caption}" loading="lazy" />
        <div class="gallery-item-overlay"><div class="gallery-zoom-icon">⤢</div></div>
      </div>
    `).join('');
    galleryGrid.innerHTML = galleryHtml;
  }

  const galleryCaption = document.getElementById('article-gallery-caption');
  if (galleryCaption) {
    galleryCaption.textContent = article.galleryCaption;
  }

  // Update Author Bio
  const authorImg = document.getElementById('author-image');
  if (authorImg) {
    authorImg.src = article.author.image;
    authorImg.alt = article.author.name;
  }

  const authorName = document.getElementById('author-name');
  if (authorName) {
    authorName.textContent = article.author.name;
  }

  const authorBio = document.getElementById('author-bio');
  if (authorBio) {
    authorBio.textContent = article.author.bio;
  }

  const authorLink = document.getElementById('author-link');
  if (authorLink) {
    authorLink.href = article.author.link;
    authorLink.textContent = `About ${article.author.name.split(' ')[0]}`;
  }

  // Update Related Articles
  const relatedGrid = document.getElementById('article-related-grid');
  if (relatedGrid) {
    const relatedHtml = article.relatedArticles.map(relId => {
      const relArticle = blogData[relId];
      if (!relArticle) return '';
      return `
        <article class="sr blog-card">
          <div class="blog-card-img"><img src="${relArticle.heroImage}" alt="${relArticle.title}" loading="lazy" /></div>
          <div class="blog-card-body">
            <div class="blog-meta"><span>${relArticle.date}</span><span class="blog-meta-dot">·</span><span class="badge">${relArticle.category}</span></div>
            <h3 class="blog-card-title"><a href="blog-details.html?id=${relId}">${relArticle.title}</a></h3>
            <a href="blog-details.html?id=${relId}" class="read-more">Read →</a>
          </div>
        </article>
      `;
    }).join('');
    relatedGrid.innerHTML = relatedHtml;
  }

  // Update Previous / Next Article Navigation Links
  const keys = Object.keys(blogData);
  const currentIndex = keys.indexOf(id);
  
  const prevKey = currentIndex > 0 ? keys[currentIndex - 1] : null;
  const nextKey = currentIndex < keys.length - 1 ? keys[currentIndex + 1] : null;

  const prevBtn = document.getElementById('nav-prev-article');
  if (prevBtn) {
    if (prevKey) {
      prevBtn.href = `blog-details.html?id=${prevKey}`;
      prevBtn.style.visibility = 'visible';
      prevBtn.textContent = `← Previous: ${blogData[prevKey].title}`;
    } else {
      prevBtn.style.visibility = 'hidden';
    }
  }

  const nextBtn = document.getElementById('nav-next-article');
  if (nextBtn) {
    if (nextKey) {
      nextBtn.href = `blog-details.html?id=${nextKey}`;
      nextBtn.style.visibility = 'visible';
      nextBtn.textContent = `Next: ${blogData[nextKey].title} →`;
    } else {
      nextBtn.style.visibility = 'hidden';
    }
  }
})();
