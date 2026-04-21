/* ── PROJECT DATA ── */
const projectData = {
  'stamped-patio-brentwood': {
    title: 'Stamped Patio — Herringbone Pattern',
    location: 'Brentwood, TN',
    type: 'Stamped Concrete',
    scope: '680 sq ft patio with herringbone brick pattern, integral color, and sealant',
    beforeLabel: 'Cracked Concrete Slab',
    beforeDesc: 'Deteriorating slab with surface spalling, hairline fractures, and uneven sections from poor original installation',
    afterLabel: 'Stamped Herringbone Finish',
    afterDesc: 'Full tear-out and replacement with 4,000 PSI mix, herringbone stamp pattern, charcoal integral color, and UV-resistant sealant',
  },
  'driveway-replacement-franklin': {
    title: 'Full Driveway Replacement',
    location: 'Franklin, TN',
    type: 'Concrete Driveways',
    scope: '1,240 sq ft two-car driveway, full tear-out, rebar reinforced, broom finish',
    beforeLabel: 'Failed Asphalt Driveway',
    beforeDesc: 'Severely cracked asphalt with rutting, oil stains, and edge breakup — subbase compromised by drainage issues',
    afterLabel: 'Reinforced Concrete Driveway',
    afterDesc: 'Full excavation, compacted gravel base, rebar grid, 4,500 PSI concrete pour with broom finish and expansion joints',
  },
  'tiered-patio-nashville': {
    title: 'Tiered Patio & Steps',
    location: 'Green Hills, Nashville',
    type: 'Patios & Walkways',
    scope: '3-level tiered patio, 920 sq ft total, with integrated steps and landing areas',
    beforeLabel: 'Bare Slope & Lawn',
    beforeDesc: 'Unusable sloped backyard with erosion issues, no outdoor living space, and water runoff toward the foundation',
    afterLabel: 'Three-Tier Concrete Patio',
    afterDesc: 'Custom-graded three-level patio system with 6-inch steps, exposed aggregate finish on lower tier, broom finish upper levels',
  },
  'driveway-repair-hendersonville': {
    title: 'Driveway Crack Repair',
    location: 'Hendersonville, TN',
    type: 'Concrete Repair',
    scope: 'Structural crack repair, mudjacking, surface resurfacing on 800 sq ft driveway',
    beforeLabel: 'Structurally Cracked Driveway',
    beforeDesc: 'Multiple deep structural cracks with vertical displacement, sunken sections, and surface spalling across 40% of the slab',
    afterLabel: 'Repaired & Resurfaced',
    afterDesc: 'Subbase stabilization, crack routing and filling, full surface resurfacing with bonding agent — restored to like-new condition',
  },
  'epoxy-floor-murfreesboro': {
    title: 'Garage Epoxy Floor Coating',
    location: 'Murfreesboro, TN',
    type: 'Epoxy Flooring',
    scope: '640 sq ft two-car garage, full epoxy system with decorative flake broadcast',
    beforeLabel: 'Bare Concrete Garage Floor',
    beforeDesc: 'Stained, pitted bare concrete with oil penetration, dusting surface, and previous failed DIY coating peeling at edges',
    afterLabel: 'High-Gloss Epoxy System',
    afterDesc: 'Diamond-grind surface prep, moisture barrier primer, full-broadcast decorative flake, high-build epoxy base, polyaspartic topcoat',
  },
  'retaining-wall-spring-hill': {
    title: 'Concrete Retaining Wall',
    location: 'Spring Hill, TN',
    type: 'Retaining Walls',
    scope: '68 linear ft retaining wall, 4.5 ft average height, with drainage system',
    beforeLabel: 'Failing Timber Wall',
    beforeDesc: 'Rotting railroad-tie retaining wall with visible lean, soil erosion behind it, and sections that had completely failed',
    afterLabel: 'Reinforced Concrete Wall',
    afterDesc: 'Poured concrete cantilever wall with rebar cage, French drain system behind wall, and brushed face finish matching home exterior',
  },

  /* ── GALLERY PAGE ENTRIES ── */
  'ashlar-slate-patio-belle-meade': {
    title: 'Ashlar Slate Patio — 850 sq ft',
    location: 'Belle Meade, Nashville',
    type: 'Stamped Concrete',
    scope: '850 sq ft ashlar slate-pattern stamped patio with integral color, border detail, and penetrating sealant',
    beforeLabel: 'Existing Lawn & Bare Grade',
    beforeDesc: 'Unimproved backyard slope with no hardscape — grass and exposed soil running up to the back door threshold with no defined outdoor space',
    afterLabel: 'Ashlar Slate Stamped Patio',
    afterDesc: 'Full-depth concrete slab with ashlar slate stamp pattern, charcoal integral color, and UV-resistant penetrating sealant applied at completion',
  },
  'cobblestone-pool-deck-brentwood': {
    title: 'Cobblestone Pool Deck',
    location: 'Brentwood, TN',
    type: 'Stamped Concrete',
    scope: 'Cobblestone-pattern stamped concrete pool surround, approximately 1,100 sq ft, with non-slip finish and integral color',
    beforeLabel: 'Aging Paver Deck',
    beforeDesc: 'Loose and settled pavers around the pool with uneven surfaces, grout failure, and tripping hazards at the deck-to-coping transition',
    afterLabel: 'Stamped Cobblestone Surround',
    afterDesc: 'Monolithic concrete pool deck with cobblestone stamp, warm sand integral color, and a broom-texture anti-slip finish throughout the wet zone',
  },
  'herringbone-walkway-green-hills': {
    title: 'Herringbone Brick-Pattern Walkway',
    location: 'Green Hills, Nashville',
    type: 'Patios & Walkways',
    scope: '280 linear ft front walkway and side path with herringbone brick-pattern stamp, charcoal integral color, and sealed finish',
    beforeLabel: 'Cracked Plain Walkway',
    beforeDesc: 'Original broom-finish walkway with multiple heave cracks, differential settlement, and an outdated look that clashed with updated landscaping',
    afterLabel: 'Herringbone Stamped Walkway',
    afterDesc: 'Full tear-out and replacement with 4,000 PSI concrete stamped in a herringbone brick pattern — sealed and colored to complement the home exterior',
  },
  'cobblestone-stamped-patio-franklin': {
    title: 'Cobblestone Stamped Patio',
    location: 'Westhaven, Franklin',
    type: 'Stamped Concrete',
    scope: '720 sq ft rear patio with cobblestone pattern, tan integral color, and a contrasting charcoal border band',
    beforeLabel: 'Wood Deck — End of Life',
    beforeDesc: 'Rotting wood deck with soft boards, structural concern at the ledger connection, and significant deterioration after 18 years of weathering',
    afterLabel: 'Cobblestone Stamped Patio',
    afterDesc: 'Full concrete pour over compacted base with cobblestone stamp, tan integral color, charcoal border band, and two coats of UV-resistant sealant',
  },
  'circular-stamped-driveway-brentwood': {
    title: 'Circular Stamped Driveway',
    location: 'Governors Club, Brentwood',
    type: 'Stamped Concrete',
    scope: 'Circular entry driveway with cobblestone pattern, charcoal integral color, and gold-oxide accent border — approximately 1,800 sq ft',
    beforeLabel: 'Plain Asphalt Entry Drive',
    beforeDesc: 'Dated asphalt circular drive with faded surface, oil staining, and edge deterioration that clashed with the estate-level home exterior',
    afterLabel: 'Stamped Cobblestone Circular Drive',
    afterDesc: 'Full-depth concrete circular driveway with cobblestone stamp, charcoal field, gold-oxide accent border, and high-gloss two-part polyurethane sealant',
  },
  'new-construction-driveway-franklin': {
    title: 'New Construction Driveway',
    location: 'Fieldstone Farms, Franklin',
    type: 'Concrete Driveways',
    scope: 'New construction two-car driveway, 1,400 sq ft, rebar reinforced, broom finish, with integral apron and street transition',
    beforeLabel: 'Graded Subbase — No Hardscape',
    beforeDesc: 'Freshly built home with compacted gravel subbase only — mud, rutting, and no usable driveway surface from the street to the garage',
    afterLabel: 'Reinforced Concrete Driveway',
    afterDesc: '4,500 PSI rebar-reinforced concrete pour over compacted gravel, broom-finished with control joints at 12-ft intervals and a clean apron to the street',
  },
  'double-wide-driveway-murfreesboro': {
    title: 'Double-Wide Driveway & Apron',
    location: 'Murfreesboro, TN',
    type: 'Concrete Driveways',
    scope: 'Double-wide concrete driveway expansion, approximately 1,600 sq ft, with full tear-out, rebar grid, and new street apron',
    beforeLabel: 'Single-Car Cracked Driveway',
    beforeDesc: 'Narrow original concrete driveway with surface cracks, edge breakup, and no room for a second vehicle — homeowner needed full-width access',
    afterLabel: 'Double-Wide Concrete Driveway',
    afterDesc: 'Widened full tear-out replacement with 4,000 PSI concrete, rebar reinforcement, broom finish, and a new flared apron matched to city street specs',
  },
  'tiered-patio-seating-wall-brentwood': {
    title: 'Tiered Patio & Seating Wall',
    location: 'Maryland Farms, Brentwood',
    type: 'Patios & Walkways',
    scope: 'Two-level stamped patio with integrated 18-inch concrete seating wall, approximately 940 sq ft total',
    beforeLabel: 'Sloped Lawn — No Patio',
    beforeDesc: 'Unusable sloped backyard with no hardscape, drainage running toward the foundation, and no defined outdoor living space',
    afterLabel: 'Tiered Patio with Seating Wall',
    afterDesc: 'Two-level concrete patio with 18-inch poured seating wall, exposed aggregate lower tier, broom finish upper level, and integrated drainage',
  },
  'lakeside-patio-hendersonville': {
    title: 'Lakeside Travertine Patio',
    location: 'Old Hickory Lakeshore, Hendersonville',
    type: 'Patios & Walkways',
    scope: '1,050 sq ft travertine-pattern concrete patio overlooking Old Hickory Lake, with integral color blend and custom border',
    beforeLabel: 'Aging Lakeside Wood Deck',
    beforeDesc: 'Deteriorating lakeside wood deck with soft boards, rusted hardware, and safety concerns from 20 years of moisture and UV exposure',
    afterLabel: 'Travertine-Pattern Concrete Patio',
    afterDesc: 'Full concrete slab with travertine stamp, cream and tan integral color blend, custom border band, and UV-stable penetrating sealer',
  },
  'patio-fire-pit-mt-juliet': {
    title: 'Patio & Fire Pit Area',
    location: 'Providence, Mt. Juliet',
    type: 'Patios & Walkways',
    scope: '800 sq ft rear patio with integrated circular fire pit pad, broom finish field with stamped cobblestone border accent',
    beforeLabel: 'Gravel Patio — No Hardscape',
    beforeDesc: 'Loose gravel patio area with no defined edge, fire pit sitting directly on the ground, and poor drainage across the entire surface',
    afterLabel: 'Concrete Patio with Fire Pit Pad',
    afterDesc: 'Poured concrete patio with broom-finish field, stamped cobblestone border band, and a raised circular concrete fire pit pad with sand-set base',
  },
  'garage-epoxy-3car-brentwood': {
    title: '3-Car Garage Epoxy — Broadcast Flake',
    location: 'Governors Club, Brentwood',
    type: 'Epoxy Flooring',
    scope: '900 sq ft three-car garage, full broadcast decorative flake epoxy system with polyaspartic topcoat',
    beforeLabel: 'Oil-Stained Bare Concrete',
    beforeDesc: 'Three-car garage floor with years of oil penetration, surface pitting, hot tire pickup, and a dusting surface that tracked dirt into the home',
    afterLabel: 'Full-Broadcast Flake Epoxy',
    afterDesc: 'Diamond-ground prep, moisture barrier primer, full-broadcast decorative flake system, epoxy base coat, and two-coat polyaspartic topcoat rated for UV stability',
  },
  'shop-floor-epoxy-murfreesboro': {
    title: 'Shop Floor Epoxy — Full Broadcast',
    location: 'Christiana, Murfreesboro',
    type: 'Epoxy Flooring',
    scope: '1,200 sq ft commercial workshop floor, industrial-grade epoxy system with anti-slip aggregate and polyaspartic topcoat',
    beforeLabel: 'Bare Commercial Concrete',
    beforeDesc: 'Plain concrete shop floor with chemical staining, surface dusting, and no protection from heavy tool and equipment traffic',
    afterLabel: 'Industrial Epoxy with Anti-Slip Top',
    afterDesc: 'Shot-blasted surface prep, 100% solids epoxy base, full-broadcast flake for texture and grip, sealed with industrial-grade polyaspartic rated for fork truck traffic',
  },
  'garage-epoxy-2car-spring-hill': {
    title: 'Garage Epoxy — 2-Car Standard',
    location: 'Autumn Ridge, Spring Hill',
    type: 'Epoxy Flooring',
    scope: '640 sq ft two-car garage, standard broadcast flake epoxy system with satin polyaspartic finish',
    beforeLabel: 'Uncoated Garage Slab',
    beforeDesc: 'Bare concrete garage with surface staining, minor pitting, and previous DIY paint peeling at the seams and high-traffic areas',
    afterLabel: 'Broadcast Flake Epoxy System',
    afterDesc: 'Diamond-ground and primed slab with full decorative flake broadcast, epoxy base coat, and satin polyaspartic topcoat — completed in a single day',
  },
  'retaining-wall-walkway-franklin': {
    title: 'Retaining Wall & Walkway',
    location: 'Historic Franklin, TN',
    type: 'Retaining Walls',
    scope: '45 linear ft poured concrete retaining wall, 3 ft average height, with adjacent 6-ft wide concrete walkway',
    beforeLabel: 'Failing Landscape Timbers',
    beforeDesc: 'Rotting landscape timbers with visible outward lean, soil erosion behind the wall, and standing water pooling against the home foundation',
    afterLabel: 'Concrete Retaining Wall & Walk',
    afterDesc: 'Poured concrete cantilever wall with rebar cage and French drain, connected to a broom-finish concrete walkway with 6-inch step-up transition',
  },
  'tiered-retaining-system-hendersonville': {
    title: 'Tiered Retaining System',
    location: 'Indian Lake, Hendersonville',
    type: 'Retaining Walls',
    scope: 'Three-tier poured concrete retaining system, 120 linear ft total, with drainage pipe at each tier and battered face finish',
    beforeLabel: 'Eroding Hillside — No Wall',
    beforeDesc: 'Steep backyard slope with active erosion, sediment washing into the adjacent drain, and no usable yard space due to the grade',
    afterLabel: 'Three-Tier Concrete Retaining',
    afterDesc: 'Three stepped retaining walls in poured concrete with rebar, French drain at each tier base, and brushed face finish — created two flat yard terraces',
  },
  'backyard-retaining-nashville': {
    title: 'Backyard Retaining & Steps',
    location: 'Green Hills, Nashville',
    type: 'Retaining Walls',
    scope: '55 linear ft retaining wall with integrated concrete steps and lower patio landing area',
    beforeLabel: 'Failed Concrete Block Wall',
    beforeDesc: 'Crumbling concrete block retaining wall with severe outward bowing, gaps at the base, and no drainage — structurally unsafe',
    afterLabel: 'Poured Wall with Steps & Landing',
    afterDesc: 'Full tear-out of failing block wall, replaced with poured concrete cantilever wall, integrated 5-step stair system, and broom-finish landing pad at grade',
  },
  'driveway-leveling-east-nashville': {
    title: 'Driveway Leveling & Crack Repair',
    location: 'East Nashville, TN',
    type: 'Concrete Repair',
    scope: 'Mudjacking, structural crack repair, and surface resurfacing on 700 sq ft residential driveway',
    beforeLabel: 'Sunken, Cracked Driveway',
    beforeDesc: 'Driveway with two sunken panel sections, multiple full-depth structural cracks, and surface spalling from freeze-thaw cycles over 15 years',
    afterLabel: 'Leveled & Resurfaced Driveway',
    afterDesc: 'Mudjacking to restore grade on two panels, crack routing and polymer injection fill, full surface resurfacing with bonding agent — restored to original level and appearance',
  },
  'patio-slab-repair-nashville': {
    title: 'Patio Slab Repair & Reseal',
    location: 'Germantown, Nashville',
    type: 'Concrete Repair',
    scope: 'Full-slab crack repair, joint resealing, and penetrating sealer application on 480 sq ft rear patio',
    beforeLabel: 'Cracked, Unsealed Patio',
    beforeDesc: 'Rear patio with multiple surface cracks, open control joints packed with debris, and no protective sealer leaving the surface prone to further spalling',
    afterLabel: 'Repaired & Resealed Patio',
    afterDesc: 'Crack routing and hydraulic cement fill, fresh backer rod and sealant in all control joints, and two coats of penetrating concrete sealer — 10-year warranty on joint seals',
  },
};

