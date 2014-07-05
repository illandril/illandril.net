{% extends 'project-template.html' %}

{% set project = {
  name: "RSA WebCRD",
  links: [
    {
      name: 'RSA WebCRD',
      details: 'WebCRD Product Information',
      url: 'http://www.rocsoft.com/WebCRD'
    }
  ]
} %}

{% block projectDescription %}
WebCRD is a web-to-print solution for print centers.
It is written in Java, Javascript, HTML5, CSS3, and takes advantage of a wide variety of libraries, including Spring, Hibernate, and Google Closure.
I work as one of the Software Engineers for WebCRD, primarily focused on front-end development (though I've had my hands in nearly every aspect at some point).
I started as a co-op in the summer of 2006, while I was still studying at RIT, and started full time immediately after graduating in 2009.
{% endblock %}
