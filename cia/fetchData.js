let $accordion = document.getElementById("accordion");

let ciaData = null;

fetch(
  "https://storage.scrapinghub.com/items/481434/1/2?apikey=42d9199ae46a4ee7b78dbb50b6fc20b7&format=json&saveas=items_cia_spider_2.json"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Work with JSON data here
    ciaData = data;
    cards = ciaData.map(
      (x, idx) => `
    <div class="card">
    <div class="card-header bg-dark" id="heading${idx}">
      <h2 class="mb-0">
        <button
          class="btn btn-outline-light"
          type="button"
          data-toggle="collapse"
          data-target="#collapse${idx}"
          aria-expanded="true"
          aria-controls="collapse${idx}"
        >
          ${x.title}
        </button>
      </h2>
    </div>

    <div
      id="collapse${idx}"
      class="collapse"
      aria-labelledby="heading${idx}"
      data-parent="#accordion"
    >
      ${x.img ? `<img src=${x.img} class="card-img-top"/>` : '' }
      <div class="card-body">
        ${x.body}
        <br>
        <br>
        <a href=${x.link} target="_blank">Ver más</a>
      </div>
    </div>
  </div>
    `
    );
    for (i = 0; i < cards.length; i++) {
      $accordion.innerHTML += cards[i];
    }
  })
  .catch((err) => {
    // Do something for an error here
  });
