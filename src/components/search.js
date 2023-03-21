function searchMovie() {
  $(".myContent").html("");
  $(".response").html(``);
  $("footer").removeClass("active");
  $.ajax({
    url: `https://api.themoviedb.org/3/search/movie`,
    type: "GET",
    dataType: "json",
    data: {
      api_key: "6874a5d80d08c4e8d246061b12c857a2",
      query: $(".inputSearch").val(),
    },
    success: function (movieSearch) {
      if (movieSearch.total_results == 0) {
        $(".response").html(`<h1 class="movieResponse">Movie Not Found</h1>`);
      } else {
        let search = movieSearch.results;
        const poster = "https://image.tmdb.org/t/p/w500";
        $.each(search, function (i, data) {
          $(".myContent").append(`<a href="#" class="link">
              <div class="items">
                <div
                  class="images"
                  style="background-image: url('${poster}${data.poster_path}')"
                ></div>
                <div class="title">
                  <p>${data.title}</p>
                </div>
              </div>
            </a>
              `);
        });
        $("footer").addClass("active");
        $(".inputSearch").val("");
      }
    },
    error: (err) => {
      alert("Error: " + err.message);
    },
  });
}
$("#btn").on("click", function () {
  searchMovie();
});

$(".inputSearch").on("keyup", function (e) {
  if (e.which === 13) {
    searchMovie();
  }
});
