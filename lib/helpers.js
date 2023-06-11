export const parseText = (inputString) => {
  if (!inputString) return;

  var regex = /\(link:\s(.*?)\s+text:\s(.*?)\)/g;

  var resultString = inputString.replace(regex, function (_, link, text) {
    return (
      '<a href="' +
      link +
      '" target="_blank" class="underline">' +
      text +
      "</a>"
    );
  });

  return resultString;
};
