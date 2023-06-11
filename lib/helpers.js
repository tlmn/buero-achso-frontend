export const parseText = (inputString) => {
  if (!inputString) return;
  var regex = /\(link:\s((https?:\/\/)?[^ ]+)\s+text:\s(.*?)\)/g;

  var resultString = inputString.replace(regex, function (match, link, text) {
    return '<a href="' + link + '">' + text + "</a>";
  });

  return resultString;
};
