{% extends 'album-template.html' %}
{% block albumTitle %}Gardens and Potted Plants{% endblock %}
{% set albumID = 'gardens' %}
{% set photos = [
  {
    id: 'gb',
    name: 'Garden Bench',
    purchase: 'http://www.500pxart.com/photo/79166939?substrate=paper&style=PF&frame=F0094&size=S'
  },
  {
    id: 'rc',
    name: 'Red Chrysanthemum',
    purchase: 'http://www.500pxart.com/photo/79166941?substrate=canvas&style=CG&frame=F0000&size=S'
  },
  {
    id: 'd',
    name: 'Daffodil',
    purchase: 'http://www.500pxart.com/photo/79166937?substrate=paper&style=PF&frame=F0091&size=S'
  }
] %}
