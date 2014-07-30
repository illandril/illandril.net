{% extends 'album-template.html' %}
{% block albumTitle %}Food{% endblock %}
{% set albumID = 'food' %}
{% set photos = [
  {
    id: 'cb',
    name: 'Cinnamon Buns',
    purchase: 'http://www.500pxart.com/photo/78113199?substrate=paper&style=PF&frame=F0091&size=S'
  },
  {
    id: 'sd',
    name: 'Sprinkled Donut',
    purchase: 'http://www.500pxart.com/photo/78113189?substrate=paper&style=PF&frame=F0091&size=S'
  },
  {
    id: 'dp',
    name: 'Donut Plate',
    purchase: 'http://www.500pxart.com/photo/78113205?substrate=paper&style=PF&frame=F0092&size=S'
  },
  {
    id: 'cd',
    name: 'Cinnamon Donut',
    purchase: 'http://www.500pxart.com/photo/78113201?substrate=canvas&style=CG&frame=F0000&size=S'
  },
  {
    id: 'srs',
    name: 'Strawberry Rhubarb Shortcake',
    purchase: 'http://www.500pxart.com/photo/78113191?substrate=canvas&style=CG&frame=F0000&size=S'
  }
] %}
