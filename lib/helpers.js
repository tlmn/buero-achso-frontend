export const parseText = (inputString) => {
  if (!inputString) return;

  var regex = /\(link:\s((https?:\/\/)?\S+)\s+text:\s(.*?)\)/g;

  var resultString = inputString.replace(regex, function (_, link, text) {
    return (
      '<a href="' +
      link +
      '" target="_blank" class="text-link">' +
      text +
      "</a>"
    );
  });

  return resultString;
};
