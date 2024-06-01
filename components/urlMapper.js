export default function mapUrl(url) {
  let b = url;
  if (url.startsWith("1st")) b = url.replace("1st ", "first");
  if (url.startsWith("2nd")) b = url.replace("2nd ", "second");
  if (url.startsWith("3rd")) b = url.replace("3rd ", "third");
  return b;
}