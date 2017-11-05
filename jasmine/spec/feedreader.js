/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {

        // Ensure allFeeds variable is defined and not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Loop through each feed in allFeeds array and
        // ensure the URL is defined and not empty
        it('URLs are defined and not empty', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                let feed = allFeeds[i];
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            }
        });

        // Loop through each feed in allFeeds array and
        // ensure the name is defined and not empty
        it('names are defined and not empty', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                let feed = allFeeds[i];
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            }
        });
    });

    describe('The menu', function() {

        // Ensure menu element is hidden by default
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });


        // Ensure menu displays on click & hides on 2nd click
        it('changes visibility when menu icon is clicked', function() {
            const menuIcon = $('.menu-icon-link');
            $(menuIcon).trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $(menuIcon).trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {

        // On loadFeed completion, ensure there is at least
        // a single .entry element within the .feed container.
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('on loadFeed, have at least 1 .entry element in .feed container', function(done) {
            expect($('.feed').find('article').hasClass('entry')).toBe(true);
            done();
        });
    });

    describe('New Feed Selection', function() {

        // On new loadFeed, ensure that content changes
        let feedhtml1, feedhtml2;

        beforeEach(function(done) {
            loadFeed(0, function() {
                feedhtml1 = $('.feed').find('h2').html();
            });

            loadFeed(1, function() {
                feedhtml2 = $('.feed').find('h2').html();
                done();
            });
        });

        it('on new loadFeed, content changes', function(done) {
            expect(feedhtml1 === feedhtml2).toBe(false);
            loadFeed(0);// Load default first feed again
            done();
        });
    });
});
