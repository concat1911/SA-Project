import { Component, OnInit } from '@angular/core';
declare let L;

import '../../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  lat = 51.5643
  long = 7.345

  constructor() { }

  ngOnInit() {
    const map = L.map('map').setView([51.04895, 13.75790], 19);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.Routing.control({
      waypoints: [
          L.latLng(51.04895, 13.75790),
          L.latLng(57.6792, 11.949)
      ]
    }).addTo(map);
  }

}
