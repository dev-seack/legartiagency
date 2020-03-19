---
layout: default
title: Projekte, lass uns ma' machen.
---

<div class="container home-landing-container">
<div class="row mt-50">
    <div
    class="main-title-container text-center col-md-12"
    >
    <h1 class="main-title bold text-center">
        lass uns ma' machen
    </h1>
    <p class="main-subtitle mt-30 light">
        Kannste woanders machen, wird dann halt Kacke.
    </p>
    </div>
</div>
<div class="row cta-scroll-container">
    <i class="fas fa-angle-double-down text-black"></i>
</div>
</div>
<!-- unsere projekte -->
<div class="container home-portoflio-selection-container mt-100">
{% include projectfilter.html %}
<div class="row mt-20" style="min-height: 200px;">
    <div class="no-category-items-found-container mt-40">
    <p class="no-category-items-found text-center read-text">
        Aktuell haben wir keine Projekte in diesem Bereich, die wir Dir zeigen können. Lass uns das gemeinsam ändern. Fragen kostet nix.
    </p>
    <div class="mt-30 container button-container">
        <a href="contact" class="button primary-button">let's talk</a>
    </div>
    </div>
    <div class="portoflio-selection-wrapper col-xs-12">
    <!-- portfolio item START -->
    {% for project in site.data.projects %}
    <div class="portfolio-selection-item mix {% for cat in project.categories%}{{ cat }} {% endfor %}">
        <a href="{{ site.baseurl }}/projects/{{ project.path-name }}" class="portfolio-item-link">
        <img
            class="portfolio-selection-image"
            src="{{ site.baseurl }}/assets/img/projekte/{{ project.path-name }}/thumbnail.jpg"
            alt=""
        />
        <div class="portfolio-selection-text-content">
            <h3 class="portfolio-selection-heading mb-10">
            {{project.name }}
            </h3>
            <p class="portfolio-selection-text read-text">
            {{ project.short-description }}
            </p>
        </div>
        </a>
    </div>
    {% endfor %}
    <!-- portfolio item END -->
    </div>
</div>
</div>
