define(function(require) {
    var Collection = require('streamhub-sdk/collection');
    var DefaultAnimator = require('streamhub-gallery/animators/animator');
    var CoverflowAnimator = require('streamhub-gallery/animators/coverflow-animator');
    var CarouselAnimator = require('streamhub-gallery/animators/coverflow-animator');
    var View = require('streamhub-gallery');

    return function(el) {
        var collection = new Collection({
            network: "labs.fyre.co",
            environment: "livefyre.com",
            siteId: "315833",
            articleId: 'livefyre-tweets'
        });
        var view = new View({
            el: el,
            aspectRatio: 4/3
        });
        view.switchAnimator(new CoverflowAnimator());
        
        collection.pipe(view);
  
        return view;
    };
});
