'use strict';

var GalleryView = require('./gallery-view');
var Animator = require('./animators/animator');
var CarouselAnimator = require('./animators/carousel-animator');
var CoverflowAnimator = require('./animators/coverflow-animator');

exports = module.exports = GalleryView;
exports.Animator = Animator;
exports.CarouselAnimator = CarouselAnimator;
exports.CoverflowAnimator = CoverflowAnimator;
