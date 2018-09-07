function pathFind(path, object) {
  if (path.length === 1){
    return object[path[0]]
  }
  let newObject = object[path[0]];
  let newPath = path.slice(1);
  return pathFind(newPath, newObject);
}

module.exports.pathFind = pathFind
