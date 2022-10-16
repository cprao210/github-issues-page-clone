export const getIssues = async (page) => {
  let res = await fetch(
    `https://api.github.com/repos/facebook/react/issues?per_page=30&page=${page}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.json();
};
