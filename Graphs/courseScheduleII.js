// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array
// prerequisites where prerequisites[i] = [ai, bi] indicates
//  that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses. If there are many valid answers,
// return any of them. If it is impossible to finish all courses, return an empty array.

const findOrder = (numCourses, prerequisites) => {
  let list = {};
  let visited = new Set();
  let cycle = new Set();
  let result = [];

  for (let [a, b] of prerequisites) {
    !list[a] ? (list[a] = [b]) : list[a].push(b);
  }

  const dfs = (course) => {
    if (cycle.has(course)) return false;
    if (visited.has(course)) return true;
    cycle.add(course);

    if (list[course]) {
      for (let preq of list[course]) {
        if (!dfs(preq)) return false;
      }
    }

    cycle.delete(course);
    visited.add(course);
    result.push(course);
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return [];
  }

  return result;
};

// console.log(findOrder(2, [[1, 0]]));
console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
);
