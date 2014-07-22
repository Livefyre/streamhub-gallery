define([
    'streamhub-sdk/content',
    'streamhub-sdk/content/types/livefyre-content',
    'streamhub-sdk/content/types/livefyre-twitter-content',
    'streamhub-sdk/content/types/livefyre-facebook-content',
    'streamhub-sdk/content/types/livefyre-instagram-content',
    'streamhub-sdk/content/types/twitter-content',
    'streamhub-sdk/content/content-view-factory',
    'streamhub-gallery/content/views/content-view',
    'streamhub-gallery/content/views/tiled-attachment-list-view',
    'streamhub-sdk/content/views/twitter-content-view',
    'streamhub-gallery/content/views/facebook-content-view',
    'streamhub-gallery/content/views/instagram-content-view',
    'inherits'
], function(
    Content,
    LivefyreContent,
    LivefyreTwitterContent,
    LivefyreFacebookContent,
    LivefyreInstagramContent,
    TwitterContent,
    BaseContentViewFactory,
    ContentView,
    TiledAttachmentListView,
    TwitterContentView,
    FacebookContentView,
    InstagramContentView,
    inherits
) {

    /**
     * A module to create instances of ContentView for a given Content instance.
     * @exports streamhub-sdk/content/content-view-factory
     * @constructor
     */
    var ContentViewFactory = function(opts) {
        opts = opts || {};
        BaseContentViewFactory.call(this, opts);
    };
    inherits(ContentViewFactory, BaseContentViewFactory);

    /**
     * The default registry for Content -> ContentView rendering.
     * Expects entries to always contain a "type" property, and either a view property
     * (the type function itself) or a viewFunction property (a function that returns a
     * type function, useful for conditional view selection.).
     */
    ContentViewFactory.prototype.contentRegistry = [
        { type: LivefyreTwitterContent, view: TwitterContentView,
            typeUrn: 'urn:livefyre:js:streamhub-sdk:content:types:livefyre-twitter' },
        { type: LivefyreFacebookContent, view: FacebookContentView,
            typeUrn: 'urn:livefyre:js:streamhub-sdk:content:types:livefyre-facebook' },
        { type: LivefyreInstagramContent, view: InstagramContentView,
            typeUrn: 'urn:livefyre:js:streamhub-sdk:content:types:livefyre-instagram' },
        { type: TwitterContent, view: TwitterContentView,
            typeUrn: 'urn:livefyre:js:streamhub-sdk:content:types:twitter' },
        { type: LivefyreContent, view: ContentView,
            typeUrn: 'urn:livefyre:js:streamhub-sdk:content:types:livefyre' },
        { type: Content, view: ContentView,
            typeUrn: 'urn:livefyre:js:streamhub-sdk:content' }
    ];

    return ContentViewFactory;
});
