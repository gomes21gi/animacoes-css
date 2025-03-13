import SlideNav from "./slidenav.js";

const slide1 = new SlideNav(".slide.slide1", ".slide-wrapper1");
slide1.init();
slide1.addArrow(".prev1", ".next1");
slide1.addControl(".custom-controls1");