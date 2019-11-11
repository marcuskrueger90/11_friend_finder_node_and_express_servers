var config = {
    '.chosen-select': {},
    '.chosen-select-deselect': {
        allow_single_deselect: true
    },
    '.chosen-select-no-single': {
        disable_search_threshold: 10
    },
    '.chosen-select-no-results': {
        no_results_text: 'Oops, nothing found!'
    },
    '.chosen-select-width': {
        width: '95%'
    }
};

$('#submit').on('click', function (event) {
    event.preventDefault();

    var userInput = {
        name: $('#name').val(),
        photo: $('#photo').val(),
        scores: [
            $('#q1').val(),
            $('#q2').val(),
            $('#q3').val(),
            $('#q4').val(),
            $('#q5').val(),
            $('#q6').val(),
            $('#q7').val(),
            $('#q8').val(),
            $('#q9').val(),
            $('#q10').val()

        ]
        
    };
    console.log(userInput);

    $.post('api/friends'.userInput, (data) => {
        $('#match-name').text(data.name);
        $('#match-image').attr('src', data.photo);

        $('#results-modal').modal('toggle');
    })

})