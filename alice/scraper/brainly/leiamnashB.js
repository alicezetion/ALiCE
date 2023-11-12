const _required = (variable) => {
  if (variable === "" || variable === undefined) {
      throw ("Param cant be blank");
  }
}

const clean = (data) => {
  let regex = /(<([^>]+)>)/ig;
  data = data.replace(/(<br?\s?\/>)/ig, ' \n');
  return data.replace(regex, '');
};

exports._required = _required;
exports.clean = clean;