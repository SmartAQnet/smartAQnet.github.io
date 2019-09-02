---
layout: page
title: Mitmachen im SmartAQnet
feature-img: "http://www.teco.edu/wp-content/uploads/2019/02/KX7C8544-1024x683.jpg"
bootstrap: true
indexed: true
---

<h2>Um was geht es?</h2>

Klassisch wird Feinstaub in Städten an wenigen genauen Mess-Stationen gravimetrisch bestimmt. Dazu wird die Luft über 24 Stunden durch einen Filter gesaugt, auf dem sich die Partikel sammeln. Nach einigen Tagen werden die Filter gesammelt, gewogen und der Feinstaub bestimmt. Zusätzlich kann Feinstaub "in Echtzeit", z.B. mit optischen Methoden gemessen werden. Genaue Messgeräte sind auch hier groß und teuer und deshalb an wenigen Stellen zu finden.

Um Feinstaub flächendeckend erfassen zu können werden zunehmend auch sogenannte low-cost Sensoren eingesetzt. Mit einfachen Technologien können interessierte Bürger und Bürgerinnen selbst diese Feinstaub-Sensoren betreiben. Solche Citizen Science Ansätze wurden und werden z.B. in den Projekten <a href="https://luftdaten.info">luftdaten.info</a>, <a href="https://www.bund.net/mobilitaet/schadstoffe/hackair/">HackAir</a> oder <a href="https://sensebox.de/">senseBox</a> verfolgt, in denen Bürger insgesamt tausende low-cost Sensoren in Städten verteilt haben. In Stuttgart ist so beispielsweise auf Initiative des dortigen <a href="https://www.codefor.de/stuttgart/">OK Labs</a> ein dichtes Messnetz enstanden. 

Ein Nachteil dieser low-cost Sensoren ist aber, dass sie unter bestimmten Bedingungen leider nicht sehr genau sind und dass ohne Referenzmessungen eine wissenschaftliche Validierung der Datenqualität nicht ohne weiteres möglich ist. Im Forschungsprojekt <a href="http://www.teco.edu/research/smartaqnet/">SmartAQnet</a> wird daher der Ansatz verfolgt, low-cost-Sensoren mit verteilten Referenzgeräten zu kombinieren und durch die gewonnenen Daten wissenschaftliche Erkenntnisse zu neuen Messnetzwerken zu gewinnen. Dazu wird ein prototypisches Luftqualitätsnetzwerk am Modellstandort Augsburg aufgebaut und evaluiert.

SmartAQnet wird vom Bundesministerium für Verkehr und Digitale Infrastruktur (BMVI) <a href="https://www.bmvi.de/SharedDocs/DE/Artikel/DG/mfund-projekte/smart-air-quality-network-smartaqnet.html">gefördert</a> und läuft voraussichtlich bis zum Jahr 2020. 

<h2>Wie kann ich mitmachen?</h2>

Um einen eigenen Feinstaub-Sensor zu bauen und zu unserem Projekt beizutragen, braucht man nur die erforderlichen Hardwarekomponenten zu kaufen (unten aufgelistet, ca. 30 Euro insgesamt). Unsere detaillierte Anleitung führt Sie durch den Prozess des Zusammenbaus, der Installation der Firmware sowie der Konfiguration des Feinstaub-Sensors. Für Fragen stehen wir gerne per E-mail zur Verfügung. 

Alle, die keine Erfahrung mit dem Zusammenbau von Mikroelektronik haben oder sich die in der Anleitung beschriebenen Schritte nicht zutrauen, laden wir herzlich zu unseren Bürgerworkshops ein. Wir veranstalten diese Workshops in unregelmäßigen Abständen in Augsburg (je nach Bedarf; auch gerne auf Einladung), sind völlig kostenfrei und auch die Hardware bringen wir gerne zum Selbstkostenpreis mit. 

Auf den Workshops bauen wir Feinstaub-Sensoren nach dem Vorbild des Projekts <a href="https://luftdaten.info">luftdaten.info</a> zusammen. Diese können Sie im Anschluss mitnehmen und bei sich zuhause in Augsburg installieren. In SmartAQnet haben wir dabei einige Veränderungen an der eingesetzten Hard- und Software vorgenommen, folgen aber im Kern dem dort beschriebenen <a href="https://luftdaten.info/feinstaubsensor-bauen/">Design des Sensors</a> (siehe Abbildung rechts). Der Sensor überträgt seine Daten zusammen mit der Position des Sensors anonymisiert an luftdaten.info und zusätzlich an eine Datenbank bei uns am Karlsruhe Institut für Technologie (KIT).

