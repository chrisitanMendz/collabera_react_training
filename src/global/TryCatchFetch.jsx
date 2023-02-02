const TryCatchFetch = async (URL, params = {}) => {
  try {
    const res = await fetch(URL, params);
    const resJson = await res.json();
    return [resJson, null];
  } catch (err) {
    return [null, err.message];
  }
};

export default TryCatchFetch;
