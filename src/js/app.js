

    var model = {
        currentCat: null,
        adminVisible: false,
        cats: [
            {
                catName: "Harry",
                catImage: "Harry.jpg",
                clickCount: 0
            },
            {
                catName: "Gary",
                catImage: "Gary.jpg",
                clickCount: 0
            },
            {
                catName: "Larry",
                catImage: "Larry.jpg",
                clickCount: 0
            },
            {
                catName: "Marry",
                catImage: "Marry.jpg",
                clickCount: 0
            },
            {
                catName: "Jerry",
                catImage: "Jerry.jpg",
                clickCount: 0
            },
            {
                catName: "Betty",
                catImage: "Betty.jpg",
                clickCount: 0
            },
            {
                catName: "Bob",
                catImage: "Bob.jpg",
                clickCount: 0
            }
        ]
    };


    var octopus = {

         init: function() {
            //set our current cat to the first one in the list
            model.currenCat = model.cats[0];

            //tell our views to initialisze
            viewList.init();
            viewMain.init();
            viewAdmin.init();
        },

        getCatsForList: function() {
            return model.cats;
        },

        getCatforImageDisplay: function() {
            return model.currenCat;
        },

        setCatforImageDisplay: function(cat) {
            model.currenCat = cat;
            model.adminVisible = false;
        },

        incrementCatCount: function() {
            model.currenCat.clickCount +=1;
            viewMain.render();
        },

        toggleAdmin: function() {
            model.adminVisible =  !(model.adminVisible);
            viewMain.render();
        },

        getAdminVisibility: function() {
            return model.adminVisible;
        },

        submitForm: function(cname, cimage, ccount) {
            model.currenCat.catName = cname;
            model.currenCat.catImage = cimage;
            model.currenCat.clickCount = parseInt(ccount);
            viewMain.render();
        }

    };


 var viewMain = {
        init: function() {


            // store pointers to our DOM elements for easy access later
            this.$catDiv = $('#catImageFrame');
            this.$catCaption = $('#catCaption');
            this.$catImage = $('#catImage');


            this.$catImage.click(function(){
                octopus.incrementCatCount();
            });

            this.render();

        },
        render: function(){
            //updcate DOM elements with values from the current cat
            var currenCat = octopus.getCatforImageDisplay();
            this.$catImage.css('background-image', 'url("../src/images/' + currenCat.catImage + '")');
            this.$catCaption.html(currenCat.catName);
            this.$catImage.html(currenCat.clickCount);
            viewAdmin.render();

        }
    };


    var viewList = {
        init: function() {
            //store the DOM element for easy access later
            this.$catList = $('#catList');

            this.render();
        },

        render: function(){
            var cat, i, elem;

            //get the cats we'll be rendering from the octopus
            var cats = octopus.getCatsForList();

            // empty the cat list
            this.$catList.html('');

            // loop over cats
            for (var i = 0; i < cats.length; i++) {
                // this is the cat we're currently looping over
                cat = cats[i];

                // make a new cat list item and set its text
                elem = document.createElement('li');
                elem.textContent = cat.catName;

                elem.addEventListener('click', (function(catCopy) {
                    return function() {
                        octopus.setCatforImageDisplay(catCopy);
                        viewMain.render();
                    }
                })(cat));


                //finally, add the element to the list
                this.$catList.append(elem);
            }
        }
    };


  var viewAdmin = {
        init: function() {
            //hide the admin form initially
            //$("#rightForm").hide();
            //adminForm.setAttribute("display","none");
            this.txtCatName = $("#txtCatName");
            this.txtCatImage = $("#txtCatImage");
            this.txtClickCount = $("#txtClickCount");


            // admin button
            document.getElementById("btnAdmin").addEventListener('click', function (event) {
                event.preventDefault();
                octopus.toggleAdmin();
                });

            viewAdmin.render();
        },

        render: function() {
            var currentCat = octopus.getCatforImageDisplay();
            txtCatName.value = currentCat.catName;
            txtCatImage.value = currentCat.catImage;
            txtClickCount.value = currentCat.clickCount;



            //submit button
            document.getElementById("btnSave").addEventListener('click', function (event) {
                event.preventDefault();
                octopus.submitForm(txtCatName.value, txtCatImage.value, txtClickCount.value);
            });

            //make the cancel button just reset the form elements to what they were.
            document.getElementById("btnCancel").addEventListener('click', function (event) {
                event.preventDefault();
                viewMain.render();
            });


            if (octopus.getAdminVisibility())
            {
                $("#rightForm").show();
            }
            else
            {
                $("#rightForm").hide();
            }
        }
    };

    octopus.init();
