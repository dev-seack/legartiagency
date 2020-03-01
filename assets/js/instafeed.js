const ACCESS_TOKEN = "13317723129.3036a85.fe9fd894fc04419184aace1885ce2dfb";
const CLIENT_ID = "	3036a850f2c9440ead7e9f71e4341f3d";
const BASIC_URL = "https://api.instagram.com/v1/users/self/media/recent/";
const MEDIA_COUNT = 9;

$(document).ready(() => {
  $.ajax({
    url: BASIC_URL,
    dataType: "jsonp",
    type: "GET",
    data: { access_token: ACCESS_TOKEN, count: MEDIA_COUNT },
    success: data => {
      data.data.forEach(d => {
        $("#instafeed").append(
          `<a class="feed-link" href="${d.link}">
                <div class="feed-item">
                    <img alt="${d.caption.text}" src="${d.images.standard_resolution.url}">
                </div>
            </a>`
        );
      });
    },
    error: err => {
      console.log(data);
    }
  });
});
