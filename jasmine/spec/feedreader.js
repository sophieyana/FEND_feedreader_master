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
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('has URL', function() {
            allFeeds.forEach(function(item) {
                expect(item.url).toBeDefined();
                expect(item.url).not.toBe("");

                }
            )

         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('has name', function() {
            allFeeds.forEach(function(item) {
                expect(item.name).toBeDefined();
                expect(item.name).not.toBe("");

                }
            )

         });

    });

    /* TODO: Write a new test suite named "The menu" */


    describe('The Menu', function() {

        it('is hidden by default', function() {
            
                expect($('body').hasClass('menu-hidden')).toBe(true);
           
        });

        /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        it('changes visibility when menu icon is clicked', function() {

                $(".menu-icon-link").click();
                expect($('body').hasClass('menu-hidden')).toBe(false);


                $(".menu-icon-link").click();
                expect($('body').hasClass('menu-hidden')).toBe(true);
          
        });




    });

         

    /* TODO: Write a new test suite named "Initial Entries" */


    describe('Initial Entries', function() {


        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done) {
            loadFeed(0,function() {
                done();

            });

        });

        it('should have at least an article', function(done) {
            var entryLength=$('.feed').find('.entry').length;
            expect(entryLength).toBeGreaterThan(0);
            done();
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function() {


        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        var contentBefore;
        var contentAfter; 


         beforeEach(function(done){
            $('.feed').empty();
            loadFeed(0, function(){
                contentBefore = $('.feed').find("h2").first().text();
            });

            loadFeed(1, function() {
                contentAfter = $('.feed').find("h2").first().text();
                done();
             });

        });



         it('loads new content', function(done) {
             console.log(contentBefore);
             console.log(contentAfter);

             expect(contentAfter).not.toEqual(contentBefore);
             done();

         });


    });

}());
