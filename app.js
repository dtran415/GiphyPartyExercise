console.log("Let's get this party started!");

async function getGif(query) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
    const response = await axios.get(url);
    const index = Math.floor(Math.random() * response.data.data.length);
    const image = response.data.data[index].images.original.url;
    $('<img>', {src: image}).css('width', '400px').appendTo($('#gif-container'));
}

$('#search-btn').on('click', (e) => {
    e.preventDefault();
    const query = $('#query').val();
    $('#query').val('');
    getGif(query);
});

$('#remove-img-btn').on('click', () => {
    $('#gif-container').empty();
});