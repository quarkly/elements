import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
registerRequireContextHook();
window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {},
    };
  };
