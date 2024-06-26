import Link from "next/link";

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
  let catList = await fetch(BASE_URL + "/categories")
    .then((response) => response.body)
    .then((stream) => streamToJson(stream))
    .then((json) => {
      return json;
    });

  // const jsonForm = await catList.json();
  return catList;
};
async function Home() {
  let cats = await getCategories();

  return (
    <div className="container">
      <div className="display-3 mb-2">Categories</div>
      <div className="d-flex flex-wrap gap-2">
        {cats.map((cat) => {
          return (
            <Link key={cat.categoryId} href={`/${cat.label.toLowerCase()}`}>
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title"> {cat.label}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    {cat.productType}
                  </h6>
                  <p class="card-text">
                    This product is made by {cat.handmade ? "Humans" : "Robots"}
                  </p>
                  <div>{cat.categoryId}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