/* ── PROJECT LIGHTBOX ── */
function createLightbox() {
  const modal = document.createElement('div');
  modal.id = 'project-lightbox';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'Project details');
  modal.innerHTML = `
    <div class="lightbox-backdrop"></div>
    <div class="lightbox-panel">
      <button class="lightbox-close" aria-label="Close project view">✕</button>
      <div class="lightbox-body">
        <div class="lightbox-slider-wrap">
          <div class="lightbox-before">
            <div class="lightbox-svg-container before-svg"></div>
            <div class="lightbox-side-label before-side-label"></div>
          </div>
          <div class="lightbox-after">
            <div class="lightbox-svg-container after-svg"></div>
            <div class="lightbox-side-label after-side-label"></div>
          </div>
          <div class="lightbox-divider">
            <div class="lightbox-handle"><span>◀</span><span>▶</span></div>
          </div>
        </div>
        <div class="lightbox-info">
          <p class="lightbox-type"></p>
          <h2 class="lightbox-title"></h2>
          <p class="lightbox-location"></p>
          <div class="lightbox-scope-wrap">
            <h4>Project Scope</h4>
            <p class="lightbox-scope"></p>
          </div>
          <div class="lightbox-details-grid">
            <div class="lightbox-detail-card before-detail">
              <span class="detail-label">Before</span>
              <strong class="detail-heading before-label-text"></strong>
              <p class="detail-desc before-desc-text"></p>
            </div>
            <div class="lightbox-detail-card after-detail">
              <span class="detail-label">After</span>
              <strong class="detail-heading after-label-text"></strong>
              <p class="detail-desc after-desc-text"></p>
            </div>
          </div>
          <a href="${location.pathname.includes('/pages/') ? 'contact.html' : 'pages/contact.html'}" class="btn-primary lightbox-cta">Get a Free Estimate →</a>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  return modal;
}
const lightbox = createLightbox();

function initSlider(modal) {
  const sliderWrap = modal.querySelector('.lightbox-slider-wrap');
  const divider = modal.querySelector('.lightbox-divider');
  let isDragging = false;
  let autoAnimFrame;

  function setSliderPos(pct) {
    pct = Math.max(2, Math.min(98, pct));
    divider.style.left = pct + '%';
    sliderWrap.querySelector('.lightbox-after').style.clipPath = `inset(0 0 0 ${pct}%)`;
  }

  function autoSweep() {
    const start = performance.now();
    const duration = 1800;
    function frame(now) {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      const pos = 100 - (ease * 50);
      setSliderPos(pos);
      if (t < 1) autoAnimFrame = requestAnimationFrame(frame);
    }
    autoAnimFrame = requestAnimationFrame(frame);
  }

  function getEventX(e) {
    return e.touches ? e.touches[0].clientX : e.clientX;
  }

  function onMove(e) {
    if (!isDragging) return;
    const rect = sliderWrap.getBoundingClientRect();
    const pct = ((getEventX(e) - rect.left) / rect.width) * 100;
    setSliderPos(pct);
  }

  divider.addEventListener('mousedown', () => { cancelAnimationFrame(autoAnimFrame); isDragging = true; });
  divider.addEventListener('touchstart', () => { cancelAnimationFrame(autoAnimFrame); isDragging = true; }, { passive: true });
  window.addEventListener('mousemove', onMove);
  window.addEventListener('touchmove', onMove, { passive: true });
  window.addEventListener('mouseup', () => { isDragging = false; });
  window.addEventListener('touchend', () => { isDragging = false; });

  return { setSliderPos, autoSweep, cancelAuto: () => cancelAnimationFrame(autoAnimFrame) };
}
const slider = initSlider(lightbox);

function openLightbox(projectKey) {
  const data = projectData[projectKey];
  if (!data) return;

  lightbox.querySelector('.lightbox-type').textContent = data.type;
  lightbox.querySelector('.lightbox-title').textContent = data.title;
  lightbox.querySelector('.lightbox-location').textContent = '📍 ' + data.location;
  lightbox.querySelector('.lightbox-scope').textContent = data.scope;
  lightbox.querySelector('.before-label-text').textContent = data.beforeLabel;
  lightbox.querySelector('.before-desc-text').textContent = data.beforeDesc;
  lightbox.querySelector('.after-label-text').textContent = data.afterLabel;
  lightbox.querySelector('.after-desc-text').textContent = data.afterDesc;

  const card = document.querySelector(`[data-project="${projectKey}"]`);
  const svgEl = card ? card.querySelector('.gallery-icon') : null;
  const beforeContainer = lightbox.querySelector('.before-svg');
  const afterContainer = lightbox.querySelector('.after-svg');

  beforeContainer.style.background = 'linear-gradient(145deg, #1a1a1a 0%, #252525 100%)';
  afterContainer.style.background = 'linear-gradient(145deg, #1c1a14 0%, #2a2418 100%)';

  if (svgEl) {
    const beforeSvg = svgEl.cloneNode(true);
    beforeSvg.style.width = '120px';
    beforeSvg.style.height = '100px';
    beforeSvg.querySelectorAll('[stroke]').forEach(el => {
      if (el.getAttribute('stroke').includes('200,146')) el.setAttribute('stroke', 'rgba(100,100,100,0.5)');
    });
    beforeSvg.querySelectorAll('[fill]').forEach(el => {
      const f = el.getAttribute('fill');
      if (f && f.includes('200,146')) el.setAttribute('fill', 'rgba(80,80,80,0.15)');
    });
    beforeContainer.innerHTML = '';
    beforeContainer.appendChild(beforeSvg);

    const afterSvg = svgEl.cloneNode(true);
    afterSvg.style.width = '120px';
    afterSvg.style.height = '100px';
    afterContainer.innerHTML = '';
    afterContainer.appendChild(afterSvg);
  }

  lightbox.querySelector('.before-side-label').textContent = 'BEFORE';
  lightbox.querySelector('.after-side-label').textContent = 'AFTER';

  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
  slider.setSliderPos(100);
  setTimeout(() => slider.autoSweep(), 80);
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  slider.cancelAuto();
}

document.querySelectorAll('.gallery-card[data-project]').forEach(card => {
  card.addEventListener('click', () => openLightbox(card.dataset.project));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(card.dataset.project); }
  });
});

lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
});

/* ── IntersectionObserver: fade-up animations ── */
const fadeEls = document.querySelectorAll('.fade-up:not(.visible)');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
fadeEls.forEach(el => observer.observe(el));

/* ── Hamburger menu toggle ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger?.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

/* ── Mobile services accordion (handles all .mobile-services-toggle elements) ── */
document.querySelectorAll('.mobile-services-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const sub = toggle.nextElementSibling;
    if (!sub) return;
    const isOpen = sub.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
  });
});

/* ── Navbar solidifies on scroll ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 80);
}, { passive: true });

/* ── Hero parallax (homepage only) ── */
const hero = document.getElementById('hero');
if (hero) {
  window.addEventListener('scroll', () => {
    hero.style.backgroundPositionY = (window.scrollY * 0.4) + 'px';
  }, { passive: true });
}

/* ── FAQ accordion ── */
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      openItem.classList.remove('open');
      openItem.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      question.setAttribute('aria-expanded', 'true');
    }
  });
});

/* ── Gallery filter (gallery page only) ── */
const filterBtns = document.querySelectorAll('.filter-btn');
if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      document.querySelectorAll('.gallery-card').forEach(card => {
        if (cat === 'all' || card.dataset.category === cat) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ── FAQ category scroll + active tab (faq page only) ── */
const faqTabs = document.querySelectorAll('.faq-tab');
faqTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    faqTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = document.getElementById(tab.dataset.target);
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY - 180;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});

/* ── Stats count-up ── */
(function initCountUp() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const statEls = document.querySelectorAll('.stat-number[data-target]');
  if (!statEls.length) return;
  const countObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const isDecimal = target % 1 !== 0;
      const duration = 3000;
      const start = performance.now();
      function tick(now) {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        const value = target * eased;
        el.textContent = (isDecimal ? value.toFixed(1) : Math.floor(value)) + suffix;
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      countObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  statEls.forEach(el => countObs.observe(el));
})();

/* ── Service card 3D tilt ── */
(function initCardTilt() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `rotateY(${x * 9}deg) rotateX(${-y * 9}deg) scale(1.025)`;
      card.style.boxShadow = `${-x * 8}px ${y * 8}px 28px rgba(200,146,42,0.18)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  });
})();

