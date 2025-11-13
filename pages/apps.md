---
layout: page
title: Apps
permalink: /apps/
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": "Void of course",
        "applicationCategory": "Lifestyle",
        "operatingSystem": "Android",
        "url": "https://play.google.com/store/apps/details?id=dev.lioluna.voidofcourse&hl=ko",
        "description": "달의 움직임과 보이드 오브 코스 시간을 확인하여 중요한 결정을 내리는 데 도움을 주는 앱입니다.",
        "image": "{{ '/assets/img/apps/void-of-course-logo.png' | absolute_url }}"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "SoftwareApplication",
        "name": "Numerology Calculator",
        "applicationCategory": "Lifestyle",
        "operatingSystem": "Android",
        "url": "https://play.google.com/store/apps/details?id=com.numerology.finderapp&hl=ko",
        "description": "생년월일을 기반으로 수비학적 분석을 제공하여 자신의 성격과 운명을 탐색할 수 있도록 도와주는 앱입니다.",
        "image": "{{ '/assets/img/apps/numerology-calculator-logo.png' | absolute_url }}"
      }
    }
  ]
}
</script>

<div class="apps-container">
  <div class="app-card">
    <a href="https://play.google.com/store/apps/details?id=dev.lioluna.voidofcourse&hl=ko" target="_blank" rel="noopener noreferrer">
      <img src="/assets/img/apps/void-of-course-logo.png" alt="Void of course app icon" class="app-icon">
      <div class="app-info">
        <h3 class="app-title">Void of course</h3>
        <p class="app-description">달의 움직임과 보이드 오브 코스 시간을 확인하여 중요한 결정을 내리는 데 도움을 주는 앱입니다.</p>
      </div>
    </a>
  </div>
  <div class="app-card">
    <a href="https://play.google.com/store/apps/details?id=com.numerology.finderapp&hl=ko" target="_blank" rel="noopener noreferrer">
      <img src="/assets/img/apps/numerology-calculator-logo.png" alt="Numerology Calculator app icon" class="app-icon">
      <div class="app-info">
        <h3 class="app-title">Numerology Calculator</h3>
        <p class="app-description">생년월일을 기반으로 수비학적 분석을 제공하여 자신의 성격과 운명을 탐색할 수 있도록 도와주는 앱입니다.</p>
      </div>
    </a>
  </div>
</div>

<style>
.apps-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.app-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s ease;
  width: 300px;
  overflow: hidden;
}

.app-card:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.app-card a {
  text-decoration: none;
  color: inherit;
  display: block;
}

.app-icon {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.app-info {
  padding: 15px;
}

.app-title {
  margin-top: 0;
  font-size: 1.5em;
}

.app-description {
  font-size: 1em;
  color: #555;
}
</style>
