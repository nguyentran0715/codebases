'use es6';

var STRING_COLLATOR = window.Intl && typeof window.Intl === 'object' && new Intl.Collator();
export default (function (option1, option2) {
  var option1Text = option1.text;
  var option2Text = option2.text;
  var comparisonResult = 0;

  if (STRING_COLLATOR) {
    comparisonResult = STRING_COLLATOR.compare(option1Text, option2Text);
  } else if (option1Text > option2Text) {
    comparisonResult = 1;
  } else if (option2Text > option1Text) {
    comparisonResult = -1;
  }

  return comparisonResult;
});