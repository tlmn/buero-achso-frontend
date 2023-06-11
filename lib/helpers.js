export const parseText = (inputString) => {
  var regex = /\(link:\s(.*?)\s+text:\s(.*?)\)/g;

  var resultString = inputString.replace(regex, function (match, link, text) {
    return '<a href="' + link + '">' + text + "</a>";
  });

  return resultString;
};