/* ── Gallery SVG draw-in ── */
(function initSvgDraw() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const galleryCards = document.querySelectorAll('.gallery-card');
  if (!galleryCards.length) return;
  const drawObs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('drawn'), i * 60);
        drawObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  galleryCards.forEach(card => drawObs.observe(card));
})();

/* ── Before / after slide reveal ── */
(function initBeforeAfter() {
  const baGrid = document.querySelector('.before-after-grid');
  if (!baGrid) return;
  const baObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        baObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });
  baObs.observe(baGrid);
})();

/* ── Contact form submit feedback ── */
const csForm = document.querySelector('#contact .contact-form');
if (csForm) {
  csForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = csForm.querySelector('.btn-form-submit');
    const original = btn.textContent;
    btn.textContent = '✓ Received — This is a demo site';
    btn.style.background = '#8a6520';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.disabled = false;
    }, 3000);
  });
}

/* ── Back to top ── */
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── CURSOR TRAIL ──
(function() {
  if (window.matchMedia('(hover: none)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'cursor-trail-canvas';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const colors = [
    'rgba(200, 146, 42, VAL)',
    'rgba(220, 175, 80, VAL)',
    'rgba(255, 210, 100, VAL)',
    'rgba(180, 120, 30, VAL)',
    'rgba(240, 195, 90, VAL)',
  ];

  let particles = [];
  let mouseX = -999;
  let mouseY = -999;
  let lastX = -999;
  let lastY = -999;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    const dx = mouseX - lastX;
    const dy = mouseY - lastY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 3) {
      const count = Math.floor(Math.random() * 3) + 2;
      for (let i = 0; i < count; i++) {
        const isGlitter = Math.random() < 0.3;
        particles.push({
          x: mouseX + (Math.random() - 0.5) * 4,
          y: mouseY + (Math.random() - 0.5) * 4,
          vx: -(dx * 0.04) + (Math.random() - 0.5) * 0.8,
          vy: -(dy * 0.04) + (Math.random() - 0.5) * 0.8,
          size: isGlitter ? Math.random() * 2 + 1.5 : Math.random() * 1.5 + 0.5,
          alpha: isGlitter ? 0.9 : Math.random() * 0.5 + 0.3,
          decay: isGlitter ? Math.random() * 0.018 + 0.012 : Math.random() * 0.012 + 0.006,
          color: colors[Math.floor(Math.random() * colors.length)],
          isGlitter,
        });
      }
      lastX = mouseX;
      lastY = mouseY;
    }
  }, { passive: true });

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.isGlitter) p.vy += 0.04;
      p.alpha -= p.decay;

      if (p.alpha <= 0) { particles.splice(i, 1); continue; }

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color.replace('VAL', p.alpha);

      if (p.isGlitter) {
        ctx.beginPath();
        const r = p.size;
        const r2 = r * 0.4;
        for (let j = 0; j < 8; j++) {
          const angle = (j * Math.PI) / 4;
          const rad = j % 2 === 0 ? r : r2;
          j === 0
            ? ctx.moveTo(p.x + Math.cos(angle) * rad, p.y + Math.sin(angle) * rad)
            : ctx.lineTo(p.x + Math.cos(angle) * rad, p.y + Math.sin(angle) * rad);
        }
        ctx.closePath();
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

    requestAnimationFrame(draw);
  }

  draw();

  setInterval(() => {
    if (particles.length > 300) particles.splice(0, particles.length - 300);
  }, 1000);
})();

