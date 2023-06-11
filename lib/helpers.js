export const parseText = (inputString) => {
  if (!inputString) return;

  var regex = /\(link:\s<a href="(.*?)">.*?<\/a>\s+text:\s(.*?)\)/g;

  // Use the replace method to replace the regex matches with HTML links
  var resultString = inputString.replace(regex, function (match, link, text) {
    return (
      '<a href="' +
      link.trim() +
      '" target="_blank" class="text-link">' +
      text.trim() +
      "</a>"
    );
  });

  return resultString;
};
