---
layout: page
title: Participate in SmartAQnet
feature-img: "http://www.teco.edu/wp-content/uploads/2019/02/KX7C8544-1024x683.jpg"
bootstrap: true
indexed: true
---

<h2>What's it about?</h2>

Classically, fine dust in cities is determined gravimetrically at a few precise measuring stations. For this purpose, the air is sucked through a filter for 24 hours, on which the particles collect. After a few days, the filters are collected, weighed and the fine dust determined. In addition, fine dust can be measured "in real time", e.g. using optical methods. Exact measuring instruments are also large and expensive here and can therefore be found in a few places.

So-called low-cost sensors are increasingly being used in order to be able to capture fine dust across the entire area. With simple technologies, interested citizens can operate these fine dust sensors themselves. Such Citizen Science approaches were and are being pursued, for example, in the projects <a href="https://luftdaten.info">luftdaten.info</a>, <a href="https://www.bund.net/mobilitaet/schadstoffe/hackair/">HackAir</a> or <a href="https://sensebox.de/">senseBox</a>, in which citizens have distributed a total of thousands of low-cost sensors in cities. In Stuttgart, for example, a dense measuring network was created on the initiative of the local <a href="https://www.codefor.de/stuttgart/">OK Labs</a>. 

A disadvantage of these low-cost sensors, however, is that they are unfortunately not very accurate under certain conditions and that scientific validation of the data quality is not possible without reference measurements. The research project <a href="http://www.teco.edu/research/smartaqnet/">SmartAQnet</a> therefore pursues the approach of combining low-cost sensors with distributed reference devices and using the data obtained to gain scientific knowledge about new measurement networks. For this purpose, a prototype air quality network will be set up and evaluated at the model location Augsburg.

SmartAQnet is funded by the Federal Ministry of Transport and Digital Infrastructure (BMVI) <a href="https://www.bmvi.de/SharedDocs/DE/Artikel/DG/mfund-projekte/smart-air-quality-network-smartaqnet.html">and is expected to run until 2020. 


<h2>How can I participate?</h2>

To build your own fine dust sensor and contribute to our project, you only need to buy the necessary hardware components (listed below, approx. 30 Euro in total). Our detailed instructions will guide you through the process of assembly, firmware installation and fine dust sensor configuration. If you have any questions, please do not hesitate to contact us by e-mail. 

We cordially invite all those who have no experience with the assembly of microelectronics or do not feel comfortable enough to follow the steps described in the manual on their own to our citizen workshops. We organize these workshops at irregular intervals in Augsburg (according to need; also by invitation). They are completely free of charge and we also bring the hardware at cost price. 

At the workshops we assemble fine dust sensors according to the model of the project <a href="https://luftdaten.info">luftdaten.info</a>. You can then take these with you and install them at your home in Augsburg. In SmartAQnet, we have made some changes to the hardware and software used, but at its core we follow the <a href="https://luftdaten.info/feinstaubsensor-bauen/">design of the sensor</a> described there (see illustration on the right). The sensor transmits its data together with the position of the sensor anonymously to luftdaten.info and additionally to a database at our Karlsruhe Institute of Technology (KIT).

We provide the required components for up to 30 participants for a free contribution of 30 Euro each. In detail it concerns the following components:
<ul>
 	<li>1 x <a href="https://de.aliexpress.com/item/WIFI-ESP32-Entwicklungsboard-0-96-Zoll-Blau-Oled-display-Bluetooth-internet-der-dinge-f-r-Arduino/32835496547.html?spm=a2g0x.search0104.3.1.55da6390mpDLp3&amp;ws_ab_test=searchweb0_0%2Csearchweb201602_2_10065_10068_10547_319_317_10548_10696_10084_453_10083_454_10618_10304_10307_10820_10821_537_10302_536_10902_10843_10059_10884_10887_321_322_10103%2Csearchweb201603_59%2CppcSwitch_0&amp;algo_pvid=76ca3798-c9b0-4c42-8c1e-25329e8f5de6&amp;algo_expid=76ca3798-c9b0-4c42-8c1e-25329e8f5de6-0">Heltec ESP32 Board</a></li>
 	<li>1 x <a href="https://www.watterott.com/de/BME280-Breakout-Luftfeuchtigkeits-Druck-Tempertursensor">Bosch BME280 Breakouts</a></li>
 	<li>1 x <a href="https://de.aliexpress.com/item/PM-sensor-SDS011-High-precision-laser-pm2-5-PM1-air-quality-detection-sensor-module-Super-dust/32795231620.html">SDS011 Fine Dust Sensor</a></li>
 	<li>7 x <a href="https://de.aliexpress.com/item/Free-Shipping-80pcs-dupont-cable-jumper-wire-dupont-line-female-to-female-dupont-line-20cm-1P/701588771.html">female-to-female Dupondkabel</a></li>
 	<li>1 x cable tie</li>
 	<li>1 x Insulating hose of 6mm diameter</li>
 	<li>2 x <a href="https://www.bauhaus.info/rohrsysteme/marley-ht-bogen-/p/13625028">Pipes/Box</a></li>
 	<li>1 x USB-plug with power supply unit</li>
 	<li>1 x USB Cable ("Cell-phone-cable": USB-A-Plug-to-microUSB-B-Plug)</li>
