export default function useSearchEndPintCreator(searchTermAndValues: Object) {
  const params = new URLSearchParams();
  Object.entries(searchTermAndValues).map(([key, value]) => params.set(key, value));

  return params.toString();
}