/* ── Scroll progress bar ── */
(function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (total > 0 ? (window.scrollY / total) * 100 : 0) + '%';
  }, { passive: true });
})();

/* ── Active nav state ── */
(function setActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    if (
      (path === '/' && href === '/') ||
      (path !== '/' && href !== '/' && path.includes(href.replace(/^\//, '')))
    ) {
      link.classList.add('active');
    }
  });
})();

/* ── Commercial hub form submit feedback ── */
const commHubForm = document.getElementById('comm-contact-form');
if (commHubForm) {
  commHubForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = commHubForm.querySelector('.btn-form-submit');
    const original = btn.textContent;
    btn.textContent = '✓ Received — This is a demo site';
    btn.style.background = '#7a5a18';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.disabled = false;
    }, 3000);
  });
}

// ── PAGE TRANSITION ──
(function() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const overlay = document.getElementById('page-transition');
  if (!overlay) return;

  // Fade out on page load (overlay starts visible, fades away)
  overlay.style.opacity = '1';
  overlay.style.transition = 'none';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.style.transition = 'opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1)';
      overlay.style.opacity = '0';
    });
  });

  // Fade in before navigating away on any internal link click
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Skip external links, anchors, mailto, tel, and links that open new tabs
    if (
      link.target === '_blank' ||
      href.startsWith('http') ||
      href.startsWith('mailto') ||
      href.startsWith('tel') ||
      href.startsWith('#')
    ) return;

    e.preventDefault();

    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'all';

    setTimeout(() => {
      window.location.href = href;
    }, 350);
  });
})();
