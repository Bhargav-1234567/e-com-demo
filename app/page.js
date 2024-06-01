import styles from "./page.module.css";

let BASE_URL = process.env.BASE_URL;
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
    <>
      <div className="display-3">Categories</div>
      <div className="d-flex flex-wrap gap-1">
        {cats.map((cat) => {
          return (
            <div className="btn btn-primary" key={cat.categoryId}>
              {cat.label}
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Home;
