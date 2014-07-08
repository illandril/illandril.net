{% extends 'story-template.html' %}
{% block storyTitle %}Zah'Qim's Note on the Invasions{% endblock %}

{% block story %}
        <!-- ngRepeat: line in lines --><div data-ng-repeat="line in lines" class="ng-scope">
            <!-- ngIf: line.normal -->
            <!-- ngIf: line.special --><div data-ng-if="line.special" class="notmine">Aramis, Beleg, and Hundii are characters of other UO players. The events being described actually occurred within UO.</div><!-- end ngIf: line.special -->
        </div><!-- end ngRepeat: line in lines --><div data-ng-repeat="line in lines" class="ng-scope">
            <!-- ngIf: line.normal --><div data-ng-if="line.normal" class="storyLine ng-scope ng-binding">I have already said some of what I am about to write, but I will repeat what is relative.</div><!-- end ngIf: line.normal -->
            <!-- ngIf: line.special -->
        </div><!-- end ngRepeat: line in lines --><div data-ng-repeat="line in lines" class="ng-scope">
            <!-- ngIf: line.normal --><div data-ng-if="line.normal" class="storyLine ng-scope ng-binding">I was at the invasion of Cove. I fought in defense of the city, and protected those in her as best as I could. The apparent leader of the horde showed, and the Guard slew him. The orcs still came, so the Guard retreated. Aramis and I stayed as long as we could, but two men cannot keep a horde out of a city, while slaying another. We returned to Britain and listened to the reports. Only two were of note. The first, likely nothing. Orcish Engineering Kits found on some of the fallen orc. They were interesting tools, but nothing too odd. The second, the spotting of a shrouded figure watching the battle. The description reminded me of tales of "Seers". Beings of unknown identity that sit and wait, giving bits of information from time to time, but never really showing which side they are really on. I checked the spot they were seen Tuesday morning. There was no trace remaining of any being, but it was clear why one would use that spot to watch the battle. The whole city could be seen, and every movement of both sides observed. The motives of the watcher I cannot determine with the information I have.</div><!-- end ngIf: line.normal -->
            <!-- ngIf: line.special -->
        </div><!-- end ngRepeat: line in lines --><div data-ng-repeat="line in lines" class="ng-scope">
            <!-- ngIf: line.normal --><div data-ng-if="line.normal" class="storyLine ng-scope ng-binding">I was not at the initial invasion of the Courts, and the reports I have heard were just plain terrible. All I know is what is there. At least three of us (Beleg, Hundii, and myself) have noticed the watchers at the courts. They have not visibly aided either side, to my knowledge. There is clearly a leader at wherever t is the orcs are coming from, ordering them to fortify only, and not attack. Some don't obey this order, and have gone further into Yew, but they never last long.</div><!-- end ngIf: line.normal -->
            <!-- ngIf: line.special -->
        </div><!-- end ngRepeat: line in lines --><div data-ng-repeat="line in lines" class="ng-scope">
            <!-- ngIf: line.normal --><div data-ng-if="line.normal" class="storyLine ng-scope ng-binding">I was at the first attack on Britain. There were no watchers, only demons. The crystal created by Clainin was how the invasion was made possible. Clainin is either working for those in charge of the invasions, or was used by someone who is.</div><!-- end ngIf: line.normal -->
            <!-- ngIf: line.special -->
        </div><!-- end ngRepeat: line in lines --><div data-ng-repeat="line in lines" class="ng-scope">
            <!-- ngIf: line.normal --><div data-ng-if="line.normal" class="storyLine ng-scope ng-binding">I was at the attack on Jhelom. This force was not an invasion attempt. I think there was a link, but I don't know the cause, so I can't say for sure. The source, though, is halfway between the orc cave and the community center. It's nice when there is only one person who does custom shoemaking of the kind needed by the leader of the invasion. If you wish the whole path and how I found it, I can tell you, but it was just asking simple questions from various townsfolk.</div><!-- end ngIf: line.normal -->
            <!-- ngIf: line.special -->
        </div><!-- end ngRepeat: line in lines --><div data-ng-repeat="line in lines" class="ng-scope">
            <!-- ngIf: line.normal --><div data-ng-if="line.normal" class="storyLine ng-scope ng-binding">Zah'Qim</div><!-- end ngIf: line.normal -->
            <!-- ngIf: line.special -->
        </div><!-- end ngRepeat: line in lines -->
{% endblock %}