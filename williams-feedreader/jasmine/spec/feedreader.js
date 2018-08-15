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
        })


        /* This test will loop through the allFeeds array and for each feed
         * it will check to see if the url property is defined and if the url
         * is not an empty string.
         */
        it('should ensure that every feed has a URL and that URL is not empty', function() {
            for (let feed of allFeeds){
                //console.log(feed);
                expect(feed.url).toBeDefined();
                //checks if it is empty 
                expect(feed.url.length).not.toBe(0);
            }
        });


        /* This test will loop through the allFeeds array and for each feed
         * it will check to see if the name property is defined and if the name
         * is not an empty string.
         */
        it('should ensure that every feed has a name and that name is not empty', function() {
            for (let feed of allFeeds){
                //console.log(feed);
                expect(feed.name).toBeDefined();
                //checks if it is empty 
                expect(feed.name.length).not.toBe(0);
            }
        });
    });


    /* New test suite called "The menu" which will test how 
     * the menu appears and disappers in the web application 
     */
         describe('The menu', function() {
            let menu, menuIcon;
            beforeEach(function() {
                menu = document.body; 
                menuIcon = document.getElementsByClassName("menu-icon-link");
            });
        

         /* This test uses jQuery to check the body tag ensuring 
         * it has a class named menu-hidden. This class ensures 
         * the slide out menu is hidden by default.
         */
            it('should find the menu element hidden by default', function() {
                //expect(menu.className).toContain("menu-hidden");
               expect($("body").hasClass("menu-hidden")).toBe(true);
            })
    
        /* This test first uses JS to identify and click the menu icon. When the icon is clicked 
         * the menu-hidden class is removed, sliding the menu out. When the icon is clicked again 
         * the menu-hidden class is put back, sliding the menu off of the screen again. 
         */
            it('should show and hide the menu on click', function() { 
                let clickedMenuIcon = menuIcon[0];
                clickedMenuIcon.click();
                expect($("body").hasClass("menu-hidden")).not.toBe(true);
                clickedMenuIcon.click();
                expect($("body").hasClass("menu-hidden")).toBe(true);
    
            });
        });     

    /* New test suite called "Initial Entries" which will 
     * check if the loadFeed function actually loads the feeds
     * fetchecd from the api
     */
    
    // followed this tutorial to figure out how to implement the done functionality 
    // https://www.youtube.com/watch?v=_XwH-xfvydw

        describe('Initial Entries', function() {
            beforeEach(function(done) {
                //feedContainer = document.getElementsByClassName("feed");
                loadFeed(0, function() {
                    done();
                })
            })

        /* Test the asynchronous function loadFeed() to ensure when it's called
         * and completed it returns the element with the class .feed and at least one
         * child element with the class .entry.  
         */
            it('should show at least a single entry is within the feed container when loadFeed() is called', function() {
                /* Reviewer suggested using method toBeGreaterThan() to make sure 
                 * the elements with .entry class should be 
                 * greater than 0. Found a SO article detailing how to use it. 
                 * https://stackoverflow.com/questions/16302045/finding-child-element-of-parent-pure-javascript
                 */
                expect(document.querySelector('.feed').querySelectorAll('.entry').length).toBeGreaterThan(0);
            })
        }); 
         

    /* New test suite called "New Feed Selection" which will 
     * check when the loadFeed() is called back to back,  new feed data is being loaded.
     */

    describe('New Feed Selection', function() {
        let feedContainer = document.getElementsByClassName("feed");
        let firstFeed, secondFeed;
        beforeEach(function(done) {
            //call for the first feed of content 
            loadFeed(0, function(){
                firstFeed = feedContainer[0].innerText;
                /*call loadFeed() again in the cb to ensure the first one was successful
                and to load a different feed 
                */
                loadFeed(1, function(){
                    secondFeed = feedContainer[0].innerText;
                    done();
                })
            })
        })
        /* Ensure the content returned by both the loadFeed() calls 
         * are different
         */
        it('a single entry is within the feed container when call loadFeed()', function() {
            expect(firstFeed).not.toEqual(secondFeed);
        })
    }); 
}());