Wir stellen die benötigten Komponenten für bis zu 30 Teilnehmer für einen Unkostebeitrag von jeweils 30 Euro bereit. Im einzelnen handelt es sich um folgende Komponenten:
<ul>
 	<li>1 x <a href="https://de.aliexpress.com/item/WIFI-ESP32-Entwicklungsboard-0-96-Zoll-Blau-Oled-display-Bluetooth-internet-der-dinge-f-r-Arduino/32835496547.html?spm=a2g0x.search0104.3.1.55da6390mpDLp3&amp;ws_ab_test=searchweb0_0%2Csearchweb201602_2_10065_10068_10547_319_317_10548_10696_10084_453_10083_454_10618_10304_10307_10820_10821_537_10302_536_10902_10843_10059_10884_10887_321_322_10103%2Csearchweb201603_59%2CppcSwitch_0&amp;algo_pvid=76ca3798-c9b0-4c42-8c1e-25329e8f5de6&amp;algo_expid=76ca3798-c9b0-4c42-8c1e-25329e8f5de6-0">Heltec ESP32 Board</a></li>
 	<li>1 x <a href="https://www.watterott.com/de/BME280-Breakout-Luftfeuchtigkeits-Druck-Tempertursensor">Bosch BME280 Breakouts</a></li>
 	<li>1 x <a href="https://de.aliexpress.com/item/PM-sensor-SDS011-High-precision-laser-pm2-5-PM1-air-quality-detection-sensor-module-Super-dust/32795231620.html">SDS011 Feinstaubsensor</a></li>
 	<li>7 x <a href="https://de.aliexpress.com/item/Free-Shipping-80pcs-dupont-cable-jumper-wire-dupont-line-female-to-female-dupont-line-20cm-1P/701588771.html">female-to-female Dupondkabel</a></li>
 	<li>1 x Kabelbinder</li>
 	<li>1 x Isolierschlauch 6mm Durchmesser</li>
 	<li>2 x <a href="https://www.bauhaus.info/rohrsysteme/marley-ht-bogen-/p/13625028">Rohre/Gehäuse</a></li>
 	<li>1 x USB-Steckerenetzteil</li>
 	<li>1 x USB Kabel ("Handy-Kabel": USB-A-Stecker-zu-microUSB-B-Stecker)</li>
</ul>
Die Links sind Beispiele, alle Komponenten sind auch von Händlern aus Deutschland erhältlich, üblicherweise verbunden mit höheren Kosten und deutlich kürzeren Lieferzeiten.

<hr />

<div class="card container p-2">
<div class="card-header">
<h4> Download der Firmware für Erstinstallation/Firmware-Reset mit <a href="https://github.com/marcelstoer/nodemcu-pyflasher/releases">NodeMCU-PyFlasher</a></h4>
</div>
<div class="card-body">
<h6>Download des Installationstools NodeMCU PyFlasher: </h6>
<li> Windows 10 | <a href="https://github.com/marcelstoer/nodemcu-pyflasher/releases/download/v4.0/NodeMCU-PyFlasher-4.0-x64.exe">NodeMCU-PyFlasher-64bit</a> </li>
<li> Windows 7 &nbsp; | <a href="https://github.com/marcelstoer/nodemcu-pyflasher/releases/download/v4.0/NodeMCU-PyFlasher-4.0-x86.exe">NodeMCU-PyFlasher-32bit</a> </li>
<br />
<h6>Download der Firmware: </h6>
<li> <a href="http://www.teco.edu/wp-content/uploads/2019/08/crowdsensor_v0.8.5_heltec_wifi_kit_32_pyflasher.zip">crowdsensor_v0.8.5_heltec_wifi_kit_32_pyflasher</a></li>

<i>(nach dem Download entpacken)</i>
</div>
</div>

<div class="card container p-2 mt-3">
<div class="card-header">
<h4> Download der Firmware für update via WLAN (OTA)</h4>
</div>
<div class="card-body">
<h6>Download der Firmware: </h6>
<li> <a href="http://www.teco.edu/wp-content/uploads/2019/08/crowdsensor_v0.8.5_heltec_wifi_kit_32_OTA.zip">crowdsensor_v0.8.5_heltec_wifi_kit_32_OTA</a> </li>

<i>(nach dem Download entpacken)</i>
</div>
</div>

<div class="card container p-2 mt-3">
<div class="card-header">
<h4> Download der Anleitung</h4>
</div>
<div class="card-body">
<li> <a href="https://www.teco.edu/wp-content/grand-media/application/Anleitung_Crowdsensor_V085b.pdf">Aufbauanleitung SmartAQnet Crowdsensing Node v0.8.5</a> </li>
</div>
</div>


<div class="card container p-2 mt-5">
    <div class="card-header">
        <h4>Vergangene Workshops</h4>
    </div>
    <div class="card-body">
        <li> <a href="http://www.teco.edu/research/mitmachen-im-smart-air-quality-network-workshop-augsburg/">März 2019 - OK Lab Augsburg </a> </li>
        <li> <a href="http://www.teco.edu/research/mitmachen-im-smart-air-quality-network-workshop-augsburg/">Mai 2019 - Zeughaus Augsburg </a> </li>
    </div>
</div>

<div class="card container p-2">
    <div class="card-header">
        <h4>Geplante Workshops</h4>
    </div>
    <div class="card-body">
        -
    </div>
</div>

<div class="card container p-2 mt-3">
    <div class="card-header">
        <h4>Noch Fragen?</h4>
    </div>
    <div class="card-body">

Kontaktieren Sie uns gerne unter 

<script type="text/javascript">                            
            //< ![CDATA[                                              
    var mto = "mailto:";                                     
    var usr = "citizenscience";                                       
    var dom = "teco.edu";                                    
    document.write("<a href=\""+mto+usr+"&#064;"+dom+"\">"); 
    //]]> 
</script>
citizenscience(at)teco.edu
<script type="text/javascript">                            
    //< ![CDATA[                                              
    document.write("</a>");                                  
    //]]>
</script>.
    </div>
</div>