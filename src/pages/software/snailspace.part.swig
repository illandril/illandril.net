{% extends 'project-template.html' %}

{% set project = {
  name: "Snail's Pace",
  links: [
    {
      name: 'Student Project Website',
      details: 'Details about the project, developers, and a download for the finished game',
      url: 'http://games.rit.edu/node/237'
    },
    {
      name: 'Source Code',
      details: 'A git clone of the SVN repository used for the project',
      url: 'https://github.com/jreese/snailspace'
    }
  ]
} %}

{% block screenshots %}
<div class="image-grid">
 <img src="/images/software/snailspace-title.jpg">
 <img src="/images/software/snailspace-1.jpg">
 <img src="/images/software/snailspace-2.jpg">
</div>
{% endblock %}
{% block projectDescription %}
Snail's Pace is a 2D game that combines elements of the shooter and platformer genres.
It was developed for the Winter 2006-2007 2D Graphics Programming course at RIT by
Patrick Dobson, Josh Gruenberg, John Reese, Brian Schroth, and myself (at the time, my name was Joe Andrusyszyn, instead of Joe Spandrusyszyn).
{% endblock %}
