const { HTMLHint } = require("htmlhint");

const runner = {
  // Update this when an API-compatible Pa11y gets released.
  supports: "^6.0.0-alpha || ^6.0.0-beta",
  // Needs to be defined even if this runner does not rely on any scripts.
  scripts: [],
  // needs to be defined even though it’s empty.
  run: () => {},
};

runner.processPage = async (page) => {
  const html = await page.content();
  let messages;

  try {
    messages = HTMLHint.verify(html, {
      "tagname-lowercase": true,
      "attr-lowercase": true,
      "attr-value-double-quotes": true,
      "doctype-first": true,
      "tag-pair": true,
      "spec-char-escape": true,
      "id-unique": true,
      "src-not-empty": true,
      "attr-no-duplication": true,
      "title-require": true,
    });
  } catch (e) {
    return [];
  }

  const typeMap = {
    error: "error",
  };

  return messages.map((message) => ({
    code: message.rule.id,
    message: message.message,
    type: typeMap[message.type],
    context: message.evidence,
    // There is no selector provided by htmlhint.
    selector: "",
    runnerExtras: {
      // Not entirely sure how useful these are. To de-dupe issues perhaps?
      // raw: message.raw,
      // line: message.line,
      // col: message.col,
      link: message.rule.link,
    },
  }));
};

module.exports = runner;
