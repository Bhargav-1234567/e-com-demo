let BASE_URL = "https://main--e-com-demo1.netlify.app/api";
async function streamToJson(stream) {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let result = "";
  let done, value;

  while (!done) {
    ({ done, value } = await reader.read());
    result += decoder.decode(value, { stream: !done });
  }

  return JSON.parse(result);
}
const getCategories = async () => {
  let catList = await fetch(BASE_URL + "/categoriesById")
    .then((response) => response.body)
    .then((stream) => streamToJson(stream))
    .then((json) => {
      return json;
    });

  // const jsonForm = await catList.json();
  return catList;
};
async function Home({ params }) {
  console.log({ params });
  let cats = await getCategories();

  return (
    <div className="container">
      <div className="display-3 mb-2">Sub Category</div>
      <div className="d-flex flex-wrap gap-2">
        {cats.filter((item) =>
          item.displayPath.toLowerCase().includes(params.subcate)
        ).length === 0 && <div>No data for this sub category</div>}
        {cats
          .filter((item) =>
            item.displayPath.toLowerCase().includes(params.subcate)
          )
          .map((cat) => {
            return (
              <div class="card" style={{ width: "18rem" }} key={cat.categoryId}>
                <div class="card-body">
                  <h5 class="card-title"> {cat.displayPath}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    {cat.productType}
                  </h6>
                  <p class="card-text">
                    This product is made by {cat.handmade ? "Humans" : "Robots"}
                  </p>
                  <div>{cat.categoryId}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Home;
