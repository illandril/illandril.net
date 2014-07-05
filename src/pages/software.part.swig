{% extends 'partial-template.html' %}
{% block title %}Software developed by Joe Spandrusyszyn{% endblock %}
{% block description %}A collection of some of software Joe Spandrusyszyn has worked on.{% endblock %}

{% block content %}
<div class="list">
    <a class="item" data-fs="y" href="/software/webcrd.html">
        <span class="content">
            <span class="primary">RSA WebCRD</span>
            <span class="secondary">End-to-End Web-to-Print Solution</span>
        </span>
    </a>
    <a class="item" data-fs="y" href="/software/snailspace.html">
        <span class="content">
            <span class="primary">Snail's Pace</span>
            <span class="secondary">2D Platformer/Shooter Game</span>
        </span>
    </a>
    <a class="item" data-fs="y" href="/software/airsculpture.html">
        <span class="content">
            <span class="primary">Air Scupture: Transforming Balloons into Art</span>
            <span class="secondary">Balloon Sculpture Business Website</span>
        </span>
    </a>
    <a class="item" target="_blank" href="https://github.com/illandril">
        <span class="content">
            <span class="primary">GitHub Profile</span>
            <span class="secondary">Assorted smaller projects, including this site</span>
        </span>
    </a>
</div>
{% endblock %}
