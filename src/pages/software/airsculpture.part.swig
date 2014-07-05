{% extends 'project-template.html' %}

{% set project = {
  name: "Air Sculpture",
  links: [
    {
      name: 'Air Scupture: Transforming Balloons into Art',
      details: 'The Air Sculpture website',
      url: 'http://www.airsculptureballoonart.com'
    }
  ]
} %}

{% block screenshots %}
<div class="image-grid">
<!--
 <img src="/images/software/airsculpture-1.jpg">
-->
 <img src="/images/software/airsculpture-2.png" style="margin:17px 0;">
<!--
 <img src="/images/software/airsculpture-3.jpg">
-->
</div>
{% endblock %}
{% block projectDescription %}
Janice Spagnola, my mother-in-law, runs a balloon sculpture (balloon twisting, but at a much larger scale than your typical balloon dog) business called Air Sculpture. I develop and help design her website.
{% endblock %}