</ul>
The links are examples, all components are also available from dealers in Germany, usually associated with higher costs and significantly shorter delivery times.

<hr />

<div class="card container p-2">
<div class="card-header">
<h4> Download firmware for first installation/firmware reset with <a href="https://github.com/marcelstoer/nodemcu-pyflasher/releases">NodeMCU-PyFlasher</a></h4>
</div>
<div class="card-body">
<h6>Download the installation tool NodeMCU PyFlasher: </h6>
<li> Windows 10 | <a href="https://github.com/marcelstoer/nodemcu-pyflasher/releases/download/v4.0/NodeMCU-PyFlasher-4.0-x64.exe">NodeMCU-PyFlasher-64bit</a> </li>
<li> Windows 7 &nbsp; | <a href="https://github.com/marcelstoer/nodemcu-pyflasher/releases/download/v4.0/NodeMCU-PyFlasher-4.0-x86.exe">NodeMCU-PyFlasher-32bit</a> </li>
<br />
<h6>Download firmware: </h6>
<li> <a href="http://www.teco.edu/wp-content/uploads/2020/09/crowdsensor_v1.0_heltec_wifi_kit_32_OTA.zip">crowdsensor_v1.0_heltec_wifi_kit_32_OTA</a> (newest Version)</li>
<li> <a href="http://www.teco.edu/wp-content/uploads/2019/08/crowdsensor_v0.8.5_heltec_wifi_kit_32_OTA.zip">crowdsensor_v0.8.5_heltec_wifi_kit_32_OTA</a> (old Version)</li>

<i>(extract after download)</i>
</div>
</div>

<div class="card container p-2 mt-3">
<div class="card-header">
<h4> Download firmware for update via WiFi (OTA)</h4>
</div>
<div class="card-body">
<h6>Download firmware: </h6>
<li> <a href="http://www.teco.edu/wp-content/uploads/2019/08/crowdsensor_v0.8.5_heltec_wifi_kit_32_OTA.zip">crowdsensor_v0.8.5_heltec_wifi_kit_32_OTA</a> </li>

<i>(extract after download)</i>
</div>
</div>

<div class="card container p-2 mt-3">
<div class="card-header">
<h4> Download manual</h4>
</div>
<div class="card-body">
<li> <a href="https://www.teco.edu/wp-content/grand-media/application/Anleitung_Crowdsensor_V1.0.pdf">Assembly and installation manual of the SmartAQnet Crowdsensing Node v1.0</a> </li>
<li> <a href="https://www.teco.edu/wp-content/grand-media/application/Anleitung_Crowdsensor_V085b.pdf">Assembly and installation manual of the SmartAQnet Crowdsensing Node v0.8.5</a> </li>
</div>
</div>

<div class="card container p-2 mt-5">
    <div class="card-header">
        <h4>Past Workshops</h4>
    </div>
    <div class="card-body">
        <li> <a href="http://www.teco.edu/research/mitmachen-im-smart-air-quality-network-workshop-augsburg/">März 2019 - OK Lab Augsburg </a> </li>
        <li> <a href="http://www.teco.edu/research/mitmachen-im-smart-air-quality-network-workshop-augsburg/">Mai 2019 - Zeughaus Augsburg </a> </li>
    </div>
</div>

<div class="card container p-2">
    <div class="card-header">
        <h4>Future Workshops</h4>
    </div>
    <div class="card-body">
        -
    </div>
</div>

<div class="card container p-2 mt-3">
    <div class="card-header">
        <h4>Any Questions?</h4>
    </div>
    <div class="card-body">

Please contact us

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