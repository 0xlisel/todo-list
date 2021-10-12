$(function(){
    $("#add").on("click", function(){
        // gets the value in the input field
        var item = $("input").val();

        // checks if the field value is blank
        if (item !== "") {

            // creates a list element and puts in the value from the input field as the list data
            var listItem = $("<li></li>").text(item);

            // attachs a button element with id='remove' to the list item
            $(listItem).append("<button id='remove'>X</button>");

            // appends the list item to the ol element in the DOM with id='mylist'
            $("#mylist").append(listItem);

            // clears the input field
            $("input").val("");
        }
    });

    // removes corresponding list item when the button is clicked
    $("#mylist").on("click", "#remove", function(){
        $(this).parent().remove();
    });

    // removes all list items
    $("#clear").on("click", function(){
        $("ol").children().remove();
    });
});