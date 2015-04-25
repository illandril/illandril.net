{% extends 'partial-template.html' %}
{% block title %}Stories by Joe Spandrusyszyn{% endblock %}
{% block description %}A collection of some of Joe Spandrusyszyn's stories{% endblock %}
<!--
After "Dreamers" is finished, add a "New" section in addition to a "Novel/Novella" section.
WIP
New
Novel
Novella
Short Stories
UO Short Stories
-->
{% set storyGroups = [
        {
            "title": "Work in Progress",
            "subtitle": "Stories that I've started, but have yet to finish",
            "stories": [
                {
                    "name": "Dreamers (Working Title)",
                    "written": "ETA late-2015, early-2016 (but who knows when I'll actually finish it)",
                    "id": "dreamers-wip"
                }
            ]
        },
        {
            "title": "Short Stories",
            "subtitle": "Original short stories, written entirely by me",
            "stories": [
                {
                    "name": "Untitled Conversation",
                    "written": "2007 or earlier",
                    "id": "untitledConversation"
                }
            ]
        },
        {
            "title": "Ultima Online Related Short Stories",
            "subtitle": "Stories about some of the characters I played in Ultima Online (Yan'Chi, Arthur Illandril, Zah'Qim, and Gildar). Since these stories revolve around an MMORPG, they often include details from the game, as well as characters from other players, so I cannot take full credit for everything in these stories (and I have tried to include notices for those parts where other people deserve credit for character, location, and other details).",
            "stories": [
                {
                    "name": "An End to the Peace, Part 1",
                    "written": "2003 or earlier",
                    "id": "aettp1"
                }, {
                    "name": "A Break in the War (An End to the Peace, Part 2)",
                    "written": "2003 or earlier",
                    "id": "aettp2"
                }, {
                    "name": "Arthur's Return to Yew",
                    "written": "2003 or earlier",
                    "id": "returnToYew"
                }, {
                    "name": "Missing Comrade (An End to the Peace, Part 3)",
                    "written": "2003 or earlier",
                    "id": "aettp3"
                }, {
                    "name": "Untitled (An End to the Peace, Part 4)",
                    "written": "2003 or earlier",
                    "id": "aettp4"
                }, {
                    "name": "The Return (An End to the Peace, Part 5)",
                    "written": "2003 or earlier",
                    "id": "aettp5"
                }, {
                    "name": "A Knight Lost at Home",
                    "written": "2003 or earlier",
                    "id": "knightLostAtHome"
                }, {
                    "name": "Departure of Britannia",
                    "written": "2003 or earlier",
                    "id": "departureOfBritannia"
                }, {
                    "name": "Zah'Qim's Introduction",
                    "written": "2007 or earlier",
                    "id": "zqIntroduction"
                }, {
                    "name": "Zah'Qim's Note on the Invasions",
                    "written": "2007 or earlier",
                    "id": "zqInvasionNote"
                }
            ]
        }
    ]
%}

{% block content %}
{% for storyGroup in storyGroups %}
<div class="list">
    <div class="subheader">
        {{ storyGroup.title }}
        <div class="more">
            {{ storyGroup.subtitle }}
        </div>
    </div>
    {%for story in storyGroup.stories %}
        <a class="item" data-fs="y" href="/story/{{ story.id }}.html">
            <span class="content">
                <span class="primary">{{ story.name }}</span>
                <span class="secondary">Written: {{story.written }}</span>
            </span>
        </a>
    {% endfor %}
</div>
{% endfor %}
{% endblock %}
